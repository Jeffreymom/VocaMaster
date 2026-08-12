// ==============================
// VOCABULARY WORKBOOK - WEEK 09 DATA
// ----------------------------------------
// IIFE로 감싸서 WEEK01이라는 지역 변수명이 다른 과목/WEEK
// 데이터 파일과 충돌하지 않도록 한다. 외부에서는 항상
// window.VOCAB_DATA["vocabulary-workbook"].week09 로 접근한다.
//
// 참고: NOVEL WORDS는 WEEK07~08에 이어 계속
// Nathaniel Hawthorne의 "Tanglewood Tales" 중
// "The Gorgon's Head"(Perseus 신화)에서 발췌했다.
// Mini Lesson도 계속 접두사(prefix) "mal-"이다.
// ==============================

(function () {

const WEEK01 = {
  week: 9,
  title: "WEEK 09",
  totalWords: 15,

  prefixLesson: {
    prefix: "mal-",
    meaning: "bad, wrongful",
    examples: [
      {
        word: "malpractice",
        partOfSpeech: "noun",
        definition: "an injurious, wrongful, or improper medical practice"
      },
      {
        word: "malfunction",
        partOfSpeech: "verb",
        definition: "to function imperfectly or badly"
      },
      {
        word: "malodorous",
        partOfSpeech: "adj.",
        definition: "having a bad odor"
      },
      {
        word: "malnourished",
        partOfSpeech: "adj.",
        definition: "weak and in bad health because of a lack of food"
      },
      {
        word: "malign",
        partOfSpeech: "verb",
        definition: "to say wrongful things about someone or something that are not true"
      }
    ]
  },

  words: [
    {
      id: 1,
      word: "buoyant",
      partOfSpeech: "adj.",
      meaning: "(물에) 떠 있는[뜰 수 있는], 부력이 있는",
      synonym: "afloat",
      antonym: "sinking",
      definition: "able to float or rise easily in water or air",
      bookSentence:
        "When Perseus had got on both of these wonderful slippers, he was altogether too buoyant to tread on earth.",
      example:
        "Anna wore a life jacket that kept her buoyant while she practiced swimming.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The raft was light and buoyant."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our science class tested which materials were buoyant enough to float in water."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "The pool noodle kept me buoyant while I practiced floating on my back."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the wood was so light and dry, the small boat stayed remarkably buoyant even when overloaded."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the ship's hull had been damaged, air trapped inside several sealed compartments kept it buoyant long enough for everyone to escape."
        }
      ]
    },

    {
      id: 2,
      word: "sprightliness",
      partOfSpeech: "noun",
      meaning: "명랑함, 활기",
      synonym: "liveliness",
      antonym: "lethargy",
      definition: "the quality of being energetic and in good health",
      bookSentence:
        "Perseus, a beautiful young man, with golden ringlets and rosy cheeks . . . a figure that seemed all made up of courage, sprightliness, and glorious light.",
      example:
        "The puppy's sprightliness made everyone smile as it bounced around the yard.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "Her sprightliness surprised everyone."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Despite being the oldest player on the team, the coach admired her sprightliness during every practice."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My grandfather's sprightliness on his morning walks always amazes the neighbors."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because she had slept well and eaten a good breakfast, Mia moved through her morning chores with unusual sprightliness."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although he was recovering from a long illness, the old sailor greeted us with such sprightliness that we almost forgot he had been sick at all."
        }
      ]
    },

    {
      id: 3,
      word: "dexterity",
      partOfSpeech: "noun",
      meaning: "재주, 민첩함",
      synonym: "agility",
      antonym: "clumsiness",
      definition: "the ability to perform a difficult action quickly and skillfully",
      bookSentence:
        "\"Follow me, therefore, and we will try your dexterity in using the winged slippers.\"",
      example:
        "Developing dexterity in video games requires practice and quick reflexes.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The chef sliced vegetables with dexterity."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our art teacher praised the student's dexterity in handling such delicate paintbrushes."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "It takes real dexterity to fold a fitted sheet neatly."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because years of practice had sharpened her dexterity, the surgeon completed the delicate operation in record time."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the antique clock's gears were incredibly small, the watchmaker's dexterity allowed her to repair every piece without a single mistake."
        }
      ]
    },

    {
      id: 4,
      word: "ascend",
      partOfSpeech: "verb",
      meaning: "오르다, 올라가다",
      synonym: "rise",
      antonym: "descend",
      definition: "to move up or climb something",
      bookSentence:
        "By the time they had ascended a few hundred feet, the young man began to feel what a delightful thing it was to leave the dull earth so far beneath him . . .",
      example:
        "Climbers need experience and determination to ascend to the summit of the mountain.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The elevator began to ascend."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our class watched a video of climbers slowly ascending the icy mountain."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "I had to ascend six flights of stairs because the elevator was broken."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the trail grew steeper near the summit, the hikers had to ascend more slowly than before."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though thick clouds blocked most of the view, the pilots carefully ascended through the storm until they finally broke into clear sky."
        }
      ]
    },

    {
      id: 5,
      word: "tumultuously",
      partOfSpeech: "adv.",
      meaning: "시끄럽게, 몹시 흐트러져",
      synonym: "chaotically",
      antonym: "serenely",
      definition: "in a way that is very loud or full of confusion",
      bookSentence:
        "Far beneath them, the waves tossed themselves tumultuously in mid-sea . . .",
      example:
        "The students rushed tumultuously into the cafeteria after the lunch bell rang.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The crowd cheered tumultuously."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "The gym erupted tumultuously the moment the buzzer sounded and the team won the championship."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My little cousins burst tumultuously into the kitchen the second they smelled cookies baking."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the referee's call seemed so unfair, the stadium reacted tumultuously within seconds."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although security tried to keep order, fans tumultuously flooded the field the moment the final whistle blew."
        }
      ]
    },

    {
      id: 6,
      word: "malice",
      partOfSpeech: "noun",
      meaning: "악의, 적의",
      synonym: "hatred",
      antonym: "kindness",
      definition: "the intention to do something bad, especially to cause injury",
      bookSentence:
        "There they sat . . . while all the snakes on their heads reared themselves on end with surprise, and with venomous malice against they knew not what.",
      example:
        "Superheroes fight villains who are driven by malice and a desire for power.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "He acted without malice."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our teacher explained that the prank crossed a line because it seemed to come from malice rather than fun."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "I don't think she meant any malice by the comment; she was probably just tired."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the note was written with clear malice, the school took the threat seriously and involved the principal."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the rumor caused real damage to his reputation, investigators eventually concluded it had spread through carelessness rather than actual malice."
        }
      ]
    },

    {
      id: 7,
      word: "brandish",
      partOfSpeech: "verb",
      meaning: "(특히 무기를) 휘두르다",
      synonym: "swing",
      antonym: "put down",
      definition: "to shake or wave something, such as a weapon, menacingly",
      bookSentence:
        "No sooner were the Gorgons broad awake than they hurtled upward into the air, brandishing their brass talons, gnashing their horrible tusks . . .",
      example:
        "Esther brandished a saucepan at me, so I ran out of the kitchen.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The actor brandished a fake sword."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "In the school play, the villain brandished a plastic dagger to frighten the hero."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My uncle jokingly brandished the spatula whenever someone tried to steal food from the grill."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the guard dog suddenly appeared, the intruder panicked and brandished a flashlight as if it were a weapon."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the knight was clearly outnumbered, he brandished his sword fearlessly and refused to back away from the battle."
        }
      ]
    },

    {
      id: 8,
      word: "perpendicular",
      partOfSpeech: "adj.",
      meaning: "직각의, 수직적인",
      synonym: "vertical",
      antonym: "horizontal",
      definition: "at a right angle; straight up from a surface",
      bookSentence:
        ". . . the Gorgons knew not in what direction to follow him; nor did he fail to make the best use of the winged slippers, by soaring upward a perpendicular mile or so.",
      example:
        "The flagpole remained perpendicular to the ground and perfectly straight despite the violent wind.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The wall is perpendicular to the floor."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our geometry teacher asked us to draw a line perpendicular to the base of the triangle."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "I used a level to make sure the bookshelf stood perfectly perpendicular to the ground."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the foundation had shifted slightly, the fence was no longer perfectly perpendicular to the street."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the cliff looked nearly perpendicular from a distance, the climbers discovered small ledges that made the ascent surprisingly manageable."
        }
      ]
    },

    {
      id: 9,
      word: "vagabond",
      partOfSpeech: "noun",
      meaning: "방랑자",
      synonym: "nomad",
      antonym: "",
      definition: "a person who wanders from place to place without a fixed home",
      bookSentence:
        ". . . came a great multitude of good-for-nothing vagabonds, all of whom, out of pure love of mischief, would have been glad if Perseus had met with some ill-hap in his encounter with the Gorgons.",
      example:
        "The old man told stories of his adventures as a vagabond traveling across the country.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The vagabond slept beneath the bridge."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our literature class read a poem about a cheerful vagabond who traveled the countryside with nothing but a walking stick."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My uncle jokes that he lived like a vagabond during his backpacking trip through Europe."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because he had lost his job and his home in the same month, the man became a vagabond, drifting from town to town."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the old vagabond owned almost nothing, he seemed happier and more at peace than anyone else in the crowded city."
        }
      ]
    },

    {
      id: 10,
      word: "genial",
      partOfSpeech: "adj.",
      meaning: "온화한",
      synonym: "mild",
      antonym: "harsh",
      definition: "pleasantly warm or mild",
      bookSentence:
        "Over all this scene there was a genial sunshine, intermingled with a slight haze, which made it unspeakably soft and tender.",
      example:
        "Despite the forecast for severe winds, the day brought a genial breeze that was perfect for a stroll.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The weather was genial and sunny."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our class picnic was blessed with a genial afternoon, perfect for sitting outside."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "I love the genial breeze that drifts through the window on early autumn mornings."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the storm had finally passed, the following week brought unusually genial weather for the whole region."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though forecasters had predicted a harsh winter, the region experienced an unusually genial season with barely any snow at all."
        }
      ]
    },

    {
      id: 11,
      word: "justify",
      partOfSpeech: "verb",
      meaning: "옳음[타당함]을 보여 주다",
      synonym: "support",
      antonym: "condemn",
      definition: "to give good reason for",
      bookSentence:
        "Any action can be justified within utilitarianism if it creates more 'good' than another action. Utilitarianism . . . comes under the broader sphere of 'consequentialism.'",
      example:
        "The bakery tried to justify the higher cost of bread by citing rising material costs.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "She tried to justify her decision."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our teacher asked us to justify our answers using evidence from the text."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "I couldn't justify buying another pair of shoes when I already own so many."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the budget was tight, the manager had to justify every single expense to the board."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the company insisted the price increase was justified by rising costs, many customers remained unconvinced by the explanation."
        }
      ]
    },

    {
      id: 12,
      word: "violation",
      partOfSpeech: "noun",
      meaning: "(법·합의 등을) 위반",
      synonym: "breach",
      antonym: "compliance",
      definition: "an action against something, especially a law, agreement, or principle",
      bookSentence:
        "The real violation of rights in this situation is the action of changing the course of the train. The single person on the track is in no immediate danger.",
      example:
        "The restaurant closed because health inspectors reported severe health violations.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The driver was fined for a violation."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Copying someone else's essay word for word is a serious violation of academic honesty."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Parking in front of a fire hydrant is a violation that can result in a costly ticket."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the factory ignored safety regulations for years, inspectors eventually discovered dozens of violations."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the company claimed the incident was a simple oversight, investigators later revealed it was a deliberate violation of environmental law."
        }
      ]
    },

    {
      id: 13,
      word: "despite",
      partOfSpeech: "prep.",
      meaning: "…에도 불구하고",
      synonym: "in spite of",
      antonym: "",
      definition: "without being influenced by",
      bookSentence:
        "Therefore it is clear that our feelings can change despite the principle staying the same.",
      example:
        "The delivery driver brought our pizza within 20 minutes despite the heavy city traffic.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "Despite the rain, we went hiking."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Despite studying all night, I still felt nervous walking into the exam."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Despite the traffic, we managed to arrive at the party right on time."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the coach believed in the team's potential, she kept training them despite their long losing streak."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Despite facing repeated rejection from publishers for nearly a decade, the author refused to give up on her manuscript."
        }
      ]
    },

    {
      id: 14,
      word: "cope with",
      partOfSpeech: "phr. verb",
      meaning: "…에 대처하다, …을 극복하다",
      synonym: "manage",
      antonym: "",
      definition: "to deal with a difficult situation",
      bookSentence:
        "One must still cope with the fact that one could have saved the five lives. Post-traumatic stress disorder can be brought on by experience with horrific death . . .",
      example:
        "Elderly farmers learned to cope with unpredictable weather patterns affecting crops.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "She learned to cope with stress."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our counselor taught us strategies to cope with exam anxiety."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Deep breathing helps me cope with frustration when I'm stuck in traffic."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the company was losing money quickly, employees had to cope with sudden and stressful changes."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the diagnosis was frightening at first, the family found the strength to cope with the illness together, one day at a time."
        }
      ]
    },

    {
      id: 15,
      word: "ethical",
      partOfSpeech: "adj.",
      meaning: "윤리적인, 도덕에 관계된",
      synonym: "principled",
      antonym: "unethical",
      definition: "relating to beliefs about what is morally right and wrong",
      bookSentence:
        "The law, unlike ethical philosophy, deals with individual rights and interests.",
      example:
        "Ethical concerns emerged after reporters exposed dishonest advertising targeting children.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The scientist faced an ethical question."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our philosophy class debated the ethical implications of artificial intelligence."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Choosing not to lie, even when it would be easier, felt like the ethical choice."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the experiment raised serious ethical concerns, the university review board rejected the proposal."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the loophole was technically legal, most employees agreed that exploiting it would not be an ethical decision."
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
      relatedWord: "buoyant",
      question: "Which situation shows something buoyant?",
      choices: [
        "A stone sinking straight to the bottom of a pond.",
        "A beach ball floating easily on top of the water.",
        "An anchor dragging a boat downward.",
        "A brick dropped into a swimming pool."
      ],
      answer: 1,
      explanation: "buoyant((물에) 떠 있는[뜰 수 있는], 부력이 있는)는 물이나 공기 중에서 쉽게 뜨는 성질을 뜻합니다."
    },
    {
      id: 2,
      relatedWord: "buoyant",
      question: "A life jacket is designed to be buoyant so that it can...",
      choices: [
        "pull a swimmer underwater.",
        "keep a person floating at the surface of the water.",
        "make a person heavier in water.",
        "sink quickly to the bottom."
      ],
      answer: 1,
      explanation: "buoyant한 물체는 물에 쉽게 뜨므로, 구명조끼가 사람을 물 위에 뜨게 해줍니다."
    },

    {
      id: 3,
      relatedWord: "sprightliness",
      question: "Which situation shows sprightliness?",
      choices: [
        "An elderly man moving slowly and complaining of exhaustion.",
        "A child bouncing energetically around the playground all afternoon.",
        "A patient resting quietly in a hospital bed.",
        "A tired dog sleeping through the entire day."
      ],
      answer: 1,
      explanation: "sprightliness(명랑함, 활기)는 에너지 넘치고 건강한 상태를 뜻합니다."
    },
    {
      id: 4,
      relatedWord: "sprightliness",
      question: "A grandmother known for her sprightliness would most likely...",
      choices: [
        "spend all day resting without moving at all.",
        "go for brisk walks and dance energetically at family parties.",
        "avoid any kind of physical activity.",
        "complain about being too tired to do anything."
      ],
      answer: 1,
      explanation: "sprightliness는 활기차고 에너지 넘치는 태도를 뜻합니다."
    },

    {
      id: 5,
      relatedWord: "dexterity",
      question: "Which situation shows dexterity?",
      choices: [
        "Fumbling clumsily while trying to tie a knot.",
        "A pianist's fingers moving swiftly and skillfully across the keys.",
        "Dropping objects repeatedly by accident.",
        "Struggling to open a simple jar."
      ],
      answer: 1,
      explanation: "dexterity(재주, 민첩함)는 어려운 동작을 빠르고 능숙하게 해내는 능력을 뜻합니다."
    },
    {
      id: 6,
      relatedWord: "dexterity",
      question: "A surgeon known for great dexterity would most likely be praised for...",
      choices: [
        "clumsy and careless hand movements.",
        "precise, skillful, and quick hand movements during surgery.",
        "refusing to perform delicate operations.",
        "working extremely slowly and hesitantly."
      ],
      answer: 1,
      explanation: "dexterity가 뛰어난 사람은 정교하고 빠른 손동작을 보입니다."
    },

    {
      id: 7,
      relatedWord: "ascend",
      question: "Which situation is an example of ascending?",
      choices: [
        "A submarine diving deeper into the ocean.",
        "A hiker climbing steadily toward the mountain's peak.",
        "A ball rolling down a hill.",
        "An elevator going down to the basement."
      ],
      answer: 1,
      explanation: "ascend(오르다, 올라가다)는 위로 움직이거나 오르는 것을 뜻합니다."
    },
    {
      id: 8,
      relatedWord: "ascend",
      question: "As a hot air balloon begins to ascend, passengers would most likely notice...",
      choices: [
        "the ground getting closer and closer.",
        "the ground getting farther away below them.",
        "the balloon staying at exactly the same height.",
        "the balloon sinking into the ground."
      ],
      answer: 1,
      explanation: "ascend는 위로 올라가는 것을 뜻하므로, 지면이 점점 멀어지는 것을 느끼게 됩니다."
    },

    {
      id: 9,
      relatedWord: "tumultuously",
      question: "Which situation shows something happening tumultuously?",
      choices: [
        "A library where everyone reads in complete silence.",
        "A stadium erupting in loud, chaotic celebration after a last-second win.",
        "A quiet walk through an empty park.",
        "A calm meeting where everyone speaks one at a time."
      ],
      answer: 1,
      explanation: "tumultuously(시끄럽게, 몹시 흐트러져)는 매우 시끄럽거나 혼란스러운 상태를 뜻합니다."
    },
    {
      id: 10,
      relatedWord: "tumultuously",
      question: "If a crowd reacted tumultuously to an announcement, that means the crowd...",
      choices: [
        "remained completely silent and calm.",
        "burst into loud, chaotic noise and excitement.",
        "quietly left the room one by one.",
        "showed no reaction whatsoever."
      ],
      answer: 1,
      explanation: "tumultuously는 시끄럽고 혼란스러운 반응을 나타냅니다."
    },

    {
      id: 11,
      relatedWord: "malice",
      question: "Which situation shows malice?",
      choices: [
        "Helping a stranger carry heavy groceries.",
        "Deliberately spreading a lie to ruin someone's reputation.",
        "Complimenting a coworker's hard work.",
        "Sharing your lunch with a hungry friend."
      ],
      answer: 1,
      explanation: "malice(악의, 적의)는 해를 끼치려는 나쁜 의도를 뜻합니다."
    },
    {
      id: 12,
      relatedWord: "malice",
      question: "If a crime was committed with malice, that means the person acted...",
      choices: [
        "by complete accident with no bad intention.",
        "with a deliberate intention to cause harm.",
        "out of kindness and good will.",
        "without any awareness of their actions."
      ],
      answer: 1,
      explanation: "malice는 해를 끼치려는 고의적인 의도를 뜻합니다."
    },

    {
      id: 13,
      relatedWord: "brandish",
      question: "Which situation is an example of brandishing something?",
      choices: [
        "Quietly placing a knife down on the counter.",
        "Angrily waving a baseball bat at someone during an argument.",
        "Politely handing someone a pair of scissors.",
        "Carefully storing a tool in a toolbox."
      ],
      answer: 1,
      explanation: "brandish((특히 무기를) 휘두르다)는 무언가를 위협적으로 흔들거나 휘두르는 것을 뜻합니다."
    },
    {
      id: 14,
      relatedWord: "brandish",
      question: "If a robber brandished a weapon during the crime, witnesses would most likely say the robber...",
      choices: [
        "kept the weapon hidden the entire time.",
        "waved the weapon threateningly for everyone to see.",
        "never actually had a weapon at all.",
        "handed the weapon over peacefully."
      ],
      answer: 1,
      explanation: "brandish는 위협적으로 무언가를 흔들어 보이는 행동을 뜻합니다."
    },

    {
      id: 15,
      relatedWord: "perpendicular",
      question: "Which situation shows two perpendicular lines?",
      choices: [
        "Two lines running parallel to each other, never touching.",
        "Two lines crossing to form a perfect right angle.",
        "Two lines that curve gently away from each other.",
        "Two lines overlapping completely."
      ],
      answer: 1,
      explanation: "perpendicular(직각의, 수직적인)는 직각을 이루며 표면에서 곧게 뻗은 상태를 뜻합니다."
    },
    {
      id: 16,
      relatedWord: "perpendicular",
      question: "A wall built perpendicular to the floor should stand...",
      choices: [
        "leaning heavily to one side.",
        "straight up, forming a right angle with the floor.",
        "lying flat on the ground.",
        "tilted at a random angle."
      ],
      answer: 1,
      explanation: "perpendicular는 바닥과 직각을 이루며 곧게 서 있는 상태를 뜻합니다."
    },

    {
      id: 17,
      relatedWord: "vagabond",
      question: "Which situation describes a vagabond?",
      choices: [
        "A person who has lived in the same house for forty years.",
        "A person who wanders from town to town with no permanent home.",
        "A person who owns three different houses.",
        "A person who never leaves their neighborhood."
      ],
      answer: 1,
      explanation: "vagabond(방랑자)는 정해진 집 없이 이곳저곳을 떠도는 사람을 뜻합니다."
    },
    {
      id: 18,
      relatedWord: "vagabond",
      question: "A story about a vagabond would most likely follow a character who...",
      choices: [
        "stays permanently settled in one city his entire life.",
        "travels constantly from place to place with no fixed home.",
        "works the same office job every day for decades.",
        "never leaves his childhood bedroom."
      ],
      answer: 1,
      explanation: "vagabond는 정착하지 않고 계속 떠도는 사람을 뜻합니다."
    },

    {
      id: 19,
      relatedWord: "genial",
      question: "Which situation describes genial weather?",
      choices: [
        "A freezing blizzard with dangerous winds.",
        "A pleasantly warm, mild afternoon perfect for a picnic.",
        "A scorching heat wave with extreme temperatures.",
        "A violent thunderstorm with heavy rain."
      ],
      answer: 1,
      explanation: "genial(온화한)은 기분 좋게 따뜻하거나 온화한 상태를 뜻합니다."
    },
    {
      id: 20,
      relatedWord: "genial",
      question: "A genial host at a party would most likely make guests feel...",
      choices: [
        "unwelcome and uncomfortable.",
        "warmly welcomed and at ease.",
        "ignored the entire evening.",
        "nervous and unwelcome."
      ],
      answer: 1,
      explanation: "genial한 태도는 상대방을 따뜻하고 편안하게 대하는 것을 뜻합니다."
    },

    {
      id: 21,
      relatedWord: "justify",
      question: "Which situation is an example of justifying a decision?",
      choices: [
        "Refusing to explain any reasoning at all.",
        "Providing clear reasons for why a rule was necessary.",
        "Making a choice completely at random.",
        "Ignoring every question about a decision."
      ],
      answer: 1,
      explanation: "justify(옳음[타당함]을 보여 주다)는 어떤 것에 대한 타당한 이유를 제시하는 것을 뜻합니다."
    },
    {
      id: 22,
      relatedWord: "justify",
      question: "If a company tried to justify a price increase, it would most likely...",
      choices: [
        "refuse to give any explanation to customers.",
        "explain the specific reasons behind the higher price, such as rising costs.",
        "lower the price instead.",
        "ignore customer questions entirely."
      ],
      answer: 1,
      explanation: "justify는 결정에 대한 합당한 근거를 설명하는 것을 뜻합니다."
    },

    {
      id: 23,
      relatedWord: "violation",
      question: "Which situation is an example of a violation?",
      choices: [
        "Following every traffic law carefully while driving.",
        "Driving through a red light despite the clear warning signal.",
        "Coming to a complete stop at a stop sign.",
        "Wearing a seatbelt during the entire drive."
      ],
      answer: 1,
      explanation: "violation((법·합의 등을) 위반)은 법, 합의, 원칙 등을 어기는 행동을 뜻합니다."
    },
    {
      id: 24,
      relatedWord: "violation",
      question: "If health inspectors reported several violations at a restaurant, that most likely means the restaurant...",
      choices: [
        "followed every single health regulation perfectly.",
        "broke several important health and safety rules.",
        "had no rules to follow at all.",
        "received a perfect inspection score."
      ],
      answer: 1,
      explanation: "violation은 규칙이나 법을 어긴 상태를 뜻합니다."
    },

    {
      id: 25,
      relatedWord: "despite",
      question: "Which sentence correctly uses despite?",
      choices: [
        "Despite the heavy rain, the game continued as scheduled.",
        "Despite it rained heavily, the game continued.",
        "The game continued, despite because of the rain.",
        "Despite of the rain, the game continued."
      ],
      answer: 0,
      explanation: "despite(…에도 불구하고)는 뒤에 명사(구)가 오는 전치사입니다."
    },
    {
      id: 26,
      relatedWord: "despite",
      question: "If she passed the exam despite being sick, that means she...",
      choices: [
        "passed only because she was sick.",
        "passed even though being sick could have affected her.",
        "failed because of her illness.",
        "was not sick at all during the exam."
      ],
      answer: 1,
      explanation: "despite는 어떤 영향에도 불구하고 결과가 달라지지 않았다는 것을 나타냅니다."
    },

    {
      id: 27,
      relatedWord: "cope with",
      question: "Which situation shows someone coping with a difficult situation?",
      choices: [
        "Ignoring a problem completely and hoping it disappears.",
        "Finding healthy ways to manage stress during a hard week.",
        "Refusing to acknowledge that a problem exists.",
        "Giving up immediately without trying anything."
      ],
      answer: 1,
      explanation: "cope with(…에 대처하다, …을 극복하다)는 어려운 상황을 잘 다루어 나가는 것을 뜻합니다."
    },
    {
      id: 28,
      relatedWord: "cope with",
      question: "A counselor helping students cope with exam stress would most likely teach them to...",
      choices: [
        "ignore their stress completely.",
        "use breathing exercises and time management to manage their stress.",
        "avoid studying altogether.",
        "panic whenever stress appears."
      ],
      answer: 1,
      explanation: "cope with는 어려운 상황을 효과적으로 다루는 방법을 뜻합니다."
    },

    {
      id: 29,
      relatedWord: "ethical",
      question: "Which situation raises an ethical question?",
      choices: [
        "Choosing what color shirt to wear today.",
        "Deciding whether it's right to use someone's private information without permission.",
        "Picking a flavor of ice cream.",
        "Choosing which route to take to school."
      ],
      answer: 1,
      explanation: "ethical(윤리적인, 도덕에 관계된)은 옳고 그름에 대한 믿음과 관련된 것을 뜻합니다."
    },
    {
      id: 30,
      relatedWord: "ethical",
      question: "A company that makes ethical business decisions would most likely...",
      choices: [
        "ignore the impact of its actions on workers and customers.",
        "consider fairness and honesty when making important decisions.",
        "prioritize profit over everything else, no matter the harm caused.",
        "deceive customers whenever it's profitable."
      ],
      answer: 1,
      explanation: "ethical한 결정은 공정성과 정직함을 고려하여 이루어집니다."
    }
  ],


  // ==============================
  // WORD BOX SETS
  // Set 1: DEBATE WORDS, Set 2~3: NOVEL WORDS
  // (WEEK01~08과 동일한 방식으로 그룹 구성)
  // ==============================

  wordBoxSets: [

    {
      id: 1,
      words: [
        "justify",
        "violation",
        "despite",
        "cope with",
        "ethical"
      ],
      sentences: [
        { text: "The company struggled to ___ the sudden layoffs to its confused employees.", answer: "justify" },
        { text: "Parking in a handicapped spot without a permit is considered a serious ___.", answer: "violation" },
        { text: "___ months of careful preparation, the launch was delayed by a last-minute technical issue.", answer: "despite" },
        { text: "Support groups can help patients ___ the emotional stress of a difficult diagnosis.", answer: "cope with" },
        { text: "Before publishing the story, the reporter considered whether revealing the source's name was ___.", answer: "ethical" }
      ]
    },

    {
      id: 2,
      words: [
        "buoyant",
        "sprightliness",
        "dexterity",
        "ascend",
        "tumultuously"
      ],
      sentences: [
        { text: "The inflatable raft stayed ___ even after three people climbed aboard.", answer: "buoyant" },
        { text: "Despite being well past eighty, she greeted every guest with remarkable ___.", answer: "sprightliness" },
        { text: "Years of practice gave the seamstress incredible ___ with a needle and thread.", answer: "dexterity" },
        { text: "The climbers began to ___ the final ridge just as the sun was rising.", answer: "ascend" },
        { text: "The waiting room erupted ___ the moment the results were finally announced.", answer: "tumultuously" }
      ]
    },

    {
      id: 3,
      words: [
        "malice",
        "brandish",
        "perpendicular",
        "vagabond",
        "genial"
      ],
      sentences: [
        { text: "Investigators found no evidence of ___ behind the accident — it was simply a tragic mistake.", answer: "malice" },
        { text: "The actor had to ___ a wooden sword convincingly during the sword-fighting scene.", answer: "brandish" },
        { text: "The carpenter used a square tool to make sure the shelf was perfectly ___ to the wall.", answer: "perpendicular" },
        { text: "In the old ballad, the ___ wandered from village to village, singing for his supper.", answer: "vagabond" },
        { text: "Even in December, the coastal town enjoyed a surprisingly ___ climate.", answer: "genial" }
      ]
    }
  ],


  // ==============================
  // PREFIX PRACTICE
  // MINI LESSON(접두사 mal-, "bad, wrongful") 관련 4지선다 훈련
  // 문항 5/6는 교재에 실제로 나온 확인 문제를 그대로 활용
  // ==============================

  prefixPractice: [

    {
      id: 1,
      relatedWord: "mal-",
      question: "What does the prefix mal- mean?",
      choices: [
        "good, helpful",
        "bad, wrongful",
        "large, great",
        "early, before"
      ],
      answer: 1,
      explanation: "mal-는 'bad, wrongful(나쁜, 잘못된)'이라는 뜻을 더하는 접두사입니다. 예: malice(악의)."
    },

    {
      id: 2,
      relatedWord: "malpractice",
      question: "A doctor who is sued for malpractice is most likely accused of...",
      choices: [
        "providing excellent, careful treatment.",
        "providing improper or harmful medical care.",
        "refusing to see any patients.",
        "following every safety guideline perfectly."
      ],
      answer: 1,
      explanation: "malpractice는 '잘못되거나 부적절한 의료 행위'를 뜻합니다. mal-(bad) + practice."
    },

    {
      id: 3,
      relatedWord: "malfunction",
      question: "If a smoke detector malfunctions during a fire, that means the device...",
      choices: [
        "works perfectly and alerts everyone immediately.",
        "fails to work properly when it is needed most.",
        "is brand new and just installed.",
        "was never turned on in the first place."
      ],
      answer: 1,
      explanation: "malfunction은 '제대로 작동하지 않다'라는 뜻입니다. mal-(bad) + function."
    },

    {
      id: 4,
      relatedWord: "malodorous",
      question: "A malodorous gym bag left in a hot car for a week would most likely...",
      choices: [
        "smell fresh and pleasant.",
        "have a very bad, unpleasant smell.",
        "have no smell whatsoever.",
        "smell like fresh flowers."
      ],
      answer: 1,
      explanation: "malodorous는 '악취가 나는'이라는 뜻입니다. mal-(bad) + odorous(냄새가 나는)."
    },

    {
      id: 5,
      relatedWord: "malign",
      question: "If you malign a restaurant, that means you . . .",
      choices: [
        "say wrongful things to ruin the restaurant's reputation",
        "feel sick after eating bad, spoiled food",
        "continue visiting the restaurant even though it serves bad meals",
        "write an honest review describing the restaurant's bad service"
      ],
      answer: 0,
      explanation: "malign은 '사실이 아닌 나쁜 말을 하여 명예를 훼손하다'라는 뜻입니다. mal-(wrongful) + ign(말하다)."
    },

    {
      id: 6,
      relatedWord: "malnourished",
      question: "A malnourished person is someone who has . . .",
      choices: [
        "poor health due to a lack of sunlight",
        "bad health due to a lack of proper nutrition",
        "good health due to a proper diet",
        "great health due to regular exercise"
      ],
      answer: 1,
      explanation: "malnourished는 '영양 부족으로 건강이 나쁜'이라는 뜻입니다. mal-(bad) + nourished(영양이 공급된)."
    }
  ],


  // ==============================
  // MOCK TEST 구성
  // WEEK01~08과 동일한 섹션 배점 구조
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

window.VOCAB_DATA["vocabulary-workbook"].week09 = WEEK01;

})();
