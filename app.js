const APP_VERSION = "1.0.9";
const PLAN_KEY = "soevnro.sleepPlan.v1";
const CHECKLIST_KEY = "soevnro.eveningChecklist.v1";
const DIARY_KEY = "soevnro.diary.v1";
const STREAK_KEY = "soevnro.streak.v1";

// ─── STEPPER DATA ────────────────────────────────────────────────────────────

const steps = [
  {
    "kicker": "Start her",
    "title": "Stop kampen",
    "text": "Når du begynder at presse dig selv til at sove, bliver kroppen ofte mere vågen. Sig stille til dig selv: Jeg behøver ikke løse hele natten. Jeg tager kun næste skridt.",
    "tip": "Tip: Lad være med at tjekke klokken igen og igen. Det gør ofte natten mere anspændt."
  },
  {
    "kicker": "Kroppen først",
    "title": "Læg mærke til underlaget",
    "text": "Mærk hvor kroppen har kontakt med madrassen. Hoved, skuldre, ryg, ben og fødder. Du skal ikke slappe perfekt af. Du skal bare registrere kroppen roligt.",
    "tip": "Prøv: Her er hovedet. Her er skuldrene. Her er madrassen. Gentag langsomt."
  },
  {
    "kicker": "Vejrtrækning",
    "title": "Gør udåndingen lidt længere",
    "text": "Træk vejret naturligt ind. Pust langsomt ud, en smule længere end indåndingen. Lang udånding kan fortælle nervesystemet, at der ikke er akut fare.",
    "tip": "Ingen præstation. Hvis det bliver anstrengende, så vend tilbage til almindelig vejrtrækning."
  },
  {
    "kicker": "Tankemylder",
    "title": "Parkér tankerne",
    "text": "Hvis hovedet planlægger, bekymrer sig eller gennemgår dagen, så giv tankerne en parkeringsplads. Skriv få stikord ned, eller sig: Det her skal ikke løses i nat. Det tager jeg i morgen.",
    "tip": "Du skal ikke arbejde videre med tankerne. Du skal bare have dem ud af hovedet."
  },
  {
    "kicker": "Stimuluskontrol",
    "title": "Styrk koblingen mellem seng og søvn",
    "text": "Hvis du bliver mere vågen, irriteret eller anspændt, så stå roligt op. Hold lyset dæmpet og lav noget stille, kedeligt og trygt. Gå tilbage i seng, når søvnigheden kommer igen.",
    "tip": "Pointen er ikke at give op. Pointen er at undgå, at sengen bliver et sted, hvor du kæmper."
  },
  {
    "kicker": "Kedeligt er godt",
    "title": "Lav noget dæmpet",
    "text": "Læs noget uinteressant, fold tøj, lyt til rolig lyd eller sid stille. Undgå skærm, nyheder, arbejde og alt der får dig op i gear.",
    "tip": "Gå tilbage i seng, når kroppen igen føles søvnig — ikke bare fordi klokken siger det."
  },
  {
    "kicker": "I morgen",
    "title": "Hold fast i morgenen",
    "text": "Efter en dårlig nat er det fristende at sove længe. Men et nogenlunde fast stå-op-tidspunkt hjælper kroppen med at finde rytmen igen.",
    "tip": "Ved flere dårlige nætter i træk: brug din søvnplan og kontakt læge eller behandler ved bekymring."
  }
];

// ─── GUIDES DATA ─────────────────────────────────────────────────────────────

const guideTopics = [
  {
    id: "sleep-now",
    category: "Akut",
    icon: "⚡",
    title: "Jeg ligger vågen",
    teaser: "Når natten er i gang, og du ikke kan sove.",
    actionLabel: "Åbn akut-guide",
    route: "now"
  },
  {
    id: "good-habits",
    category: "Dag",
    icon: "☀️",
    title: "Gode søvnvaner",
    teaser: "Koffein, lys, motion, lure og ting der påvirker natten."
  },
  {
    id: "evening-routine",
    category: "Aften",
    icon: "🌙",
    title: "Aften og soveværelse",
    teaser: "Neddrosling, skærme, tanker, temperatur og ro."
  },
  {
    id: "learn-sleep",
    category: "Info",
    icon: "📚",
    title: "Lær om søvn",
    teaser: "Søvnbehov, søvnkontrol, medicin og hvorfor kamp gør det værre."
  }
];

