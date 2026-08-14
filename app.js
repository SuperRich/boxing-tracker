const SESSION_KEY = "corner.sessions.v1";
const MOVEMENT_KEY = "corner.movements.v1";
const PRESETS = {
  boxing: ["jab", "cross", "hook", "uppercut", "stance", "shadow boxing"],
  conditioning: ["burpees", "red zone", "mountain climbers", "bodyweight squats", "push-ups"]
};
const LEARN = {
  beginner: {
    number: "01", title: "Build the base", copy: "Own your balance, stance and movement before adding speed.",
    videos: [
      { title: "Moving backwards", id: "1dZCHz0C70HaoJN1wUBusHPWZblKmufI-", label: "FOOTWORK" },
      { title: "The ultimate training guide", id: "1RB4Ah8YdGFnez2XF-Ga3Ynwc38j4U6m8", label: "GUIDE" }
    ],
    folders: [{ title: "Basic movement", id: "119ptQDqnQgj9PyT9NkA7MlfWE_z7FRsG", type: "BOX" }, { title: "Lower body", id: "1dEMDzwDqZBcYLwP-QvAFe2g6Qe3_G4M5", type: "BUILD" }, { title: "Upper push", id: "1Q-dovORflymS_Afo-GBIqvJiICvTrlex", type: "BUILD" }]
  },
  intermediate: {
    number: "02", title: "Move with intent", copy: "Connect footwork and punches, then build explosive output.", videos: [],
    folders: [{ title: "Punch while moving", id: "1o5tj0bnHxJaFpVlE_MejFcwNFL_IUUQD", type: "BOX" }, { title: "Explosive", id: "1fXUtaPfwsISThD2wiUKi5fuaXxD6nJA7", type: "BUILD" }]
  },
  advanced: {
    number: "03", title: "Perform under pressure", copy: "Turn skill into composure, timing and fight-ready strength.", videos: [],
    folders: [{ title: "Sparring", id: "1kHxb1aVR6GMKNHDKweY_JdhdimisQofG", type: "BOX" }, { title: "Defence", id: "12kYqQ8A3cKmJ9IY-qAfnfHIDZRrDsnl_", type: "BOX" }, { title: "Isometric", id: "1FQUtpArTYFOOw2ogbpkK33XD8zEcFs3j", type: "BUILD" }]
  }
};

const state = { selected: new Set(), metric: "rounds", amount: 6, level: "beginner" };
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const titleCase = value => value.replace(/\b\w/g, letter => letter.toUpperCase());
const today = new Date();

$("#todayBadge").innerHTML = `${today.toLocaleDateString(undefined, { weekday: "short" }).toUpperCase()} ${today.getDate()}<span>${today.toLocaleDateString(undefined, { month: "long", year: "numeric" }).toUpperCase()}</span>`;

