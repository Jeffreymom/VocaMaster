// ========================================
// VOCAB MASTER - APP LOGIC
// WEEK 01
// ========================================


// ----------------------------------------
// SUBJECT / WEEK 상태
// ----------------------------------------
// currentSubject: SUBJECTS 배열의 현재 선택된 항목
// currentWeek: currentSubject.weeks 중 현재 선택된 항목
// words: currentWeek.data.words (WEEK가 바뀌면 함께 바뀜)

let currentSubject = null;
let currentWeek = null;
let words = [];


// ----------------------------------------
// 저장 데이터
// ----------------------------------------
// WEEK를 열 때(loadWeekState) 해당 WEEK의 localStorage 값으로 채워짐

let learningState = {};
let wrongWords = {};


// ----------------------------------------
// 화면 상태
// ----------------------------------------

let learnIndex = 0;
let flashIndex = 0;

let quizMode = "meaning";
let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;

// 현재 문제가 오답노트의 어떤 카테고리로 기록되어야 하는지
// (meaning / spelling / context / wordBox / prefix)
let currentQuestionCategory = "meaning";

let spellingCorrectAnswer = null;
let spellingOriginalWord = null;

// 실전 모의시험 진행 상태 (섹션 A~D를 순서대로 진행)
let mockTestState = null;

// 같은 세션에서 같은 문제를 반복 정답 처리해도 XP가 중복 지급되지
// 않도록 하는 세션 식별자 (퀴즈 계열 start* 함수가 새로 발급)
let currentSessionId = null;

// 플래시카드는 세션(화면을 열 때)마다 카드당 1회만 XP 지급
let currentFlashcardSessionId = null;


// ----------------------------------------
// GLOBAL XP / BADGE 상태
// ----------------------------------------
// subject/week와 무관하게 앱 전체에서 공통으로 누적되는 값.
// WEEK 전용 localStorage(vocabMaster:<subjectId>:<weekSlug>:*)와는
// 완전히 별개의 vocabMaster:global:* 키에 저장한다.

let globalXP = 0;
let unlockedBadges = [];   // 해금된 badge id 배열
let xpHistory = {};        // { [activityId]: { xp, timestamp } } - 중복 지급 방지용
let badgeUnlockQueue = []; // 방금 새로 해금된 badge를 순서대로 보여주기 위한 큐


const XP_REWARDS = {
  learnKnown: 2,
  flashcard: 1,
  spellingCorrect: 5,
  wordBoxCorrect: 4,
  contextCorrect: 4,
  prefixCorrect: 4,
  sentenceComplete: 5,
  mockComplete: 10,
  mockHighScoreBonus: 20
};

const BADGE_STEP = 1000;
const REPEAT_XP_MULTIPLIERS = [1, 0.5, 0.3, 0];


// 나중에 PNG/SVG로 교체하기 쉽도록 데이터와 UI를 분리해서
// icon 필드만 바꾸면(또는 iconImage 필드를 추가하면) 전체 UI가
// 자동으로 새 이미지를 쓰도록 구성되어 있다 (renderBadgeIcon 참고).
const BADGES = [
  { xp: 1000, id: "rookie", name: "Rookie", icon: "🐣" },
  { xp: 2000, id: "word-hopper", name: "Word Hopper", icon: "🐰" },
  { xp: 3000, id: "vocab-fox", name: "Vocab Fox", icon: "🦊" },
  { xp: 4000, id: "word-panda", name: "Word Panda", icon: "🐼" },
  { xp: 5000, id: "vocab-lion", name: "Vocab Lion", icon: "🦁" },
  { xp: 6000, id: "word-dragon", name: "Word Dragon", icon: "🐉" },
  { xp: 7000, id: "master-reader", name: "Master Reader", icon: "🦅" },
  { xp: 8000, id: "vocabulary-star", name: "Vocabulary Star", icon: "🦄" },
  { xp: 9000, id: "word-champion", name: "Word Champion", icon: "👑" },
  { xp: 10000, id: "vocabulary-master", name: "Vocabulary Master", icon: "🏆" }
];


const GLOBAL_STORAGE_KEYS = {
  xp: "vocabMaster:global:xp",
  badges: "vocabMaster:global:badges",
  xpHistory: "vocabMaster:global:xpHistory"
};


function loadGlobalXPState() {

  globalXP =
    Number(localStorage.getItem(GLOBAL_STORAGE_KEYS.xp)) || 0;

  unlockedBadges =
    JSON.parse(localStorage.getItem(GLOBAL_STORAGE_KEYS.badges)) || [];

  xpHistory =
    JSON.parse(localStorage.getItem(GLOBAL_STORAGE_KEYS.xpHistory)) || {};


  // 안전망: XP는 이미 충분한데 배지 해금 기록이 없는 경우
  // 조용히 보정한다 (신규 해금이 아니므로 모달은 띄우지 않음).
  let repaired = false;

  BADGES.forEach(badge => {

    if (
      badge.xp <= globalXP &&
      !unlockedBadges.includes(badge.id)
    ) {
      unlockedBadges.push(badge.id);
      repaired = true;
    }
  });

  if (repaired) {
    saveGlobalXPState();
  }
}


function saveGlobalXPState() {

  localStorage.setItem(
    GLOBAL_STORAGE_KEYS.xp,
    String(globalXP)
  );

  localStorage.setItem(
    GLOBAL_STORAGE_KEYS.badges,
    JSON.stringify(unlockedBadges)
  );

  localStorage.setItem(
    GLOBAL_STORAGE_KEYS.xpHistory,
    JSON.stringify(xpHistory)
  );
}


function generateSessionId() {

  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}


function newSession() {

  currentSessionId =
    generateSessionId();

  return currentSessionId;
}


// mockTestState/재시험(quizMode === "retest") 도중에는
// 같은 렌더러(renderSpellingQuiz, renderExplainedMCQ 등)를
// 재사용하더라도 XP를 별도로 지급하지 않는다.
// - 재시험: 이미 배운 단어를 반복 연습하는 것이므로 XP 파밍 방지
// - 모의시험: 완료 시 mockComplete/mockHighScoreBonus로 한 번에 지급
function shouldAwardPracticeXP() {

  return !mockTestState;
}


// activityId가 이미 xpHistory에 있으면 아무것도 하지 않는다
// (동일 단어/문제/세션 조합에는 평생 1회만 지급).
function awardXP(activityId, amount) {

  if (!activityId || !amount) {
    return;
  }

  if (xpHistory[activityId]) {
    return;
  }

  xpHistory[activityId] = {
    xp: amount,
    timestamp: Date.now()
  };

  const previousXP =
    globalXP;

  globalXP += amount;

  saveGlobalXPState();

  updateXPDisplays();

  checkForNewBadgeUnlock(previousXP, globalXP);
}


// 같은 문제를 반복해서 맞힐 때의 보상:
// 1회 100% → 2회 50% → 3회 30% → 4회부터 0%.
// 오답은 이 카운트를 올리지 않으므로, 틀린 뒤 처음 정답을 맞히면 100% 지급된다.
function awardRepeatableXP(
  activityKey,
  amount,
  legacyMatcher = key => key.startsWith(`${activityKey}:`)
) {

  if (!activityKey || !amount) {
    return 0;
  }

  const counterKey = `repeat:${activityKey}`;
  let counter = xpHistory[counterKey];

  if (!counter || typeof counter.correctCount !== "number") {
    const legacyCorrectCount = Object.keys(xpHistory)
      .filter(key => !key.startsWith("repeat:") && legacyMatcher(key))
      .length;

    counter = {
      correctCount: Math.min(legacyCorrectCount, 3),
      timestamp: Date.now()
    };
  }

  const correctAttempt = counter.correctCount + 1;
  const multiplier =
    REPEAT_XP_MULTIPLIERS[Math.min(correctAttempt - 1, 3)];
  const awardedAmount =
    Math.round(amount * multiplier * 10) / 10;

  counter.correctCount = Math.min(correctAttempt, 4);
  counter.timestamp = Date.now();
  xpHistory[counterKey] = counter;

  if (awardedAmount > 0) {
    awardXP(`${counterKey}:award:${correctAttempt}`, awardedAmount);
  }
  else {
    saveGlobalXPState();
  }

  return awardedAmount;
}


function getXPProgressInfo() {

  const currentBandFloor =
    Math.floor(globalXP / BADGE_STEP) * BADGE_STEP;

  const currentBandXP =
    globalXP - currentBandFloor;

  const currentBadge =
    [...BADGES]
      .reverse()
      .find(badge => badge.xp <= globalXP) || null;

  const nextBadge =
    BADGES.find(badge => badge.xp > globalXP) || null;

  return {
    totalXP: globalXP,
    currentBandXP: nextBadge ? currentBandXP : BADGE_STEP,
    bandSize: BADGE_STEP,
    progressPercent:
      nextBadge
        ? Math.min((currentBandXP / BADGE_STEP) * 100, 100)
        : 100,
    currentBadge,
    nextBadge,
    xpToNext:
      nextBadge ? nextBadge.xp - globalXP : 0
  };
}


function checkForNewBadgeUnlock(previousXP, newXP) {

  const newlyUnlocked =
    BADGES.filter(badge =>
      badge.xp <= newXP &&
      badge.xp > previousXP &&
      !unlockedBadges.includes(badge.id)
    );

  if (!newlyUnlocked.length) {
    return;
  }

  newlyUnlocked.forEach(badge => {
    unlockedBadges.push(badge.id);
  });

  saveGlobalXPState();

  const queueWasEmpty =
    badgeUnlockQueue.length === 0;

  badgeUnlockQueue.push(...newlyUnlocked);

  if (queueWasEmpty) {
    showNextQueuedBadgeModal();
  }
}


function showNextQueuedBadgeModal() {

  if (!badgeUnlockQueue.length) {
    return;
  }

  const badge =
    badgeUnlockQueue[0];

  const overlay =
    document.getElementById("badgeModalOverlay");

  const iconEl =
    document.getElementById("badgeModalIcon");

  const nameEl =
    document.getElementById("badgeModalName");

  const xpEl =
    document.getElementById("badgeModalXP");

  if (iconEl) iconEl.textContent = badge.icon;

  if (nameEl) nameEl.textContent = badge.name;

  if (xpEl) xpEl.textContent = `${badge.xp} XP 달성!`;

  if (overlay) overlay.classList.add("visible");
}


function closeBadgeModal() {

  const overlay =
    document.getElementById("badgeModalOverlay");

  if (overlay) {
    overlay.classList.remove("visible");
  }

  badgeUnlockQueue.shift();

  if (badgeUnlockQueue.length) {
    showNextQueuedBadgeModal();
  }

  else {
    renderBadgeCollection();
  }
}


function updateXPDisplays() {

  const info =
    getXPProgressInfo();


  const headerChip =
    document.getElementById("headerXPChip");

  if (headerChip) {
    headerChip.textContent =
      `⭐ ${info.totalXP} XP`;
  }


  const homeIcon =
    document.getElementById("xpSummaryBadgeIcon");

  const homeValue =
    document.getElementById("xpSummaryValue");

  const homeBar =
    document.getElementById("xpSummaryBar");

  const homeNext =
    document.getElementById("xpSummaryNext");

  if (homeIcon) {
    homeIcon.textContent =
      info.currentBadge ? info.currentBadge.icon : "🥚";
  }

  if (homeValue) {
    homeValue.textContent =
      `${info.totalXP} XP`;
  }

  if (homeBar) {
    homeBar.style.width =
      `${info.progressPercent}%`;
  }

  if (homeNext) {
    homeNext.textContent =
      info.nextBadge
        ? `다음 배지까지 ${info.xpToNext} XP`
        : "모든 배지 달성!";
  }


  const weekXPValue =
    document.getElementById("weekDetailXPValue");

  const weekXPBar =
    document.getElementById("weekDetailXPBar");

  const weekXPProgressLabel =
    document.getElementById("weekDetailXPProgressLabel");

  const weekCurrentBadge =
    document.getElementById("weekDetailCurrentBadge");

  const weekNextBadgeGap =
    document.getElementById("weekDetailNextBadgeGap");

  if (weekXPValue) {
    weekXPValue.textContent =
      `${info.totalXP} XP`;
  }

  if (weekXPBar) {
    weekXPBar.style.width =
      `${info.progressPercent}%`;
  }

  if (weekXPProgressLabel) {
    weekXPProgressLabel.textContent =
      `${info.currentBandXP} / ${info.bandSize}`;
  }

  if (weekCurrentBadge) {
    weekCurrentBadge.textContent =
      info.currentBadge
        ? `${info.currentBadge.icon} ${info.currentBadge.name}`
        : "🥚 아직 없어요";
  }

  if (weekNextBadgeGap) {
    weekNextBadgeGap.textContent =
      info.nextBadge
        ? `${info.nextBadge.icon} ${info.nextBadge.name} · ${info.xpToNext} XP`
        : "모든 배지 달성!";
  }


  const badgesScreenEl =
    document.getElementById("badgesScreen");

  if (
    badgesScreenEl &&
    badgesScreenEl.classList.contains("active")
  ) {
    renderBadgeCollection();
  }
}


