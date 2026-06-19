const APP_VERSION = "1.0.4";
const PLAN_KEY = "soevnro.sleepPlan.v1";

const steps = [
  {
    kicker: "Start her",
    title: "Stop kampen",
    text: "Når du begynder at presse dig selv til at sove, bliver kroppen ofte mere vågen. Sig stille til dig selv: “Jeg behøver ikke løse hele natten. Jeg tager kun næste skridt.”",
    tip: "Tip: Lad være med at tjekke klokken igen og igen. Det gør ofte natten mere anspændt."
  },
  {
    kicker: "Kroppen først",
    title: "Læg mærke til underlaget",
    text: "Mærk hvor kroppen har kontakt med madrassen. Hoved, skuldre, ryg, ben og fødder. Du skal ikke slappe perfekt af. Du skal bare registrere kroppen roligt.",
    tip: "Prøv: “Her er hovedet. Her er skuldrene. Her er madrassen.” Gentag langsomt."
  },
  {
    kicker: "Vejrtrækning",
    title: "Gør udåndingen lidt længere",
    text: "Træk vejret naturligt ind. Pust langsomt ud, en smule længere end indåndingen. Lang udånding kan fortælle nervesystemet, at der ikke er akut fare.",
    tip: "Ingen præstation. Hvis det bliver anstrengende, så vend tilbage til almindelig vejrtrækning."
  },
  {
    kicker: "Tankemylder",
    title: "Parkér tankerne",
    text: "Hvis hovedet planlægger, bekymrer sig eller gennemgår dagen, så giv tankerne en parkeringsplads: “Det her skal jeg ikke løse i nat. Det tager jeg i morgen.”",
    tip: "Skriv få stikord på papir eller i appen. Ikke lange forklaringer."
  },
  {
    kicker: "Hvis du er lysvågen",
    title: "Stå roligt op",
    text: "Hvis du mærker, at du bare bliver mere vågen og frustreret, så stå op uden dramatik. Hold lyset dæmpet. Gør noget kedeligt og roligt.",
    tip: "Pointen er ikke at “give op”. Pointen er at undgå, at sengen bliver en kampplads."
  },
  {
    kicker: "Kedeligt er godt",
    title: "Lav noget dæmpet",
    text: "Læs noget uinteressant, fold tøj, lyt til rolig lyd eller sid stille. Undgå skærm, nyheder, arbejde og alt der får dig op i gear.",
    tip: "Gå tilbage i seng, når du igen mærker søvnighed — ikke bare fordi klokken siger det."
  },
  {
    kicker: "I morgen",
    title: "Hold fast i morgenen",
    text: "Efter en dårlig nat er det fristende at sove længe. Men et nogenlunde fast stå-op-tidspunkt hjælper kroppen med at finde rytmen igen.",
    tip: "Ved flere dårlige nætter i træk: brug din søvnplan og kontakt behandler/læge efter aftale."
  }
];

