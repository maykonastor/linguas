#!/usr/bin/env node
/**
 * Proxy Grok para a Missão Frankfurt.
 * A chave XAI fica só neste processo — nunca no GitHub Pages.
 */
import http from "node:http";

const PORT = Number(process.env.PORT || 3041);
const KEY = (process.env.XAI_API_KEY || "").trim();
const MODEL = process.env.XAI_MODEL || "grok-4.5";
const XAI = "https://api.x.ai/v1/chat/completions";

const ALLOW = new Set([
  "https://linguas.autofixtecnologia.app",
  "https://maykonastor.github.io",
  "http://localhost:8080",
  "http://127.0.0.1:8080"
]);

const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const row = hits.get(ip) || [];
  const recent = row.filter((t) => now - t < 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 20;
}

function cors(req, res) {
  const origin = req.headers.origin || "";
  if (ALLOW.has(origin)) res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Max-Age", "86400");
}

function readBody(req, max = 4_000_000) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let n = 0;
    req.on("data", (c) => {
      n += c.length;
      if (n > max) {
        reject(new Error("payload grande demais"));
        req.destroy();
        return;
      }
      chunks.push(c);
    });
    req.on("end", () => {
      try { resolve(JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}")); }
      catch { reject(new Error("JSON inválido")); }
    });
    req.on("error", reject);
  });
}

function systemPrompt(ctx) {
  const now = new Date().toISOString();
  return `Você é o copiloto da missão Auto Fix na Automechanika Frankfurt 2026.
Quem usa: Maykon (intérprete, iPhone 16 + AirPods, Live Translation) e Denis (Google Tradutor). Empresa: Auto Fix Tecnologia Automotiva, Goiânia. Alvo: scanners aftermarket, EV/HV, inversor, ADAS. Não trazer peça na mala.

Reencontro sagrado: Entrance City / Festhalle às 18h nos dias 8 e 9. Hotel: Intercity Wiesbaden, Klingholzstraße 6. Voo ida LA8070 05/set 23:40 GRU T3 → 06/set 16:25 FRA T1. Volta LA8071 12/set 21:30 FRA → GRU. Bosch Karlsruhe dia 7, business casual. Feira 8 e 9. Stuttgart dia 10.

Responda em português, curto, para ler no iPhone em 8 segundos. Se pedirem frase para o stand, entregue EN e DE prontos para falar, uma linha cada.
NUNCA invente localizador, e-ticket, CPF, telefone, PIN ou preço. Se não souber um código, mande abrir o Cofre.
Se a foto for cartão de visita, estande, crachá ou catálogo, extraia um lead e no FINAL da resposta, sozinho numa linha, escreva exatamente:
LEADJSON:{"company":"","person":"","hall":"","mail":"","phone":"","note":""}
note = o que vendem + o que perguntar no follow-up, em PT, 2 linhas.

Contexto ao vivo do aparelho (pode estar incompleto):
${JSON.stringify(ctx || {}, null, 0)}
Agora UTC: ${now}`;
}

function extractLead(text) {
  const m = String(text || "").match(/LEADJSON:\s*(\{[\s\S]*\})/);
  if (!m) return { text: String(text || "").trim(), lead: null };
  try {
    const lead = JSON.parse(m[1]);
    const clean = String(text).replace(/LEADJSON:\s*\{[\s\S]*\}/, "").trim();
    if (!lead.company && !lead.person) return { text: clean, lead: null };
    return { text: clean, lead };
  } catch {
    return { text: String(text || "").trim(), lead: null };
  }
}

function json(res, code, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(code, { "Content-Type": "application/json; charset=utf-8", "Content-Length": Buffer.byteLength(body) });
  res.end(body);
}

const server = http.createServer(async (req, res) => {
  cors(req, res);
  const url = (req.url || "/").split("?")[0];
  if (req.method === "OPTIONS") { res.writeHead(204); res.end(); return; }
  if (req.method === "GET" && (url === "/health" || url === "/missao-ai/health")) {
    json(res, 200, { ok: true, model: MODEL, hasKey: Boolean(KEY) });
    return;
  }
  if (req.method !== "POST" || (url !== "/ask" && url !== "/missao-ai/ask")) {
    json(res, 404, { error: "not found" });
    return;
  }
  const ip = (req.headers["x-forwarded-for"] || req.socket.remoteAddress || "").toString().split(",")[0].trim();
  if (limited(ip)) { json(res, 429, { error: "Devagar. Tenta de novo em um minuto." }); return; }
  if (!KEY) { json(res, 503, { error: "IA sem chave no servidor." }); return; }

  let body;
  try { body = await readBody(req); }
  catch (e) { json(res, 400, { error: e.message }); return; }

  const text = String(body.text || "").slice(0, 2000);
  const image = typeof body.image === "string" && body.image.startsWith("data:image/") ? body.image.slice(0, 3_500_000) : null;
  const history = Array.isArray(body.history) ? body.history.slice(-8) : [];
  if (!text && !image) { json(res, 400, { error: "Manda uma pergunta ou uma foto." }); return; }

  const userContent = image
    ? [
        { type: "image_url", image_url: { url: image, detail: "low" } },
        { type: "text", text: text || "Leia este cartão, estande ou crachá. Extraia o lead e diga 3 perguntas para fazer agora." }
      ]
    : text;

  const messages = [
    { role: "system", content: systemPrompt(body.ctx || {}) },
    ...history.filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string").map((m) => ({
      role: m.role, content: String(m.content).slice(0, 2000)
    })),
    { role: "user", content: userContent }
  ];

  try {
    const grok = await fetch(XAI, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + KEY },
      body: JSON.stringify({
        model: MODEL,
        temperature: 0.4,
        max_tokens: 700,
        messages
      })
    });
    const data = await grok.json().catch(() => ({}));
    if (!grok.ok) {
      json(res, 502, { error: data.error?.message || "Grok falhou" });
      return;
    }
    const raw = data.choices?.[0]?.message?.content || "";
    json(res, 200, extractLead(raw));
  } catch (e) {
    json(res, 502, { error: "Sem rede até o Grok." });
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log("[missao-ai] :" + PORT + " model=" + MODEL + " key=" + (KEY ? "yes" : "NO"));
});
