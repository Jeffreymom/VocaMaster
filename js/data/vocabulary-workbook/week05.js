// ==============================
// VOCABULARY WORKBOOK - WEEK 05 DATA
// ----------------------------------------
// IIFE로 감싸서 WEEK01이라는 지역 변수명이 다른 과목/WEEK
// 데이터 파일과 충돌하지 않도록 한다. 외부에서는 항상
// window.VOCAB_DATA["vocabulary-workbook"].week05 로 접근한다.
//
// 참고: 이번 WEEK의 Mini Lesson도 접두사(prefix)가 아니라
// 어근(root) "-sci-"이다 (WEEK03/WEEK04의 -mut-/-cess- 처리
// 방식과 동일하게 prefixLesson 필드를 그대로 사용).
// ==============================

(function () {

const WEEK01 = {
  week: 5,
  title: "WEEK 05",
  totalWords: 15,

  prefixLesson: {
    prefix: "-sci-",
    meaning: "knowledge",
    examples: [
      {
        word: "unconscionable",
        partOfSpeech: "adj.",
        definition: "unacceptable because of the knowledge that something is too extreme"
      },
      {
        word: "science",
        partOfSpeech: "noun",
        definition: "knowledge obtained about the world by careful studies and experiments"
      },
      {
        word: "subconscious",
        partOfSpeech: "noun",
        definition: "the part of the mind that holds knowledge and influences behavior without awareness"
      },
      {
        word: "conscience",
        partOfSpeech: "noun",
        definition: "the inner knowledge or sense of right and wrong"
      },
      {
        word: "nescient",
        partOfSpeech: "adj.",
        definition: "not having knowledge about something"
      }
    ]
  },

  words: [
    {
      id: 1,
      word: "harvesting",
      partOfSpeech: "noun",
      meaning: "수확, 거둬들이기",
      synonym: "reaping",
      antonym: "",
      definition: "the activity of picking and collecting crops, or of collecting plants, animals, or fish as food",
      bookSentence:
        ". . . the four hired hands who would be working with Mr. Fitzgibbon during the planting and harvesting.",
      example:
        "The children helped with harvesting vegetables from their mother's garden.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "Harvesting began in early fall."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our class visited a farm to watch the harvesting of pumpkins before Halloween."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My grandparents spend every October harvesting apples from their backyard trees."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because an early frost was expected, the farmers rushed to finish harvesting the wheat fields."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the storm had damaged part of the crop, the exhausted workers kept harvesting late into the night to save what they could."
        }
      ]
    },

    {
      id: 2,
      word: "rabies",
      partOfSpeech: "noun",
      meaning: "광견병",
      synonym: "",
      antonym: "",
      definition: "a disease of the nervous system of animals that can be spread to humans, usually by a bite of an infected animal, and that causes death if not treated quickly",
      bookSentence:
        "\"They think the rats have rabies. They don't like to say so because it makes people panicky.\"",
      example:
        "If you get bitten by a wild animal, you should seek medical help to prevent rabies.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The dog was tested for rabies."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our science teacher explained how rabies spreads through the bite of an infected animal."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Our vet reminded us to keep our puppy's rabies vaccine up to date every year."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the raccoon was acting strangely, animal control worried it might have rabies."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the wound looked minor at first, the hiker rushed to the hospital immediately because untreated rabies can be fatal."
        }
      ]
    },

    {
      id: 3,
      word: "impact",
      partOfSpeech: "noun",
      meaning: "충돌, 충격",
      synonym: "collision",
      antonym: "",
      definition: "the force or action of one object hitting another",
      bookSentence:
        ". . . [Mrs. Frisby] heard a thump as [Justin] leaped and landed on top of the cage, which swayed under the impact.",
      example:
        "Janet dropped her phone, and its screen shattered instantly upon impact with the floor.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The impact shattered the window."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "In physics class, we measured how the impact of a falling ball changes depending on its height."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My phone case cracked from the impact when I dropped it on the sidewalk."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the truck braked too late, the impact pushed the smaller car several feet forward."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the helmet looked slightly damaged, it absorbed most of the impact and kept the cyclist from serious injury."
        }
      ]
    },

    {
      id: 4,
      word: "grudgingly",
      partOfSpeech: "adv.",
      meaning: "마지못해",
      synonym: "reluctantly",
      antonym: "eagerly",
      definition: "in a way that shows unwillingness or little energy",
      bookSentence:
        "It took several more minutes of reassurance by Mrs. Frisby before the shrew grudgingly moved aside . . .",
      example:
        "While some embraced the new policy enthusiastically, others only grudgingly agreed.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "He grudgingly agreed to help."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "After the teacher insisted twice, the student grudgingly picked up the trash he had dropped."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My brother grudgingly shared his snacks after I reminded him he owed me a favor."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the manager threatened to cancel the trip, the interns grudgingly finished the report over the weekend."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though he still disagreed with the new schedule, the coach grudgingly accepted it once the entire team voted in favor."
        }
      ]
    },

    {
      id: 5,
      word: "poised",
      partOfSpeech: "adj.",
      meaning: "(…을 할) 준비가 다 된",
      synonym: "ready",
      antonym: "unprepared",
      definition: "prepared and waiting for something to happen",
      bookSentence:
        "The block was poised and in position; the hole was exactly the right size and shape.",
      example:
        "The musical actors stood poised on the stage in anticipation of the rising curtain.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The runners were poised at the starting line."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "The debate team sat poised at their desks, ready to respond the moment the timer started."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My cat sat poised by the window, ready to pounce the second the bird landed."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the announcement was expected any minute, the reporters stood poised with their cameras ready."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the gymnast's legs were shaking with nerves, she stood poised at the edge of the mat, completely focused on the routine ahead."
        }
      ]
    },

    {
      id: 6,
      word: "gather",
      partOfSpeech: "verb",
      meaning: "모이다[모으다]",
      synonym: "assemble",
      antonym: "disperse",
      definition: "to come together in a group",
      bookSentence:
        "All the rest [of the rats] were gathered in the large assembly room Mrs. Frisby had seen when she got out of the lift.",
      example:
        "The students will gather in the auditorium for the school assembly at 9 a.m.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The students began to gather outside."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Every morning, our class gathers in the hallway before the first bell rings."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My whole family gathers at my grandmother's house every Sunday for dinner."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because dark clouds were gathering quickly, the lifeguards ordered everyone out of the water."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the concert had been postponed twice, thousands of fans still gathered outside the stadium hours before the gates opened."
        }
      ]
    },

    {
      id: 7,
      word: "repay",
      partOfSpeech: "verb",
      meaning: "갚다[상환하다]",
      synonym: "",
      antonym: "",
      definition: "to pay back or to reward someone or something",
      bookSentence:
        "\"Mrs. Frisby, it seems you have more than repaid us for the help we gave you in moving your house.\"",
      example:
        "Tommy promised to repay his friend for lending him his skateboard.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "She promised to repay the loan."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "The scholarship winner said she hoped to repay her community by volunteering after graduation."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "I baked cookies to repay my neighbor for watering our plants while we were away."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because his friend had covered his lunch that day, Sam offered to repay him the next morning."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the family had little money themselves, they insisted on repaying every bit of the kindness their neighbors had shown them."
        }
      ]
    },

    {
      id: 8,
      word: "circle",
      partOfSpeech: "verb",
      meaning: "빙빙 돌다",
      synonym: "orbit",
      antonym: "",
      definition: "to move in a circle, often around something",
      bookSentence:
        ". . . [the rat] got up and ran again, this time more slowly, circling vaguely to the right.",
      example:
        "The children circled around the campfire and roasted marshmallows.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The plane began to circle the airport."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "During recess, the younger kids love to circle the playground on their scooters."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "A hawk circled slowly above the field, searching for mice in the grass."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the runway was temporarily closed, the pilot had to circle above the city for twenty extra minutes."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the shark never came close to the swimmers, it continued to circle the boat for nearly an hour, making everyone nervous."
        }
      ]
    },

    {
      id: 9,
      word: "unconscious",
      partOfSpeech: "adj.",
      meaning: "의식을 잃은, 의식이 없는",
      synonym: "senseless",
      antonym: "conscious",
      definition: "not being awake and having no knowledge of what is around oneself",
      bookSentence:
        "\"Is [Brutus] dead?\" \"No. He's unconscious, but he's alive and breathing. I think he'll revive if I can just get him to swallow this.\"",
      example:
        "Police and emergency services arrived at the middle school where a student was unconscious.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "He was unconscious for a few minutes."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "In health class, we learned the first steps to take if someone becomes unconscious."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My grandfather briefly went unconscious after standing up too quickly, but he recovered within seconds."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because he had hit his head hard during the fall, the skater was unconscious by the time paramedics arrived."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the patient had been unconscious for nearly an hour after the surgery, the doctors reassured the family that this was completely normal."
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
          sentence: "She stared incredulously at the results."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "The students looked at each other incredulously when the teacher announced there would be no homework all week."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My dad laughed incredulously when I told him I had cleaned my entire room in ten minutes."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the news seemed too good to be true, the whole team reacted incredulously to the announcement of a paid vacation."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the evidence was right in front of him, the detective still shook his head incredulously, refusing to believe his own partner was involved."
        }
      ]
    },

    {
      id: 11,
      word: "overlook",
      partOfSpeech: "verb",
      meaning: "못 보고 넘어가다, 간과하다",
      synonym: "miss",
      antonym: "recognize",
      definition: "to fail to notice",
      bookSentence:
        ". . . the naturalness bias might influence the way we present ourselves to others, so that our achievements are not unduly overlooked.",
      example:
        "Jay got sick from drinking spoiled milk because he overlooked the expiration date.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "He overlooked a small mistake."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "The teacher reminded students not to overlook the instructions written at the top of the test."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "I almost overlooked the coupon hidden at the bottom of the receipt."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the report was so long, the editor accidentally overlooked a typo on the very last page."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the inspector examined the building carefully, he initially overlooked a small crack that later turned out to be a serious structural problem."
        }
      ]
    },

    {
      id: 12,
      word: "attribute",
      partOfSpeech: "noun",
      meaning: "자질, 속성",
      synonym: "characteristic",
      antonym: "",
      definition: "a quality that someone has",
      bookSentence:
        "Arrogance is an unattractive attribute and during a job interview, for instance, it may signal that you will be disagreeable . . .",
      example:
        "Patience is an essential attribute for surgeons performing delicate operations.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "Patience is a good attribute."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our coach always says that teamwork is the most important attribute for a winning team."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My grandmother's kindness is the attribute I admire most about her."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because honesty was such a valued attribute in their family, the children were taught never to lie, even about small things."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although he lacked natural talent at first, the young violinist's greatest attribute turned out to be his willingness to practice for hours every single day."
        }
      ]
    },

    {
      id: 13,
      word: "quest",
      partOfSpeech: "noun",
      meaning: "탐색, (원하는 것을) 좇음",
      synonym: "pursuit",
      antonym: "",
      definition: "an attempt to achieve something difficult",
      bookSentence:
        "In the quest for success, whether personal, professional, or academic, one trait consistently emerges as a critical determinant: perseverance.",
      example:
        "Dr. Han dedicated her entire life to a quest for cancer treatment methods.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "She began her quest for the truth."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our class project became a quest to find the most efficient way to recycle plastic."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My weekend quest was to find the perfect birthday gift for my best friend."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the ancient map hinted at a hidden treasure, the explorers set out on a quest across the mountains."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the quest for a cure had lasted over a decade, the research team refused to give up, convinced a breakthrough was finally within reach."
        }
      ]
    },

    {
      id: 14,
      word: "perseverance",
      partOfSpeech: "noun",
      meaning: "인내(심)",
      synonym: "persistence",
      antonym: "",
      definition: "continued effort to achieve something, even when this is difficult",
      bookSentence:
        "The importance of perseverance extends beyond anecdotal evidence and inspirational stories.",
      example:
        "The injured athlete showed perseverance during many months of intense physical therapy.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "Her perseverance paid off."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our teacher praised the whole class for showing perseverance during the difficult math unit."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Learning to ride a bike took a lot of perseverance and quite a few scraped knees."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the trail was longer and steeper than expected, only the hikers with real perseverance made it to the summit."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although she failed the audition three times in a row, her perseverance eventually earned her a spot in the orchestra."
        }
      ]
    },

    {
      id: 15,
      word: "contrary to",
      partOfSpeech: "phrase",
      meaning: "…에 반해서",
      synonym: "opposite to",
      antonym: "same as",
      definition: "in a different way from something",
      bookSentence:
        "Contrary to the notion that failure is a negative outcome, . . . experiencing and overcoming failures can actually strengthen perseverance.",
      example:
        "Contrary to popular belief, camels store fat instead of water inside their humps.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "Contrary to expectations, the test was easy."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Contrary to what most students expected, the pop quiz turned out to be extremely simple."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Contrary to the weather forecast, it rained all afternoon during our picnic."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the coach changed the lineup at the last minute, the starting formation ended up contrary to everything the players had practiced all week."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Contrary to popular belief that expensive equipment guarantees success, the underfunded team ended up winning the championship through sheer teamwork and effort."
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
      relatedWord: "harvesting",
      question: "Which activity is an example of harvesting?",
      choices: [
        "Planting tiny seeds in the springtime soil.",
        "Picking ripe apples from the orchard trees in autumn.",
        "Watering young seedlings every morning.",
        "Pulling weeds out of an empty garden bed."
      ],
      answer: 1,
      explanation: "harvesting(수확, 거둬들이기)는 농작물이나 식물, 동물, 물고기 등을 거두어들이는 활동을 뜻합니다."
    },
    {
      id: 2,
      relatedWord: "harvesting",
      question: "Farmers who are harvesting wheat in the fall are most likely...",
      choices: [
        "planting new seeds for next year.",
        "cutting and collecting the fully grown crop.",
        "watering the fields for the first time.",
        "clearing rocks from an empty field."
      ],
      answer: 1,
      explanation: "harvesting은 다 자란 작물을 베어 거두어들이는 과정을 뜻합니다."
    },

    {
      id: 3,
      relatedWord: "rabies",
      question: "Which situation shows a concern about rabies?",
      choices: [
        "A person washing their hands before dinner.",
        "A doctor treating a patient who was bitten by a stray dog acting strangely.",
        "A child getting a routine eye exam.",
        "A patient recovering from a common cold."
      ],
      answer: 1,
      explanation: "rabies(광견병)는 감염된 동물에게 물려 전염될 수 있는 신경계 질병입니다."
    },
    {
      id: 4,
      relatedWord: "rabies",
      question: "If left untreated, rabies in a person who has been bitten by an infected animal can lead to...",
      choices: [
        "complete recovery within a day with no treatment needed.",
        "a serious, potentially fatal illness.",
        "a mild rash that disappears on its own.",
        "no health effects at all."
      ],
      answer: 1,
      explanation: "rabies는 제때 치료하지 않으면 사망에 이를 수 있는 위험한 질병입니다."
    },

    {
      id: 5,
      relatedWord: "impact",
      question: "Which situation best shows an impact?",
      choices: [
        "A feather slowly floating down to the ground.",
        "A car crashing into a guardrail at high speed.",
        "A cloud drifting silently across the sky.",
        "A leaf gently falling from a tree."
      ],
      answer: 1,
      explanation: "impact(충돌, 충격)는 한 물체가 다른 물체에 부딪히는 힘이나 작용을 뜻합니다."
    },
    {
      id: 6,
      relatedWord: "impact",
      question: "A phone case is designed to protect a phone by...",
      choices: [
        "making the phone heavier for no reason.",
        "absorbing some of the impact if the phone is dropped.",
        "changing the phone's color.",
        "increasing the phone's battery life."
      ],
      answer: 1,
      explanation: "phone case는 낙하 시 발생하는 impact(충격)를 흡수해 기기를 보호하는 역할을 합니다."
    },

    {
      id: 7,
      relatedWord: "grudgingly",
      question: "Which situation shows someone acting grudgingly?",
      choices: [
        "Volunteering eagerly for extra chores with a big smile.",
        "Sighing and slowly agreeing to help only after being asked three times.",
        "Offering to help before anyone even asks.",
        "Cheerfully finishing a task ahead of schedule."
      ],
      answer: 1,
      explanation: "grudgingly(마지못해)는 내키지 않지만 마지못해 하는 태도를 뜻합니다."
    },
    {
      id: 8,
      relatedWord: "grudgingly",
      question: "If an employee grudgingly accepted the new schedule, that means the employee...",
      choices: [
        "was thrilled about the change from the very beginning.",
        "accepted it reluctantly, without much enthusiasm.",
        "immediately quit the job in protest.",
        "never found out about the schedule change."
      ],
      answer: 1,
      explanation: "grudgingly는 내키지 않지만 결국 받아들이는 모습을 뜻합니다."
    },

    {
      id: 9,
      relatedWord: "poised",
      question: "Which situation shows someone poised and ready?",
      choices: [
        "A runner still asleep in bed on race day.",
        "A sprinter crouched at the starting line, waiting for the signal.",
        "A student who forgot about the test completely.",
        "A performer who left the theater before the show began."
      ],
      answer: 1,
      explanation: "poised(…을 할 준비가 다 된)는 어떤 일이 일어나기를 준비하고 기다리는 상태를 뜻합니다."
    },
    {
      id: 10,
      relatedWord: "poised",
      question: "A gymnast standing poised at the edge of the mat is most likely...",
      choices: [
        "completely unaware that her routine is about to start.",
        "mentally and physically ready to begin her routine at any moment.",
        "walking away from the competition.",
        "still warming up in a different room."
      ],
      answer: 1,
      explanation: "poised는 준비를 마치고 다음 행동을 기다리는 상태를 나타냅니다."
    },

    {
      id: 11,
      relatedWord: "gather",
      question: "Which situation is an example of gathering?",
      choices: [
        "A crowd of people scattering in every direction.",
        "Classmates coming together in the hallway before class starts.",
        "A single person sitting alone in an empty room.",
        "Two strangers walking in opposite directions."
      ],
      answer: 1,
      explanation: "gather(모이다[모으다])는 한 곳에 함께 모이는 것을 뜻합니다."
    },
    {
      id: 12,
      relatedWord: "gather",
      question: "If dark clouds are gathering in the sky, that most likely means...",
      choices: [
        "the clouds are spreading apart and disappearing.",
        "the clouds are coming together, possibly signaling a storm.",
        "the sky is becoming completely clear.",
        "there will be no change in the weather."
      ],
      answer: 1,
      explanation: "gather는 여러 요소가 한데 모이는 것을 뜻하므로, 먹구름이 몰려드는 상황에 자연스럽게 쓰입니다."
    },

    {
      id: 13,
      relatedWord: "repay",
      question: "Which situation is an example of repaying someone?",
      choices: [
        "Borrowing money and never mentioning it again.",
        "Returning the exact amount of money you borrowed from a friend.",
        "Forgetting a favor someone did for you.",
        "Asking to borrow even more money without paying anything back."
      ],
      answer: 1,
      explanation: "repay(갚다[상환하다])는 빌린 것을 돌려주거나 은혜에 보답하는 것을 뜻합니다."
    },
    {
      id: 14,
      relatedWord: "repay",
      question: "A scholarship recipient who wants to repay her community would most likely...",
      choices: [
        "ignore the community that supported her.",
        "volunteer or give back in some way to show her gratitude.",
        "ask the community for even more money.",
        "move away and never mention the scholarship again."
      ],
      answer: 1,
      explanation: "repay는 도움을 받은 만큼 되갚거나 보답하려는 행동을 뜻합니다."
    },

    {
      id: 15,
      relatedWord: "circle",
      question: "Which situation is an example of circling?",
      choices: [
        "A car driving in a completely straight line.",
        "A hawk flying in loops above a field while hunting.",
        "A person standing still in one spot.",
        "A train stopping at a single station."
      ],
      answer: 1,
      explanation: "circle(빙빙 돌다)은 어떤 것 주위를 원을 그리며 움직이는 것을 뜻합니다."
    },
    {
      id: 16,
      relatedWord: "circle",
      question: "If an airplane is circling above an airport, that most likely means the plane is...",
      choices: [
        "already parked at the gate.",
        "flying in loops while waiting for permission to land.",
        "flying in a completely straight path away from the airport.",
        "still on the ground being refueled."
      ],
      answer: 1,
      explanation: "circle는 원을 그리며 도는 움직임을 뜻하므로, 착륙 허가를 기다리며 상공을 도는 상황에 알맞습니다."
    },

    {
      id: 17,
      relatedWord: "unconscious",
      question: "Which situation describes someone who is unconscious?",
      choices: [
        "A person wide awake and chatting with friends.",
        "A person who fainted and is not responding to anyone around them.",
        "A person quietly reading a book.",
        "A person taking a short, restful nap they can wake up from easily."
      ],
      answer: 1,
      explanation: "unconscious(의식을 잃은, 의식이 없는)는 깨어 있지 않고 주변을 전혀 인식하지 못하는 상태를 뜻합니다."
    },
    {
      id: 18,
      relatedWord: "unconscious",
      question: "If someone becomes unconscious after a hard fall, bystanders should most likely...",
      choices: [
        "assume nothing is wrong and walk away.",
        "call for emergency medical help immediately.",
        "wait a few days to see if they wake up on their own.",
        "ignore the situation completely."
      ],
      answer: 1,
      explanation: "unconscious 상태는 의학적 응급 상황일 수 있으므로 즉시 도움을 요청해야 합니다."
    },

    {
      id: 19,
      relatedWord: "incredulously",
      question: "Which situation shows someone reacting incredulously?",
      choices: [
        "Nodding calmly because the news was completely expected.",
        "Staring wide-eyed and saying, \"There's no way that's true!\"",
        "Falling asleep during an important announcement.",
        "Smiling politely without any reaction at all."
      ],
      answer: 1,
      explanation: "incredulously(믿지 않는 듯이, 못 믿겠다는 듯이)는 무언가를 믿을 수 없다는 태도를 뜻합니다."
    },
    {
      id: 20,
      relatedWord: "incredulously",
      question: "If a coach looked at the scoreboard incredulously after a surprising win, that means the coach...",
      choices: [
        "had expected the result all along.",
        "could hardly believe what had just happened.",
        "was not paying attention to the game at all.",
        "already knew the final score before the game started."
      ],
      answer: 1,
      explanation: "incredulously는 믿기 어려운 상황에 놀라며 반응하는 모습을 나타냅니다."
    },

    {
      id: 21,
      relatedWord: "overlook",
      question: "Which situation is an example of overlooking something?",
      choices: [
        "Carefully checking every detail before submitting a report.",
        "Missing an obvious typo on the very first page of an essay.",
        "Reading a document twice to make sure nothing was missed.",
        "Double-checking every answer before turning in a test."
      ],
      answer: 1,
      explanation: "overlook(못 보고 넘어가다, 간과하다)는 어떤 것을 알아차리지 못하고 지나치는 것을 뜻합니다."
    },
    {
      id: 22,
      relatedWord: "overlook",
      question: "If a shopper overlooked the expiration date on a carton of milk, that means the shopper...",
      choices: [
        "read the date carefully before buying it.",
        "failed to notice the date at all.",
        "chose not to buy the milk because of the date.",
        "asked a store employee about the date."
      ],
      answer: 1,
      explanation: "overlook는 무언가를 미처 알아차리지 못하고 지나쳤다는 뜻입니다."
    },

    {
      id: 23,
      relatedWord: "attribute",
      question: "Which of the following is an example of a personal attribute?",
      choices: [
        "The color of a person's backpack.",
        "A person's honesty and kindness toward others.",
        "The brand of a person's shoes.",
        "The weather on a particular day."
      ],
      answer: 1,
      explanation: "attribute(자질, 속성)는 어떤 사람이 지닌 특성이나 자질을 뜻합니다."
    },
    {
      id: 24,
      relatedWord: "attribute",
      question: "A coach who values teamwork as an important attribute would most likely praise a player who...",
      choices: [
        "only focuses on scoring points for personal glory.",
        "consistently helps and supports teammates during the game.",
        "refuses to pass the ball to anyone else.",
        "ignores the coach's instructions during practice."
      ],
      answer: 1,
      explanation: "attribute는 개인이 지닌 자질을 뜻하므로, 팀워크를 중시하는 선수의 행동이 좋은 예입니다."
    },

    {
      id: 25,
      relatedWord: "quest",
      question: "Which situation best describes a quest?",
      choices: [
        "Sitting at home and never attempting anything new.",
        "Setting out on a difficult journey to find a legendary treasure.",
        "Watching television for an entire afternoon.",
        "Taking a short nap after lunch."
      ],
      answer: 1,
      explanation: "quest(탐색, 원하는 것을 좇음)는 어렵고 힘든 것을 이루기 위한 시도를 뜻합니다."
    },
    {
      id: 26,
      relatedWord: "quest",
      question: "A scientist's quest to find a cure for a rare disease would most likely involve...",
      choices: [
        "giving up after the very first failed experiment.",
        "years of dedicated research despite many setbacks.",
        "ignoring the disease completely.",
        "a single afternoon of casual reading."
      ],
      answer: 1,
      explanation: "quest는 어려운 목표를 이루기 위한 지속적인 시도를 의미합니다."
    },

    {
      id: 27,
      relatedWord: "perseverance",
      question: "Which situation best shows perseverance?",
      choices: [
        "Giving up on a difficult puzzle after the first failed attempt.",
        "Practicing a difficult piano piece every day for months despite mistakes.",
        "Quitting a sport the moment it becomes challenging.",
        "Avoiding hard tasks whenever possible."
      ],
      answer: 1,
      explanation: "perseverance(인내(심))는 어려워도 포기하지 않고 계속 노력하는 것을 뜻합니다."
    },
    {
      id: 28,
      relatedWord: "perseverance",
      question: "An athlete recovering from a serious injury who keeps attending physical therapy for months is showing...",
      choices: [
        "a complete lack of motivation.",
        "strong perseverance despite the difficulty.",
        "indifference toward their recovery.",
        "a decision to quit the sport entirely."
      ],
      answer: 1,
      explanation: "perseverance는 힘든 상황에서도 꾸준히 노력을 지속하는 태도를 뜻합니다."
    },

    {
      id: 29,
      relatedWord: "contrary to",
      question: "Which sentence correctly uses the phrase contrary to?",
      choices: [
        "Contrary to popular belief, most sharks are not actually dangerous to humans.",
        "Contrary to popular belief, and just as everyone expected, the movie was terrible.",
        "He agreed with the idea, contrary to what everyone else thought too.",
        "Contrary to his own opinion, he still believed the same thing."
      ],
      answer: 0,
      explanation: "contrary to(…에 반해서)는 일반적인 생각이나 예상과 다르다는 것을 나타낼 때 씁니다."
    },
    {
      id: 30,
      relatedWord: "contrary to",
      question: "If a result was contrary to the scientists' prediction, that means the result...",
      choices: [
        "matched the prediction exactly.",
        "turned out differently from what was expected.",
        "was never actually measured.",
        "confirmed everything the scientists believed."
      ],
      answer: 1,
      explanation: "contrary to는 예상이나 통념과 다르게 나타난 결과를 표현할 때 사용됩니다."
    }
  ],


  // ==============================
  // WORD BOX SETS
  // Set 1: DEBATE WORDS, Set 2~3: NOVEL WORDS
  // (WEEK01~04와 동일한 방식으로 그룹 구성)
  // ==============================

  wordBoxSets: [

    {
      id: 1,
      words: [
        "overlook",
        "attribute",
        "quest",
        "perseverance",
        "contrary to"
      ],
      sentences: [
        { text: "In such a long document, it's easy to ___ a small formatting error.", answer: "overlook" },
        { text: "Honesty is the single most important ___ she looks for when hiring new employees.", answer: "attribute" },
        { text: "The knights set out on a dangerous ___ to recover the stolen crown.", answer: "quest" },
        { text: "Learning a new language as an adult requires enormous ___, since progress is often slow.", answer: "perseverance" },
        { text: "___ what the weather forecast predicted, the entire weekend turned out to be sunny and warm.", answer: "contrary to" }
      ]
    },

    {
      id: 2,
      words: [
        "harvesting",
        "rabies",
        "impact",
        "grudgingly",
        "poised"
      ],
      sentences: [
        { text: "The farmers hired extra workers to help with ___ before the first frost arrived.", answer: "harvesting" },
        { text: "Because the fox was behaving strangely, the park ranger warned hikers about the risk of ___.", answer: "rabies" },
        { text: "The force of the ___ was strong enough to crack the windshield.", answer: "impact" },
        { text: "After losing the argument, my little brother ___ handed over the remote control.", answer: "grudgingly" },
        { text: "The diver stood ___ on the edge of the board, waiting for the whistle to blow.", answer: "poised" }
      ]
    },

    {
      id: 3,
      words: [
        "gather",
        "repay",
        "circle",
        "unconscious",
        "incredulously"
      ],
      sentences: [
        { text: "Every year, thousands of fans ___ outside the stadium hours before the championship game begins, forming one enormous crowd.", answer: "gather" },
        { text: "Winning the scholarship inspired her to ___ her community through years of volunteer work.", answer: "repay" },
        { text: "The vulture began to ___ slowly above the desert, searching for food.", answer: "circle" },
        { text: "The boxer was declared ___ after failing to get up before the referee's count reached ten.", answer: "unconscious" },
        { text: "My teacher looked at me ___ when I said I had finished the entire project in one night.", answer: "incredulously" }
      ]
    }
  ],


  // ==============================
  // PREFIX PRACTICE
  // MINI LESSON(어근 -sci-, "knowledge") 관련 4지선다 훈련
  // 문항 4/5는 교재에 실제로 나온 확인 문제를 그대로 활용
  // ==============================

  prefixPractice: [

    {
      id: 1,
      relatedWord: "-sci-",
      question: "What does the root -sci- mean?",
      choices: [
        "to feel",
        "knowledge",
        "to hide",
        "power"
      ],
      answer: 1,
      explanation: "-sci-는 'knowledge(지식, 앎)'이라는 뜻을 가진 어근입니다. 예: science(과학, 지식)."
    },

    {
      id: 2,
      relatedWord: "unconscionable",
      question: "Charging a desperately sick patient ten times the normal price for medicine would most likely be considered...",
      choices: [
        "a fair and standard business practice.",
        "unconscionable, because it is unacceptable given how extreme it is.",
        "a minor and forgettable mistake.",
        "required by law in every country."
      ],
      answer: 1,
      explanation: "unconscionable은 '지나치게 극단적이어서 용납할 수 없는'이라는 뜻입니다. un-(부정) + conscionable(용납할 만한, -sci-에서 파생)의 반대말입니다."
    },

    {
      id: 3,
      relatedWord: "science",
      question: "Which of the following best fits the definition of science?",
      choices: [
        "Believing something is true without any testing or evidence.",
        "Gaining knowledge about the world through careful studies and experiments.",
        "Making decisions based only on personal feelings.",
        "Repeating an old myth without questioning it."
      ],
      answer: 1,
      explanation: "science는 신중한 연구와 실험을 통해 얻은 지식을 뜻합니다."
    },

    {
      id: 4,
      relatedWord: "subconscious",
      question: "Choose the sentence that does NOT use the correct meaning of the root sci.",
      choices: [
        "The unconscionable scammer exploited people using a voice phishing scheme.",
        "Advances in science improved medical treatments through rigorous research.",
        "The engineer tightened the subconscious to stabilize the unstable bridge.",
        "Barney's conscience urged him to return the wallet filled with cash."
      ],
      answer: 2,
      explanation: "subconscious는 마음속 지식의 영역을 뜻하는 단어로, 다리와 같은 물리적 구조물에는 쓸 수 없습니다. 따라서 c가 -sci-의 뜻을 잘못 사용한 문장입니다."
    },

    {
      id: 5,
      relatedWord: "conscience",
      question: "Choose the sentence that uses the correct meaning of the root sci.",
      choices: [
        "Robin's guilty conscience made her admit everything she knew to the judge.",
        "David is nescient about cars because he worked as a mechanic for 20 years.",
        "Science often incorporates ancient myths without any experiments.",
        "The unconscionable conduct of his son made the man extremely proud."
      ],
      answer: 0,
      explanation: "conscience는 옳고 그름을 판단하는 내면의 지식, 즉 양심을 뜻합니다. 죄책감으로 인해 사실을 털어놓는 상황이 자연스러운 예입니다."
    },

    {
      id: 6,
      relatedWord: "nescient",
      question: "If someone is nescient about a topic, that means they...",
      choices: [
        "are a world-renowned expert on it.",
        "lack knowledge or awareness about it.",
        "have studied it for over twenty years.",
        "wrote the textbook on the subject."
      ],
      answer: 1,
      explanation: "nescient는 '어떤 것에 대해 알지 못하는'이라는 뜻입니다. ne-(부정) + -sci-(knowledge)."
    }
  ],


  // ==============================
  // MOCK TEST 구성
  // WEEK01~04와 동일한 섹션 배점 구조
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

window.VOCAB_DATA["vocabulary-workbook"].week05 = WEEK01;

})();