const guidesData = [
  {
    "id": "morning-light",
    "category": "Morgen",
    "title": "Start rytmen med lys",
    "text": "Stå op på nogenlunde samme tidspunkt og få dagslys tidligt. Det hjælper kroppen med at forstå, hvornår dagen starter."
  },
  {
    "id": "morning-fixed",
    "category": "Morgen",
    "title": "Hold fast i stå-op-tiden",
    "text": "En fast morgen er ofte vigtigere end en perfekt sengetid. Dårlige nætter rettes bedst med en stabil start på dagen."
  },
  {
    "id": "day-movement",
    "category": "Dag",
    "title": "Brug kroppen i dagtimerne",
    "text": "Gåtur, let motion eller anden bevægelse i løbet af dagen kan øge søvnpresset. Undgå hård træning lige før sengetid."
  },
  {
    "id": "day-naps",
    "category": "Dag",
    "title": "Pas på lange lure",
    "text": "En kort lur kan være okay, men lange eller sene lure stjæler ofte søvnpresset fra natten. Hold den kort og tidligt på dagen."
  },
  {
    "id": "caffeine",
    "category": "Dag",
    "title": "Koffein skal stoppe tidligt",
    "text": "Kaffe, cola, energidrik og stærk te kan blive hængende længe i kroppen. Prøv at stoppe senest midt på eftermiddagen — og tidligere, hvis du er følsom."
  },
  {
    "id": "evening-winddown",
    "category": "Aften",
    "title": "Gør aftenen kedelig på den gode måde",
    "text": "Luk dagens vigtige opgaver ned først, og lad aftenen blive roligere trin for trin. Mindre lys, færre krav og lavere tempo gør overgangen til søvn lettere."
  },
  {
    "id": "screens-light",
    "category": "Aften",
    "title": "Dæmp lys og skærme",
    "text": "Den sidste time før sengetid bør være lav på lys og høj på ro. Hvis du bruger skærm, så dæmp lysstyrken og vælg noget udramatisk."
  },
  {
    "id": "bedroom",
    "category": "Aften",
    "title": "Gør soveværelset søvnvenligt",
    "text": "Mørkt, roligt og køligt er det sikre valg. Luft ud, skru ned for varme, brug eventuelt ørepropper og fjern ting der minder om arbejde."
  },
  {
    "id": "food-alcohol",
    "category": "Aften",
    "title": "Undgå at kroppen arbejder på overtid",
    "text": "Gå hverken sulten eller overmæt i seng. Alkohol kan gøre dig døsig, men søvnen bliver ofte mere urolig og afbrudt."
  },
  {
    "id": "thought-parking",
    "category": "Akut",
    "title": "Tøm hovedet uden at løse alt",
    "text": "Skriv de tanker ned, der kører rundt. Ikke lange forklaringer. Bare stikord. Når tanken dukker op igen, kan du minde dig selv om, at den er gemt til i morgen."
  },
  {
    "id": "night",
    "category": "Akut",
    "title": "Jeg vågner om natten",
    "text": "Tjek ikke klokken igen og igen. Hvis du bliver mere vågen, så stå roligt op, hold lyset dæmpet og lav noget kedeligt, indtil søvnigheden vender tilbage."
  },
  {
    "id": "fall-asleep",
    "category": "Akut",
    "title": "Jeg kan ikke falde i søvn",
    "text": "Lad være med at presse søvnen frem. Hvis sengen bliver en kampplads, så brug stimuluskontrol: op, dæmpet lys, kedelig aktivitet og tilbage først ved søvnighed."
  },
  {
    "id": "visual-memory",
    "category": "Akut",
    "title": "Gå langsomt gennem et trygt minde",
    "text": "Vælg en god ferie eller en rolig periode. Gennemgå den i detaljer: hvad du pakkede, hvor du gik hen, hvem der var der. Når tankerne hopper, vender du stille tilbage."
  },
  {
    "id": "countdown",
    "category": "Akut",
    "title": "Tavleøvelsen",
    "text": "Forestil dig en tavle. Skriv 100, visk det ud, skriv 99, og fortsæt langsomt nedad. Det er ikke vigtigt at nå langt. Det vigtige er at vende tilbage, når tankerne flyver."
  },
  {
    "id": "sleep-thoughts",
    "category": "Info",
    "title": "Søvn bliver dårligere af kamp",
    "text": "Negative tanker om søvn holder kroppen vågen. Prøv i stedet: Det er okay, at jeg hviler. Jeg behøver ikke vinde over natten lige nu."
  },
  {
    "id": "sleep-need",
    "category": "Info",
    "title": "Søvnbehov er forskelligt",
    "text": "Mange voksne ligger omkring 7-8 timer, men der er normal variation. Kig efter funktion og mønstre over tid — ikke én enkelt dårlig nat."
  },
  {
    "id": "meds",
    "category": "Info",
    "title": "Medicin og søvn",
    "text": "Noget medicin kan virke opkvikkende, andet kan sløve. Ændr ikke medicin selv. Tal med læge eller behandler, hvis søvnen ændrer sig tydeligt."
  },
  {
    "id": "tracker-clock",
    "category": "Info",
    "title": "Pas på søvnkontrol",
    "text": "Søvntracker og klokketjek kan gøre dig mere optaget af søvnen. Hvis det stresser dig, så læg målingerne væk i en periode."
  }
];

// ─── BREATHING TECHNIQUES ────────────────────────────────────────────────────

