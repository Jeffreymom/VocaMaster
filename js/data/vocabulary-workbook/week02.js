// ==============================
// VOCABULARY WORKBOOK - WEEK 02 DATA
// ----------------------------------------
// IIFE로 감싸서 WEEK01이라는 지역 변수명이 다른 과목/WEEK
// 데이터 파일과 충돌하지 않도록 한다. 외부에서는 항상
// window.VOCAB_DATA["vocabulary-workbook"].week02 로 접근한다.
//
// 참고: 이번 WEEK의 Mini Lesson은 접두사(prefix)가 아니라
// 접미사(suffix) "-ible"이다. 코드가 지원하는 필드명이
// prefixLesson 하나뿐이라 그대로 이 필드를 사용했다
// (UI 라벨은 여전히 "MINI LESSON · PREFIX"로 표시됨 —
// 접미사 레슨이라는 점은 CLAUDE.md와 작업 보고에 별도 기록).
// ==============================

(function () {

const WEEK01 = {
  week: 2,
  title: "WEEK 02",
  totalWords: 15,

  prefixLesson: {
    prefix: "-ible",
    meaning: "capable of",
    examples: [
      {
        word: "susceptible",
        partOfSpeech: "adj.",
        definition: "capable of being affected or harmed by something"
      },
      {
        word: "repressible",
        partOfSpeech: "adj.",
        definition: "capable of being controlled or held back"
      },
      {
        word: "resistible",
        partOfSpeech: "adj.",
        definition: "capable of being refused or opposed"
      },
      {
        word: "credible",
        partOfSpeech: "adj.",
        definition: "capable of being believed or trusted"
      },
      {
        word: "reversible",
        partOfSpeech: "adj.",
        definition: "capable of being changed back to the original state"
      }
    ]
  },

  words: [
    {
      id: 1,
      word: "surge",
      partOfSpeech: "noun",
      meaning: "급증, 급등",
      synonym: "",
      antonym: "decline",
      definition: "a sudden strong rush or increase",
      bookSentence:
        "Once again [Mrs. Frisby] felt the surge of power as the crow's broad wings beat down against the air ...",
      example:
        "An unexpected surge in electrical power caused the computer to crash.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "There was a surge of energy."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "A surge of students rushed into the cafeteria the moment the bell rang."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "We felt a sudden surge of excitement when the concert tickets went on sale."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "The surge in temperature happened because someone left the oven door open."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the store was quiet all morning, a huge surge of customers arrived right after lunch."
        }
      ]
    },

    {
      id: 2,
      word: "primeval",
      partOfSpeech: "adj.",
      meaning: "태고의, 원시적인",
      synonym: "ancient",
      antonym: "modern",
      definition: "existing at or from a very early time",
      bookSentence:
        "It was a gloomy and primeval spot, deeply shadowed in the grey dusk.",
      example:
        "The mountain range sustains two hundred acres of primeval forest beyond human reach.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The forest looked primeval."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our science teacher showed us pictures of primeval plants that grew millions of years ago."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "The old cave felt primeval, as if no one had entered it in centuries."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "The valley still looks primeval because no roads have ever been built through it."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although modern buildings surrounded the park, the ancient trees at its center still felt strangely primeval."
        }
      ]
    },

    {
      id: 3,
      word: "slither",
      partOfSpeech: "verb",
      meaning: "(매끄럽게) 스르르 나아가다 [기어가다]",
      synonym: "glide",
      antonym: "",
      definition: "to move smoothly while twisting or curving, like a snake",
      bookSentence:
        "Mrs. Frisby gathered her courage, slithered down, and felt the solid wood under her feet ...",
      example:
        "The snake slithered smoothly through the tall grass without making a sound.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The snake began to slither."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "During the nature unit, we watched a video of a lizard slither across a rock."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My little sister screamed when a garden snake began to slither past our feet."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "The rope started to slither off the table because the wind kept pushing it."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the path was narrow, the long snake managed to slither smoothly between the rocks without making a sound."
        }
      ]
    },

    {
      id: 4,
      word: "inevitably",
      partOfSpeech: "adv.",
      meaning: "불가피하게, 아니나 다를까",
      synonym: "unavoidably",
      antonym: "unnecessarily",
      definition: "in a way that cannot be avoided",
      bookSentence:
        "\"Lying where it does, your house will inevitably be turned up by the plough ... There is no feasible way to prevent this.\"",
      example:
        "Brian and Kami never talk about that drama because their conversation will inevitably end in a fight.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "It was inevitably late."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "If you skip every study session, you will inevitably fall behind in class."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Whenever we plan a picnic, it inevitably starts to rain."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because he forgot his umbrella, he inevitably got soaked in the sudden storm."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the team practiced carefully, a few mistakes were inevitably going to happen during their very first performance."
        }
      ]
    },

    {
      id: 5,
      word: "agitated",
      partOfSpeech: "adj.",
      meaning: "불안해하는, 동요된",
      synonym: "anxious",
      antonym: "collected",
      definition:
        "nervous because of worry or fear that is difficult to control",
      bookSentence:
        "Indeed, [the owl] gave an agitated flutter of his wings and half hopped, half flew, closer to her ...",
      example:
        "People became increasingly agitated as they waited for the delayed train.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "She felt agitated."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "The students grew agitated as the fire alarm continued to ring through the hallways."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My dog gets agitated every time thunder rumbles outside."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "He became agitated because he couldn't find his phone anywhere in the house."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although she tried to stay calm during the interview, she grew increasingly agitated as the questions became more difficult."
        }
      ]
    },

    {
      id: 6,
      word: "deference",
      partOfSpeech: "noun",
      meaning: "존중[경의](을 표하는 행동)",
      synonym: "respect",
      antonym: "defiance",
      definition:
        "respect shown for another person, especially because of experience, knowledge, age, or power",
      bookSentence:
        "\"That is not important,\" said the owl, drawing back a little and looking at her in a new way—almost as if with deference.",
      example:
        "The baseball team players showed deference to the captain's decisions and trusted his experience.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "He showed deference."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "New students usually show deference to the older prefects during assembly."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "At family dinners, we show deference to our grandparents by letting them speak first."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the coach had led the team to many championships, the players treated her with great deference."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though he disagreed with the plan, the young engineer spoke with deference when addressing his senior manager."
        }
      ]
    },

    {
      id: 7,
      word: "eavesdrop",
      partOfSpeech: "verb",
      meaning: "엿듣다",
      synonym: "overhear",
      antonym: "",
      definition: "to listen secretly to someone's private conversation",
      bookSentence:
        "Coming silently down the tunnel, [Mrs. Frisby] could hear them talking in the room below, and she paused a moment to eavesdrop on their conversation.",
      example:
        "Daniel called me over to a little side room where no one could eavesdrop on our conversation.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "Please don't eavesdrop."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "A student tried to eavesdrop on the teachers' meeting through the door."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "I didn't mean to eavesdrop, but I could hear my parents talking through the thin wall."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the window was open, we could easily eavesdrop on the neighbors' conversation."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although she knew it was wrong, she couldn't help but eavesdrop when she heard her own name mentioned in the next room."
        }
      ]
    },

    {
      id: 8,
      word: "explicit",
      partOfSpeech: "adj.",
      meaning: "분명한, 명쾌한",
      synonym: "specific",
      antonym: "unclear",
      definition: "communicated directly in a clear and exact way",
      bookSentence:
        "Nicodemus had been friendly—they had all been friendly—but explicit. He said she was to wait in the library.",
      example:
        "The teacher made sure to give explicit instructions on how to complete the science experiment.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "Her directions were explicit."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "The teacher gave explicit instructions about how to format the lab report."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My mom left an explicit note explaining exactly how to reheat the leftovers."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the coach's instructions were so explicit, no player made a mistake during the drill."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the manual was long, the explicit diagrams made it easy to assemble the bookshelf correctly."
        }
      ]
    },

    {
      id: 9,
      word: "incomprehensible",
      partOfSpeech: "adj.",
      meaning: "이해할 수 없는",
      synonym: "confusing",
      antonym: "understandable",
      definition: "not capable of being understood or grasped clearly",
      bookSentence:
        "Mrs. Frisby stared at all this, trying to make head or tail of it, but she could not. It was quite incomprehensible.",
      example:
        "The advanced mathematics problem was incomprehensible to most of the students.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The note was incomprehensible."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "The last question on the test felt completely incomprehensible to most students."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My grandfather's old handwriting is almost incomprehensible to me now."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the instructions were translated poorly, the assembly guide became incomprehensible."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the scientist tried to simplify her explanation, the advanced theory still sounded incomprehensible to the young audience."
        }
      ]
    },

    {
      id: 10,
      word: "sentry",
      partOfSpeech: "noun",
      meaning: "보초[감시](병)",
      synonym: "guard",
      antonym: "",
      definition: "a person or group that watches over someone or something",
      bookSentence:
        "\"We station a sentry to watch [Dragon], and we're free to work.\"",
      example:
        "A sentry stood beside the door of the VIP guest's room at all hours during the royal visit.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "A sentry stood guard."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "During the school play, one student stood like a sentry outside the castle door."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Our dog acts like a sentry, barking at anyone who walks past our gate."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because a sentry was posted at the entrance, no one could sneak into the museum after hours."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even in the freezing cold, the sentry remained at his post all night to protect the castle gate."
        }
      ]
    },

    {
      id: 11,
      word: "acquire",
      partOfSpeech: "verb",
      meaning: "얻다, 획득하다",
      synonym: "obtain",
      antonym: "lose",
      definition: "to get something",
      bookSentence:
        "Because it's universally understood that most people have at least some interest in acquiring a place to live and a means of transport.",
      example:
        "Some art collectors travel internationally to acquire rare artwork.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "She wants to acquire it."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Students can acquire extra credit by finishing the bonus project early."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My brother worked all summer to acquire enough money for a new bike."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because she practiced every day, she was able to acquire excellent piano skills within a year."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the rare coin was expensive, the collector was determined to acquire it for his growing collection."
        }
      ]
    },

    {
      id: 12,
      word: "aspire",
      partOfSpeech: "verb",
      meaning: "열망하다",
      synonym: "desire",
      antonym: "despise",
      definition: "to hope to achieve something",
      bookSentence:
        "But above these necessities that we all aspire for, ... there lie bigger questions about what it means to be alive ...",
      example:
        "Many young athletes aspire to compete professionally after years of training.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "They aspire to succeed."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Many students aspire to become class president one day."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My cousin and I aspire to open our own bakery someday."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because they admired their coach so much, the players began to aspire to become professional athletes themselves."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the competition seemed impossible to win, young violinists across the country continued to aspire toward a spot in the national orchestra."
        }
      ]
    },

    {
      id: 13,
      word: "concept",
      partOfSpeech: "noun",
      meaning: "개념",
      synonym: "notion",
      antonym: "",
      definition: "a principle or idea",
      bookSentence:
        "Fundamental to success is the concept of achievement; success must have a finish line, and in order to be successful you must cross it.",
      example:
        "Ancient philosophers debated the concept of justice through discussions.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "It was a new concept."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our math teacher introduced a new concept called negative numbers."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Recycling is a simple concept that everyone in our family tries to practice."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the concept was explained with a real example, the whole class understood it quickly."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the concept of gravity seems simple, scientists still study it to understand the universe more deeply."
        }
      ]
    },

    {
      id: 14,
      word: "productive",
      partOfSpeech: "adj.",
      meaning: "생산적인",
      synonym: "effective",
      antonym: "unproductive",
      definition: "resulting in a large amount of something",
      bookSentence:
        "They plan and organize their work so as to be as productive as possible.",
      example:
        "The productive factory manufactures thousands of medical supplies daily.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The meeting was productive."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our study group had a productive afternoon and finished the whole worksheet."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Sunday mornings are usually my most productive time for cleaning the house."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because everyone stayed focused, the group project time became extremely productive."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the factory faced several delays, the new schedule eventually made the whole team far more productive than before."
        }
      ]
    },

    {
      id: 15,
      word: "advantaged",
      partOfSpeech: "adj.",
      meaning: "(사회·경제적으로) 혜택받은",
      synonym: "privileged",
      antonym: "disadvantaged",
      definition:
        "having a better standard of living and more opportunities to succeed than others",
      bookSentence:
        "Privileged groups can be advantaged based on education, social class, caste, age, height, weight, nationality, and geographic location ...",
      example:
        "Advantaged children often experience broader educational and cultural opportunities through international travel.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "He was an advantaged student."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Advantaged students sometimes have access to private tutors and extra resources."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Growing up near a great library made me feel advantaged compared to some of my friends."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because his family could afford extra classes, he grew up more advantaged than many of his classmates."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though she came from an advantaged background, she worked hard and never took her opportunities for granted."
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
      relatedWord: "surge",
      question: "Which situation is the best example of a surge?",
      choices: [
        "Sales stayed exactly the same for a whole month.",
        "Website traffic suddenly jumped from 100 visitors to 10,000 in one hour.",
        "The temperature slowly cooled down over several days.",
        "The population decreased steadily over ten years."
      ],
      answer: 1,
      explanation: "surge(급증)는 갑작스럽고 강하게 늘어나는 것을 뜻하므로, 짧은 시간에 크게 치솟은 상황이 정답입니다."
    },
    {
      id: 2,
      relatedWord: "surge",
      question: "A surge of electricity in an old house might cause...",
      choices: [
        "the lights to flicker and appliances to shut off unexpectedly.",
        "the house to become perfectly quiet.",
        "the temperature to drop slowly.",
        "nothing to change at all."
      ],
      answer: 0,
      explanation: "전력의 surge(급증)는 갑작스러운 전류 증가로 기기 오작동이나 정전을 일으킬 수 있습니다."
    },

    {
      id: 3,
      relatedWord: "primeval",
      question: "Which place would most likely be described as primeval?",
      choices: [
        "A shopping mall built last year.",
        "A forest that has existed untouched for millions of years.",
        "A newly paved parking lot.",
        "A modern glass skyscraper."
      ],
      answer: 1,
      explanation: "primeval(태고의)은 아주 오래되고 초기 상태 그대로인 것을 의미하므로, 수백만 년 된 원시림이 정답입니다."
    },
    {
      id: 4,
      relatedWord: "primeval",
      question: "If a scientist studies primeval life forms, she is most likely studying...",
      choices: [
        "the latest smartphone technology.",
        "organisms that lived on Earth a very long time ago.",
        "fashion trends from last year.",
        "modern city planning."
      ],
      answer: 1,
      explanation: "primeval은 아주 이른 시기부터 존재해온 것을 뜻하므로, 먼 과거의 생명체 연구가 정답입니다."
    },

    {
      id: 5,
      relatedWord: "slither",
      question: "Which animal is most likely to slither?",
      choices: [
        "A snake moving across the grass.",
        "A bird flying through the sky.",
        "A rabbit hopping across a field.",
        "A fish swimming in a straight line."
      ],
      answer: 0,
      explanation: "slither는 뱀처럼 몸을 구불구불 움직이며 부드럽게 나아가는 것을 뜻합니다."
    },
    {
      id: 6,
      relatedWord: "slither",
      question: "Which sentence correctly describes something that slithers?",
      choices: [
        "The truck slithered down the highway at full speed.",
        "The rope slithered off the table and onto the floor as the wind blew.",
        "The bird slithered onto its nest.",
        "The child slithered up the stairs."
      ],
      answer: 1,
      explanation: "slither는 매끄럽게 구불구불 움직이는 모습을 뜻하므로, 바람에 밀려 흘러내리는 밧줄이 자연스러운 예입니다."
    },

    {
      id: 7,
      relatedWord: "inevitably",
      question: "If something happens inevitably, that means it...",
      choices: [
        "could easily have been avoided.",
        "was completely impossible to predict.",
        "was certain to happen and could not be prevented.",
        "happened only by pure luck."
      ],
      answer: 2,
      explanation: "inevitably(불가피하게)는 피할 수 없이 반드시 일어나는 것을 뜻합니다."
    },
    {
      id: 8,
      relatedWord: "inevitably",
      question: "Which sentence uses inevitably correctly?",
      choices: [
        "Ignoring a small leak in the roof will inevitably lead to bigger water damage over time.",
        "The weather might inevitably be sunny or rainy tomorrow, we can't be sure.",
        "She inevitably changes her plans every single day for no reason.",
        "They inevitably decided to maybe go to the park."
      ],
      answer: 0,
      explanation: "inevitably는 원인에 따라 피할 수 없이 자연스럽게 이어지는 결과를 표현할 때 씁니다."
    },

    {
      id: 9,
      relatedWord: "agitated",
      question: "Which situation would most likely make someone feel agitated?",
      choices: [
        "Relaxing on a quiet beach with no one around.",
        "Waiting anxiously for exam results that could change your future.",
        "Watching a calm sunset with a friend.",
        "Sleeping peacefully in a comfortable bed."
      ],
      answer: 1,
      explanation: "agitated(동요된)는 걱정이나 불안으로 마음이 흔들리는 상태를 뜻합니다."
    },
    {
      id: 10,
      relatedWord: "agitated",
      question: "A person who is agitated would most likely...",
      choices: [
        "sit calmly and breathe slowly.",
        "pace back and forth while wringing their hands nervously.",
        "fall asleep immediately.",
        "smile and laugh without any worry."
      ],
      answer: 1,
      explanation: "불안하거나 동요된 사람은 안절부절못하며 초조한 행동을 보이는 경우가 많습니다."
    },

    {
      id: 11,
      relatedWord: "deference",
      question: "Treating someone with deference means you...",
      choices: [
        "ignore their opinions completely.",
        "show them respect because of their experience or position.",
        "argue with them constantly.",
        "avoid speaking to them at all."
      ],
      answer: 1,
      explanation: "deference(존중)는 상대방의 경험, 지식, 지위 등을 존중하여 예의를 갖추는 태도를 뜻합니다."
    },
    {
      id: 12,
      relatedWord: "deference",
      question: "Which example best shows deference?",
      choices: [
        "A new employee interrupting the manager during an important meeting.",
        "A young player listening carefully and following the advice of an experienced coach.",
        "A student refusing to follow any classroom rules.",
        "A customer shouting rudely at a store clerk."
      ],
      answer: 1,
      explanation: "경험 많은 사람의 조언을 존중하며 따르는 태도가 deference의 좋은 예입니다."
    },

    {
      id: 13,
      relatedWord: "eavesdrop",
      question: "Which situation is an example of eavesdropping?",
      choices: [
        "Being invited to join a group conversation.",
        "Secretly listening to a conversation you were not part of.",
        "Giving a speech in front of a large audience.",
        "Reading a book quietly in the library."
      ],
      answer: 1,
      explanation: "eavesdrop은 다른 사람의 사적인 대화를 몰래 엿듣는 행동을 뜻합니다."
    },
    {
      id: 14,
      relatedWord: "eavesdrop",
      question: "Why might someone eavesdrop on a conversation?",
      choices: [
        "They were officially invited to join the discussion.",
        "They are curious about something they were not supposed to hear.",
        "They wanted to give a public announcement.",
        "They were asked to record the meeting."
      ],
      answer: 1,
      explanation: "엿듣는(eavesdrop) 행동은 보통 허락받지 않은 상태에서 호기심 때문에 몰래 대화를 듣는 것입니다."
    },

    {
      id: 15,
      relatedWord: "explicit",
      question: "Which instructions are explicit?",
      choices: [
        "\"Maybe do something with the box later.\"",
        "\"Place the box exactly two inches from the wall and tape all four corners.\"",
        "\"Do whatever feels right.\"",
        "\"I don't really know, just guess.\""
      ],
      answer: 1,
      explanation: "explicit(분명한)는 모호함 없이 구체적이고 명확하게 전달된 것을 뜻합니다."
    },
    {
      id: 16,
      relatedWord: "explicit",
      question: "A teacher who gives explicit directions would most likely...",
      choices: [
        "leave students confused about what to do.",
        "clearly explain every step so there is no confusion.",
        "refuse to explain the assignment at all.",
        "speak so quietly that no one can hear."
      ],
      answer: 1,
      explanation: "explicit한 설명은 듣는 사람이 헷갈리지 않도록 정확하고 분명하게 전달됩니다."
    },

    {
      id: 17,
      relatedWord: "incomprehensible",
      question: "If a text message is incomprehensible, that means...",
      choices: [
        "it is easy to understand.",
        "it cannot be understood clearly.",
        "it was sent by a close friend.",
        "it contains a photo."
      ],
      answer: 1,
      explanation: "incomprehensible(이해할 수 없는)은 뜻을 파악하기 어려운 상태를 뜻합니다."
    },
    {
      id: 18,
      relatedWord: "incomprehensible",
      question: "Which situation shows something incomprehensible?",
      choices: [
        "A simple recipe with clear step-by-step pictures.",
        "A legal document full of confusing terms that even adults struggle to understand.",
        "A short note that says \"See you at 5.\"",
        "A clearly labeled map of the city center."
      ],
      answer: 1,
      explanation: "전문 용어로 가득해 이해하기 어려운 문서가 incomprehensible의 대표적인 예입니다."
    },

    {
      id: 19,
      relatedWord: "sentry",
      question: "What is the main job of a sentry?",
      choices: [
        "To cook meals for a group.",
        "To stand watch and guard a place or person.",
        "To repair broken machines.",
        "To teach new soldiers how to read."
      ],
      answer: 1,
      explanation: "sentry(보초)는 어떤 장소나 사람을 지키기 위해 감시하는 역할을 합니다."
    },
    {
      id: 20,
      relatedWord: "sentry",
      question: "Where would you most likely find a sentry on duty?",
      choices: [
        "Sleeping at home in bed.",
        "Standing guard at the gate of a castle or military base.",
        "Watching a movie at the theater.",
        "Relaxing at a birthday party."
      ],
      answer: 1,
      explanation: "sentry는 성문이나 기지 입구처럼 지켜야 할 장소에 배치되어 감시 임무를 수행합니다."
    },

    {
      id: 21,
      relatedWord: "acquire",
      question: "Which situation is an example of acquiring something?",
      choices: [
        "Losing your backpack on the bus.",
        "Buying a rare stamp for your collection.",
        "Throwing away old clothes.",
        "Forgetting where you put your keys."
      ],
      answer: 1,
      explanation: "acquire(얻다, 획득하다)는 무언가를 손에 넣거나 얻는 것을 뜻합니다."
    },
    {
      id: 22,
      relatedWord: "acquire",
      question: "A company that wants to acquire new customers would most likely...",
      choices: [
        "close all of its stores.",
        "run an advertising campaign to attract new buyers.",
        "stop selling its products completely.",
        "ignore all customer feedback."
      ],
      answer: 1,
      explanation: "새로운 고객을 acquire(획득)하려면 광고나 마케팅으로 사람들의 관심을 끌어야 합니다."
    },

    {
      id: 23,
      relatedWord: "aspire",
      question: "If a student aspires to become a doctor, that means the student...",
      choices: [
        "has no interest in medicine at all.",
        "strongly hopes to achieve that goal someday.",
        "has already given up on that dream.",
        "dislikes helping other people."
      ],
      answer: 1,
      explanation: "aspire(열망하다)는 어떤 목표를 진심으로 이루고 싶어 하는 마음을 뜻합니다."
    },
    {
      id: 24,
      relatedWord: "aspire",
      question: "Which sentence shows someone who aspires to something?",
      choices: [
        "\"I really don't care what happens to my future.\"",
        "\"I dream of becoming a professional dancer and I practice every single day.\"",
        "\"I quit the team because I lost interest.\"",
        "\"I never think about my goals.\""
      ],
      answer: 1,
      explanation: "매일 연습하며 목표를 이루고자 하는 간절한 마음이 aspire의 좋은 예입니다."
    },

    {
      id: 25,
      relatedWord: "concept",
      question: "A concept is best described as...",
      choices: [
        "a specific date on a calendar.",
        "a general idea or principle.",
        "a type of fruit.",
        "a piece of furniture."
      ],
      answer: 1,
      explanation: "concept(개념)는 어떤 원리나 생각을 뜻하는 단어입니다."
    },
    {
      id: 26,
      relatedWord: "concept",
      question: "Which of the following is an example of teaching a new concept?",
      choices: [
        "Handing out the same worksheet every day without explanation.",
        "Introducing the idea of gravity for the first time with a simple experiment.",
        "Taking attendance at the start of class.",
        "Collecting homework from students."
      ],
      answer: 1,
      explanation: "새로운 개념(concept)을 가르친다는 것은 새로운 원리나 아이디어를 처음 소개하는 것을 뜻합니다."
    },

    {
      id: 27,
      relatedWord: "productive",
      question: "Which afternoon would be considered the most productive?",
      choices: [
        "Watching TV for four hours and finishing no homework.",
        "Finishing all your homework and cleaning your room in two hours.",
        "Sleeping the entire afternoon.",
        "Staring at your phone without doing anything."
      ],
      answer: 1,
      explanation: "productive(생산적인)는 짧은 시간 안에 많은 것을 이루어내는 것을 뜻합니다."
    },
    {
      id: 28,
      relatedWord: "productive",
      question: "A productive meeting usually results in...",
      choices: [
        "no decisions and wasted time.",
        "clear decisions and a solid plan for next steps.",
        "everyone falling asleep.",
        "an argument with no solution."
      ],
      answer: 1,
      explanation: "생산적인(productive) 회의는 명확한 결정과 다음 계획으로 이어지는 회의를 뜻합니다."
    },

    {
      id: 29,
      relatedWord: "advantaged",
      question: "An advantaged student is most likely someone who...",
      choices: [
        "has fewer opportunities than most other students.",
        "has access to more resources and opportunities than many others.",
        "struggles to afford basic school supplies.",
        "has no access to books or technology."
      ],
      answer: 1,
      explanation: "advantaged(혜택받은)는 다른 사람들보다 더 나은 환경과 기회를 가진 상태를 뜻합니다."
    },
    {
      id: 30,
      relatedWord: "advantaged",
      question: "Which situation best shows an advantaged background?",
      choices: [
        "Growing up without access to a library or the internet.",
        "Growing up with private tutors, travel opportunities, and a well-funded school.",
        "Working multiple jobs to pay for basic needs.",
        "Living far from any school or hospital."
      ],
      answer: 1,
      explanation: "advantaged한 환경은 교육, 자원, 기회 등에서 더 많은 혜택을 받는 상황을 뜻합니다."
    }
  ],


  // ==============================
  // WORD BOX SETS
  // Set 1: DEBATE WORDS, Set 2~3: NOVEL WORDS
  // (WEEK01과 동일한 방식으로 그룹 구성)
  // ==============================

  wordBoxSets: [

    {
      id: 1,
      words: [
        "acquire",
        "aspire",
        "concept",
        "productive",
        "advantaged"
      ],
      sentences: [
        { text: "Many art collectors travel the world hoping to ___ rare paintings for their private galleries.", answer: "acquire" },
        { text: "Since she was a little girl, Mia has always wanted to ___ to become a marine biologist.", answer: "aspire" },
        { text: "Freedom is a difficult ___ to define because it means something different to everyone.", answer: "concept" },
        { text: "The new software update made our whole team much more ___ during busy weeks.", answer: "productive" },
        { text: "Students from ___ families sometimes have access to private tutors and extra study materials.", answer: "advantaged" }
      ]
    },

    {
      id: 2,
      words: [
        "surge",
        "primeval",
        "slither",
        "inevitably",
        "agitated"
      ],
      sentences: [
        { text: "A sudden ___ of shoppers filled the mall on the first day of the holiday sale.", answer: "surge" },
        { text: "Deep inside the cave, the walls looked ___, untouched since the earliest days of the earth.", answer: "primeval" },
        { text: "We watched the garden snake ___ silently through the wet grass after the rain.", answer: "slither" },
        { text: "If you never water a plant, it will ___ wilt and die.", answer: "inevitably" },
        { text: "The puppy became ___ every time fireworks exploded in the night sky.", answer: "agitated" }
      ]
    },

    {
      id: 3,
      words: [
        "deference",
        "eavesdrop",
        "explicit",
        "incomprehensible",
        "sentry"
      ],
      sentences: [
        { text: "The young intern spoke with great ___ whenever the company's founder entered the room.", answer: "deference" },
        { text: "I didn't mean to ___, but the walls in our old apartment are so thin I can hear everything.", answer: "eavesdrop" },
        { text: "The recipe gave ___ measurements for every ingredient, so nothing was left to guesswork.", answer: "explicit" },
        { text: "Without a translator, the ancient scroll remained completely ___ to the museum visitors.", answer: "incomprehensible" },
        { text: "A lone ___ stood watch at the palace gate throughout the entire freezing night.", answer: "sentry" }
      ]
    }
  ],


  // ==============================
  // PREFIX PRACTICE
  // MINI LESSON(-ible, "capable of") 관련 4지선다 훈련
  // 문항 6/2는 교재에 실제로 나온 확인 문제를 그대로 활용
  // ==============================

  prefixPractice: [

    {
      id: 1,
      relatedWord: "-ible",
      question: "What does the suffix -ible mean?",
      choices: [
        "over, above",
        "capable of, able to be",
        "before, in front of",
        "against, opposite"
      ],
      answer: 1,
      explanation: "-ible는 'capable of(~할 수 있는)'이라는 뜻을 더하는 접미사입니다. 예: credible(믿을 수 있는)."
    },

    {
      id: 2,
      relatedWord: "susceptible",
      question: "A patient who is susceptible to infection is...",
      choices: [
        "highly capable of resisting infection",
        "not capable of guarding well against infection",
        "capable of curing infections instantly",
        "completely unaffected by any illness"
      ],
      answer: 1,
      explanation: "susceptible(영향받기 쉬운)은 해로운 것에 쉽게 영향받을 수 있다는 뜻이므로, 감염에 취약하다는 의미입니다."
    },

    {
      id: 3,
      relatedWord: "repressible",
      question: "A repressible feeling or urge is one that...",
      choices: [
        "cannot be controlled no matter what",
        "can be held back or controlled",
        "always grows stronger over time",
        "has no effect on behavior"
      ],
      answer: 1,
      explanation: "repressible은 '억누르거나 통제할 수 있는'이라는 뜻으로, repress(억누르다) + -ible(capable of)입니다."
    },

    {
      id: 4,
      relatedWord: "resistible",
      question: "If a temptation is resistible, that means a person...",
      choices: [
        "cannot possibly say no to it",
        "is able to refuse or resist it",
        "will always give in immediately",
        "has never heard of it before"
      ],
      answer: 1,
      explanation: "resistible은 '거부하거나 저항할 수 있는'이라는 뜻입니다. resist(저항하다) + -ible(capable of)."
    },

    {
      id: 5,
      relatedWord: "credible",
      question: "A credible witness in court is someone whose story is...",
      choices: [
        "impossible to believe",
        "believable and trustworthy",
        "completely made up",
        "always changing"
      ],
      answer: 1,
      explanation: "credible은 '믿을 수 있는'이라는 뜻으로, credit(믿음) + -ible(capable of)에서 나온 단어입니다."
    },

    {
      id: 6,
      relatedWord: "reversible",
      question: "Which fact explains why the melting of ice cubes is a reversible change?",
      choices: [
        "Water in a frozen state is called ice.",
        "Water is able to be frozen back into ice.",
        "Water conforms to the shape of its container.",
        "Water evaporates into a gas called water vapor."
      ],
      answer: 1,
      explanation: "reversible은 '원래 상태로 되돌릴 수 있는'이라는 뜻입니다. 얼음이 녹아 물이 되어도 다시 얼릴 수 있으므로 reversible한 변화입니다."
    }
  ],


  // ==============================
  // MOCK TEST 구성
  // WEEK01과 동일한 섹션 배점 구조
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

window.VOCAB_DATA["vocabulary-workbook"].week02 = WEEK01;

})();
