// ==============================
// VOCABULARY WORKBOOK - WEEK 01 DATA
// ----------------------------------------
// IIFE로 감싸서 WEEK01이라는 이름이 다른 과목의
// 같은 이름 변수(예: critical-reading의 WEEK01)와
// 충돌하지 않도록 한다. 외부에서는 항상
// window.VOCAB_DATA["vocabulary-workbook"].week01 로 접근한다.
// ==============================

(function () {

const WEEK01 = {
  week: 1,
  title: "WEEK 01",
  totalWords: 15,

  prefixLesson: {
    prefix: "hypo-",
    meaning: "under, below",
    examples: [
      {
        word: "hypodermic",
        partOfSpeech: "adj.",
        definition: "used to inject medicine under the skin"
      },
      {
        word: "hypothesis",
        partOfSpeech: "noun",
        definition: "an idea that is under testing and not yet proven true"
      },
      {
        word: "hypocrisy",
        partOfSpeech: "noun",
        definition:
          "the act of pretending to follow beliefs while acting under dishonest behavior"
      },
      {
        word: "hypothermia",
        partOfSpeech: "noun",
        definition:
          "a condition in which the body's temperature falls below the normal level"
      },
      {
        word: "hypoallergenic",
        partOfSpeech: "adj.",
        definition:
          "designed to cause below the usual amount of allergic reaction"
      }
    ]
  },

  words: [
    {
      id: 1,
      word: "spacious",
      partOfSpeech: "adj.",
      meaning: "널찍한",
      synonym: "roomy",
      antonym: "confined",
      definition: "large and with a lot of space",
      bookSentence:
        "... the solid parts of the block formed a roof and a floor, both waterproof, and the hollows made two spacious rooms.",
      example:
        "The new school gym is so spacious that it can fit three full basketball courts.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The room was spacious."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "The new classroom felt spacious because it had fewer desks than before."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Our new apartment has a spacious kitchen where we can all cook together."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "The gym looked spacious because the workers had removed several old machines."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the house looked small from the outside, the rooms inside were surprisingly spacious."
        }
      ]
    },

    {
      id: 2,
      word: "rancid",
      partOfSpeech: "adj.",
      meaning: "상한, (상해서) 맛이 변한",
      synonym: "spoiled",
      antonym: "delicious",
      definition:
        "(of food) tasting or smelling unpleasant because it is not fresh",
      bookSentence:
        "... the potatoes had been thawed and refrozen so many times they had acquired a slimy texture and a rancid taste.",
      example:
        "The milk had been left out all night and smelled rancid, so we had to pour it down the drain.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The milk was rancid."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Someone left a lunch box in the classroom, and by Friday it smelled completely rancid."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "The butter in our fridge had turned rancid after being forgotten for weeks."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "The oil turned rancid because it had been used to fry food too many times."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the sandwich looked fine on the outside, one bite told us the meat inside had gone rancid."
        }
      ]
    },

    {
      id: 3,
      word: "hypochondriac",
      partOfSpeech: "noun",
      meaning: "심기증 환자",
      synonym: "worrywart",
      antonym: "",
      definition:
        "a person who worries that something is wrong under the surface of their body",
      bookSentence:
        "[Timothy] was also ... something of a hypochondriac. But there was no doubt he was really sick this time.",
      example:
        "Being a hypochondriac, Mike always carried a first-aid kit, even to the movie theater.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "He is a hypochondriac."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "The hypochondriac in our class visits the nurse's office almost every day for tiny scratches."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My grandfather is such a hypochondriac that he checks his blood pressure every hour."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "She became a hypochondriac because she read too many scary articles about rare diseases."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the doctor told him nothing was wrong, the hypochondriac still worried that he had a serious illness."
        }
      ]
    },

    {
      id: 4,
      word: "delirious",
      partOfSpeech: "adj.",
      meaning: "의식이 혼미한",
      synonym: "confused",
      antonym: "aware",
      definition:
        "unable to think or speak clearly because of fever or mental confusion",
      bookSentence:
        "... the words would not form properly and made no sense at all. '[Timothy's] fever is so high he has become delirious.'",
      example:
        "Lia was delirious with a high fever and started talking about seeing unicorns in her room.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "She felt delirious."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "During the school trip, one student became delirious after standing too long in the hot sun."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My little brother was delirious with a high fever and kept talking about flying fish."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "He grew delirious because his fever had climbed dangerously high overnight."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the doctors gave her medicine right away, she remained delirious for almost an hour."
        }
      ]
    },

    {
      id: 5,
      word: "relentlessly",
      partOfSpeech: "adv.",
      meaning: "끈질기게",
      synonym: "persistently",
      antonym: "hesitantly",
      definition:
        "in an extreme way that continues without stopping",
      bookSentence:
        "... and since the cat stalked those grounds relentlessly, [Mrs. Frisby] had to plot a much more roundabout way ...",
      example:
        "Despite the rain, the runners trained relentlessly for the upcoming marathon.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "He worked relentlessly."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our teacher relentlessly reminded us about the science fair deadline all week."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My dog barked relentlessly at the mail carrier every single afternoon."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "The team practiced relentlessly, so they were finally ready for the big tournament."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the weather was freezing, the volunteers relentlessly continued cleaning up the park all morning."
        }
      ]
    },

    {
      id: 6,
      word: "lash",
      partOfSpeech: "verb",
      meaning: "세차게 흔들리다",
      synonym: "whip",
      antonym: "",
      definition: "to fling about violently",
      bookSentence:
        "[Dragon] had seven claws on each foot and a thick, furry tail, which lashed angrily from side to side.",
      example:
        "The excited dog began to lash its tail and knock fragile vases onto the floor.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The rope began to lash."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "During recess, the loose banner on the fence began to lash wildly in the wind."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "The garden hose started to lash around when my dad turned on the water too fast."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "The sail began to lash violently because the wind suddenly grew much stronger."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "As the storm grew worse, the tall tree branches started to lash against our bedroom window all night."
        }
      ]
    },

    {
      id: 7,
      word: "invariably",
      partOfSpeech: "adv.",
      meaning: "변함없이, 예외 없이, 언제나",
      synonym: "always",
      antonym: "occasionally",
      definition:
        "in a way that never changes or is always the same",
      bookSentence:
        "[Mrs. Frisby] thought of how his eyes shone with merriment when he made small jokes, which he did frequently, and how invariably kind he was to his small scatterbrained sister Cynthia.",
      example:
        "Invariably, the school bus arrives at 7:30 a.m. every morning without fail.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "He is invariably late."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our math teacher invariably gives us a pop quiz on the first day back from vacation."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My cat invariably wakes me up at six in the morning for breakfast."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because she studies every night, she invariably scores well on her tests."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even when the schedule changes, the school bus invariably arrives at the same corner at exactly the same time."
        }
      ]
    },

    {
      id: 8,
      word: "dubiously",
      partOfSpeech: "adv.",
      meaning: "수상하게, 의심스럽게",
      synonym: "suspiciously",
      antonym: "approvingly",
      definition:
        "in a way that shows doubt that something is right or true",
      bookSentence:
        "\"Come down here,\" [Mrs. Frisby] said. \"I'll get the string off.\" \"How?\" said the crow dubiously.",
      example:
        "The teacher looked at Max dubiously when he said his dog ate his homework.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "She looked at him dubiously."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "The teacher glanced dubiously at the excuse note that seemed to be written in a student's own handwriting."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My mom eyed the muddy footprints dubiously before asking who had been outside."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "He answered dubiously because he wasn't sure his story would actually be believed."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the salesman promised the toy would never break, the shoppers listened dubiously and decided to look elsewhere."
        }
      ]
    },

    {
      id: 9,
      word: "essence",
      partOfSpeech: "noun",
      meaning: "본질, 정수, 진수",
      synonym: "quality",
      antonym: "",
      definition:
        "the basic or most important idea or quality of something",
      bookSentence:
        "This mild breeze, carrying the moist essence of early spring, caused a dead leaf to flutter here and there ...",
      example:
        "The essence of a good friendship is trust and understanding.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "Trust is the essence of friendship."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "The essence of a good group project is that every member contributes fairly."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "For my grandmother, the essence of a happy home is a table full of family at dinner."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because he forgot the essence of the story, his book report missed the main point entirely."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the movie had exciting special effects, critics said it lost the essence of the original book's message."
        }
      ]
    },

    {
      id: 10,
      word: "plummet",
      partOfSpeech: "verb",
      meaning: "곤두박질치다, 급락하다",
      synonym: "plunge",
      antonym: "soar",
      definition:
        "to drop sharply and abruptly",
      bookSentence:
        "Then [Mrs. Frisby] looked back, for at that moment a black object plummeted from the sky, and she recognized her friend Jeremy the crow.",
      example:
        "The skydiver plummeted toward the ground before opening her parachute.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The ball began to plummet."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "His test scores started to plummet after he stopped turning in his homework."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "The price of the video game began to plummet right before the holiday sale."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "The kite started to plummet because the wind suddenly died down."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the plane was flying smoothly at first, it suddenly began to plummet when it hit a pocket of turbulence."
        }
      ]
    },

    {
      id: 11,
      word: "logically",
      partOfSpeech: "adv.",
      meaning: "논리적으로",
      synonym: "rationally",
      antonym: "illogically",
      definition:
        "in a way that uses reason",
      bookSentence:
        "This section details how to build a dissenting argument by organizing reasons, explanations, and evidence logically.",
      example:
        "The scientist connected the facts logically to find the true cause of the disease.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "Think logically."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our teacher asked us to organize our science report logically, from the question to the conclusion."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My sister logically planned our road trip so we wouldn't waste any time."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because he explained his answer logically, the class finally understood the tricky math problem."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the mystery seemed impossible to solve, the detective logically worked through each clue until she found the answer."
        }
      ]
    },

    {
      id: 12,
      word: "engaging",
      partOfSpeech: "adj.",
      meaning: "흥미로운, 몰입하게 하는",
      synonym: "captivating",
      antonym: "dull",
      definition:
        "interesting and enjoyable in a way that keeps people's attention",
      bookSentence:
        "This section exposes students to a variety of communication skills that are commonly used to make speeches and presentations more charismatic, engaging, and impactful.",
      example:
        "The actor gave an engaging performance that made the audience applaud.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The book was engaging."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our new history teacher makes even the oldest events feel engaging and exciting."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "The board game was so engaging that we played it for three hours straight."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the speaker used funny stories, her presentation became much more engaging."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the topic sounded boring at first, the podcast turned out to be surprisingly engaging from start to finish."
        }
      ]
    },

    {
      id: 13,
      word: "flawed",
      partOfSpeech: "adj.",
      meaning: "결함이 있는, 흠이 있는",
      synonym: "defective",
      antonym: "flawless",
      definition:
        "having faults, mistakes, or weaknesses",
      bookSentence:
        "The Opposition team must challenge the Proposition's ideas by pointing out unclear definitions, weak logic, or flawed evidence.",
      example:
        "The flawed blueprint of a building was missing windows and emergency exits.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The plan was flawed."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "The student's argument was flawed because it did not include enough evidence."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "The new app looked useful, but its design was flawed."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "The experiment failed because the method was flawed."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the idea seemed reasonable at first, we discovered that the plan was flawed in several important ways."
        }
      ]
    },

    {
      id: 14,
      word: "authority",
      partOfSpeech: "noun",
      meaning: "권한",
      synonym: "power",
      antonym: "",
      definition:
        "the legal right to control",
      bookSentence:
        "Respect the judge's authority at all times.",
      example:
        "Principal Rogers used her authority to enforce hallway rules during lunch periods.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "She has authority."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "The class president has the authority to organize the schedule for the school festival."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "As the oldest sibling, he has the authority to decide which show we watch first."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because she is the team captain, she has the authority to choose the starting lineup."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though some students disagreed, the teacher's authority allowed her to make the final decision about the field trip."
        }
      ]
    },

    {
      id: 15,
      word: "maintain",
      partOfSpeech: "verb",
      meaning: "유지하다",
      synonym: "hold",
      antonym: "stop",
      definition:
        "to continue to have",
      bookSentence:
        "Maintain eye contact with the audience or the judge.",
      example:
        "The speaker tried to maintain a calm voice during the debate.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "He tries to maintain good grades."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Students must maintain a certain average to stay on the honor roll."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "We take turns to maintain the backyard garden every weekend."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because he practices every day, he is able to maintain his skill at the piano."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the old bridge needed constant repairs, the city worked hard to maintain it so that people could still use it safely."
        }
      ]
    }
  ],

  miniQuiz: [
    {
      id: 1,
      type: "prefix",
      question:
        "In which context would someone MOST LIKELY be diagnosed with hypothermia?",
      choices: [
        "after spending hours in a hot desert without food or water",
        "following an intense workout in a gym",
        "while swimming in a comfortably heated pool",
        "after being in a snowstorm until body temperature drops below normal"
      ],
      answer: 3
    },

    {
      id: 2,
      type: "prefix",
      question:
        "If a fact is a piece of information presented as objective truth, then a hypothesis is...",
      choices: [
        "a tentative explanation that is under investigation",
        "an opinion based on personal beliefs",
        "a widely-accepted theory",
        "an amateur guess without any evidence"
      ],
      answer: 0
    }
  ],


  // ==============================
  // CONTEXT / SITUATIONAL QUESTIONS
  // 실제 시험 C유형: 단순 뜻 암기가 아니라
  // 상황을 이해해야 정답을 고를 수 있는 4지선다
  // ==============================

  contextQuestions: [

    {
      id: 1,
      relatedWord: "spacious",
      question: "Which of the following BEST describes a spacious apartment?",
      choices: [
        "It has barely enough room for one bed.",
        "It has plenty of room to move around comfortably.",
        "It is painted in bright colors.",
        "It is located on the top floor."
      ],
      answer: 1,
      explanation: "spacious = 널찍한(large, roomy). 여유 있게 움직일 공간이 충분하다는 뜻의 보기가 정답입니다."
    },
    {
      id: 2,
      relatedWord: "spacious",
      question: "Which situation shows that a room is spacious?",
      choices: [
        "You bump into furniture every time you walk.",
        "You can fit three sofas and still have empty floor space.",
        "The ceiling is very low.",
        "There is only one small window."
      ],
      answer: 1,
      explanation: "가구를 여러 개 두어도 남는 공간이 있다는 것은 spacious(널찍한)의 대표적인 상황입니다."
    },

    {
      id: 3,
      relatedWord: "rancid",
      question: "Which food is most likely to be described as rancid?",
      choices: [
        "Fresh bread straight from the oven.",
        "Butter that has been left out for weeks and smells sour.",
        "A cold glass of water.",
        "A newly picked apple."
      ],
      answer: 1,
      explanation: "rancid는 신선하지 않아 냄새나 맛이 변한 음식을 가리킵니다. 오래 방치되어 시큼한 냄새가 나는 버터가 정답입니다."
    },
    {
      id: 4,
      relatedWord: "rancid",
      question: "If milk has gone rancid, what should you do?",
      choices: [
        "Drink it quickly before it gets worse.",
        "Pour it down the drain because it has spoiled.",
        "Add sugar to make it taste better.",
        "Freeze it to make ice cream."
      ],
      answer: 1,
      explanation: "rancid(상한)한 우유는 상했다는 뜻이므로 버리는 것이 올바른 대응입니다."
    },

    {
      id: 5,
      relatedWord: "hypochondriac",
      question: "Which person is behaving like a hypochondriac?",
      choices: [
        "Someone who exercises regularly to stay healthy.",
        "Someone who constantly worries they have a serious illness with no real evidence.",
        "Someone who visits the doctor once a year for a checkup.",
        "Someone who eats vegetables every day."
      ],
      answer: 1,
      explanation: "hypochondriac은 몸에 문제가 있다고 근거 없이 과도하게 걱정하는 사람을 뜻합니다."
    },
    {
      id: 6,
      relatedWord: "hypochondriac",
      question: "A hypochondriac would most likely...",
      choices: [
        "ignore small symptoms completely.",
        "carry medicine everywhere and fear the worst about minor aches.",
        "never think about their health.",
        "enjoy dangerous extreme sports."
      ],
      answer: 1,
      explanation: "심기증 환자(hypochondriac)는 사소한 증상에도 최악의 상황을 상상하며 불안해합니다."
    },

    {
      id: 7,
      relatedWord: "delirious",
      question: "Who would MOST LIKELY be delirious?",
      choices: [
        "A student calmly reading a book.",
        "A patient with a very high fever who is talking nonsense.",
        "A person sleeping peacefully.",
        "A chef cooking dinner."
      ],
      answer: 1,
      explanation: "delirious는 고열이나 혼란으로 인해 앞뒤가 맞지 않는 말을 하는 상태를 뜻합니다."
    },
    {
      id: 8,
      relatedWord: "delirious",
      question: "Which sentence shows someone is delirious?",
      choices: [
        "\"I finished my homework right on time.\"",
        "\"She kept mumbling about flying elephants while burning with fever.\"",
        "\"He walked to school as usual.\"",
        "\"They studied quietly in the library.\""
      ],
      answer: 1,
      explanation: "고열 속에서 앞뒤가 맞지 않는 말(flying elephants)을 하는 것이 delirious(의식이 혼미한)의 전형적인 예시입니다."
    },

    {
      id: 9,
      relatedWord: "relentlessly",
      question: "If you train relentlessly for a marathon, that means you...",
      choices: [
        "practice a little and then quit.",
        "keep practicing without giving up, even when it's hard.",
        "only practice on weekends.",
        "watch other people practice."
      ],
      answer: 1,
      explanation: "relentlessly(끈질기게)는 힘들어도 멈추지 않고 계속하는 것을 뜻합니다."
    },
    {
      id: 10,
      relatedWord: "relentlessly",
      question: "Which best shows someone working relentlessly?",
      choices: [
        "Taking frequent long breaks between short bursts of work.",
        "Working nonstop toward a goal despite obstacles.",
        "Giving up after one failed attempt.",
        "Doing the task only once."
      ],
      answer: 1,
      explanation: "장애물에도 불구하고 목표를 향해 멈추지 않고 나아가는 모습이 relentlessly의 핵심입니다."
    },

    {
      id: 11,
      relatedWord: "lash",
      question: "Which situation describes something that lashes?",
      choices: [
        "A flag hanging still on a windless day.",
        "A dog's tail whipping wildly from side to side when excited.",
        "A book sitting closed on a shelf.",
        "A cup resting quietly on a table."
      ],
      answer: 1,
      explanation: "lash는 격렬하게 흔들리거나 휘두르는 동작을 뜻하므로, 세차게 흔들리는 꼬리가 정답입니다."
    },
    {
      id: 12,
      relatedWord: "lash",
      question: "During a storm, which of the following would you expect to lash?",
      choices: [
        "A parked car sitting still.",
        "Tree branches thrashing violently in the wind.",
        "A locked door.",
        "A sleeping cat."
      ],
      answer: 1,
      explanation: "폭풍 속에서 격렬하게 흔들리는 나뭇가지가 lash(세차게 흔들리다)의 좋은 예입니다."
    },

    {
      id: 13,
      relatedWord: "invariably",
      question: "If you do something invariably, that means you do it...",
      choices: [
        "only when you feel like it.",
        "the exact same way every single time, without exception.",
        "rarely, maybe once a year.",
        "differently each time."
      ],
      answer: 1,
      explanation: "invariably(변함없이, 언제나)는 예외 없이 항상 같은 방식으로 일어나는 것을 뜻합니다."
    },
    {
      id: 14,
      relatedWord: "invariably",
      question: "Which sentence uses invariably correctly?",
      choices: [
        "\"He invariably changes his morning routine every day.\"",
        "\"The bus invariably arrives at 8:00 sharp, every single morning.\"",
        "\"She invariably forgets her plans sometimes.\"",
        "\"They invariably visit different places each week.\""
      ],
      answer: 1,
      explanation: "invariably는 '항상 똑같이'라는 뜻이므로, 매번 정확히 같은 시간에 도착한다는 문장이 자연스럽습니다."
    },

    {
      id: 15,
      relatedWord: "dubiously",
      question: "If someone looks at you dubiously, they are showing...",
      choices: [
        "full trust and belief in what you said.",
        "doubt about whether you are telling the truth.",
        "excitement and joy.",
        "complete indifference."
      ],
      answer: 1,
      explanation: "dubiously(의심스럽게)는 상대의 말을 믿지 못하고 의심하는 태도를 나타냅니다."
    },
    {
      id: 16,
      relatedWord: "dubiously",
      question: "Which situation shows someone reacting dubiously?",
      choices: [
        "Nodding in agreement immediately.",
        "Raising an eyebrow and asking, \"Are you sure that's true?\"",
        "Cheering loudly in celebration.",
        "Falling asleep during the conversation."
      ],
      answer: 1,
      explanation: "눈썹을 치켜올리며 정말이냐고 되묻는 것은 의심(dubiously)을 나타내는 대표적인 반응입니다."
    },

    {
      id: 17,
      relatedWord: "essence",
      question: "The essence of a good team is...",
      choices: [
        "an unimportant detail that doesn't matter.",
        "the most important quality that makes it work well, like trust.",
        "the uniform color they wear.",
        "the size of the team."
      ],
      answer: 1,
      explanation: "essence(본질)는 어떤 것을 이루는 가장 핵심적인 요소를 뜻합니다."
    },
    {
      id: 18,
      relatedWord: "essence",
      question: "Which best explains \"essence\" in this sentence: \"The essence of her speech was hope\"?",
      choices: [
        "The exact number of words she used.",
        "The core idea or main message she was trying to convey.",
        "The volume of her voice.",
        "The length of the speech."
      ],
      answer: 1,
      explanation: "essence는 겉으로 드러난 형식이 아니라 가장 중심이 되는 메시지나 본질을 의미합니다."
    },

    {
      id: 19,
      relatedWord: "plummet",
      question: "If stock prices plummet, that means they...",
      choices: [
        "rise slowly over time.",
        "drop sharply and suddenly.",
        "stay exactly the same.",
        "fluctuate only slightly."
      ],
      answer: 1,
      explanation: "plummet(곤두박질치다)은 갑자기 급격하게 떨어지는 것을 뜻합니다."
    },
    {
      id: 20,
      relatedWord: "plummet",
      question: "Which situation describes something that plummets?",
      choices: [
        "A feather gently floating down.",
        "A rock falling straight down off a cliff at high speed.",
        "A balloon slowly rising into the sky.",
        "A car parked in a garage."
      ],
      answer: 1,
      explanation: "빠른 속도로 급격히 떨어지는 바위가 plummet의 의미에 가장 가깝습니다."
    },

    {
      id: 21,
      relatedWord: "logically",
      question: "If you present your ideas logically, that means you are...",
      choices: [
        "organizing your reasons in a clear, sensible order.",
        "shouting to get attention.",
        "guessing randomly without thinking.",
        "copying someone else's argument."
      ],
      answer: 0,
      explanation: "logically(논리적으로)는 이유와 근거를 조리 있게 순서대로 정리하는 것을 뜻합니다."
    },
    {
      id: 22,
      relatedWord: "logically",
      question: "Which response is the most logically reasoned?",
      choices: [
        "\"I think it will rain because I don't like the color of the sky.\"",
        "\"The weather forecast, dark clouds, and dropping temperature all suggest rain today.\"",
        "\"It might rain because my lucky number is seven.\"",
        "\"I feel like rain, so it must rain.\""
      ],
      answer: 1,
      explanation: "여러 근거(예보, 구름, 기온)를 종합해서 결론을 내리는 것이 논리적인 사고입니다."
    },

    {
      id: 23,
      relatedWord: "engaging",
      question: "Which of the following describes an engaging movie?",
      choices: [
        "One that makes the audience want to check their phones.",
        "One that keeps the audience interested from start to finish.",
        "One that puts everyone to sleep.",
        "One nobody wants to watch."
      ],
      answer: 1,
      explanation: "engaging(흥미로운, 몰입하게 하는)는 끝까지 관심을 붙잡아 두는 것을 뜻합니다."
    },
    {
      id: 24,
      relatedWord: "engaging",
      question: "A teacher who gives engaging lessons would most likely...",
      choices: [
        "read from the textbook in a flat, boring voice.",
        "use interesting stories and activities that capture students' attention.",
        "never speak during class.",
        "assign only silent reading with no discussion."
      ],
      answer: 1,
      explanation: "학생들의 흥미를 끄는 이야기나 활동을 활용하는 수업이 engaging한 수업입니다."
    },

    {
      id: 25,
      relatedWord: "flawed",
      question: "Which of these describes a flawed plan?",
      choices: [
        "A plan that has been carefully checked and works perfectly.",
        "A plan with serious mistakes that could cause it to fail.",
        "A plan that everyone agrees is excellent.",
        "A plan with absolutely no problems."
      ],
      answer: 1,
      explanation: "flawed(결함이 있는)는 실패로 이어질 수 있는 심각한 문제나 결함을 가진 상태를 뜻합니다."
    },
    {
      id: 26,
      relatedWord: "flawed",
      question: "If an argument is flawed, that means it...",
      choices: [
        "is completely convincing with no weak points.",
        "contains a mistake or weakness that makes it less convincing.",
        "is the strongest possible argument.",
        "has been proven true by everyone."
      ],
      answer: 1,
      explanation: "flawed한 주장은 약점이나 오류가 있어 설득력이 떨어지는 주장을 의미합니다."
    },

    {
      id: 27,
      relatedWord: "authority",
      question: "A police officer has the authority to...",
      choices: [
        "do anything they personally want without any rules.",
        "enforce the law because they have been given that legal right.",
        "ignore all of their official duties.",
        "avoid helping the public."
      ],
      answer: 1,
      explanation: "authority(권한)는 법적으로 부여된 통제할 수 있는 권리를 뜻합니다."
    },
    {
      id: 28,
      relatedWord: "authority",
      question: "Which sentence correctly uses \"authority\"?",
      choices: [
        "\"The teacher has no authority over the classroom rules.\"",
        "\"The principal has the authority to enforce school policies.\"",
        "\"The dog has the authority to bark.\"",
        "\"Authority means having no responsibility.\""
      ],
      answer: 1,
      explanation: "교장 선생님이 학교 규정을 시행할 권한을 갖는다는 문장이 authority의 의미에 알맞습니다."
    },

    {
      id: 29,
      relatedWord: "maintain",
      question: "How might someone maintain a healthy routine?",
      choices: [
        "Change their habits completely every single day.",
        "Keep exercising and eating well on a regular, consistent basis.",
        "Stop all healthy habits after one week.",
        "Only exercise once and never again."
      ],
      answer: 1,
      explanation: "maintain(유지하다)은 어떤 상태를 꾸준히, 계속해서 이어가는 것을 뜻합니다."
    },
    {
      id: 30,
      relatedWord: "maintain",
      question: "Which sentence shows someone trying to maintain something?",
      choices: [
        "\"She let the garden die and never watered it again.\"",
        "\"He watered the plants every day to keep the garden healthy.\"",
        "\"They abandoned the project halfway through.\"",
        "\"The car was left broken and never repaired.\""
      ],
      answer: 1,
      explanation: "매일 식물에 물을 주어 정원을 건강하게 유지하는 것이 maintain의 대표적인 예시입니다."
    }
  ],


  // ==============================
  // WORD BOX SETS
  // 실제 시험 B유형: Word Box의 단어를 보고
  // 문장 빈칸에 알맞은 단어 채우기
  // ==============================

  wordBoxSets: [

    {
      id: 1,
      words: [
        "authority",
        "dubiously",
        "relentlessly",
        "flawed",
        "essence"
      ],
      sentences: [
        { text: "The police officer has ___ to stop traffic.", answer: "authority" },
        { text: "Sam stared ___ at the strange snack.", answer: "dubiously" },
        { text: "Hailey studied ___ for her math test.", answer: "relentlessly" },
        { text: "The video game was fun but ___ because of a glitch.", answer: "flawed" },
        { text: "Teamwork is the ___ of winning in many sports.", answer: "essence" }
      ]
    },

    {
      id: 2,
      words: [
        "spacious",
        "rancid",
        "hypochondriac",
        "delirious",
        "lash"
      ],
      sentences: [
        { text: "The new gym was so ___ that the whole class could exercise at once.", answer: "spacious" },
        { text: "The leftover fish in the fridge smelled ___ after being forgotten for two weeks.", answer: "rancid" },
        { text: "Even with just a small cough, the ___ insisted he needed to see three different doctors.", answer: "hypochondriac" },
        { text: "Burning with a 40-degree fever, the boy became ___ and began talking about a purple dragon in his room.", answer: "delirious" },
        { text: "The captured shark's tail continued to ___ against the deck of the boat.", answer: "lash" }
      ]
    },

    {
      id: 3,
      words: [
        "invariably",
        "plummet",
        "logically",
        "engaging",
        "maintain"
      ],
      sentences: [
        { text: "No matter the season, the coach ___ arrives at practice fifteen minutes early.", answer: "invariably" },
        { text: "After the scandal broke, the company's stock began to ___ within hours.", answer: "plummet" },
        { text: "To win the debate, you must explain your points ___, one step at a time.", answer: "logically" },
        { text: "The new teacher's ___ storytelling made even grammar lessons fun.", answer: "engaging" },
        { text: "Athletes must ___ a strict training schedule if they want to stay in shape.", answer: "maintain" }
      ]
    }
  ],


  // ==============================
  // PREFIX PRACTICE
  // MINI LESSON(hypo-) 관련 4지선다 훈련
  // ==============================

  prefixPractice: [

    {
      id: 1,
      relatedWord: "hypo-",
      question: "What does the prefix hypo- mean?",
      choices: [
        "over, above",
        "under, below",
        "against, opposite",
        "again, back"
      ],
      answer: 1,
      explanation: "hypo-는 'under, below(아래, 밑)'를 뜻하는 접두사입니다. 예: hypodermic(피부 아래의)."
    },

    {
      id: 2,
      relatedWord: "hypodermic",
      question: "A hypodermic needle is used to inject medicine...",
      choices: [
        "above the skin's surface only",
        "under the skin",
        "into the air",
        "through the mouth only"
      ],
      answer: 1,
      explanation: "hypo-(아래) + dermic(피부) = 피부 아래로 주사한다는 뜻입니다."
    },

    {
      id: 3,
      relatedWord: "hypothermia",
      question: "In which situation would someone MOST LIKELY develop hypothermia?",
      choices: [
        "Relaxing in a heated indoor pool",
        "Exercising in a warm gym",
        "Being stranded outside in freezing snow for hours",
        "Sitting beside a warm fireplace"
      ],
      answer: 2,
      explanation: "hypothermia는 체온이 정상보다 아래로 떨어지는 상태이므로, 극심한 추위에 오래 노출된 상황이 정답입니다."
    },

    {
      id: 4,
      relatedWord: "hypoallergenic",
      question: "A hypoallergenic pillow is best for someone who...",
      choices: [
        "wants a colorful pillow",
        "has allergies and needs to avoid allergic reactions",
        "wants the softest pillow available",
        "prefers an extra-large pillow"
      ],
      answer: 1,
      explanation: "hypo-(아래, 덜한) + allergenic(알레르기를 일으키는) = 알레르기 반응이 적게 일어나도록 만들어졌다는 뜻입니다."
    },

    {
      id: 5,
      relatedWord: "hypothesis",
      question: "A hypothesis is best described as...",
      choices: [
        "a proven fact everyone accepts",
        "an idea that is still being tested and not yet proven",
        "a joke with no real meaning",
        "a rule that never changes"
      ],
      answer: 1,
      explanation: "hypo-(아래) + thesis(주장, 명제) = 아직 검증 중인, 조사 '아래'에 있는 아이디어라는 뜻입니다."
    },

    {
      id: 6,
      relatedWord: "hypocrisy",
      question: "Hypocrisy means...",
      choices: [
        "always telling the complete truth",
        "pretending to believe something while secretly acting dishonestly",
        "being extremely generous to others",
        "working very hard without resting"
      ],
      answer: 1,
      explanation: "hypocrisy(위선)는 겉으로는 믿는 척하면서 실제로는 다르게 행동하는 것을 뜻합니다."
    }
  ],


  // ==============================
  // MOCK TEST 구성
  // 실제 학원 시험처럼 섹션별 배점을 다르게 구성
  // (질문 자체는 words / contextQuestions / wordBoxSets /
  //  prefixPractice에서 그때그때 뽑아서 사용)
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

window.VOCAB_DATA["vocabulary-workbook"].week01 = WEEK01;

})();