const breathingTechniques = {
  "478": {
    label: "4-7-8",
    phases: [
      { name: "Træk ind", duration: 4 },
      { name: "Hold", duration: 7 },
      { name: "Pust ud", duration: 8 }
    ],
    description: "Klassisk afslapningsteknik. Trækker vejret ind i 4 sek., holder i 7, puster ud i 8. Beroligende for nervesystemet."
  },
  "box": {
    label: "Box breathing",
    phases: [
      { name: "Træk ind", duration: 4 },
      { name: "Hold", duration: 4 },
      { name: "Pust ud", duration: 4 },
      { name: "Hold", duration: 4 }
    ],
    description: "Brugt af bl.a. soldater og atleter til at falde til ro hurtigt. Fire lige lange faser."
  },
  "simple": {
    label: "Simpel rytme",
    phases: [
      { name: "Ind", duration: 4 },
      { name: "Ud", duration: 6 }
    ],
    description: "Enkel og blid. Lidt længere udånding end indånding — det er nok til at skrue ned for alarmberedskabet."
  }
};

// ─── SOUND ENGINE ─────────────────────────────────────────────────────────────

let audioCtx = null;
let soundNodes = [];
let activeSoundId = null;

function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function stopSound() {
  soundNodes.forEach(n => { try { n.stop(); } catch (_) {} });
  soundNodes = [];
  activeSoundId = null;
}

function makeWhiteNoise(ctx) {
  const bufferSize = ctx.sampleRate * 4;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.loop = true;

  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 1200;

  const gain = ctx.createGain();
  gain.gain.value = 0.18;

  source.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  source.start();
  return [source, filter, gain];
}

function makeRain(ctx) {
  const nodes = [];
  // Base white noise for rain texture
  const bufferSize = ctx.sampleRate * 4;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.loop = true;

  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = 600;
  filter.Q.value = 0.5;

  const gain = ctx.createGain();
  gain.gain.value = 0.22;

  source.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  source.start();
  nodes.push(source, filter, gain);

  // Add occasional low rumble
  const rumble = ctx.createOscillator();
  rumble.type = "sine";
  rumble.frequency.value = 55;
  const rumbleGain = ctx.createGain();
  rumbleGain.gain.value = 0.04;
  rumble.connect(rumbleGain);
  rumbleGain.connect(ctx.destination);
  rumble.start();
  nodes.push(rumble, rumbleGain);

  return nodes;
}

function makeForest(ctx) {
  const nodes = [];
  // Soft wind base
  const bufferSize = ctx.sampleRate * 4;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.loop = true;

  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 400;

  const gain = ctx.createGain();
  gain.gain.value = 0.10;

  source.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  source.start();
  nodes.push(source, filter, gain);

  // Birdsong: simple sine pings at nature-like intervals
  function scheduleChirp() {
    if (activeSoundId !== "forest") return;
    const osc = ctx.createOscillator();
    osc.type = "sine";
    const baseFreq = 1800 + Math.random() * 1200;
    osc.frequency.setValueAtTime(baseFreq, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(baseFreq * 1.15, ctx.currentTime + 0.06);
    osc.frequency.linearRampToValueAtTime(baseFreq, ctx.currentTime + 0.12);

    const g = ctx.createGain();
    g.gain.setValueAtTime(0, ctx.currentTime);
    g.gain.linearRampToValueAtTime(0.07, ctx.currentTime + 0.03);
    g.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.14);

    osc.connect(g);
    g.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.2);

    const nextIn = 1800 + Math.random() * 3000;
    setTimeout(scheduleChirp, nextIn);
  }
  setTimeout(scheduleChirp, 800);

  return nodes;
}

function playSound(id) {
  const ctx = getAudioCtx();
  if (ctx.state === "suspended") ctx.resume();

  if (activeSoundId === id) {
    stopSound();
    return;
  }
  stopSound();
  activeSoundId = id;

  if (id === "white") soundNodes = makeWhiteNoise(ctx);
  else if (id === "rain") soundNodes = makeRain(ctx);
  else if (id === "forest") soundNodes = makeForest(ctx);
}

// ─── STATE ────────────────────────────────────────────────────────────────────

let currentStep = 0;
let deferredInstallPrompt = null;
let selectedQuality = 0;
let breathTimer = null;
let breathPhaseIndex = 0;
let breathCycleCount = 0;
let currentTechnique = null;

// ─── UTILITIES ───────────────────────────────────────────────────────────────

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function navigate(route) {
  const target = document.querySelector(`[data-screen="${route}"]`);
  if (!target) return;
  $$(".screen").forEach(s => s.classList.toggle("active", s.dataset.screen === route));
  $$("[data-route]").forEach(b => b.classList.toggle("active", b.dataset.route === route));
  closeDrawer();
  closeModal();
  history.replaceState(null, "", `#${route}`);
  $("#mainContent").focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (route === "diary") renderDiary();
}

// ─── STEPPER ─────────────────────────────────────────────────────────────────