const guides = [
  {
    id: "fall-asleep",
    title: "Jeg kan ikke falde i søvn",
    intro: "Når du ikke kan falde i søvn, er det tit kampen mod søvnen, der holder dig vågen.",
    bullets: [
      "Gå først i seng, når du faktisk er søvnig.",
      "Skru ned for lys, tempo, beskeder og krav den sidste del af aftenen.",
      "Hvis du bliver lysvågen i sengen, så stå roligt op og vend tilbage, når søvnigheden kommer igen.",
      "Undgå at bruge natten på at regne ud, hvor ødelagt i morgen bliver. Det gør kroppen mere alarmklar."
    ]
  },
  {
    id: "night",
    title: "Jeg vågner om natten",
    intro: "Det er normalt at vågne kort om natten. Problemet starter ofte, når kroppen opdager det og bliver stresset over det.",
    bullets: [
      "Lad være med at tjekke klokken, hvis du kan undgå det.",
      "Bliv liggende et øjeblik og gør udåndingen lidt længere.",
      "Hvis du bliver mere vågen, så stå op med dæmpet lys og lav noget kedeligt.",
      "Gå tilbage i seng, når du mærker søvnighed igen."
    ]
  },
  {
    id: "rhythm",
    title: "Min døgnrytme er vendt",
    intro: "Når rytmen er skredet, skal den bygges tilbage. Ikke sparkes på plads med vold.",
    bullets: [
      "Vælg et fast stå-op-tidspunkt, du realistisk kan holde.",
      "Få dagslys tidligt på dagen.",
      "Undgå lange lure, især sent på dagen.",
      "Flyt rytmen gradvist, hvis den er helt vendt."
    ]
  },
  {
    id: "habits",
    title: "Gode søvnvaner uden prædiken",
    intro: "Søvnhygiejne virker bedst, når det er simpelt nok til at blive brugt i virkeligheden.",
    bullets: [
      "Stå op og gå i seng nogenlunde samme tid hver dag.",
      "Undgå koffein og nikotin sent på dagen.",
      "Hold soveværelset mørkt, roligt, køligt og rart.",
      "Motionér gerne, men ikke hårdt lige før sengetid.",
      "Brug sengen til søvn og ro — ikke arbejde, konflikter og doomscrolling."
    ]
  },
  {
    id: "bipolar",
    title: "Hvis du har bipolar lidelse",
    intro: "Søvn er ikke bare søvn. For nogle er ændret søvn et tidligt signal om, at stemningslejet er ved at ændre sig.",
    bullets: [
      "Reagér på tydeligt mindre søvn over flere dage.",
      "Vær ekstra opmærksom, hvis du sover mindre, men føler dig mere energisk end normalt.",
      "Hold fast i rytme, måltider, lys og aftaler.",
      "Kontakt behandler tidligt, hvis det ligner dit kendte advarselstegn."
    ]
  },
  {
    id: "meds",
    title: "Medicin og søvn",
    intro: "Appen rådgiver ikke om sovemedicin. Det skal altid aftales med læge eller behandler.",
    bullets: [
      "Ændr ikke medicin på egen hånd.",
      "Brug din behandlingsplan, hvis du har en.",
      "Søg hjælp ved markant forværring, bivirkninger eller usikkerhed.",
      "Søvnråd kan støtte, men de erstatter ikke behandling."
    ]
  }
];

