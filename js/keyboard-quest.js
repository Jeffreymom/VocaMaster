(function () {
  "use strict";

  const curriculum = window.KEYBOARD_CURRICULUM;
  if (!curriculum) return;

  const STORAGE = {
    progress: "vocabMaster:keyboard:progress",
    days: "vocabMaster:keyboard:days",
    stats: "vocabMaster:keyboard:stats",
    streak: "vocabMaster:keyboard:streak",
    achievements: "vocabMaster:keyboard:achievements",
    sound: "vocabMaster:keyboard:sound"
  };
  const STAGE_XP = { warmup:2, keys:3, words:3, game:5, challenge:5 };
  const DAILY_NEW_DAY_LIMIT = 3;
  const KEYBOARD_STAMPS = {
    daily: "./images/stamps/stamps2.png",
    milestones: "./images/stamps/stamps.png"
  };
  const KEY_ROWS = [
    [{ key:"tab", label:"Tab", units:1.4 },"q","w","e","r","t","y","u","i","o","p",{ key:"backspace", label:"Backspace", units:1.8 }],
    [{ key:"capslock", label:"Caps Lock", units:1.6 },"a","s","d","f","g","h","j","k","l",";",{ key:"enter", label:"Enter", units:1.8 }],
    [{ key:"shift-left", label:"Shift", units:2 },"z","x","c","v","b","n","m",",",".","/",{ key:"shift-right", label:"Shift", units:2 }],
    [{ key:"space", label:"Space", units:5.8 }]
  ];
  const KO = { q:"ㅂ",w:"ㅈ",e:"ㄷ",r:"ㄱ",t:"ㅅ",y:"ㅛ",u:"ㅕ",i:"ㅑ",o:"ㅐ",p:"ㅔ",a:"ㅁ",s:"ㄴ",d:"ㅇ",f:"ㄹ",g:"ㅎ",h:"ㅗ",j:"ㅓ",k:"ㅏ",l:"ㅣ",z:"ㅋ",x:"ㅌ",c:"ㅊ",v:"ㅍ",b:"ㅠ",n:"ㅜ",m:"ㅡ" };
  const FINGERS = {
    q:"왼손 새끼",a:"왼손 새끼",z:"왼손 새끼",w:"왼손 약지",s:"왼손 약지",x:"왼손 약지",
    e:"왼손 중지",d:"왼손 중지",c:"왼손 중지",r:"왼손 검지",f:"왼손 검지",v:"왼손 검지",
    t:"왼손 검지",g:"왼손 검지",b:"왼손 검지",y:"오른손 검지",h:"오른손 검지",n:"오른손 검지",
    u:"오른손 검지",j:"오른손 검지",m:"오른손 검지",i:"오른손 중지",k:"오른손 중지",",":"오른손 중지",
    o:"오른손 약지",l:"오른손 약지",".":"오른손 약지",p:"오른손 새끼",";":"오른손 새끼","/":"오른손 새끼",space:"엄지"
  };
  const FINGER_CLASS = {
    "왼손 새끼":"pinky-left", "왼손 약지":"ring-left", "왼손 중지":"middle-left", "왼손 검지":"index-left",
    "오른손 검지":"index-right", "오른손 중지":"middle-right", "오른손 약지":"ring-right", "오른손 새끼":"pinky-right", "엄지":"thumb"
  };
  const FINGER_ENGLISH = {
    "왼손 새끼":"LEFT PINKY", "왼손 약지":"LEFT RING", "왼손 중지":"LEFT MIDDLE", "왼손 검지":"LEFT INDEX",
    "오른손 검지":"RIGHT INDEX", "오른손 중지":"RIGHT MIDDLE", "오른손 약지":"RIGHT RING", "오른손 새끼":"RIGHT PINKY", "엄지":"THUMB"
  };

  const ACHIEVEMENTS = [
    { id:"first-key", name:"Home Row Rookie", icon:"🌱", desc:"첫 STAGE를 완료했어요" },
    { id:"no-miss", name:"Perfect Accuracy", icon:"🎯", desc:"오타 없이 STAGE를 완료했어요" },
    { id:"combo-20", name:"Combo Master", icon:"⚡", desc:"한 STAGE에서 20 콤보를 달성했어요" },
    { id:"streak-7", name:"7 Day Typist", icon:"🔥", desc:"7일 연속 STAGE를 완료했어요" },
    { id:"stage-10", name:"10 Stage Clear", icon:"🥉", desc:"10개 STAGE를 완료했어요" },
    { id:"stage-30", name:"Phase 1 Master", icon:"🥇", desc:"Phase 1 전체 30 STAGE를 완료했어요" },
    { id:"phase1-clear", name:"Keyboard Gate Clear", icon:"🏆", desc:"DAY 030 보스전을 통과했어요" }
  ];

  // ----------------------------------------
  // SOUND ENGINE — 외부 파일 없이 WebAudio 오실레이터로만 생성 (PWA 오프라인에서도 동작)
  // ----------------------------------------
  let soundOn = localStorage.getItem(STORAGE.sound) !== "0";
  let audioCtx = null;
  function ensureAudioCtx() {
    if (!audioCtx) {
      try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
      catch (_) { audioCtx = null; }
    }
    return audioCtx;
  }
  function beep(freq, duration, type, gainPeak, delay) {
    if (!soundOn) return;
    const ctx = ensureAudioCtx();
    if (!ctx) return;
    if (ctx.state === "suspended") ctx.resume();
    const t0 = ctx.currentTime + (delay || 0);
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type || "sine";
    osc.frequency.setValueAtTime(freq, t0);
    gain.gain.setValueAtTime(0, t0);
    gain.gain.linearRampToValueAtTime(gainPeak || 0.12, t0 + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(t0); osc.stop(t0 + duration + 0.02);
  }
  const SFX = {
    correct: () => beep(880, 0.07, "sine", 0.09),
    wrong: () => beep(180, 0.13, "square", 0.09),
    combo: () => { beep(660, 0.07, "triangle", 0.1); beep(880, 0.08, "triangle", 0.1, 0.06); },
    stageClear: () => { beep(523, 0.09, "sine", 0.11); beep(659, 0.09, "sine", 0.11, 0.09); beep(784, 0.15, "sine", 0.12, 0.18); },
    missionClear: () => [523, 659, 784, 1046].forEach((f, i) => beep(f, 0.13, "sine", 0.12, i * 0.1)),
    fail: () => { beep(300, 0.16, "sawtooth", 0.08); beep(220, 0.2, "sawtooth", 0.08, 0.13); },
    badge: () => [784, 988, 1174, 1568].forEach((f, i) => beep(f, 0.16, "triangle", 0.12, i * 0.11)),
    boss: () => [220, 277, 330, 440].forEach((f, i) => beep(f, 0.18, "sawtooth", 0.09, i * 0.14))
  };
  function toggleSound() {
    soundOn = !soundOn;
    localStorage.setItem(STORAGE.sound, soundOn ? "1" : "0");
    if (soundOn) beep(660, 0.08, "sine", 0.1);
    document.querySelectorAll("[data-kq-sound]").forEach(btn => {
      btn.textContent = soundOn ? "🔊" : "🔇";
      btn.setAttribute("aria-label", soundOn ? "소리 끄기" : "소리 켜기");
    });
  }
  function soundToggleMarkup() {
    return `<button class="kq-sound-toggle" data-kq-sound aria-label="${soundOn ? "소리 끄기" : "소리 켜기"}">${soundOn ? "🔊" : "🔇"}</button>`;
  }

  let state = null;
  let activeDay = null;
  let stageIndex = 0;
  let accepted = "";
  let session = null;
  let paused = false;
  let composing = false;
  let stageTimer = null;
  let stageEndAt = 0;
  let pauseStartedAt = 0;
  let stageRounds = 0;
  let stageDone = false;
  let currentTarget = "";
  let lastPhysicalKey = "";
  let recentlyCompletedDay = null;
  let dashboardView = "missions";
  let game = null;

  const read = (key, fallback) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch (_) { return fallback; }
  };
  const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));
  const dayKey = id => String(id).padStart(3, "0");
  const today = () => new Date().toLocaleDateString("en-CA");
  const compactDate = value => {
    const parts = String(value || "").split("-");
    return parts.length === 3 ? `${parts[1]}.${parts[2]}` : "";
  };
  const firstCompletionDate = record => record?.firstCompletedDate || record?.completedDate || (record?.complete ? record.date : null);
  const completedTodayCount = () => Object.values(state.days).filter(record =>
    record?.complete && firstCompletionDate(record) === today()
  ).length;
  const dailyLimitReached = () => completedTodayCount() >= DAILY_NEW_DAY_LIMIT;
  const escape = value => String(value).replace(/[&<>'"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));
  const isKoreanText = value => /[가-힣ㄱ-ㅎㅏ-ㅣ]/.test(value || "");
  // app.js의 `let xpHistory`는 top-level 렉시컬 바인딩이라 window.xpHistory로는 읽히지 않는다.
  // 같은 문서의 classic script는 전역 렉시컬 스코프를 공유하므로 bare 참조로 읽는다.
  const hasXpHistory = id => { try { return Boolean(xpHistory && xpHistory[id]); } catch (_) { return false; } };

  function loadState() {
    state = {
      progress: read(STORAGE.progress, { unlockedDay:1, lastDay:null }),
      days: read(STORAGE.days, {}),
      stats: read(STORAGE.stats, { history:[], lifetime:{ keystrokes:0, errors:0, bestCombo:0 } }),
      streak: read(STORAGE.streak, { current:0, best:0, lastDate:null }),
      achievements: read(STORAGE.achievements, [])
    };
  }

  function saveState() {
    write(STORAGE.progress, state.progress);
    write(STORAGE.days, state.days);
    write(STORAGE.stats, state.stats);
    write(STORAGE.streak, state.streak);
    write(STORAGE.achievements, state.achievements);
  }

  function openQuest() {
    clearInterval(stageTimer);
    loadState();
    currentSubject = null;
    dashboardView = "missions";
    showScreen("keyboardQuestScreen");
    setActiveNav("keyboard");
    renderDashboard();
  }

  // ----------------------------------------
  // DASHBOARD (MISSIONS / STATS / BADGES 탭)
  // ----------------------------------------
  function nextRecommendedDay() {
    return curriculum.days.find(d => !state.days[dayKey(d.id)]?.complete && d.id <= state.progress.unlockedDay)
      || curriculum.days.find(d => d.id === state.progress.unlockedDay)
      || curriculum.days[curriculum.days.length - 1];
  }

  function renderDashboard(view) {
    dashboardView = view || dashboardView;
    const root = document.getElementById("keyboardQuestContent");
    if (!root) return;
    const completeCount = Object.values(state.days).filter(item => item.complete).length;
    const streak = state.streak.current || 0;
    const todayCount = completedTodayCount();
    const todayComplete = todayCount >= DAILY_NEW_DAY_LIMIT;
    const featured = nextRecommendedDay();
    const featuredRecord = featured ? state.days[dayKey(featured.id)] : null;
    const featuredBlocked = featured && !featuredRecord?.complete && dailyLimitReached();

    root.innerHTML = `
      <section class="kq-hero">
        <div><p class="kq-kicker">365 STAGE JOURNEY · 10 MINUTES A DAY</p><h2>KEYBOARD QUEST</h2>
        <p>지금은 <b>PHASE 1 · 30 STAGE</b>가 열려 있어요. 하루 1 STAGE만 해도 충분하고, 같은 방식으로 다음 Phase가 이어져요.</p></div>
        <div class="kq-hero-side">${soundToggleMarkup()}<div class="kq-hero-stats"><strong>${completeCount} / ${curriculum.days.length}</strong><span>PHASE 1 STAGES</span><strong>🔥 ${streak}</strong><span>DAY STREAK</span></div>
        <div class="kq-daily-card ${todayComplete ? "complete" : ""}"><span>TODAY · 오늘의 신규 미션</span><strong>${todayCount} / ${DAILY_NEW_DAY_LIMIT}</strong><small>${todayComplete ? "오늘의 신규 미션 완료! 복습은 언제든 가능해요." : `약 10분 · 추가로 ${DAILY_NEW_DAY_LIMIT - todayCount} STAGE까지 가능`}</small></div></div>
      </section>

      ${featured ? `<section class="kq-featured ${featuredBlocked ? "blocked" : ""}">
        <p class="kq-featured-kicker">오늘의 추천 미션</p>
        <div class="kq-featured-body">
          <div><strong>DAY ${dayKey(featured.id)} · ${escape(featured.title)}</strong><span>${escape(featured.subtitle || "")} · 약 10분</span></div>
          <button class="kq-featured-start" data-kq-day="${featured.id}" ${featuredBlocked ? "disabled" : ""}>${featuredBlocked ? "오늘은 여기까지" : "START →"}</button>
        </div>
      </section>` : ""}

      <div class="kq-tabs">
        <button class="kq-tab ${dashboardView === "missions" ? "active" : ""}" data-kq-view="missions">MISSIONS</button>
        <button class="kq-tab ${dashboardView === "stats" ? "active" : ""}" data-kq-view="stats">STATS</button>
        <button class="kq-tab ${dashboardView === "badges" ? "active" : ""}" data-kq-view="badges">BADGES</button>
      </div>

      ${dashboardView === "missions" ? `<div class="kq-priority"><strong>ACCURACY FIRST</strong><span>손가락 → 키 위치 → 정확도 → 리듬 → 속도</span></div>
      <section class="kq-phase-list">${curriculum.phases.map(renderPhase).join("")}</section>` : ""}
      ${dashboardView === "stats" ? renderStatsView() : ""}
      ${dashboardView === "badges" ? renderBadgesView() : ""}
    `;
    recentlyCompletedDay = null;
    root.querySelectorAll("[data-kq-day]").forEach(button => button.addEventListener("click", () => {
      const lesson = curriculum.days.find(item => item.id === Number(button.dataset.kqDay));
      if (lesson && !button.disabled) startDay(lesson);
    }));
    root.querySelectorAll("[data-kq-view]").forEach(button => button.addEventListener("click", () => renderDashboard(button.dataset.kqView)));
    root.querySelectorAll("[data-kq-sound]").forEach(btn => btn.addEventListener("click", toggleSound));
  }

  function renderPhase(phase) {
    if (phase.id !== 1) {
      return `<article class="kq-phase coming">
        <header><div><span>PHASE ${phase.id} · DAY ${String(phase.days[0]).padStart(3,"0")}–${String(phase.days[1]).padStart(3,"0")}</span><h3>${phase.title}</h3><p>${phase.subtitle}</p></div><b>준비 중</b></header>
        <p class="kq-phase-goal">${escape(phase.goal || "")}</p>
        <p class="kq-phase-note">Phase 1(30 STAGE)을 같은 엔진으로 먼저 완성해보세요. 다음 Phase도 같은 방식으로 이어집니다.</p>
      </article>`;
    }
    const implemented = curriculum.days;
    const visibleDays = Array.from({length:30}, (_, index) => index + 1);
    return `<article class="kq-phase">
      <header><div><span>PHASE ${phase.id} · DAY ${String(phase.days[0]).padStart(3,"0")}–${String(phase.days[1]).padStart(3,"0")}</span><h3>${phase.title}</h3><p>${phase.subtitle}</p></div></header>
      <div class="kq-day-map">${visibleDays.map(id => {
        const lesson = implemented.find(item => item.id === id);
        const record = state.days[dayKey(id)];
        const completed = Boolean(record?.complete);
        const progressionUnlocked = Boolean(lesson) && id <= state.progress.unlockedDay;
        const blockedToday = progressionUnlocked && !completed && dailyLimitReached();
        const unlocked = completed || (progressionUnlocked && !blockedToday);
        const stampRotation = ((id % 5) - 2) * 2;
        const completedDate = compactDate(record?.completedDate || record?.date);
        const stamp = completed ? `<span class="kq-day-stamp ${recentlyCompletedDay === id ? "just-stamped" : ""}" style="--stamp-rotation:${stampRotation}deg" aria-label="Mission clear ${completedDate}">
          <img src="${KEYBOARD_STAMPS.daily}" alt="" aria-hidden="true"><span class="kq-stamp-meta">DAY ${String(id).padStart(3,"0")} · ${completedDate}</span></span>` : "";
        return `<button class="kq-day-node ${completed ? "complete" : ""} ${!unlocked ? "locked" : ""} ${blockedToday ? "daily-locked" : ""}" data-kq-day="${id}" ${!unlocked ? "disabled" : ""}>
          <span class="kq-day-state">${completed ? "✓" : unlocked ? "●" : blockedToday ? "⏳" : "🔒"}</span><strong>DAY ${String(id).padStart(3,"0")}</strong><small>${blockedToday ? "오늘은 여기까지" : lesson ? lesson.title : "Coming soon"}</small>${stamp}</button>`;
      }).join("")}</div></article>`;
  }

  function formatDuration(totalSeconds) {
    const minutes = Math.round(totalSeconds / 60);
    if (minutes < 60) return `${minutes}분`;
    return `${Math.floor(minutes / 60)}시간 ${minutes % 60}분`;
  }

  function renderStatsView() {
    const history = state.stats.history;
    const totalSeconds = history.reduce((sum, h) => sum + (h.seconds || 0), 0);
    const completeCount = Object.values(state.days).filter(item => item.complete).length;
    const avgAcc = history.length ? Math.round(history.reduce((sum, h) => sum + h.accuracy, 0) / history.length) : 0;
    const recent = history.slice(-7);
    return `<section class="kq-stats">
      <div class="kq-stats-grid">
        <div class="kq-stat-card primary"><strong>${formatDuration(totalSeconds)}</strong><span>TOTAL PRACTICE TIME</span></div>
        <div class="kq-stat-card"><strong>${completeCount} / ${curriculum.days.length}</strong><span>STAGES COMPLETE</span></div>
        <div class="kq-stat-card"><strong>${avgAcc}%</strong><span>AVERAGE ACCURACY</span></div>
        <div class="kq-stat-card"><strong>${state.stats.lifetime.bestCombo || 0}</strong><span>BEST COMBO EVER</span></div>
        <div class="kq-stat-card"><strong>🔥 ${state.streak.current || 0}</strong><span>CURRENT STREAK</span></div>
        <div class="kq-stat-card"><strong>🏅 ${state.streak.best || 0}</strong><span>BEST STREAK</span></div>
      </div>
      <p class="kq-trend-label">최근 연습 정확도 추이</p>
      ${recent.length ? `<div class="kq-trend">${recent.map(h => `<div class="kq-trend-bar" style="--h:${Math.max(h.accuracy,4)}%"><b>${h.accuracy}%</b><span>DAY ${dayKey(h.day)}</span></div>`).join("")}</div>`
        : `<p class="kq-empty">아직 완료한 STAGE가 없어요. 첫 STAGE를 완료하면 여기에 기록이 쌓여요.</p>`}
    </section>`;
  }

  function renderBadgesView() {
    return `<section class="kq-badges">
      <div class="kq-badge-grid">${ACHIEVEMENTS.map(item => {
        const unlocked = state.achievements.includes(item.id);
        return `<div class="kq-badge-card ${unlocked ? "unlocked" : "locked"}">
          <span class="kq-badge-icon">${unlocked ? item.icon : "🔒"}</span>
          <strong>${item.name}</strong><span>${item.desc}</span>
        </div>`;
      }).join("")}</div>
    </section>`;
  }

  // ----------------------------------------
  // DAY 진행
  // ----------------------------------------
  function startDay(lesson) {
    const record = state.days[dayKey(lesson.id)];
    if (!record?.complete && dailyLimitReached()) {
      renderDashboard();
      return;
    }
    activeDay = lesson;
    stageIndex = 0;
    session = {
      startedAt:Date.now(), typed:0, correct:0, errors:0, combo:0, bestCombo:0,
      enTyped:0, enCorrect:0, koTyped:0, koCorrect:0, stageResults:[],
      lastLanguage:null, xpEarned:0, errorKeys:{}
    };
    showScreen("keyboardPlayScreen");
    renderStage();
  }

  function stageTarget(stage) {
    if (stage.id === "warmup") return activeDay.warmUp || activeDay.english;
    if (stage.id === "keys") return activeDay.keyTraining || activeDay.korean;
    if (stage.id === "words") return activeDay.wordTraining || `${activeDay.words[0]} ${activeDay.words[1]}`;
    if (stage.id === "challenge") return activeDay.challenge;
    return "";
  }

  function renderStage() {
    clearInterval(stageTimer);
    game = null;
    const stage = activeDay.stages[stageIndex];
    accepted = "";
    paused = false;
    stageDone = false;
    stageRounds = 0;
    const isGameStage = stage.id === "game";
    const target = isGameStage ? "" : stageTarget(stage);
    currentTarget = target;
    const langSample = isGameStage ? (activeDay.miniGame.content || activeDay.words.join(" ")) : target;
    const stageLang = isKoreanText(langSample) ? "ko" : "en";
    const needsGate = session.lastLanguage !== stageLang;
    session.stageStart = Date.now();
    session.stageTypedStart = session.typed;
    session.stageCorrectStart = session.correct;

    const root = document.getElementById("keyboardPlayContent");
    root.innerHTML = `
      <div class="kq-play-top"><div><span>TODAY · DAY ${dayKey(activeDay.id)}</span><h2>${escape(activeDay.title)}</h2></div>
        <div class="kq-play-top-actions">${soundToggleMarkup()}<button id="kqPause" class="kq-pause">Ⅱ PAUSE</button></div></div>
      <div class="kq-stage-strip">${activeDay.stages.map((item,index) => `<div class="${index < stageIndex ? "done" : index === stageIndex ? "active" : ""}"><b>${index+1}</b><span>${item.label}<small>${item.minutes} MIN</small></span></div>`).join("")}</div>
      <div id="kqStageBody"></div>`;

    document.getElementById("kqPause").addEventListener("click", togglePause);

    if (isGameStage) mountGameStage(stage); else mountTypingStage(stage, target);

    if (needsGate) {
      showLanguageGate(stageLang, () => { session.lastLanguage = stageLang; armStage(stage); });
    } else {
      session.lastLanguage = stageLang;
      armStage(stage);
    }
  }

  function showLanguageGate(lang, onContinue) {
    const isKo = lang === "ko";
    const overlay = document.createElement("div");
    overlay.className = "kq-ime-gate";
    overlay.innerHTML = `<div class="kq-ime-card">
      <span class="kq-ime-icon">${isKo ? "🇰🇷" : "🇺🇸"}</span>
      <p class="kq-ime-kicker">${isKo ? "KOREAN · 두벌식" : "ENGLISH · QWERTY"}</p>
      <h3>${isKo ? "키보드를 한글 입력 상태로 바꿔주세요" : "키보드를 영문 입력 상태로 바꿔주세요"}</h3>
      <p class="kq-ime-desc">${isKo ? "한/영 키를 눌러 한글(두벌식) 모드로 전환한 뒤 시작해요." : "한/영 키를 눌러 영문 모드로 전환한 뒤 시작해요."}</p>
      <button id="kqImeStart" class="kq-ime-start">확인, 전환했어요 →</button>
    </div>`;
    document.body.appendChild(overlay);
    document.getElementById("kqImeStart").addEventListener("click", () => {
      overlay.remove();
      onContinue();
    });
  }

  function armStage(stage) {
    stageEndAt = Date.now() + stage.minutes * 60000;
    stageTimer = setInterval(updateStageTimer, 250);
    if (stage.id === "game") startGamePlay();
    const input = document.getElementById("kqInput") || document.getElementById("kqRunnerInput");
    if (input) input.focus();
  }

  // ----------------------------------------
  // 타이핑 스테이지 (WARM UP / KEY TRAINING / WORD TRAINING / DAILY CHALLENGE)
  // ----------------------------------------
  function mountTypingStage(stage, target) {
    const body = document.getElementById("kqStageBody");
    body.innerHTML = `
      <section class="kq-game">
        <div class="kq-game-label"><span>${stage.label}</span><b id="kqTimer">${stage.minutes}:00</b></div>
        <p class="kq-language">${isKoreanText(target) ? "KOREAN · 두벌식" : "ENGLISH · QWERTY"}</p>
        <div class="kq-target" id="kqTarget" aria-live="polite">${targetMarkup(target, 0)}</div>
        <input id="kqInput" class="kq-input" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="타이핑 입력" placeholder="여기에 그대로 입력하세요" />
        <p id="kqFeedback" class="kq-feedback">속도보다 정확하게 입력해요.</p>
        <div class="kq-live-stats"><div class="primary"><strong id="kqAccuracy">100%</strong><span>ACCURACY</span></div><div class="combo-stat"><strong id="kqCombo">0</strong><span>COMBO</span><small id="kqComboNote"></small></div><div><strong id="kqErrors">0</strong><span>ERRORS</span></div></div>
      </section>
      <div id="kqKeyboard">${keyboardMarkup(activeDay.targetKeys[0])}</div>
      <button id="kqNextStage" class="kq-next" disabled>${stageIndex === 4 ? "DAY RESULT →" : "NEXT MISSION →"}</button>`;
    const input = document.getElementById("kqInput");
    input.addEventListener("compositionstart", () => composing = true);
    input.addEventListener("compositionend", () => { composing = false; evaluateInput(input, target); });
    input.addEventListener("input", () => { if (!composing) evaluateInput(input, target); });
    input.addEventListener("blur", () => { if (!paused) setTimeout(() => input.focus(), 0); });
    document.getElementById("kqNextStage").addEventListener("click", nextStage);
  }

  function evaluateInput(input, target) {
    if (paused || input.value === accepted) return;
    const next = input.value;
    const valid = target.startsWith(next) && next.length >= accepted.length;
    const feedbackKey = lastPhysicalKey;
    const additions = Math.max(next.length - accepted.length, 1);
    session.typed += additions;
    const isKorean = isKoreanText(next.slice(-1));
    if (isKorean) session.koTyped += additions; else session.enTyped += additions;
    if (!valid) {
      session.errors += 1;
      session.combo = 0;
      session.errorKeys[feedbackKey] = (session.errorKeys[feedbackKey] || 0) + 1;
      input.classList.add("wrong");
      document.getElementById("kqFeedback").textContent = "괜찮아요. 표시된 자리부터 다시 정확하게!";
      setTimeout(() => input.classList.remove("wrong"), 180);
      input.value = accepted;
      SFX.wrong();
    } else {
      const gained = next.length - accepted.length;
      accepted = next;
      session.correct += gained;
      if (isKorean) session.koCorrect += gained; else session.enCorrect += gained;
      session.combo += gained;
      session.bestCombo = Math.max(session.bestCombo, session.combo);
      document.getElementById("kqFeedback").textContent = comboMessage(session.combo);
      if (session.combo > 0 && session.combo % 10 === 0) SFX.combo(); else SFX.correct();
    }
    updateLive(target);
    flashVirtualKey(feedbackKey, valid ? "success" : "wrong");
    if (accepted === target) finishTarget(target, input);
  }

  function finishTarget(target, input) {
    stageRounds += 1;
    if (Date.now() >= stageEndAt) {
      completeStage();
      return;
    }
    accepted = "";
    input.value = "";
    document.getElementById("kqFeedback").textContent = `✓ ${stageRounds} ROUND · 남은 시간도 정확하게 이어가요.`;
    updateLive(target);
  }

  function updateLive(target) {
    document.getElementById("kqTarget").innerHTML = targetMarkup(target, accepted.length);
    document.getElementById("kqAccuracy").textContent = `${accuracy()}%`;
    document.getElementById("kqCombo").textContent = session.combo;
    const comboNote = document.getElementById("kqComboNote");
    if (comboNote) comboNote.textContent = comboLabel(session.combo);
    document.getElementById("kqErrors").textContent = session.errors;
    const nextChar = target[accepted.length] || "";
    document.getElementById("kqKeyboard").innerHTML = keyboardMarkup(findKey(nextChar));
  }

  // ----------------------------------------
  // MINI GAME 엔진 — 카테고리별 규칙은 다르지만 timer/score/combo/errors/lives는 공유
  // ----------------------------------------
  const GAME_MODE_MAP = {
    "accuracy-target":"falling", "key-hunt-left":"keyhunt", "key-hunt-right":"keyhunt",
    "ping-pong":"pingpong", "rhythm-tap":"rhythm", "reach-return":"keyhunt",
    "flash-key":"falling", "twin-target":"keyhunt", "index-switch":"pingpong",
    "top-row-rush":"falling", "down-back":"falling", "target-path":"runner",
    "right-hand-combo":"keyhunt", "falling-keys":"falling", "accuracy-shield":"falling",
    "keyboard-relay":"runner", "rhythm-run":"rhythm", "ghost-race":"runner",
    "boss-round":"boss"
  };
  const CATEGORY_LABEL = {
    keyhunt:"KEY HUNT", falling:"FALLING KEYS", balloon:"BALLOON POP", pingpong:"PING PONG",
    rhythm:"RHYTHM TAP", runner:"TYPING RUNNER", boss:"BOSS ROUND"
  };
  function resolveGameCategory(miniGame) {
    if (miniGame.mode && GAME_MODE_MAP[miniGame.mode]) {
      const mapped = GAME_MODE_MAP[miniGame.mode];
      if (mapped === "falling" && miniGame.type === "balloon") return "balloon";
      return mapped;
    }
    if (miniGame.type === "boss") return "boss";
    if (miniGame.type === "balloon") return "balloon";
    if (miniGame.type === "meteor") return "falling";
    return "runner";
  }
  function gamePool(miniGame) {
    const raw = (miniGame.content || activeDay.words.join(" ")).toLowerCase();
    const pool = raw.split("").filter(ch => /[a-z;,./]/.test(ch));
    return pool.length ? pool : ["f","j"];
  }
  const ROUND_KEY_POOLS = [
    { test:/home/i, keys:["a","s","d","f","j","k","l",";"] },
    { test:/top/i, keys:["q","w","e","r","t","y","u","i","o","p"] },
    { test:/bottom/i, keys:["z","x","c","v","b","n","m",",",".","/"] },
    { test:/left/i, keys:["q","w","e","r","t","a","s","d","f","g","z","x","c","v","b"] },
    { test:/right/i, keys:["y","u","i","o","p","h","j","k","l",";","n","m",",",".","/"] },
    { test:/full|mixed|final/i, keys:["a","s","d","f","g","h","j","k","l",";","q","w","e","r","t","y","u","i","o","p","z","x","c","v","b","n","m",",",".","/"] }
  ];
  function roundKeyPool(label) {
    const match = ROUND_KEY_POOLS.find(item => item.test.test(label));
    return match ? match.keys : activeDay.targetKeys.filter(k => typeof k === "string" && k.length === 1);
  }

  function mountGameStage(stage) {
    const category = resolveGameCategory(activeDay.miniGame);
    const label = activeDay.miniGame.label || CATEGORY_LABEL[category];
    const body = document.getElementById("kqStageBody");
    body.innerHTML = `
      <section class="kq-game kq-arena-wrap">
        <div class="kq-game-label"><span>${escape(label)}</span><b id="kqTimer">${stage.minutes}:00</b></div>
        <div class="kq-mode-chip">${escape(CATEGORY_LABEL[category])}</div>
        <div class="kq-hud">
          <div class="primary"><strong id="kqGScore">0</strong><span>SCORE</span></div>
          <div class="combo-stat"><strong id="kqGCombo">0</strong><span>COMBO</span></div>
          <div><strong id="kqGLives">${category === "falling" || category === "balloon" ? "❤❤❤" : category === "boss" ? "100%" : "—"}</strong><span>${category === "falling" || category === "balloon" ? "LIVES" : category === "boss" ? "BOSS HP" : "STATUS"}</span></div>
          <div><strong id="kqGErrors">0</strong><span>ERRORS</span></div>
        </div>
        <div id="kqArena" class="kq-arena kq-arena-${category}"></div>
        <p id="kqFeedback" class="kq-feedback">${gameIntro(category)}</p>
      </section>
      <div id="kqKeyboard">${keyboardMarkup(activeDay.targetKeys[0])}</div>
      <button id="kqNextStage" class="kq-next" disabled>${stageIndex === 4 ? "DAY RESULT →" : "NEXT MISSION →"}</button>`;
    document.getElementById("kqNextStage").addEventListener("click", nextStage);

    game = {
      category, score:0, combo:0, bestCombo:0, errors:0, lives:3, hits:0,
      targets:[], nextSpawnAt:0, spawnInterval:1500, maxOnScreen:1, pool: gamePool(activeDay.miniGame),
      poolIndex:0, expectedHand:"left", beatAt:0, beatInterval:900, beatKey:"",
      roundIndex:0, roundEndAt:0, roundPool:[], hp:100, transitioning:false,
      runnerWords:[], runnerWordIndex:0, runnerAccepted:"", runnerPos:0, finished:false,
      started:false
    };

    if (category === "keyhunt") { game.maxOnScreen = 1; game.spawnInterval = 1600; setupArenaSlots(); }
    if (category === "falling") { game.maxOnScreen = 2; game.spawnInterval = 1300; }
    if (category === "balloon") { game.maxOnScreen = 2; game.spawnInterval = 1400; }
    if (category === "pingpong") setupPingPongArena();
    if (category === "rhythm") { game.beatInterval = 900; setupRhythmArena(); }
    if (category === "runner") setupRunnerArena();
    if (category === "boss") { setupBossArena(); }
  }

  // armStage()가 타이머를 실제로 켤 때(= IME 게이트를 통과한 뒤) 호출된다.
  // 게이트가 뜨는 동안 목표물이 미리 스폰되어 시간이 흘러버리는 것을 방지한다.
  function startGamePlay() {
    if (!game) return;
    game.started = true;
    if (game.category === "keyhunt") spawnKeyhuntTarget();
    if (game.category === "rhythm") startBeat(Date.now());
    if (game.category === "boss") beginBossRound();
  }

  function gameIntro(category) {
    return {
      keyhunt:"화면에 표시된 키를 재빠르게 눌러요.",
      falling:"키가 바닥에 닿기 전에 눌러서 없애요.",
      balloon:"풍선이 위로 사라지기 전에 키를 눌러 터뜨려요.",
      pingpong:"왼손 키와 오른손 키를 번갈아 눌러 공을 보내요.",
      rhythm:"박자에 맞춰 키를 눌러요. PERFECT를 노려봐요!",
      runner:"정확하게 입력할수록 캐릭터가 빨라져요. 결승선까지!",
      boss:"라운드마다 다른 구역의 키가 나와요. 보스 HP를 깎아봐요!"
    }[category] || "정확하게 입력해봐요.";
  }

  function gainHit(points) {
    game.score += points;
    game.combo += 1;
    game.bestCombo = Math.max(game.bestCombo, game.combo);
    game.hits += 1;
    session.typed += 1; session.correct += 1;
    session.combo += 1; session.bestCombo = Math.max(session.bestCombo, session.combo);
    if (game.combo > 0 && game.combo % 10 === 0) SFX.combo(); else SFX.correct();
  }
  function loseHit(key) {
    game.errors += 1;
    game.combo = 0;
    session.typed += 1; session.errors += 1; session.combo = 0;
    if (key) session.errorKeys[key] = (session.errorKeys[key] || 0) + 1;
    SFX.wrong();
  }
  function updateGameHUD() {
    document.getElementById("kqGScore").textContent = game.score;
    document.getElementById("kqGCombo").textContent = game.combo;
    document.getElementById("kqGErrors").textContent = game.errors;
    const livesEl = document.getElementById("kqGLives");
    if (livesEl && (game.category === "falling" || game.category === "balloon")) {
      livesEl.textContent = "❤".repeat(Math.max(game.lives, 0)) + "🖤".repeat(3 - Math.max(game.lives, 0));
    }
    if (livesEl && game.category === "boss") livesEl.textContent = `${Math.max(Math.round(game.hp), 0)}%`;
  }
  function nextPoolKey() {
    const key = game.pool[game.poolIndex % game.pool.length];
    game.poolIndex += 1;
    return key;
  }
  // 게임 스테이지에서도 타이핑 스테이지처럼 "지금 눌러야 할 키"에 맞춰
  // 손가락/키보드 가이드를 실시간으로 갱신한다 (안 하면 오래된 키를 계속 가리켜
  // 잘못된 손가락을 가르치게 됨).
  function currentGameTargetKey() {
    if (!game) return null;
    if (game.category === "keyhunt" || game.category === "boss") return game.current?.key || null;
    if (game.category === "falling" || game.category === "balloon") return game.targets[0]?.key || null;
    if (game.category === "pingpong") return game.pingKey || null;
    if (game.category === "rhythm") return game.beatKey || null;
    if (game.category === "runner") {
      const word = game.runnerWords?.[game.runnerWordIndex % game.runnerWords.length] || "";
      return word[game.runnerAccepted.length] || null;
    }
    return null;
  }
  function refreshGameKeyboard() {
    const el = document.getElementById("kqKeyboard");
    if (!el) return;
    el.innerHTML = keyboardMarkup(findKey(currentGameTargetKey() || activeDay.targetKeys[0]));
  }

  // --- KEY HUNT ---
  function setupArenaSlots() {
    const arena = document.getElementById("kqArena");
    arena.innerHTML = `<div class="kq-slots">${[0,1,2,3,4].map(i => `<div class="kq-slot" data-slot="${i}"><b></b></div>`).join("")}</div>`;
  }
  function spawnKeyhuntTarget(poolOverride) {
    if (!game) return;
    const pool = poolOverride || game.pool;
    const key = pool[Math.floor(Math.random() * pool.length)];
    const slot = Math.floor(Math.random() * 5);
    game.current = { key, slot, bornAt:Date.now(), duration:2200 };
    document.querySelectorAll(".kq-slot").forEach((el, i) => {
      el.classList.toggle("active", i === slot);
      el.querySelector("b").textContent = i === slot ? key.toUpperCase() : "";
    });
    refreshGameKeyboard();
  }
  function keyhuntHit(key) {
    if (!game.current) return;
    if (key === game.current.key) {
      gainHit(10);
      flashSlot(game.current.slot, "hit");
      if (game.category === "boss") bossHit(); else { updateGameHUD(); spawnKeyhuntTarget(); }
    } else {
      loseHit(key);
      flashSlot(game.current.slot, "miss");
      updateGameHUD();
    }
  }
  function flashSlot(slot, cls) {
    const el = document.querySelector(`.kq-slot[data-slot="${slot}"]`);
    if (!el) return;
    el.classList.add(cls);
    setTimeout(() => el.classList.remove(cls), 220);
  }
  function keyhuntTimeoutCheck(now) {
    if (game.category === "boss" || !game.current) return;
    if (now - game.current.bornAt >= game.current.duration) {
      loseHit(null);
      flashSlot(game.current.slot, "miss");
      updateGameHUD();
      spawnKeyhuntTarget();
    }
  }

  // --- FALLING / BALLOON ---
  function spawnFallOrBalloon() {
    const arena = document.getElementById("kqArena");
    const key = nextPoolKey();
    const el = document.createElement("span");
    el.className = `kq-fall-target ${game.category === "balloon" ? "balloon" : ""}`;
    el.textContent = game.category === "balloon" ? `🎈${key.toUpperCase()}` : key.toUpperCase();
    el.style.left = `${8 + Math.random() * 78}%`;
    arena.appendChild(el);
    const duration = Math.max(1800, 3200 - game.combo * 40);
    game.targets.push({ key, el, bornAt:Date.now(), duration, done:false });
    if (game.targets.length === 1) refreshGameKeyboard();
  }
  function tickFallOrBalloon(now) {
    game.targets.forEach(t => {
      const progress = Math.min(1, (now - t.bornAt) / t.duration);
      const pos = game.category === "balloon" ? (100 - progress * 96) : (progress * 88);
      t.el.style.top = `${pos}%`;
      if (progress >= 1 && !t.done) {
        t.done = true;
        t.el.classList.add("miss");
        game.lives = Math.max(0, game.lives - 1);
        loseHit(null);
        updateGameHUD();
        if (game.lives <= 0) {
          game.lives = 3;
          flashArenaMessage("💥 SHIELD BROKEN — 다시 집중해요!");
        }
        setTimeout(() => t.el.remove(), 200);
      }
    });
    const hadDone = game.targets.some(t => t.done);
    game.targets = game.targets.filter(t => !t.done);
    if (hadDone) refreshGameKeyboard();
  }
  function fallingHit(key) {
    const idx = game.targets.findIndex(t => t.key === key && !t.done);
    if (idx === -1) { loseHit(key); updateGameHUD(); return; }
    const target = game.targets[idx];
    target.done = true;
    target.el.classList.add("pop");
    gainHit(15);
    updateGameHUD();
    setTimeout(() => target.el.remove(), 180);
    game.targets = game.targets.filter(t => t !== target);
    refreshGameKeyboard();
  }
  function flashArenaMessage(msg) {
    const feedback = document.getElementById("kqFeedback");
    if (feedback) feedback.textContent = msg;
  }

  // --- PING PONG ---
  function setupPingPongArena() {
    const arena = document.getElementById("kqArena");
    arena.innerHTML = `<div class="kq-pingpong"><span class="kq-paddle left">L</span><span class="kq-ball" id="kqBall"></span><span class="kq-paddle right">R</span></div>
      <p class="kq-pingpong-target">다음: <b id="kqPingTarget"></b></p>`;
    updatePingTarget();
  }
  function pickHand(key) {
    const finger = FINGERS[key];
    if (!finger) return null;
    if (finger.startsWith("왼손")) return "left";
    if (finger.startsWith("오른손")) return "right";
    return null;
  }
  function updatePingTarget() {
    let key = nextPoolKey();
    let hand = pickHand(key);
    let guard = 0;
    while (hand !== game.expectedHand && guard < 12) { key = nextPoolKey(); hand = pickHand(key); guard += 1; }
    game.pingKey = key;
    const label = document.getElementById("kqPingTarget");
    if (label) label.textContent = key.toUpperCase();
    refreshGameKeyboard();
  }
  function pingpongHit(key) {
    const hand = pickHand(key);
    const ball = document.getElementById("kqBall");
    if (key === game.pingKey && hand === game.expectedHand) {
      gainHit(10);
      if (ball) { ball.classList.remove("to-left","to-right"); void ball.offsetWidth; ball.classList.add(game.expectedHand === "left" ? "to-right" : "to-left"); }
      game.expectedHand = game.expectedHand === "left" ? "right" : "left";
      updateGameHUD();
      updatePingTarget();
    } else {
      loseHit(key);
      if (ball) { ball.classList.add("wobble"); setTimeout(() => ball.classList.remove("wobble"), 220); }
      updateGameHUD();
    }
  }

  // --- RHYTHM ---
  function setupRhythmArena() {
    const arena = document.getElementById("kqArena");
    arena.innerHTML = `<div class="kq-rhythm-track"><div class="kq-hitzone"></div><div class="kq-beat-cursor" id="kqBeatCursor"></div></div>
      <p class="kq-rhythm-target">지금: <b id="kqRhythmTarget"></b></p><p class="kq-judge" id="kqJudge"></p>`;
  }
  function startBeat(now) {
    game.beatAt = now;
    game.beatKey = nextPoolKey();
    const label = document.getElementById("kqRhythmTarget");
    if (label) label.textContent = game.beatKey.toUpperCase();
    const cursor = document.getElementById("kqBeatCursor");
    if (cursor) { cursor.style.transition = "none"; cursor.style.left = "0%"; void cursor.offsetWidth; cursor.style.transition = `left ${game.beatInterval}ms linear`; cursor.style.left = "100%"; }
    refreshGameKeyboard();
  }
  function tickRhythm(now) {
    if (now - game.beatAt >= game.beatInterval) {
      if (!game.beatJudged) { loseHit(null); updateGameHUD(); }
      game.beatJudged = false;
      startBeat(now);
    }
  }
  function rhythmHit(key) {
    if (key !== game.beatKey || game.beatJudged) { loseHit(key); updateGameHUD(); return; }
    const phase = (Date.now() - game.beatAt) / game.beatInterval;
    const dist = Math.abs(phase - 0.78);
    game.beatJudged = true;
    const judgeEl = document.getElementById("kqJudge");
    if (dist <= 0.08) { gainHit(20); if (judgeEl) judgeEl.textContent = "PERFECT!"; }
    else if (dist <= 0.18) { gainHit(10); if (judgeEl) judgeEl.textContent = "GOOD"; }
    else { loseHit(key); if (judgeEl) judgeEl.textContent = "MISS"; }
    updateGameHUD();
  }

  // --- RUNNER ---
  function setupRunnerArena() {
    const arena = document.getElementById("kqArena");
    game.runnerWords = activeDay.words.filter(w => /^[a-z]+$/i.test(w));
    if (!game.runnerWords.length) game.runnerWords = ["type","fast","race"];
    arena.innerHTML = `<div class="kq-runner"><span class="kq-runner-character">🏃</span><i class="kq-finish-line">🏁</i></div>
      <p class="kq-runner-word" id="kqRunnerWord"></p>
      <input id="kqRunnerInput" class="kq-input" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="단어를 입력하세요" />`;
    renderRunnerWord();
    const input = document.getElementById("kqRunnerInput");
    input.addEventListener("input", () => runnerEvaluate(input));
    setTimeout(() => input.focus(), 0);
  }
  function renderRunnerWord() {
    const word = game.runnerWords[game.runnerWordIndex % game.runnerWords.length];
    const label = document.getElementById("kqRunnerWord");
    if (label) label.innerHTML = targetMarkup(word, game.runnerAccepted.length);
    refreshGameKeyboard();
  }
  function runnerEvaluate(input) {
    if (game.finished) return;
    const word = game.runnerWords[game.runnerWordIndex % game.runnerWords.length];
    const next = input.value;
    if (word.startsWith(next)) {
      game.runnerAccepted = next;
      renderRunnerWord();
      if (next === word) {
        gainHit(10 + Math.min(game.combo, 20));
        game.runnerPos = Math.min(100, game.runnerPos + 9 + Math.min(game.combo * 0.6, 5));
        const runner = document.querySelector(".kq-runner-character");
        if (runner) runner.style.left = `${game.runnerPos * 0.88}%`;
        updateGameHUD();
        game.runnerWordIndex += 1;
        game.runnerAccepted = "";
        input.value = "";
        renderRunnerWord();
        if (game.runnerPos >= 100 && !game.finished) {
          game.finished = true;
          flashArenaMessage("🏁 FINISH! 결승선에 도착했어요!");
          input.disabled = true;
          setTimeout(() => completeStage(), 500);
        }
      }
    } else {
      loseHit(lastPhysicalKey);
      updateGameHUD();
      input.classList.add("wrong");
      setTimeout(() => input.classList.remove("wrong"), 180);
      input.value = game.runnerAccepted;
    }
  }

  // --- BOSS ---
  function setupBossArena() {
    setupArenaSlots();
    const arena = document.getElementById("kqArena");
    arena.insertAdjacentHTML("afterbegin", `<div class="kq-boss-hp"><div class="kq-boss-hp-fill" id="kqBossHp" style="width:100%"></div></div>
      <div class="kq-round-banner" id="kqRoundBanner"></div>`);
    game.hp = 100;
    game.roundIndex = 0;
  }
  function beginBossRound() {
    const rounds = activeDay.bossRounds || ["HOME ROW","MIXED"];
    const label = rounds[game.roundIndex % rounds.length];
    game.roundPool = roundKeyPool(label);
    game.transitioning = true;
    const banner = document.getElementById("kqRoundBanner");
    if (banner) { banner.textContent = `ROUND ${game.roundIndex + 1} · ${label}`; banner.classList.add("show"); }
    setTimeout(() => {
      if (banner) banner.classList.remove("show");
      game.transitioning = false;
      spawnKeyhuntTarget(game.roundPool);
    }, 1100);
  }
  function bossHit() {
    game.hp = Math.max(0, game.hp - 4);
    const fill = document.getElementById("kqBossHp");
    if (fill) fill.style.width = `${game.hp}%`;
    updateGameHUD();
    if (game.hp <= 0) {
      flashArenaMessage("👑 BOSS DEFEATED!");
      SFX.boss();
      setTimeout(() => completeStage(), 600);
      game.current = null;
      return;
    }
    spawnKeyhuntTarget(game.roundPool);
  }
  function bossRoundAdvanceIfNeeded(now) {
    if (!game.roundEndAt) game.roundEndAt = now + Math.floor((stageEndAt - now) / (activeDay.bossRounds ? activeDay.bossRounds.length : 4));
    if (now >= game.roundEndAt && !game.transitioning && game.hp > 0) {
      game.roundIndex += 1;
      game.roundEndAt = now + Math.floor((stageEndAt - now) / 2 + 1);
      if (activeDay.bossRounds && game.roundIndex < activeDay.bossRounds.length) beginBossRound();
    }
  }

  // --- 게임 공용 tick (기존 250ms 스테이지 타이머에 편승 → pause 자동 적용) ---
  function gameTick(now) {
    if (!game || game.transitioning) return;
    if (game.category === "keyhunt") keyhuntTimeoutCheck(now);
    if (game.category === "falling" || game.category === "balloon") {
      if (now >= game.nextSpawnAt && game.targets.length < game.maxOnScreen) {
        spawnFallOrBalloon();
        game.nextSpawnAt = now + game.spawnInterval;
      }
      tickFallOrBalloon(now);
    }
    if (game.category === "rhythm") tickRhythm(now);
    if (game.category === "boss") bossRoundAdvanceIfNeeded(now);
  }

  function handleGameKey(key) {
    if (!game || !game.started || paused || game.transitioning) return;
    if (game.category === "keyhunt") keyhuntHit(key);
    else if (game.category === "falling" || game.category === "balloon") fallingHit(key);
    else if (game.category === "pingpong") pingpongHit(key);
    else if (game.category === "rhythm") rhythmHit(key);
    else if (game.category === "boss") keyhuntHit(key);
  }

  // ----------------------------------------
  // 스테이지 공용 완료 처리
  // ----------------------------------------
  function updateStageTimer() {
    if (paused || stageDone) return;
    const now = Date.now();
    const remaining = Math.max(0, stageEndAt - now);
    const seconds = Math.ceil(remaining / 1000);
    const timer = document.getElementById("kqTimer");
    if (timer) timer.textContent = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2,"0")}`;
    if (game) gameTick(now);
    if (remaining <= 0) {
      if (game) { completeStage(); return; }
      if (stageRounds > 0) completeStage();
      else { const f = document.getElementById("kqFeedback"); if (f) f.textContent = "한 번 정확하게 완성하면 다음 미션이 열려요."; }
    }
  }

  function completeStage() {
    if (stageDone) return;
    stageDone = true;
    clearInterval(stageTimer);
    const stage = activeDay.stages[stageIndex];
    const elapsed = Math.max(1, Math.round((Date.now() - session.stageStart) / 1000));
    session.stageResults.push({ id:stage.id, seconds:elapsed, accuracy:accuracy(), score: game ? game.score : null });
    const activityId = `keyboard:day${dayKey(activeDay.id)}:${stage.id}`;
    const alreadyHad = hasXpHistory(activityId);
    awardXP(activityId, STAGE_XP[stage.id]);
    if (!alreadyHad) session.xpEarned += STAGE_XP[stage.id];
    SFX.stageClear();
    const feedback = document.getElementById("kqFeedback");
    if (feedback) {
      feedback.textContent = game
        ? `✓ ${stage.label} COMPLETE · SCORE ${game.score} · BEST COMBO ${game.bestCombo} · +${STAGE_XP[stage.id]} XP`
        : `✓ ${stage.label} COMPLETE · +${STAGE_XP[stage.id]} XP`;
    }
    const input = document.getElementById("kqInput") || document.getElementById("kqRunnerInput");
    if (input) input.disabled = true;
    const nextBtn = document.getElementById("kqNextStage");
    if (nextBtn) nextBtn.disabled = false;
  }

  function nextStage() {
    clearInterval(stageTimer);
    if (stageIndex < activeDay.stages.length - 1) { stageIndex += 1; renderStage(); }
    else finishDay();
  }

  function finishDay() {
    clearInterval(stageTimer);
    const acc = accuracy();
    const elapsedMinutes = Math.max(1 / 60, (Date.now() - session.startedAt) / 60000);
    const enWpm = Math.round((session.enCorrect / 5) / elapsedMinutes);
    const koCpm = Math.round(session.koCorrect / elapsedMinutes);
    const complete = acc >= (activeDay.completionAccuracy ?? activeDay.targetAccuracy);
    const key = dayKey(activeDay.id);
    const previousDayRecord = state.days[key];
    const firstCompletion = complete && !previousDayRecord?.complete;
    const completedDate = complete
      ? previousDayRecord?.completedDate || (previousDayRecord?.complete ? previousDayRecord.date : today())
      : previousDayRecord?.completedDate || null;
    const firstCompletedDate = previousDayRecord?.firstCompletedDate || (firstCompletion ? today() : completedDate);
    const firstCompletedAt = previousDayRecord?.firstCompletedAt || (firstCompletion ? new Date().toISOString() : null);
    const result = { date:today(), completedDate:firstCompletedDate || completedDate, firstCompletedDate, firstCompletedAt, complete, accuracy:acc, errors:session.errors, bestCombo:session.bestCombo, englishWPM:enWpm, koreanCPM:koCpm, seconds:Math.round(elapsedMinutes*60), stages:session.stageResults, xpEarned:session.xpEarned };
    state.days[key] = betterResult(state.days[key], result);
    state.stats.history.push({ day:activeDay.id, ...result });
    state.stats.lifetime.keystrokes += session.typed;
    state.stats.lifetime.errors += session.errors;
    state.stats.lifetime.bestCombo = Math.max(state.stats.lifetime.bestCombo, session.bestCombo);

    const newlyUnlocked = [];
    const tryUnlock = id => { if (unlockAchievement(id)) newlyUnlocked.push(id); };

    if (complete) {
      if (firstCompletion) recentlyCompletedDay = activeDay.id;
      state.progress.unlockedDay = Math.min(
        Math.max(state.progress.unlockedDay, activeDay.id + 1),
        curriculum.days.length
      );
      state.progress.lastDay = activeDay.id;
      const completeActivityId = `keyboard:day${key}:complete`;
      const alreadyHadComplete = hasXpHistory(completeActivityId);
      awardXP(completeActivityId, 10);
      if (!alreadyHadComplete) session.xpEarned += 10;
      if (acc >= 95) { const id = `keyboard:day${key}:accuracy95`; const had = hasXpHistory(id); awardXP(id, 5); if (!had) session.xpEarned += 5; }
      if (session.errors === 0) { const id = `keyboard:day${key}:nomiss`; const had = hasXpHistory(id); awardXP(id, 5); if (!had) session.xpEarned += 5; }
      updateStreak();
      tryUnlock("first-key");
      if (session.errors === 0) tryUnlock("no-miss");
      if (session.bestCombo >= 20) tryUnlock("combo-20");
      if (state.streak.current >= 7) tryUnlock("streak-7");
      const completeCount = Object.values(state.days).filter(d => d.complete).length;
      if (completeCount >= 10) tryUnlock("stage-10");
      if (completeCount >= 30) tryUnlock("stage-30");
      if (activeDay.id === 30) tryUnlock("phase1-clear");
    }
    saveState();
    if (newlyUnlocked.length) SFX.badge();
    renderResult(result, newlyUnlocked);
  }

  function buildFeedbackNote(result) {
    if (session.errors === 0) return "오타 없이 완벽했어요! 내일은 속도를 조금 더 올려봐요.";
    const entries = Object.entries(session.errorKeys).filter(([k]) => k && FINGERS[k]);
    if (!entries.length) return result.accuracy >= (activeDay.targetAccuracy - 3) ? "정확도가 좋아요. 이 리듬을 유지해봐요." : "속도보다 정확도에 집중해서 다시 도전해봐요.";
    entries.sort((a, b) => b[1] - a[1]);
    const [topKey] = entries[0];
    const finger = FINGERS[topKey];
    return `${finger} 손가락(${topKey.toUpperCase()} 키)에서 오타가 조금 있었어요. 내일은 그 자리를 천천히 다시 연습해보세요.`;
  }

  function renderResult(result, newlyUnlocked) {
    const root = document.getElementById("keyboardPlayContent");
    const nextLesson = curriculum.days.find(item => item.id === activeDay.id + 1);
    const canStartNext = result.complete && nextLesson && !dailyLimitReached();
    const limitMessage = result.complete && dailyLimitReached();
    const bossGrade = activeDay.bossRounds ? (result.accuracy >= 95 ? "GOLD CLEAR!" : result.accuracy >= 90 ? "CLEAR!" : "PRACTICE RECOMMENDED") : null;
    const resultMessage = bossGrade === "PRACTICE RECOMMENDED"
      ? "KEYBOARD GATE를 끝까지 통과했어요. 정확도를 높여 다시 도전해봐요."
      : limitMessage
        ? "오늘은 여기까지! 완료한 STAGE는 언제든 다시 연습할 수 있어요."
        : result.complete
          ? "오늘의 추천 학습을 완료했어요. 더 하고 싶다면 다음 STAGE에 도전해요."
          : `정확도 ${activeDay.targetAccuracy}%를 목표로 천천히 다시 도전해봐요.`;
    if (bossGrade && bossGrade !== "PRACTICE RECOMMENDED") SFX.boss();
    else if (result.complete) SFX.missionClear(); else SFX.fail();
    root.innerHTML = `<section class="kq-result"><span class="kq-result-icon">${result.complete ? "🏆" : "💜"}</span>
      <p>DAY ${dayKey(activeDay.id)}</p><h2>${bossGrade || (result.complete ? "MISSION CLEAR!" : "RETRY RECOMMENDED")}</h2>
      <p class="kq-result-message">${resultMessage}</p>
      <div class="kq-result-grid"><div class="primary"><strong>${result.accuracy}%</strong><span>ACCURACY</span></div><div><strong>${result.englishWPM}</strong><span>ENGLISH WPM</span></div><div><strong>${result.koreanCPM}</strong><span>한글 분당 타수</span></div><div><strong>${result.errors}</strong><span>ERRORS</span></div><div><strong>${result.bestCombo}</strong><span>BEST COMBO</span></div></div>
      <div class="kq-result-extra"><span>⏱ ${formatDuration(result.seconds)}</span><span>⭐ +${result.xpEarned} XP</span></div>
      <p class="kq-result-note">${escape(buildFeedbackNote(result))}</p>
      ${newlyUnlocked && newlyUnlocked.length ? `<div class="kq-achv-toast">${newlyUnlocked.map(id => { const a = ACHIEVEMENTS.find(x => x.id === id); return a ? `<span>${a.icon} NEW: ${a.name}</span>` : ""; }).join("")}</div>` : ""}
      <div class="kq-result-actions"><button id="kqRetry">${result.complete ? "다시 연습" : "RETRY DAY"}</button><button id="kqResultNext">${canStartNext ? "다음 STAGE →" : limitMessage ? "오늘은 여기까지" : "STAGE MAP"}</button></div></section>`;
    document.getElementById("kqRetry").addEventListener("click", () => startDay(activeDay));
    document.getElementById("kqResultNext").addEventListener("click", () => canStartNext ? startDay(nextLesson) : openQuest());
  }

  function updateStreak() {
    const date = today();
    if (state.streak.lastDate === date) return;
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
    const previous = yesterday.toLocaleDateString("en-CA");
    state.streak.current = state.streak.lastDate === previous ? state.streak.current + 1 : 1;
    state.streak.best = Math.max(state.streak.best, state.streak.current);
    state.streak.lastDate = date;
  }

  function unlockAchievement(id) {
    if (state.achievements.includes(id)) return false;
    state.achievements.push(id);
    return true;
  }
  function betterResult(oldResult, next) { return !oldResult || next.accuracy >= oldResult.accuracy ? next : { ...oldResult, complete:oldResult.complete || next.complete }; }
  function accuracy() { return session.typed ? Math.round((session.correct / session.typed) * 100) : 100; }
  function comboMessage(combo) { if (combo >= 20) return "✨ 20 COMBO · PERFECT RHYTHM!"; if (combo >= 10) return "⭐ 10 COMBO · GREAT!"; if (combo >= 5) return "✨ 5 COMBO · NICE!"; return "좋아요. 같은 리듬으로 계속해요."; }
  function comboLabel(combo) { if (combo >= 20) return "Perfect Rhythm!"; if (combo >= 10) return "Great!"; if (combo >= 5) return "Nice!"; return ""; }
  function targetMarkup(target, index) { return `<span class="typed">${escape(target.slice(0,index))}</span><mark>${escape(target[index] || "✓")}</mark><span>${escape(target.slice(index+1))}</span>`; }
  function findKey(char) { if (char === " ") return "space"; const lower = char.toLowerCase(); if (FINGERS[lower]) return lower; const match = Object.keys(KO).find(key => KO[key] === char); return match || activeDay?.targetKeys?.find(key => FINGERS[key]) || "space"; }
  function keyboardMarkup(active) {
    const finger = FINGERS[active] || "올바른 손가락";
    const fingerEnglish = FINGER_ENGLISH[finger] || "TARGET FINGER";
    const keyLabel = active === "space" ? "SPACE" : `${active?.toUpperCase() || ""}${KO[active] ? ` · ${KO[active]}` : ""}`;
    return `${handGuideMarkup(active)}
      <div class="kq-finger-guide"><div><small>${fingerEnglish}</small><strong>☝ ${finger}</strong></div><span>${keyLabel}</span></div>
      <div class="kq-keyboard-frame"><div class="kq-keyboard">${KEY_ROWS.map((row,rowIndex) => `<div class="keyboard-row row-${rowIndex+1}">${row.map(entry => keycapMarkup(entry, active)).join("")}</div>`).join("")}</div></div>`;
  }

  function handGuideMarkup(active) {
    const activeFinger = FINGER_CLASS[FINGERS[active]] || "";
    const guideLevel = activeDay?.guideLevel || (activeDay?.id <= 30 ? "beginner" : "compact");
    const finger = (side, type) => {
      const id = `${type}-${side}`;
      const isThumb = type === "thumb" && activeFinger === "thumb";
      const isActive = activeFinger === id || isThumb;
      return `<span class="hand-finger ${type} ${isActive ? "active" : ""}" data-finger="${id}" aria-label="${side} ${type}"></span>`;
    };
    const hand = side => `<figure class="typing-hand ${side}-hand"><figcaption>${side === "left" ? "LEFT HAND" : "RIGHT HAND"}</figcaption><div class="hand-shape">
      ${finger(side,"pinky")}${finger(side,"ring")}${finger(side,"middle")}${finger(side,"index")}${finger(side,"thumb")}<span class="hand-palm"></span>
    </div></figure>`;
    return `<section class="kq-hands-guide ${guideLevel}" data-guide-level="${guideLevel}">
      <p class="home-position-message">먼저 손가락을 홈 포지션에 올려주세요.</p>
      <div class="hands-stage">${hand("left")}${hand("right")}</div>
      <div class="home-position-keys"><span>A</span><span>S</span><span>D</span><span>F</span><b>SPACE</b><span>J</span><span>K</span><span>L</span><span>;</span></div>
    </section>`;
  }

  function keycapMarkup(entry, active) {
    const item = typeof entry === "string" ? { key:entry, label:entry.toUpperCase(), units:1 } : entry;
    const finger = FINGERS[item.key];
    const classes = ["kq-keycap", item.key === active ? "active" : "", item.units > 1 ? "function-key" : "", FINGER_CLASS[finger] || "neutral", (item.key === "f" || item.key === "j") ? "home-key" : ""].filter(Boolean).join(" ");
    const style = `--key-units:${item.units}`;
    const korean = KO[item.key];
    return `<span class="${classes}" data-key="${item.key}" style="${style}"><b>${item.label}</b>${korean ? `<small>${korean}</small>` : ""}${item.key === "f" || item.key === "j" ? '<i class="home-bump"></i>' : ""}</span>`;
  }

  function normalizePhysicalKey(event) {
    const key = event.key.toLowerCase();
    if (key === " ") return "space";
    if (key === "capslock") return "capslock";
    if (key === "backspace") return "backspace";
    if (key === "enter") return "enter";
    if (key === "tab") return "tab";
    if (key === "shift") return event.location === 2 ? "shift-right" : "shift-left";
    return key;
  }

  function setPressedKey(key, pressed) {
    document.querySelectorAll(`.kq-keycap[data-key="${CSS.escape(key)}"]`).forEach(cap => cap.classList.toggle("pressed", pressed));
  }

  function flashVirtualKey(key, type) {
    if (!key) return;
    document.querySelectorAll(`.kq-keycap[data-key="${CSS.escape(key)}"]`).forEach(cap => {
      cap.classList.remove("success-pulse", "wrong-flash");
      void cap.offsetWidth;
      cap.classList.add(type === "success" ? "success-pulse" : "wrong-flash");
      setTimeout(() => cap.classList.remove("success-pulse", "wrong-flash"), 320);
    });
  }

  function togglePause() {
    paused = !paused;
    const input = document.getElementById("kqInput") || document.getElementById("kqRunnerInput");
    if (input) input.disabled = paused;
    if (paused) pauseStartedAt = Date.now();
    else stageEndAt += Date.now() - pauseStartedAt;
    const pauseBtn = document.getElementById("kqPause");
    if (pauseBtn) pauseBtn.textContent = paused ? "▶ RESUME" : "Ⅱ PAUSE";
    const feedback = document.getElementById("kqFeedback");
    if (feedback) feedback.textContent = paused ? "PAUSED · Enter로 계속" : "다시 시작해요!";
    if (!paused && input) input.focus();
  }

  function bind() {
    document.querySelectorAll("[data-nav='keyboard']").forEach(button => button.addEventListener("click", openQuest));
    document.querySelectorAll("[data-nav]:not([data-nav='keyboard'])").forEach(button => button.addEventListener("click", () => clearInterval(stageTimer)));
    document.querySelectorAll("[data-kq-back]").forEach(button => button.addEventListener("click", openQuest));
    document.addEventListener("keydown", event => {
      if (!document.getElementById("keyboardPlayScreen")?.classList.contains("active")) return;
      lastPhysicalKey = normalizePhysicalKey(event);
      setPressedKey(lastPhysicalKey, true);
      if (event.key === "Escape") { event.preventDefault(); togglePause(); return; }
      // Enter로 다음 스테이지로 넘어가면 이 keydown 이벤트는 여기서 끝내야 한다.
      // return 없이 아래로 흘러가면, 방금 nextStage()가 새로 마운트한 다음 게임
      // 스테이지에 대고 같은 Enter 입력이 즉시 "오답"으로 다시 처리되는 버그가 있었다
      // (전환 직후 콤보가 0으로 리셋되는 원인).
      if (event.key === "Enter" && (paused || document.getElementById("kqNextStage")?.disabled === false)) {
        event.preventDefault();
        paused ? togglePause() : nextStage();
        return;
      }
      if (activeDay && activeDay.stages[stageIndex]?.id === "game" && game && game.category !== "runner") {
        handleGameKey(lastPhysicalKey);
      }
    });
    document.addEventListener("keyup", event => {
      if (!document.getElementById("keyboardPlayScreen")?.classList.contains("active")) return;
      setPressedKey(normalizePhysicalKey(event), false);
    });
  }

  window.openKeyboardQuest = openQuest;
  document.addEventListener("DOMContentLoaded", bind);
})();