function renderBadgeCollection() {

  const grid =
    document.getElementById("badgeGrid");

  if (!grid) {
    return;
  }

  const banner =
    document.getElementById("badgesXPBanner");

  if (banner) {
    banner.textContent =
      `⭐ ${globalXP} XP`;
  }

  grid.innerHTML =
    BADGES.map(badge => {

      const unlocked =
        unlockedBadges.includes(badge.id);

      if (unlocked) {

        return `
          <div class="badge-card unlocked">
            <span class="badge-card-icon">
              ${badge.icon}
            </span>
            <strong class="badge-card-name">
              ${badge.name}
            </strong>
            <span class="badge-card-xp">
              ${badge.xp} XP
            </span>
            <span class="badge-card-status unlocked">
              UNLOCKED
            </span>
          </div>
        `;
      }

      const gap =
        Math.max(badge.xp - globalXP, 0);

      return `
        <div class="badge-card locked">
          <span class="badge-card-icon locked">
            🔒
          </span>
          <strong class="badge-card-name">
            ${badge.name}
          </strong>
          <span class="badge-card-xp">
            ${badge.xp} XP
          </span>
          <span class="badge-card-status locked">
            ${gap} XP MORE
          </span>
        </div>
      `;

    }).join("");
}


// ========================================
// STORAGE
// ========================================

function getStorageKeys(subjectId, weekSlug) {

  return {
    stateKey: `vocabMaster:${subjectId}:${weekSlug}:state`,
    wrongKey: `vocabMaster:${subjectId}:${weekSlug}:wrong`
  };
}


// ----------------------------------------
// 예전 저장 형식(vocabMaster_week01_state 등) 마이그레이션
// ----------------------------------------
// SUBJECT 구조가 생기기 전 기록을
// Vocabulary Workbook > WEEK 01 기록으로 그대로 이전한다.
// (새 키가 이미 있으면 덮어쓰지 않는다)

function migrateLegacyStorage() {

  const legacyStateRaw =
    localStorage.getItem("vocabMaster_week01_state");

  const legacyWrongRaw =
    localStorage.getItem("vocabMaster_week01_wrong");

  if (!legacyStateRaw && !legacyWrongRaw) {
    return;
  }

  const newKeys =
    getStorageKeys("vocabulary-workbook", "week01");

  if (
    legacyStateRaw &&
    !localStorage.getItem(newKeys.stateKey)
  ) {
    localStorage.setItem(
      newKeys.stateKey,
      legacyStateRaw
    );
  }

  if (
    legacyWrongRaw &&
    !localStorage.getItem(newKeys.wrongKey)
  ) {
    localStorage.setItem(
      newKeys.wrongKey,
      legacyWrongRaw
    );
  }
}


// ----------------------------------------
// WRONG ANSWER 데이터 구조
// ----------------------------------------
// 예전 구조: wrongWords[word] = 숫자 (틀린 횟수)
// 새 구조:   wrongWords[word] = {
//              meaningWrong, spellingWrong,
//              contextWrong, wordBoxWrong,
//              prefixWrong, sentenceReview
//            }
// migrateWrongWords()가 예전 숫자 데이터를
// 새 구조로 안전하게 변환한다 (기록 유지).

function createEmptyWrongEntry() {

  return {
    meaningWrong: 0,
    spellingWrong: 0,
    contextWrong: 0,
    wordBoxWrong: 0,
    prefixWrong: 0,
    closestMeaningWrong: 0,
    sentenceReview: false
  };
}


function migrateWrongWords() {

  Object.keys(wrongWords).forEach(word => {

    const entry =
      wrongWords[word];

    if (typeof entry === "number") {

      wrongWords[word] = {
        ...createEmptyWrongEntry(),
        meaningWrong: entry
      };
    }

    else if (
      entry &&
      typeof entry === "object"
    ) {

      wrongWords[word] = {
        ...createEmptyWrongEntry(),
        ...entry
      };
    }
  });
}


function getWrongEntry(word) {

  if (
    !wrongWords[word] ||
    typeof wrongWords[word] !== "object"
  ) {

    wrongWords[word] =
      createEmptyWrongEntry();
  }

  return wrongWords[word];
}


function bumpWrong(word, category) {

  const entry =
    getWrongEntry(word);

  const field =
    `${category}Wrong`;

  entry[field] =
    (entry[field] || 0) + 1;

  saveState();
}


function getTotalWrongCount(word) {

  const entry =
    wrongWords[word];

  if (!entry) {
    return 0;
  }

  if (typeof entry === "number") {
    return entry;
  }

  return (
    (entry.meaningWrong || 0) +
    (entry.spellingWrong || 0) +
    (entry.contextWrong || 0) +
    (entry.wordBoxWrong || 0) +
    (entry.prefixWrong || 0) +
    (entry.closestMeaningWrong || 0)
  );
}


function needsReview(word) {

  const status =
    learningState[word];

  const entry =
    wrongWords[word];

  return Boolean(
    getTotalWrongCount(word) > 0 ||
    (entry && entry.sentenceReview) ||
    status === "unknown" ||
    status === "maybe"
  );
}


function saveState() {

  if (!currentWeek || !currentSubject) {
    return;
  }

  const keys =
    getStorageKeys(currentSubject.id, currentWeek.slug);

  localStorage.setItem(
    keys.stateKey,
    JSON.stringify(learningState)
  );

  localStorage.setItem(
    keys.wrongKey,
    JSON.stringify(wrongWords)
  );

  updateProgress();
}


// ========================================
// SCREEN CONTROL
// ========================================

const WEEK_SCOPED_SCREENS = [
  "learnScreen",
  "flashcardScreen",
  "quizScreen",
  "reviewScreen",
  "prefixScreen"
];


