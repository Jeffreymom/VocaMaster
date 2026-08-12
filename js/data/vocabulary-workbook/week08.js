// ==============================
// VOCABULARY WORKBOOK - WEEK 08 DATA
// ----------------------------------------
// IIFE로 감싸서 WEEK01이라는 지역 변수명이 다른 과목/WEEK
// 데이터 파일과 충돌하지 않도록 한다. 외부에서는 항상
// window.VOCAB_DATA["vocabulary-workbook"].week08 로 접근한다.
//
// 참고: NOVEL WORDS는 WEEK07에 이어 계속
// Nathaniel Hawthorne의 "Tanglewood Tales" 중
// "The Gorgon's Head"(Perseus 신화)에서 발췌했다.
// Mini Lesson도 계속 접두사(prefix) "per-"이다.
// ==============================

(function () {

const WEEK01 = {
  week: 8,
  title: "WEEK 08",
  totalWords: 15,

  prefixLesson: {
    prefix: "per-",
    meaning: "thoroughly",
    examples: [
      {
        word: "perceptible",
        partOfSpeech: "adj.",
        definition: "capable of being thoroughly sensed or noticed"
      },
      {
        word: "perplex",
        partOfSpeech: "verb",
        definition: "to confuse someone thoroughly by being difficult to understand"
      },
      {
        word: "permeate",
        partOfSpeech: "verb",
        definition: "to thoroughly spread through something and be present in every part of it"
      },
      {
        word: "perpetual",
        partOfSpeech: "adj.",
        definition: "thoroughly lasting; continuing forever in the same way"
      },
      {
        word: "persevere",
        partOfSpeech: "verb",
        definition: "to thoroughly work on something until it is accomplished"
      }
    ]
  },

  words: [
    {
      id: 1,
      word: "disconsolate",
      partOfSpeech: "adj.",
      meaning: "암담한",
      synonym: "miserable",
      antonym: "blissful",
      definition: "extremely sad and disappointed; depressed",
      bookSentence:
        "So disconsolate did these thoughts make him, that Perseus could not bear to tell his mother what he had undertaken to do.",
      example:
        "Ryan was utterly disconsolate for weeks after his best friend moved to a different country.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "She felt disconsolate after the loss."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "The team looked disconsolate in the locker room after missing the championship by one point."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My little cousin was disconsolate when her ice cream fell off the cone."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the flight had been canceled twice, the stranded travelers grew increasingly disconsolate."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although friends tried everything to cheer him up, he remained disconsolate for weeks after the family dog passed away."
        }
      ]
    },

    {
      id: 2,
      word: "gymnastic",
      partOfSpeech: "adj.",
      meaning: "체조의, 체육(상)의",
      synonym: "athletic",
      antonym: "",
      definition: "of or relating to physical exercises designed to develop strength and coordination",
      bookSentence:
        "[The stranger] was exceedingly light and active in his figure, like a person much accustomed to gymnastic exercises . . .",
      example:
        "Helena sustained an injury during her gymnastic routine which ended her career.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "She joined the gymnastic team."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our PE class practiced basic gymnastic moves like cartwheels and forward rolls."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My little sister does gymnastic stretches every morning before breakfast."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the coach wanted stronger core muscles, the swimmers added gymnastic exercises to their training."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although she had never taken a formal class, her natural gymnastic ability allowed her to master the routine within a single week."
        }
      ]
    },

    {
      id: 3,
      word: "briskly",
      partOfSpeech: "adv.",
      meaning: "활발하게, 씩씩하게",
      synonym: "swiftly",
      antonym: "sluggishly",
      definition: "in a quick, energetic way",
      bookSentence:
        "So Perseus wiped his eyes, and answered the stranger pretty briskly, putting on as brave a look as he could.",
      example:
        "The dogs ran briskly to the large field after being indoors for three days straight.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "He walked briskly to catch the bus."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Students moved briskly between classes once the five-minute warning bell rang."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "We walked briskly through the park to beat the incoming rain."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the meeting was starting in two minutes, everyone briskly filed into the conference room."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the wind was freezing, the hikers moved briskly along the trail to reach the shelter before nightfall."
        }
      ]
    },

    {
      id: 4,
      word: "crumble",
      partOfSpeech: "verb",
      meaning: "바스러지다, 바스러뜨리다",
      synonym: "disintegrate",
      antonym: "strengthen",
      definition: "to break into small pieces",
      bookSentence:
        "\"You would make a very handsome marble statue, it is true, and it would be a considerable number of centuries before you crumbled away . . . \"",
      example:
        "The old cookie began to crumble in my hand before I could take a bite.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The wall began to crumble."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our geology teacher showed us how certain rocks crumble easily when exposed to water."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "The stale bread crumbled the moment I tried to slice it."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because termites had eaten through the wood for years, the old porch finally crumbled under the weight of a single step."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the ancient statue looked solid from a distance, its surface had begun to crumble away after centuries of exposure to wind and rain."
        }
      ]
    },

    {
      id: 5,
      word: "sagacity",
      partOfSpeech: "noun",
      meaning: "현명, 총명",
      synonym: "wisdom",
      antonym: "foolishness",
      definition: "the quality of having or showing understanding and the ability to make good judgments",
      bookSentence:
        "Perseus, by this time, felt so much confidence in his companion's sagacity, that he made no more objections . . .",
      example:
        "Leah showed remarkable sagacity in recognizing the danger of the situation at first glance.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "Her sagacity impressed the council."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our teacher praised the student's sagacity for spotting the flaw in the experiment before anyone else."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My grandmother's sagacity has helped our family through more than one difficult decision."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because he had guided the company through several crises, employees trusted the CEO's sagacity completely."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although she had no formal training in finance, the retired teacher's sagacity allowed her to spot the investment scam immediately."
        }
      ]
    },

    {
      id: 6,
      word: "perceive",
      partOfSpeech: "verb",
      meaning: "감지[인지]하다",
      synonym: "observe",
      antonym: "overlook",
      definition: "to thoroughly notice or become aware of something through the senses",
      bookSentence:
        ". . . [Perseus] seemed to see wings on the side of [Quicksilver's] head; although if he turned a full gaze, there were no such things to be perceived, but only an odd kind of cap.",
      example:
        "Despite the dim lighting, I could perceive a small creature moving through the shadows.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "I could perceive a faint smell of smoke."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our science teacher explained how bats perceive their surroundings through echolocation instead of sight."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "I could barely perceive the outline of the mountains through the thick fog."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the room was so dimly lit, we could only perceive shadows moving near the doorway."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the forgery looked flawless to most visitors, the museum curator immediately perceived several tiny inconsistencies in the brushwork."
        }
      ]
    },

    {
      id: 7,
      word: "dwell",
      partOfSpeech: "verb",
      meaning: "(…에) 살다[거주하다]",
      synonym: "inhabit",
      antonym: "",
      definition: "to live as a resident",
      bookSentence:
        ". . . [a place] so silent and solitary that nobody seemed ever to have dwelt or journeyed there.",
      example:
        "Few people dwell in that remote mountain village.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "Few animals dwell in this desert."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our unit on ancient civilizations explained where early humans chose to dwell near rivers and lakes."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My grandparents have dwelt in the same house for over fifty years."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the soil was so fertile nearby, entire farming communities began to dwell along the riverbanks."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the ruins looked abandoned to most visitors, archaeologists discovered evidence that people had once dwelt there for centuries."
        }
      ]
    },

    {
      id: 8,
      word: "obscure",
      partOfSpeech: "adj.",
      meaning: "어두운, 잘 보이지 않는",
      synonym: "darkened",
      antonym: "illuminated",
      definition: "being without light or without much light",
      bookSentence:
        "All was waste and desolate, in the gray twilight, which grew every moment more obscure.",
      example:
        "The path became obscure as the evening grew darker.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The room grew obscure at dusk."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "During the eclipse, the sky became strangely obscure in the middle of the afternoon."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "The hallway light was broken, so the stairs stayed obscure all evening."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because thick clouds rolled in suddenly, the entire valley became obscure within minutes."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the cave entrance had looked obscure and uninviting, the explorers pressed forward with their flashlights raised."
        }
      ]
    },

    {
      id: 9,
      word: "dispute",
      partOfSpeech: "noun",
      meaning: "분쟁, 논쟁",
      synonym: "argument",
      antonym: "agreement",
      definition: "an often noisy or angry expression of differing opinions",
      bookSentence:
        "To end the dispute, old Dame Scarecrow took the eye out of her forehead, and held it forth in her hand.",
      example:
        "During the class project, there was a dispute about who should be the group leader.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "A dispute broke out over the last seat."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "The two debate teams got into a heated dispute over the judge's scoring."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My roommates had a small dispute about whose turn it was to do the dishes."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the property line had never been clearly marked, the neighbors ended up in a lengthy dispute."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the dispute between the two companies lasted nearly three years, both sides eventually reached a settlement that satisfied everyone involved."
        }
      ]
    },

    {
      id: 10,
      word: "cultivate",
      partOfSpeech: "verb",
      meaning: "양성하다",
      synonym: "nurture",
      antonym: "discourage",
      definition: "to help something grow or develop",
      bookSentence:
        "I would advise all people . . . who chance to have but one eye amongst them, to cultivate forbearance, and not all insist upon peeping through it at once.",
      example:
        "It is important to cultivate good study habits through trial and error in order to succeed in school.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "Farmers cultivate rice in the valley."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our teacher encourages us to cultivate good habits like reading a little every day."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My mom has cultivated a small herb garden on our balcony for years."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the soil had been neglected for so long, it took several seasons to cultivate a healthy crop again."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the coach initially doubted the rookie's talent, years of patient training helped cultivate him into one of the team's strongest players."
        }
      ]
    },

    {
      id: 11,
      word: "precisely",
      partOfSpeech: "adv.",
      meaning: "정확히, 정확하게",
      synonym: "accurately",
      antonym: "imprecisely",
      definition: "exactly",
      bookSentence:
        "It is difficult to say precisely how much good a person may bring.",
      example:
        "The musician played the difficult notes precisely during the orchestral performance.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The train arrived precisely on time."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our chemistry teacher reminded us to measure each ingredient precisely before mixing them."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "I set my alarm precisely fifteen minutes earlier than usual to avoid being late."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the recipe required exact measurements, the baker weighed each ingredient precisely before starting."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the ancient device looked simple, engineers discovered it could track the seasons precisely enough to rival some modern calendars."
        }
      ]
    },

    {
      id: 12,
      word: "assume",
      partOfSpeech: "verb",
      meaning: "(사실일 것으로) 추정하다",
      synonym: "believe",
      antonym: "reject",
      definition: "to accept something to be true without question",
      bookSentence:
        ". . . one must assume that there will be five times more 'good' produced by saving their lives than if the one person is saved.",
      example:
        "People assumed that the restaurant served amazing dishes because there was a long line.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "I assumed the store was open."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our teacher warned us not to assume an answer is correct just because it looks familiar."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "I assumed my brother had eaten the leftovers, but it turned out to be our dog."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the lights were on, the delivery driver assumed someone was home."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although everyone assumed the experiment would fail based on early results, the researchers refused to give up and eventually proved the theory correct."
        }
      ]
    },

    {
      id: 13,
      word: "general",
      partOfSpeech: "adj.",
      meaning: "일반적인, 전반적인",
      synonym: "common",
      antonym: "unusual",
      definition: "not detailed, but including the most basic information",
      bookSentence:
        "It is much better to outlaw all instances of killing so that we have a general moral standard to follow in all situations.",
      example:
        "All teachers in the elementary school have general knowledge about math, science, and history.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "She gave a general summary of the plan."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our textbook only offers a general overview of the war, so we need outside sources for details."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My dad gave me general directions to the campsite instead of an exact address."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the audience included both experts and beginners, the speaker kept her explanation fairly general."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the report provided only a general description of the problem at first, later sections offered detailed data that changed the committee's entire decision."
        }
      ]
    },

    {
      id: 14,
      word: "demonstrate",
      partOfSpeech: "verb",
      meaning: "보여주다, 입증하다",
      synonym: "display",
      antonym: "hide",
      definition: "to show and make something clear",
      bookSentence:
        "As demonstrated . . . the Trolley Problem involves two competing imperatives, notwithstanding the number of people on the trolley tracks.",
      example:
        "Ms. Penny demonstrated how to conduct an experiment in science class.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The coach demonstrated the correct technique."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our teacher demonstrated the science experiment before letting students try it themselves."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My dad demonstrated how to change a tire so I would know what to do in an emergency."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because several students seemed confused, the tutor slowed down and demonstrated the steps one more time."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the theory sounded convincing on paper, it took years of careful experiments to demonstrate that it actually worked in practice."
        }
      ]
    },

    {
      id: 15,
      word: "rationale",
      partOfSpeech: "noun",
      meaning: "이유, 근거",
      synonym: "reasoning",
      antonym: "",
      definition: "the reasons that cause a particular set of beliefs or actions",
      bookSentence:
        "The rationale for this rule can be articulated in two ways. First, the law holds that an individual does not owe a duty to take affirmative actions to rescue others from danger . . .",
      example:
        "The pilot explained the rationale behind delaying the flight due to the severe weather.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "She explained her rationale clearly."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our teacher asked us to include a clear rationale for every argument in our essays."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My rationale for skipping dessert was simple: I wanted to save room for a bigger dinner."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the new policy seemed unfair at first, the principal held an assembly to explain its rationale."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although critics questioned the rationale behind the company's sudden decision, internal documents later revealed a well-researched plan behind every step."
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
      relatedWord: "disconsolate",
      question: "Which situation best shows someone who is disconsolate?",
      choices: [
        "Laughing cheerfully at a birthday party.",
        "Crying quietly for days after losing a beloved pet.",
        "Calmly discussing weekend plans.",
        "Smiling proudly after finishing a race."
      ],
      answer: 1,
      explanation: "disconsolate(암담한)는 극도로 슬프고 실망하여 위로받기 어려운 상태를 뜻합니다."
    },
    {
      id: 2,
      relatedWord: "disconsolate",
      question: "A disconsolate student who failed an important exam would most likely...",
      choices: [
        "celebrate with friends immediately.",
        "feel deeply sad and struggle to be comforted.",
        "forget about it within minutes.",
        "feel proud of the result."
      ],
      answer: 1,
      explanation: "disconsolate는 깊은 슬픔과 실망감으로 위로받기 어려운 상태를 나타냅니다."
    },

    {
      id: 3,
      relatedWord: "gymnastic",
      question: "Which activity is an example of a gymnastic exercise?",
      choices: [
        "Reading quietly in the library.",
        "Performing a cartwheel followed by a handstand.",
        "Solving a math equation.",
        "Watching a movie at home."
      ],
      answer: 1,
      explanation: "gymnastic(체조의, 체육상의)은 힘과 조정력을 기르기 위한 신체 운동과 관련된 것을 뜻합니다."
    },
    {
      id: 4,
      relatedWord: "gymnastic",
      question: "A gymnastic training program would most likely focus on...",
      choices: [
        "memorizing historical dates.",
        "building strength, flexibility, and coordination.",
        "learning a foreign language.",
        "practicing musical scales."
      ],
      answer: 1,
      explanation: "gymnastic 훈련은 근력과 유연성, 조정력을 기르는 신체 운동에 중점을 둡니다."
    },

    {
      id: 5,
      relatedWord: "briskly",
      question: "Which situation shows someone moving briskly?",
      choices: [
        "Strolling lazily through the park with no particular destination.",
        "Walking quickly and energetically to catch a departing train.",
        "Sitting still on a park bench for an hour.",
        "Crawling slowly across the floor."
      ],
      answer: 1,
      explanation: "briskly(활발하게, 씩씩하게)는 빠르고 활기차게 움직이는 모습을 뜻합니다."
    },
    {
      id: 6,
      relatedWord: "briskly",
      question: "If employees walked briskly into the meeting room, that means they...",
      choices: [
        "moved slowly and reluctantly.",
        "moved quickly and with energy.",
        "stood completely still.",
        "crawled on the floor."
      ],
      answer: 1,
      explanation: "briskly는 빠르고 힘찬 움직임을 나타냅니다."
    },

    {
      id: 7,
      relatedWord: "crumble",
      question: "Which situation is an example of something crumbling?",
      choices: [
        "A brand-new brick wall standing perfectly solid.",
        "An old, dry cookie breaking into small pieces when touched.",
        "A steel beam holding up a bridge without any damage.",
        "A fresh loaf of bread staying perfectly intact."
      ],
      answer: 1,
      explanation: "crumble(바스러지다, 바스러뜨리다)는 작은 조각으로 부서지는 것을 뜻합니다."
    },
    {
      id: 8,
      relatedWord: "crumble",
      question: "If an old building's walls have begun to crumble, that most likely means the walls are...",
      choices: [
        "brand new and perfectly stable.",
        "breaking apart into small pieces due to age or damage.",
        "freshly painted and reinforced.",
        "stronger than they have ever been."
      ],
      answer: 1,
      explanation: "crumble은 시간이 지나며 작은 조각으로 부서지는 상태를 뜻합니다."
    },

    {
      id: 9,
      relatedWord: "sagacity",
      question: "Which situation shows sagacity?",
      choices: [
        "Making an important decision without thinking it through at all.",
        "Carefully weighing all the evidence before reaching a wise conclusion.",
        "Ignoring good advice out of stubbornness.",
        "Guessing randomly on a difficult decision."
      ],
      answer: 1,
      explanation: "sagacity(현명, 총명)는 이해력과 훌륭한 판단력을 갖춘 상태를 뜻합니다."
    },
    {
      id: 10,
      relatedWord: "sagacity",
      question: "A leader known for sagacity would most likely be praised for...",
      choices: [
        "making careless decisions without any thought.",
        "making wise, well-reasoned decisions even in difficult situations.",
        "refusing to make any decisions at all.",
        "copying whatever other leaders decide."
      ],
      answer: 1,
      explanation: "sagacity가 뛰어난 사람은 어려운 상황에서도 현명한 판단을 내릴 수 있습니다."
    },

    {
      id: 11,
      relatedWord: "perceive",
      question: "Which situation is an example of perceiving something?",
      choices: [
        "Completely ignoring a strange sound in the house.",
        "Noticing a faint but unusual smell of gas in the kitchen.",
        "Sleeping through an entire thunderstorm.",
        "Walking past something without any awareness of it."
      ],
      answer: 1,
      explanation: "perceive(감지[인지]하다)는 감각을 통해 무언가를 충분히 알아차리는 것을 뜻합니다."
    },
    {
      id: 12,
      relatedWord: "perceive",
      question: "If a guard dog perceives an unfamiliar sound outside, it would most likely...",
      choices: [
        "remain completely unaware of the sound.",
        "become alert and start barking toward the source.",
        "fall asleep immediately.",
        "ignore its surroundings entirely."
      ],
      answer: 1,
      explanation: "perceive는 감각을 통해 무언가를 알아차리는 것을 뜻하므로, 경계하며 반응하는 모습이 자연스럽습니다."
    },

    {
      id: 13,
      relatedWord: "dwell",
      question: "Which situation describes dwelling somewhere?",
      choices: [
        "Visiting a city for a single afternoon.",
        "Living in the same countryside village for thirty years.",
        "Passing through an airport during a layover.",
        "Taking a short walk through an unfamiliar neighborhood."
      ],
      answer: 1,
      explanation: "dwell((…에) 살다[거주하다])는 어떤 곳에 거주자로서 사는 것을 뜻합니다."
    },
    {
      id: 14,
      relatedWord: "dwell",
      question: "Archaeologists who found tools and pottery in a cave concluded that people once...",
      choices: [
        "never visited the cave at all.",
        "dwelt there for an extended period of time.",
        "only passed through for a few seconds.",
        "built the cave using modern machinery."
      ],
      answer: 1,
      explanation: "dwell은 거주자로서 그곳에 정착해 살았다는 것을 뜻합니다."
    },

    {
      id: 15,
      relatedWord: "obscure",
      question: "Which situation describes something obscure?",
      choices: [
        "A brightly lit stadium during a night game.",
        "A narrow alley barely visible in the fading evening light.",
        "A sunny beach at noon.",
        "A well-lit classroom during the day."
      ],
      answer: 1,
      explanation: "obscure(어두운, 잘 보이지 않는)는 빛이 없거나 부족한 상태를 뜻합니다."
    },
    {
      id: 16,
      relatedWord: "obscure",
      question: "If the trail became obscure as night fell, hikers should most likely...",
      choices: [
        "continue walking without any caution.",
        "use a flashlight and proceed carefully.",
        "assume the path is perfectly clear.",
        "ignore the darkness completely."
      ],
      answer: 1,
      explanation: "obscure는 빛이 부족해 잘 보이지 않는 상태를 뜻하므로, 조심스러운 대응이 필요합니다."
    },

    {
      id: 17,
      relatedWord: "dispute",
      question: "Which situation is an example of a dispute?",
      choices: [
        "Two neighbors calmly agreeing on where to place a shared fence.",
        "Two coworkers arguing loudly over who deserves credit for a project.",
        "A quiet afternoon with no disagreements at all.",
        "Two friends peacefully watching a movie together."
      ],
      answer: 1,
      explanation: "dispute(분쟁, 논쟁)는 의견 차이로 인한 시끄럽거나 격한 다툼을 뜻합니다."
    },
    {
      id: 18,
      relatedWord: "dispute",
      question: "A long-running dispute between two countries over a border would most likely involve...",
      choices: [
        "complete agreement from the very beginning.",
        "repeated disagreements and tension over the contested area.",
        "no communication between the two countries at all.",
        "an instant, effortless resolution."
      ],
      answer: 1,
      explanation: "dispute는 지속적인 의견 차이와 갈등을 뜻합니다."
    },

    {
      id: 19,
      relatedWord: "cultivate",
      question: "Which situation is an example of cultivating something?",
      choices: [
        "Ignoring a garden until all the plants die.",
        "Watering, weeding, and caring for a garden so it grows well.",
        "Cutting down a forest without replanting anything.",
        "Leaving a field completely untouched for years."
      ],
      answer: 1,
      explanation: "cultivate(양성하다)는 무언가가 자라거나 발전하도록 돕는 것을 뜻합니다."
    },
    {
      id: 20,
      relatedWord: "cultivate",
      question: "A teacher who tries to cultivate curiosity in students would most likely...",
      choices: [
        "discourage students from asking questions.",
        "encourage exploration and reward thoughtful questions.",
        "only allow memorization with no discussion.",
        "ignore students' interests completely."
      ],
      answer: 1,
      explanation: "cultivate는 무언가가 잘 자라고 발전하도록 돕는다는 뜻입니다."
    },

    {
      id: 21,
      relatedWord: "precisely",
      question: "Which situation shows something being done precisely?",
      choices: [
        "Guessing the measurements roughly without a ruler.",
        "Measuring an ingredient down to the exact gram using a scale.",
        "Estimating the time without checking a clock.",
        "Cutting a piece of wood without measuring at all."
      ],
      answer: 1,
      explanation: "precisely(정확히, 정확하게)는 정확하게, 오차 없이 이루어지는 것을 뜻합니다."
    },
    {
      id: 22,
      relatedWord: "precisely",
      question: "If a scientist recorded the temperature precisely, that means the measurement was...",
      choices: [
        "a rough guess with no real accuracy.",
        "exact, with no room for error.",
        "completely ignored during the experiment.",
        "estimated based on a feeling."
      ],
      answer: 1,
      explanation: "precisely는 오차 없이 정확하게 이루어졌다는 뜻입니다."
    },

    {
      id: 23,
      relatedWord: "assume",
      question: "Which situation is an example of assuming something?",
      choices: [
        "Checking every fact carefully before reaching a conclusion.",
        "Believing something is true without any real evidence.",
        "Asking several experts before forming an opinion.",
        "Reading a detailed report before deciding."
      ],
      answer: 1,
      explanation: "assume((사실일 것으로) 추정하다)는 확인 없이 무언가를 사실이라고 받아들이는 것을 뜻합니다."
    },
    {
      id: 24,
      relatedWord: "assume",
      question: "If you assumed a store was closed without checking, you might...",
      choices: [
        "already know the store's exact hours for certain.",
        "turn away and miss the chance to shop, even if it was actually open.",
        "call ahead to confirm before leaving.",
        "visit the store and find the correct hours posted."
      ],
      answer: 1,
      explanation: "assume는 확인하지 않고 사실이라 믿는 것이므로, 잘못된 판단으로 이어질 수 있습니다."
    },

    {
      id: 25,
      relatedWord: "general",
      question: "Which situation shows a general description?",
      choices: [
        "A report listing the exact temperature of every single hour of the day.",
        "A brief overview simply stating that the weather was mostly warm this week.",
        "A minute-by-minute record of every weather change.",
        "An extremely detailed scientific analysis of humidity levels."
      ],
      answer: 1,
      explanation: "general(일반적인, 전반적인)은 자세하지 않지만 가장 기본적인 정보만 담은 것을 뜻합니다."
    },
    {
      id: 26,
      relatedWord: "general",
      question: "A general overview of a book would most likely include...",
      choices: [
        "every single sentence copied from the original text.",
        "just the main idea and basic plot, without small details.",
        "a page-by-page detailed summary.",
        "the author's complete personal biography."
      ],
      answer: 1,
      explanation: "general한 설명은 세부 사항보다는 가장 기본적인 정보 위주로 구성됩니다."
    },

    {
      id: 27,
      relatedWord: "demonstrate",
      question: "Which situation is an example of demonstrating something?",
      choices: [
        "Refusing to explain how a machine works.",
        "Showing students step by step how to safely use lab equipment.",
        "Hiding the process from everyone else.",
        "Ignoring questions about how something works."
      ],
      answer: 1,
      explanation: "demonstrate(보여주다, 입증하다)는 무언가를 보여주고 명확하게 하는 것을 뜻합니다."
    },
    {
      id: 28,
      relatedWord: "demonstrate",
      question: "A scientist who demonstrates a theory through experiments is most likely trying to...",
      choices: [
        "hide the results from the public.",
        "provide clear evidence that supports the theory.",
        "avoid testing the theory at all.",
        "confuse people about the theory's validity."
      ],
      answer: 1,
      explanation: "demonstrate는 명확한 증거를 통해 무언가를 입증하는 것을 뜻합니다."
    },

    {
      id: 29,
      relatedWord: "rationale",
      question: "Which situation includes a clear rationale?",
      choices: [
        "Making a decision with absolutely no explanation given.",
        "Explaining exactly why a new rule was created and what problem it solves.",
        "Refusing to answer any questions about a policy.",
        "Randomly choosing an option without any reasoning."
      ],
      answer: 1,
      explanation: "rationale(이유, 근거)는 특정 신념이나 행동의 원인이 되는 이유를 뜻합니다."
    },
    {
      id: 30,
      relatedWord: "rationale",
      question: "If a company explained the rationale behind a price increase, customers would most likely learn...",
      choices: [
        "nothing at all about the reason for the change.",
        "the specific reasons and evidence behind the company's decision.",
        "an unrelated topic with no connection to pricing.",
        "a random guess with no explanation."
      ],
      answer: 1,
      explanation: "rationale는 어떤 결정 뒤에 있는 구체적인 이유를 뜻합니다."
    }
  ],


  // ==============================
  // WORD BOX SETS
  // Set 1: DEBATE WORDS, Set 2~3: NOVEL WORDS
  // (WEEK01~07과 동일한 방식으로 그룹 구성)
  // ==============================

  wordBoxSets: [

    {
      id: 1,
      words: [
        "precisely",
        "assume",
        "general",
        "demonstrate",
        "rationale"
      ],
      sentences: [
        { text: "The surgeon needed to measure the dosage ___ to avoid any risk to the patient.", answer: "precisely" },
        { text: "Since there was no way to check the schedule, we could only ___ the train would arrive on time, just as it always did.", answer: "assume" },
        { text: "The pamphlet only offers a ___ overview of the park's history, not a detailed timeline.", answer: "general" },
        { text: "The scientist used a simple experiment to ___ how air pressure affects boiling temperature.", answer: "demonstrate" },
        { text: "The committee published a detailed ___ explaining exactly why the new policy was necessary.", answer: "rationale" }
      ]
    },

    {
      id: 2,
      words: [
        "disconsolate",
        "gymnastic",
        "briskly",
        "crumble",
        "sagacity"
      ],
      sentences: [
        { text: "The fans looked utterly ___ as they left the stadium after the last-minute defeat.", answer: "disconsolate" },
        { text: "The circus performers showed incredible ___ skill as they flipped across the stage.", answer: "gymnastic" },
        { text: "Realizing she was late, Mia walked ___ toward the train platform.", answer: "briskly" },
        { text: "If you leave the cliff's edge unprotected, the soft rock will eventually ___ into the sea.", answer: "crumble" },
        { text: "Even at ninety years old, my grandfather answers every question with surprising ___.", answer: "sagacity" }
      ]
    },

    {
      id: 3,
      words: [
        "perceive",
        "dwell",
        "obscure",
        "dispute",
        "cultivate"
      ],
      sentences: [
        { text: "Even in near-total darkness, the cat could ___ the faint outline of its food bowl.", answer: "perceive" },
        { text: "According to local legend, a family of foxes may still ___ in that hollow tree deep in the forest.", answer: "dwell" },
        { text: "Fog rolled over the harbor until the lighthouse became almost ___ from the shore.", answer: "obscure" },
        { text: "The two roommates settled their ___ over the thermostat by agreeing on a fixed temperature.", answer: "dispute" },
        { text: "Local farmers work together to ___ a wide variety of vegetables throughout the year.", answer: "cultivate" }
      ]
    }
  ],


  // ==============================
  // PREFIX PRACTICE
  // MINI LESSON(접두사 per-, "thoroughly") 관련 4지선다 훈련
  // 문항 3/4는 교재에 실제로 나온 확인 문제를 그대로 활용
  // ==============================

  prefixPractice: [

    {
      id: 1,
      relatedWord: "per-",
      question: "What does the prefix per- mean?",
      choices: [
        "thoroughly",
        "barely",
        "before",
        "against"
      ],
      answer: 0,
      explanation: "per-는 'thoroughly(철저히, 완전히)'라는 뜻을 더하는 접두사입니다. 예: perceive(감지하다)."
    },

    {
      id: 2,
      relatedWord: "perceptible",
      question: "If a change in temperature is barely perceptible, that means the change is...",
      choices: [
        "impossible to notice under any circumstances.",
        "just barely able to be thoroughly sensed or noticed.",
        "extremely obvious to everyone immediately.",
        "completely unrelated to temperature."
      ],
      answer: 1,
      explanation: "perceptible은 '충분히 감지될 수 있는'이라는 뜻입니다. per-(thoroughly) + -ceptible(감지할 수 있는)."
    },

    {
      id: 3,
      relatedWord: "perplex",
      question: "If a student is perplexed by a test question, that means it is . . .",
      choices: [
        "fairly simple and easy to solve",
        "very challenging and entertaining to solve",
        "thoroughly confusing and difficult to solve",
        "somewhat boring and uninteresting to solve"
      ],
      answer: 2,
      explanation: "perplex는 '완전히 혼란스럽게 만들다'라는 뜻입니다. per-(thoroughly) + plex(confuse)."
    },

    {
      id: 4,
      relatedWord: "permeate",
      question: "What does it mean when a restaurant is permeated by the smell of food?",
      choices: [
        "The entire restaurant is carefully prevented from smelling like food.",
        "The diners closest to the kitchen can smell the food more strongly than others.",
        "The entire restaurant is thoroughly filled with the smell of food.",
        "The diners farthest from the kitchen can barely smell the food."
      ],
      answer: 2,
      explanation: "permeate는 '어떤 것에 완전히 스며들어 퍼지다'라는 뜻입니다. 냄새가 공간 전체에 골고루 퍼진 상황이 대표적인 예입니다."
    },

    {
      id: 5,
      relatedWord: "perpetual",
      question: "A perpetual motion machine, if it existed, would be one that...",
      choices: [
        "stops moving after just a few seconds.",
        "keeps running forever without ever stopping.",
        "only works during the daytime.",
        "breaks down immediately after starting."
      ],
      answer: 1,
      explanation: "perpetual은 '영원히 지속되는'이라는 뜻입니다. per-(thoroughly) + petual(지속되는)."
    },

    {
      id: 6,
      relatedWord: "persevere",
      question: "An athlete who continues training every day despite repeated injuries is showing that she...",
      choices: [
        "gives up the moment things get difficult.",
        "perseveres, working thoroughly toward her goal until it is accomplished.",
        "has completely lost interest in the sport.",
        "never faces any real challenges."
      ],
      answer: 1,
      explanation: "persevere는 목표를 이룰 때까지 철저하게 노력을 지속하는 것을 뜻합니다."
    }
  ],


  // ==============================
  // MOCK TEST 구성
  // WEEK01~07과 동일한 섹션 배점 구조
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

window.VOCAB_DATA["vocabulary-workbook"].week08 = WEEK01;

})();