function load(key) { try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; } }
function save(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function escapeHtml(value = "") { const div = document.createElement("div"); div.textContent = value; return div.innerHTML; }
function sessionMovements(session) { return session.movements || [session.stance, ...(session.punches || [])].filter(Boolean).map(name => ({ name, category: "boxing" })); }
function sessionAmount(session) { return session.metric === "time" ? `${session.amount} MIN` : `${session.amount || session.rounds || 0} ROUNDS`; }

function showToast(message) {
  const toast = $("#toast"); toast.textContent = message; toast.classList.add("show");
  clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function movementButton(movement, category) {
  const name = typeof movement === "string" ? movement : movement.name;
  const customCategory = typeof movement === "object" ? movement.category : "";
  const key = `${category}:${name}`;
  return `<button class="movement-card ${state.selected.has(key) ? "selected" : ""}" data-name="${escapeHtml(name)}" data-category="${category}" aria-pressed="${state.selected.has(key)}"><span>${escapeHtml(titleCase(name))}</span>${customCategory ? `<small>${escapeHtml(customCategory)}</small>` : `<small>${category === "boxing" ? "BOX" : category === "conditioning" ? "BUILD" : "CUSTOM"}</small>`}<i></i></button>`;
}

function renderMovements() {
  $("#boxingPresets").innerHTML = PRESETS.boxing.map(item => movementButton(item, "boxing")).join("");
  $("#conditioningPresets").innerHTML = PRESETS.conditioning.map(item => movementButton(item, "conditioning")).join("");
  const custom = load(MOVEMENT_KEY);
  $("#customMovements").innerHTML = custom.map(item => movementButton(item, "custom")).join("");
  $("#customSection").classList.toggle("has-custom", custom.length > 0);
  $$(".movement-card").forEach(button => button.addEventListener("click", () => {
    const key = `${button.dataset.category}:${button.dataset.name}`;
    state.selected.has(key) ? state.selected.delete(key) : state.selected.add(key);
    renderMovements(); updateSelection();
  }));
}

function updateSelection() {
  const count = state.selected.size;
  $("#selectionCount").textContent = `${count} movement${count === 1 ? "" : "s"} selected`;
}

$("#showMovementForm").addEventListener("click", () => { $("#movementForm").hidden = false; $("#showMovementForm").hidden = true; $("#movementName").focus(); });
$("#cancelMovement").addEventListener("click", () => { $("#movementForm").hidden = true; $("#showMovementForm").hidden = false; });
$("#movementForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = $("#movementName").value.trim();
  if (!name) return;
  const movements = load(MOVEMENT_KEY);
  if (!movements.some(item => item.name.toLowerCase() === name.toLowerCase())) movements.push({ name, category: $("#movementCategory").value.trim() });
  save(MOVEMENT_KEY, movements); event.target.reset(); event.target.hidden = true; $("#showMovementForm").hidden = false; renderMovements(); showToast("Movement added");
});

$$(".metric-toggle button").forEach(button => button.addEventListener("click", () => {
  state.metric = button.dataset.metric;
  state.amount = state.metric === "rounds" ? 6 : 20;
  $$(".metric-toggle button").forEach(item => item.classList.toggle("active", item === button));
  $("#amountValue").textContent = state.amount; $("#amountUnit").textContent = state.metric === "rounds" ? "ROUNDS" : "MINUTES";
}));
function updateAmount(delta) { const max = state.metric === "rounds" ? 30 : 180; state.amount = Math.max(1, Math.min(max, state.amount + delta)); $("#amountValue").textContent = state.amount; }
$("#amountMinus").addEventListener("click", () => updateAmount(-1));
$("#amountPlus").addEventListener("click", () => updateAmount(1));
$("#note").addEventListener("input", event => $("#noteCount").textContent = `${event.target.value.length}/120`);

$("#saveSession").addEventListener("click", () => {
  if (!state.selected.size) { showToast("Choose at least one movement"); return; }
  const movements = [...state.selected].map(key => { const separator = key.indexOf(":"); return { category: key.slice(0, separator), name: key.slice(separator + 1) }; });
  const sessions = load(SESSION_KEY);
  sessions.unshift({ id: Date.now(), date: new Date().toISOString(), metric: state.metric, amount: state.amount, rounds: state.metric === "rounds" ? state.amount : 0, movements, note: $("#note").value.trim() });
  save(SESSION_KEY, sessions); state.selected.clear(); $("#note").value = ""; $("#noteCount").textContent = "0/120"; renderMovements(); updateSelection(); renderDashboard(); renderHistory(); showToast("Session logged — nice work");
});

function renderDashboard() {
  const sessions = load(SESSION_KEY);
  const weekStart = new Date(); weekStart.setHours(0, 0, 0, 0); weekStart.setDate(weekStart.getDate() - ((weekStart.getDay() + 6) % 7));
  const week = sessions.filter(item => new Date(item.date) >= weekStart);
  $("#weekSessions").textContent = week.length;
  $("#weekRounds").textContent = week.reduce((sum, item) => sum + (item.metric === "time" ? 0 : (item.amount || item.rounds || 0)), 0);
  $("#allSessions").textContent = sessions.length;
  if (!sessions.length) { $("#recentSession").innerHTML = '<div class="empty-card"><strong>THE BELL IS WAITING</strong><p>Your latest workout will show here.</p></div>'; return; }
  const item = sessions[0];
  $("#recentSession").innerHTML = `<article class="recent-card"><div><span>${new Date(item.date).toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" })}</span><strong>${sessionAmount(item)}</strong></div><div class="tags">${sessionMovements(item).slice(0, 5).map(m => `<span class="tag">${escapeHtml(titleCase(m.name || m))}</span>`).join("")}</div></article>`;
}

function renderLearn() {
  const level = LEARN[state.level];
  const videos = level.videos.map(video => `<article class="video-card"><div class="video-frame"><iframe src="https://drive.google.com/file/d/${video.id}/preview" title="${escapeHtml(video.title)}" allow="autoplay; fullscreen" loading="lazy"></iframe></div><div class="video-meta"><span>${video.label}</span><h3>${escapeHtml(video.title)}</h3></div></article>`).join("");
  const folders = level.folders.map(folder => `<a class="folder-card" href="https://drive.google.com/drive/folders/${folder.id}" target="_blank" rel="noopener"><span class="folder-type">${folder.type}</span><strong>${escapeHtml(folder.title)}</strong><span class="open-drive">OPEN IN DRIVE ↗</span></a>`).join("");
  $("#learnContent").innerHTML = `<div class="level-intro"><span>${level.number}</span><div><small>${state.level.toUpperCase()}</small><h3>${level.title}</h3><p>${level.copy}</p></div></div>${videos}${folders ? `<div class="folder-grid">${folders}</div>` : ""}`;
}
$$(".level-tabs button").forEach(button => button.addEventListener("click", () => { state.level = button.dataset.level; $$(".level-tabs button").forEach(item => item.classList.toggle("active", item === button)); renderLearn(); }));

function renderHistory() {
  const sessions = load(SESSION_KEY);
  $("#totalSessions").textContent = sessions.length;
  if (!sessions.length) { $("#historyList").innerHTML = '<div class="empty"><strong>NO WORK YET</strong><p>Log a workout and your sessions will stack up here by day.</p></div>'; return; }
  const days = new Map();
  sessions.forEach(session => { const date = new Date(session.date); const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`; if (!days.has(key)) days.set(key, { date, sessions: [] }); days.get(key).sessions.push(session); });
  $("#historyList").innerHTML = [...days.values()].map(day => `<section class="day-group"><header class="day-header"><div><div class="history-date">${day.date.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" })}</div><span>${day.sessions.length} ${day.sessions.length === 1 ? "SESSION" : "SESSIONS"}</span></div></header>${day.sessions.map(session => `<article class="history-card"><header><div class="history-time">${new Date(session.date).toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" })}</div><div class="history-rounds">${sessionAmount(session)}</div></header><div class="tags">${sessionMovements(session).map(item => `<span class="tag ${item.category || ""}">${escapeHtml(titleCase(item.name || item))}</span>`).join("")}</div>${session.note ? `<p class="history-note">${escapeHtml(session.note)}</p>` : ""}<button class="delete-session" data-id="${session.id}" aria-label="Delete this session">DELETE</button></article>`).join("")}</section>`).join("");
  $$(".delete-session").forEach(button => button.addEventListener("click", () => { save(SESSION_KEY, load(SESSION_KEY).filter(item => String(item.id) !== button.dataset.id)); renderHistory(); renderDashboard(); showToast("Session deleted"); }));
}

function showView(viewId) {
  $$(".nav-button").forEach(item => item.classList.toggle("active", item.dataset.view === viewId));
  $$(".view").forEach(view => view.classList.toggle("active", view.id === viewId));
  if (viewId === "historyView") renderHistory();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
$$(".nav-button").forEach(button => button.addEventListener("click", () => showView(button.dataset.view)));
$$("[data-go]").forEach(button => button.addEventListener("click", () => showView(button.dataset.go)));

renderMovements(); updateSelection(); renderLearn(); renderDashboard(); renderHistory();
if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("sw.js"));