function showScreen(screenId) {

  if (
    screenId !== "quizScreen" &&
    mockTestState
  ) {
    mockTestState = null;
  }

  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const target = document.getElementById(screenId);

  if (target) {
    target.classList.add("active");
  }

  const appHeader =
    document.getElementById("appHeader");

  if (appHeader) {

    appHeader.classList.toggle(
      "hidden",
      !WEEK_SCOPED_SCREENS.includes(screenId)
    );
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function setActiveNav(navName) {

  document.querySelectorAll(".nav-button").forEach(button => {
    button.classList.remove("active");
  });

  document.querySelectorAll(
    `[data-nav="${navName}"]`
  ).forEach(button => {
    button.classList.add("active");
  });
}


function goHome() {

  currentSubject = null;

  showScreen("homeScreen");

  setActiveNav("home");

  renderSubjectSelect();

  updateXPDisplays();
}


// ========================================
// SUBJECT MANAGEMENT
// ========================================

function subjectHasAnyData(subjectEntry) {

  return subjectEntry.weeks.some(
    weekEntry => weekEntry.data
  );
}


function renderSubjectSelect() {

  const grid =
    document.getElementById("subjectSelectGrid");

  if (!grid) {
    return;
  }

  grid.innerHTML =
    SUBJECTS.map((subjectEntry, index) => {

      const badge =
        `SUBJECT ${String(index + 1).padStart(2, "0")}`;

      if (!subjectHasAnyData(subjectEntry)) {

        return `
          <div
            class="subject-select-card locked"
            data-subject-id="${subjectEntry.id}"
          >
            <span class="subject-select-badge">
              ${badge}
            </span>

            <strong class="subject-select-title">
              ${subjectEntry.title}
            </strong>

            <span class="subject-select-desc">
              ${subjectEntry.subtitle}
            </span>

            <span class="week-select-cta muted">
              🔒 준비 중
            </span>
          </div>
        `;
      }

      return `
        <button
          class="subject-select-card"
          data-subject-id="${subjectEntry.id}"
        >
          <span class="subject-select-badge">
            ${badge}
          </span>

          <strong class="subject-select-title">
            ${subjectEntry.title}
          </strong>

          <span class="subject-select-desc">
            ${subjectEntry.subtitle}
          </span>

          <span class="week-select-cta">
            학습하기 →
          </span>
        </button>
      `;

    }).join("");
}


function openSubject(subjectEntry) {

  if (
    !subjectEntry ||
    !subjectHasAnyData(subjectEntry)
  ) {
    return;
  }

  currentSubject =
    subjectEntry;

  showWeekSelect();
}


function showWeekSelect() {

  if (!currentSubject) {
    return;
  }

  const kicker =
    document.getElementById("weekSelectSubjectKicker");

  const title =
    document.getElementById("weekSelectSubjectTitle");

  if (kicker) kicker.textContent = "SUBJECT";

  if (title) title.textContent = currentSubject.title;

  renderWeekSelectGrid();

  showScreen("weekSelectScreen");

  setActiveNav("home");
}


// ========================================
// WEEK MANAGEMENT
// ========================================

function loadWeekState(subjectEntry, weekEntry) {

  currentSubject =
    subjectEntry;

  currentWeek =
    weekEntry;

  words =
    weekEntry.data.words;

  const keys =
    getStorageKeys(subjectEntry.id, weekEntry.slug);

  learningState =
    JSON.parse(localStorage.getItem(keys.stateKey)) || {};

  wrongWords =
    JSON.parse(localStorage.getItem(keys.wrongKey)) || {};

  migrateWrongWords();

  learnIndex = 0;
  flashIndex = 0;

  updateWeekHeader();
}


function ensureWeekOpen() {

  if (currentWeek && currentSubject) {
    return;
  }

  for (const subjectEntry of SUBJECTS) {

    const fallbackWeek =
      subjectEntry.weeks.find(
        weekEntry => weekEntry.data
      );

    if (fallbackWeek) {

      loadWeekState(subjectEntry, fallbackWeek);

      return;
    }
  }
}


function showWeekDetail() {

  ensureWeekOpen();

  if (!currentWeek || !currentSubject) {
    return;
  }

  updateWeekDetailMeta();

  applyTestTypeVisibility();

  showScreen("weekDetailScreen");

  setActiveNav("home");
}


function openWeek(weekEntry) {

  if (
    !currentSubject ||
    !weekEntry ||
    !weekEntry.data
  ) {
    return;
  }

  loadWeekState(currentSubject, weekEntry);

  showWeekDetail();
}


function getWeekProgress(subjectId, weekEntry) {

  if (!weekEntry.data) {
    return null;
  }

  const keys =
    getStorageKeys(subjectId, weekEntry.slug);

  const state =
    JSON.parse(localStorage.getItem(keys.stateKey)) || {};

  const total =
    weekEntry.data.words.length;

  const known =
    Object.values(state)
      .filter(status => status === "known")
      .length;

  return { known, total };
}


function renderWeekSelectGrid() {

  const grid =
    document.getElementById("weekSelectGrid");

  if (!grid || !currentSubject) {
    return;
  }

  grid.innerHTML =
    currentSubject.weeks.map(weekEntry => {

      if (!weekEntry.data) {

        return `
          <div
            class="week-select-card locked"
            data-week-id="${weekEntry.id}"
          >
            <div class="week-select-top">
              <span class="week-select-badge">
                ${weekEntry.title}
              </span>
            </div>

            <strong class="week-select-title">
              준비 중
            </strong>

            <span class="week-select-cta muted">
              🔒 곧 만나요
            </span>
          </div>
        `;
      }

      const progress =
        getWeekProgress(currentSubject.id, weekEntry);

      const percent =
        progress.total
          ? Math.round((progress.known / progress.total) * 100)
          : 0;

      return `
        <button
          class="week-select-card"
          data-week-id="${weekEntry.id}"
        >
          <div class="week-select-top">
            <span class="week-select-badge">
              ${weekEntry.title}
            </span>

            <span class="week-select-count">
              ${progress.total} WORDS
            </span>
          </div>

          <strong class="week-select-title">
            ${weekEntry.subtitle}
          </strong>

          <div class="week-select-progress">

            <div class="week-select-progress-track">
              <div
                class="week-select-progress-bar"
                style="width:${percent}%"
              ></div>
            </div>

            <span>
              ${progress.known} / ${progress.total}
            </span>

          </div>

          <span class="week-select-cta">
            학습하기 →
          </span>
        </button>
      `;

    }).join("");
}


function updateWeekHeader() {

  if (!currentWeek) {
    return;
  }

  const titleEl =
    document.getElementById("appHeaderTitle");

  const subEl =
    document.getElementById("appHeaderSub");

  if (titleEl) {
    titleEl.textContent =
      currentWeek.title;
  }

  if (subEl) {
    subEl.textContent =
      `${words.length} WORDS · ${currentWeek.subtitle.toUpperCase()}`;
  }

  document.querySelectorAll(".week-kicker").forEach(el => {
    el.textContent =
      currentWeek.title;
  });

  updateProgress();
}


function applyTestTypeVisibility() {

  if (!currentSubject) {
    return;
  }

  document.querySelectorAll("[data-test-type]").forEach(el => {

    const allowedTypes =
      el.dataset.testType
        .split(",")
        .map(type => type.trim());

    el.style.display =
      allowedTypes.includes(currentSubject.testType)
        ? ""
        : "none";
  });
}


function updateWeekDetailMeta() {

  if (!currentWeek || !currentSubject) {
    return;
  }

  const subjectKickerEl =
    document.getElementById("weekDetailSubjectKicker");

  const titleEl =
    document.getElementById("weekDetailTitle");

  const countEl =
    document.getElementById("weekDetailCount");

  const subtitleEl =
    document.getElementById("weekDetailSubtitle");

  const learnDescEl =
    document.getElementById("learnCardDesc");

  const miniLessonCardEl =
    document.getElementById("miniLessonCard");

  const miniLessonPrefixEl =
    document.getElementById("miniLessonPrefix");

  const miniLessonMeaningEl =
    document.getElementById("miniLessonMeaning");


  if (subjectKickerEl) {
    subjectKickerEl.textContent =
      currentSubject.title;
  }

  if (titleEl) titleEl.textContent = currentWeek.title;

  if (countEl) countEl.textContent = `${words.length} WORDS`;

  if (subtitleEl) subtitleEl.textContent = `· ${currentWeek.subtitle}`;

  if (learnDescEl) {
    learnDescEl.textContent =
      `${words.length}개 단어를 자세히 공부해요`;
  }

  const prefixLesson =
    currentWeek.data.prefixLesson;

  if (miniLessonCardEl) {
    miniLessonCardEl.style.display =
      prefixLesson ? "" : "none";
  }

  if (prefixLesson) {

    if (miniLessonPrefixEl) {
      miniLessonPrefixEl.textContent =
        prefixLesson.prefix;
    }

    if (miniLessonMeaningEl) {
      miniLessonMeaningEl.textContent =
        prefixLesson.meaning;
    }
  }


  updateProgress();

  updateXPDisplays();
}


// ========================================
// PROGRESS
// ========================================

function updateProgress() {

  if (
    !currentWeek ||
    !words.length
  ) {
    return;
  }

  const knownCount =
    Object.values(learningState)
      .filter(status => status === "known")
      .length;

  const percent =
    (knownCount / words.length) * 100;

  const countElement =
    document.getElementById("progressCount");

  const barElement =
    document.getElementById("progressBar");

  const detailCountElement =
    document.getElementById("weekDetailProgressCount");

  const detailBarElement =
    document.getElementById("weekDetailProgressBar");

  if (countElement) {
    countElement.textContent =
      `${knownCount} / ${words.length}`;
  }

  if (barElement) {
    barElement.style.width =
      `${percent}%`;
  }

  if (detailCountElement) {
    detailCountElement.textContent =
      `${knownCount} / ${words.length}`;
  }

  if (detailBarElement) {
    detailBarElement.style.width =
      `${percent}%`;
  }
}


// ========================================
// WORD HIGHLIGHT
// ========================================

function highlightWord(sentence, word) {

  if (!sentence || !word) {
    return sentence;
  }

  const safeWord =
    word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const regex =
    new RegExp(`(${safeWord})`, "gi");

  return sentence.replace(
    regex,
    "<strong>$1</strong>"
  );
}


// ========================================
// WORD LEARNING
// ========================================

function startLearn(index = 0) {

  ensureWeekOpen();

  learnIndex = index;

  showScreen("learnScreen");

  setActiveNav("learn");

  renderLearn();
}


function renderLearn() {

  const word = words[learnIndex];

  const currentStatus =
    learningState[word.word] || "";

  const antonymChip =
    word.antonym
      ? `
        <span class="word-chip antonym">
          ANT · ${word.antonym}
        </span>
      `
      : "";

  document.getElementById("learnContent").innerHTML = `

    <div class="word-number">
      ${learnIndex + 1} / ${words.length}
    </div>

    <article class="word-card">

      <div class="word-heading">

        <h2 class="big-word">
          ${word.word}
        </h2>

        <button
          type="button"
          id="learnSpeak"
          class="word-speak-button"
          aria-label="발음 듣기"
        >
          🔊
        </button>

      </div>

      <div class="part-badge">
        ${word.partOfSpeech}
      </div>

      <div class="word-meaning">
        ${word.meaning}
      </div>


      <div class="info-block">

        <div class="info-label">
          DEFINITION
        </div>

        <div class="info-text">
          ${word.definition}
        </div>

      </div>


      <div class="info-block">

        <div class="info-label">
          SYNONYM · ANTONYM
        </div>

        <div class="word-chips">

          ${
            word.synonym
              ? `
                <span class="word-chip synonym">
                  SYN · ${word.synonym}
                </span>
              `
              : ""
          }

          ${antonymChip}

        </div>

      </div>


      <div class="info-block">

        <div class="info-label">
          BOOK SENTENCE
        </div>

        <div class="info-text">
          ${highlightWord(
            word.bookSentence,
            word.word
          )}
        </div>

      </div>


      <div class="info-block">

        <div class="info-label">
          EXAMPLE
        </div>

        <div class="info-text">
          ${highlightWord(
            word.example,
            word.word
          )}
        </div>

      </div>

    </article>


    <div class="status-buttons">

      <button
        class="
          status-button
          ${currentStatus === "unknown" ? "selected" : ""}
        "
        data-status="unknown"
      >
        😵
        <br>
        모르겠어요
      </button>


      <button
        class="
          status-button
          ${currentStatus === "maybe" ? "selected" : ""}
        "
        data-status="maybe"
      >
        🤔
        <br>
        애매해요
      </button>


      <button
        class="
          status-button
          ${currentStatus === "known" ? "selected" : ""}
        "
        data-status="known"
      >
        😊
        <br>
        외웠어요
      </button>

    </div>


    <div class="word-navigation">

      <button
        class="prev-button"
        id="learnPrev"
      >
        ← 이전
      </button>

      <button
        class="next-button"
        id="learnNext"
      >
        다음 →
      </button>

    </div>
  `;


  document
    .querySelectorAll(".status-button")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          setLearningStatus(
            button.dataset.status
          );

        }
      );

    });


  document
    .getElementById("learnSpeak")
    .addEventListener(
      "click",
      () => {
        speakWord(word.word);
      }
    );


  document
    .getElementById("learnPrev")
    .addEventListener(
      "click",
      prevLearn
    );


  document
    .getElementById("learnNext")
    .addEventListener(
      "click",
      nextLearn
    );
}


function setLearningStatus(status) {

  const word =
    words[learnIndex].word;

  const previousStatus =
    learningState[word];

  learningState[word] =
    status;

  saveState();

  if (
    status === "known" &&
    previousStatus !== "known"
  ) {

    awardXP(
      `${currentSubject.id}:${currentWeek.slug}:learn:${word}:known`,
      XP_REWARDS.learnKnown
    );
  }

  renderLearn();
}


