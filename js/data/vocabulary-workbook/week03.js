// ==============================
// VOCABULARY WORKBOOK - WEEK 03 DATA
// ----------------------------------------
// IIFE로 감싸서 WEEK01이라는 지역 변수명이 다른 과목/WEEK
// 데이터 파일과 충돌하지 않도록 한다. 외부에서는 항상
// window.VOCAB_DATA["vocabulary-workbook"].week03 으로 접근한다.
//
// 참고: 이번 WEEK의 Mini Lesson은 접두사(prefix)가 아니라
// 어근(root) "-mut-"이다. 코드가 지원하는 필드명이
// prefixLesson 하나뿐이라 그대로 이 필드를 사용했다
// (WEEK02의 접미사 -ible 처리 방식과 동일).
// ==============================

(function () {

const WEEK01 = {
  week: 3,
  title: "WEEK 03",
  totalWords: 15,

  prefixLesson: {
    prefix: "-mut-",
    meaning: "change",
    examples: [
      {
        word: "mutable",
        partOfSpeech: "adj.",
        definition: "able or likely to change"
      },
      {
        word: "commutable",
        partOfSpeech: "adj.",
        definition: "subject to change, especially in terms of exchange or substitution"
      },
      {
        word: "permute",
        partOfSpeech: "verb",
        definition: "to change the order or arrangement of"
      },
      {
        word: "transmute",
        partOfSpeech: "verb",
        definition: "to change from one form or condition to another"
      },
      {
        word: "mutant",
        partOfSpeech: "noun",
        definition: "an organism that is different from others of its type because of a permanent change in its genes"
      }
    ]
  },

  words: [
    {
      id: 1,
      word: "contritely",
      partOfSpeech: "adv.",
      meaning: "깊이 뉘우치며, 미안해하며",
      synonym: "apologetically",
      antonym: "remorselessly",
      definition: "in a way that shows regret and guilt for something bad one has done",
      bookSentence:
        "\"... if Mr. Ages and I go get the powder ...\" \"With this leg,\" said Mr. Ages glumly, \"that will take long enough to tell it twice.\" \"I had forgotten,\" said Justin contritely.",
      example:
        "Jane apologized contritely after posting an insensitive comment online.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "He apologized contritely."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Ben apologized contritely to his teacher for turning in the assignment late."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "She spoke contritely after accidentally breaking her sister's favorite mug."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because he had forgotten his friend's birthday, Leo apologized contritely the next morning."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the mistake was not entirely his fault, the team captain still apologized contritely to every player after the loss."
        }
      ]
    },

    {
      id: 2,
      word: "entranced",
      partOfSpeech: "adj.",
      meaning: "황홀해진, 넋을 잃은",
      synonym: "enchanted",
      antonym: "bored",
      definition: "holding the complete interest and attention of someone",
      bookSentence:
        "... from this box came the soft sound of music. [Mrs. Frisby] listened entranced.",
      example:
        "The crowd was entranced as fireworks lit up the sky and reflected on the river's waters.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The kids were entranced by the puppet show."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "The students sat entranced as the guest astronaut described her trip to space."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "I stood entranced in front of the aquarium, watching the glowing jellyfish drift by."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the storyteller's voice was so soft and rhythmic, the whole class grew entranced within minutes."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the museum was crowded and noisy, the little girl remained entranced by the dinosaur skeleton for almost an hour."
        }
      ]
    },

    {
      id: 3,
      word: "inextricably",
      partOfSpeech: "adv.",
      meaning: "떼어낼 수 없게",
      synonym: "inseparably",
      antonym: "",
      definition: "in a way that is unable to be separated, released, or escaped from",
      bookSentence:
        "No, I was firmly and inextricably caught, snared in the net and helpless. (Nicodemus continued).",
      example:
        "The bear cried out as its paw was inextricably caught in a hunter's trap.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The two stories are inextricably linked."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our science teacher explained how climate and ocean currents are inextricably connected."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My love of cooking is inextricably tied to the memories of baking with my grandmother."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the two companies shared the same factory, their futures became inextricably linked."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the twins now live in different countries, their childhood memories remain inextricably tangled together."
        }
      ]
    },

    {
      id: 4,
      word: "gnaw",
      partOfSpeech: "verb",
      meaning: "갉아먹다, 물어뜯다",
      synonym: "nibble",
      antonym: "restore",
      definition: "to chew something repeatedly, usually making a hole in it or gradually destroying it",
      bookSentence:
        "I tried gnawing my way out, but the strands were made of some kind of plastic, as hard as wire.",
      example:
        "My dog gnawed through his favorite toy so quickly that I had to buy him a new one!",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The mouse began to gnaw the rope."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "During the science demonstration, we watched a video of beavers gnawing through a tree trunk."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Our puppy loves to gnaw on his rubber bone every evening."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the squirrel could not reach the nuts, it started to gnaw a hole through the wooden box."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the leather strap looked too tough to break, the determined puppy managed to gnaw through it in a single afternoon."
        }
      ]
    },

    {
      id: 5,
      word: "futile",
      partOfSpeech: "adj.",
      meaning: "헛된, 소용없는",
      synonym: "unsuccessful",
      antonym: "effective",
      definition: "having no effect or achieving nothing",
      bookSentence:
        "A few of the rats snarled and tried to bite; I did not, and neither did Jenner; it was too obviously futile.",
      example:
        "It is completely futile trying to reason with her uncle because he will not listen.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "His efforts were futile."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "It felt futile to keep raising our hands when the teacher never called on us."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Trying to fold a fitted sheet neatly always feels futile to me."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the storm had already flooded the basement, pumping out the water seemed futile."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the coach knew a comeback was nearly futile with only two minutes left, the team refused to give up."
        }
      ]
    },

    {
      id: 6,
      word: "injection",
      partOfSpeech: "noun",
      meaning: "(액체의) 주입",
      synonym: "shot",
      antonym: "",
      definition: "the act of putting a liquid, especially a medicine, into a person's body using a needle and a small tube or syringe",
      bookSentence:
        "\"They get no injections at all—except, to keep the test exactly even, we will prick them with a plain needle.\"",
      example:
        "Most patients find that the numbness from the injection wears off after about an hour.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The nurse gave him an injection."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our health class watched a video explaining how a flu injection works."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My arm was sore for a day after getting my annual flu injection."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the wound was at risk of infection, the doctor recommended a tetanus injection."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though she was afraid of needles, the young patient stayed calm through the entire injection thanks to the nurse's gentle explanation."
        }
      ]
    },

    {
      id: 7,
      word: "captivity",
      partOfSpeech: "noun",
      meaning: "감금, 억류",
      synonym: "imprisonment",
      antonym: "liberation",
      definition: "the situation in which a person or animal is kept somewhere and is not allowed to leave",
      bookSentence:
        "During the days that followed, our lives fell into a pattern, and the reason for our captivity gradually became clear.",
      example:
        "Animals bred in captivity often struggle to survive when released into the wild.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The tiger was born in captivity."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "In social studies, we discussed how prisoners of war endured long periods of captivity."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Watching the parrot pace inside its small cage, I couldn't help but feel sad about its captivity."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the panda had spent its whole life in captivity, zookeepers worried it would struggle if released."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the dolphin had been rescued after years of captivity, it took months of careful training before it could safely return to the open ocean."
        }
      ]
    },

    {
      id: 8,
      word: "illusion",
      partOfSpeech: "noun",
      meaning: "환상, 환각",
      synonym: "hallucination",
      antonym: "truth",
      definition: "something that is not really what it seems to be",
      bookSentence:
        "When you've lived in a cage, you can't bear not to run, even if what you're running towards is an illusion.",
      example:
        "The magician created the illusion of making a rabbit disappear.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "It was just an illusion."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "In art class, we learned how shading creates the illusion of depth on a flat page."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "The mirrors in the small apartment created an illusion of extra space."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the desert heat bent the light near the road, drivers often mistook the illusion for real water ahead."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the painting looked like a real window at first glance, it was actually just a clever illusion created with paint and shadow."
        }
      ]
    },

    {
      id: 9,
      word: "mutation",
      partOfSpeech: "noun",
      meaning: "(형태·구조상의) 변화[변형]",
      synonym: "modification",
      antonym: "",
      definition: "a permanent change in an organism, or the changed organism itself",
      bookSentence:
        "... since it is DNA, we may very well have a true mutation, a brand new species of rat.",
      example:
        "The plant's unusual color was due to a rare genetic mutation that fascinated scientists.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The mutation was rare."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "In biology class, we learned how a single genetic mutation can change an organism's eye color."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "The unusual white stripe on our cat's fur turned out to be a harmless mutation."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the bacteria multiplied so quickly, a random mutation appeared within just a few generations."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although most mutations have little effect, scientists discovered that this particular mutation gave the plant unusual resistance to drought."
        }
      ]
    },

    {
      id: 10,
      word: "pry",
      partOfSpeech: "verb",
      meaning: "비집다, 비집어 열다",
      synonym: "yank",
      antonym: "install",
      definition: "to raise, move, or pull apart with a lever",
      bookSentence:
        "\"Push the screwdriver through the wire near the bottom,\" [the white mouse] said, \"and pry up.\"",
      example:
        "Sarah tried to pry open the lid of the locked box to see what was inside.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "He tried to pry the door open."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "In shop class, we learned to safely pry the lid off a paint can with a flat tool."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "I used a butter knife to pry the stuck drawer open."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the window was painted shut, my dad had to pry it open with a screwdriver."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the old chest was rusted shut, the workers carefully managed to pry it open without damaging the antique wood inside."
        }
      ]
    },

    {
      id: 11,
      word: "strategy",
      partOfSpeech: "noun",
      meaning: "계획, 전략",
      synonym: "method",
      antonym: "",
      definition: "a detailed plan for achieving success",
      bookSentence:
        "My approach to leadership uses proven strategies based on effort, not just talent. My work helps clients face tough challenges with . . .",
      example:
        "The restaurant owner developed a strategy to significantly increase profit.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "She has a good strategy."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our debate team practiced a new strategy for responding quickly to counterarguments."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My strategy for grocery shopping is to always eat a snack beforehand so I don't overspend."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the first plan failed, the coach quickly adjusted the team's strategy at halftime."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although their opponents were much taller, the small team's clever passing strategy allowed them to win the championship."
        }
      ]
    },

    {
      id: 12,
      word: "surpass",
      partOfSpeech: "verb",
      meaning: "능가하다, 뛰어넘다",
      synonym: "exceed",
      antonym: "",
      definition: "to be better than",
      bookSentence:
        "My work highlights why effort and grit surpass talent every time. My story shows how consistent determination creates real progress . . .",
      example:
        "The new phone model surpassed the older version in processing power and battery life.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "Her score surpassed everyone's expectations."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "This year's science fair projects surpassed last year's in both creativity and quality."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My little brother's height has already surpassed mine, even though he's three years younger."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the team trained twice as hard this season, they were able to surpass their rivals in the final match."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the young violinist had only played for two years, her skill soon surpassed that of musicians who had studied for a decade."
        }
      ]
    },

    {
      id: 13,
      word: "respond to",
      partOfSpeech: "phr. verb",
      meaning: "…에 대응하다",
      synonym: "react to",
      antonym: "",
      definition: "to say or do something as a reaction to something",
      bookSentence:
        "While we might not always welcome these difficulties, we always have the power to choose how we respond to them.",
      example:
        "Rescue helicopters responded to reports of stranded hikers.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "She didn't respond to my message."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Students were asked to respond to the essay prompt within thirty minutes."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My dog immediately responds to the sound of the treat bag opening."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the smoke alarm went off, everyone in the building responded to the emergency drill within seconds."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the customer's complaint was unfair, the manager calmly responded to it with patience and a genuine apology."
        }
      ]
    },

    {
      id: 14,
      word: "class",
      partOfSpeech: "noun",
      meaning: "계층",
      synonym: "social group",
      antonym: "",
      definition: "a group of people within society who have the same economic and social position",
      bookSentence:
        "\"Young people . . . from the working class, or low income who are talented when they are young . . . don't make it to the finish line,\" Carnevale said.",
      example:
        "Middle-class families often live in modest but comfortable homes.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "They belong to the same social class."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our sociology teacher explained how social class can affect access to education."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Many families in the working class juggle more than one job to make ends meet."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because factory jobs became scarce, many working-class families struggled financially during that decade."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though she grew up in a lower economic class, her scholarship allowed her to attend the same university as students from wealthier backgrounds."
        }
      ]
    },

    {
      id: 15,
      word: "assessment",
      partOfSpeech: "noun",
      meaning: "평가",
      synonym: "evaluation",
      antonym: "",
      definition: "the act of judging the amount, value, quality, or importance of something",
      bookSentence:
        "Tsay found the same kind of judgements that she had seen in the assessments of musical ability.",
      example:
        "Dr. Duren performed a thorough assessment of the patient's injury before recommending surgery.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The teacher gave a fair assessment."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "At the end of the unit, students complete a written assessment to show what they've learned."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My dentist's assessment showed that I need to floss more carefully."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the bridge showed signs of rust, engineers conducted a full assessment before allowing traffic to cross again."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the coach's assessment of the rookie player seemed harsh at first, it turned out to be an accurate prediction of his early struggles."
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
      relatedWord: "contritely",
      question: "Which sentence shows someone speaking contritely?",
      choices: [
        "\"I don't care what happened, it's not my problem.\"",
        "\"I'm so sorry — it was completely my fault, and I feel terrible about it.\"",
        "\"Whatever, I'll do it again if I want to.\"",
        "\"You should be the one apologizing to me!\""
      ],
      answer: 1,
      explanation: "contritely(깊이 뉘우치며)는 자신의 잘못을 진심으로 후회하며 사과하는 태도를 뜻합니다."
    },
    {
      id: 2,
      relatedWord: "contritely",
      question: "A student who broke a classmate's tablet and spoke contritely to them would most likely...",
      choices: [
        "blame the classmate for leaving it on the desk.",
        "apologize sincerely and offer to help pay for the repair.",
        "ignore the classmate and walk away.",
        "laugh about the accident with friends."
      ],
      answer: 1,
      explanation: "contritely는 죄책감을 느끼며 진심으로 사과하는 태도이므로, 책임지고 사과하는 행동이 알맞습니다."
    },

    {
      id: 3,
      relatedWord: "entranced",
      question: "Which situation best shows someone who is entranced?",
      choices: [
        "A viewer who keeps checking their phone during a movie.",
        "A child who cannot look away from a mesmerizing magic trick.",
        "A student who falls asleep during a lecture.",
        "A shopper who quickly walks past a store window."
      ],
      answer: 1,
      explanation: "entranced(황홀해진, 넋을 잃은)는 무언가에 완전히 마음을 빼앗겨 집중하는 상태를 뜻합니다."
    },
    {
      id: 4,
      relatedWord: "entranced",
      question: "If an audience watched a performance entranced, they most likely...",
      choices: [
        "talked loudly among themselves the whole time.",
        "stayed completely silent and focused, unable to look away.",
        "left the theater before it ended.",
        "fell asleep in their seats."
      ],
      answer: 1,
      explanation: "entranced 상태의 관객은 공연에 완전히 몰입해 시선을 뗄 수 없는 모습을 보입니다."
    },

    {
      id: 5,
      relatedWord: "inextricably",
      question: "If two things are inextricably connected, that means they...",
      choices: [
        "have absolutely nothing to do with each other.",
        "are so closely linked that they cannot be separated.",
        "were once connected but are now completely apart.",
        "might be connected, but no one is sure."
      ],
      answer: 1,
      explanation: "inextricably(떼어낼 수 없게)는 서로 뗄 수 없을 만큼 긴밀하게 얽혀 있는 상태를 뜻합니다."
    },
    {
      id: 6,
      relatedWord: "inextricably",
      question: "Which example best shows two things being inextricably linked?",
      choices: [
        "A pencil and an eraser that are sold separately.",
        "A river and the wetlands that depend entirely on its water to survive.",
        "Two strangers who happened to sit next to each other once.",
        "Two songs from completely different genres."
      ],
      answer: 1,
      explanation: "생태계처럼 서로의 존재가 완전히 의존하며 얽혀 있는 관계가 inextricably의 좋은 예입니다."
    },

    {
      id: 7,
      relatedWord: "gnaw",
      question: "Which action is an example of gnawing?",
      choices: [
        "A bird gently pecking at a seed.",
        "A beaver repeatedly biting through a tree trunk with its teeth.",
        "A fish gliding silently through water.",
        "A cat licking its paw."
      ],
      answer: 1,
      explanation: "gnaw(갉아먹다, 물어뜯다)는 이빨로 반복해서 물어뜯어 구멍을 내거나 서서히 훼손하는 행동을 뜻합니다."
    },
    {
      id: 8,
      relatedWord: "gnaw",
      question: "If mice have been gnawing on the wires in a house, the homeowner should expect to find...",
      choices: [
        "neatly cut wires with clean edges.",
        "wires with small, ragged bite marks and holes.",
        "wires that look brand new.",
        "no damage at all."
      ],
      answer: 1,
      explanation: "gnaw는 반복적으로 물어뜯어 표면을 거칠게 훼손하므로, 들쭉날쭉한 이빨 자국과 구멍이 남는 것이 자연스럽습니다."
    },

    {
      id: 9,
      relatedWord: "futile",
      question: "Which situation best describes a futile effort?",
      choices: [
        "Studying a little every day and slowly improving your grade.",
        "Trying to empty a sinking boat with a small cup while it keeps filling with water.",
        "Practicing a new skill until it becomes easy.",
        "Saving a small amount of money each week."
      ],
      answer: 1,
      explanation: "futile(헛된, 소용없는)는 아무리 애써도 효과가 없거나 성과를 얻지 못하는 상황을 뜻합니다."
    },
    {
      id: 10,
      relatedWord: "futile",
      question: "If a plan is described as futile, that means it is...",
      choices: [
        "very likely to succeed.",
        "certain to achieve nothing, no matter how hard people try.",
        "guaranteed to work perfectly.",
        "only slightly less effective than expected."
      ],
      answer: 1,
      explanation: "futile한 계획은 아무리 노력해도 성과를 내지 못하는 계획을 뜻합니다."
    },

    {
      id: 11,
      relatedWord: "injection",
      question: "Which situation describes an injection?",
      choices: [
        "Swallowing a pill with a glass of water.",
        "A nurse using a needle to put medicine directly into a patient's arm.",
        "Rubbing cream onto a sore muscle.",
        "Breathing in medicine through an inhaler."
      ],
      answer: 1,
      explanation: "injection(주입)은 바늘과 주사기를 이용해 액체를 몸에 직접 넣는 것을 뜻합니다."
    },
    {
      id: 12,
      relatedWord: "injection",
      question: "Why might a doctor recommend an injection instead of a pill?",
      choices: [
        "Because injections always taste better than pills.",
        "Because an injection can deliver medicine into the body more quickly and directly.",
        "Because injections are always completely painless.",
        "Because pills always work faster than injections."
      ],
      answer: 1,
      explanation: "주사(injection)는 약물을 몸속에 직접, 그리고 비교적 빠르게 전달할 수 있는 방법입니다."
    },

    {
      id: 13,
      relatedWord: "captivity",
      question: "Which situation is an example of captivity?",
      choices: [
        "A wild deer running freely through a forest.",
        "A bird kept permanently inside a small cage and never allowed outside.",
        "A dog playing in an open backyard.",
        "A fish swimming freely in the ocean."
      ],
      answer: 1,
      explanation: "captivity(감금, 억류)는 사람이나 동물이 어딘가에 갇혀 자유롭게 떠날 수 없는 상태를 뜻합니다."
    },
    {
      id: 14,
      relatedWord: "captivity",
      question: "Animals raised in captivity, compared to those raised in the wild, usually...",
      choices: [
        "have identical survival skills to wild animals.",
        "may struggle with hunting or surviving if released into the wild.",
        "are always released back into nature immediately.",
        "never depend on humans for food."
      ],
      answer: 1,
      explanation: "captivity 속에서 자란 동물은 야생 생존 기술을 충분히 익히지 못해 방사 시 어려움을 겪을 수 있습니다."
    },

    {
      id: 15,
      relatedWord: "illusion",
      question: "Which example best describes an illusion?",
      choices: [
        "A math equation with one clear, correct answer.",
        "A drawing that tricks the eye into seeing a staircase that goes nowhere.",
        "A real photograph of a mountain.",
        "A weather report based on scientific data."
      ],
      answer: 1,
      explanation: "illusion(환상, 환각)은 실제와 다르게 보이거나 착각을 일으키는 것을 뜻합니다."
    },
    {
      id: 16,
      relatedWord: "illusion",
      question: "A magician creating the illusion of sawing a person in half means the audience...",
      choices: [
        "actually witnesses a real injury.",
        "is tricked into believing something that isn't really happening.",
        "understands exactly how the trick works.",
        "sees nothing unusual at all."
      ],
      answer: 1,
      explanation: "마술사가 만든 illusion은 실제로 일어나지 않은 일을 마치 사실처럼 착각하게 만드는 것입니다."
    },

    {
      id: 17,
      relatedWord: "mutation",
      question: "Which situation is an example of a mutation?",
      choices: [
        "A plant grows taller after receiving more sunlight.",
        "A rare change in an animal's genes gives it an unusual eye color never seen before in its species.",
        "A puppy learns a new trick after training.",
        "A student improves a grade after studying harder."
      ],
      answer: 1,
      explanation: "mutation(변화, 변형)은 유전자에 생긴 영구적인 변화를 뜻합니다."
    },
    {
      id: 18,
      relatedWord: "mutation",
      question: "Scientists studying a sudden mutation in bacteria would most likely be interested in...",
      choices: [
        "how the bacteria's appearance changes with room temperature.",
        "a permanent genetic change that makes the bacteria different from others of its kind.",
        "how many bacteria fit on a single microscope slide.",
        "the color of the lab equipment."
      ],
      answer: 1,
      explanation: "mutation은 유기체의 유전자에 생긴 영구적인 변화 자체를 가리킵니다."
    },

    {
      id: 19,
      relatedWord: "pry",
      question: "Which action is an example of prying something open?",
      choices: [
        "Gently turning a doorknob to open a door.",
        "Using a crowbar to force apart the boards of a locked crate.",
        "Pressing a button to open an elevator.",
        "Sliding a key into a lock."
      ],
      answer: 1,
      explanation: "pry(비집다, 비집어 열다)는 지렛대 등을 이용해 억지로 벌리거나 들어 올리는 행동을 뜻합니다."
    },
    {
      id: 20,
      relatedWord: "pry",
      question: "If a can lid is stuck, prying it open would involve...",
      choices: [
        "waiting patiently for it to open by itself.",
        "pushing a flat tool underneath the edge and levering it upward.",
        "gently blowing air on it.",
        "shaking the can until it opens."
      ],
      answer: 1,
      explanation: "pry는 도구를 틈에 넣고 지렛대처럼 힘을 주어 벌려 여는 행동을 뜻합니다."
    },

    {
      id: 21,
      relatedWord: "strategy",
      question: "Which example shows the use of a strategy?",
      choices: [
        "Doing tasks randomly with no particular order or plan.",
        "Carefully planning each step of a chess match before making a move.",
        "Guessing answers on a test without reading the questions.",
        "Choosing food at random from a menu."
      ],
      answer: 1,
      explanation: "strategy(전략)는 목표를 이루기 위한 구체적인 계획을 뜻합니다."
    },
    {
      id: 22,
      relatedWord: "strategy",
      question: "A company that develops a new marketing strategy is most likely trying to...",
      choices: [
        "reduce the number of customers on purpose.",
        "plan a clear approach to attract more customers and increase sales.",
        "avoid making any business decisions.",
        "randomly change its products without any goal."
      ],
      answer: 1,
      explanation: "새로운 strategy를 세운다는 것은 목표 달성을 위한 구체적인 계획을 마련한다는 뜻입니다."
    },

    {
      id: 23,
      relatedWord: "surpass",
      question: "Which situation is an example of surpassing expectations?",
      choices: [
        "A runner finishing exactly where everyone predicted.",
        "A student who was expected to fail instead earning the highest score in the class.",
        "A team performing exactly as poorly as predicted.",
        "A singer performing at an average level as expected."
      ],
      answer: 1,
      explanation: "surpass(능가하다)는 예상이나 기존 수준을 뛰어넘는 것을 뜻합니다."
    },
    {
      id: 24,
      relatedWord: "surpass",
      question: "If this year's sales surpassed last year's, that means...",
      choices: [
        "sales were exactly the same as last year.",
        "sales were higher than last year's.",
        "sales were lower than last year's.",
        "there is no way to compare the two years."
      ],
      answer: 1,
      explanation: "surpass는 이전보다 더 뛰어나거나 많다는 뜻이므로, 매출이 더 늘어난 상황을 의미합니다."
    },

    {
      id: 25,
      relatedWord: "respond to",
      question: "Which example shows someone responding to a situation?",
      choices: [
        "Ignoring a smoke alarm and continuing to sleep.",
        "Immediately calling for help after hearing a smoke alarm go off.",
        "Turning off the smoke alarm without checking anything.",
        "Leaving the room without noticing the alarm."
      ],
      answer: 1,
      explanation: "respond to(...에 대응하다)는 어떤 상황에 대한 반응으로 말하거나 행동하는 것을 뜻합니다."
    },
    {
      id: 26,
      relatedWord: "respond to",
      question: "A customer service team that quickly responds to complaints is most likely trying to...",
      choices: [
        "ignore customers and hope they go away.",
        "solve problems and keep customers satisfied.",
        "make customers wait as long as possible.",
        "avoid all communication with customers."
      ],
      answer: 1,
      explanation: "불만에 respond to(대응)한다는 것은 문제를 해결하려고 적극적으로 반응하는 것을 뜻합니다."
    },

    {
      id: 27,
      relatedWord: "class",
      question: "In the sentence \"She grew up in a working-class family,\" the word class refers to...",
      choices: [
        "a group of students in a classroom.",
        "a group of people who share a similar economic and social position.",
        "a type of school subject.",
        "a category of animal species."
      ],
      answer: 1,
      explanation: "여기서 class(계층)는 사회·경제적 위치가 비슷한 사람들의 집단을 뜻합니다."
    },
    {
      id: 28,
      relatedWord: "class",
      question: "Which situation illustrates a difference in social class?",
      choices: [
        "Two students who sit in the same classroom.",
        "Two families with very different incomes, housing, and access to resources.",
        "Two people who live in the same building.",
        "Two friends who like the same movie."
      ],
      answer: 1,
      explanation: "class(계층)는 경제적 소득이나 사회적 지위의 차이로 구분되는 집단을 의미합니다."
    },

    {
      id: 29,
      relatedWord: "assessment",
      question: "Which situation involves an assessment?",
      choices: [
        "A teacher randomly guessing a student's grade without any evidence.",
        "A doctor carefully examining test results before making a diagnosis.",
        "A person choosing a movie to watch for fun.",
        "A chef cooking a meal without following a recipe."
      ],
      answer: 1,
      explanation: "assessment(평가)는 가치, 질, 중요도 등을 판단하는 행위를 뜻합니다."
    },
    {
      id: 30,
      relatedWord: "assessment",
      question: "After an engineer's assessment of a bridge, the city would most likely...",
      choices: [
        "ignore the results completely.",
        "decide whether the bridge is safe based on the findings.",
        "close the bridge without any reason.",
        "repaint the bridge a different color."
      ],
      answer: 1,
      explanation: "assessment 결과에 따라 실제 조치(안전 여부 판단 등)를 결정하게 됩니다."
    }
  ],


  // ==============================
  // WORD BOX SETS
  // Set 1: DEBATE WORDS, Set 2~3: NOVEL WORDS
  // (WEEK01/WEEK02와 동일한 방식으로 그룹 구성)
  // ==============================

  wordBoxSets: [

    {
      id: 1,
      words: [
        "strategy",
        "surpass",
        "respond to",
        "class",
        "assessment"
      ],
      sentences: [
        { text: "Before the championship game, the coach gave the team a new defensive ___ to follow during the final quarter.", answer: "strategy" },
        { text: "Ticket sales this summer are expected to ___ the theater's all-time record of 40,000 tickets sold in one season.", answer: "surpass" },
        { text: "Firefighters are trained to ___ emergencies within minutes of receiving a call.", answer: "respond to" },
        { text: "Sociologists study how the economic ___ a person is born into can shape their access to education and healthcare.", answer: "class" },
        { text: "Before approving the loan, the bank ordered a full financial ___ to determine whether the business could repay it.", answer: "assessment" }
      ]
    },

    {
      id: 2,
      words: [
        "contritely",
        "entranced",
        "inextricably",
        "gnaw",
        "futile"
      ],
      sentences: [
        { text: "After realizing he had hurt his friend's feelings, Daniel apologized ___ and offered to make things right.", answer: "contritely" },
        { text: "The toddlers sat completely ___, staring at the colorful fish gliding through the aquarium tank.", answer: "entranced" },
        { text: "The professor explained that language and culture are ___ connected, so learning one always affects the other.", answer: "inextricably" },
        { text: "Left alone in the yard, the puppy began to ___ on the wooden fence post.", answer: "gnaw" },
        { text: "Bailing water out of the canoe with a cup felt ___ once the hole below the waterline widened.", answer: "futile" }
      ]
    },

    {
      id: 3,
      words: [
        "injection",
        "captivity",
        "illusion",
        "mutation",
        "pry"
      ],
      sentences: [
        { text: "The veterinarian gently gave the frightened cat an ___ to calm her before the exam.", answer: "injection" },
        { text: "After decades spent in ___, the elderly elephant was finally moved to a spacious wildlife sanctuary.", answer: "captivity" },
        { text: "The painted mural created the ___ of a long hallway, even though the wall was completely flat.", answer: "illusion" },
        { text: "A single genetic ___ gave the butterfly wings a pattern that had never been recorded in its species before.", answer: "mutation" },
        { text: "Using a flat screwdriver, the mechanic managed to ___ the rusted hubcap loose from the wheel.", answer: "pry" }
      ]
    }
  ],


  // ==============================
  // PREFIX PRACTICE
  // MINI LESSON(어근 -mut-, "change") 관련 4지선다 훈련
  // 문항 2/5는 교재에 실제로 나온 확인 문제를 그대로 활용
  // ==============================

  prefixPractice: [

    {
      id: 1,
      relatedWord: "-mut-",
      question: "What does the root -mut- mean?",
      choices: [
        "to move quickly",
        "to change",
        "to stay the same",
        "to grow bigger"
      ],
      answer: 1,
      explanation: "-mut-는 'change(변화하다)'라는 뜻을 가진 어근입니다. 예: mutable(변할 수 있는)."
    },

    {
      id: 2,
      relatedWord: "mutable",
      question: "The ___ nature of technology means that what is cutting-edge today may be outdated tomorrow.",
      choices: [
        "unchangeable",
        "reliable",
        "mutable",
        "invariable"
      ],
      answer: 2,
      explanation: "mutable은 '변할 수 있는'이라는 뜻이므로, 빠르게 변화하는 기술의 특성을 설명하기에 알맞습니다."
    },

    {
      id: 3,
      relatedWord: "commutable",
      question: "A commutable prison sentence is one that a governor or court has the power to...",
      choices: [
        "extend to be much longer than before.",
        "reduce or change to a less severe punishment.",
        "make permanently fixed and unchangeable.",
        "ignore without any legal process."
      ],
      answer: 1,
      explanation: "commutable은 '교환·대체될 수 있는'이라는 뜻으로, commutable sentence는 더 가벼운 형벌로 바뀔 수 있는 형량을 의미합니다."
    },

    {
      id: 4,
      relatedWord: "permute",
      question: "If a mathematician permutes the digits 1, 2, and 3, she is...",
      choices: [
        "adding new digits to the sequence.",
        "rearranging the digits into a different order.",
        "deleting one of the digits completely.",
        "multiplying the digits together."
      ],
      answer: 1,
      explanation: "permute는 '순서나 배열을 바꾸다'라는 뜻입니다. per-(완전히) + -mut-(change)."
    },

    {
      id: 5,
      relatedWord: "transmute",
      question: "Through the process of nuclear reactions, scientists can ___ one element into another under extreme conditions.",
      choices: [
        "preserve",
        "transmute",
        "measure",
        "combine"
      ],
      answer: 1,
      explanation: "transmute는 '한 형태나 상태에서 다른 것으로 바뀌다'라는 뜻입니다. trans-(다른 상태로) + -mut-(change)."
    },

    {
      id: 6,
      relatedWord: "mutant",
      question: "In biology, a mutant organism is one that...",
      choices: [
        "looks exactly like every other member of its species.",
        "differs from others of its kind because of a permanent genetic change.",
        "has never reproduced.",
        "was raised in a laboratory only."
      ],
      answer: 1,
      explanation: "mutant는 유전자의 영구적인 변화로 인해 같은 종의 다른 개체와 달라진 생물을 뜻합니다."
    }
  ],


  // ==============================
  // MOCK TEST 구성
  // WEEK01/WEEK02와 동일한 섹션 배점 구조
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

window.VOCAB_DATA["vocabulary-workbook"].week03 = WEEK01;

})();
