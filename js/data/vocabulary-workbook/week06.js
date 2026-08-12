// ==============================
// VOCABULARY WORKBOOK - WEEK 06 DATA
// ----------------------------------------
// IIFE로 감싸서 WEEK01이라는 지역 변수명이 다른 과목/WEEK
// 데이터 파일과 충돌하지 않도록 한다. 외부에서는 항상
// window.VOCAB_DATA["vocabulary-workbook"].week06 으로 접근한다.
//
// 참고: 이번 WEEK은 교재 자체가 "NOVEL WORDS REVIEW"로 표시된
// 복습 주차다. words[1~10](novel words)은 WEEK01/02/03/04/05에서
// 이미 등록된 단어(relentlessly·essence=WEEK01, inevitably=WEEK02,
// gnaw·injection·captivity·mutation=WEEK03, versatility·concealed=
// WEEK04, incredulously=WEEK05)를 교재가 그대로 재출제한 것이며,
// word/meaning/synonym/antonym/definition/bookSentence/example은
// 원본 WEEK 파일과 동일하게 맞췄다(교재에 인쇄된 내용도 동일).
// 다만 modelSentences/contextQuestions/wordBoxSets는 복습 주차에도
// 학습 효과가 있도록 전부 새로 작성했다. words[11~15](debate words,
// pg.47~50)는 새 아티클(수업 중 낮잠 의무화 찬반 토론 소재)에서 나온
// 신규 단어다. 어근 Mini Lesson도 새 주제 "-cred-"로 이어진다.
// ==============================