function renderStep() {
  const step = steps[currentStep];
  $("#stepCount").textContent = `Trin ${currentStep + 1} af ${steps.length}`;
  $("#progressFill").style.width = `${((currentStep + 1) / steps.length) * 100}%`;
  $("#stepKicker").textContent = step.kicker;
  $("#stepTitle").textContent = step.title;
  $("#stepText").textContent = step.text;
  $("#stepTip").textContent = step.tip;
  $("#prevStep").disabled = currentStep === 0;
  $("#prevStep").style.opacity = currentStep === 0 ? ".45" : "1";
  $("#nextStep").textContent = currentStep === steps.length - 1 ? "Start forfra" : "Næste";
}

// ─── GUIDES ───────────────────────────────────────────────────────────────────

function getGuideTagClass(category) {
  return { "Morgen": "tag-morning", "Dag": "tag-day", "Aften": "tag-evening", "Akut": "tag-acute", "Info": "tag-info" }[category] || "tag-info";
}

function getTopicItems(topicId) {
  const groups = {
    "sleep-now": ["thought-parking", "night", "fall-asleep", "visual-memory", "countdown"],
    "good-habits": ["morning-light", "morning-fixed", "day-movement", "day-naps", "caffeine"],
    "evening-routine": ["evening-winddown", "screens-light", "bedroom", "food-alcohol"],
    "learn-sleep": ["sleep-thoughts", "sleep-need", "meds", "tracker-clock"]
  };
  const ids = groups[topicId] || [];
  return ids.map(id => guidesData.find(g => g.id === id)).filter(Boolean);
}

function renderGuides() {
  const grid = $("#topicGrid");
  if (!grid) return;
  grid.innerHTML = guideTopics.map(topic => `
    <button class="topic-card ${getGuideTagClass(topic.category)}-card" data-topic="${topic.id}" type="button">
      <span class="topic-icon" aria-hidden="true">${topic.icon}</span>
      <span class="guide-tag ${getGuideTagClass(topic.category)}">${topic.category}</span>
      <strong>${topic.title}</strong>
      <small>${topic.teaser}</small>
    </button>
  `).join("");
}

function openGuideTopic(topicId) {
  const topic = guideTopics.find(t => t.id === topicId);
  if (!topic) return;
  const items = getTopicItems(topicId);
  const action = topic.route ? `<button class="primary-button modal-action" data-route="${topic.route}" type="button">${topic.actionLabel || "Åbn"}</button>` : "";
  openModal(`
    <div class="topic-modal-head">
      <span class="topic-icon large" aria-hidden="true">${topic.icon}</span>
      <p class="eyebrow">${topic.category}</p>
      <h2 id="modalTitle">${topic.title}</h2>
      <p>${topic.teaser}</p>
    </div>
    <div class="topic-modal-list">
      ${items.map(g => `
        <article class="topic-modal-item">
          <h3>${g.title}</h3>
          <p>${g.text}</p>
        </article>
      `).join("")}
    </div>
    ${action}
  `);
}

// ─── CHECKLIST & STREAK ──────────────────────────────────────────────────────

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function loadStreak() {
  try { return JSON.parse(localStorage.getItem(STREAK_KEY) || "{}"); }
  catch { return {}; }
}

function saveStreak(data) {
  localStorage.setItem(STREAK_KEY, JSON.stringify(data));
}

function getStreakCount(streakData) {
  let count = 0;
  const today = getTodayKey();
  let d = new Date(today);
  while (true) {
    const key = d.toISOString().slice(0, 10);
    if (!streakData[key]) break;
    count++;
    d.setDate(d.getDate() - 1);
  }
  return count;
}

function updateStreakDisplay() {
  const el = $("#streakDisplay");
  if (!el) return;
  const data = loadStreak();
  const count = getStreakCount(data);
  if (count === 0) { el.textContent = ""; return; }
  const flames = count >= 7 ? "🔥🔥🔥" : count >= 3 ? "🔥🔥" : "🔥";
  el.textContent = `${flames} ${count} aften${count !== 1 ? "er" : ""} i træk`;
}

function checkAllChecked() {
  const items = $$('[data-checklist-item]');
  const allChecked = items.length > 0 && items.every(i => i.checked);
  if (allChecked) {
    const streakData = loadStreak();
    streakData[getTodayKey()] = true;
    saveStreak(streakData);
    updateStreakDisplay();
  }
}

function setupChecklist() {
  const items = $$('[data-checklist-item]');
  if (!items.length) return;
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(CHECKLIST_KEY) || "{}"); } catch { localStorage.removeItem(CHECKLIST_KEY); }
  items.forEach(item => {
    item.checked = Boolean(saved[item.dataset.checklistItem]);
    item.addEventListener("change", () => {
      const state = Object.fromEntries(items.map(i => [i.dataset.checklistItem, i.checked]));
      localStorage.setItem(CHECKLIST_KEY, JSON.stringify(state));
      checkAllChecked();
    });
  });
  updateStreakDisplay();
}

// ─── SLEEP PLAN ───────────────────────────────────────────────────────────────

function loadPlan() {
  try {
    const saved = JSON.parse(localStorage.getItem(PLAN_KEY) || "{}");
    const form = $("#sleepPlan");
    Object.entries(saved).forEach(([key, value]) => {
      if (form.elements[key]) form.elements[key].value = value;
    });
  } catch { localStorage.removeItem(PLAN_KEY); }
}

