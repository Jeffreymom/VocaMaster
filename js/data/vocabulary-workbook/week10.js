// ==============================
// VOCABULARY WORKBOOK - WEEK 10 DATA
// ----------------------------------------
// IIFE로 감싸서 WEEK01이라는 지역 변수명이 다른 과목/WEEK
// 데이터 파일과 충돌하지 않도록 한다. 외부에서는 항상
// window.VOCAB_DATA["vocabulary-workbook"].week10 으로 접근한다.
//
// 참고: NOVEL WORDS의 출처가 이번 주부터 단편소설
// "Miss Awful"(주인공 Roger, Miss Orville 등장)로 바뀐다.
// Mini Lesson도 WEEK07~09의 접두사(prefix) 대신
// 접미사(suffix) "-ly"로 바뀐다.
// ==============================

(function () {

const WEEK01 = {
  week: 10,
  title: "WEEK 10",
  totalWords: 15,

  prefixLesson: {
    prefix: "-ly",
    meaning: "in a way",
    examples: [
      {
        word: "frankly",
        partOfSpeech: "adv.",
        definition: "in a way that is honest and direct, yet possibly upsetting"
      },
      {
        word: "adamantly",
        partOfSpeech: "adv.",
        definition: "in a way that makes changing one's opinion or decision impossible"
      },
      {
        word: "enthusiastically",
        partOfSpeech: "adv.",
        definition: "in a way that shows an eagerness to be involved in an activity"
      },
      {
        word: "adequately",
        partOfSpeech: "adv.",
        definition: "in a way that is satisfactory for a particular purpose"
      },
      {
        word: "succinctly",
        partOfSpeech: "adv.",
        definition: "in a way that expresses ideas clearly and concisely"
      }
    ]
  },

  words: [
    {
      id: 1,
      word: "catastrophe",
      partOfSpeech: "noun",
      meaning: "참사, 재앙",
      synonym: "disaster",
      antonym: "blessing",
      definition: "a bad situation that causes great suffering or destruction",
      bookSentence:
        "Let the blind man who sold pencils outside the five-and-ten on Broadway be absent from his post, and Roger worried that catastrophe had overtaken him.",
      example:
        "The oil spill created a catastrophe that poisoned marine life for decades.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The flood was a terrible catastrophe."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our history class studied how the earthquake became one of the deadliest catastrophes of the century."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Forgetting my umbrella during a storm felt like a minor catastrophe at the time."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the dam had not been inspected in years, engineers warned that a catastrophe was only a matter of time."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the warning signs had been building for months, officials failed to act until the catastrophe had already destroyed half the town."
        }
      ]
    },

    {
      id: 2,
      word: "brownstone",
      partOfSpeech: "noun",
      meaning: "브라운 스톤(적갈색 사암)으로 지은 집",
      synonym: "",
      antonym: "",
      definition: "a city house with its front built of a red-brown stone",
      bookSentence:
        "When Mrs. Loomis, a neighbor of the Clarks in the Greenwich Village brownstone, had entered the hospital . . .",
      example:
        "The artist painted a picture of a New York City street lined with brownstones.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "They bought an old brownstone downtown."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our field trip included a walk past several historic brownstones near the park."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My aunt rents the top floor of a cozy brownstone in the city."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the neighborhood had become so popular, prices for a single brownstone doubled within a few years."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the brownstone's exterior looked untouched since the 1800s, the inside had been completely modernized by its new owners."
        }
      ]
    },

    {
      id: 3,
      word: "torpor",
      partOfSpeech: "noun",
      meaning: "무기력",
      synonym: "lethargy",
      antonym: "vitality",
      definition: "the state of not being active and having no energy or enthusiasm",
      bookSentence:
        "\"He did what?\" Roger's father was roused from his post-dinner torpor.",
      example:
        "After a long day of school and activities, I usually fall into a state of torpor and just want to relax.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The cat fell into a lazy torpor."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our biology teacher explained how some animals enter a state of torpor to save energy during winter."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "After the huge holiday meal, the whole family sank into a comfortable torpor on the couch."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the office was so overheated, employees found it hard to shake off their afternoon torpor."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the bear appeared to be in complete torpor throughout the coldest months, its body temperature and heart rate were carefully regulated the entire time."
        }
      ]
    },

    {
      id: 4,
      word: "atrocious",
      partOfSpeech: "adj.",
      meaning: "형편없는, 끔찍한",
      synonym: "terrible",
      antonym: "excellent",
      definition: "of very bad quality",
      bookSentence:
        "True, Roger's scholastic progress wasn't notable—his spelling, for example, remained atrocious.",
      example:
        "The TV show was certain to fail because of its atrocious acting and poor editing.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The weather was atrocious today."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "My handwriting was so atrocious that even I couldn't read my own notes."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "The service at that restaurant was atrocious, so we never went back."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the road conditions were atrocious after the storm, the bus route was canceled for the day."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although critics warned that the film's special effects were atrocious, curious fans still filled theaters on opening night."
        }
      ]
    },

    {
      id: 5,
      word: "zest",
      partOfSpeech: "noun",
      meaning: "열정, 열의",
      synonym: "zeal",
      antonym: "disinterest",
      definition: "enthusiasm and energy",
      bookSentence:
        "Roger attacked dessert with a lot more zest than he had shown the peas.",
      example:
        "The recording captures the excitement of the fans and the zest of the live concert performance.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "She approached life with zest."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our new teacher brought so much zest to the classroom that even grammar lessons felt exciting."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My grandmother still gardens with the same zest she had forty years ago."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the coach's enthusiasm was contagious, the whole team started practicing with renewed zest."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even after losing the championship for the third year in a row, the young players returned to practice with the same zest as always."
        }
      ]
    },

    {
      id: 6,
      word: "extensively",
      partOfSpeech: "adv.",
      meaning: "오래, 많이, 반복해서",
      synonym: "significantly",
      antonym: "modestly",
      definition: "in a way that covers a large area or has a great range",
      bookSentence:
        "Miss Gillis, the school secretary, was in charge of the bell, and she had to clang it extensively before the student body took notice.",
      example:
        "Our tour group explored the ancient ruins extensively during our visit to Rome.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The area was damaged extensively."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our teacher researched the topic extensively before writing the new curriculum."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "I traveled extensively through Southeast Asia before starting college."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the disease had spread so extensively, health officials declared a regional emergency."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the committee had reviewed the proposal extensively for months, several important details were still overlooked until the final vote."
        }
      ]
    },

    {
      id: 7,
      word: "compliance",
      partOfSpeech: "noun",
      meaning: "(법·명령 등의) 준수, (명령 등에) 따름",
      synonym: "obedience",
      antonym: "defiance",
      definition: "the act of doing everything that someone tells or wants one to do",
      bookSentence:
        "\"Class be seated, hands folded on desks,\" [the teacher] barked, and there was immediate compliance.",
      example:
        "Drivers must guarantee compliance with traffic laws to avoid accidents and fines.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The workers acted in full compliance."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our school requires strict compliance with the dress code during exams."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My dog shows perfect compliance whenever I hold up a treat."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the factory had ignored safety warnings for months, inspectors demanded immediate compliance with the new regulations."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the company promised full compliance with the new environmental standards, later reports revealed the changes were only partially implemented."
        }
      ]
    },

    {
      id: 8,
      word: "scrutiny",
      partOfSpeech: "noun",
      meaning: "조사, 정밀 조사",
      synonym: "investigation",
      antonym: "",
      definition: "the careful and detailed examination of something",
      bookSentence:
        "[Miss Orville] clasped her hands in front of her and trained her full scrutiny on the rows.",
      example:
        "Before publishing, editors review articles with close scrutiny to ensure accuracy.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The report faced heavy scrutiny."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our essays go through careful scrutiny before the teacher assigns a final grade."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "I checked the used car under close scrutiny before deciding to buy it."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the company's numbers seemed inconsistent, auditors placed the entire budget under intense scrutiny."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the politician's record had survived years of public scrutiny, one newly uncovered document suddenly changed the entire conversation."
        }
      ]
    },

    {
      id: 9,
      word: "congregate",
      partOfSpeech: "verb",
      meaning: "모이다",
      synonym: "gather",
      antonym: "disperse",
      definition: "to come together in a large group of people or animals",
      bookSentence:
        "[Mrs. Clark] had been chatting with the other mothers who congregated outside St. Geoffrey's at three every afternoon to pick up their offspring.",
      example:
        "Skiers congregated around the lodge's fireplace after a long day in the snow.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "Birds congregate near the lake."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Students often congregate by the main entrance before the first bell rings."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My neighbors congregate on the porch every evening to chat before dinner."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because free food was being handed out, a large crowd quickly congregated near the food truck."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the storm was clearly approaching, dozens of tourists still congregated on the beach to watch the dramatic sky."
        }
      ]
    },

    {
      id: 10,
      word: "outrage",
      partOfSpeech: "noun",
      meaning: "격분, 격노",
      synonym: "rage",
      antonym: "delight",
      definition: "an intense emotional state of displeasure with someone or something",
      bookSentence:
        "\". . . She's from 'Hansel and Gretel,' the same horrible eyes—and she steals toys. Yes,\" he repeated in mixed outrage and hurt . . .",
      example:
        "The community expressed outrage over the sudden school closure without prior notice.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The decision caused public outrage."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Students expressed outrage when the field trip was canceled without any explanation."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My little brother reacted with total outrage when he learned we had eaten his leftover pizza."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the company had hidden the safety issue for years, customers responded with widespread outrage once the news broke."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the mayor tried to calm residents' outrage with a public apology, the community continued demanding real changes to the policy."
        }
      ]
    },

    {
      id: 11,
      word: "trauma",
      partOfSpeech: "noun",
      meaning: "정신적 외상, 트라우마",
      synonym: "shock",
      antonym: "peace",
      definition: "severe and lasting emotional pain caused by an extremely upsetting experience",
      bookSentence:
        "We noted anxiety and moral injury in participants' trauma symptoms. In their discussions of COVID-19 related moral and ethical dilemmas . . .",
      example:
        "The childhood trauma of being bullied affected Jim's emotional stability even as an adult.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The accident left lasting trauma."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our psychology unit explained how childhood trauma can affect a person well into adulthood."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Even small reminders of the accident could bring back her trauma years later."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the soldiers had witnessed such horrific events, many returned home carrying deep trauma."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although therapy helped her manage the daily symptoms, the trauma from the disaster continued to resurface unexpectedly for years afterward."
        }
      ]
    },

    {
      id: 12,
      word: "manifest",
      partOfSpeech: "verb",
      meaning: "나타내다",
      synonym: "exhibit",
      antonym: "conceal",
      definition: "to show something clearly, through signs or actions",
      bookSentence:
        "These struggles seemed to manifest in their concerns for \"feelings of guilt regardless of choices,\" which they associated with moral injury . . .",
      example:
        "Symptoms of the disease began to manifest through unusual skin discoloration.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "Her nervousness began to manifest."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our science teacher explained how a vitamin deficiency can manifest as fatigue and weak bones."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My stress usually manifests as trouble sleeping the night before a big event."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the engine problem had gone unchecked, it eventually manifested as a complete breakdown on the highway."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the illness showed no symptoms for years, it finally began to manifest in ways doctors could no longer ignore."
        }
      ]
    },

    {
      id: 13,
      word: "regardless of",
      partOfSpeech: "phrase",
      meaning: "…에 상관없이",
      synonym: "nevertheless",
      antonym: "",
      definition: "without being influenced by any other events or conditions",
      bookSentence:
        "These struggles seemed to manifest in their concerns for \"feelings of guilt regardless of choices,\" which they associated with moral injury . . .",
      example:
        "Successful athletes practice daily regardless of weather conditions.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "We will go regardless of the weather."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our teacher grades every essay regardless of who wrote it, to keep things fair."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "I exercise every morning regardless of how tired I feel."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the deadline could not be moved, the team kept working regardless of the technical problems that kept appearing."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Regardless of how many times the experiment failed, the researchers remained convinced that their original theory was correct."
        }
      ]
    },

    {
      id: 14,
      word: "contempt",
      partOfSpeech: "noun",
      meaning: "경멸, 멸시",
      synonym: "disdain",
      antonym: "respect",
      definition: "a strong feeling of disliking and having no respect",
      bookSentence:
        "Some participants went so far as to present a contempt for the absence of policies as a potential moral and ethical issue . . .",
      example:
        "People showed contempt for the company after it shipped toys with dangerous defects.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "He looked at the plan with contempt."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "The debate judges warned students not to show contempt for opposing arguments."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My cat seems to treat every new toy with total contempt after the first five minutes."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the company had ignored customer complaints for years, the public eventually responded with open contempt."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although he tried to hide his true feelings during the meeting, his obvious contempt for the new policy was clear to everyone in the room."
        }
      ]
    },

    {
      id: 15,
      word: "address",
      partOfSpeech: "verb",
      meaning: "(문제·상황 등에 대해) 고심하다[다루다]",
      synonym: "tackle",
      antonym: "disregard",
      definition: "to give attention to or deal with a problem",
      bookSentence:
        ". . . the lack of systematic approaches to address issues that would save lives and reduce suffering was a direct breach of both personal and professional ethical duty.",
      example:
        "The police addressed rising crime by increasing nighttime patrols throughout the city.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The mayor promised to address the issue."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our principal held an assembly to address the recent bullying reports."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "I finally addressed the leaky faucet that had been dripping for weeks."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because complaints kept increasing, management was forced to address the scheduling problems immediately."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the company had ignored the safety concerns for years, new leadership finally addressed the issue after a serious incident made headlines."
        }
      ]
    }
  ],


  // ==============================
  // CONTEXT / SITUATIONAL QUESTIONS
  // 단어당 2개씩, 총 30개
  // ==============================

  contextQuestions: [

    {
      id: 1,
      relatedWord: "catastrophe",
      question: "Which situation is an example of a catastrophe?",
      choices: [
        "A light rain shower on a Tuesday afternoon.",
        "A massive earthquake that destroys an entire city.",
        "A minor typo in a school newsletter.",
        "A short delay on the morning bus."
      ],
      answer: 1,
      explanation: "catastrophe(참사, 재앙)는 큰 고통이나 파괴를 초래하는 심각한 상황을 뜻합니다."
    },
    {
      id: 2,
      relatedWord: "catastrophe",
      question: "If engineers warned that ignoring the cracks in the dam could lead to a catastrophe, they meant the cracks could cause...",
      choices: [
        "a minor, unnoticeable inconvenience.",
        "a disaster with widespread destruction.",
        "an improvement in the dam's appearance.",
        "absolutely no consequences at all."
      ],
      answer: 1,
      explanation: "catastrophe는 광범위한 파괴를 초래하는 심각한 재난을 뜻합니다."
    },

    {
      id: 3,
      relatedWord: "brownstone",
      question: "Which situation describes a brownstone?",
      choices: [
        "A glass skyscraper in a business district.",
        "A city house with a front built of red-brown stone.",
        "A wooden cabin deep in the forest.",
        "A modern house made entirely of steel and glass."
      ],
      answer: 1,
      explanation: "brownstone(브라운 스톤으로 지은 집)은 적갈색 사암으로 앞면을 지은 도시 주택을 뜻합니다."
    },
    {
      id: 4,
      relatedWord: "brownstone",
      question: "A historic neighborhood known for its brownstones would most likely feature...",
      choices: [
        "rows of houses built from red-brown stone.",
        "only glass office towers.",
        "farmland with no buildings at all.",
        "identical prefabricated trailers."
      ],
      answer: 1,
      explanation: "brownstone은 적갈색 사암으로 지어진 도시 주택 양식을 뜻합니다."
    },

    {
      id: 5,
      relatedWord: "torpor",
      question: "Which situation shows torpor?",
      choices: [
        "A dog sprinting energetically around the yard.",
        "A snake lying motionless and sluggish through the cold winter months.",
        "A crowd cheering loudly at a concert.",
        "A child jumping excitedly at a birthday party."
      ],
      answer: 1,
      explanation: "torpor(무기력)는 활동적이지 않고 에너지나 의욕이 없는 상태를 뜻합니다."
    },
    {
      id: 6,
      relatedWord: "torpor",
      question: "After a huge holiday meal, feeling too sluggish to move from the couch is an example of...",
      choices: [
        "tremendous energy and enthusiasm.",
        "a state of torpor.",
        "intense physical activity.",
        "careful, focused attention."
      ],
      answer: 1,
      explanation: "torpor는 활력이 없고 나른한 상태를 뜻합니다."
    },

    {
      id: 7,
      relatedWord: "atrocious",
      question: "Which situation describes something atrocious?",
      choices: [
        "A beautifully written essay with no errors.",
        "Handwriting so messy that no one can read a single word.",
        "A perfectly cooked, delicious meal.",
        "A flawless musical performance."
      ],
      answer: 1,
      explanation: "atrocious(형편없는, 끔찍한)는 품질이 매우 나쁜 것을 뜻합니다."
    },
    {
      id: 8,
      relatedWord: "atrocious",
      question: "If a movie received atrocious reviews, that most likely means critics thought the movie was...",
      choices: [
        "one of the greatest films ever made.",
        "extremely poor in quality.",
        "only slightly below average.",
        "perfectly average and forgettable."
      ],
      answer: 1,
      explanation: "atrocious는 매우 나쁜 품질을 뜻하므로, 혹평을 받았다는 의미입니다."
    },

    {
      id: 9,
      relatedWord: "zest",
      question: "Which situation shows someone acting with zest?",
      choices: [
        "Dragging your feet reluctantly through a boring chore.",
        "Diving into a new hobby with excitement and energy.",
        "Refusing to participate in any activity at all.",
        "Sitting quietly with no interest in anything."
      ],
      answer: 1,
      explanation: "zest(열정, 열의)는 열의와 에너지를 뜻합니다."
    },
    {
      id: 10,
      relatedWord: "zest",
      question: "A chef who cooks with real zest would most likely...",
      choices: [
        "seem bored and indifferent in the kitchen.",
        "show genuine excitement and energy while preparing each dish.",
        "refuse to try any new recipes.",
        "complain constantly about cooking."
      ],
      answer: 1,
      explanation: "zest는 열정과 에너지를 갖고 임하는 태도를 뜻합니다."
    },

    {
      id: 11,
      relatedWord: "extensively",
      question: "Which situation shows something done extensively?",
      choices: [
        "A quick, five-minute glance at a topic.",
        "Months of thorough research covering every possible detail.",
        "Ignoring a subject completely.",
        "A brief, one-sentence summary."
      ],
      answer: 1,
      explanation: "extensively(오래, 많이, 반복해서)는 넓은 범위를 다루거나 폭넓게 이루어지는 것을 뜻합니다."
    },
    {
      id: 12,
      relatedWord: "extensively",
      question: "If a region was extensively damaged by the storm, that means the damage was...",
      choices: [
        "limited to a single small building.",
        "widespread, covering a large area.",
        "completely nonexistent.",
        "barely noticeable."
      ],
      answer: 1,
      explanation: "extensively는 넓은 범위에 걸쳐 있다는 뜻이므로, 광범위한 피해를 나타냅니다."
    },

    {
      id: 13,
      relatedWord: "compliance",
      question: "Which situation shows compliance?",
      choices: [
        "Ignoring every instruction given by a teacher.",
        "Immediately following the rules exactly as requested.",
        "Arguing loudly against every request.",
        "Refusing to cooperate with any guidelines."
      ],
      answer: 1,
      explanation: "compliance((법·명령 등의) 준수, 따름)는 누군가의 요구나 지시를 그대로 따르는 것을 뜻합니다."
    },
    {
      id: 14,
      relatedWord: "compliance",
      question: "A factory found to be in full compliance with safety regulations would most likely...",
      choices: [
        "be shut down immediately for violations.",
        "pass its safety inspection without any issues.",
        "be fined for breaking multiple rules.",
        "be ignoring most of the required regulations."
      ],
      answer: 1,
      explanation: "compliance는 규정을 온전히 따르고 있는 상태를 뜻합니다."
    },

    {
      id: 15,
      relatedWord: "scrutiny",
      question: "Which situation shows something under scrutiny?",
      choices: [
        "A document skimmed carelessly in a few seconds.",
        "A contract examined line by line for hidden errors.",
        "A report thrown away without being read.",
        "A file ignored completely."
      ],
      answer: 1,
      explanation: "scrutiny(조사, 정밀 조사)는 무언가를 꼼꼼하고 자세하게 살펴보는 것을 뜻합니다."
    },
    {
      id: 16,
      relatedWord: "scrutiny",
      question: "If a company's financial records came under intense scrutiny, that most likely means auditors...",
      choices: [
        "ignored the records completely.",
        "examined every detail of the records very carefully.",
        "approved the records without reading them.",
        "lost the records entirely."
      ],
      answer: 1,
      explanation: "scrutiny는 세심하고 철저한 검토를 뜻합니다."
    },

    {
      id: 17,
      relatedWord: "congregate",
      question: "Which situation is an example of congregating?",
      choices: [
        "A single person walking alone down an empty street.",
        "Hundreds of birds gathering together on the same wire.",
        "One student sitting by himself in an empty classroom.",
        "A lone hiker exploring a quiet trail."
      ],
      answer: 1,
      explanation: "congregate(모이다)는 사람이나 동물이 큰 무리를 지어 모이는 것을 뜻합니다."
    },
    {
      id: 18,
      relatedWord: "congregate",
      question: "If parents congregate outside the school every afternoon, that means they...",
      choices: [
        "never gather in one place at all.",
        "come together as a group near the school regularly.",
        "avoid the school entirely.",
        "are scattered across different cities."
      ],
      answer: 1,
      explanation: "congregate는 한곳에 함께 모이는 것을 뜻합니다."
    },

    {
      id: 19,
      relatedWord: "outrage",
      question: "Which situation shows outrage?",
      choices: [
        "Calmly nodding in agreement with a decision.",
        "Angrily protesting an unfair decision with intense frustration.",
        "Feeling completely indifferent about an announcement.",
        "Smiling peacefully at good news."
      ],
      answer: 1,
      explanation: "outrage(격분, 격노)는 매우 불쾌하고 화가 난 강렬한 감정 상태를 뜻합니다."
    },
    {
      id: 20,
      relatedWord: "outrage",
      question: "If the community reacted with outrage to a sudden policy change, that means residents were...",
      choices: [
        "completely unaffected by the news.",
        "intensely angry and upset about the decision.",
        "thrilled and delighted by the change.",
        "unaware that anything had changed."
      ],
      answer: 1,
      explanation: "outrage는 격렬한 분노와 불쾌감을 나타냅니다."
    },

    {
      id: 21,
      relatedWord: "trauma",
      question: "Which situation could most likely cause trauma?",
      choices: [
        "Enjoying a relaxing weekend at home.",
        "Surviving a severe car accident that involved a close call with death.",
        "Eating a delicious meal with family.",
        "Taking a peaceful walk in the park."
      ],
      answer: 1,
      explanation: "trauma(정신적 외상, 트라우마)는 매우 충격적인 경험으로 인한 심각하고 지속적인 정서적 고통을 뜻합니다."
    },
    {
      id: 22,
      relatedWord: "trauma",
      question: "A therapist helping a patient process childhood trauma would most likely focus on...",
      choices: [
        "ignoring the patient's past experiences completely.",
        "addressing the lasting emotional effects of the difficult experience.",
        "pretending the traumatic event never happened.",
        "avoiding any discussion of feelings."
      ],
      answer: 1,
      explanation: "trauma는 지속적인 정서적 영향을 미치므로, 이를 다루는 것이 치료의 핵심입니다."
    },

    {
      id: 23,
      relatedWord: "manifest",
      question: "Which situation shows something manifesting?",
      choices: [
        "A hidden feeling that never shows in any way.",
        "Stress showing up clearly as trouble sleeping and irritability.",
        "An emotion that has no visible effect at all.",
        "A symptom that is permanently invisible."
      ],
      answer: 1,
      explanation: "manifest(나타내다)는 신호나 행동을 통해 무언가를 분명하게 보여주는 것을 뜻합니다."
    },
    {
      id: 24,
      relatedWord: "manifest",
      question: "If a vitamin deficiency manifests as fatigue, that means the fatigue is...",
      choices: [
        "completely unrelated to the deficiency.",
        "a visible sign or symptom caused by the deficiency.",
        "impossible to notice or detect.",
        "the exact opposite of the deficiency's effects."
      ],
      answer: 1,
      explanation: "manifest는 원인이 되는 어떤 상태가 눈에 보이는 형태로 드러나는 것을 뜻합니다."
    },

    {
      id: 25,
      relatedWord: "regardless of",
      question: "Which sentence correctly uses the phrase regardless of?",
      choices: [
        "Regardless of the weather, the outdoor concert will continue as planned.",
        "Regardless the weather, the concert will continue.",
        "The concert will continue, regardless of because of the weather.",
        "Regardless of that the weather is bad, the concert continues."
      ],
      answer: 0,
      explanation: "regardless of(…에 상관없이)는 뒤에 명사(구)가 오는 표현입니다."
    },
    {
      id: 26,
      relatedWord: "regardless of",
      question: "If a rule applies to everyone regardless of age, that means the rule...",
      choices: [
        "only applies to certain age groups.",
        "applies to everyone no matter how old they are.",
        "changes completely depending on someone's age.",
        "only applies to adults."
      ],
      answer: 1,
      explanation: "regardless of는 다른 조건에 영향받지 않는다는 것을 나타냅니다."
    },

    {
      id: 27,
      relatedWord: "contempt",
      question: "Which situation shows contempt?",
      choices: [
        "Speaking respectfully about someone's hard work.",
        "Rolling your eyes and sneering at someone's opinion.",
        "Complimenting someone's achievements sincerely.",
        "Listening carefully and responding politely."
      ],
      answer: 1,
      explanation: "contempt(경멸, 멸시)는 강한 싫음과 존중하지 않는 감정을 뜻합니다."
    },
    {
      id: 28,
      relatedWord: "contempt",
      question: "If a judge held a witness in contempt of court, that means the witness...",
      choices: [
        "showed great respect for the court's rules.",
        "behaved in a disrespectful way toward the court.",
        "was praised for excellent behavior.",
        "followed every courtroom procedure perfectly."
      ],
      answer: 1,
      explanation: "contempt는 존중이 결여된 태도를 뜻합니다."
    },

    {
      id: 29,
      relatedWord: "address",
      question: "Which situation is an example of addressing a problem?",
      choices: [
        "Ignoring a leaking pipe for months.",
        "Calling a plumber right away to fix the leaking pipe.",
        "Pretending the leak doesn't exist.",
        "Avoiding the room with the leak entirely."
      ],
      answer: 1,
      explanation: "address((문제·상황 등에 대해) 고심하다[다루다])는 문제에 관심을 기울이고 처리하는 것을 뜻합니다."
    },
    {
      id: 30,
      relatedWord: "address",
      question: "A principal who addresses bullying reports would most likely...",
      choices: [
        "ignore every report completely.",
        "investigate the reports and take appropriate action.",
        "punish the reporting students instead.",
        "pretend bullying never happens at the school."
      ],
      answer: 1,
      explanation: "address는 문제를 진지하게 다루고 대응한다는 뜻입니다."
    }
  ],


  // ==============================
  // WORD BOX SETS
  // Set 1: DEBATE WORDS, Set 2~3: NOVEL WORDS
  // (WEEK01~09와 동일한 방식으로 그룹 구성)
  // ==============================

  wordBoxSets: [

    {
      id: 1,
      words: [
        "trauma",
        "manifest",
        "regardless of",
        "contempt",
        "address"
      ],
      sentences: [
        { text: "Years after the accident, she still carried the emotional ___ of that single terrifying night.", answer: "trauma" },
        { text: "Anxiety can sometimes ___ as physical symptoms like a racing heart or an upset stomach.", answer: "manifest" },
        { text: "The rescue team searches for missing hikers ___ how dangerous the weather conditions are.", answer: "regardless of" },
        { text: "The way he rolled his eyes during her presentation showed obvious ___ for her ideas.", answer: "contempt" },
        { text: "The city council promised to ___ the growing housing shortage before the next election.", answer: "address" }
      ]
    },

    {
      id: 2,
      words: [
        "catastrophe",
        "brownstone",
        "torpor",
        "atrocious",
        "zest"
      ],
      sentences: [
        { text: "If the levee breaks during the flood, engineers warn it could trigger a full-scale ___.", answer: "catastrophe" },
        { text: "The renovated ___ on the corner sold for nearly triple its original price.", answer: "brownstone" },
        { text: "After the enormous Thanksgiving dinner, the whole family sank into a comfortable ___ on the couch.", answer: "torpor" },
        { text: "Critics called the film's dialogue absolutely ___, even though the visuals were stunning.", answer: "atrocious" },
        { text: "My grandfather still tackles crossword puzzles with the same ___ he had as a young man.", answer: "zest" }
      ]
    },

    {
      id: 3,
      words: [
        "extensively",
        "compliance",
        "scrutiny",
        "congregate",
        "outrage"
      ],
      sentences: [
        { text: "Before launching the product, the team tested it ___ across dozens of different devices.", answer: "extensively" },
        { text: "The new employee handbook was written to ensure full ___ with workplace safety laws.", answer: "compliance" },
        { text: "Every entry in the science fair was placed under close ___ by a panel of judges.", answer: "scrutiny" },
        { text: "Local fishermen ___ near the docks every morning before heading out to sea.", answer: "congregate" },
        { text: "News of the unfair ruling sparked immediate ___ across social media.", answer: "outrage" }
      ]
    }
  ],


  // ==============================
  // PREFIX PRACTICE
  // MINI LESSON(접미사 -ly, "in a way") 관련 4지선다 훈련
  // 문항 4/6는 교재에 실제로 나온 확인 문제를 그대로 활용
  // ==============================

  prefixPractice: [

    {
      id: 1,
      relatedWord: "-ly",
      question: "What does the suffix -ly mean in words like frankly and succinctly?",
      choices: [
        "in a way",
        "before",
        "without",
        "against"
      ],
      answer: 0,
      explanation: "-ly는 'in a way(~한 방식으로)'라는 뜻을 더하는 접미사입니다. 예: frankly(솔직하게)."
    },

    {
      id: 2,
      relatedWord: "frankly",
      question: "If someone speaks frankly about a difficult topic, they are most likely...",
      choices: [
        "avoiding the subject entirely.",
        "being honest and direct, even if it might be a little upsetting.",
        "lying to make the listener feel better.",
        "refusing to share any opinion at all."
      ],
      answer: 1,
      explanation: "frankly는 '솔직하고 직접적인 방식으로'라는 뜻입니다. frank(솔직한) + -ly(in a way)."
    },

    {
      id: 3,
      relatedWord: "adamantly",
      question: "If a witness adamantly denied the accusation, that means the witness...",
      choices: [
        "was easily convinced to change the story.",
        "refused to change their position no matter what.",
        "agreed with the accusation immediately.",
        "had no opinion on the matter at all."
      ],
      answer: 1,
      explanation: "adamantly는 '의견이나 결정을 바꾸는 것이 불가능할 정도로 완강하게'라는 뜻입니다."
    },

    {
      id: 4,
      relatedWord: "enthusiastically",
      question: "Which of the following MOST LIKELY shows someone acting enthusiastically?",
      choices: [
        "A child plays with a new toy in a manner that shows eagerness.",
        "A traveler studies a train map in a manner that shows confusion.",
        "A student complains about an assignment in a manner that shows frustration.",
        "A shopper walks through a clothing store in a manner that shows disinterest."
      ],
      answer: 0,
      explanation: "enthusiastically는 '어떤 활동에 참여하고 싶어 하는 열의를 보이며'라는 뜻입니다. 새 장난감에 신나 하는 아이의 모습이 좋은 예입니다."
    },

    {
      id: 5,
      relatedWord: "adequately",
      question: "If a report adequately explains the results, that means the explanation is...",
      choices: [
        "completely missing from the report.",
        "satisfactory and sufficient for its purpose.",
        "far too confusing to understand.",
        "written in a language nobody can read."
      ],
      answer: 1,
      explanation: "adequately는 '특정 목적에 충분히 만족스러운 방식으로'라는 뜻입니다."
    },

    {
      id: 6,
      relatedWord: "succinctly",
      question: "If you act succinctly, that means you . . .",
      choices: [
        "accept an offer in a manner that shows gratitude",
        "answer a question in a manner that shows annoyance",
        "express an idea in a manner that shows conciseness",
        "offer help in a manner that shows kindness"
      ],
      answer: 2,
      explanation: "succinctly는 '명확하고 간결하게 생각을 표현하는 방식으로'라는 뜻입니다."
    }
  ],


  // ==============================
  // MOCK TEST 구성
  // WEEK01~09와 동일한 섹션 배점 구조
  // ==============================

  mockTest: {
    totalPoints: 24,
    passingScore: 60,
    sections: [
      {
        id: "A",
        label: "Listen & Spell",
        type: "spelling",
        count: 4,
        pointsEach: 0.5
      },
      {
        id: "B",
        label: "Word Box",
        type: "wordbox",
        count: 5,
        pointsEach: 1
      },
      {
        id: "C",
        label: "Multiple Choice",
        type: "context",
        count: 5,
        pointsEach: 1
      },
      {
        id: "D",
        label: "Prefix & Writing",
        type: "prefix-writing",
        count: 4,
        pointsEach: 3
      }
    ]
  }
};


window.VOCAB_DATA = window.VOCAB_DATA || {};

window.VOCAB_DATA["vocabulary-workbook"] =
  window.VOCAB_DATA["vocabulary-workbook"] || {};

window.VOCAB_DATA["vocabulary-workbook"].week10 = WEEK01;

})();