function nextLearn() {

  learnIndex++;

  if (learnIndex >= words.length) {
    learnIndex = 0;
  }

  renderLearn();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function prevLearn() {

  learnIndex--;

  if (learnIndex < 0) {
    learnIndex =
      words.length - 1;
  }

  renderLearn();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ========================================
// FLASHCARD
// ========================================

function startFlashcard() {

  ensureWeekOpen();

  flashIndex = 0;

  currentFlashcardSessionId =
    generateSessionId();

  showScreen("flashcardScreen");

  renderFlashcard();
}


function renderFlashcard() {

  const word =
    words[flashIndex];

  document.getElementById(
    "flashcardContent"
  ).innerHTML = `

    <div class="flash-counter">
      ${flashIndex + 1} / ${words.length}
    </div>


    <div class="flash-scene">

      <div
        class="flash-card"
        id="flashCard"
      >

        <div
          class="
            flash-face
            flash-front
          "
        >

          <div class="flash-word">
            ${word.word}
          </div>

          <div class="part-badge">
            ${word.partOfSpeech}
          </div>

          <div class="flash-hint">
            카드를 터치해서 뒤집어 보세요
          </div>

        </div>


        <div
          class="
            flash-face
            flash-back
          "
        >

          <div class="flash-meaning">
            ${word.meaning}
          </div>

          <div class="flash-info">

            <strong>
              Definition
            </strong>

            <br>

            ${word.definition}

          </div>


          <div class="flash-info">

            <strong
              style="color:#c65d18;"
            >
              Synonym
            </strong>

            <br>

            ${word.synonym || "-"}

          </div>


          <div class="flash-info">

            <strong
              style="color:#6945c4;"
            >
              Antonym
            </strong>

            <br>

            ${word.antonym || "-"}

          </div>

        </div>

      </div>

    </div>


    <div class="word-navigation">

      <button
        class="prev-button"
        id="flashPrev"
      >
        ← 이전
      </button>

      <button
        class="next-button"
        id="flashNext"
      >
        다음 →
      </button>

    </div>
  `;


  const flashCard =
    document.getElementById(
      "flashCard"
    );

  flashCard.addEventListener(
    "click",
    () => {

      flashCard.classList.toggle(
        "flipped"
      );

      if (flashCard.classList.contains("flipped")) {

        awardRepeatableXP(
          `${currentSubject.id}:${currentWeek.slug}:flashcard:${word.word}`,
          XP_REWARDS.flashcard
        );
      }
    }
  );


  document.getElementById(
    "flashPrev"
  ).addEventListener(
    "click",
    () => {

      flashIndex--;

      if (flashIndex < 0) {
        flashIndex =
          words.length - 1;
      }

      renderFlashcard();
    }
  );


  document.getElementById(
    "flashNext"
  ).addEventListener(
    "click",
    () => {

      flashIndex++;

      if (flashIndex >= words.length) {
        flashIndex = 0;
      }

      renderFlashcard();
    }
  );
}


// ========================================
// QUIZ UTILITY
// ========================================

function shuffle(array) {

  const copied =
    [...array];

  for (
    let i = copied.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [
      copied[i],
      copied[j]
    ] =
    [
      copied[j],
      copied[i]
    ];
  }

  return copied;
}


// ========================================
// QUIZ START
// ========================================

function startQuiz(mode = "meaning") {

  ensureWeekOpen();

  newSession();

  quizMode =
    mode;

  quizIndex =
    0;

  quizScore =
    0;

  quizAnswered =
    false;


  let availableWords =
    [...words];


  if (
    mode === "synonym"
  ) {

    availableWords =
      availableWords.filter(
        word =>
          word.synonym ||
          word.antonym
      );
  }


  quizQuestions =
    shuffle(availableWords);


  showScreen("quizScreen");

  setActiveNav("quiz");

  renderQuiz();
}


// ========================================
// WEEK TEST
// ========================================

function startWeekTest() {

  ensureWeekOpen();

  quizMode =
    "week";

  quizIndex =
    0;

  quizScore =
    0;

  quizAnswered =
    false;

  quizQuestions =
    shuffle(words);

  showScreen("quizScreen");

  setActiveNav("quiz");

  renderQuiz();
}


// ========================================
// 상황형 문제 (CONTEXT)
// ========================================

function startContextQuiz() {

  ensureWeekOpen();

  newSession();

  quizMode =
    "context";

  quizIndex = 0;
  quizScore = 0;
  quizAnswered = false;

  quizQuestions =
    shuffle(
      currentWeek.data.contextQuestions || []
    );

  showScreen("quizScreen");

  setActiveNav("quiz");

  renderQuiz();
}


// ========================================
// PREFIX 훈련
// ========================================

function startPrefixPractice() {

  ensureWeekOpen();

  newSession();

  quizMode =
    "prefix-practice";

  quizIndex = 0;
  quizScore = 0;
  quizAnswered = false;

  quizQuestions =
    shuffle(
      currentWeek.data.prefixPractice || []
    );

  showScreen("quizScreen");

  setActiveNav("quiz");

  renderQuiz();
}


// ========================================
// WORD BOX 빈칸
// ========================================

function startWordBox() {

  ensureWeekOpen();

  newSession();

  quizMode =
    "wordbox";

  quizIndex = 0;
  quizScore = 0;
  quizAnswered = false;

  quizQuestions =
    shuffle(
      currentWeek.data.wordBoxSets || []
    );

  showScreen("quizScreen");

  setActiveNav("quiz");

  renderQuiz();
}


// ========================================
// CRITICAL READING 전용 · 지문 속 의미 찾기
// ----------------------------------------
// Vocabulary Workbook의 상황형 문제(context)와는 별개 데이터
// (currentWeek.data.contextPassages)를 쓰지만, 렌더러/오답 카테고리는
// "context"를 그대로 재사용한다 (오답노트 필드 contextWrong, XP는
// contextCorrect 재사용 - Critical Reading 전용 XP 체계를 새로 만들지 않음).
// ========================================

function startContextPassageQuiz() {

  ensureWeekOpen();

  newSession();

  quizMode =
    "context-passage";

  quizIndex = 0;
  quizScore = 0;
  quizAnswered = false;

  const flatQuestions = [];

  (currentWeek.data.contextPassages || []).forEach(passageSet => {

    (passageSet.questions || []).forEach(question => {

      flatQuestions.push({
        ...question,
        passage: passageSet.passage
      });
    });
  });

  quizQuestions =
    shuffle(flatQuestions);

  showScreen("quizScreen");

  setActiveNav("quiz");

  renderQuiz();
}


// ========================================
// CRITICAL READING 전용 · Closest Meaning
// ----------------------------------------
// 원본 데이터(closestMeaningQuestions)는 sentence/targetWord/choices/
// answer/explanation 필드로 저장되고, renderExplainedMCQ가 기대하는
// question/choices/answer/explanation/relatedWord 형태로는
// buildClosestMeaningRenderItem()이 변환한다.
// ========================================

function buildClosestMeaningRenderItem(cm) {

  return {
    id: cm.id,
    question: `
      <div class="cm-instruction">
        문장 속에서 강조된 단어와 가장 가까운 뜻을 고르세요.
      </div>
      <div class="cm-sentence">
        ${highlightWordBoundary(cm.sentence, cm.targetWord)}
      </div>
    `,
    choices: cm.choices,
    answer: cm.answer,
    explanation: cm.explanation,
    relatedWord: cm.relatedWord || cm.targetWord
  };
}


function startClosestMeaningQuiz() {

  ensureWeekOpen();

  newSession();

  quizMode =
    "closest-meaning";

  quizIndex = 0;
  quizScore = 0;
  quizAnswered = false;

  quizQuestions =
    shuffle(
      currentWeek.data.closestMeaningQuestions || []
    ).map(buildClosestMeaningRenderItem);

  showScreen("quizScreen");

  setActiveNav("quiz");

  renderQuiz();
}


// ========================================
// 문장 만들기
// ========================================

function startSentenceWriting() {

  ensureWeekOpen();

  newSession();

  quizMode =
    "sentence-writing";

  quizIndex = 0;
  quizScore = 0;
  quizAnswered = false;

  quizQuestions =
    shuffle(words);

  showScreen("quizScreen");

  setActiveNav("quiz");

  renderQuiz();
}


// ========================================
// 틀린 문제만 재시험 (WEIGHTED RETEST)
// ========================================

function weightedShuffleUnique(items, weightFn) {

  return items
    .map(item => ({
      item,
      key: Math.pow(
        Math.random(),
        1 / Math.max(weightFn(item), 0.0001)
      )
    }))
    .sort((a, b) => b.key - a.key)
    .map(entry => entry.item);
}


function startRetest() {

  ensureWeekOpen();

  // Critical Reading은 문제 유형이 완전히 다르므로
  // (spelling/문장 만들기 없음, 지문/Word Box/Closest Meaning만 재시험)
  // 별도 함수로 분리한다 - Vocabulary Workbook 로직은 그대로 둔다.
  if (currentSubject.testType === "critical-reading") {

    startCriticalReadingRetest();

    return;
  }


  const weakWords =
    words.filter(word =>
      needsReview(word.word)
    );

  if (!weakWords.length) {

    alert(
      "아직 재시험할 틀린 문제가 없어요. 학습을 더 진행해보세요!"
    );

    return;
  }


  quizMode =
    "retest";

  quizIndex = 0;
  quizScore = 0;
  quizAnswered = false;

  quizQuestions =
    weightedShuffleUnique(
      weakWords,
      word => getTotalWrongCount(word.word) + 1
    );

  showScreen("quizScreen");

  setActiveNav("quiz");

  renderQuiz();
}


// ========================================
// CRITICAL READING 전용 · 틀린 문제만 재시험
// ----------------------------------------
// Vocabulary Workbook 재시험(meaning/word/spelling/synonym/context)을
// 그대로 쓰지 않고, 지문 문맥 문제/Word Box/Closest Meaning
// 세 유형에서만 틀렸던 단어를 대상으로 다시 출제한다.
// ========================================

function startCriticalReadingRetest() {

  const weakWords =
    words.filter(word =>
      needsReview(word.word)
    );

  if (!weakWords.length) {

    alert(
      "아직 재시험할 틀린 문제가 없어요. 학습을 더 진행해보세요!"
    );

    return;
  }


  quizMode =
    "critical-reading-retest";

  quizIndex = 0;
  quizScore = 0;
  quizAnswered = false;

  quizQuestions =
    weightedShuffleUnique(
      weakWords,
      word => getTotalWrongCount(word.word) + 1
    );

  showScreen("quizScreen");

  setActiveNav("quiz");

  renderQuiz();
}


// ========================================
// 실전 모의시험 (MOCK TEST)
// ----------------------------------------
// 기존 practice 렌더러(spelling/context/
// prefix-practice/wordbox/sentence-writing)를
// "1문항짜리 퀴즈"로 재사용하고,
// 답변 후 결과 화면으로 넘어가는 지점을 가로채서
// 다음 SECTION 문항으로 이어붙이는 방식으로 구현한다.
// ========================================

function buildMockTestItems() {

  const data =
    currentWeek.data;

  const sectionA =
    shuffle(words)
      .slice(0, 4)
      .map(w => ({
        section: "A",
        label: "Listen & Spell",
        type: "spelling",
        points: 0.5,
        word: w
      }));


  const wordBoxSets =
    data.wordBoxSets || [];

  const chosenSet =
    wordBoxSets[
      Math.floor(Math.random() * wordBoxSets.length)
    ];

  const sectionB =
    chosenSet
      ? [{
          section: "B",
          label: "Word Box",
          type: "wordbox",
          points: 5,
          set: chosenSet
        }]
      : [];


  const sectionC =
    shuffle(data.contextQuestions || [])
      .slice(0, 5)
      .map(q => ({
        section: "C",
        label: "Multiple Choice",
        type: "context",
        points: 1,
        question: q
      }));


  const prefixItems =
    shuffle(data.prefixPractice || [])
      .slice(0, 2)
      .map(q => ({
        section: "D",
        label: "Prefix & Writing",
        type: "prefix",
        points: 3,
        question: q
      }));

  const writingItems =
    shuffle(words)
      .slice(0, 2)
      .map(w => ({
        section: "D",
        label: "Prefix & Writing",
        type: "writing",
        points: 3,
        word: w
      }));


  return [
    ...sectionA,
    ...sectionB,
    ...sectionC,
    ...prefixItems,
    ...writingItems
  ];
}


// ========================================
// CRITICAL READING 전용 실전 모의시험
// ----------------------------------------
// Vocabulary Workbook의 4-section(A~D) 구성을 그대로 쓰지 않고,
// 실제 Critical Reading 시험지 구조(총 20점)를 그대로 반영한다:
//   SECTION A - READ THE PASSAGE (지문 1개, 5문제 × 2점 = 10점)
//   SECTION B - WORD BOX (6 choices / 5 blanks, 5문제 × 1점 = 5점)
//   SECTION C - CLOSEST MEANING (5문제 × 1점 = 5점)
// ========================================

function buildCriticalReadingMockTestItems() {

  const data =
    currentWeek.data;

  const passageSets =
    data.contextPassages || [];

  const chosenPassageSet =
    passageSets[
      Math.floor(Math.random() * passageSets.length)
    ];

  const sectionA =
    chosenPassageSet
      ? shuffle(chosenPassageSet.questions || [])
          .slice(0, 5)
          .map(q => ({
            section: "A",
            label: "Read the Passage",
            type: "context-passage",
            points: 2,
            question: {
              ...q,
              passage: chosenPassageSet.passage
            }
          }))
      : [];


  const wordBoxSets =
    data.wordBoxSets || [];

  const chosenSet =
    wordBoxSets[
      Math.floor(Math.random() * wordBoxSets.length)
    ];

  const sectionB =
    chosenSet
      ? [{
          section: "B",
          label: "Word Box",
          type: "wordbox",
          points: 5,
          set: chosenSet
        }]
      : [];


  const sectionC =
    shuffle(data.closestMeaningQuestions || [])
      .slice(0, 5)
      .map(cm => ({
        section: "C",
        label: "Closest Meaning",
        type: "closest-meaning",
        points: 1,
        question: cm
      }));


  return [
    ...sectionA,
    ...sectionB,
    ...sectionC
  ];
}


function startMockTest() {

  ensureWeekOpen();

  const items =
    currentSubject.testType === "critical-reading"
      ? buildCriticalReadingMockTestItems()
      : buildMockTestItems();

  mockTestState = {
    items,
    index: 0,
    rawScore: 0,
    wrongList: [],
    sessionId: generateSessionId()
  };

  showScreen("quizScreen");

  setActiveNav("quiz");

  startNextMockTestItem();
}


function startNextMockTestItem() {

  const state =
    mockTestState;

  const item =
    state.items[state.index];

  quizAnswered = false;
  quizScore = 0;
  quizIndex = 0;


  if (item.type === "spelling") {

    quizMode = "spelling";
    quizQuestions = [item.word];

  }

  else if (item.type === "context") {

    quizMode = "context";
    quizQuestions = [item.question];

  }

  else if (item.type === "prefix") {

    quizMode = "prefix-practice";
    quizQuestions = [item.question];

  }

  else if (item.type === "wordbox") {

    quizMode = "wordbox";
    quizQuestions = [item.set];

  }

  else if (item.type === "writing") {

    quizMode = "sentence-writing";
    quizQuestions = [item.word];
  }

  else if (item.type === "context-passage") {

    quizMode = "context-passage";
    quizQuestions = [item.question];

  }

  else if (item.type === "closest-meaning") {

    quizMode = "closest-meaning";
    quizQuestions = [buildClosestMeaningRenderItem(item.question)];
  }


  renderQuiz();

  patchMockTestChrome(item, state);
}


function patchMockTestChrome(item, state) {

  const progressEl =
    document.querySelector(
      "#quizContent .quiz-progress"
    );

  if (progressEl) {
    progressEl.textContent =
      `문제 ${state.index + 1} / ${state.items.length}`;
  }


  const quizCard =
    document.querySelector(
      "#quizContent .quiz-card"
    );

  if (quizCard) {

    const banner =
      document.createElement("div");

    banner.className =
      "exam-section-banner";

    banner.innerHTML = `
      <span class="exam-section-id">
        SECTION ${item.section}
      </span>
      <span class="exam-section-label">
        ${item.label}
      </span>
    `;

    quizCard.parentNode.insertBefore(
      banner,
      quizCard
    );
  }
}


function getMockWrongLabel(item) {

  const typeLabels = {
    spelling: "spelling",
    context: "context",
    prefix: "prefix",
    wordbox: "word box",
    writing: "sentence",
    "context-passage": "reading passage",
    "closest-meaning": "closest meaning"
  };

  const typeLabel =
    typeLabels[item.type] || item.type;

  const wordLabel =
    (item.word && item.word.word) ||
    (item.question && (item.question.relatedWord || item.question.targetWord)) ||
    (item.set ? item.set.words.join(", ") : "");

  return `${wordLabel} ${typeLabel}`;
}


function handleMockTestItemComplete() {

  const state =
    mockTestState;

  const item =
    state.items[state.index];

  const earnedPoints =
    item.type === "wordbox"
      ? quizScore
      : quizScore * item.points;

  state.rawScore += earnedPoints;

  if (earnedPoints < item.points) {
    state.wrongList.push(
      getMockWrongLabel(item)
    );
  }


  state.index++;

  if (state.index >= state.items.length) {

    renderMockTestFinalResult();

  }

  else {

    startNextMockTestItem();
  }
}


function renderMockTestFinalResult() {

  const state =
    mockTestState;

  const scheme =
    currentWeek.data.mockTest;

  const totalPoints =
    scheme.totalPoints;

  const rawScore =
    Math.round(state.rawScore * 10) / 10;

  const converted =
    Math.round((rawScore / totalPoints) * 100);

  const passingScore =
    scheme.passingScore || 60;

  const message =
    converted >= passingScore
      ? "🎉 수고했어요! 좋은 점수를 받았어요."
      : "📚 오답노트에서 틀린 문제를 다시 확인해봐요.";


  const mockTestActivity =
    `${currentSubject.id}:${currentWeek.slug}:mocktest`;

  awardRepeatableXP(
    `${mockTestActivity}:complete`,
    XP_REWARDS.mockComplete,
    key => key.startsWith(`${mockTestActivity}:`) && key.endsWith(":complete")
  );

  if (converted >= 90) {

    awardRepeatableXP(
      `${mockTestActivity}:bonus`,
      XP_REWARDS.mockHighScoreBonus,
      key => key.startsWith(`${mockTestActivity}:`) && key.endsWith(":bonus")
    );
  }


  mockTestState = null;

  quizMode = "mocktest-done";


  document.getElementById(
    "quizContent"
  ).innerHTML = `

    <div class="result-card exam-result">

      <div class="screen-kicker">
        ${currentWeek.title} ·
        ${
          currentSubject.testType === "critical-reading"
            ? "CRITICAL READING VOCABULARY MOCK TEST"
            : "VOCABULARY MOCK TEST"
        }
      </div>

      <div class="result-score">
        ${rawScore}
        <span
          style="
            font-size:22px;
            color:#7c879b;
          "
        >
          / ${totalPoints}
        </span>
      </div>

      <div class="converted-score">
        환산 점수 · ${converted} / 100
      </div>

      <div class="result-message">
        ${message}
      </div>


      ${
        state.wrongList.length
          ? `
            <div class="mock-wrong-list">

              <div class="mock-wrong-list-title">
                틀린 문제
              </div>

              ${state.wrongList.map(label => `
                <div class="mock-wrong-item">
                  · ${label}
                </div>
              `).join("")}

            </div>
          `
          : `
            <div class="mock-wrong-list-empty">
              모든 문제를 맞혔어요! 🎉
            </div>
          `
      }


      <button
        class="quiz-next"
        id="retryMockTest"
      >
        다시 응시하기
      </button>


      <button
        class="quiz-next"
        id="mockResultReview"
        style="
          background:var(--primary-soft);
          color:var(--primary-dark);
        "
      >
        오답노트 보기
      </button>

    </div>
  `;


  document.getElementById(
    "retryMockTest"
  ).addEventListener(
    "click",
    startMockTest
  );

  document.getElementById(
    "mockResultReview"
  ).addEventListener(
    "click",
    startReview
  );
}


// ========================================
// QUIZ RENDER
// ========================================

function renderQuiz() {

  quizAnswered =
    false;


  if (
    quizIndex >=
    quizQuestions.length
  ) {

    renderQuizResult();

    return;
  }


  const word =
    quizQuestions[quizIndex];


  let questionText = "";
  let guideText = "";
  let correctAnswer = "";
  let answerPool = [];
  let explanation = "";

  currentQuestionCategory =
    "meaning";


  if (
    quizMode === "meaning"
  ) {

    guideText =
      "알맞은 뜻을 고르세요";

    questionText =
      word.word;

    correctAnswer =
      word.meaning;

    answerPool =
      words.map(
        item => item.meaning
      );

  }


  else if (
    quizMode === "word"
  ) {

    guideText =
      "알맞은 영어 단어를 고르세요";

    questionText =
      word.meaning;

    correctAnswer =
      word.word;

    answerPool =
      words.map(
        item => item.word
      );

  }


  else if (
    quizMode === "synonym"
  ) {

    const useAntonym =
      word.antonym &&
      Math.random() > 0.5;


    if (useAntonym) {

      guideText =
        "반의어를 고르세요";

      questionText =
        word.word;

      correctAnswer =
        word.antonym;

      answerPool =
        words
          .filter(
            item => item.antonym
          )
          .map(
            item => item.antonym
          );

    }

    else {

      guideText =
        "유의어를 고르세요";

      questionText =
        word.word;

      correctAnswer =
        word.synonym;

      answerPool =
        words
          .filter(
            item => item.synonym
          )
          .map(
            item => item.synonym
          );

    }

  }


  else if (
    quizMode === "spelling"
  ) {

    guideText =
      "발음을 듣고 철자를 입력하세요";

    questionText =
      word.meaning;

    correctAnswer =
      word.word;

    currentQuestionCategory =
      "spelling";

  }


  else if (
    quizMode === "context"
  ) {

    renderExplainedMCQ(
      word,
      "상황을 읽고 알맞은 답을 고르세요",
      "context",
      word.relatedWord
    );

    return;

  }


  else if (
    quizMode === "prefix-practice"
  ) {

    renderExplainedMCQ(
      word,
      "PREFIX 훈련 · hypo-",
      "prefix",
      word.relatedWord
    );

    return;

  }


  else if (
    quizMode === "wordbox"
  ) {

    renderWordBoxSet(word);

    return;

  }


  else if (
    quizMode === "sentence-writing"
  ) {

    renderSentenceWriting(word);

    return;

  }


  else if (
    quizMode === "context-passage"
  ) {

    renderExplainedMCQ(
      word,
      "지문을 읽고 문맥상 의미를 판단하세요",
      "context",
      word.relatedWord,
      word.passage
    );

    return;

  }


  else if (
    quizMode === "closest-meaning"
  ) {

    renderExplainedMCQ(
      word,
      "가장 가까운 뜻을 고르세요",
      "closestMeaning",
      word.relatedWord
    );

    return;

  }


  else if (
    quizMode === "week"
  ) {

    const questionType =
      Math.floor(
        Math.random() * 4
      );


    if (
      questionType === 0
    ) {

      guideText =
        "알맞은 뜻을 고르세요";

      questionText =
        word.word;

      correctAnswer =
        word.meaning;

      answerPool =
        words.map(
          item => item.meaning
        );

    }


    else if (
      questionType === 1
    ) {

      guideText =
        "알맞은 영어 단어를 고르세요";

      questionText =
        word.meaning;

      correctAnswer =
        word.word;

      answerPool =
        words.map(
          item => item.word
        );

    }


    else if (
      questionType === 2 &&
      word.synonym
    ) {

      guideText =
        "유의어를 고르세요";

      questionText =
        word.word;

      correctAnswer =
        word.synonym;

      answerPool =
        words
          .filter(
            item => item.synonym
          )
          .map(
            item => item.synonym
          );

    }


    else {

      guideText =
        "Definition에 맞는 단어를 고르세요";

      questionText =
        word.definition;

      correctAnswer =
        word.word;

      answerPool =
        words.map(
          item => item.word
        );
    }
  }


  else if (
    quizMode === "retest"
  ) {

    const wordContextQuestions =
      (currentWeek.data.contextQuestions || [])
        .filter(q => q.relatedWord === word.word);

    const subtypes =
      ["meaning", "word", "spelling"];

    if (word.synonym || word.antonym) {
      subtypes.push("synonym");
    }

    if (wordContextQuestions.length) {
      subtypes.push("context");
    }

    const chosen =
      subtypes[
        Math.floor(Math.random() * subtypes.length)
      ];


    if (chosen === "context") {

      const contextItem =
        wordContextQuestions[
          Math.floor(
            Math.random() * wordContextQuestions.length
          )
        ];

      renderExplainedMCQ(
        contextItem,
        "상황을 읽고 알맞은 답을 고르세요 (재시험)",
        "context",
        word.word
      );

      return;
    }


    if (chosen === "spelling") {

      guideText =
        "발음을 듣고 철자를 입력하세요 (재시험)";

      questionText =
        word.meaning;

      correctAnswer =
        word.word;

      currentQuestionCategory =
        "spelling";

    }


    else if (chosen === "word") {

      guideText =
        "알맞은 영어 단어를 고르세요 (재시험)";

      questionText =
        word.meaning;

      correctAnswer =
        word.word;

      answerPool =
        words.map(item => item.word);

    }


    else if (
      chosen === "synonym" &&
      word.synonym
    ) {

      guideText =
        "유의어를 고르세요 (재시험)";

      questionText =
        word.word;

      correctAnswer =
        word.synonym;

      answerPool =
        words
          .filter(item => item.synonym)
          .map(item => item.synonym);

    }


    else {

      guideText =
        "알맞은 뜻을 고르세요 (재시험)";

      questionText =
        word.word;

      correctAnswer =
        word.meaning;

      answerPool =
        words.map(item => item.meaning);
    }
  }


  else if (
    quizMode === "critical-reading-retest"
  ) {

    const data =
      currentWeek.data;

    const relatedPassageQuestions =
      [];

    (data.contextPassages || []).forEach(passageSet => {

      (passageSet.questions || []).forEach(question => {

        if (question.relatedWord === word.word) {

          relatedPassageQuestions.push({
            ...question,
            passage: passageSet.passage
          });
        }
      });
    });

    const relatedClosestMeaning =
      (data.closestMeaningQuestions || [])
        .filter(cm => (cm.relatedWord || cm.targetWord) === word.word);

    const relatedWordBoxSets =
      (data.wordBoxSets || [])
        .filter(set => set.words.includes(word.word));

    const subtypes = [];

    if (relatedPassageQuestions.length) {
      subtypes.push("context-passage");
    }

    if (relatedClosestMeaning.length) {
      subtypes.push("closest-meaning");
    }

    if (relatedWordBoxSets.length) {
      subtypes.push("wordbox");
    }

    if (!subtypes.length) {

      quizIndex++;

      renderQuiz();

      return;
    }

    const chosen =
      subtypes[
        Math.floor(Math.random() * subtypes.length)
      ];


    if (chosen === "context-passage") {

      const item =
        relatedPassageQuestions[
          Math.floor(
            Math.random() * relatedPassageQuestions.length
          )
        ];

      renderExplainedMCQ(
        item,
        "지문을 읽고 문맥상 의미를 판단하세요 (재시험)",
        "context",
        word.word,
        item.passage
      );

      return;
    }


    if (chosen === "closest-meaning") {

      const cm =
        relatedClosestMeaning[
          Math.floor(
            Math.random() * relatedClosestMeaning.length
          )
        ];

      renderExplainedMCQ(
        buildClosestMeaningRenderItem(cm),
        "가장 가까운 뜻을 고르세요 (재시험)",
        "closestMeaning",
        word.word
      );

      return;
    }


    if (chosen === "wordbox") {

      const set =
        relatedWordBoxSets[
          Math.floor(
            Math.random() * relatedWordBoxSets.length
          )
        ];

      renderWordBoxSet(set);

      return;
    }
  }


  if (!correctAnswer) {

    quizIndex++;

    renderQuiz();

    return;
  }


  if (
    currentQuestionCategory === "spelling"
  ) {

    renderSpellingQuiz(
      word,
      guideText,
      questionText,
      correctAnswer
    );

    return;
  }


  const wrongChoices =
    shuffle(
      answerPool.filter(
        item =>
          item !== correctAnswer
      )
    ).slice(0, 3);


  const choices =
    shuffle([
      correctAnswer,
      ...wrongChoices
    ]);


  document.getElementById(
    "quizContent"
  ).innerHTML = `

    <div class="quiz-progress">

      QUESTION
      ${quizIndex + 1}
      /
      ${quizQuestions.length}

    </div>


    <div class="quiz-card">

      <div class="quiz-type">
        ${guideText}
      </div>


      <div class="quiz-question">
        ${questionText}
      </div>


      <div class="answer-list">

        ${choices.map(choice => `

          <button
            class="answer-button"
            data-choice="${encodeURIComponent(choice)}"
          >
            ${choice}
          </button>

        `).join("")}

      </div>


      <div
        id="quizFeedback"
      >
      </div>

    </div>
  `;


  document
    .querySelectorAll(
      ".answer-button"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const selected =
            decodeURIComponent(
              button.dataset.choice
            );

          handleAnswer(
            button,
            selected,
            correctAnswer,
            word.word
          );
        }
      );
    });
}


