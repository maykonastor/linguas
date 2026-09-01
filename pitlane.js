/* PITLANE inside Línguas — namespaced so it never collides with the course. */
(function () {
  "use strict";

  const KEYS = {
    hunts: "pitlane_hunts",
    leads: "pitlane_leads",
    notes: "pitlane_notes_d11",
    prep: "pitlane_prep",
    huntFilter: "pitlane_hunt_filter"
  };

  const VAULT_PACK = {"v":1,"salt":"MrGREk39D/1ic2oe0Zikvw==","iv":"xhdHYYzWF4PbU670","data":"6k/7V5e03wc1Y4EQ7UdFmPKnm65XOHs5iig3oophXUDAdUJJCz7AnMpdUkXlQ9xP6lf0jKsJ99mTZiRaJx6HZPvgekp5neACUjp+JP1HDnr/ILIb2vgtzXSh8rANnlAM1EtpxxjV1cWccmQf4/3A2GaEBFuQVlwwCB3DGUp8DO9ZohdUIr99VnK5mflFFmO9qUnm2L4ndOltKmvN8jHz/rEwQ5Z1VO7Aju9FA9k+fkC5FKsCU7XeoidnjtFXntX0gYGWjPeN/QfISrgbnFmpNMIX1xe+2/KIWk0SN2QO45H/GL9flkZhXV43IaDcON6VaXazLDTGsx8/fkr14omce0dy1AWFCjM3Trtq883GwaQSN4vLcvjAGXgYksqHZ6NlRpPbFzVUR5Ip5/PRO/ehMPa+qb9Yj2klkF3Pd31fGVJp7DkbwjawozaVRUKt5uzibnn43VXUh2t3NAfUCJVqGt5FoZimxVD/fM6iLEKt1BlPjxs2uffzyD5epl/cwWRWk4/SG+52g8ddqU4eq2XqOvgAYkVRCcUsIdnCpNgkR/5GqD2QXzhbFdM/arvfO2KoKWzZtdRRaQvelqBPWdNexfeEYCqsZwQK/Ghqudr2thHLZPNssJhuSfhsMNyov7XIWq8XypGjN8BjgHScElHfo3dMZYBfjQPFYwJhE8g5/6CpuzQ/txWG9FJUzqEVUv58AlDTxvrchAjvoflnrH1fIDR49ESFgL0bCq/9Kk6QvVTVpWAnt4jP6+g44kBfiQnX7BJ0FK+RJmXkyRFkC8LIRCXgIVg44jdv8xi8cWV0lRtQnzx2fofUhbuKF9z3lgCGD9X/AuG2e7wakz4bHgzAtMjzcWsJAQRhqQupOv/AdylX3csr/YRlKVRvonYIT1kKmp8nZl5KIG/1MGRqNHRE2MjuodNnDAz1/0ILqiIBe018OHZ8ahbMDsKBikBYEYWBoJJBlXVBIrz3rki7PvQYQBLRhGcOpcQky75bPzayjLukWZ3HhsyRgTWYR2vnba6FffuIJ6U6oxmkJsjb5OlAsheCyZub6v5JWjbUgv8wHW0eZICjjR87VDa0fmWio84b1o9Ahutq5FPlduLsfiDCW+pvLG0zxLeM7fsC3xkc5TLAqiblP7P8l/mBMuKpeiZfacvFlhVMGBwlmOxRaKW/b/Rv3CqrrU9DKPZaeLS2NiMTbKugPZq/PwOe2aVpRqfCu2dGPn8G3zKDxzPUkJHCVsnVx9r4ASqvLp6b8XNHeFeh7bxSLO4rnpMIXBzsGfgH6cN6G2Lo+o6EnbvHj8aR/gzJoRngGoG+c9SxSg3GdmQI5CSm6QOj5hqRAVfuoR/AVtK4sAKp8uGlv35bAxyb64Q42tQswjdsyAdzvRTUvYkw/AQdneRZtd0RjspoYu/9IKrSzaECWRavnSVPUznlchNTrgOQL8BixrxScC5fOLdYyielH4xoAnCNMAQlEXVcT37G5pJxO2pvrtHEKVgqJ3/O1IxOGnVfbDmsMTKxwMQsjLx6ol33rl3QbtCkCZ/HLt/S9hPy2us1Qcozt1imNH1iBTxlhfnV7mhPF0VWadK1vYmNZS85/z4CNhoKi+5Rc73QZ8SHvwF/IFNcrxPSZmzeDb1H26CqmYpUbh8UWgopeu/P5xyTl8vRkFADRieD4CYr8MIU35nRR2+5vDJTOE5sIhpUfe3u/cQoQCpw+e2or2g6REEtTngahiWicvgE6hkErWeq1SPcO1QB/70RK4NdUW5uB193t3Sbvwq0k/lMNePomHYZlBnPUITACJRj8SLSBu9MohB9mv9AP9oHfGFgHRsSsNufCs5cTLPG56wZO/8BPpFqhkheupck4LDiiYBuqVHVhGUaoXhnyLDsArlCwegywFX0s6DciyoKseMXAkuiPOChZvI8KmMzr2QCLk8O6tQWeAqM4orHTNNF042wbG1YzEtEDQ9o9KucfNErzlASaVTYIzAUik2AHL2OdXHNCuNfHDZhoVEdBnqBal3qIEjvbaiJJ1bTD/Aq4wNHTk5778GlOzB84MZF+P924Bt2uqCa0+j1cDF8CVlNR3EVB1O3j6vfpEkLnGDm2HMAl77neBkX3PGvOukmf4R/tmJkoEsT9duxh9Y3M3SLf9cPRWENDxlxQFSFj9yCNJXhyi28bqxgD9hiN+XEEPbJoWSb+tCsvmawS5kkm9IoEfOS7cYz0IO79Vc0zj8j08KfaLlhX+BjuYDD8nrV9iBLX+45S9dQYWWn7vutuLfZnde+lHX/Da8TzIjq8+96lKzQlVpSDcrU6Is0l1/yAkUf2Pxa8/akO6r6597+Wg=="};

  const EVENTS = [
    { id:"bus-pick", at:"2026-09-04T20:30:00-03:00", end:"2026-09-04T21:00:00-03:00", title:"Retirar passagem", sub:"Guichê Expresso São Luiz · Terminal Goiânia", tab:"rota" },
    { id:"bus-go", at:"2026-09-04T21:00:00-03:00", end:"2026-09-05T13:00:00-03:00", title:"Ônibus GYN → Tietê", sub:"Poltronas 75 e 79 · cama · chega ~13:00", tab:"rota" },
    { id:"tiete", at:"2026-09-05T13:00:00-03:00", end:"2026-09-05T20:40:00-03:00", title:"São Paulo → GRU T3", sub:"Buffer. Inter / Infinite = sala VIP no T3.", tab:"rota" },
    { id:"checkin", at:"2026-09-05T20:40:00-03:00", end:"2026-09-05T23:40:00-03:00", title:"Check-in LATAM T3", sub:"3h antes. Passaporte. Equipe FIEMG no embarque.", tab:"cofre" },
    { id:"flight-out", at:"2026-09-05T23:40:00-03:00", end:"2026-09-06T16:25:00+02:00", title:"Voo GRU → FRA", sub:"LA8070 · 777. Esperar o grupo na saída.", tab:"cofre" },
    { id:"arrive", at:"2026-09-06T16:25:00+02:00", end:"2026-09-06T18:30:00+02:00", title:"FRA · esperar o grupo", sub:"Não pegar S-Bahn sozinho. Ônibus Wiesbaden.", tab:"rota" },
    { id:"hotel", at:"2026-09-06T18:30:00+02:00", end:"2026-09-07T07:15:00+02:00", title:"Hotel Intercity + livre", sub:"Klingholzstraße 6. Amanhã 07:15 Bosch.", tab:"cofre" },
    { id:"bosch-go", at:"2026-09-07T07:15:00+02:00", end:"2026-09-07T08:50:00+02:00", title:"Saída para Bosch Karlsruhe", sub:"~1h30. Business casual. Sapato fechado.", tab:"rota" },
    { id:"bosch", at:"2026-09-07T08:50:00+02:00", end:"2026-09-07T16:00:00+02:00", title:"Planta Bosch Aftermarket", sub:"Peças, oficina, logística. Depois Römerberg.", tab:"caca" },
    { id:"dinner", at:"2026-09-07T18:00:00+02:00", end:"2026-09-07T21:00:00+02:00", title:"Jantar Zum Schwarzen Stern", sub:"21h metrô de volta ao hotel.", tab:"rota" },
    { id:"fair1-go", at:"2026-09-08T08:00:00+02:00", end:"2026-09-08T09:00:00+02:00", title:"Hotel → Festhalle", sub:"Hbf plat. 4 → Frankfurt Hbf → U4. 50–60 min.", tab:"rota" },
    { id:"photo", at:"2026-09-08T09:00:00+02:00", end:"2026-09-08T10:00:00+02:00", title:"Foto oficial Festhalle", sub:"Com o grupo. Depois caça solo EV / scanner.", tab:"caca" },
    { id:"fair1", at:"2026-09-08T10:00:00+02:00", end:"2026-09-08T18:00:00+02:00", title:"Feira dia 1 — caça solo", sub:"P1: E-mobility, ADAS, scanners. Reencontro 18h.", tab:"caca" },
    { id:"meet8", at:"2026-09-08T18:00:00+02:00", end:"2026-09-08T19:30:00+02:00", title:"Reencontro Festhalle", sub:"Entrance City / Festhalle. Não inventar outro ponto.", tab:"agora" },
    { id:"fair2-go", at:"2026-09-09T08:00:00+02:00", end:"2026-09-09T09:00:00+02:00", title:"Saída hotel — só vocês dois", sub:"Mesmo commute. Texa é o P1 do dia.", tab:"rota" },
    { id:"fair2", at:"2026-09-09T09:00:00+02:00", end:"2026-09-09T18:00:00+02:00", title:"Feira dia 2 — Texa / ZF / EV", sub:"Texa Hall 8.0 E96. ZF e Brasil 5.1 opcionais.", tab:"caca" },
    { id:"meet9", at:"2026-09-09T18:00:00+02:00", end:"2026-09-09T19:30:00+02:00", title:"Reencontro Festhalle", sub:"Mesmo ponto. Volta com a delegação.", tab:"agora" },
    { id:"stutt", at:"2026-09-10T07:00:00+02:00", end:"2026-09-10T17:40:00+02:00", title:"Stuttgart com o grupo", sub:"Porsche 09:15 · Mercedes 14:10 · MotorWorld 16:40", tab:"rota" },
    { id:"free", at:"2026-09-11T09:00:00+02:00", end:"2026-09-11T18:00:00+02:00", title:"Dia livre / feira extra", sub:"Heidelberg cancelado. Fechar P1 que sobrou.", tab:"caca" },
    { id:"fair-last", at:"2026-09-12T09:00:00+02:00", end:"2026-09-12T12:00:00+02:00", title:"Última manhã de feira", sub:"Só se a mala já estiver no depósito.", tab:"caca" },
    { id:"checkout", at:"2026-09-12T12:00:00+02:00", end:"2026-09-12T17:30:00+02:00", title:"Check-out 12h", sub:"Late checkout = EUR 240. Transfer 17:30.", tab:"cofre" },
    { id:"checkin-back", at:"2026-09-12T18:30:00+02:00", end:"2026-09-12T21:30:00+02:00", title:"Check-in FRA T1", sub:"LA8071 21:30. Chega GRU T3 04:35.", tab:"cofre" },
    { id:"flight-back", at:"2026-09-12T21:30:00+02:00", end:"2026-09-13T04:35:00-03:00", title:"Voo FRA → GRU", sub:"LA8071. Ônibus Tietê 13:00.", tab:"cofre" },
    { id:"tiete-back", at:"2026-09-13T13:00:00-03:00", end:"2026-09-14T04:45:00-03:00", title:"Tietê → Goiânia", sub:"Poltronas 75 e 79 · chega 04:45.", tab:"rota" }
  ];

  const DAYS = [
    { date:"2026-09-04", label:"04 sexta · ônibus", items:[
      { t:"20:30", d:"Retirar passagem", s:"Guichê Expresso São Luiz · Terminal Goiânia · Rua 44, 399" },
      { t:"21:00", d:"Embarque GYN → SP", s:"Poltronas 75 e 79 · cama · chega Tietê 13:00" }
    ]},
    { date:"2026-09-05", label:"05 sábado · GRU", items:[
      { t:"13:00", d:"Tietê", s:"Av. Cruzeiro do Sul, 1800. Buffer até o voo." },
      { t:"20:40", d:"Check-in LATAM T3", s:"3h antes. Passaporte. Equipe FIEMG no embarque." },
      { t:"23:40", d:"LA8070 GRU → FRA", s:"777 · econômica · 1pc 23kg. Chega 16:25 T1." }
    ]},
    { date:"2026-09-06", label:"06 domingo · Frankfurt", items:[
      { t:"16:25", d:"FRA · esperar o grupo", s:"Não pegar S-Bahn sozinho. Alfândega + mala + ônibus Wiesbaden." },
      { t:"18:00", d:"Hotel + livre", s:"Intercity · Klingholzstraße 6 · check-in 15:00 · café incluso" }
    ]},
    { date:"2026-09-07", label:"07 segunda · Bosch", items:[
      { t:"07:15", d:"Saída do hotel", s:"~1h30. Business casual. Sapato fechado." },
      { t:"08:50", d:"Planta Bosch", s:"Mobility Aftermarket · peças, oficina, logística. Até 14h." },
      { t:"16:00", d:"Römerberg livre", s:"Depois 18h jantar Zum Schwarzen Stern · 21h metrô hotel" }
    ]},
    { date:"2026-09-08", label:"08 terça · feira", items:[
      { t:"08:00", d:"Hotel → Festhalle", s:"Hbf plat. 4 → Frankfurt Hbf → U4 1 parada. 50–60 min." },
      { t:"09:00", d:"Foto oficial Festhalle", s:"Com o grupo. Depois caça solo EV / scanner." },
      { t:"18:00", d:"Reencontro", s:"Entrance City / Festhalle." }
    ]},
    { date:"2026-09-09", label:"09 quarta · solo", items:[
      { t:"08:00", d:"Saída hotel", s:"Mesmo commute. Só vocês dois na feira." },
      { t:"P1", d:"Texa Hall 8.0 E96", s:"Scanner. ZF e Pavilhão Brasil 5.1 opcionais." },
      { t:"18:00", d:"Festhalle de novo", s:"Mesmo ponto de reencontro." }
    ]},
    { date:"2026-09-10", label:"10 quinta · Stuttgart", items:[
      { t:"07:00", d:"Ônibus do grupo", s:"Porsche 09:15 · almoço Calwer Straße · Mercedes 14:10 · MotorWorld 16:40" }
    ]},
    { date:"2026-09-11", label:"11 sexta · livre", note:"Heidelberg fora. Feira abre 09–18. Usem para fechar P1 que sobrou.", notes:true },
    { date:"2026-09-12", label:"12 sábado · saída", items:[
      { t:"09–12", d:"Feira ainda abre", s:"Só se a mala já estiver no depósito do hotel." },
      { t:"12:00", d:"Check-out", s:"Late checkout = EUR 240/quarto. Transfer 17:30." },
      { t:"21:30", d:"LA8071 FRA → GRU", s:"Check-in 18:30 · T1 → T3 · chega 04:35" }
    ]},
    { date:"2026-09-13", label:"13–14 · casa", items:[
      { t:"13:00", d:"Tietê → Goiânia", s:"Poltronas 75 e 79 · Expresso São Luiz · chega 04:45" }
    ]}
  ];

  const LINES = [
    { id:"intro", tag:"stand", pt:"Somos da Auto Fix, oficina / tecnologia automotiva no Brasil. Procuramos scanners e soluções para elétricos e híbridos.", en:"We are Auto Fix, an automotive technology company from Brazil. We are looking for diagnostic scanners and solutions for electric and hybrid vehicles.", de:"Wir sind Auto Fix, ein Unternehmen für Automobiltechnik aus Brasilien. Wir suchen Diagnosescanner und Lösungen für Elektro- und Hybridfahrzeuge." },
    { id:"scanner", tag:"stand", pt:"Vocês têm scanner aftermarket com cobertura de bateria de alta voltagem, inversor e ADAS?", en:"Do you have an aftermarket scanner with coverage for high-voltage battery, inverter and ADAS?", de:"Haben Sie einen Aftermarket-Scanner mit Abdeckung für Hochvoltbatterie, Inverter und ADAS?" },
    { id:"dist", tag:"stand", pt:"Vocês têm distribuidor na América do Sul? Com quem falamos depois da feira?", en:"Do you have a distributor in South America? Who should we speak with after the show?", de:"Haben Sie einen Vertriebspartner in Südamerika? Mit wem sollen wir nach der Messe sprechen?" },
    { id:"card", tag:"stand", pt:"Posso levar catálogo e o seu cartão? Entramos em contato na semana que vem.", en:"May I take a catalog and your business card? We will follow up next week.", de:"Darf ich einen Katalog und Ihre Visitenkarte mitnehmen? Wir melden uns nächste Woche." },
    { id:"diff", tag:"stand", pt:"Qual a diferença desta versão para a versão de aftermarket / oficina independente?", en:"What is the difference between this version and the aftermarket version for independent workshops?", de:"Was ist der Unterschied zwischen dieser Version und der Aftermarket-Version für freie Werkstätten?" },
    { id:"train", tag:"stand", pt:"Vocês oferecem treinamento técnico remoto para o Brasil?", en:"Do you offer remote technical training for Brazil?", de:"Bieten Sie Remote-Schulungen für Brasilien an?" },
    { id:"price", tag:"stand", pt:"Qual a faixa de preço e o prazo de entrega para o Brasil?", en:"What is the price range and lead time to Brazil?", de:"Wie ist die Preisspanne und die Lieferzeit nach Brasilien?" },
    { id:"hotel", tag:"hotel", pt:"Temos reserva no nome Denis Astor Silva e Maykon Astor Yaksic.", en:"We have a reservation under Denis Astor Silva and Maykon Astor Yaksic.", de:"Wir haben eine Reservierung auf den Namen Denis Astor Silva und Maykon Astor Yaksic." },
    { id:"ticket", tag:"feira", pt:"Este é o nosso KombiTicket da Automechanika. Segunda classe, rede RMV.", en:"This is our Automechanika KombiTicket. Second class, RMV network.", de:"Das ist unser Automechanika-KombiTicket. 2. Klasse, RMV-Netz." },
    { id:"help", tag:"sobrevida", pt:"Desculpe, meu alemão é pouco. Pode falar inglês, por favor?", en:"Sorry, my German is limited. Could you speak English, please?", de:"Entschuldigung, mein Deutsch ist begrenzt. Können Sie bitte Englisch sprechen?" },
    { id:"bill", tag:"sobrevida", pt:"A conta, por favor. Aceitam cartão?", en:"The bill, please. Do you take card?", de:"Die Rechnung bitte. Nehmen Sie Karte?" },
    { id:"lost", tag:"feira", pt:"Onde fica a entrada City / Festhalle?", en:"Where is the City / Festhalle entrance?", de:"Wo ist der Eingang City / Festhalle?" }
  ];

  const HUNTS = [
    { id:"texa", pri:"P1", day:"9", name:"Texa — scanner", where:"Hall 8.0 · E96", why:"Diagnóstico. Visita guiada do grupo no dia 9; vocês podem atacar no 8.", ask:["Cobertura HV, inversor e ADAS?","Distribuidor na América do Sul?","Treinamento remoto para o Brasil?"] },
    { id:"bosch", pri:"P1", day:"7", name:"Bosch Aftermarket", where:"Hall 9.0 + planta Karlsruhe", why:"Diagnóstico, equipamento de oficina, EV.", ask:["Linha aftermarket para oficina independente?","Scanner EV / ADAS?","Canal Brasil depois da feira?"] },
    { id:"emob", pri:"P1", day:"8", name:"E-mobility / High Voltage", where:"Festhalle + halls EV", why:"Bateria, inversor, carregamento, diagnóstico HV.", ask:["Diagnóstico de pack HV aftermarket?","Ferramenta de isolamento / serviço?","Lead time para o Brasil?"] },
    { id:"adas", pri:"P1", day:"8", name:"ADAS / calibração", where:"Halls de oficina / diagnóstico", why:"Scanner + alvo + procedimento.", ask:["Kit de alvo + procedimento?","Cobertura de marcas EU?","Treinamento remoto?"] },
    { id:"astemo", pri:"P2", day:"8", name:"Astemo", where:"Hall 3.0 · E60", why:"Grupo visita no dia 8. Peças / sistemas.", ask:["Peças EV / ADAS?","Distribuição América do Sul?"] },
    { id:"zf", pri:"P2", day:"9", name:"ZF", where:"Hall a confirmar", why:"Grupo no dia 9. Transmissão / EV driveline.", ask:["Diagnóstico de driveline EV?","Aftermarket vs OE?"] },
    { id:"br", pri:"P3", day:"9", name:"Pavilhão Brasil Autoparts", where:"Hall 5.1", why:"Opcional 16h do dia 9 com o grupo.", ask:["Networking e follow-up Brasil."] }
  ];

  const PREP = [
    { id:"lang", who:"both", label:"Baixar PT + EN + DE no tradutor" },
    { id:"airpods", who:"maykon", label:"Testar AirPods 2 minutos · Live Translation" },
    { id:"google", who:"denis", label:"Google Tradutor modo conversa + pacotes offline" },
    { id:"badge", who:"both", label:"Imprimir crachá Automechanika" },
    { id:"kombi", who:"maykon", label:"Imprimir KombiTicket RMV" },
    { id:"denis_badge", who:"denis", label:"Crachá Denis no app (ainda pendente)" },
    { id:"pass", who:"both", label:"Passaporte na mão + foto no celular" },
    { id:"cards", who:"both", label:"Cartões Inter / Infinite e app da sala VIP" }
  ];

  const SUBS = [
    { id:"agora", label:"Agora" },
    { id:"rota", label:"Rota" },
    { id:"caca", label:"Caça" },
    { id:"falar", label:"Falar" },
    { id:"cofre", label:"Cofre" }
  ];

  const PIT = {
    tab: "agora",
    vault: null,
    huntFilter: localStorage.getItem(KEYS.huntFilter) || "p1",
    q: "",
    timer: null,
    live: {}
  };

  function px(s) {
    if (typeof window.esc === "function") return window.esc(String(s ?? ""));
    return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
  }
  function loadJSON(k, fb) { try { return JSON.parse(localStorage.getItem(k)) ?? fb; } catch { return fb; } }
  function saveJSON(k, v) { localStorage.setItem(k, JSON.stringify(v)); }
  function who() {
    const u = (((window.USER && (USER.username || USER.name)) || "") + "").toLowerCase();
    if (u.includes("denis")) return "denis";
    return "maykon";
  }
  function ping(msg) { if (typeof toast === "function") toast(msg); }

  async function copyText(text) {
    const value = String(text ?? "");
    try { await navigator.clipboard.writeText(value); ping("Copiado"); return; } catch {}
    const ta = document.createElement("textarea");
    ta.value = value; ta.setAttribute("readonly", ""); ta.style.cssText = "position:fixed;left:-9999px";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); ping("Copiado"); } catch { ping(value); }
    ta.remove();
  }

  function fmtClock(tz) {
    return new Intl.DateTimeFormat("pt-BR", { timeZone: tz, hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date());
  }
  function todayStamp(tz) {
    return new Intl.DateTimeFormat("en-CA", { timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
  }
  function until(date) {
    const ms = date - new Date();
    if (ms <= 0) return "agora";
    const m = Math.max(0, Math.round(ms / 60000));
    const d = Math.floor(m / 1440);
    const h = Math.floor((m % 1440) / 60);
    const min = m % 60;
    if (d) return `${d}d ${h}h`;
    if (h) return `${h}h ${min}min`;
    return `${min} min`;
  }
  function heroBits() {
    const st = missionState();
    const target = st.phase === "pre" ? st.first : (st.next ? st.next.atD : st.last);
    const ms = Math.max(0, target - new Date());
    const days = Math.floor(ms / 864e5);
    const hours = Math.floor((ms % 864e5) / 36e5);
    if (st.phase === "done") return { num: "—", unit: "missão encerrada", small: "" };
    if (st.phase === "pre") return { num: String(Math.max(0, days)), unit: days === 1 ? "dia para o embarque" : "dias para o embarque", small: "" };
    if (days > 0) return { num: String(days), small: String(hours).padStart(2, "0") + "h", unit: "até o próximo movimento" };
    return { num: String(hours), small: String(Math.floor((ms % 36e5) / 6e4)).padStart(2, "0"), unit: "horas · minutos" };
  }

  function missionState(now) {
    now = now || new Date();
    const events = EVENTS.map((e) => ({ ...e, atD: new Date(e.at), endD: new Date(e.end) }));
    const current = [...events].reverse().find((e) => now >= e.atD && now < e.endD) || null;
    const upcoming = events.filter((e) => e.atD > now).slice(0, 3);
    const next = upcoming[0] || null;
    const first = events[0].atD;
    const last = events[events.length - 1].endD;
    let phase = "trip";
    if (now < first) phase = "pre";
    if (now >= last) phase = "done";
    return { current, next, upcoming, phase, first, last };
  }

  function huntProgress() {
    const done = loadJSON(KEYS.hunts, {});
    const p1 = HUNTS.filter((h) => h.pri === "P1");
    const prep = loadJSON(KEYS.prep, {});
    const vis = PREP.filter((p) => p.who === "both" || p.who === who());
    return {
      p1Done: p1.filter((h) => done[h.id]).length, p1: p1.length,
      allDone: HUNTS.filter((h) => done[h.id]).length, all: HUNTS.length,
      leads: loadJSON(KEYS.leads, []).length,
      prepDone: vis.filter((p) => prep[p.id]).length, prep: vis.length
    };
  }

  const PLACES = {
    gruT3: { lat: -23.4273, lng: -46.4813, name: "GRU Terminal 3 LATAM" },
    tiete: { lat: -23.5162, lng: -46.6246, name: "Rodoviária Tietê" },
    festhalle: { lat: 50.1116, lng: 8.6508, name: "Festhalle Frankfurt Messe" },
    hotel: { lat: 50.0708, lng: 8.2445, name: "Intercity Wiesbaden" },
    fraT1: { lat: 50.0379, lng: 8.5622, name: "FRA Terminal 1" },
    bosch: { lat: 49.0047, lng: 8.3858, name: "Bosch Karlsruhe" },
    goiania: { lat: -16.6739, lng: -49.2556, name: "Terminal Rodoviário de Goiânia" }
  };
  const FLIGHTS = {
    out: { iata: "LA8070", icao: "LAN8070", from: "GRU", to: "FRA", dep: "23:40", arr: "16:25", label: "ida GRU → FRA" },
    back: { iata: "LA8071", icao: "LAN8071", from: "FRA", to: "GRU", dep: "21:30", arr: "04:35", label: "volta FRA → GRU" }
  };

  function uberTo(p) {
    const n = encodeURIComponent(p.name);
    return `https://m.uber.com/ul/?action=setPickup&pickup=myLocation&dropoff[latitude]=${p.lat}&dropoff[longitude]=${p.lng}&dropoff[nickname]=${n}`;
  }
  function mapsTo(p, mode) {
    return `https://maps.apple.com/?daddr=${p.lat},${p.lng}&q=${encodeURIComponent(p.name)}&dirflg=${mode || "d"}`;
  }
  function wazeTo(p) {
    return `https://waze.com/ul?ll=${p.lat},${p.lng}&navigate=yes&q=${encodeURIComponent(p.name)}`;
  }
  function translateUrl() {
    return who() === "maykon"
      ? "translate://"
      : "https://translate.google.com/?sl=pt&tl=de&op=tc";
  }
  function openTranslate() {
    const m = who() === "maykon";
    localStorage.setItem("pit_tr_day", todayStamp("America/Sao_Paulo"));
    if (m) {
      window.location.href = "translate://";
      setTimeout(() => { window.location.href = "https://translate.google.com/?sl=pt&tl=de&op=tc"; }, 900);
    } else {
      window.location.href = "googletranslate://";
      setTimeout(() => { window.location.href = "https://translate.google.com/?sl=pt&tl=de&op=tc"; }, 700);
    }
  }
  function activeFlight() {
    const now = new Date();
    const outEnd = new Date("2026-09-06T18:00:00+02:00");
    return now < outEnd ? FLIGHTS.out : FLIGHTS.back;
  }
  function wxWord(code) {
    if (code === 0) return "céu limpo";
    if (code <= 3) return "poucas nuvens";
    if (code <= 48) return "neblina";
    if (code <= 67) return "chuva";
    if (code <= 77) return "neve";
    if (code <= 82) return "aguaceiro";
    if (code >= 95) return "trovoada";
    return "variável";
  }

  function near(place, km) {
    if (!PIT.here) return false;
    const dlat = (PIT.here.lat - place.lat) * 111;
    const dlng = (PIT.here.lng - place.lng) * 111 * Math.cos(place.lat * Math.PI / 180);
    return Math.hypot(dlat, dlng) < km;
  }

  function copilotModel() {
    const st = missionState();
    let id = (st.current && st.current.id) || (st.phase === "pre" ? "pre" : "done");
    if (near(PLACES.tiete, 5) && new Date() < new Date("2026-09-05T21:00:00-03:00")) id = "tiete";
    if (near(PLACES.gruT3, 4) && new Date() < new Date("2026-09-06T00:00:00-03:00")) id = "checkin";
    if (near(PLACES.festhalle, 2)) {
      if (id !== "meet8" && id !== "meet9") id = "fair1";
    }
    const f = activeFlight();
    const gru = PLACES.gruT3;
    const tr = translateUrl();
    const db = "https://www.bahn.com/de";
    const rmv = "https://www.rmv.de/c/de/fahrplan/fahrplanauskunft";
    const fr24 = `https://www.flightradar24.com/data/flights/${f.iata.toLowerCase()}`;
    const aware = `https://www.flightaware.com/live/flight/${f.icao}`;
    const latam = "https://www.latamairlines.com/br/pt/acompanhe-seu-voo";
    const lounge = "https://maps.apple.com/?q=LATAM%20Lounge%20GRU%20T3";
    let title = "Próximo passo";
    let sub = st.current ? st.current.sub : "";
    let primary = { label: "Ver a rota", tab: "rota" };
    let extra = [];

    if (id === "pre" || id === "bus-pick") {
      title = "Antes do ônibus";
      sub = "Crachá impresso, idiomas baixados, passaporte na mão.";
      primary = { label: who() === "maykon" ? "Abrir Traduzir e baixar DE" : "Abrir Google Tradutor", href: tr, translate: true };
      extra = [
        { label: "Rota do embarque", tab: "rota" },
        { label: "Mapa do terminal", href: mapsTo(PLACES.goiania) }
      ];
    } else if (id === "bus-go") {
      title = "No ônibus para São Paulo";
      sub = "Chegada Tietê ~13:00. Depois o app já deixa o Uber do T3 pronto.";
      primary = { label: "Ver o voo LA8070", href: fr24 };
      extra = [{ label: "Frases do aeroporto", tab: "falar" }];
    } else if (id === "tiete") {
      title = "Tietê → GRU T3";
      sub = "LATAM é o Terminal 3. Carro 50–70 min. Vocês têm buffer enorme até o check-in 20:40.";
      primary = { label: "Chamar Uber para o T3", href: uberTo(gru) };
      extra = [
        { label: "Waze", href: wazeTo(gru) },
        { label: "Mapas", href: mapsTo(gru) }
      ];
    } else if (id === "checkin") {
      title = "Check-in LATAM T3";
      sub = "Passaporte. Equipe FIEMG no embarque. Inter / Infinite = sala VIP.";
      primary = { label: "Acompanhar LA8070 ao vivo", href: fr24 };
      extra = [
        { label: "LATAM", href: latam },
        { label: "Lounge T3", href: lounge }
      ];
    } else if (id === "flight-out" || id === "flight-back") {
      title = id === "flight-out" ? "No ar · GRU → FRA" : "No ar · FRA → GRU";
      sub = "Quando aterrissar: esperar o GRUPO. Não pegar S-Bahn sozinho.";
      primary = { label: "Radar do voo " + f.iata, href: fr24 };
      extra = [
        { label: "FlightAware", href: aware },
        { label: "Frases", tab: "falar" }
      ];
    } else if (id === "arrive") {
      title = "FRA · esperar o grupo";
      sub = "Alfândega + mala + ônibus Wiesbaden. Não inventar caminho.";
      primary = { label: "Hotel no mapa", href: mapsTo(PLACES.hotel) };
      extra = [
        { label: "Radar LA8070", href: fr24 },
        { label: "Cofre / localizador", tab: "cofre" }
      ];
    } else if (id === "bosch-go" || id === "bosch") {
      title = "Bosch Karlsruhe";
      sub = "Business casual, sapato fechado. ~1h30 de van/ônibus.";
      primary = { label: "Mapa Bosch Karlsruhe", href: mapsTo(PLACES.bosch) };
      extra = [{ label: "Traduzir", href: tr, translate: true }];
    } else if (id === "fair1-go" || id === "fair2-go") {
      title = "Hotel → Festhalle";
      sub = "Wiesbaden Hbf plat. 4 → Frankfurt Hbf → U4 1 parada. 50–60 min.";
      primary = { label: "Abrir tradução agora", href: tr, translate: true };
      extra = [
        { label: "Trem / Maps", href: mapsTo(PLACES.festhalle, "r") },
        { label: "RMV", href: rmv }
      ];
    } else if (id === "photo" || id === "fair1" || id === "fair2" || id === "free" || id === "fair-last") {
      title = "Na feira";
      sub = "Três perguntas. Cartão + foto. Reencontro 18h Entrance City / Festhalle.";
      primary = { label: "Abrir tradução agora", href: tr, translate: true };
      extra = [
        { label: "Caça P1", tab: "caca" },
        { label: "Festhalle 18h", href: mapsTo(PLACES.festhalle) }
      ];
    } else if (id === "meet8" || id === "meet9") {
      title = "Reencontro agora";
      sub = "Entrance City / Festhalle. Não inventar outro ponto.";
      primary = { label: "Mapa Festhalle", href: mapsTo(PLACES.festhalle) };
      extra = [{ label: "Avisar no WhatsApp", href: "https://wa.me/?text=" + encodeURIComponent("Estou no reencontro · Entrance City / Festhalle") }];
    } else if (id === "stutt") {
      title = "Stuttgart com o grupo";
      sub = "Porsche 09:15 · Mercedes 14:10 · MotorWorld 16:40.";
      primary = { label: "Traduzir", href: tr, translate: true };
    } else if (id === "checkout" || id === "checkin-back") {
      title = "Saída de Frankfurt";
      sub = "Mala no depósito. Transfer 17:30. Check-in 18:30 · LA8071 21:30.";
      primary = { label: "Radar LA8071", href: "https://www.flightradar24.com/data/flights/la8071" };
      extra = [
        { label: "FRA T1", href: mapsTo(PLACES.fraT1) },
        { label: "LATAM", href: latam }
      ];
    } else if (id === "tiete-back") {
      title = "Tietê → Goiânia";
      sub = "Ônibus 13:00 · poltronas 75 e 79.";
      primary = { label: "Mapa Tietê", href: mapsTo(PLACES.tiete) };
    } else if (st.phase === "done") {
      title = "Follow-up";
      sub = "Relatório Auto Fix e e-mails dos leads.";
      primary = { label: "Abrir os leads", tab: "caca" };
    }

    return { id, title, sub, primary, extra: extra.slice(0, 3), flight: f, fr24, latam };
  }

  function copilotPanel() {
    const c = copilotModel();
    const live = PIT.live || {};
    const ac = live.flight;
    const fl = c.flight;
    const primary = c.primary.href
      ? `<a class="pit-btn" href="${px(c.primary.href)}" ${c.primary.translate ? 'data-translate="1"' : ""}>${px(c.primary.label)}</a>`
      : `<button class="pit-btn" data-pit-tab="${px(c.primary.tab)}">${px(c.primary.label)}</button>`;
    const extras = c.extra.map((x) => x.href
      ? `<a class="pit-btn ghost" href="${px(x.href)}" ${x.translate ? 'data-translate="1"' : ""}>${px(x.label)}</a>`
      : `<button class="pit-btn ghost" data-pit-tab="${px(x.tab)}">${px(x.label)}</button>`
    ).join("");
    const alt = ac
      ? `${Math.round((ac.alt_baro || ac.alt_geom || 0))} ft · ${Math.round(ac.gs || 0)} kt`
      : "programado";
    const where = ac && ac.lat ? `${ac.lat.toFixed(2)}°, ${ac.lon.toFixed(2)}°` : `${fl.from} → ${fl.to}`;
    return `<section class="pit-copilot">
      <div class="pit-kicker">Fazer agora</div>
      <h3>${px(c.title)}</h3>
      <p class="pit-muted">${px(c.sub)}</p>
      ${primary}
      <div class="pit-btns two">${extras}</div>
      <div class="pit-flight">
        <div class="pit-kicker">${px(fl.iata)} · ${px(fl.label)}</div>
        <div class="xx" id="pit-flight-line">${px(where)} · ${px(alt)}</div>
        <p class="pit-muted" style="margin-top:6px">Partida ${px(fl.dep)} · chegada ${px(fl.arr)}</p>
        <div class="pit-btns two" style="margin-top:10px">
          <a class="pit-btn ghost sm" href="${px(c.fr24)}">Flightradar</a>
          <a class="pit-btn ghost sm" href="${px(c.latam)}">LATAM</a>
        </div>
      </div>
    </section>`;
  }

  function linguasCard() {
    return `<button type="button" class="pit-linguas" onclick="nav('home')">
      <b>Inglês Turbo</b>
      <span>Abrir o curso de idiomas — frases, revisão e alemão.</span>
    </button>`;
  }

  async function refreshLive() {
    try {
      const [wxR, eurR] = await Promise.all([
        fetch("https://api.open-meteo.com/v1/forecast?latitude=50.11&longitude=8.68&current=temperature_2m,weather_code,precipitation").then((r) => r.json()).catch(() => null),
        fetch("https://economia.awesomeapi.com.br/json/last/EUR-BRL").then((r) => r.json()).catch(() => null)
      ]);
      if (wxR && wxR.current) PIT.live.wx = wxR.current;
      if (eurR && eurR.EURBRL) PIT.live.eur = +eurR.EURBRL.bid;
    } catch (e) {}
    try {
      const f = activeFlight();
      let ac = null;
      for (const url of [
        "https://api.adsb.lol/v2/callsign/" + f.icao,
        "https://api.airplanes.live/v2/callsign/" + f.icao
      ]) {
        try {
          const r = await fetch(url);
          if (!r.ok) continue;
          const j = await r.json();
          ac = (j.ac || [])[0] || null;
          if (ac) break;
        } catch (e) {}
      }
      PIT.live.flight = ac;
    } catch (e) {}
    const liveEl = document.getElementById("pit-live");
    if (liveEl) liveEl.innerHTML = liveChips();
    const line = document.getElementById("pit-flight-line");
    if (line && PIT.live.flight) {
      const ac = PIT.live.flight;
      line.textContent = `${(ac.lat || 0).toFixed(2)}°, ${(ac.lon || 0).toFixed(2)}° · ${Math.round(ac.alt_baro || 0)} ft · ${Math.round(ac.gs || 0)} kt`;
    }
  }

  function liveChips() {
    const L = PIT.live || {};
    const bits = [];
    if (L.eur) bits.push(`Euro <b>R$ ${L.eur.toFixed(2)}</b>`);
    if (L.wx) bits.push(`Frankfurt <b>${Math.round(L.wx.temperature_2m)}° · ${wxWord(L.wx.weather_code)}</b>`);
    if (L.flight) bits.push(`${activeFlight().iata} <b>no ar</b>`);
    else bits.push(`${activeFlight().iata} <b>no horário</b>`);
    return bits.join(" · ") || "Ao vivo";
  }

  function subnav() {
    return `<div class="pit-sub">${SUBS.map((s) =>
      `<button class="${PIT.tab === s.id ? "on" : ""}" data-pit-tab="${s.id}">${s.label}</button>`
    ).join("")}</div>`;
  }

  function hero() {
    const st = missionState();
    const bits = heroBits();
    let title = "Pré-voo no Brasil";
    let sub = "Baixar idiomas, testar o ouvido, imprimir o crachá.";
    let eta = "Embarque em " + until(st.first);
    if (st.phase === "done") {
      title = "Missão encerrada";
      sub = "Relatório Auto Fix e e-mails de follow-up.";
      eta = "";
    } else if (st.current) {
      title = st.current.title;
      sub = st.current.sub;
      eta = st.next ? "Próximo · " + st.next.title + " · " + until(st.next.atD) : "Último bloco";
    }
    return `<header class="pit-hero">
      <div class="pit-kicker">Auto Fix · Frankfurt 2026</div>
      <div class="pit-count">${px(bits.num)}${bits.small ? `<small>${px(bits.small)}</small>` : ""}</div>
      <div class="pit-unit">${px(bits.unit)}</div>
      <div class="pit-clocks">
        <div><b>Goiânia</b><span>${fmtClock("America/Sao_Paulo")}</span></div>
        <div><b>Frankfurt</b><span>${fmtClock("Europe/Berlin")}</span></div>
      </div>
      <div class="pit-live" id="pit-live">${liveChips()}</div>
      <div class="pit-rule"></div>
      <div class="pit-now">${px(title)}</div>
      <div class="pit-subcopy">${px(sub)}</div>
      ${eta ? `<div class="pit-eta">${px(eta)}</div>` : ""}
    </header>`;
  }

  function viewAgora() {
    const st = missionState();
    const prog = huntProgress();
    const prep = loadJSON(KEYS.prep, {});
    const missing = [];
    if (!prep.lang) missing.push("idiomas");
    if (who() === "maykon" && !prep.airpods) missing.push("AirPods");
    if (who() === "denis" && !prep.google) missing.push("Google Tradutor");
    if (!prep.badge) missing.push("crachá");
    if (who() === "denis" && !prep.denis_badge) missing.push("crachá do Denis");
    const next = st.upcoming.length ? st.upcoming.map((e) => `
      <button data-pit-tab="${e.tab}">
        <div class="t">${px(until(e.atD))}</div>
        <div><div class="d">${px(e.title)}</div><div class="s">${px(e.sub)}</div></div>
      </button>`).join("") : `<p class="pit-muted">Nada na frente.</p>`;
    const m = who() === "maykon";
    const ear = m ? `
      <h2>Ouvido · Maykon</h2>
      <p class="pit-muted">Você traduz. O Denis lê a tela.</p>
      <ol>
        <li>Ajustes → AirPods → Tradução ao vivo → PT, DE, EN.</li>
        <li>App Traduzir → Ao vivo, ou os dois stems.</li>
        <li>Stand barulhento: iPhone na mesa.</li>
        <li>Se falhar: Falar + virar a tela.</li>
      </ol>
      <div class="pit-btns two">
        <a class="pit-btn ghost" href="translate://">Traduzir</a>
        <button class="pit-btn ghost" data-pit-tab="falar">Frases</button>
      </div>` : `
      <h2>Ouvido · Denis</h2>
      <p class="pit-muted">Google Tradutor em modo conversa, pacotes offline.</p>
      <ol>
        <li>Baixar Português, Inglês, Alemão.</li>
        <li>Você em PT, eles em EN ou DE.</li>
        <li>Microfone do iPhone na mesa, não o do fone.</li>
        <li>Depois do stand, salve o lead aqui.</li>
      </ol>
      <div class="pit-btns two">
        <a class="pit-btn ghost" href="https://translate.google.com/?sl=pt&tl=en&op=tc">EN</a>
        <a class="pit-btn ghost" href="https://translate.google.com/?sl=pt&tl=de&op=tc">DE</a>
      </div>`;
    const checks = PREP.filter((p) => p.who === "both" || p.who === who()).map((p) => `
      <label class="pit-check">
        <input type="checkbox" data-prep="${px(p.id)}" ${prep[p.id] ? "checked" : ""}>
        <div>${px(p.label)}</div>
      </label>`).join("");
    return `
      ${copilotPanel()}
      ${missing.length ? `<div class="pit-warn">Antes do ônibus: ${px(missing.join(" · "))}.</div>` : ""}
      <div class="pit-stat">
        <div><b>${prog.p1Done}/${prog.p1}</b><span>P1</span></div>
        <div><b>${prog.leads}</b><span>Leads</span></div>
        <div><b>${prog.prepDone}/${prog.prep}</b><span>Saída</span></div>
      </div>
      <div class="pit-card"><h2>Próximo</h2><div class="pit-next">${next}</div></div>
      <div class="pit-card">${ear}</div>
      <div class="pit-card"><h2>Antes de sair</h2>${checks}</div>
      <div class="pit-card">
        <h2>Reencontro</h2>
        <p style="font-family:var(--serif);font-size:22px;margin:0 0 6px;">Entrance City / Festhalle</p>
        <p class="pit-muted">18h · dias 8 e 9. Se um se perder: WhatsApp + este ponto.</p>
        <div class="pit-btns two">
          <a class="pit-btn ghost" href="https://maps.apple.com/?q=Festhalle%20Frankfurt%20Messe">Festhalle</a>
          <a class="pit-btn ghost" href="https://maps.apple.com/?daddr=Klingholzstra%C3%9Fe%206,%2065189%20Wiesbaden">Hotel</a>
        </div>
      </div>
      <div class="pit-card">
        <h2>Emergência</h2>
        <div class="pit-btns">
          <a class="pit-btn danger" href="tel:+34917883333">Assist Card +34 91 788 3333</a>
          <a class="pit-btn ghost" href="https://wa.me/5491127039665">WhatsApp Assist Card</a>
          <a class="pit-btn ghost" href="https://wa.me/5511947626486">Nathália Drucker</a>
        </div>
      </div>`;
  }

  function viewRota() {
    const todayBr = todayStamp("America/Sao_Paulo");
    const todayDe = todayStamp("Europe/Berlin");
    const st = missionState();
    const currentTitle = (st.current && st.current.title) || "";
    return DAYS.map((day) => {
      const isToday = day.date === todayBr || day.date === todayDe;
      const items = (day.items || []).map((it) => {
        const on = currentTitle && (it.d.includes(currentTitle.slice(0, 12)) || currentTitle.includes(it.d.slice(0, 12)));
        return `<div class="pit-event${on ? " on" : ""}"><div class="t">${px(it.t)}</div><div><div class="d">${px(it.d)}</div><div class="s">${px(it.s || "")}</div></div></div>`;
      }).join("");
      const note = day.note ? `<p class="pit-muted">${px(day.note)}</p>` : "";
      const ta = day.notes ? `<textarea class="pit-field" id="pit-d11" placeholder="O que vamos fazer no dia 11…">${px(localStorage.getItem(KEYS.notes) || "")}</textarea>` : "";
      return `<div class="pit-day${isToday ? " today" : ""}">${px(day.label)}</div><div class="pit-card">${items}${note}${ta}</div>`;
    }).join("");
  }

  function viewCaca() {
    const done = loadJSON(KEYS.hunts, {});
    const prog = huntProgress();
    const filters = [["p1","P1"],["open","Aberto"],["all","Todos"],["8","Dia 8"],["9","Dia 9"]];
    const rows = HUNTS.filter((h) => {
      if (PIT.huntFilter === "p1") return h.pri === "P1";
      if (PIT.huntFilter === "open") return !done[h.id];
      if (PIT.huntFilter === "8" || PIT.huntFilter === "9") return h.day === PIT.huntFilter;
      return true;
    });
    const hunts = rows.map((h) => `
      <label class="pit-hunt${done[h.id] ? " done" : ""}">
        <input type="checkbox" data-hunt="${h.id}" ${done[h.id] ? "checked" : ""}>
        <div>
          <div class="pit-pri">${px(h.pri)} · dia ${px(h.day)}</div>
          <b>${px(h.name)}</b>
          <div class="pit-muted">${px(h.where)} · ${px(h.why)}</div>
          <ul class="pit-ask">${h.ask.map((q) => `<li>${px(q)}</li>`).join("")}</ul>
        </div>
      </label>`).join("") || `<p class="pit-muted">Nada neste filtro.</p>`;
    const leads = loadJSON(KEYS.leads, []);
    const leadHtml = leads.length ? leads.map((l, i) => `
      <div class="pit-lead">
        <b>${px(l.company || "Sem empresa")}</b>
        <div class="pit-muted">${px(l.person || "—")} · ${px(l.hall || "")}</div>
        <div style="margin-top:6px">${px(l.note || "")}</div>
        <div class="pit-muted" style="margin-top:6px">${px(l.mail || "")} ${px(l.phone || "")}</div>
        <button class="pit-btn ghost sm" data-del="${i}" style="margin-top:10px">Apagar</button>
      </div>`).join("") : `<p class="pit-muted">Nenhum lead ainda. No stand: foto + cartão + três linhas.</p>`;
    return `
      <div class="pit-card">
        <h2>Alvo</h2>
        <p>Elétricos, híbridos, scanners. Três perguntas. Cartão + foto + REC.</p>
        <div class="pit-stat" style="margin:14px 0 0">
          <div><b>${prog.p1Done}/${prog.p1}</b><span>P1</span></div>
          <div><b>${prog.allDone}/${prog.all}</b><span>Rota</span></div>
          <div><b>${prog.leads}</b><span>Leads</span></div>
        </div>
      </div>
      <div class="pit-card">
        <h2>Stands</h2>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">
          ${filters.map(([id, label]) =>
            `<button class="pit-btn sm ${PIT.huntFilter === id ? "" : "ghost"}" data-hf="${id}">${label}</button>`
          ).join("")}
        </div>
        ${hunts}
      </div>
      <div class="pit-card">
        <h2>Leads</h2>
        <form id="pit-lead-form">
          <input class="pit-field" id="lCompany" placeholder="Empresa" required>
          <input class="pit-field" id="lPerson" placeholder="Pessoa">
          <input class="pit-field" id="lHall" placeholder="Hall / estande">
          <input class="pit-field" id="lMail" placeholder="E-mail" inputmode="email">
          <input class="pit-field" id="lPhone" placeholder="Telefone / WhatsApp">
          <textarea class="pit-field" id="lNote" placeholder="O que vendem, o que combinaram"></textarea>
          <button class="pit-btn" type="submit">Salvar lead</button>
        </form>
        <div class="pit-btns two" style="margin-top:8px">
          <button class="pit-btn ghost" id="pit-export" type="button">Copiar leads</button>
          <button class="pit-btn ghost" id="pit-share" type="button">Backup</button>
        </div>
        <button class="pit-btn ghost" id="pit-import" type="button" style="margin-top:8px">Colar backup</button>
        ${leadHtml}
      </div>`;
  }

  function viewFalar() {
    const q = PIT.q.trim().toLowerCase();
    const list = LINES.filter((p) => !q || `${p.pt} ${p.en} ${p.de} ${p.tag}`.toLowerCase().includes(q));
    return `
      <div class="pit-card">
        <h2>No stand</h2>
        <p class="pit-muted">Maykon fala. Denis lê. Se o barulho ganhar, Mostrar — vira a tela.</p>
        <input class="pit-search" id="pit-q" placeholder="Buscar: scanner, hotel, conta…" value="${px(PIT.q)}">
      </div>
      ${list.map((p) => `
        <div class="pit-phrase">
          <div class="pt">${px(p.pt)}</div>
          <div class="lang">English</div>
          <div class="xx">${px(p.en)}</div>
          <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">
            <button class="pit-btn sm" data-speak="${p.id}" data-lang="en">Ouvir EN</button>
            <button class="pit-btn ghost sm" data-show="${p.id}" data-which="en">Mostrar</button>
          </div>
          <div class="lang">Deutsch</div>
          <div class="xx">${px(p.de)}</div>
          <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">
            <button class="pit-btn sm" data-speak="${p.id}" data-lang="de">Ouvir DE</button>
            <button class="pit-btn ghost sm" data-show="${p.id}" data-which="de">Mostrar</button>
          </div>
        </div>`).join("") || `<p class="pit-muted">Nenhuma frase.</p>`}`;
  }

  function cell(label, value, copyVal) {
    const copy = copyVal ? ` <button class="pit-copy" data-copy="${px(copyVal)}">copiar</button>` : "";
    return `<div><b>${px(label)}</b><span>${px(value)}</span>${copy}</div>`;
  }

  function viewCofre() {
    const v = PIT.vault;
    if (!v) {
      return `<div class="pit-card pit-lockscreen">
        <div class="pit-kicker">Privado</div>
        <div class="pit-now">Cofre</div>
        <p>Localizador, e-tickets, hotel e documentos. O ano da missão, com FIX na frente.</p>
        <form id="pit-lock">
          <input class="pit-field" id="pit-pin" type="password" inputmode="text" autocomplete="off" placeholder="••••••" maxlength="12">
          <button class="pit-btn" type="submit">Abrir</button>
        </form>
      </div>
      <div class="pit-card">
        <h2>Trem até a feira</h2>
        <p>5–7 min a pé → Wiesbaden Hbf plataforma 4 → RE/RB ~35–40 min → Frankfurt Hbf → U4 sentido Bockenheimer Warte, 1 parada → Festhalle/Messe.</p>
        <div class="pit-btns two" style="margin-top:12px">
          <a class="pit-btn ghost" href="${mapsTo(PLACES.festhalle, "r")}">Maps</a>
          <a class="pit-btn ghost" href="https://www.rmv.de/c/de/fahrplan/fahrplanauskunft">RMV</a>
        </div>
      </div>`;
    }
    const maykonEt = v.flights.maykon.replace(/\s/g, "");
    const denisEt = v.flights.denis.replace(/\s/g, "");
    return `
      <article class="pit-pass">
        <div class="pit-pass-top"><span>LATAM</span><span>LA8070 · IDA</span></div>
        <div class="pit-pass-route">
          <div><b>GRU</b><small>T3 · 05/set 23:40</small></div>
          <div class="pit-pass-line"></div>
          <div class="to"><b>FRA</b><small>T1 · 06/set 16:25</small></div>
        </div>
        <div class="pit-pass-grid">
          ${cell("Localizador", v.flights.pnr, v.flights.pnr)}
          ${cell("Aeronave", "777")}
          ${cell("Maykon", v.flights.maykon, maykonEt)}
          ${cell("Denis", v.flights.denis, denisEt)}
        </div>
      </article>
      <article class="pit-pass">
        <div class="pit-pass-top"><span>LATAM</span><span>LA8071 · VOLTA</span></div>
        <div class="pit-pass-route">
          <div><b>FRA</b><small>T1 · 12/set 21:30</small></div>
          <div class="pit-pass-line"></div>
          <div class="to"><b>GRU</b><small>T3 · 13/set 04:35</small></div>
        </div>
        <div class="pit-pass-grid">
          ${cell("Localizador", v.flights.pnr, v.flights.pnr)}
          ${cell("Check-in", "18:30")}
          <div class="wide"><b>Radar</b><span>LA8071</span> <a class="pit-copy" href="https://www.flightradar24.com/data/flights/la8071">abrir</a></div>
        </div>
      </article>
      <article class="pit-pass">
        <div class="pit-pass-top"><span>Expresso São Luiz</span><span>ÔNIBUS</span></div>
        <div class="pit-pass-grid">
          ${cell("Ida", v.bus.out.split(" · ")[0], v.bus.out.split(" · ")[0])}
          ${cell("Volta", v.bus.back.split(" · ")[0], v.bus.back.split(" · ")[0])}
          <div class="wide"><b>Trecho</b><span>${px(v.bus.out)}</span></div>
          <div class="wide"><b>Volta</b><span>${px(v.bus.back)}</span></div>
        </div>
        <p class="pit-muted" style="margin-top:12px">${px(v.bus.note)}</p>
      </article>
      <article class="pit-pass">
        <div class="pit-pass-top"><span>Intercity</span><span>WIESBADEN</span></div>
        <div class="pit-pass-route">
          <div><b>IN</b><small>06/set 15:00</small></div>
          <div class="pit-pass-line"></div>
          <div class="to"><b>OUT</b><small>12/set 12:00</small></div>
        </div>
        <div class="pit-pass-grid">
          ${cell("Block", v.hotel.block, v.hotel.block)}
          ${cell("Quarto", "Business Twin")}
          <div class="wide"><b>Endereço</b><span>${px(v.hotel.addr)}</span></div>
          <div class="wide"><b>Telefone</b><span>${px(v.hotel.phone)}</span> <a class="pit-copy" href="tel:${px(v.hotel.tel)}">ligar</a></div>
        </div>
        <p class="pit-muted" style="margin-top:12px">${px(v.hotel.note)}</p>
        <div class="pit-btns two" style="margin-top:12px">
          <a class="pit-btn ghost" href="${mapsTo(PLACES.hotel)}">Mapa</a>
          <a class="pit-btn ghost" href="https://wa.me/?text=${encodeURIComponent("Hotel Intercity Wiesbaden, Klingholzstraße 6")}">WhatsApp</a>
        </div>
      </article>
      <article class="pit-pass">
        <div class="pit-pass-top"><span>Automechanika</span><span>RMV</span></div>
        <div class="pit-pass-grid">
          ${cell("Crachá Maykon", v.fair.maykonTicket, v.fair.maykonTicket.replace(/\s/g, ""))}
          ${cell("KombiTicket", v.fair.kombi.split(" · ")[0], v.fair.kombi.split(" · ")[0])}
          <div class="wide"><b>Denis</b><span>${px(v.fair.denis)}</span></div>
        </div>
        <p class="pit-muted" style="margin-top:12px">${px(v.fair.note)}</p>
      </article>
      <article class="pit-pass">
        <div class="pit-pass-top"><span>Assist Card</span><span>PLANO 150</span></div>
        <div class="pit-pass-grid">
          ${cell("Maykon", v.insurance.maykon, v.insurance.maykon.replace(/\s/g, "").slice(0, 11))}
          ${cell("Denis", v.insurance.denis, v.insurance.denis.replace(/\s/g, "").slice(0, 11))}
          <div class="wide"><b>Vigência</b><span>${px(v.insurance.when)}</span></div>
        </div>
        <p class="pit-muted" style="margin-top:12px">${px(v.insurance.note)}</p>
        <a class="pit-btn ghost" style="margin-top:12px" href="tel:+34917883333">Ligar Europa</a>
      </article>
      <article class="pit-pass">
        <div class="pit-pass-top"><span>Auto Fix</span><span>PESSOAS</span></div>
        <div class="pit-pass-grid">
          <div class="wide"><b>Maykon</b><span>${px(v.people.maykon)}</span></div>
          <div class="wide"><b>Denis</b><span>${px(v.people.denis)}</span></div>
          <div class="wide"><b>Empresa</b><span>${px(v.people.company)}</span></div>
          <div class="wide"><b>Drucker</b><span>${px(v.people.drucker)}</span></div>
        </div>
        <p class="pit-muted" style="margin-top:12px">${px(v.cards)}</p>
      </article>
      <button class="pit-btn ghost" id="pit-lock-again">Travar cofre</button>`;
  }

  function body() {
    if (PIT.tab === "rota") return viewRota();
    if (PIT.tab === "caca") return viewCaca();
    if (PIT.tab === "falar") return viewFalar();
    if (PIT.tab === "cofre") return viewCofre();
    return viewAgora();
  }

  function view() {
    return `<div class="pit" id="pit-root">${hero()}<div class="pit-pad">${body()}${linguasCard()}</div></div>`;
  }

  function showCard(text, sub) {
    let el = document.getElementById("pit-big");
    if (!el) {
      el = document.createElement("div");
      el.id = "pit-big";
      el.className = "pit-big";
      document.body.appendChild(el);
    }
    el.innerHTML = `<div class="txt"></div><div class="sub"></div><button class="pit-btn" style="margin-top:28px;max-width:220px">Fechar</button>`;
    el.querySelector(".txt").textContent = text;
    el.querySelector(".sub").textContent = sub || "";
    el.querySelector("button").onclick = () => el.classList.remove("on");
    el.classList.add("on");
  }

  function dumpState() {
    return {
      v: 1,
      hunts: loadJSON(KEYS.hunts, {}),
      leads: loadJSON(KEYS.leads, []),
      prep: loadJSON(KEYS.prep, {}),
      notes: localStorage.getItem(KEYS.notes) || "",
      at: new Date().toISOString()
    };
  }

  function applyState(data) {
    if (!data || typeof data !== "object") throw new Error("backup");
    saveJSON(KEYS.hunts, { ...loadJSON(KEYS.hunts, {}), ...(data.hunts || {}) });
    saveJSON(KEYS.prep, { ...loadJSON(KEYS.prep, {}), ...(data.prep || {}) });
    const mine = loadJSON(KEYS.leads, []);
    const incoming = Array.isArray(data.leads) ? data.leads : [];
    const keyOf = (l) => `${(l.company || "").toLowerCase()}|${(l.person || "").toLowerCase()}|${(l.mail || "").toLowerCase()}`;
    const seen = new Set(mine.map(keyOf));
    incoming.forEach((l) => {
      const k = keyOf(l);
      if (!k.replace(/\|/g, "") || seen.has(k)) return;
      seen.add(k); mine.push(l);
    });
    saveJSON(KEYS.leads, mine);
    if (data.notes && !localStorage.getItem(KEYS.notes)) localStorage.setItem(KEYS.notes, data.notes);
  }

  function b64ToBytes(b64) {
    const bin = atob(b64);
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }

  async function unlockVault(pin) {
    const enc = new TextEncoder();
    const salt = b64ToBytes(VAULT_PACK.salt);
    const iv = b64ToBytes(VAULT_PACK.iv);
    const data = b64ToBytes(VAULT_PACK.data);
    const base = await crypto.subtle.importKey("raw", enc.encode(pin), "PBKDF2", false, ["deriveKey"]);
    const key = await crypto.subtle.deriveKey(
      { name: "PBKDF2", salt, iterations: 120000, hash: "SHA-256" },
      base, { name: "AES-GCM", length: 256 }, false, ["decrypt"]
    );
    const raw = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, data);
    PIT.vault = JSON.parse(new TextDecoder().decode(raw));
    sessionStorage.setItem("pitlane_vault_ok", "1");
    sessionStorage.setItem("pitlane_vault_pin", pin);
  }

  async function tryRestoreVault() {
    if (PIT.vault) return;
    if (sessionStorage.getItem("pitlane_vault_ok") !== "1") return;
    const pin = sessionStorage.getItem("pitlane_vault_pin");
    if (!pin) return;
    try { await unlockVault(pin); } catch { PIT.vault = null; }
  }

  function remount() {
    if (typeof render === "function") render();
  }

  function mount() {
    const root = document.getElementById("pit-root");
    if (!root) return;
    tryRestoreVault().then(() => {
      if (PIT.tab === "cofre" && PIT.vault && !document.getElementById("pit-lock-again") && !document.getElementById("pit-lock")) {
        remount();
      }
    });

    root.addEventListener("click", (e) => {
      const tr = e.target.closest("[data-translate]");
      if (tr) { e.preventDefault(); openTranslate(); return; }
      const tab = e.target.closest("[data-pit-tab]");
      if (tab) { PIT.tab = tab.dataset.pitTab; remount(); return; }
      const hf = e.target.closest("[data-hf]");
      if (hf) { PIT.huntFilter = hf.dataset.hf; localStorage.setItem(KEYS.huntFilter, PIT.huntFilter); remount(); return; }
      const sp = e.target.closest("[data-speak]");
      if (sp) {
        const p = LINES.find((x) => x.id === sp.dataset.speak);
        if (!p) return;
        if (sp.dataset.lang === "de" && typeof speakDe === "function") speakDe(p.de);
        else if (typeof speak === "function") speak(p.en, 0.92);
        return;
      }
      const sh = e.target.closest("[data-show]");
      if (sh) {
        const p = LINES.find((x) => x.id === sh.dataset.show);
        if (p) showCard(sh.dataset.which === "de" ? p.de : p.en, p.pt);
        return;
      }
      const cp = e.target.closest("[data-copy]");
      if (cp) { copyText(cp.dataset.copy); return; }
      const del = e.target.closest("[data-del]");
      if (del) {
        const leads = loadJSON(KEYS.leads, []);
        leads.splice(+del.dataset.del, 1);
        saveJSON(KEYS.leads, leads);
        remount();
      }
    });

    root.querySelectorAll("[data-prep]").forEach((i) => {
      i.onchange = () => {
        const d = loadJSON(KEYS.prep, {});
        d[i.dataset.prep] = i.checked;
        saveJSON(KEYS.prep, d);
        remount();
      };
    });
    root.querySelectorAll("[data-hunt]").forEach((i) => {
      i.onchange = () => {
        const d = loadJSON(KEYS.hunts, {});
        d[i.dataset.hunt] = i.checked;
        saveJSON(KEYS.hunts, d);
        remount();
      };
    });
    const d11 = document.getElementById("pit-d11");
    if (d11) d11.oninput = () => localStorage.setItem(KEYS.notes, d11.value);
    const q = document.getElementById("pit-q");
    if (q) {
      q.oninput = () => {
        PIT.q = q.value;
        PIT.keepQ = true;
        clearTimeout(PIT._qT);
        PIT._qT = setTimeout(remount, 160);
      };
      if (PIT.keepQ) {
        q.focus();
        const len = q.value.length;
        try { q.setSelectionRange(len, len); } catch (e) {}
        PIT.keepQ = false;
      }
    }
    const form = document.getElementById("pit-lead-form");
    if (form) form.onsubmit = (e) => {
      e.preventDefault();
      const leads = loadJSON(KEYS.leads, []);
      leads.unshift({
        company: (document.getElementById("lCompany").value || "").trim(),
        person: (document.getElementById("lPerson").value || "").trim(),
        hall: (document.getElementById("lHall").value || "").trim(),
        mail: (document.getElementById("lMail").value || "").trim(),
        phone: (document.getElementById("lPhone").value || "").trim(),
        note: (document.getElementById("lNote").value || "").trim(),
        at: new Date().toISOString()
      });
      saveJSON(KEYS.leads, leads);
      ping("Lead salvo neste iPhone");
      remount();
    };
    const exp = document.getElementById("pit-export");
    if (exp) exp.onclick = () => {
      const leads = loadJSON(KEYS.leads, []);
      copyText(leads.map((l) => `${l.company}\n${l.person} · ${l.hall}\n${l.mail} ${l.phone}\n${l.note}\n---`).join("\n") || "Sem leads");
    };
    const share = document.getElementById("pit-share");
    if (share) share.onclick = async () => {
      const payload = JSON.stringify(dumpState(), null, 2);
      if (navigator.share) {
        try { await navigator.share({ title: "PITLANE backup", text: payload }); return; } catch (err) { if (err && err.name === "AbortError") return; }
      }
      copyText(payload);
    };
    const imp = document.getElementById("pit-import");
    if (imp) imp.onclick = () => {
      const pasted = window.prompt("Cole o JSON do backup:");
      if (!pasted) return;
      try { applyState(JSON.parse(pasted)); ping("Backup mesclado"); remount(); }
      catch { ping("JSON inválido"); }
    };
    const lock = document.getElementById("pit-lock");
    if (lock) lock.onsubmit = async (e) => {
      e.preventDefault();
      const pin = (document.getElementById("pit-pin").value || "").trim();
      try { await unlockVault(pin); ping("Cofre aberto"); remount(); }
      catch { ping("PIN errado"); }
    };
    const lockAgain = document.getElementById("pit-lock-again");
    if (lockAgain) lockAgain.onclick = () => {
      PIT.vault = null;
      sessionStorage.removeItem("pitlane_vault_ok");
      sessionStorage.removeItem("pitlane_vault_pin");
      ping("Cofre travado");
      remount();
    };

    if (PIT.timer) clearInterval(PIT.timer);
    PIT.timer = setInterval(() => {
      if (window.TAB !== "pit") return;
      refreshLive();
      const ae = document.activeElement;
      if (ae && /INPUT|TEXTAREA/.test(ae.tagName)) return;
      remount();
    }, 30000);
    refreshLive();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((p) => { PIT.here = { lat: p.coords.latitude, lng: p.coords.longitude }; }, () => {}, { maximumAge: 180000, timeout: 6000 });
    }
  }

  PIT.go = function (id) {
    PIT.tab = id;
    if (window.TAB !== "pit" && typeof nav === "function") nav("pit");
    else remount();
    window.scrollTo(0, 0);
  };
  window.viewPit = view;
  window.PIT = PIT;
  window.PIT.mount = mount;
})();