let currentRoute = "home";
let currentStep = 0;
let deferredInstallPrompt = null;

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function navigate(route) {
  const target = document.querySelector(`[data-screen="${route}"]`);
  if (!target) return;
  currentRoute = route;
  $$(".screen").forEach(screen => screen.classList.toggle("active", screen.dataset.screen === route));
  $$("[data-route]").forEach(button => button.classList.toggle("active", button.dataset.route === route));
  closeDrawer();
  closeModal();
  history.replaceState(null, "", `#${route}`);
  $("#mainContent").focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

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

function renderGuides() {
  const list = $("#guideList");
  list.innerHTML = guides.map(guide => `
    <article class="guide-card" id="guide-${guide.id}">
      <p class="eyebrow">Guide</p>
      <h3>${guide.title}</h3>
      <p>${guide.intro}</p>
      <ul>${guide.bullets.map(item => `<li>${item}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function loadPlan() {
  try {
    const saved = JSON.parse(localStorage.getItem(PLAN_KEY) || "{}");
    const form = $("#sleepPlan");
    Object.entries(saved).forEach(([key, value]) => {
      if (form.elements[key]) form.elements[key].value = value;
    });
  } catch {
    localStorage.removeItem(PLAN_KEY);
  }
}

function savePlan(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  localStorage.setItem(PLAN_KEY, JSON.stringify(data));
  const status = $("#saveStatus");
  status.textContent = "Planen er gemt på denne enhed.";
  setTimeout(() => status.textContent = "", 3200);
}

function clearPlan() {
  localStorage.removeItem(PLAN_KEY);
  $("#sleepPlan").reset();
  $("#saveStatus").textContent = "Planen er ryddet.";
}

function openModal(content) {
  $("#modalBody").innerHTML = content;
  const modal = $("#toolModal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  const modal = $("#toolModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function openBreathing() {
  openModal(`
    <p class="eyebrow">60 sekunder</p>
    <h2 id="modalTitle">Rolig vejrtrækning</h2>
    <p>Følg cirklen uden at presse vejrtrækningen. Træk roligt ind, og lad udåndingen blive lidt længere.</p>
    <div class="breath-circle">Ind · ud</div>
    <p><strong>Husk:</strong> Målet er ikke at sove med det samme. Målet er at skrue lidt ned for kroppens alarm.</p>
  `);
}

function openThoughtParking() {
  openModal(`
    <p class="eyebrow">Tankemylder</p>
    <h2 id="modalTitle">Parkér tankerne</h2>
    <p>Skriv stikord. Ikke løsninger. Bare en parkeringsplads til i morgen.</p>
    <div class="thought-box">
      <textarea id="thoughtText" placeholder="Fx: Ring til kommunen. Husk medicin. Tale med behandler. Bekymring om arbejde."></textarea>
      <button class="primary-button" id="clearThoughtText" type="button">Tøm feltet</button>
    </div>
    <p>Når tanken kommer tilbage: “Den er parkeret. Den skal ikke løses i nat.”</p>
  `);
  $("#clearThoughtText")?.addEventListener("click", () => {
    $("#thoughtText").value = "";
  });
}

function openDrawer() {
  const drawer = $("#drawer");
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  const drawer = $("#drawer");
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
}

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
  window.addEventListener("appinstalled", () => {
    button.hidden = true;
    deferredInstallPrompt = null;
  });
}

function setupServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  navigator.serviceWorker.register(`sw.js?v=${APP_VERSION}`).then(registration => {
    // Ingen synlig opdateringsbjælke. Nye filer overtager automatisk, når browseren er klar.
    if (registration.waiting) registration.waiting.postMessage({ type: "SKIP_WAITING" });
    registration.addEventListener("updatefound", () => {
      const newWorker = registration.installing;
      if (!newWorker) return;
      newWorker.addEventListener("statechange", () => {
        if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
          newWorker.postMessage({ type: "SKIP_WAITING" });
        }
      });
    });
  }).catch(() => {
    // Appen virker stadig uden service worker.
  });

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    window.location.reload();
  });
}

function setupEvents() {
  document.addEventListener("click", event => {
    const routeButton = event.target.closest("[data-route]");
    if (routeButton) navigate(routeButton.dataset.route);

    const guideButton = event.target.closest("[data-guide]");
    if (guideButton) {
      navigate("guides");
      setTimeout(() => {
        const card = document.getElementById(`guide-${guideButton.dataset.guide}`);
        card?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 120);
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
  $("#thoughtButton").addEventListener("click", openThoughtParking);
  $("#menuButton").addEventListener("click", openDrawer);
  $("#closeDrawer").addEventListener("click", closeDrawer);
  $("#drawer").addEventListener("click", event => {
    if (event.target.id === "drawer") closeDrawer();
  });
  $("#closeModal").addEventListener("click", closeModal);
  $("#toolModal").addEventListener("click", event => {
    if (event.target.id === "toolModal") closeModal();
  });

  window.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeDrawer();
      closeModal();
    }
  });
}

function init() {
  renderStep();
  renderGuides();
  loadPlan();
  setupEvents();
  setupInstallPrompt();
  setupServiceWorker();
  const hashRoute = location.hash.replace("#", "");
  if (hashRoute && document.querySelector(`[data-screen="${hashRoute}"]`)) navigate(hashRoute);
}

document.addEventListener("DOMContentLoaded", init);