// ========================================
// SPELLING QUIZ
// ========================================

function renderSpellingQuiz(
  word,
  guideText,
  questionText,
  correctAnswer
) {

  spellingCorrectAnswer =
    correctAnswer;

  spellingOriginalWord =
    word.word;


  document.getElementById(
    "quizContent"
  ).innerHTML = `

    <div class="quiz-progress">

      QUESTION
      ${quizIndex + 1}
      /
      ${quizQuestions.length}

    </div>


    <div class="quiz-card">

      <div class="quiz-type">
        ${guideText}
      </div>


      <div class="quiz-question">
        ${questionText}
      </div>


      <button
        type="button"
        id="spellingSpeak"
        class="spelling-speak-button"
      >
        🔊 다시 듣기
      </button>


      <form
        id="spellingForm"
        class="spelling-form"
        autocomplete="off"
      >

        <input
          type="text"
          id="spellingInput"
          class="spelling-input"
          placeholder="영단어 스펠링을 입력하세요"
          autocomplete="off"
          autocapitalize="none"
          spellcheck="false"
        />

        <button
          type="submit"
          class="quiz-next"
          id="spellingSubmit"
        >
          확인
        </button>

      </form>


      <div
        id="quizFeedback"
      >
      </div>

    </div>
  `;


  const spellingForm =
    document.getElementById(
      "spellingForm"
    );

  const spellingInput =
    document.getElementById(
      "spellingInput"
    );

  spellingInput.focus();

  spellingForm.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      checkSpellingAnswer();
    }
  );


  document
    .getElementById(
      "spellingSpeak"
    )
    .addEventListener(
      "click",
      () => {
        speakWord(word.word);
      }
    );
}


