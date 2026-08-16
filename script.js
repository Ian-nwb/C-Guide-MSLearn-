const STORAGE_KEY = "csharp-backend-roadmap-progress";

function loadChecked() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveChecked(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let checked = loadChecked();

function linkKey(phaseN, idx) {
  return `${phaseN}::${idx}`;
}

function renderNav() {
  const nav = document.getElementById("phaseNav");
  nav.innerHTML = ROADMAP.phases.map(p => `
    <a href="#phase-${p.n}" class="nav-item">
      <span class="nav-num">${p.n}</span>
      <span class="nav-title">${p.title}</span>
    </a>
  `).join("");
}

function renderPhases() {
  const container = document.getElementById("phases");
  container.innerHTML = ROADMAP.phases.map(p => `
    <article class="phase-card" id="phase-${p.n}">
      <div class="phase-head">
        <span class="phase-num">${p.n}</span>
        <h3 class="phase-title">${p.title}</h3>
        ${p.tagline ? `<span class="phase-tag">${p.tagline}</span>` : ""}
      </div>

      <ul class="link-list">
        ${p.links.map((l, i) => {
          const key = linkKey(p.n, i);
          const isChecked = !!checked[key];
          return `
            <li class="link-item">
              <label class="check-label">
                <input type="checkbox" class="check-box" data-key="${key}" ${isChecked ? "checked" : ""}>
                <span class="check-mark"></span>
                <a href="${l.u}" target="_blank" rel="noopener" class="link-anchor ${isChecked ? "done" : ""}">${l.t}</a>
              </label>
            </li>
          `;
        }).join("")}
      </ul>

      ${p.topics && p.topics.length ? `
        <div class="topics">
          <span class="topics-label">topics:</span>
          <span class="topics-list">${p.topics.join(", ")}</span>
        </div>
      ` : ""}

      ${p.extra ? `
        <div class="extra">
          <span class="extra-label">extra:</span>
          <span class="extra-text">${p.extra}</span>
        </div>
      ` : ""}

      ${p.why ? `<div class="why">${p.why}</div>` : ""}
    </article>
  `).join("");
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = ROADMAP.projects.map(group => `
    <div class="project-group">
      <h4 class="project-tier">${group.tier}</h4>
      <ul class="project-items">
        ${group.items.map(i => `<li>${i}</li>`).join("")}
      </ul>
    </div>
  `).join("");
}

function renderCerts() {
  const list = document.getElementById("certList");
  list.innerHTML = ROADMAP.certs.map(c => `
    <li class="cert-item">
      <a href="${c.u}" target="_blank" rel="noopener">${c.t}</a>
      ${c.note ? `<span class="cert-note">${c.note}</span>` : ""}
    </li>
  `).join("");
}

function renderMilestones() {
  const wrap = document.getElementById("milestones");
  wrap.innerHTML = ROADMAP.milestones.map(m => `
    <div class="milestone">
      <div class="milestone-range">${m.range}</div>
      <div class="milestone-arrow">&rarr;</div>
      <div class="milestone-result">${m.result}</div>
    </div>
  `).join("");
}

function totalLinks() {
  return ROADMAP.phases.reduce((sum, p) => sum + p.links.length, 0);
}

function checkedCount() {
  return Object.values(checked).filter(Boolean).length;
}

function updateProgress() {
  const total = totalLinks();
  const done = checkedCount();
  const pct = total ? Math.round((done / total) * 100) : 0;
  document.getElementById("progressPct").textContent = `${pct}%`;
  document.getElementById("progressFill").style.width = `${pct}%`;
  document.getElementById("progressCount").textContent = `${done} / ${total} resources checked`;
}

function attachCheckboxHandlers() {
  document.querySelectorAll(".check-box").forEach(box => {
    box.addEventListener("change", (e) => {
      const key = e.target.dataset.key;
      checked[key] = e.target.checked;
      saveChecked(checked);
      const anchor = e.target.closest(".check-label").querySelector(".link-anchor");
      anchor.classList.toggle("done", e.target.checked);
      updateProgress();
    });
  });
}

document.getElementById("resetBtn").addEventListener("click", () => {
  if (confirm("Reset all progress on this roadmap?")) {
    checked = {};
    saveChecked(checked);
    renderPhases();
    attachCheckboxHandlers();
    updateProgress();
  }
});

renderNav();
renderPhases();
renderProjects();
renderCerts();
renderMilestones();
attachCheckboxHandlers();
updateProgress();