function savePlan(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  localStorage.setItem(PLAN_KEY, JSON.stringify(data));
  const s = $("#saveStatus");
  s.textContent = "Planen er gemt på denne enhed.";
  setTimeout(() => s.textContent = "", 3200);
}

function clearPlan() {
  localStorage.removeItem(PLAN_KEY);
  $("#sleepPlan").reset();
  $("#saveStatus").textContent = "Planen er ryddet.";
}

// ─── REMINDER ─────────────────────────────────────────────────────────────────

function setupReminder() {
  $("#setReminder")?.addEventListener("click", async () => {
    const timeVal = $("#reminderTime")?.value;
    const status = $("#reminderStatus");
    if (!timeVal) { status.textContent = "Vælg et tidspunkt først."; return; }

    if (!("Notification" in window)) {
      status.textContent = "Din browser understøtter ikke påmindelser."; return;
    }
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      status.textContent = "Påmindelser er ikke tilladt. Tjek din browsers indstillinger."; return;
    }

    const [hh, mm] = timeVal.split(":").map(Number);
    const now = new Date();
    const target = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hh, mm, 0);
    if (target <= now) target.setDate(target.getDate() + 1);
    const msUntil = target - now;

    setTimeout(() => {
      new Notification("Søvnro – Sengetid 🌙", {
        body: "Det er snart tid til at finde ro og gøre klar til at sove.",
        icon: "assets/icon-192.png"
      });
    }, msUntil);

    const hhmm = target.toLocaleTimeString("da-DK", { hour: "2-digit", minute: "2-digit" });
    status.textContent = `✓ Påmindelse sat til kl. ${hhmm}.`;
    setTimeout(() => status.textContent = "", 5000);
  });
}

// ─── DIARY ────────────────────────────────────────────────────────────────────

function loadDiaryEntries() {
  try { return JSON.parse(localStorage.getItem(DIARY_KEY) || "[]"); }
  catch { return []; }
}

function saveDiaryEntries(entries) {
  localStorage.setItem(DIARY_KEY, JSON.stringify(entries));
}

function calcSleepHours(bedTime, wakeTime) {
  if (!bedTime || !wakeTime) return null;
  const [bh, bm] = bedTime.split(":").map(Number);
  const [wh, wm] = wakeTime.split(":").map(Number);
  let mins = (wh * 60 + wm) - (bh * 60 + bm);
  if (mins < 0) mins += 24 * 60;
  return Math.round(mins / 6) / 10; // one decimal
}

function qualityEmoji(q) {
  return ["", "😣", "😕", "😐", "🙂", "😊"][q] || "";
}

function setupDiary() {
  // Set today as default date
  const dateInput = $("#diaryDate");
  if (dateInput) dateInput.value = getTodayKey();

  // Quality picker
  $$(".q-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      selectedQuality = parseInt(btn.dataset.q);
      $$(".q-btn").forEach(b => b.classList.toggle("q-active", b.dataset.q == selectedQuality));
    });
  });

  $("#saveDiaryEntry")?.addEventListener("click", () => {
    const date = $("#diaryDate").value;
    const bedTime = $("#diaryBedTime").value;
    const wakeTime = $("#diaryWakeTime").value;
    const note = $("#diaryNote").value.trim();
    const status = $("#diaryStatus");

    if (!date) { status.textContent = "Vælg en dato."; return; }

    const entries = loadDiaryEntries().filter(e => e.date !== date);
    entries.push({ date, bedTime, wakeTime, quality: selectedQuality, note });
    entries.sort((a, b) => b.date.localeCompare(a.date));
    saveDiaryEntries(entries);

    status.textContent = "Natten er gemt ✓";
    setTimeout(() => status.textContent = "", 2500);

    // Reset form
    $("#diaryBedTime").value = "";
    $("#diaryWakeTime").value = "";
    $("#diaryNote").value = "";
    selectedQuality = 0;
    $$(".q-btn").forEach(b => b.classList.remove("q-active"));

    renderDiary();
  });

  $("#clearDiary")?.addEventListener("click", () => {
    if (!confirm("Slet alle dagbogsnotater?")) return;
    localStorage.removeItem(DIARY_KEY);
    renderDiary();
  });
}

function renderDiary() {
  const entries = loadDiaryEntries().slice(0, 7);
  renderDiaryChart(entries);
  renderDiaryList(entries);
}