// ========================================
// TEXT-TO-SPEECH (WORD PRONUNCIATION)
// ========================================

const PREFERRED_TTS_VOICE_NAMES = [
  "Samantha",
  "Ava",
  "Siri",
  "Microsoft Aria",
  "Microsoft Jenny",
  "Google US English",
  "Google English"
];

let cachedVoices = [];


function refreshVoiceCache() {

  if (
    !("speechSynthesis" in window)
  ) {
    return;
  }

  const voices =
    window.speechSynthesis.getVoices();

  if (
    voices &&
    voices.length
  ) {
    cachedVoices = voices;
  }
}


function pickEnglishVoice() {

  if (!cachedVoices.length) {
    return null;
  }

  const englishVoices =
    cachedVoices.filter(voice =>
      voice.lang &&
      voice.lang.toLowerCase().startsWith("en")
    );

  if (!englishVoices.length) {
    return null;
  }


  const usVoices =
    englishVoices.filter(voice =>
      voice.lang.toLowerCase() === "en-us"
    );


  for (const preferredName of PREFERRED_TTS_VOICE_NAMES) {

    const usMatch =
      usVoices.find(voice =>
        voice.name.includes(preferredName)
      );

    if (usMatch) {
      return usMatch;
    }
  }


  for (const preferredName of PREFERRED_TTS_VOICE_NAMES) {

    const anyMatch =
      englishVoices.find(voice =>
        voice.name.includes(preferredName)
      );

    if (anyMatch) {
      return anyMatch;
    }
  }


  if (usVoices.length) {
    return usVoices[0];
  }


  const gbVoice =
    englishVoices.find(voice =>
      voice.lang.toLowerCase() === "en-gb"
    );

  if (gbVoice) {
    return gbVoice;
  }


  return englishVoices[0];
}


function speakWord(text) {

  if (
    !text ||
    !("speechSynthesis" in window)
  ) {
    return;
  }

  try {

    window.speechSynthesis.cancel();

  } catch (error) {

    console.log(
      "TTS cancel skipped:",
      error
    );
  }


  refreshVoiceCache();


  const utterance =
    new SpeechSynthesisUtterance(
      text
    );

  utterance.lang =
    "en-US";

  utterance.rate =
    0.82;

  utterance.pitch =
    1.0;

  utterance.volume =
    1;


  const voice =
    pickEnglishVoice();

  if (voice) {

    try {

      utterance.voice =
        voice;

      console.log(
        `Selected TTS voice: ${voice.name} ${voice.lang}`
      );

    } catch (error) {

      console.log(
        "TTS voice assignment failed, falling back to browser default:",
        error
      );
    }

  }

  else {

    console.log(
      "Selected TTS voice: browser default (en-US)"
    );
  }


  try {

    window.speechSynthesis.speak(
      utterance
    );

  } catch (error) {

    console.log(
      "TTS speak failed:",
      error
    );
  }
}


if (
  "speechSynthesis" in window
) {

  refreshVoiceCache();

  window.speechSynthesis.onvoiceschanged =
    refreshVoiceCache;
}


function handleSpellingAnswer(
  rawInput,
  correctAnswer,
  originalWord
) {

  if (quizAnswered) {
    return;
  }

  quizAnswered =
    true;


  const spellingInput =
    document.getElementById(
      "spellingInput"
    );

  const spellingSubmit =
    document.getElementById(
      "spellingSubmit"
    );

  spellingInput.disabled =
    true;

  spellingSubmit.style.display =
    "none";


  const isCorrect =
    rawInput.trim().toLowerCase() ===
    correctAnswer.trim().toLowerCase();


  if (isCorrect) {

    spellingInput.classList.add(
      "correct"
    );

    quizScore++;

    if (shouldAwardPracticeXP()) {

      awardRepeatableXP(
        `${currentSubject.id}:${currentWeek.slug}:spelling:${originalWord}`,
        XP_REWARDS.spellingCorrect
      );
    }

  }

  else {

    spellingInput.classList.add(
      "wrong"
    );

    bumpWrong(originalWord, "spelling");
  }


  const feedback =
    document.getElementById(
      "quizFeedback"
    );


  feedback.innerHTML = `

    ${
      isCorrect
        ? ""
        : `
          <div class="spelling-answer-compare">

            <div class="spelling-my-answer">
              내가 쓴 답
              <strong>${rawInput.trim() || "(빈 답안)"}</strong>
            </div>

            <div class="spelling-correct-answer">
              정답
              <strong>${correctAnswer}</strong>
            </div>

          </div>
        `
    }

    <button
      class="quiz-next"
      id="quizNextButton"
    >
      ${
        quizIndex ===
        quizQuestions.length - 1
          ? "결과 보기"
          : "다음 문제 →"
      }
    </button>

  `;


  document.getElementById(
    "quizNextButton"
  ).addEventListener(
    "click",
    goToNextSpellingQuestion
  );
}


function checkSpellingAnswer() {

  if (quizAnswered) {
    return;
  }

  const spellingInput =
    document.getElementById(
      "spellingInput"
    );

  if (!spellingInput) {
    return;
  }

  if (!spellingInput.value.trim()) {
    return;
  }

  handleSpellingAnswer(
    spellingInput.value,
    spellingCorrectAnswer,
    spellingOriginalWord
  );
}


function goToNextSpellingQuestion() {

  quizIndex++;

  renderQuiz();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function handleSpellingEnterKey(
  event
) {

  if (event.key !== "Enter") {
    return;
  }

  if (event.isComposing) {
    return;
  }

  if (quizMode !== "spelling") {
    return;
  }

  const quizScreen =
    document.getElementById(
      "quizScreen"
    );

  if (
    !quizScreen ||
    !quizScreen.classList.contains(
      "active"
    )
  ) {
    return;
  }


  event.preventDefault();


  if (!quizAnswered) {

    checkSpellingAnswer();

  }

  else {

    goToNextSpellingQuestion();
  }
}


// ========================================
// EXPLAINED MCQ
// (상황형 문제 / Prefix 훈련 공용)
// ========================================

function renderExplainedMCQ(
  item,
  guideText,
  category,
  relatedWord,
  passage
) {

  const shuffledChoices =
    shuffle(
      item.choices.map((text, index) => ({
        text,
        isCorrect: index === item.answer
      }))
    );

  document.getElementById(
    "quizContent"
  ).innerHTML = `

    <div class="quiz-progress">

      QUESTION
      ${quizIndex + 1}
      /
      ${quizQuestions.length}

    </div>


    <div class="quiz-card">

      <div class="quiz-type">
        ${guideText}
      </div>


      ${
        passage
          ? `
            <div class="quiz-passage-box">
              <div class="quiz-passage-label">
                READ THE PASSAGE
              </div>
              <div class="quiz-passage-text">
                ${passage}
              </div>
            </div>
          `
          : ""
      }


      <div class="quiz-question explained">
        ${item.question}
      </div>


      <div class="answer-list">

        ${shuffledChoices.map((choice, index) => `

          <button
            class="answer-button"
            data-index="${index}"
          >
            ${choice.text}
          </button>

        `).join("")}

      </div>


      <div
        id="quizFeedback"
      >
      </div>

    </div>
  `;


  document
    .querySelectorAll(".answer-button")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const index =
            Number(button.dataset.index);

          handleExplainedAnswer(
            button,
            shuffledChoices,
            index,
            item.explanation,
            relatedWord,
            category,
            item.id
          );
        }
      );
    });
}