(function () {

const WEEK01 = {
  week: 6,
  title: "WEEK 06",
  totalWords: 15,

  prefixLesson: {
    prefix: "-cred-",
    meaning: "to believe, to trust",
    examples: [
      {
        word: "incredible",
        partOfSpeech: "adj.",
        definition: "amazing, very difficult to believe"
      },
      {
        word: "credit",
        partOfSpeech: "noun",
        definition: "a way to buy something now and pay for it later because someone trusts you to pay them back"
      },
      {
        word: "credentials",
        partOfSpeech: "noun",
        definition: "skills or documents that show someone can be trusted to do a certain job or activity"
      },
      {
        word: "discredit",
        partOfSpeech: "verb",
        definition: "to cause people to stop believing in an idea or person"
      },
      {
        word: "accreditation",
        partOfSpeech: "noun",
        definition: "the fact of being officially recognized and trusted to meet certain standards"
      }
    ]
  },

  words: [
    {
      id: 1,
      word: "relentlessly",
      partOfSpeech: "adv.",
      meaning: "끈질기게",
      synonym: "persistently",
      antonym: "hesitantly",
      definition: "in an extreme way that continues without stopping",
      bookSentence:
        "... and since the cat stalked those grounds relentlessly, [Mrs. Frisby] had to plot a much more roundabout way ...",
      example:
        "Despite the rain, the runners trained relentlessly for the upcoming marathon.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The rain fell relentlessly all night."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "The debate coach relentlessly quizzed the team on rebuttals until everyone felt fully prepared."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My little sister relentlessly begged for a puppy for almost a month."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the deadline was approaching fast, the design team worked relentlessly through the weekend."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even after losing the first three matches, the rookie player relentlessly kept training until her serve finally improved."
        }
      ]
    },

    {
      id: 2,
      word: "essence",
      partOfSpeech: "noun",
      meaning: "본질, 정수, 진수",
      synonym: "quality",
      antonym: "",
      definition: "the basic or most important idea or quality of something",
      bookSentence:
        "This mild breeze, carrying the moist essence of early spring, caused a dead leaf to flutter here and there ...",
      example:
        "The essence of a good friendship is trust and understanding.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "Kindness is the essence of her character."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our literature teacher asked us to summarize the essence of the novel in just one sentence."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "For me, the essence of a great vacation is simply spending time with family, not visiting fancy places."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the negotiators kept losing sight of the main issue, the mediator reminded them of the essence of the agreement."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the remake changed the setting and characters completely, critics agreed that it captured the essence of the original story perfectly."
        }
      ]
    },

    {
      id: 3,
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
          sentence: "Mistakes will inevitably happen."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "If you leave homework until the last minute, you will inevitably feel rushed and stressed."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Whenever we plan a family road trip, someone inevitably forgets to pack their phone charger."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the old bridge was never repaired, it inevitably collapsed during the heavy storm."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the company tried several strategies to cut costs, rising material prices inevitably forced them to raise their prices anyway."
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
        "My dog gnawed through his toys so quickly that I had to buy him a new one!",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The rabbit began to gnaw the carrot."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "In the nature documentary, we watched termites gnaw through a fallen log."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Our new puppy loves to gnaw on an old sock whenever he's bored."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the hamster's teeth kept growing, it needed to gnaw on wooden blocks every day."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the cage bars looked far too thick to break, the determined hamster eventually managed to gnaw a small gap wide enough to escape."
        }
      ]
    },

    {
      id: 5,
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
          sentence: "The doctor prepared an injection."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our health teacher explained why some vaccines require more than one injection."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My little cousin cried a little before his flu injection, but he was proud of himself afterward."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the infection was spreading quickly, the doctor gave the patient an antibiotic injection right away."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the athlete was terrified of needles, she calmly accepted the injection once the team doctor explained exactly how it would help her recovery."
        }
      ]
    },

    {
      id: 6,
      word: "captivity",
      partOfSpeech: "noun",
      meaning: "감금, 억류",
      synonym: "imprisonment",
      antonym: "liberation",
      definition: "the situation in which a person or animal is kept somewhere and is not allowed to leave",
      bookSentence:
        "During the days that followed, our lives fell into a pattern, and the reason for our captivity gradually became clear.",
      example:
        "Animals bred in captivity would struggle to survive in the wild.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The lion had lived in captivity for years."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our biology teacher explained how breeding programs in captivity have helped save endangered species."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Watching the fish circle the same small tank made me think about what captivity must feel like."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because poachers had captured the young elephant, wildlife workers spent months preparing it for life outside captivity."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the sanctuary had cared for the tiger in captivity since it was a cub, staff members still worked carefully to preserve its natural hunting instincts."
        }
      ]
    },

    {
      id: 7,
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
          sentence: "Scientists studied the rare mutation."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "In genetics class, we learned that a single mutation can sometimes change an entire organism's appearance."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "The unusual spots on our neighbor's cat turned out to be caused by a harmless mutation."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the virus multiplied so rapidly, researchers noticed several new mutations within just a few weeks."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the mutation seemed harmful at first, scientists later discovered that it actually helped the insect survive in polluted environments."
        }
      ]
    },

    {
      id: 8,
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
          sentence: "The tool's versatility impressed everyone."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our art teacher praised the student for her versatility in working skillfully with paint, clay, and digital design."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "The versatility of this one jacket makes it perfect for hiking, staying dry in the rain, or just walking to school."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the software offered so much versatility, the small business used it for accounting, scheduling, and marketing all at once."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although he was originally hired only as a translator, his versatility in editing and public speaking eventually earned him a much larger role at the company."
        }
      ]
    },

    {
      id: 9,
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
          sentence: "A hidden camera was concealed nearby."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "The mystery novel we read featured a concealed passage behind the school library's bookshelf."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My dad keeps a spare house key concealed inside a fake rock in the garden."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the trapdoor was so well concealed beneath the rug, most visitors never even noticed it was there."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the artifact looked like an ordinary vase, a concealed switch on its base revealed a secret compartment underneath."
        }
      ]
    },

    {
      id: 10,
      word: "incredulously",
      partOfSpeech: "adv.",
      meaning: "믿지 않는 듯이, 못 믿겠다는 듯이",
      synonym: "disbelievingly",
      antonym: "trustingly",
      definition: "in a way that shows one does not want or is unable to believe something",
      bookSentence:
        "\"Because [your father] was a friend of [the rats].\" \"He was?\" said Martin incredulously. \"I never knew that.\"",
      example:
        "Ron stared incredulously at the lottery ticket in shock at the winning numbers.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "He looked at her incredulously."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "The class stared incredulously when the principal announced an extra week of winter break."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My mom asked incredulously how I had lost my jacket for the third time this month."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the results seemed impossible, the scientists reviewed the data incredulously before accepting it as true."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even after seeing the photograph, the reporter still shook his head incredulously, insisting that the story had to be some kind of trick."
        }
      ]
    },

    {
      id: 11,
      word: "knowledgeable",
      partOfSpeech: "adj.",
      meaning: "많이 아는",
      synonym: "informed",
      antonym: "unaware",
      definition: "knowing a lot",
      bookSentence:
        "It also shows the judges that you are prepared, knowledgeable, and focused.",
      example:
        "Our captain is very knowledgeable about ocean currents and safe sailing routes.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "She is very knowledgeable about history."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our tour guide was so knowledgeable that she could answer even the trickiest questions about the museum."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My uncle is incredibly knowledgeable about old cars and can name almost any model on sight."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because she had read every book on the subject, the librarian became the most knowledgeable person in town about local history."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although he had never taken a formal class on the subject, the self-taught astronomer proved to be more knowledgeable than most graduate students."
        }
      ]
    },

    {
      id: 12,
      word: "mandatory",
      partOfSpeech: "adj.",
      meaning: "의무적인",
      synonym: "required",
      antonym: "optional",
      definition: "made necessary, usually by law or other rule",
      bookSentence:
        "As a result, mandatory nap time could waste valuable class time instead of improving learning.",
      example:
        "Seat belts are mandatory because car accidents often cause serious injuries without them.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "Attendance is mandatory."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Wearing safety goggles is mandatory during every chemistry experiment."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "In our house, cleaning your room before the weekend is pretty much mandatory."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because several accidents had occurred, the factory made hard hats mandatory for all workers."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although many employees complained at first, the mandatory training session ended up teaching skills that prevented several serious mistakes later on."
        }
      ]
    },

    {
      id: 13,
      word: "unconvincing",
      partOfSpeech: "adj.",
      meaning: "설득력이 없는",
      synonym: "weak",
      antonym: "persuasive",
      definition: "not able to cause someone to believe something",
      bookSentence:
        ". . . the opponents' argument is unconvincing. They only focus on the possible benefit of rest, but they do not prove that every student needs nap time . . .",
      example:
        "Jane's plea for more time was unconvincing because the assignment was easy.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "His excuse was unconvincing."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "The debate judges found the team's closing argument unconvincing because it lacked solid evidence."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My brother's explanation for the broken lamp was completely unconvincing."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the witness kept changing small details, her testimony sounded increasingly unconvincing to the jury."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the salesman spoke confidently, his claims about the product's benefits felt unconvincing once customers noticed he had no actual data to support them."
        }
      ]
    },

    {
      id: 14,
      word: "steady",
      partOfSpeech: "adj.",
      meaning: "변함[변동]없는, 꾸준한",
      synonym: "stable",
      antonym: "irregular",
      definition: "happening in a smooth and regular way",
      bookSentence:
        "Use steady, controlled breathing to support your voice.",
      example:
        "A steady stream of customers entered the café for warm beverages during the cold morning.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "He kept a steady pace."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our music teacher reminded us to keep a steady rhythm throughout the entire song."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "A steady drizzle fell outside all afternoon, perfect weather for reading indoors."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the patient's heartbeat remained steady throughout the surgery, the doctors felt confident about her recovery."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the boat rocked violently in the storm, the experienced captain kept a steady hand on the wheel the entire time."
        }
      ]
    },

    {
      id: 15,
      word: "effectively",
      partOfSpeech: "adv.",
      meaning: "효과적으로",
      synonym: "successfully",
      antonym: "poorly",
      definition: "in a way that is successful and produces the intended results",
      bookSentence:
        "Pay attention to your volume, tone, and speed so you can speak clearly and effectively.",
      example:
        "Dad organized the messy pantry effectively by placing the tallest boxes in the back.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "She solved the problem effectively."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our teacher showed us how to effectively organize an essay using a simple outline."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Using a checklist helps me pack for trips much more effectively than just guessing."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the new filing system was designed so carefully, the office could effectively handle twice as many documents as before."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the team had far fewer resources than their rivals, they used their limited budget so effectively that they still finished the project ahead of schedule."
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
      relatedWord: "relentlessly",
      question: "Which situation shows someone acting relentlessly?",
      choices: [
        "Practicing free throws for ten minutes and then giving up for the day.",
        "Continuing to search for a lost dog for hours without taking a single break.",
        "Trying something once and immediately deciding it's not worth the effort.",
        "Working calmly and stopping the moment it feels slightly difficult."
      ],
      answer: 1,
      explanation: "relentlessly(끈질기게)는 멈추지 않고 극단적으로 지속하는 태도를 뜻합니다."
    },
    {
      id: 2,
      relatedWord: "relentlessly",
      question: "If a company relentlessly pursued a new customer, that means the company...",
      choices: [
        "gave up after the very first rejection.",
        "kept trying persistently, without stopping, to win the customer over.",
        "never contacted the customer at all.",
        "showed no real interest in the customer."
      ],
      answer: 1,
      explanation: "relentlessly는 포기하지 않고 극단적으로 계속 밀어붙이는 모습을 나타냅니다."
    },

    {
      id: 3,
      relatedWord: "essence",
      question: "Which best captures the essence of a mystery novel?",
      choices: [
        "The exact number of pages in the book.",
        "The core idea of solving a hidden secret through clues and suspense.",
        "The color of the book's cover.",
        "The price of the book at the bookstore."
      ],
      answer: 1,
      explanation: "essence(본질, 정수, 진수)는 어떤 것의 가장 근본적이고 중요한 특성을 뜻합니다."
    },
    {
      id: 4,
      relatedWord: "essence",
      question: "A speech that captures the essence of teamwork would most likely focus on...",
      choices: [
        "the exact time the meeting started.",
        "the core idea that people achieve more by working together than alone.",
        "the color of the team's uniforms.",
        "an unrelated topic with no connection to the team."
      ],
      answer: 1,
      explanation: "essence는 핵심적이고 본질적인 개념을 뜻하므로, 협력의 근본적인 가치를 다루는 것이 알맞습니다."
    },

    {
      id: 5,
      relatedWord: "inevitably",
      question: "Which situation shows something that happens inevitably?",
      choices: [
        "A coin toss landing on heads or tails.",
        "The sun setting at the end of every single day.",
        "A lottery ticket winning the jackpot.",
        "A surprise guest showing up at a party."
      ],
      answer: 1,
      explanation: "inevitably(불가피하게, 아니나 다를까)는 피할 수 없이 반드시 일어나는 것을 뜻합니다."
    },
    {
      id: 6,
      relatedWord: "inevitably",
      question: "If ignoring a small leak in the roof will inevitably cause bigger damage, that means the bigger damage...",
      choices: [
        "might possibly happen, but it's very unlikely.",
        "is certain to happen unless the leak is fixed.",
        "will definitely never happen.",
        "depends entirely on random luck."
      ],
      answer: 1,
      explanation: "inevitably는 피할 수 없이 확실하게 일어난다는 뜻입니다."
    },

    {
      id: 7,
      relatedWord: "gnaw",
      question: "Which situation is an example of gnawing?",
      choices: [
        "A bird swallowing a seed whole.",
        "A beaver wearing down a tree trunk by biting it over and over.",
        "A fish swimming quietly past a rock.",
        "A bear sleeping through the winter."
      ],
      answer: 1,
      explanation: "gnaw(갉아먹다, 물어뜯다)는 이빨로 반복해서 물어뜯어 서서히 훼손하는 행동을 뜻합니다."
    },
    {
      id: 8,
      relatedWord: "gnaw",
      question: "A hamster that needs to gnaw on wooden blocks every day is most likely doing so because...",
      choices: [
        "it dislikes the taste of its regular food.",
        "its teeth never stop growing and need to be worn down.",
        "it wants to decorate its cage.",
        "it is trying to escape completely."
      ],
      answer: 1,
      explanation: "설치류는 계속 자라는 이빨을 관리하기 위해 gnaw(물어뜯기)를 반복합니다."
    },

    {
      id: 9,
      relatedWord: "injection",
      question: "Which situation describes an injection?",
      choices: [
        "Rubbing ointment onto a sore ankle.",
        "A nurse using a syringe to deliver medicine directly into a vein.",
        "Swallowing a vitamin tablet with breakfast.",
        "Gargling with salt water for a sore throat."
      ],
      answer: 1,
      explanation: "injection(주입)은 바늘과 주사기로 액체를 몸에 직접 넣는 것을 뜻합니다."
    },
    {
      id: 10,
      relatedWord: "injection",
      question: "Compared to a pill, an injection often works faster because it...",
      choices: [
        "has to be digested first before taking effect.",
        "delivers medicine directly into the body without waiting to be digested.",
        "takes several days to dissolve.",
        "only works on the skin's surface."
      ],
      answer: 1,
      explanation: "injection은 소화 과정 없이 약물을 몸에 직접 전달하므로 비교적 빠르게 효과를 낼 수 있습니다."
    },

    {
      id: 11,
      relatedWord: "captivity",
      question: "Which situation describes captivity?",
      choices: [
        "A wild horse galloping freely across an open plain.",
        "A bird kept permanently in a small cage with no chance to fly free.",
        "A dolphin swimming in the open ocean.",
        "A deer wandering through a national forest."
      ],
      answer: 1,
      explanation: "captivity(감금, 억류)는 자유롭게 떠날 수 없이 갇혀 있는 상태를 뜻합니다."
    },
    {
      id: 12,
      relatedWord: "captivity",
      question: "Wildlife workers preparing an animal for life outside captivity would most likely focus on...",
      choices: [
        "making the animal more comfortable staying in a cage forever.",
        "helping the animal relearn natural survival skills like hunting.",
        "teaching the animal to perform tricks for visitors.",
        "reducing the animal's living space even further."
      ],
      answer: 1,
      explanation: "captivity에서 벗어나 야생으로 돌아가려면 생존에 필요한 본능적인 기술을 되찾아야 합니다."
    },

    {
      id: 13,
      relatedWord: "mutation",
      question: "Which situation is an example of a mutation?",
      choices: [
        "A dog learning a new trick through daily practice.",
        "A sudden genetic change that gives a plant a color never seen before in its species.",
        "A student improving a test score by studying harder.",
        "A city building a new road."
      ],
      answer: 1,
      explanation: "mutation(변화, 변형)은 유전자에 생긴 영구적인 변화를 뜻합니다."
    },
    {
      id: 14,
      relatedWord: "mutation",
      question: "Researchers who discover a new mutation in a virus would most likely want to study...",
      choices: [
        "the price of laboratory equipment.",
        "how the genetic change affects the virus's behavior.",
        "the weather conditions in the lab that day.",
        "unrelated topics with no connection to the virus."
      ],
      answer: 1,
      explanation: "mutation은 유기체의 유전자에 생긴 변화 자체를 뜻하므로, 그 변화가 미치는 영향을 연구하는 것이 알맞습니다."
    },

    {
      id: 15,
      relatedWord: "versatility",
      question: "Which situation best shows versatility?",
      choices: [
        "An artist who paints only one type of picture for their entire career.",
        "A device that can function as a phone, a camera, and a music player.",
        "A chair that can only ever be used for sitting.",
        "A recipe that only works with one specific ingredient."
      ],
      answer: 1,
      explanation: "versatility(다재다능함, 다양성)는 다양한 목적으로 쉽게 활용될 수 있는 능력을 뜻합니다."
    },
    {
      id: 16,
      relatedWord: "versatility",
      question: "An employee known for versatility at work would most likely be asked to...",
      choices: [
        "handle only one single task for the entire year.",
        "help out across several different departments as needed.",
        "avoid learning any new skills.",
        "refuse tasks outside their original job title."
      ],
      answer: 1,
      explanation: "versatility가 뛰어난 직원은 다양한 업무를 유연하게 소화할 수 있습니다."
    },

    {
      id: 17,
      relatedWord: "concealed",
      question: "Which situation shows something concealed?",
      choices: [
        "A store's opening hours posted clearly on the front door.",
        "A hidden switch behind a painting that opens a secret room.",
        "A menu displayed openly at a restaurant entrance.",
        "An announcement broadcast to the entire school."
      ],
      answer: 1,
      explanation: "concealed(숨겨진, 감춰진)는 쉽게 눈에 띄지 않도록 숨겨져 있는 상태를 뜻합니다."
    },
    {
      id: 18,
      relatedWord: "concealed",
      question: "If a key was concealed inside a fake rock in the garden, that means the key was...",
      choices: [
        "displayed openly for anyone walking by to see.",
        "hidden in a clever way that made it hard to notice.",
        "buried so deep it could never be found again.",
        "announced publicly to all the neighbors."
      ],
      answer: 1,
      explanation: "concealed는 쉽게 보이지 않도록 숨겨져 있다는 뜻입니다."
    },

    {
      id: 19,
      relatedWord: "incredulously",
      question: "Which situation shows someone reacting incredulously?",
      choices: [
        "Nodding calmly because the outcome was exactly as expected.",
        "Widening their eyes and asking, \"Wait, are you serious?\"",
        "Falling asleep during an important conversation.",
        "Smiling politely with no visible reaction at all."
      ],
      answer: 1,
      explanation: "incredulously(믿지 않는 듯이, 못 믿겠다는 듯이)는 무언가를 믿기 어려워하는 태도를 뜻합니다."
    },
    {
      id: 20,
      relatedWord: "incredulously",
      question: "If a reporter reacted incredulously to a shocking claim, that means the reporter...",
      choices: [
        "immediately accepted it as completely true.",
        "found the claim hard to believe.",
        "had already reported the exact same story before.",
        "showed no reaction to the claim at all."
      ],
      answer: 1,
      explanation: "incredulously는 믿기 어려운 상황에 대한 반응을 나타냅니다."
    },

    {
      id: 21,
      relatedWord: "knowledgeable",
      question: "Which situation shows someone who is knowledgeable about a topic?",
      choices: [
        "A person who has never studied a subject giving confident but incorrect answers.",
        "A tour guide who can answer detailed questions about every exhibit in the museum.",
        "A student who skipped every class all semester.",
        "Someone who avoids learning anything new."
      ],
      answer: 1,
      explanation: "knowledgeable(많이 아는)은 특정 주제에 대해 많이 알고 있는 상태를 뜻합니다."
    },
    {
      id: 22,
      relatedWord: "knowledgeable",
      question: "A knowledgeable mechanic would most likely be able to...",
      choices: [
        "diagnose a car problem quickly based on experience and training.",
        "guess randomly without any real understanding of engines.",
        "refuse to explain what's wrong with a car.",
        "avoid all questions about how cars work."
      ],
      answer: 1,
      explanation: "knowledgeable한 사람은 해당 분야에 대한 풍부한 지식을 바탕으로 정확하게 판단할 수 있습니다."
    },

    {
      id: 23,
      relatedWord: "mandatory",
      question: "Which situation describes something mandatory?",
      choices: [
        "An optional activity that students may skip if they prefer.",
        "A safety rule that every employee must follow by law.",
        "A hobby that people choose to do in their free time.",
        "A suggestion that can be easily ignored."
      ],
      answer: 1,
      explanation: "mandatory(의무적인)는 법이나 규칙에 의해 반드시 해야 하는 것을 뜻합니다."
    },
    {
      id: 24,
      relatedWord: "mandatory",
      question: "If wearing a helmet is mandatory on a construction site, that means workers...",
      choices: [
        "may choose not to wear one if they prefer.",
        "are required to wear one at all times on site.",
        "only need to wear one occasionally.",
        "can decide for themselves with no consequences."
      ],
      answer: 1,
      explanation: "mandatory는 규칙에 따라 반드시 지켜야 한다는 뜻입니다."
    },

    {
      id: 25,
      relatedWord: "unconvincing",
      question: "Which situation shows an unconvincing argument?",
      choices: [
        "A claim supported by clear evidence and solid research.",
        "A claim with no real evidence that fails to persuade anyone.",
        "A well-organized argument that changes everyone's mind.",
        "A speech backed up by expert testimony."
      ],
      answer: 1,
      explanation: "unconvincing(설득력이 없는)은 누군가를 믿게 만들 만한 설득력이 부족한 상태를 뜻합니다."
    },
    {
      id: 26,
      relatedWord: "unconvincing",
      question: "If the judges found a debate team's argument unconvincing, that most likely means the argument...",
      choices: [
        "was extremely persuasive and well-supported.",
        "failed to provide enough evidence to be believable.",
        "won the debate by a landslide.",
        "was exactly what the judges expected to hear."
      ],
      answer: 1,
      explanation: "unconvincing한 주장은 근거가 부족해 상대를 설득하지 못하는 주장을 뜻합니다."
    },

    {
      id: 27,
      relatedWord: "steady",
      question: "Which situation shows something steady?",
      choices: [
        "A heartbeat that suddenly speeds up and slows down at random.",
        "A drumbeat that keeps the exact same rhythm throughout the song.",
        "A car that keeps stalling and restarting unpredictably.",
        "A signal that flickers on and off with no pattern."
      ],
      answer: 1,
      explanation: "steady(변함[변동]없는, 꾸준한)는 부드럽고 일정하게 지속되는 상태를 뜻합니다."
    },
    {
      id: 28,
      relatedWord: "steady",
      question: "A patient with a steady heartbeat during surgery would most likely be considered...",
      choices: [
        "in a dangerously unstable condition.",
        "in a stable and consistent condition.",
        "about to experience a sudden emergency.",
        "completely unconscious with no heartbeat at all."
      ],
      answer: 1,
      explanation: "steady는 안정적이고 일정하게 유지되는 상태를 뜻합니다."
    },

    {
      id: 29,
      relatedWord: "effectively",
      question: "Which situation shows something being done effectively?",
      choices: [
        "Spending hours on a task with no real results.",
        "Organizing a messy closet quickly so everything is easy to find.",
        "Following a plan that consistently fails to work.",
        "Wasting time on a solution that doesn't solve the problem."
      ],
      answer: 1,
      explanation: "effectively(효과적으로)는 의도한 결과를 성공적으로 만들어내는 방식을 뜻합니다."
    },
    {
      id: 30,
      relatedWord: "effectively",
      question: "A team that communicates effectively during a project would most likely...",
      choices: [
        "finish the project with fewer misunderstandings and mistakes.",
        "never speak to one another at all.",
        "constantly misunderstand each other's instructions.",
        "complete the project much slower than expected."
      ],
      answer: 1,
      explanation: "effectively 의사소통하는 팀은 오해를 줄이고 성과를 높일 수 있습니다."
    }
  ],


  // ==============================
  // WORD BOX SETS
  // Set 1: DEBATE WORDS, Set 2~3: NOVEL WORDS
  // (WEEK01~05와 동일한 방식으로 그룹 구성)
  // ==============================

  wordBoxSets: [

    {
      id: 1,
      words: [
        "knowledgeable",
        "mandatory",
        "unconvincing",
        "steady",
        "effectively"
      ],
      sentences: [
        { text: "Our tour guide could correctly name the artist, year, and hidden story behind every single painting, seeming incredibly ___ about the museum's collection.", answer: "knowledgeable" },
        { text: "Wearing a seatbelt is ___ in nearly every country in the world.", answer: "mandatory" },
        { text: "The lawyer's closing argument felt ___ because it lacked any real evidence.", answer: "unconvincing" },
        { text: "The nurse kept a close eye on the patient's ___ heartbeat throughout the night.", answer: "steady" },
        { text: "The new manager reorganized the warehouse so ___ that deliveries became twice as fast.", answer: "effectively" }
      ]
    },

    {
      id: 2,
      words: [
        "relentlessly",
        "essence",
        "inevitably",
        "gnaw",
        "injection"
      ],
      sentences: [
        { text: "The coach pushed the swim team ___, refusing to let anyone slow down during practice.", answer: "relentlessly" },
        { text: "Curiosity, more than any single fact, is the true ___ of scientific discovery.", answer: "essence" },
        { text: "If you never back up your files, a computer crash will ___ cost you important work someday.", answer: "inevitably" },
        { text: "Left unsupervised, the puppy began to ___ on the leg of the wooden chair.", answer: "gnaw" },
        { text: "The doctor recommended a booster ___ before the patient's trip overseas.", answer: "injection" }
      ]
    },

    {
      id: 3,
      words: [
        "captivity",
        "mutation",
        "versatility",
        "concealed",
        "incredulously"
      ],
      sentences: [
        { text: "Elephants born into ___ often lack the survival instincts needed to live in the wild.", answer: "captivity" },
        { text: "A tiny ___ in the seed's genetic code produced a sunflower with unusually dark petals.", answer: "mutation" },
        { text: "The head chef was hired specifically for her ___ across French, Italian, and Korean cuisine.", answer: "versatility" },
        { text: "A hidden camera was cleverly ___ inside the smoke detector on the ceiling.", answer: "concealed" },
        { text: "My grandfather laughed ___ when I told him I had run a full marathon before breakfast.", answer: "incredulously" }
      ]
    }
  ],


  // ==============================
  // PREFIX PRACTICE
  // MINI LESSON(어근 -cred-, "to believe, to trust") 관련 4지선다 훈련
  // 문항 4/5는 교재에 실제로 나온 확인 문제를 그대로 활용
  // ==============================

  prefixPractice: [

    {
      id: 1,
      relatedWord: "-cred-",
      question: "What does the root -cred- mean?",
      choices: [
        "to build",
        "to believe, to trust",
        "to hide",
        "to measure"
      ],
      answer: 1,
      explanation: "-cred-는 'to believe, to trust(믿다, 신뢰하다)'라는 뜻을 가진 어근입니다. 예: incredible(믿기 어려운)."
    },

    {
      id: 2,
      relatedWord: "incredible",
      question: "Which situation would most likely be described as incredible?",
      choices: [
        "A completely ordinary Tuesday with nothing unusual happening.",
        "A survivor being found alive three weeks after a shipwreck, against all odds.",
        "A student finishing an easy worksheet in five minutes.",
        "A bus arriving exactly on schedule."
      ],
      answer: 1,
      explanation: "incredible은 '믿기 어려울 만큼 놀라운'이라는 뜻입니다. in-(부정) + -cred-(믿다)."
    },

    {
      id: 3,
      relatedWord: "credit",
      question: "If a store offers customers credit, that means customers can...",
      choices: [
        "only pay with exact cash, nothing else.",
        "take the item now and pay for it later because the store trusts them to pay.",
        "never purchase anything from the store again.",
        "receive items for free with no payment required ever."
      ],
      answer: 1,
      explanation: "credit은 상대를 믿고 나중에 갚을 것을 전제로 물건을 먼저 내주는 것을 뜻합니다."
    },

    {
      id: 4,
      relatedWord: "credentials",
      question: "If you ask a police officer to show some credentials, what is the officer MOST LIKELY going to show you?",
      choices: [
        "a weapon",
        "a police badge",
        "a list of laws",
        "a license plate number"
      ],
      answer: 1,
      explanation: "credentials는 어떤 일을 할 자격이 있음을 증명하는 문서나 자격증을 뜻합니다. 경찰 배지가 대표적인 예입니다."
    },

    {
      id: 5,
      relatedWord: "discredit",
      question: "Which BEST shows someone trying to discredit someone else?",
      choices: [
        "A girl shares her friend's accomplishments so others will trust her more.",
        "A boy recommends a news site because he believes it provides accurate information.",
        "A reporter spreads false information to make people stop believing in an idea.",
        "An architect earns the trust of others by successfully completing important projects."
      ],
      answer: 2,
      explanation: "discredit는 다른 사람이나 생각에 대한 믿음을 깨뜨리려는 행동을 뜻합니다. 거짓 정보를 퍼뜨리는 것이 대표적인 예입니다."
    },

    {
      id: 6,
      relatedWord: "accreditation",
      question: "A hospital that has earned official accreditation has most likely...",
      choices: [
        "failed every safety inspection it has ever had.",
        "been officially recognized as meeting certain trusted standards of quality.",
        "never been inspected by anyone.",
        "lost the trust of every patient it has treated."
      ],
      answer: 1,
      explanation: "accreditation은 특정 기준을 충족한다고 공식적으로 인정받고 신뢰를 얻는 것을 뜻합니다."
    }
  ],


  // ==============================
  // MOCK TEST 구성
  // WEEK01~05와 동일한 섹션 배점 구조
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

window.VOCAB_DATA["vocabulary-workbook"].week06 = WEEK01;

})();