function renderDiaryChart(entries) {
  const chart = $("#diaryChart");
  if (!chart) return;
  if (!entries.length) { chart.innerHTML = `<p class="diary-empty">Ingen nætter logget endnu.</p>`; return; }

  const last7 = [...entries].reverse().slice(-7);

  chart.innerHTML = `
    <div class="chart-bars">
      ${last7.map(e => {
        const hours = calcSleepHours(e.bedTime, e.wakeTime);
        const pct = hours ? Math.min(100, (hours / 10) * 100) : 0;
        const dateLabel = e.date.slice(5).replace("-", "/");
        const q = e.quality;
        const barColor = q >= 4 ? "var(--green)" : q === 3 ? "var(--blue)" : q > 0 ? "var(--danger)" : "var(--muted)";
        return `
          <div class="chart-col">
            <div class="chart-bar-wrap">
              <div class="chart-bar" style="height:${pct}%;background:${barColor}" title="${hours ? hours + ' timer' : 'Ingen tid angivet'}">
                ${q ? `<span class="chart-q">${qualityEmoji(q)}</span>` : ""}
              </div>
            </div>
            <span class="chart-label">${dateLabel}</span>
            ${hours ? `<span class="chart-hours">${hours}t</span>` : ""}
          </div>
        `;
      }).join("")}
    </div>
    <div class="chart-legend">
      <span style="color:var(--green)">■</span> God &nbsp;
      <span style="color:var(--blue)">■</span> Okay &nbsp;
      <span style="color:var(--danger)">■</span> Dårlig
    </div>
  `;
}

function renderDiaryList(entries) {
  const list = $("#diaryList");
  if (!list) return;
  if (!entries.length) { list.innerHTML = ""; return; }

  list.innerHTML = entries.map(e => {
    const hours = calcSleepHours(e.bedTime, e.wakeTime);
    const dateStr = new Date(e.date).toLocaleDateString("da-DK", { weekday: "short", day: "numeric", month: "short" });
    return `
      <article class="diary-entry">
        <div class="diary-entry-head">
          <strong>${dateStr}</strong>
          <span class="diary-meta">
            ${e.bedTime ? `Lagde mig ${e.bedTime}` : ""}
            ${e.bedTime && e.wakeTime ? " · " : ""}
            ${e.wakeTime ? `Stod op ${e.wakeTime}` : ""}
            ${hours ? ` · ${hours} timer` : ""}
          </span>
        </div>
        ${e.quality ? `<div class="diary-quality">${qualityEmoji(e.quality)} ${ ["","Meget dårlig","Dårlig","Okay","God","Meget god"][e.quality]}</div>` : ""}
        ${e.note ? `<p class="diary-note">${e.note}</p>` : ""}
      </article>
    `;
  }).join("");
}

// ─── MODAL ────────────────────────────────────────────────────────────────────