function handleExplainedAnswer(
  selectedButton,
  shuffledChoices,
  selectedIndex,
  explanation,
  relatedWord,
  category,
  questionId
) {

  if (quizAnswered) {
    return;
  }

  quizAnswered =
    true;


  const buttons =
    document.querySelectorAll(
      ".answer-button"
    );

  buttons.forEach((button, index) => {

    if (shuffledChoices[index].isCorrect) {
      button.classList.add("correct");
    }
  });


  const isCorrect =
    shuffledChoices[selectedIndex].isCorrect;

  if (isCorrect) {

    quizScore++;

    if (shouldAwardPracticeXP()) {

      const xpKey =
        category === "context"
          ? "contextCorrect"
          : "prefixCorrect";

      awardRepeatableXP(
        `${currentSubject.id}:${currentWeek.slug}:${category}:${questionId}`,
        XP_REWARDS[xpKey]
      );
    }

  }

  else {

    selectedButton.classList.add("wrong");

    if (relatedWord) {
      bumpWrong(relatedWord, category);
    }
  }


  const feedback =
    document.getElementById(
      "quizFeedback"
    );

  feedback.innerHTML = `

    ${
      explanation
        ? `
          <div class="explanation-box">
            <div class="explanation-label">
              💡 해설
            </div>
            ${explanation}
          </div>
        `
        : ""
    }

    <button
      class="quiz-next"
      id="quizNextButton"
    >
      ${
        quizIndex ===
        quizQuestions.length - 1
          ? "결과 보기"
          : "다음 문제 →"
      }
    </button>

  `;

  document.getElementById(
    "quizNextButton"
  ).addEventListener(
    "click",
    () => {

      quizIndex++;

      renderQuiz();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  );
}


// ========================================
// WORD BOX
// ========================================

function renderWordBoxSet(set) {

  document.getElementById(
    "quizContent"
  ).innerHTML = `

    <div class="quiz-progress">
      WORD BOX SET
      ${quizIndex + 1}
      /
      ${quizQuestions.length}
    </div>


    <div class="quiz-card">

      <div class="quiz-type">
        Word Box의 단어로 문장 빈칸을 채우세요
      </div>


      <div class="word-box">

        <div class="word-box-label">
          WORD BOX
        </div>

        <div class="word-box-chips">
          ${set.words.map(w => `
            <span
              class="word-box-chip"
              data-word="${encodeURIComponent(w)}"
            >${w}</span>
          `).join("")}
        </div>

      </div>


      <div class="wordbox-sentences">

        ${set.sentences.map((sentence, index) => `

          <div
            class="wordbox-sentence"
            data-index="${index}"
          >

            <p class="wordbox-sentence-text">
              ${sentence.text.replace(
                "___",
                `<span class="wordbox-blank-marker">______</span>`
              )}
            </p>

            <select
              class="wordbox-select"
              id="wordboxSelect-${index}"
            >
              <option value="">
                단어를 선택하세요
              </option>
              ${set.words.map(w => `
                <option value="${w}">${w}</option>
              `).join("")}
            </select>

          </div>

        `).join("")}

      </div>


      <button
        class="quiz-next"
        id="wordboxSubmit"
      >
        채점하기
      </button>


      <div id="quizFeedback">
      </div>

    </div>
  `;


  const selects =
    Array.from(
      document.querySelectorAll(".wordbox-select")
    );


  function refreshWordBoxOptions() {

    const chosenValues =
      selects
        .map(select => select.value)
        .filter(Boolean);

    selects.forEach(select => {

      const currentValue =
        select.value;

      Array.from(select.options).forEach(option => {

        if (!option.value) {
          return;
        }

        option.disabled =
          chosenValues.includes(option.value) &&
          option.value !== currentValue;
      });
    });
  }


  selects.forEach(select => {

    select.addEventListener(
      "change",
      refreshWordBoxOptions
    );
  });


  document
    .getElementById("wordboxSubmit")
    .addEventListener(
      "click",
      () => {
        handleWordBoxSubmit(set, selects);
      }
    );
}


function handleWordBoxSubmit(set, selects) {

  if (quizAnswered) {
    return;
  }

  const values =
    selects.map(select => select.value);

  if (values.some(value => !value)) {

    alert("모든 빈칸에 단어를 선택해주세요.");

    return;
  }


  quizAnswered =
    true;


  let correctCount = 0;

  selects.forEach((select, index) => {

    const answer =
      set.sentences[index].answer;

    const isCorrect =
      select.value === answer;

    select.disabled = true;

    select
      .closest(".wordbox-sentence")
      .classList.add(
        isCorrect ? "correct" : "wrong"
      );

    if (isCorrect) {

      correctCount++;

      if (shouldAwardPracticeXP()) {

        const wordBoxLegacyPrefix =
          `${currentSubject.id}:${currentWeek.slug}:wordbox:${answer}:`;

        awardRepeatableXP(
          `${currentSubject.id}:${currentWeek.slug}:wordbox:${set.id}:${answer}`,
          XP_REWARDS.wordBoxCorrect,
          key => key.startsWith(wordBoxLegacyPrefix)
        );
      }

    }

    else {

      bumpWrong(answer, "wordBox");
    }
  });


  // Word Box에 단어가 문장 수보다 많은 경우(Critical Reading의
  // 6 choices / 5 blanks 구조), 학생이 한 번도 선택하지 않은
  // 단어를 "사용하지 않는 단어"로 구분해서 보여준다.
  const usedWords =
    new Set(values);

  document
    .querySelectorAll(".word-box-chip")
    .forEach(chip => {

      const chipWord =
        decodeURIComponent(chip.dataset.word);

      chip.classList.add(
        usedWords.has(chipWord)
          ? "chip-used"
          : "chip-unused"
      );
    });


  document.getElementById(
    "wordboxSubmit"
  ).style.display = "none";

  quizScore += correctCount;


  const feedback =
    document.getElementById("quizFeedback");

  feedback.innerHTML = `

    <div class="wordbox-set-result">
      이번 세트 결과 · ${correctCount} / ${set.sentences.length}
    </div>

    <button
      class="quiz-next"
      id="quizNextButton"
    >
      ${
        quizIndex ===
        quizQuestions.length - 1
          ? "결과 보기"
          : "다음 세트 →"
      }
    </button>

  `;

  document.getElementById(
    "quizNextButton"
  ).addEventListener(
    "click",
    () => {

      quizIndex++;

      renderQuiz();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  );
}


// ========================================
// 문장 만들기 (SENTENCE WRITING)
// ========================================

function renderSentenceWriting(word) {

  document.getElementById(
    "quizContent"
  ).innerHTML = `

    <div class="quiz-progress">
      QUESTION
      ${quizIndex + 1}
      /
      ${quizQuestions.length}
    </div>


    <div class="quiz-card">

      <div class="quiz-type">
        단어를 사용해 완전한 영어 문장을 만들어보세요
      </div>


      <div class="sentence-writing-word">
        WORD · ${word.word}
      </div>

      <div class="sentence-writing-meaning">
        ${word.meaning}
        <br>
        ${word.definition}
      </div>


      <form
        id="sentenceForm"
        class="spelling-form"
        autocomplete="off"
      >

        <textarea
          id="sentenceInput"
          class="sentence-input"
          rows="3"
          placeholder="이 단어를 사용한 완전한 문장을 영어로 써보세요"
        ></textarea>

        <button
          type="submit"
          class="quiz-next"
          id="sentenceSubmit"
        >
          문장 확인
        </button>

      </form>


      <div id="quizFeedback">
      </div>

    </div>
  `;


  const sentenceForm =
    document.getElementById("sentenceForm");

  const sentenceInput =
    document.getElementById("sentenceInput");

  sentenceInput.focus();

  sentenceForm.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      checkSentenceInput(word, sentenceInput);
    }
  );
}


function escapeHtml(text) {

  const div =
    document.createElement("div");

  div.textContent = text;

  return div.innerHTML;
}


// highlightWord()는 book sentence처럼 활용형(예: lashed)까지
// 강조해야 하는 기존 화면에서 계속 쓰이므로 그대로 두고,
// 문장 만들기 전용으로 단어 경계(\b)를 지키는 강조 함수를 따로 둔다.

function highlightWordBoundary(sentence, word) {

  if (!sentence || !word) {
    return sentence;
  }

  const safeWord =
    word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const regex =
    new RegExp(`\\b(${safeWord})\\b`, "gi");

  return sentence.replace(
    regex,
    "<strong>$1</strong>"
  );
}


const MODEL_SENTENCE_BADGE_CLASS = {
  basic: "basic",
  school: "school",
  daily: "daily",
  cause: "cause",
  challenge: "challenge"
};


