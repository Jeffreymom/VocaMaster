// ========================================
// SUBJECT REGISTRY
// ----------------------------------------
// 구조: SUBJECT → WEEK → LEARN/PRACTICE/TEST
//
// 새 WEEK를 추가하는 방법:
//   1) js/data/<subjectId>/weekNN.js 파일을 만들고
//      아래 패턴으로 데이터를 등록한다.
//
//        (function () {
//          const WEEK01 = { ... };
//          window.VOCAB_DATA = window.VOCAB_DATA || {};
//          window.VOCAB_DATA["<subjectId>"] =
//            window.VOCAB_DATA["<subjectId>"] || {};
//          window.VOCAB_DATA["<subjectId>"].weekNN = WEEK01;
//        })();
//
//      (IIFE로 감싸는 이유: 서로 다른 과목의 데이터 파일이
//       모두 같은 이름의 지역 변수(WEEK01 등)를 자유롭게
//       사용해도 전역 스코프에서 절대 충돌하지 않는다.)
//
//   2) index.html <head 스크립트 목록>에
//      <script src="./js/data/<subjectId>/weekNN.js"></script>
//      추가 (반드시 이 subjects.js보다 먼저 로드)
//
//   3) 아래 SUBJECTS 배열의 해당 subject.weeks에
//      { id, slug, title, subtitle, data } 항목 추가
//
// data 값이 없는(아직 만들어지지 않은) WEEK는 자동으로
// "준비 중" 카드로 표시된다.
// ========================================

function getWeekData(subjectId, weekSlug) {

  return (
    window.VOCAB_DATA &&
    window.VOCAB_DATA[subjectId] &&
    window.VOCAB_DATA[subjectId][weekSlug]
  ) || null;
}


const SUBJECTS = [

  {
    id: "vocabulary-workbook",
    title: "Vocabulary Workbook",
    subtitle: "Weekly Vocabulary Test",

    // 이 과목의 실전 시험/연습 유형.
    // app.js가 이 값을 보고 WEEK 상세 화면의
    // PRACTICE / TEST 메뉴 구성을 결정한다.
    testType: "vocabulary-workbook",

    weeks: [
      {
        id: 1,
        slug: "week01",
        title: "WEEK 01",
        subtitle: "Novel Words · Debate Words",
        data: getWeekData("vocabulary-workbook", "week01")
      },
      {
        id: 2,
        slug: "week02",
        title: "WEEK 02",
        subtitle: "Novel Words · Debate Words",
        data: getWeekData("vocabulary-workbook", "week02")
      },
      {
        id: 3,
        slug: "week03",
        title: "WEEK 03",
        subtitle: "Novel Words · Debate Words",
        data: getWeekData("vocabulary-workbook", "week03")
      },
      {
        id: 4,
        slug: "week04",
        title: "WEEK 04",
        subtitle: "Novel Words · Debate Words",
        data: getWeekData("vocabulary-workbook", "week04")
      },
      {
        id: 5,
        slug: "week05",
        title: "WEEK 05",
        subtitle: "Novel Words · Debate Words",
        data: getWeekData("vocabulary-workbook", "week05")
      },
      {
        id: 6,
        slug: "week06",
        title: "WEEK 06",
        subtitle: "Novel Words Review · Debate Words",
        data: getWeekData("vocabulary-workbook", "week06")
      },
      {
        id: 7,
        slug: "week07",
        title: "WEEK 07",
        subtitle: "Novel Words · Debate Words",
        data: getWeekData("vocabulary-workbook", "week07")
      },
      {
        id: 8,
        slug: "week08",
        title: "WEEK 08",
        subtitle: "Novel Words · Debate Words",
        data: getWeekData("vocabulary-workbook", "week08")
      },
      {
        id: 9,
        slug: "week09",
        title: "WEEK 09",
        subtitle: "Novel Words · Debate Words",
        data: getWeekData("vocabulary-workbook", "week09")
      },
      {
        id: 10,
        slug: "week10",
        title: "WEEK 10",
        subtitle: "Novel Words · Debate Words",
        data: getWeekData("vocabulary-workbook", "week10")
      }
    ]
  },

  {
    id: "critical-reading",
    title: "Critical Reading Vocabulary",
    subtitle: "Critical Reading Vocabulary Test",

    testType: "critical-reading",

    weeks: [
      {
        id: 1,
        slug: "week01",
        title: "WEEK 01",
        subtitle: "1–10 BRICKS INTENSIVE READING 2\n11–25 TOEFL MAP READING BASIC",
        data: getWeekData("critical-reading", "week01")
      },
      {
        id: 2,
        slug: "week02",
        title: "WEEK 02",
        subtitle: "1–10 BRICKS INTENSIVE READING 2\n11–25 TOEFL MAP READING BASIC",
        data: getWeekData("critical-reading", "week02")
      },
      {
        id: 3,
        slug: "week03",
        title: "WEEK 03",
        subtitle: "1–10 BRICKS INTENSIVE READING 2\n11–25 TOEFL MAP READING BASIC",
        data: getWeekData("critical-reading", "week03")
      }
    ]
  }
];
