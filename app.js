const KEY = "corner.sessions.v1";
const state = { rounds: 6, stance: "orthodox", punches: new Set(["jab", "cross"]) };
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

const today = new Date();
$("#todayBadge").innerHTML = `${today.toLocaleDateString(undefined,{weekday:"short"}).toUpperCase()} ${today.getDate()}<span>${today.toLocaleDateString(undefined,{month:"long",year:"numeric"}).toUpperCase()}</span>`;

function loadSessions() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; } }
function updateRounds(delta) { state.rounds = Math.max(1, Math.min(30, state.rounds + delta)); $("#roundCount").textContent = state.rounds; }
$("#roundMinus").addEventListener("click", () => updateRounds(-1));
$("#roundPlus").addEventListener("click", () => updateRounds(1));

$$('.stance').forEach(button => {
  button.setAttribute("aria-pressed", String(button.classList.contains("active")));
  button.addEventListener("click", () => {
    state.stance = button.dataset.stance;
    $$('.stance').forEach(item => { const active = item === button; item.classList.toggle("active", active); item.setAttribute("aria-pressed", String(active)); });
  });
});

$$('.punch').forEach(button => {
  button.setAttribute("aria-pressed", String(button.classList.contains("selected")));
  button.addEventListener("click", () => {
    const punch = button.dataset.punch;
    state.punches.has(punch) ? state.punches.delete(punch) : state.punches.add(punch);
    button.classList.toggle("selected", state.punches.has(punch));
    button.setAttribute("aria-pressed", String(state.punches.has(punch)));
  });
});

$("#note").addEventListener("input", event => $("#noteCount").textContent = `${event.target.value.length}/120`);

function showToast(message) {
  const toast = $("#toast"); toast.textContent = message; toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

function saveSession() {
  if (!state.punches.size) { showToast("Choose at least one punch"); return; }
  const sessions = loadSessions();
  sessions.unshift({ id: Date.now(), date: new Date().toISOString(), rounds: state.rounds, stance: state.stance, punches: [...state.punches], note: $("#note").value.trim() });
  localStorage.setItem(KEY, JSON.stringify(sessions));
  $("#note").value = ""; $("#noteCount").textContent = "0/120";
  showToast("Session logged — nice work");
  renderHistory();
}
$("#saveSession").addEventListener("click", saveSession);

function renderHistory() {
  const sessions = loadSessions();
  $("#totalRounds").textContent = sessions.reduce((sum, item) => sum + item.rounds, 0);
  if (!sessions.length) {
    $("#historyList").innerHTML = '<div class="empty"><strong>NO ROUNDS YET</strong><p>Log today’s work and your sessions will stack up here.</p></div>';
    return;
  }
  const days = new Map();
  sessions.forEach(session => {
    const date = new Date(session.date);
    const key = date.toLocaleDateString("en-CA");
    if (!days.has(key)) days.set(key, { date, sessions: [] });
    days.get(key).sessions.push(session);
  });
  $("#historyList").innerHTML = [...days.values()].map(day => {
    const dayRounds = day.sessions.reduce((sum, item) => sum + item.rounds, 0);
    const cards = day.sessions.map(session => {
      const date = new Date(session.date);
      const tags = [session.stance, ...session.punches].map((tag,index) => `<span class="tag ${index===0?'stance-tag':''}">${tag.toUpperCase()}</span>`).join("");
      return `<article class="history-card"><header><div class="history-time">${date.toLocaleTimeString(undefined,{hour:"numeric",minute:"2-digit"})}</div><div class="history-rounds">${session.rounds}<span>ROUNDS</span></div></header><div class="tags">${tags}</div>${session.note?`<p class="history-note">${escapeHtml(session.note)}</p>`:""}</article>`;
    }).join("");
    return `<section class="day-group"><header class="day-header"><div><div class="history-date">${day.date.toLocaleDateString(undefined,{weekday:"short",month:"short",day:"numeric"})}</div><span>${day.sessions.length} ${day.sessions.length===1?'SESSION':'SESSIONS'}</span></div><strong>${dayRounds} <span>ROUNDS</span></strong></header>${cards}</section>`;
  }).join("");
}

function escapeHtml(value) { const div = document.createElement("div"); div.textContent = value; return div.innerHTML; }
$$('.nav-button').forEach(button => button.addEventListener("click", () => {
  $$('.nav-button').forEach(item => item.classList.toggle("active", item === button));
  $$('.view').forEach(view => view.classList.toggle("active", view.id === button.dataset.view));
  if (button.dataset.view === "historyView") renderHistory();
  window.scrollTo({ top: 0, behavior: "smooth" });
}));

renderHistory();
if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("/sw.js"));