function openModal(content) {
  $("#modalBody").innerHTML = content;
  const modal = $("#toolModal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  stopBreathing();
  const modal = $("#toolModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

// ─── BREATHING ────────────────────────────────────────────────────────────────

function stopBreathing() {
  if (breathTimer) { clearTimeout(breathTimer); breathTimer = null; }
}

function startBreathing(techniqueKey) {
  stopBreathing();
  currentTechnique = breathingTechniques[techniqueKey];
  breathPhaseIndex = 0;
  breathCycleCount = 0;
  runBreathPhase();
}

function runBreathPhase() {
  const t = currentTechnique;
  if (!t) return;
  const phase = t.phases[breathPhaseIndex];
  const circle = $("#breathCircle");
  const label = $("#breathLabel");
  const counter = $("#breathCounter");
  const progress = $("#breathProgress");
  if (!circle) return;

  label.textContent = phase.name;

  // Animate circle
  circle.style.transition = `transform ${phase.duration}s ease-in-out`;
  if (phase.name.toLowerCase().includes("ind")) {
    circle.style.transform = "scale(1.18)";
  } else if (phase.name.toLowerCase().includes("hold")) {
    // no change
  } else {
    circle.style.transform = "scale(0.82)";
  }

  // Countdown
  let remaining = phase.duration;
  counter.textContent = remaining;
  if (progress) progress.style.width = "100%";

  const tick = () => {
    remaining--;
    counter.textContent = remaining;
    if (progress) progress.style.width = `${(remaining / phase.duration) * 100}%`;
    if (remaining > 0) {
      breathTimer = setTimeout(tick, 1000);
    } else {
      breathPhaseIndex++;
      if (breathPhaseIndex >= t.phases.length) {
        breathPhaseIndex = 0;
        breathCycleCount++;
        if (counter) counter.textContent = "";
      }
      breathTimer = setTimeout(runBreathPhase, 300);
    }
  };
  breathTimer = setTimeout(tick, 1000);
}

function openBreathing() {
  openModal(`
    <p class="eyebrow">Vejrtrækning</p>
    <h2 id="modalTitle">Vælg teknik</h2>
    <div class="breath-technique-grid">
      ${Object.entries(breathingTechniques).map(([key, t]) => `
        <button class="breath-technique-btn" data-technique="${key}" type="button">
          <strong>${t.label}</strong>
          <small>${t.description}</small>
        </button>
      `).join("")}
    </div>
    <div id="breathingArea" class="breathing-area" hidden>
      <div class="breath-circle" id="breathCircle">
        <span id="breathLabel">Gør klar</span>
        <span id="breathCounter"></span>
      </div>
      <div class="breath-progress-track"><div id="breathProgress" class="breath-progress-fill"></div></div>
      <p class="breath-cycles" id="breathCycleDisplay"></p>
      <button class="secondary-button" id="stopBreathBtn" type="button" style="margin-top:14px">Stop</button>
    </div>
  `);

  document.addEventListener("click", handleBreathTechniqueClick);

  $("#stopBreathBtn")?.addEventListener("click", () => {
    stopBreathing();
    $("#breathingArea").hidden = true;
    $(".breath-technique-grid").hidden = false;
    currentTechnique = null;
  });
}

function handleBreathTechniqueClick(e) {
  const btn = e.target.closest("[data-technique]");
  if (!btn) return;
  const key = btn.dataset.technique;
  if (!breathingTechniques[key]) return;
  $(".breath-technique-grid").hidden = true;
  $("#breathingArea").hidden = false;
  startBreathing(key);
  document.removeEventListener("click", handleBreathTechniqueClick);
}

// ─── SOUND MODAL ─────────────────────────────────────────────────────────────

function openSoundModal() {
  openModal(`
    <p class="eyebrow">Lydmiljø</p>
    <h2 id="modalTitle">Vælg baggrundslyd</h2>
    <p>Tryk for at starte eller stoppe. Lyden spiller videre, mens du bruger appen.</p>
    <div class="sound-grid">
      <button class="sound-btn" data-sound="white" type="button">
        <span class="sound-icon">〰</span>
        <strong>Hvid støj</strong>
        <small>Jævn, dæmpende baggrundslyd.</small>
      </button>
      <button class="sound-btn" data-sound="rain" type="button">
        <span class="sound-icon">🌧</span>
        <strong>Regn</strong>
        <small>Blødt regndryp med dæmpet torden.</small>
      </button>
      <button class="sound-btn" data-sound="forest" type="button">
        <span class="sound-icon">🌲</span>
        <strong>Skov</strong>
        <small>Sagte vind og fuglekvidder.</small>
      </button>
    </div>
    <p id="soundStatus" class="save-status" style="margin-top:10px"></p>
  `);

  document.addEventListener("click", handleSoundClick);
}

function handleSoundClick(e) {
  const btn = e.target.closest("[data-sound]");
  if (!btn) return;
  const id = btn.dataset.sound;
  playSound(id);
  const status = document.getElementById("soundStatus");
  const labels = { white: "Hvid støj", rain: "Regn", forest: "Skov" };
  if (activeSoundId) {
    if (status) status.textContent = `▶ ${labels[activeSoundId]} spiller…`;
    $$(".sound-btn").forEach(b => b.classList.toggle("sound-active", b.dataset.sound === activeSoundId));
  } else {
    if (status) status.textContent = "Lyden er stoppet.";
    $$(".sound-btn").forEach(b => b.classList.remove("sound-active"));
  }
}

// ─── SLEEP CALC MODAL ────────────────────────────────────────────────────────

function openSleepCalc() {
  openModal(`
    <p class="eyebrow">Søvnvindue</p>
    <h2 id="modalTitle">Hvornår skal du stå op?</h2>
    <p>En søvncyklus varer ca. 90 min. Skriv hvornår du gerne vil vågne, og få forslag til hvornår du helst skal falde i søvn.</p>
    <div class="sleep-calc-row">
      <label style="flex:1">
        <span style="font-weight:760;display:block;margin-bottom:6px">Ønsket opvågningstid</span>
        <input type="time" id="calcWakeTime" style="width:100%" />
      </label>
      <button class="primary-button" id="calcBtn" type="button" style="margin-top:22px">Beregn</button>
    </div>
    <div id="calcResult" class="calc-result"></div>
    <p style="color:var(--muted);font-size:.88rem;margin-top:14px">Husk at lægge ca. 15 min. til at falde i søvn.</p>
  `);

  $("#calcBtn")?.addEventListener("click", () => {
    const val = $("#calcWakeTime")?.value;
    if (!val) return;
    const [wh, wm] = val.split(":").map(Number);
    const wakeMinutes = wh * 60 + wm;
    const fallAsleepOffset = 15;
    const results = [6, 5, 4].map(cycles => {
      const sleepMinutes = (wakeMinutes - cycles * 90 - fallAsleepOffset + 24 * 60) % (24 * 60);
      const h = Math.floor(sleepMinutes / 60).toString().padStart(2, "0");
      const m = (sleepMinutes % 60).toString().padStart(2, "0");
      return { time: `${h}:${m}`, cycles };
    });
    $("#calcResult").innerHTML = `
      <p style="margin:14px 0 8px;font-weight:760">Læg dig senest:</p>
      <div class="calc-options">
        ${results.map(r => `
          <div class="calc-option">
            <strong>${r.time}</strong>
            <small>${r.cycles} cyklusser · ca. ${r.cycles * 1.5} timer</small>
          </div>
        `).join("")}
      </div>
    `;
  });
}

// ─── THOUGHT PARKING ─────────────────────────────────────────────────────────

function openThoughtParking() {
  openModal(`
    <p class="eyebrow">Tankemylder</p>
    <h2 id="modalTitle">Parkér tankerne</h2>
    <p>Skriv stikord. Ikke løsninger. Bare en parkeringsplads til i morgen.</p>
    <div class="thought-box">
      <textarea id="thoughtText" placeholder="Fx: Ring til kommunen. Husk medicin. Bekymring om arbejde."></textarea>
      <button class="primary-button" id="clearThoughtText" type="button">Tøm feltet</button>
    </div>
    <p>Når tanken kommer tilbage: "Den er parkeret. Den skal ikke løses i nat."</p>
  `);
  $("#clearThoughtText")?.addEventListener("click", () => { $("#thoughtText").value = ""; });
}

// ─── DRAWER ───────────────────────────────────────────────────────────────────

function openDrawer() {
  const d = $("#drawer");
  d.classList.add("open");
  d.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  const d = $("#drawer");
  d.classList.remove("open");
  d.setAttribute("aria-hidden", "true");
}

// ─── INSTALL PROMPT ───────────────────────────────────────────────────────────

function setupInstallPrompt() {
  const button = $("#installButton");
  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    deferredInstallPrompt = event;
    button.hidden = false;
  });
  button.addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    button.hidden = true;
  });
  window.addEventListener("appinstalled", () => { button.hidden = true; deferredInstallPrompt = null; });
}

