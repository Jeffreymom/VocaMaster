// ==============================
// VOCABULARY WORKBOOK - WEEK 04 DATA
// ----------------------------------------
// IIFE로 감싸서 WEEK01이라는 지역 변수명이 다른 과목/WEEK
// 데이터 파일과 충돌하지 않도록 한다. 외부에서는 항상
// window.VOCAB_DATA["vocabulary-workbook"].week04 로 접근한다.
//
// 참고: 이번 WEEK의 Mini Lesson도 접두사(prefix)가 아니라
// 어근(root) "-cess-"이다 (WEEK03의 -mut- 처리 방식과 동일하게
// prefixLesson 필드를 그대로 사용).
// ==============================

(function () {

const WEEK01 = {
  week: 4,
  title: "WEEK 04",
  totalWords: 15,

  prefixLesson: {
    prefix: "-cess-",
    meaning: "to go",
    examples: [
      {
        word: "necessity",
        partOfSpeech: "noun",
        definition: "something one cannot go without"
      },
      {
        word: "excess",
        partOfSpeech: "noun",
        definition: "an amount that goes beyond what is acceptable or needed"
      },
      {
        word: "success",
        partOfSpeech: "noun",
        definition: "the result of going toward a goal and reaching it"
      },
      {
        word: "recession",
        partOfSpeech: "noun",
        definition: "the act of going backward, especially in the economy"
      },
      {
        word: "access",
        partOfSpeech: "noun",
        definition: "the act of going toward or reaching a place or thing"
      }
    ]
  },

  words: [
    {
      id: 1,
      word: "procession",
      partOfSpeech: "noun",
      meaning: "(특히 의식의 일부로 하는) 행진, 행렬",
      synonym: "line",
      antonym: "",
      definition: "a group going forward in an orderly way, often in a ceremony",
      bookSentence:
        "You can imagine that twenty rats and two mice traveling in procession would cause some comment, and we did not want that.",
      example:
        "The graduation ceremony began with a slow procession of students walking across the stage.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "We watched the procession pass by."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "The whole school lined the hallway to watch the graduation procession walk toward the stage."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "A slow procession of cars followed the funeral hearse down Main Street."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the parade route was announced early, hundreds of people gathered to watch the procession pass through downtown."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though it had started raining heavily, the wedding procession continued down the aisle exactly as planned."
        }
      ]
    },

    {
      id: 2,
      word: "grounds",
      partOfSpeech: "noun",
      meaning: "경내, 구내, 정원",
      synonym: "premises",
      antonym: "",
      definition: "the gardens and land that surround a building and often have a wall or fence around them",
      bookSentence:
        "As we walked, we reached a very high fence of wrought iron . . . surrounding a large estate . . . and well kept grounds and gardens.",
      example:
        "Security guards patrolled the museum grounds to ensure safety for all visitors.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The grounds were beautifully kept."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Every Friday, volunteers help clean up the school grounds after lunch."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "We had a picnic on the grounds behind the old library."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the storm knocked down several trees, workers spent the whole weekend clearing the palace grounds."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the mansion had been abandoned for decades, the grounds were still surprisingly well maintained by a caretaker who lived nearby."
        }
      ]
    },

    {
      id: 3,
      word: "appetite",
      partOfSpeech: "noun",
      meaning: "식욕, 욕구",
      synonym: "hunger",
      antonym: "satiety",
      definition: "a strong desire for something, especially food or knowledge",
      bookSentence:
        "Well, we fell on those books with even more appetite than on the food . . .",
      example:
        "The students had a strong appetite for adventure stories.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "He had a huge appetite."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "After the long hike, the whole class had a huge appetite for lunch."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My little brother's appetite for pizza never seems to fade."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because she skipped breakfast, Mia had an enormous appetite by the time lunch arrived."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the museum tour lasted three hours, the students' appetite for learning about ancient Egypt never seemed to fade."
        }
      ]
    },

    {
      id: 4,
      word: "nerve",
      partOfSpeech: "noun",
      meaning: "용기, 담력",
      synonym: "courage",
      antonym: "cowardice",
      definition: "the confidence necessary to do something difficult, unpleasant, or rude",
      bookSentence:
        "[What worried her most was] the fear that at the last minute she might lose her nerve and bungle it somehow. That could wreck the plans.",
      example:
        "Rebecca had the nerve to interrupt the teacher while he was speaking.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "She had the nerve to speak up."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "It took a lot of nerve for the new student to volunteer to give the first presentation."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "I finally found the nerve to ask my neighbor to turn down the music."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because he had practiced the speech so many times, Daniel finally had the nerve to walk on stage."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the entire board was staring at her, the young intern found the nerve to disagree with the CEO's plan."
        }
      ]
    },

    {
      id: 5,
      word: "intentionally",
      partOfSpeech: "adv.",
      meaning: "고의로",
      synonym: "deliberately",
      antonym: "accidentally",
      definition: "with full awareness of what one is doing",
      bookSentence:
        "But people think we spread diseases, and I suppose we possibly do, though never intentionally . . .",
      example:
        "The chef intentionally added extra spices to the dish to enhance its flavor.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "He intentionally left the door open."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "The teacher intentionally gave a tricky question to see who had really studied."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "I intentionally arrived early so I could get a good seat."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the customer had complained loudly, the waiter intentionally avoided their table for a while."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the mistake looked accidental at first, the investigation revealed that the numbers had been intentionally changed."
        }
      ]
    },

    {
      id: 6,
      word: "versatility",
      partOfSpeech: "noun",
      meaning: "다재다능함, 다양성",
      synonym: "adaptability",
      antonym: "inflexibility",
      definition: "the ability to change easily or to be used for different purposes",
      bookSentence:
        "\"The common rat is highly valued as an experimental animal in medical research due to his toughness, intelligence, versatility and biological similarity to man.\"",
      example:
        "Brian's versatility in music lets him play the piano, the guitar, and the violin.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "Her versatility impressed the coach."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "The coach praised the player's versatility for being able to play defense, midfield, and forward equally well."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "The versatility of this small kitchen tool makes it perfect for chopping, grating, and slicing."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the actor showed such versatility in comedy and drama alike, directors began offering him a wider range of roles."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the new employee had little experience, her versatility across design, writing, and coding quickly made her indispensable to the team."
        }
      ]
    },

    {
      id: 7,
      word: "wilderness",
      partOfSpeech: "noun",
      meaning: "황야, 황무지",
      synonym: "wild area",
      antonym: "civilization",
      definition: "an area of land without farms, towns, or roads, especially because it is difficult to live in",
      bookSentence:
        "And there are plenty of caves, most of them never visited by people—because people aren't allowed to drive into a wilderness preserve.",
      example:
        "The boy scouts learned survival skills during their camping trip in the wilderness.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "They hiked deep into the wilderness."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our geography class studied how wolves survive in the northern wilderness."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My uncle spends every summer camping alone in the wilderness with just a tent and a fishing rod."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the trail had not been maintained in years, the path back into the wilderness was almost impossible to find."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the expedition team carried GPS devices, the sheer size of the wilderness made it easy to lose track of direction."
        }
      ]
    },

    {
      id: 8,
      word: "concealed",
      partOfSpeech: "adj.",
      meaning: "숨겨진, 감춰진",
      synonym: "covered",
      antonym: "exposed",
      definition: "kept hidden or where it cannot easily be seen",
      bookSentence:
        "But then we saw a huge rosebush near the tractor shed, where, with quite a lot of digging, we could put a concealed entrance.",
      example:
        "The concealed treasure was finally found beneath a pile of rocks.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The key was concealed under the mat."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "The teacher found a concealed note passed between two students during the quiz."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My grandmother keeps a small, concealed pocket sewn inside her coat for emergency cash."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the entrance was cleverly concealed behind a bookshelf, most visitors walked right past it without noticing."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the old map looked ordinary at first glance, a concealed compartment beneath the frame held a set of handwritten letters."
        }
      ]
    },

    {
      id: 9,
      word: "pointless",
      partOfSpeech: "adj.",
      meaning: "무의미한, 할 가치가 없는",
      synonym: "meaningless",
      antonym: "significant",
      definition: "having no useful purpose",
      bookSentence:
        ". . . we were stealing more than ever before: not only food, but electricity and water . . . [it] made our life so easy that it seemed pointless.",
      example:
        "Spending hours on a puzzle with missing pieces felt pointless.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The argument felt pointless."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Copying the textbook word for word without understanding it felt completely pointless."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Arguing with my little sister about the TV remote always feels pointless."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the store had already closed for the day, driving all the way there seemed pointless."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the committee spent hours debating the rule, the discussion turned out to be pointless once the event was canceled entirely."
        }
      ]
    },

    {
      id: 10,
      word: "descend",
      partOfSpeech: "verb",
      meaning: "내려오다, 내려가다",
      synonym: "",
      antonym: "rise",
      definition: "to go or come down something",
      bookSentence:
        "Yet that was not true, for as we descended into the valley, a deer suddenly appeared . . .",
      example:
        "Janet descended the stairs in a breathtaking silver gown, like an angel coming down to Earth.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The plane began to descend."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "During the field trip, our group carefully descended the cave's stone steps with flashlights."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "We had to descend carefully along the rocky path to reach the riverbank for our picnic."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because thick fog rolled in, the pilot had to descend more slowly than usual before landing."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the trail was steep and slippery, the experienced hikers descended the mountain safely before the storm arrived."
        }
      ]
    },

    {
      id: 11,
      word: "altered",
      partOfSpeech: "adj.",
      meaning: "바뀐",
      synonym: "modified",
      antonym: "same",
      definition: "changed",
      bookSentence:
        "\". . . we believe that the closer something is to its original state, the less altered or adulterated it is, the more desirable it is,\" [Gladwell] declared.",
      example:
        "The heavy morning rainstorm left us with an altered plan for our outdoor picnic.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The plan was altered at the last minute."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "The field trip schedule was altered after the museum announced it would close early."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My mom altered the recipe slightly by using less sugar than the original called for."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the bridge was closed for repairs, the bus route had to be altered for the rest of the month."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the original design looked impressive, the engineers realized it had to be significantly altered to meet the new safety regulations."
        }
      ]
    },

    {
      id: 12,
      word: "notable",
      partOfSpeech: "adj.",
      meaning: "주목할 만한, 눈에 띄는",
      synonym: "noteworthy",
      antonym: "unimportant",
      definition: "important and deserving attention",
      bookSentence:
        "Tsay found that the biographical information had a notable influence on their judgements.",
      example:
        "Several notable politicians attended the international summit regarding climate change.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "It was a notable achievement."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Several notable scientists visited our school to speak about renewable energy."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "There was a notable improvement in my grandfather's mood after he started taking daily walks."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the young pianist had won three international competitions, critics considered her one of the most notable talents of her generation."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the small startup had almost no funding at first, its notable success within just two years attracted attention from major investors."
        }
      ]
    },

    {
      id: 13,
      word: "commitment",
      partOfSpeech: "noun",
      meaning: "전념, 헌신",
      synonym: "pledge",
      antonym: "",
      definition: "a promise or firm decision to do something",
      bookSentence:
        "Winning requires more than skill; it demands commitment and persistence.",
      example:
        "Adopting a dog requires a serious commitment to daily walks and regular feeding.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "He made a strong commitment."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Joining the debate team requires a real commitment to attending every practice."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Taking care of a garden takes more commitment than most people expect."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the coach doubted the team's commitment, she scheduled extra practices before the tournament."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the volunteer program demanded weekends and holidays, dozens of students still made the commitment to help every year."
        }
      ]
    },

    {
      id: 14,
      word: "prejudice",
      partOfSpeech: "noun",
      meaning: "편견",
      synonym: "bias",
      antonym: "objectivity",
      definition: "an unfair opinion formed without enough knowledge",
      bookSentence:
        "And expertise did little to reduce the prejudice; if anything, the bias was stronger among those with greater entrepreneurial experience . . .",
      example:
        "The lawyer fought against prejudice while defending immigrant workers.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The story was about overcoming prejudice."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our history class discussed how prejudice against certain groups led to unfair laws in the past."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Judging someone's ability to cook just because of where they're from is a form of prejudice."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because of widespread prejudice at the time, many talented workers were denied opportunities they deserved."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the committee claimed to judge every applicant fairly, a closer look at the results revealed a troubling pattern of prejudice."
        }
      ]
    },

    {
      id: 15,
      word: "instinctively",
      partOfSpeech: "adv.",
      meaning: "본능적으로, 직감적으로",
      synonym: "naturally",
      antonym: "unnaturally",
      definition: "in a way that is not thought about, planned, or developed by training",
      bookSentence:
        "They instinctively preferred the person who was naturally popular, compared to the person who had worked hard to build their social skills.",
      example:
        "The hiker instinctively grabbed a branch while slipping on the rocky cliff.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "She instinctively ducked."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "When the fire alarm rang, the students instinctively lined up near the door without being told."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My cat instinctively hides whenever it hears the vacuum cleaner turn on."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the ball flew straight at his face, he instinctively raised his hands to block it."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though she had never been taught CPR, the babysitter instinctively knew to call for help the moment the toddler stopped breathing."
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
      relatedWord: "procession",
      question: "Which situation best shows a procession?",
      choices: [
        "A single car driving alone on an empty highway.",
        "A long line of graduates walking together across the stage in order.",
        "A person sitting quietly in a waiting room.",
        "Two friends chatting on a park bench."
      ],
      answer: 1,
      explanation: "procession(행진, 행렬)은 사람들이 질서 있게 줄지어 앞으로 나아가는 것을 뜻합니다."
    },
    {
      id: 2,
      relatedWord: "procession",
      question: "At a formal wedding, the procession would most likely include...",
      choices: [
        "guests arriving separately at random times throughout the day.",
        "the wedding party walking down the aisle together in a set order.",
        "guests leaving the ceremony all at once in a rush.",
        "a single guest standing alone at the back of the room."
      ],
      answer: 1,
      explanation: "procession은 특정 순서에 따라 질서 있게 이동하는 행렬을 뜻하므로, 신랑신부 일행이 순서대로 입장하는 모습이 알맞습니다."
    },

    {
      id: 3,
      relatedWord: "grounds",
      question: "Which situation describes the grounds of a building?",
      choices: [
        "The paint color used on the walls inside a house.",
        "The gardens and land surrounding a palace, enclosed by a fence.",
        "The furniture placed inside a living room.",
        "The number of floors a building has."
      ],
      answer: 1,
      explanation: "grounds(경내, 구내, 정원)는 건물을 둘러싼 땅과 정원을 뜻합니다."
    },
    {
      id: 4,
      relatedWord: "grounds",
      question: "A security guard patrolling the museum grounds would most likely walk...",
      choices: [
        "only through the hallways inside the museum building.",
        "around the gardens and land surrounding the museum building.",
        "through the museum's underground parking garage only.",
        "inside a single exhibit room all day."
      ],
      answer: 1,
      explanation: "grounds는 건물 주변의 땅과 정원을 의미하므로, 건물 바깥의 부지를 순찰하는 상황이 알맞습니다."
    },

    {
      id: 5,
      relatedWord: "appetite",
      question: "Which situation shows someone with a strong appetite?",
      choices: [
        "Feeling too full to eat another bite after a small snack.",
        "Eating three full plates of food after a long day of hiking.",
        "Refusing to eat anything for an entire day without reason.",
        "Feeling sick at the smell of food."
      ],
      answer: 1,
      explanation: "appetite(식욕, 욕구)는 음식이나 지식 등에 대한 강한 욕구를 뜻합니다."
    },
    {
      id: 6,
      relatedWord: "appetite",
      question: "A student with a strong appetite for knowledge would most likely...",
      choices: [
        "avoid reading books whenever possible.",
        "constantly ask questions and read extra books outside of class.",
        "fall asleep during every lesson.",
        "refuse to learn anything new."
      ],
      answer: 1,
      explanation: "appetite는 음식뿐 아니라 지식에 대한 강한 욕구도 의미할 수 있습니다."
    },

    {
      id: 7,
      relatedWord: "nerve",
      question: "Which situation shows someone with a lot of nerve?",
      choices: [
        "Quietly agreeing with everyone in the room to avoid conflict.",
        "Standing up in a crowded meeting to politely disagree with the boss.",
        "Hiding in the back of the room to avoid being noticed.",
        "Leaving the meeting early without saying anything."
      ],
      answer: 1,
      explanation: "nerve(용기, 담력)는 어렵거나 불편한 일을 해낼 수 있는 배짱을 뜻합니다."
    },
    {
      id: 8,
      relatedWord: "nerve",
      question: "If someone loses their nerve right before a big presentation, they would most likely...",
      choices: [
        "walk on stage feeling more confident than ever.",
        "suddenly feel too afraid to go through with it.",
        "forget the presentation was even happening.",
        "feel calm and relaxed the entire time."
      ],
      answer: 1,
      explanation: "nerve를 잃는다는 것은 용기가 사라져 갑자기 두려움을 느끼게 되는 상황을 뜻합니다."
    },

    {
      id: 9,
      relatedWord: "intentionally",
      question: "Which situation shows something done intentionally?",
      choices: [
        "Accidentally spilling coffee while reaching for the sugar.",
        "Deliberately hiding a gift so a friend won't find it before the party.",
        "Tripping over a rock without seeing it in the dark.",
        "Forgetting where you left your keys."
      ],
      answer: 1,
      explanation: "intentionally(고의로)는 어떤 일을 완전히 인식하고 의도적으로 행하는 것을 뜻합니다."
    },
    {
      id: 10,
      relatedWord: "intentionally",
      question: "If a chef intentionally added extra spice to a dish, that means the chef...",
      choices: [
        "added the spice completely by accident.",
        "added the spice on purpose, fully aware of what they were doing.",
        "never actually added any spice at all.",
        "was confused about which ingredient to use."
      ],
      answer: 1,
      explanation: "intentionally는 어떤 행동을 완전히 의식하고 의도적으로 했다는 뜻입니다."
    },

    {
      id: 11,
      relatedWord: "versatility",
      question: "Which situation best shows versatility?",
      choices: [
        "A musician who can only ever play one single song.",
        "A tool that can be used as a screwdriver, a bottle opener, and a knife.",
        "A chair that can only be used for sitting.",
        "A book that has only one page."
      ],
      answer: 1,
      explanation: "versatility(다재다능함, 다양성)는 다양한 목적으로 쉽게 활용될 수 있는 능력을 뜻합니다."
    },
    {
      id: 12,
      relatedWord: "versatility",
      question: "An actor known for versatility would most likely be praised for...",
      choices: [
        "playing the exact same type of character in every movie.",
        "performing convincingly in comedy, drama, and action roles alike.",
        "refusing to take on any new types of roles.",
        "only appearing in one film during their entire career."
      ],
      answer: 1,
      explanation: "versatility가 뛰어난 배우는 다양한 장르와 배역을 능숙하게 소화할 수 있습니다."
    },

    {
      id: 13,
      relatedWord: "wilderness",
      question: "Which place would most likely be described as wilderness?",
      choices: [
        "A busy shopping street lined with stores.",
        "A vast forest with no roads, towns, or farms for miles.",
        "A crowded downtown intersection.",
        "A neighborhood filled with houses and sidewalks."
      ],
      answer: 1,
      explanation: "wilderness(황야, 황무지)는 농경지나 마을, 도로가 없는 사람이 살기 어려운 지역을 뜻합니다."
    },
    {
      id: 14,
      relatedWord: "wilderness",
      question: "Someone traveling through the wilderness for several days would most likely need to...",
      choices: [
        "rely on nearby restaurants for every meal.",
        "carry their own food, water, and shelter since none are nearby.",
        "take a subway between different stops.",
        "stay in a hotel every night."
      ],
      answer: 1,
      explanation: "wilderness에는 마을이나 시설이 없으므로, 스스로 필요한 물자를 챙겨야 합니다."
    },

    {
      id: 15,
      relatedWord: "concealed",
      question: "Which situation shows something concealed?",
      choices: [
        "A sign posted clearly on the front door for everyone to see.",
        "A secret door hidden behind a bookshelf that most visitors never notice.",
        "A price tag displayed openly on a product.",
        "An announcement read aloud to the whole school."
      ],
      answer: 1,
      explanation: "concealed(숨겨진, 감춰진)는 쉽게 눈에 띄지 않도록 숨겨져 있는 상태를 뜻합니다."
    },
    {
      id: 16,
      relatedWord: "concealed",
      question: "If treasure was concealed beneath a pile of rocks, that means the treasure was...",
      choices: [
        "displayed openly for everyone passing by to see.",
        "hidden in a way that made it hard to notice or find.",
        "placed on top of the rocks in plain sight.",
        "announced publicly before anyone searched for it."
      ],
      answer: 1,
      explanation: "concealed는 쉽게 보이지 않도록 숨겨져 있다는 뜻이므로, 발견하기 어려운 상태를 의미합니다."
    },

    {
      id: 17,
      relatedWord: "pointless",
      question: "Which situation is an example of something pointless?",
      choices: [
        "Studying a little every night before a big exam.",
        "Trying to fix a broken toy with tape when it has no missing parts.",
        "Watering a plant that needs water to survive.",
        "Practicing a song before a big performance."
      ],
      answer: 1,
      explanation: "pointless(무의미한, 할 가치가 없는)는 아무 쓸모나 목적이 없는 상태를 뜻합니다."
    },
    {
      id: 18,
      relatedWord: "pointless",
      question: "If a debate is described as pointless, that most likely means...",
      choices: [
        "it led to a clear, useful decision everyone agreed on.",
        "it achieved nothing useful and wasted everyone's time.",
        "it was extremely important for the group's future.",
        "it changed everyone's opinion for the better."
      ],
      answer: 1,
      explanation: "pointless한 논쟁은 아무 성과 없이 시간만 낭비하는 상황을 뜻합니다."
    },

    {
      id: 19,
      relatedWord: "descend",
      question: "Which situation is an example of descending?",
      choices: [
        "A hiker climbing up toward the mountain's peak.",
        "An elevator moving down from the tenth floor to the first floor.",
        "A kite rising higher into the sky.",
        "A rocket launching straight upward."
      ],
      answer: 1,
      explanation: "descend(내려오다, 내려가다)는 아래로 이동하는 것을 뜻합니다."
    },
    {
      id: 20,
      relatedWord: "descend",
      question: "As an airplane prepares to land, it would most likely...",
      choices: [
        "continue climbing higher into the sky.",
        "begin to descend gradually toward the runway.",
        "stay at exactly the same altitude the whole time.",
        "fly in the opposite direction of the airport."
      ],
      answer: 1,
      explanation: "착륙을 준비하는 비행기는 점차 고도를 낮추며 descend(하강)합니다."
    },

    {
      id: 21,
      relatedWord: "altered",
      question: "Which situation shows something that has been altered?",
      choices: [
        "A recipe followed exactly as it was originally written.",
        "A tailor adjusting a suit's sleeves to fit a customer better.",
        "A photograph left completely untouched.",
        "A song played exactly as it was originally composed."
      ],
      answer: 1,
      explanation: "altered(바뀐)는 원래 상태에서 변경된 것을 뜻합니다."
    },
    {
      id: 22,
      relatedWord: "altered",
      question: "If a company's plans were significantly altered after new information came in, that means the plans were...",
      choices: [
        "kept exactly the same as before.",
        "changed in response to the new information.",
        "canceled and never discussed again.",
        "written for the very first time."
      ],
      answer: 1,
      explanation: "altered는 원래의 계획이 변경되었다는 뜻이므로, 새로운 정보에 맞춰 수정된 상황을 의미합니다."
    },

    {
      id: 23,
      relatedWord: "notable",
      question: "Which achievement would most likely be called notable?",
      choices: [
        "Finishing a normal day at school with nothing unusual happening.",
        "Winning a national championship at just fourteen years old.",
        "Eating a regular breakfast before school.",
        "Walking to a nearby store to buy milk."
      ],
      answer: 1,
      explanation: "notable(주목할 만한)은 특별히 중요하고 관심을 받을 만한 것을 뜻합니다."
    },
    {
      id: 24,
      relatedWord: "notable",
      question: "A notable scientist would most likely be someone who...",
      choices: [
        "has made important discoveries that are widely recognized.",
        "has never published any research.",
        "is completely unknown in their field.",
        "avoids all attention from the public."
      ],
      answer: 1,
      explanation: "notable한 인물은 중요한 업적으로 널리 주목받는 사람을 뜻합니다."
    },

    {
      id: 25,
      relatedWord: "commitment",
      question: "Which situation best shows commitment?",
      choices: [
        "Quitting a team after the very first difficult practice.",
        "Continuing to train every single day, even when it's hard, to reach a goal.",
        "Signing up for a club and never attending a single meeting.",
        "Changing plans constantly with no clear goal in mind."
      ],
      answer: 1,
      explanation: "commitment(전념, 헌신)는 어떤 일을 끝까지 해내겠다는 확고한 결심이나 약속을 뜻합니다."
    },
    {
      id: 26,
      relatedWord: "commitment",
      question: "Adopting a pet requires commitment because the owner must...",
      choices: [
        "care for the animal only when convenient.",
        "consistently provide food, care, and attention for the animal's entire life.",
        "return the animal after a few days if bored.",
        "ignore the animal's needs most of the time."
      ],
      answer: 1,
      explanation: "commitment는 꾸준하고 지속적인 책임을 다하겠다는 다짐을 의미합니다."
    },

    {
      id: 27,
      relatedWord: "prejudice",
      question: "Which situation is an example of prejudice?",
      choices: [
        "Judging a coworker's ability based on their actual job performance.",
        "Assuming someone is unqualified for a job simply because of their age, without any evidence.",
        "Reading a person's résumé carefully before making a decision.",
        "Asking someone thoughtful questions to learn more about them."
      ],
      answer: 1,
      explanation: "prejudice(편견)는 충분한 근거 없이 형성된 불공정한 의견을 뜻합니다."
    },
    {
      id: 28,
      relatedWord: "prejudice",
      question: "A hiring manager who overcomes prejudice would most likely...",
      choices: [
        "judge candidates only on assumptions about their background.",
        "evaluate every candidate fairly, based on their actual skills and experience.",
        "refuse to interview certain groups of people.",
        "make decisions without reading any applications."
      ],
      answer: 1,
      explanation: "prejudice를 극복한다는 것은 근거 없는 편견 대신 실제 능력을 기준으로 판단한다는 뜻입니다."
    },

    {
      id: 29,
      relatedWord: "instinctively",
      question: "Which situation shows someone reacting instinctively?",
      choices: [
        "Carefully planning a response over several days before acting.",
        "Immediately pulling a hand away from a hot stove without thinking.",
        "Following a detailed set of written instructions step by step.",
        "Practicing a routine for months before performing it exactly as planned."
      ],
      answer: 1,
      explanation: "instinctively(본능적으로, 직감적으로)는 생각하거나 계획하지 않고 자연스럽게 반응하는 것을 뜻합니다."
    },
    {
      id: 30,
      relatedWord: "instinctively",
      question: "A baby who instinctively grips a finger placed in its hand is doing so...",
      choices: [
        "because it was carefully taught to do this beforehand.",
        "without any planning or training, simply as a natural reaction.",
        "after thinking carefully about the best way to respond.",
        "because it read detailed instructions on gripping."
      ],
      answer: 1,
      explanation: "instinctively는 훈련이나 계획 없이 자연스럽게 나오는 반응을 뜻합니다."
    }
  ],


  // ==============================
  // WORD BOX SETS
  // Set 1: DEBATE WORDS, Set 2~3: NOVEL WORDS
  // (WEEK01~03과 동일한 방식으로 그룹 구성)
  // ==============================

  wordBoxSets: [

    {
      id: 1,
      words: [
        "altered",
        "notable",
        "commitment",
        "prejudice",
        "instinctively"
      ],
      sentences: [
        { text: "After the flight was delayed, our travel plans had to be ___ at the last minute.", answer: "altered" },
        { text: "Among all the entries, the judges considered her painting the most ___ for its bold use of color.", answer: "notable" },
        { text: "Training for a marathon demands real ___, since skipping even one week can set a runner back.", answer: "commitment" },
        { text: "Despite claiming to be fair, the judge's rulings revealed a clear ___ against smaller companies, since he always assumed they were guilty without knowing any of the facts.", answer: "prejudice" },
        { text: "When the ball flew toward her face, she ___ raised her hands to protect herself.", answer: "instinctively" }
      ]
    },

    {
      id: 2,
      words: [
        "procession",
        "grounds",
        "appetite",
        "nerve",
        "intentionally"
      ],
      sentences: [
        { text: "The whole town lined the streets to watch the holiday ___ pass by with its colorful floats.", answer: "procession" },
        { text: "Visitors are welcome to walk through the palace ___, but the building itself is closed to the public.", answer: "grounds" },
        { text: "After the long swim practice, the whole team had a huge ___ for dinner.", answer: "appetite" },
        { text: "It took a lot of ___ for the shy freshman to raise his hand during the huge assembly.", answer: "nerve" },
        { text: "The prankster ___ set all the clocks in the office ten minutes fast.", answer: "intentionally" }
      ]
    },

    {
      id: 3,
      words: [
        "versatility",
        "wilderness",
        "concealed",
        "pointless",
        "descend"
      ],
      sentences: [
        { text: "The new kitchen gadget's ___ makes it useful for chopping, blending, and even juicing.", answer: "versatility" },
        { text: "The rescue team spent three days searching the remote ___ for the missing hikers.", answer: "wilderness" },
        { text: "The spy kept a tiny microphone ___ inside the lining of his jacket.", answer: "concealed" },
        { text: "Arguing about which flavor was better felt completely ___ once the ice cream had already melted.", answer: "pointless" },
        { text: "Divers must ___ slowly to avoid getting sick from the change in water pressure.", answer: "descend" }
      ]
    }
  ],


  // ==============================
  // PREFIX PRACTICE
  // MINI LESSON(어근 -cess-, "to go") 관련 4지선다 훈련
  // 문항 3/4는 교재에 실제로 나온 확인 문제를 그대로 활용
  // ==============================

  prefixPractice: [

    {
      id: 1,
      relatedWord: "-cess-",
      question: "What does the root -cess- mean?",
      choices: [
        "to stop",
        "to go",
        "to build",
        "to hide"
      ],
      answer: 1,
      explanation: "-cess-는 'to go(가다)'라는 뜻을 가진 어근입니다. 예: access(다가감, 접근)."
    },

    {
      id: 2,
      relatedWord: "necessity",
      question: "Access to clean drinking water is considered a necessity because...",
      choices: [
        "people can easily live without it for years.",
        "it is something people cannot go without in order to survive.",
        "it is a luxury that only wealthy people need.",
        "it has no real effect on daily life."
      ],
      answer: 1,
      explanation: "necessity는 '없어서는 안 될 것'이라는 뜻으로, -cess-(가다) 없이는 살아갈 수 없다는 의미에서 나온 단어입니다."
    },

    {
      id: 3,
      relatedWord: "excess",
      question: "Which of the following MOST LIKELY shows an excess of something?",
      choices: [
        "A traveler packs only the items needed for a short weekend trip.",
        "A runner drinks enough water to stay hydrated during a long race.",
        "A photographer deletes blurry pictures and keeps only the clear ones.",
        "A baker adds too much sugar which goes beyond what the cake needs."
      ],
      answer: 3,
      explanation: "excess는 '적정선을 넘어서는 양'이라는 뜻입니다. 케이크에 필요한 양을 넘어서는 설탕이 바로 그 예입니다."
    },

    {
      id: 4,
      relatedWord: "success",
      question: "When might someone achieve success?",
      choices: [
        "when working hard toward a goal and finally crossing the marathon finish line",
        "when planning to learn how to play the piano someday",
        "when starting a long book but quitting after the first chapter",
        "when watching a friend win a chess tournament from the audience"
      ],
      answer: 0,
      explanation: "success는 '목표를 향해 나아가 그것을 이루어낸 결과'라는 뜻입니다. 목표를 향해 실제로 나아가 완주하는 것이 성공의 예입니다."
    },

    {
      id: 5,
      relatedWord: "recession",
      question: "During an economic recession, a country's economy is most likely to...",
      choices: [
        "grow rapidly with record-high employment.",
        "move backward, with businesses struggling and job losses increasing.",
        "stay perfectly balanced with no changes at all.",
        "instantly recover within a single day."
      ],
      answer: 1,
      explanation: "recession은 '경제가 뒤로 후퇴하는 것'을 뜻합니다. re-(뒤로) + -cess-(가다)."
    },

    {
      id: 6,
      relatedWord: "access",
      question: "If a student has access to the school library, that means the student...",
      choices: [
        "is forbidden from ever entering the library.",
        "is able to go toward and reach the library's books and resources.",
        "has to pay a fee every time to look at a book.",
        "has already read every book in the library."
      ],
      answer: 1,
      explanation: "access는 '어떤 장소나 사물에 다다르거나 이용할 수 있는 것'을 뜻합니다. ac-(~쪽으로) + -cess-(가다)."
    }
  ],


  // ==============================
  // MOCK TEST 구성
  // WEEK01~03과 동일한 섹션 배점 구조
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

window.VOCAB_DATA["vocabulary-workbook"].week04 = WEEK01;

})();