function checkSentenceInput(word, sentenceInput) {

  const raw =
    sentenceInput.value.trim();

  const wordCount =
    raw
      .split(/\s+/)
      .filter(Boolean).length;

  const feedback =
    document.getElementById("quizFeedback");


  if (!raw || wordCount < 3) {

    feedback.innerHTML = `
      <div class="sentence-guide-message">
        완전한 문장을 작성해보세요.
      </div>
    `;

    return;
  }


  const containsWord =
    new RegExp(
      `\\b${word.word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
      "i"
    ).test(raw);

  if (!containsWord) {

    feedback.innerHTML = `
      <div class="sentence-guide-message">
        문장에 <strong>${word.word}</strong>를 사용해주세요.
      </div>
    `;

    return;
  }


  sentenceInput.disabled = true;

  document.getElementById(
    "sentenceSubmit"
  ).style.display = "none";


  const modelSentences =
    word.modelSentences || [];

  const isLastWord =
    quizIndex ===
    quizQuestions.length - 1;


  feedback.innerHTML = `

    <div class="sentence-my-answer">

      <div class="explanation-label">
        내가 쓴 문장
      </div>

      <p>${highlightWordBoundary(
        escapeHtml(raw),
        word.word
      )}</p>

    </div>


    <div class="model-sentence-box">

      <div class="explanation-label">
        이렇게도 말할 수 있어요
      </div>

      <ol class="model-sentence-list">

        ${modelSentences.map((item, index) => `
          <li>

            <div class="model-sentence-head">

              <span class="model-sentence-index">
                ${String(index + 1).padStart(2, "0")}
              </span>

              <span class="model-badge ${MODEL_SENTENCE_BADGE_CLASS[item.type] || ""}">
                ${item.label}
              </span>

              <button
                type="button"
                class="model-sentence-speak"
                data-model-index="${index}"
                aria-label="문장 듣기"
              >
                🔊
              </button>

            </div>

            <p class="model-sentence-text">
              ${highlightWordBoundary(item.sentence, word.word)}
            </p>

          </li>
        `).join("")}

      </ol>

    </div>

    <div class="sentence-choice-buttons">

      <button
        class="sentence-choice-button retry"
        id="sentenceRetryButton"
      >
        다시 써보기
      </button>

      <button
        class="sentence-choice-button good"
        id="sentenceNextButton"
      >
        ${isLastWord ? "결과 보기" : "다음 단어 →"}
      </button>

    </div>

  `;

  document
    .querySelectorAll(".model-sentence-speak")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const index =
            Number(button.dataset.modelIndex);

          const target =
            modelSentences[index];

          if (target) {
            speakWord(target.sentence);
          }
        }
      );
    });

  document
    .getElementById("sentenceNextButton")
    .addEventListener(
      "click",
      () => advanceSentenceWriting(word)
    );

  document
    .getElementById("sentenceRetryButton")
    .addEventListener(
      "click",
      () => retrySentenceWriting(sentenceInput)
    );
}


function advanceSentenceWriting(word) {

  quizScore++;

  const entry =
    wrongWords[word.word];

  if (entry && typeof entry === "object") {
    entry.sentenceReview = false;
  }

  saveState();

  if (shouldAwardPracticeXP()) {

    awardRepeatableXP(
      `${currentSubject.id}:${currentWeek.slug}:sentence:${word.word}`,
      XP_REWARDS.sentenceComplete
    );
  }


  quizIndex++;

  renderQuiz();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function retrySentenceWriting(sentenceInput) {

  sentenceInput.disabled = false;

  const submitButton =
    document.getElementById("sentenceSubmit");

  if (submitButton) {
    submitButton.style.display = "";
  }

  const feedback =
    document.getElementById("quizFeedback");

  if (feedback) {
    feedback.innerHTML = "";
  }

  sentenceInput.focus();
}


// ========================================
// QUIZ ANSWER
// ========================================

function handleAnswer(
  selectedButton,
  selectedAnswer,
  correctAnswer,
  originalWord
) {

  if (quizAnswered) {
    return;
  }

  quizAnswered =
    true;


  const buttons =
    document.querySelectorAll(
      ".answer-button"
    );


  buttons.forEach(button => {

    const answer =
      decodeURIComponent(
        button.dataset.choice
      );

    if (
      answer ===
      correctAnswer
    ) {

      button.classList.add(
        "correct"
      );
    }
  });


  if (
    selectedAnswer ===
    correctAnswer
  ) {

    selectedButton.classList.add(
      "correct"
    );

    quizScore++;

  }

  else {

    selectedButton.classList.add(
      "wrong"
    );

    bumpWrong(
      originalWord,
      currentQuestionCategory
    );
  }


  const feedback =
    document.getElementById(
      "quizFeedback"
    );


  feedback.innerHTML = `

    <button
      class="quiz-next"
      id="quizNextButton"
    >
      ${
        quizIndex ===
        quizQuestions.length - 1
          ? "결과 보기"
          : "다음 문제 →"
      }
    </button>

  `;


  document.getElementById(
    "quizNextButton"
  ).addEventListener(
    "click",
    () => {

      quizIndex++;

      renderQuiz();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  );
}


// ========================================
// QUIZ RESULT
// ========================================

function renderQuizResult() {

  if (mockTestState) {

    handleMockTestItemComplete();

    return;
  }


  let message = "";

  const maxScore =
    quizMode === "wordbox"
      ? quizQuestions.length * 5
      : quizQuestions.length;

  const ratio =
    quizScore /
    maxScore;


  if (
    ratio >= 0.9
  ) {

    message =
      "🎉 아주 잘했어요! 거의 완벽해요.";

  }

  else if (
    ratio >= 0.7
  ) {

    message =
      "👍 잘했어요. 틀린 단어만 조금 더 복습해봐요.";

  }

  else {

    message =
      "📚 오답노트에서 어려운 단어를 다시 공부해봐요.";
  }


  document.getElementById(
    "quizContent"
  ).innerHTML = `

    <div class="result-card">

      <div class="screen-kicker">
        ${currentWeek ? currentWeek.title : ""} RESULT
      </div>

      <div class="result-score">
        ${quizScore}
        <span
          style="
            font-size:22px;
            color:#7c879b;
          "
        >
          /
          ${maxScore}
        </span>
      </div>

      <div class="result-message">
        ${message}
      </div>


      <button
        class="quiz-next"
        id="retryQuiz"
      >
        다시 풀기
      </button>


      <button
        class="quiz-next"
        id="resultReview"
        style="
          background:var(--primary-soft);
          color:var(--primary-dark);
        "
      >
        오답노트 보기
      </button>

    </div>
  `;


  document.getElementById(
    "retryQuiz"
  ).addEventListener(
    "click",
    () => {

      if (quizMode === "week") {
        startWeekTest();
      }

      else if (quizMode === "context") {
        startContextQuiz();
      }

      else if (quizMode === "prefix-practice") {
        startPrefixPractice();
      }

      else if (quizMode === "wordbox") {
        startWordBox();
      }

      else if (quizMode === "sentence-writing") {
        startSentenceWriting();
      }

      else if (quizMode === "retest") {
        startRetest();
      }

      else if (quizMode === "critical-reading-retest") {
        startRetest();
      }

      else if (quizMode === "context-passage") {
        startContextPassageQuiz();
      }

      else if (quizMode === "closest-meaning") {
        startClosestMeaningQuiz();
      }

      else {
        startQuiz(
          quizMode
        );
      }

    }
  );


  document.getElementById(
    "resultReview"
  ).addEventListener(
    "click",
    startReview
  );
}


// ========================================
// REVIEW
// ========================================

function startReview() {

  ensureWeekOpen();

  showScreen("reviewScreen");

  setActiveNav("review");

  renderReview();
}


function renderReview() {

  const reviewWords =
    words.filter(word =>
      needsReview(word.word)
    );


  if (
    reviewWords.length === 0
  ) {

    document.getElementById(
      "reviewContent"
    ).innerHTML = `

      <div class="empty-state">

        🎉
        <br><br>

        아직 복습할 단어가 없어요.

        <br>

        단어 학습에서
        <strong>모르겠어요</strong> 또는
        <strong>애매해요</strong>를 선택하거나

        <br>

        퀴즈를 틀리면
        여기에 자동으로 저장돼요.

      </div>

    `;

    return;
  }


  document.getElementById(
    "reviewContent"
  ).innerHTML =

    reviewWords
      .map(word => {

        const index =
          words.findIndex(
            item =>
              item.word ===
              word.word
          );


        const wrongCount =
          getTotalWrongCount(word.word);

        const wrongEntry =
          wrongWords[word.word];

        const needsSentenceReview =
          Boolean(
            wrongEntry &&
            typeof wrongEntry === "object" &&
            wrongEntry.sentenceReview
          );


        const rawStatus =
          learningState[word.word] || "none";


        let statusText =
          "미학습";


        if (
          rawStatus === "unknown"
        ) {

          statusText =
            "모르겠어요";

        }

        else if (
          rawStatus === "maybe"
        ) {

          statusText =
            "애매해요";

        }

        else if (
          rawStatus === "known"
        ) {

          statusText =
            "외웠어요";
        }


        return `

          <article class="review-item">

            <div>

              <div class="review-word">
                ${word.word}
              </div>

              <div class="review-meta">

                ${word.meaning}

                <br>

                틀림 ${wrongCount}회
                · ${statusText}
                ${needsSentenceReview ? "· 문장 다시 연습" : ""}

              </div>

            </div>


            <button
              class="review-button"
              data-learn-index="${index}"
            >
              공부하기
            </button>

          </article>

        `;

      })
      .join("");


  document
    .querySelectorAll(
      "[data-learn-index]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          startLearn(
            Number(
              button.dataset.learnIndex
            )
          );
        }
      );

    });
}


// ========================================
// PREFIX LESSON
// ========================================

function openPrefixLesson() {

  ensureWeekOpen();

  showScreen("prefixScreen");

  const lesson =
    currentWeek.data.prefixLesson;


  document.getElementById(
    "prefixContent"
  ).innerHTML = `

    <article class="prefix-box">

      <div class="prefix-title">
        ${lesson.prefix}
      </div>

      <div class="prefix-meaning">
        ${lesson.meaning}
      </div>

      ${lesson.examples.map(item => `

        <div class="prefix-example">

          <strong>
            ${item.word}
            ·
            ${item.partOfSpeech}
          </strong>

          <span>
            ${item.definition}
          </span>

        </div>

      `).join("")}

    </article>

  `;
}


// ========================================
// EVENT BINDING
// ========================================

function bindMainButtons() {

  document
    .querySelectorAll(
      "[data-action]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const action =
            button.dataset.action;


          switch (action) {

            case "learn":

              startLearn();

              break;


            case "flashcard":

              startFlashcard();

              break;


            case "meaning-quiz":

              startQuiz("meaning");

              break;


            case "word-quiz":

              startQuiz("word");

              break;


            case "synonym-quiz":

              startQuiz("synonym");

              break;


            case "spelling-quiz":

              startQuiz("spelling");

              break;


            case "wordbox":

              startWordBox();

              break;


            case "context-quiz":

              startContextQuiz();

              break;


            case "prefix-practice":

              startPrefixPractice();

              break;


            case "sentence-writing":

              startSentenceWriting();

              break;


            case "context-passage-quiz":

              startContextPassageQuiz();

              break;


            case "closest-meaning-quiz":

              startClosestMeaningQuiz();

              break;


            case "mock-test":

              startMockTest();

              break;


            case "retest":

              startRetest();

              break;


            case "review":

              startReview();

              break;


            case "week-test":

              startWeekTest();

              break;
          }

        }
      );

    });


  document
    .querySelectorAll(
      "[data-back]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const target =
            button.dataset.back;

          if (target === "week") {

            showWeekDetail();

          }

          else if (target === "weeks") {

            showWeekSelect();

          }

          else {

            goHome();
          }
        }
      );

    });


  const subjectSelectGrid =
    document.getElementById(
      "subjectSelectGrid"
    );

  if (subjectSelectGrid) {

    subjectSelectGrid.addEventListener(
      "click",
      event => {

        const card =
          event.target.closest(
            "[data-subject-id]"
          );

        if (!card) {
          return;
        }

        const subjectEntry =
          SUBJECTS.find(
            entry => entry.id === card.dataset.subjectId
          );

        if (subjectEntry) {
          openSubject(subjectEntry);
        }
      }
    );
  }


  const weekSelectGrid =
    document.getElementById(
      "weekSelectGrid"
    );

  if (weekSelectGrid) {

    weekSelectGrid.addEventListener(
      "click",
      event => {

        const card =
          event.target.closest(
            "[data-week-id]"
          );

        if (!card || !currentSubject) {
          return;
        }

        const weekId =
          Number(card.dataset.weekId);

        const weekEntry =
          currentSubject.weeks.find(
            entry => entry.id === weekId
          );

        if (weekEntry && weekEntry.data) {
          openWeek(weekEntry);
        }
      }
    );
  }


  document
    .querySelectorAll(
      "[data-nav]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const target =
            button.dataset.nav;


          if (
            target === "home"
          ) {

            goHome();

          }

          else if (
            target === "learn"
          ) {

            startLearn();

          }

          else if (
            target === "quiz"
          ) {

            startQuiz("meaning");

          }

          else if (
            target === "review"
          ) {

            startReview();

          }

          else if (
            target === "favorites"
          ) {

            showScreen("favoritesScreen");

            setActiveNav("favorites");

          }

          else if (
            target === "badges"
          ) {

            showScreen("badgesScreen");

            setActiveNav("badges");

            renderBadgeCollection();
          }

        }
      );

    });


  const prefixButton =
    document.getElementById(
      "prefixButton"
    );


  if (
    prefixButton
  ) {

    prefixButton.addEventListener(
      "click",
      openPrefixLesson
    );
  }
}


// ========================================
// PC HEADER CONTROLS
// (온라인/오프라인 상태, 기록 초기화)
// ========================================

function updateOnlineStatus() {

  const statusEl =
    document.getElementById("onlineStatus");

  if (!statusEl) {
    return;
  }

  const isOnline =
    navigator.onLine;

  statusEl.textContent =
    isOnline ? "🟢 온라인" : "🔴 오프라인";

  statusEl.classList.toggle(
    "offline",
    !isOnline
  );
}


function bindHeaderControls() {

  const resetButton =
    document.getElementById(
      "resetProgressButton"
    );

  if (resetButton) {

    resetButton.addEventListener(
      "click",
      () => {

        const confirmed =
          window.confirm(
            "정말 모든 과목의 학습 기록을 초기화할까요?\n이 작업은 되돌릴 수 없습니다."
          );

        if (!confirmed) {
          return;
        }

        Object.keys(localStorage)
          .filter(key =>
            key.startsWith("vocabMaster_") ||
            key.startsWith("vocabMaster:")
          )
          .forEach(key =>
            localStorage.removeItem(key)
          );

        location.reload();
      }
    );
  }

  updateOnlineStatus();

  window.addEventListener(
    "online",
    updateOnlineStatus
  );

  window.addEventListener(
    "offline",
    updateOnlineStatus
  );


  const badgeModalConfirm =
    document.getElementById("badgeModalConfirm");

  if (badgeModalConfirm) {

    badgeModalConfirm.addEventListener(
      "click",
      closeBadgeModal
    );
  }
}


// ========================================
// SERVICE WORKER
// 나중에 5단계에서 실제 PWA 연결
// ========================================

function registerServiceWorker() {

  if (
    "serviceWorker" in navigator
  ) {

    navigator.serviceWorker
      .register(
        "./service-worker.js"
      )
      .catch(error => {

        console.log(
          "Service Worker:",
          error
        );

      });
  }
}


let deferredInstallPrompt = null;


function isStandaloneMode() {

  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}


function updateInstallButton() {

  const button = document.getElementById("installAppButton");

  if (button) {
    button.hidden = isStandaloneMode() || !deferredInstallPrompt;
  }
}


function bindPWAInstall() {

  const button = document.getElementById("installAppButton");

  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    deferredInstallPrompt = event;
    updateInstallButton();
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    updateInstallButton();
  });

  const displayMode = window.matchMedia("(display-mode: standalone)");
  if (displayMode.addEventListener) {
    displayMode.addEventListener("change", updateInstallButton);
  }

  if (button) {
    button.addEventListener("click", async () => {
      if (!deferredInstallPrompt) return;
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
      updateInstallButton();
    });
  }

  updateInstallButton();
}


// ========================================
// APP START
// ========================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    migrateLegacyStorage();

    loadGlobalXPState();

    bindMainButtons();

    bindHeaderControls();

    renderSubjectSelect();

    updateXPDisplays();

    registerServiceWorker();

    bindPWAInstall();

    document.addEventListener(
      "keydown",
      handleSpellingEnterKey
    );

  }
);
