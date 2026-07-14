// Grip & GriGri – App-Logik
(function () {
  "use strict";

  const STORAGE_KEY = "gripgrigri_v1";
  const app = document.getElementById("app");
  const bottomNav = document.getElementById("bottomNav");

  // ---------- State ----------
  function defaultSchemeState() {
    return { known: {}, quizBest: 0, scenariosDone: {}, checklistDone: false, checklist: {} };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) throw new Error("empty");
      const parsed = JSON.parse(raw);
      parsed.toprope = Object.assign(defaultSchemeState(), parsed.toprope || {});
      parsed.vorstieg = Object.assign(defaultSchemeState(), parsed.vorstieg || {});
      return parsed;
    } catch (e) {
      return { toprope: defaultSchemeState(), vorstieg: defaultSchemeState() };
    }
  }

  let state = loadState();
  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function progressFor(key) {
    const c = CONTENT[key];
    const s = state[key];
    const cardsPct = c.flashcards.length ? Object.keys(s.known).filter(i => s.known[i]).length / c.flashcards.length : 0;
    const quizPct = c.quiz.length ? Math.min(1, s.quizBest / c.quiz.length) : 0;
    const scenPct = c.scenarios.length ? Object.keys(s.scenariosDone).filter(i => s.scenariosDone[i]).length / c.scenarios.length : 0;
    const checkTotal = c.checklist.reduce((sum, cat) => sum + cat.items.length, 0);
    const checkPct = checkTotal ? Object.keys(s.checklist).filter(k => s.checklist[k]).length / checkTotal : 0;
    const overall = (cardsPct + quizPct + scenPct + checkPct) / 4;
    return Math.round(overall * 100);
  }

  // ---------- Router ----------
  let route = { screen: "home" };
  let quizState = null;
  let scenarioState = null;
  let flashState = null;

  function nav(newRoute, replace) {
    route = newRoute;
    if (replace) history.replaceState(route, "");
    else history.pushState(route, "");
    window.scrollTo(0, 0);
    render();
  }

  // System-Zurück (Android-Geste, Browser-Back) navigiert Screen-weise zurück.
  window.addEventListener("popstate", (e) => {
    route = e.state || { screen: "home" };
    quizState = null;
    scenarioState = null;
    window.scrollTo(0, 0);
    render();
  });

  // ---------- Helpers ----------
  function ringSVG(pct, size, stroke, color) {
    const r = (size - stroke) / 2;
    const c = 2 * Math.PI * r;
    const offset = c - (pct / 100) * c;
    return `<svg width="${size}" height="${size}">
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="var(--track)" stroke-width="${stroke}"/>
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${color}" stroke-width="${stroke}"
        stroke-dasharray="${c}" stroke-dashoffset="${offset}" stroke-linecap="round"/>
    </svg>`;
  }

  function schemeColor(key) {
    return key === "toprope" ? "var(--accent)" : "var(--accent-vorstieg)";
  }

  // ---------- Screens ----------
  function renderHome() {
    const topPct = progressFor("toprope");
    const vorPct = progressFor("vorstieg");
    app.innerHTML = `
      <div class="screen">
        <div class="hero">
          <div class="logo">🧗‍♀️🪢</div>
          <h1>Grip &amp; GriGri</h1>
          <p>Deine Lernhilfe für den DAV-Kletterschein</p>
        </div>

        <button class="schein-card toprope-accent" data-go="toprope">
          <div class="emoji">${CONTENT.toprope.emoji}</div>
          <div class="info">
            <h2>${CONTENT.toprope.title}</h2>
            <p>${CONTENT.toprope.subtitle}</p>
          </div>
          <div class="progress-ring-wrap">
            ${ringSVG(topPct, 48, 5, "var(--accent)")}
            <div class="pct">${topPct}%</div>
          </div>
        </button>

        <button class="schein-card vorstieg-accent" data-go="vorstieg">
          <div class="emoji">${CONTENT.vorstieg.emoji}</div>
          <div class="info">
            <h2>${CONTENT.vorstieg.title}</h2>
            <p>${CONTENT.vorstieg.subtitle}</p>
          </div>
          <div class="progress-ring-wrap">
            ${ringSVG(vorPct, 48, 5, "var(--accent-vorstieg)")}
            <div class="pct">${vorPct}%</div>
          </div>
        </button>

        <button class="schein-card" data-go="knots" style="border-left:4px solid #c9a15a;">
          <div class="emoji">🪢</div>
          <div class="info">
            <h2>Knotengalerie</h2>
            <p>Anseilknoten, Seilende, HMS – Schritt für Schritt</p>
          </div>
        </button>

        <div class="install-banner">
          <div class="ic">📲</div>
          <div>Tipp: Über das Browser-Menü „Zum Startbildschirm hinzufügen" wählen – dann startet die App direkt vom Homescreen, auch offline.</div>
        </div>
      </div>
    `;
    app.querySelectorAll("[data-go]").forEach(b => {
      b.addEventListener("click", () => {
        const target = b.dataset.go;
        if (target === "knots") nav({ screen: "knots" });
        else nav({ screen: "menu", key: target });
      });
    });
    setActiveNav("home");
  }

  function renderMenu(key) {
    const c = CONTENT[key];
    const pct = progressFor(key);
    app.innerHTML = `
      <div class="screen">
        <div class="topbar">
          <button class="back-btn" data-back>‹</button>
          <h1>${c.title}</h1>
        </div>
        <div class="menu-header">
          <div class="emoji">${c.emoji}</div>
          <h2>${c.title}</h2>
          <p>Fortschritt: ${pct}%</p>
        </div>
        <div class="menu-grid">
          <button class="menu-tile" data-go="flash">
            <div class="icon">🗂️</div>
            <div class="label">Lernkarten</div>
            <div class="sub">${c.flashcards.length} Karten</div>
          </button>
          <button class="menu-tile" data-go="quiz">
            <div class="icon">❓</div>
            <div class="label">Quiz</div>
            <div class="sub">${c.quiz.length} Fragen · Beste: ${state[key].quizBest}/${c.quiz.length}</div>
          </button>
          <button class="menu-tile" data-go="scenario">
            <div class="icon">🎬</div>
            <div class="label">Szenarien</div>
            <div class="sub">${c.scenarios.length} Situationen</div>
          </button>
          <button class="menu-tile" data-go="checklist">
            <div class="icon">✅</div>
            <div class="label">Checkliste</div>
            <div class="sub">Prüfungsprotokoll</div>
          </button>
        </div>
        ${c.kletterregeln ? `
        <div class="knot-card" style="margin-top:20px;">
          <h3>Die 8 Kletterregeln</h3>
          <p class="short">Alpenverein-Kletterregeln, immer gültig</p>
          <ul class="knot-steps">
            ${c.kletterregeln.map((r, i) => `<li class="active"><span class="num">${i+1}</span><span>${r}</span></li>`).join("")}
          </ul>
        </div>` : ""}
      </div>
    `;
    app.querySelector("[data-back]").addEventListener("click", () => history.back());
    app.querySelectorAll("[data-go]").forEach(b => {
      b.addEventListener("click", () => nav({ screen: b.dataset.go, key }));
    });
    setActiveNav(key);
  }

  // ---------- Flashcards ----------
  function renderFlash(key) {
    const c = CONTENT[key];
    if (!flashState || flashState.key !== key) {
      flashState = { key, idx: 0, flipped: false, order: shuffledIndices(c.flashcards.length) };
    }
    const total = c.flashcards.length;
    const cardIdx = flashState.order[flashState.idx];
    const card = c.flashcards[cardIdx];
    const known = !!state[key].known[cardIdx];

    app.innerHTML = `
      <div class="screen">
        <div class="topbar">
          <button class="back-btn" data-back>‹</button>
          <h1>Lernkarten</h1>
        </div>
        <div class="card-counter">Karte ${flashState.idx + 1} / ${total} ${known ? "· ✓ gewusst" : ""}</div>
        <div class="flip-card ${flashState.flipped ? "flipped" : ""}" id="flipCard">
          <div class="flip-inner">
            <div class="flip-face flip-front">${card.front}</div>
            <div class="flip-face flip-back">${card.back}</div>
          </div>
          <div class="flip-hint">Zum Umdrehen antippen</div>
        </div>
        <div class="mastery-row">
          <button class="btn-again" data-know="0">🔁 Nochmal</button>
          <button class="btn-know" data-know="1">✓ Weiß ich</button>
        </div>
      </div>
    `;
    app.querySelector("[data-back]").addEventListener("click", () => history.back());
    const flipCard = app.querySelector("#flipCard");
    flipCard.addEventListener("click", () => {
      flashState.flipped = !flashState.flipped;
      flipCard.classList.toggle("flipped", flashState.flipped);
    });
    app.querySelectorAll("[data-know]").forEach(b => {
      b.addEventListener("click", (ev) => {
        ev.stopPropagation();
        state[key].known[cardIdx] = b.dataset.know === "1";
        saveState();
        flashState.idx = (flashState.idx + 1) % total;
        flashState.flipped = false;
        if (flashState.idx === 0) flashState.order = shuffledIndices(total);
        render();
      });
    });
    setActiveNav(key);
  }

  function shuffledIndices(n) {
    const arr = Array.from({ length: n }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // ---------- Quiz ----------
  function renderQuiz(key) {
    const c = CONTENT[key];
    if (!quizState || quizState.key !== key) {
      quizState = { key, idx: 0, score: 0, order: shuffledIndices(c.quiz.length), answered: false, selected: null };
    }

    if (quizState.idx >= c.quiz.length) {
      const pct = Math.round((quizState.score / c.quiz.length) * 100);
      if (quizState.score > state[key].quizBest) {
        state[key].quizBest = quizState.score;
        saveState();
      }
      app.innerHTML = `
        <div class="screen">
          <div class="result-wrap">
            <div class="big-emoji">${pct >= 80 ? "🏆" : pct >= 50 ? "💪" : "🔁"}</div>
            <h2>${pct >= 80 ? "Stark!" : pct >= 50 ? "Guter Lauf!" : "Weiter üben!"}</h2>
            <div class="result-score">${quizState.score}/${c.quiz.length}</div>
            <p>Bestwert: ${state[key].quizBest}/${c.quiz.length}</p>
            <button class="primary-btn" data-again>Nochmal versuchen</button>
            <button class="ghost-btn" data-back>Zurück zum Menü</button>
          </div>
        </div>
      `;
      app.querySelector("[data-again]").addEventListener("click", () => { quizState = null; nav({ screen: "quiz", key }, true); });
      app.querySelector("[data-back]").addEventListener("click", () => { quizState = null; history.back(); });
      setActiveNav(key);
      return;
    }

    const qIdx = quizState.order[quizState.idx];
    const q = c.quiz[qIdx];
    const pctBar = (quizState.idx / c.quiz.length) * 100;

    app.innerHTML = `
      <div class="screen">
        <div class="topbar">
          <button class="back-btn" data-back>‹</button>
          <h1>Quiz</h1>
        </div>
        <div class="quiz-progress"><div style="width:${pctBar}%"></div></div>
        <div class="quiz-q">${q.q}</div>
        <div class="quiz-options">
          ${q.options.map((opt, i) => `<button class="quiz-option" data-i="${i}">${opt}</button>`).join("")}
        </div>
        <div id="explanationSlot"></div>
      </div>
    `;
    app.querySelector("[data-back]").addEventListener("click", () => { quizState = null; history.back(); });

    app.querySelectorAll(".quiz-option").forEach(btn => {
      btn.addEventListener("click", () => {
        if (quizState.answered) return;
        quizState.answered = true;
        const chosen = parseInt(btn.dataset.i, 10);
        const correct = q.correct;
        if (chosen === correct) quizState.score++;
        app.querySelectorAll(".quiz-option").forEach(b => {
          b.setAttribute("disabled", "true");
          const i = parseInt(b.dataset.i, 10);
          if (i === correct) b.classList.add("correct");
          else if (i === chosen) b.classList.add("wrong");
        });
        document.getElementById("explanationSlot").innerHTML = `
          <div class="quiz-explanation">${q.explanation}</div>
          <button class="quiz-next" data-next>Weiter →</button>
        `;
        document.querySelector("[data-next]").addEventListener("click", () => {
          quizState.idx++;
          quizState.answered = false;
          render();
        });
      });
    });
    setActiveNav(key);
  }

  // ---------- Scenarios ----------
  function renderScenario(key) {
    const c = CONTENT[key];
    if (!scenarioState || scenarioState.key !== key) {
      scenarioState = { key, idx: 0, order: shuffledIndices(c.scenarios.length), answered: false };
    }

    if (scenarioState.idx >= c.scenarios.length) {
      app.innerHTML = `
        <div class="screen">
          <div class="result-wrap">
            <div class="big-emoji">🎬</div>
            <h2>Alle Szenarien durch!</h2>
            <p>Du hast alle Situationen für ${c.title} durchgespielt.</p>
            <button class="primary-btn" data-again>Nochmal</button>
            <button class="ghost-btn" data-back>Zurück zum Menü</button>
          </div>
        </div>
      `;
      app.querySelector("[data-again]").addEventListener("click", () => { scenarioState = null; nav({ screen: "scenario", key }, true); });
      app.querySelector("[data-back]").addEventListener("click", () => { scenarioState = null; history.back(); });
      setActiveNav(key);
      return;
    }

    const sIdx = scenarioState.order[scenarioState.idx];
    const s = c.scenarios[sIdx];

    app.innerHTML = `
      <div class="screen">
        <div class="topbar">
          <button class="back-btn" data-back>‹</button>
          <h1>Szenario</h1>
        </div>
        <div class="scenario-box">
          <span class="tag">Was tust du?</span>
          ${s.situation}
        </div>
        <div class="quiz-options">
          ${s.options.map((opt, i) => `<button class="quiz-option" data-i="${i}">${opt}</button>`).join("")}
        </div>
        <div id="explanationSlot"></div>
      </div>
    `;
    app.querySelector("[data-back]").addEventListener("click", () => { scenarioState = null; history.back(); });

    app.querySelectorAll(".quiz-option").forEach(btn => {
      btn.addEventListener("click", () => {
        if (scenarioState.answered) return;
        scenarioState.answered = true;
        const chosen = parseInt(btn.dataset.i, 10);
        app.querySelectorAll(".quiz-option").forEach(b => {
          b.setAttribute("disabled", "true");
          const i = parseInt(b.dataset.i, 10);
          if (i === s.correct) b.classList.add("correct");
          else if (i === chosen) b.classList.add("wrong");
        });
        state[key].scenariosDone[sIdx] = true;
        saveState();
        document.getElementById("explanationSlot").innerHTML = `
          <div class="quiz-explanation">${s.explanation}</div>
          <button class="quiz-next" data-next>Weiter →</button>
        `;
        document.querySelector("[data-next]").addEventListener("click", () => {
          scenarioState.idx++;
          scenarioState.answered = false;
          render();
        });
      });
    });
    setActiveNav(key);
  }

  // ---------- Checklist ----------
  function renderChecklist(key) {
    const c = CONTENT[key];
    app.innerHTML = `
      <div class="screen">
        <div class="topbar">
          <button class="back-btn" data-back>‹</button>
          <h1>Checkliste</h1>
        </div>
        <p style="color:var(--text-dim); font-size:13px; margin-top:0;">Offizielles DAV-Prüfungsprotokoll – geh die Punkte durch, als würdest du gerade geprüft.</p>
        ${c.checklist.map((cat, ci) => `
          <div class="checklist-cat">
            <h3>${cat.category}</h3>
            ${cat.items.map((item, ii) => {
              const checked = !!state[key].checklist[ci + "-" + ii];
              return `
              <div class="check-item ${checked ? "checked" : ""}" data-cat="${ci}" data-item="${ii}">
                <div class="box">${checked ? "✓" : ""}</div>
                <span class="label">${item}</span>
              </div>
            `;}).join("")}
          </div>
        `).join("")}
        <div class="checklist-summary">
          <button class="primary-btn" id="resetCheck">Zurücksetzen</button>
        </div>
      </div>
    `;
    app.querySelector("[data-back]").addEventListener("click", () => history.back());
    const items = app.querySelectorAll(".check-item");
    items.forEach(it => {
      it.addEventListener("click", () => {
        const itemKey = it.dataset.cat + "-" + it.dataset.item;
        const checked = !state[key].checklist[itemKey];
        state[key].checklist[itemKey] = checked;
        it.classList.toggle("checked", checked);
        it.querySelector(".box").textContent = checked ? "✓" : "";
        state[key].checklistDone = Array.from(items).every(x => x.classList.contains("checked"));
        saveState();
      });
    });
    app.querySelector("#resetCheck").addEventListener("click", () => {
      state[key].checklist = {};
      state[key].checklistDone = false;
      saveState();
      items.forEach(it => { it.classList.remove("checked"); it.querySelector(".box").textContent = ""; });
    });
    setActiveNav(key);
  }

  // ---------- Knots ----------
  let knotStepIndex = {}; // id -> current step count shown

  function renderKnots() {
    app.innerHTML = `
      <div class="screen">
        <div class="topbar">
          <button class="back-btn" data-back>‹</button>
          <h1>Knotengalerie</h1>
        </div>
        <p style="color:var(--text-dim); font-size:13px; margin-top:0;">Tippe auf „Weiter", um dir die Bindeschritte nacheinander anzusehen.</p>
        ${CONTENT.knots.map(k => renderKnotCard(k)).join("")}
      </div>
    `;
    app.querySelector("[data-back]").addEventListener("click", () => history.back());

    CONTENT.knots.forEach(wireKnotCard);
    setActiveNav("knots");
  }

  function wireKnotCard(k) {
    const wrap = document.getElementById("knot-" + k.id);
    wrap.querySelector("[data-step-next]").addEventListener("click", () => {
      knotStepIndex[k.id] = ((knotStepIndex[k.id] || 1) % k.steps.length) + 1;
      updateKnotCard(k);
    });
    wrap.querySelector("[data-step-reset]").addEventListener("click", () => {
      knotStepIndex[k.id] = 1;
      updateKnotCard(k);
    });
  }

  function renderKnotCard(k) {
    const current = knotStepIndex[k.id] || 1;
    return `
      <div class="knot-card" id="knot-${k.id}">
        <h3>${k.name}</h3>
        <p class="short">${k.short}</p>
        <div class="knot-anim-wrap">
          ${knotSVG(k.id, current, k.steps.length)}
        </div>
        <ul class="knot-steps">
          ${k.steps.map((s, i) => `<li class="${i < current ? "active" : ""}"><span class="num">${i+1}</span><span>${s}</span></li>`).join("")}
        </ul>
        <div class="knot-controls">
          <button data-step-reset>↺ Von vorn</button>
          <button data-step-next>Weiter →</button>
        </div>
      </div>
    `;
  }

  function updateKnotCard(k) {
    const wrap = document.getElementById("knot-" + k.id);
    wrap.outerHTML = renderKnotCard(k);
    wireKnotCard(k);
  }

  function knotSVG(id, current, total) {
    const frac = current / total;
    const pathD = "M20,90 C20,40 60,20 100,20 C160,20 160,80 110,80 C70,80 70,40 100,40 C140,40 150,70 120,90 C90,110 40,100 30,70";
    const pathLen = 620; // approx length, generous for full reveal
    const dashOffset = pathLen * (1 - frac);
    return `
      <svg width="180" height="130" viewBox="0 0 180 130">
        <path d="${pathD}" fill="none" stroke="var(--track)" stroke-width="7" stroke-linecap="round"/>
        <path d="${pathD}" fill="none" stroke="var(--accent)" stroke-width="7" stroke-linecap="round"
          stroke-dasharray="${pathLen}" stroke-dashoffset="${dashOffset}"
          style="transition: stroke-dashoffset .5s ease;"/>
        <circle cx="20" cy="90" r="6" fill="var(--accent-2)"/>
        <circle cx="30" cy="70" r="6" fill="${frac >= 1 ? 'var(--accent-2)' : 'var(--track)'}"/>
      </svg>
    `;
  }

  // ---------- Nav wiring ----------
  function setActiveNav(which) {
    bottomNav.style.display = "block";
    bottomNav.querySelectorAll("button").forEach(b => {
      b.classList.toggle("active", b.dataset.nav === which);
    });
  }

  bottomNav.querySelectorAll("[data-nav]").forEach(b => {
    b.addEventListener("click", () => {
      const t = b.dataset.nav;
      quizState = null; scenarioState = null; flashState = null;
      if (t === "home") nav({ screen: "home" });
      else if (t === "knots") nav({ screen: "knots" });
      else nav({ screen: "menu", key: t });
    });
  });

  function render() {
    switch (route.screen) {
      case "home": bottomNav.style.display = "none"; renderHome(); break;
      case "menu": renderMenu(route.key); break;
      case "flash": renderFlash(route.key); break;
      case "quiz": renderQuiz(route.key); break;
      case "scenario": renderScenario(route.key); break;
      case "checklist": renderChecklist(route.key); break;
      case "knots": renderKnots(); break;
      default: renderHome();
    }
  }

  history.replaceState(route, "");
  render();
  checkUpdateNote();

  // ---------- Update-Popup ----------
  function checkUpdateNote() {
    if (typeof UPDATE_NOTE === "undefined" || !UPDATE_NOTE.id) return;
    const seenKey = "gripgrigri_seen_update";
    const lastSeen = localStorage.getItem(seenKey);
    if (lastSeen === UPDATE_NOTE.id) return;

    const overlay = document.createElement("div");
    overlay.className = "update-overlay";
    overlay.innerHTML = `
      <div class="update-modal">
        <div class="update-emoji">${UPDATE_NOTE.emoji || "💌"}</div>
        <p>${UPDATE_NOTE.message}</p>
        <button class="primary-btn" id="updateNoteDismiss">${UPDATE_NOTE.button || "OK"}</button>
      </div>
    `;
    document.body.appendChild(overlay);
    document.getElementById("updateNoteDismiss").addEventListener("click", () => {
      localStorage.setItem(seenKey, UPDATE_NOTE.id);
      overlay.remove();
    });
  }

  // ---------- Service worker ----------
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    });
  }
})();