// ─── SERVICE WORKER ───────────────────────────────────────────────────────────

function setupServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  navigator.serviceWorker.register(`sw.js?v=${APP_VERSION}`).then(reg => {
    if (reg.waiting) reg.waiting.postMessage({ type: "SKIP_WAITING" });
    reg.addEventListener("updatefound", () => {
      const nw = reg.installing;
      if (!nw) return;
      nw.addEventListener("statechange", () => {
        if (nw.state === "installed" && navigator.serviceWorker.controller) nw.postMessage({ type: "SKIP_WAITING" });
      });
    });
  }).catch(() => {});
  navigator.serviceWorker.addEventListener("controllerchange", () => window.location.reload());
}

// ─── EVENTS ───────────────────────────────────────────────────────────────────

function setupEvents() {
  document.addEventListener("click", event => {
    const rb = event.target.closest("[data-route]");
    if (rb) { navigate(rb.dataset.route); closeDrawer(); closeModal(); }
    const topicButton = event.target.closest("[data-topic]");
    if (topicButton) openGuideTopic(topicButton.dataset.topic);
    const gb = event.target.closest("[data-guide]");
    if (gb) {
      navigate("guides");
      const guide = guidesData.find(g => g.id === gb.dataset.guide);
      const topic = guideTopics.find(t => getTopicItems(t.id).some(item => item.id === guide?.id));
      if (topic) setTimeout(() => openGuideTopic(topic.id), 120);
    }
  });

  $("#nextStep").addEventListener("click", () => {
    currentStep = currentStep === steps.length - 1 ? 0 : currentStep + 1;
    renderStep();
  });
  $("#prevStep").addEventListener("click", () => {
    currentStep = Math.max(0, currentStep - 1);
    renderStep();
  });

  $("#sleepPlan").addEventListener("submit", savePlan);
  $("#clearPlan").addEventListener("click", clearPlan);
  $("#printPlan").addEventListener("click", () => window.print());
  $("#breathingButton").addEventListener("click", openBreathing);
  $("#soundButton").addEventListener("click", openSoundModal);
  $("#thoughtButton").addEventListener("click", openThoughtParking);
  $("#sleepCalcButton").addEventListener("click", openSleepCalc);
  $("#acuteSymptomBtn")?.addEventListener("click", () => { currentStep = 4; renderStep(); navigate("now"); });
  $("#menuButton").addEventListener("click", openDrawer);
  $("#bottomMoreButton")?.addEventListener("click", openDrawer);
  $("#closeDrawer").addEventListener("click", closeDrawer);
  $("#drawer").addEventListener("click", e => { if (e.target.id === "drawer") closeDrawer(); });
  $("#closeModal").addEventListener("click", () => {
    stopSound();
    document.removeEventListener("click", handleBreathTechniqueClick);
    document.removeEventListener("click", handleSoundClick);
    closeModal();
  });
  $("#toolModal").addEventListener("click", e => { if (e.target.id === "toolModal") closeModal(); });
  window.addEventListener("keydown", e => { if (e.key === "Escape") { closeDrawer(); closeModal(); } });
}

// ─── INIT ─────────────────────────────────────────────────────────────────────

function init() {
  renderStep();
  renderGuides();
  loadPlan();
  setupChecklist();
  setupDiary();
  setupReminder();
  setupEvents();
  setupInstallPrompt();
  setupServiceWorker();
  const hashRoute = location.hash.replace("#", "");
  if (hashRoute && document.querySelector(`[data-screen="${hashRoute}"]`)) navigate(hashRoute);
}

document.addEventListener("DOMContentLoaded", init);
