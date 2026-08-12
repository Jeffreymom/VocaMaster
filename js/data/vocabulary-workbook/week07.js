// ==============================
// VOCABULARY WORKBOOK - WEEK 07 DATA
// ----------------------------------------
// IIFE로 감싸서 WEEK01이라는 지역 변수명이 다른 과목/WEEK
// 데이터 파일과 충돌하지 않도록 한다. 외부에서는 항상
// window.VOCAB_DATA["vocabulary-workbook"].week07 으로 접근한다.
//
// 참고: NOVEL WORDS의 출처가 이번 주부터 Nathaniel Hawthorne의
// "Tanglewood Tales" 중 "The Gorgon's Head"(Perseus 신화)로 바뀐다.
// Mini Lesson도 WEEK03~06의 어근(root) 대신 다시 접두사(prefix)
// "over-"로 돌아온다.
// ==============================

(function () {

const WEEK01 = {
  week: 7,
  title: "WEEK 07",
  totalWords: 15,

  prefixLesson: {
    prefix: "over-",
    meaning: "above, beyond",
    examples: [
      {
        word: "override",
        partOfSpeech: "verb",
        definition: "to use authority above someone else's decision"
      },
      {
        word: "overwhelm",
        partOfSpeech: "verb",
        definition: "to affect someone beyond what they can handle"
      },
      {
        word: "overcharge",
        partOfSpeech: "verb",
        definition: "to charge above the fair or correct price"
      },
      {
        word: "overrate",
        partOfSpeech: "verb",
        definition: "to rate something above its true value"
      },
      {
        word: "oversimplify",
        partOfSpeech: "verb",
        definition: "to explain something beyond simple accuracy by leaving out important details"
      }
    ]
  },

  words: [
    {
      id: 1,
      word: "overflow",
      partOfSpeech: "verb",
      meaning: "(사람들로) 넘쳐나다",
      synonym: "spill out",
      antonym: "empty",
      definition: "(of people or things) to fill a space to capacity and spread beyond its limits",
      bookSentence:
        "The children . . . kept overflowing from the porch of Tanglewood, and scampering along the gravel-walk . . .",
      example:
        "The amusement park was overflowing with people during the holiday weekend.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The river began to overflow."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "During the assembly, students overflowed out of the gym and into the hallway."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "The bathtub overflowed because I forgot to turn off the water."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because so many fans showed up, the parking lot quickly overflowed onto the street."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the theater added extra seating, the crowd still overflowed into the lobby before the concert began."
        }
      ]
    },

    {
      id: 2,
      word: "scamper",
      partOfSpeech: "verb",
      meaning: "날쌔게 움직이다",
      synonym: "hustle",
      antonym: "stroll",
      definition: "(especially of small children and animals) to run with small, quick steps",
      bookSentence:
        "The children . . . kept overflowing from the porch of Tanglewood, and scampering along the gravel-walk . . .",
      example:
        "The children scampered off the playground and back to the classroom once the bell rang.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The squirrel scampered up the tree."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "During recess, the kindergartners scampered across the playground the moment the bell rang."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My puppy scampers to the door every time he hears the mail carrier outside."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because a hawk suddenly appeared overhead, the mice scampered back into their burrow."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the yard was covered in fresh snow, the excited kittens scampered around chasing each other for nearly an hour."
        }
      ]
    },

    {
      id: 3,
      word: "venerable",
      partOfSpeech: "adj.",
      meaning: "공경할 만한, 덕망[신망] 있는",
      synonym: "admirable",
      antonym: "disgraceful",
      definition: "deserving respect, especially because of long experience or age",
      bookSentence:
        "[Eustace] had reached . . . the venerable age of eighteen years; so that he felt quite like a grandfather towards Periwinkle . . .",
      example:
        "The venerable old sage was celebrated for his decades of publications on philosophy.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The venerable teacher retired after fifty years."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our school library is named after a venerable professor who taught there for over four decades."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My venerable grandmother still gives the best advice in our entire family."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because he had guided the company through three decades of change, the venerable founder was honored at the retirement dinner."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the venerable scholar rarely gave interviews, she agreed to speak with students who had traveled across the country just to hear her lecture."
        }
      ]
    },

    {
      id: 4,
      word: "expedition",
      partOfSpeech: "noun",
      meaning: "탐험, 원정",
      synonym: "journey",
      antonym: "",
      definition: "a long, organized trip for a particular purpose",
      bookSentence:
        "By the by, being much addicted to wading through streamlets and across meadows, he had put on cowhide boots for the expedition.",
      example:
        "Lisa's father sailed away on an expedition to recover a missing fishing boat.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The team planned an expedition to the Arctic."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our science class is preparing for a weekend expedition to study tide pools along the coast."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Our grocery run turned into a mini expedition once we got lost looking for a new store."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because supplies were running low, the explorers organized another expedition before winter arrived."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though the mountain expedition faced sudden storms and equipment failures, the team eventually reached the summit after three difficult weeks."
        }
      ]
    },

    {
      id: 5,
      word: "dignity",
      partOfSpeech: "noun",
      meaning: "위엄, 품위",
      synonym: "honor",
      antonym: "dishonor",
      definition: "the importance and value that a person has, that makes other people respect them or makes them respect themselves",
      bookSentence:
        "[He wore a pair of green spectacles], probably, less for the preservation of his eyes than for the dignity that they imparted to his countenance.",
      example:
        "As a man of many responsibilities, the president made sure to act with dignity at all times.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "She handled the loss with dignity."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our principal reminded students to treat every classmate with dignity, no matter their differences."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Even during the embarrassing mishap, my uncle managed to laugh it off with dignity."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the workers had been treated unfairly for years, the new manager made a point of restoring their dignity on the job."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although he had lost the election by a wide margin, the candidate gave his concession speech with such dignity that even his opponents applauded."
        }
      ]
    },

    {
      id: 6,
      word: "erudition",
      partOfSpeech: "noun",
      meaning: "학식, 박식",
      synonym: "scholarship",
      antonym: "ignorance",
      definition: "the state of having a lot of knowledge that is known by few people",
      bookSentence:
        "Working up his sophomorical erudition with a good deal of tact, [Eustace] disregarded all classical authorities whenever . . . his imagination impelled him to do so.",
      example:
        "Professor Tran, known for her great wit and erudition, published several influential books.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "His erudition impressed the professors."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our history teacher's erudition made even the most obscure historical events fascinating."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My grandfather's erudition on local plants always amazes the neighbors on our walks."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because she had spent decades studying ancient languages, the researcher's erudition was recognized across the entire field."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the young scholar looked unremarkable at first glance, his erudition on medieval history left even the senior professors speechless."
        }
      ]
    },

    {
      id: 7,
      word: "enterprise",
      partOfSpeech: "noun",
      meaning: "(특히 모험성) 대규모 사업",
      synonym: "venture",
      antonym: "",
      definition: "a risky, dangerous, or difficult job or task",
      bookSentence:
        ". . . he resolved to send Perseus on a dangerous enterprise, in which he would probably be killed, and then to do some great mischief to Danaë herself.",
      example:
        "Climbing Mount Everest is a challenging enterprise due to its extreme conditions.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "Building the tunnel was a massive enterprise."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our class debate project turned into quite an enterprise once we realized how much research it required."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "Planning a surprise party for fifty guests became a bigger enterprise than I expected."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the terrain was so unpredictable, crossing the desert on foot became a dangerous enterprise for the early explorers."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though investors warned that the deep-sea mining enterprise was far too risky, the company pressed ahead with the project anyway."
        }
      ]
    },

    {
      id: 8,
      word: "undertake",
      partOfSpeech: "verb",
      meaning: "착수하다[하다]",
      synonym: "carry out",
      antonym: "refuse",
      definition: "to do or agree to do something, especially something that will take a long time or be difficult",
      bookSentence:
        "So this bad-hearted king spent a long while in considering what was the most dangerous thing that a young man could possibly undertake to perform.",
      example:
        "The museum decided to undertake a major expansion next year to accommodate more visitors.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "She agreed to undertake the project."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our club decided to undertake a full renovation of the school garden this semester."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My dad finally decided to undertake fixing the leaky roof himself."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because no one else was willing to lead the investigation, the young detective chose to undertake the case alone."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the repairs seemed nearly impossible with such a small budget, the volunteers still undertook the restoration of the historic building."
        }
      ]
    },

    {
      id: 9,
      word: "gallant",
      partOfSpeech: "adj.",
      meaning: "용감한[용맹한]",
      synonym: "courageous",
      antonym: "cowardly",
      definition: "showing no fear of dangerous or difficult things",
      bookSentence:
        "\"You can, if you are as brave a youth as I believe you to be,\" replied King Polydectes . . . \"Pray do so, my gallant youth,\" rejoined the king.",
      example:
        "The gallant firefighter entered the blazing house to rescue trapped residents.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The gallant knight rode into battle."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "In the story we read, the gallant hero stood up to protect his friends from the dragon."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My little brother made a gallant attempt to fix the broken fence all by himself."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the ship was sinking quickly, the gallant sailors worked without rest to save every passenger."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though he knew the odds were against him, the gallant firefighter rushed back into the burning building to search for the missing child."
        }
      ]
    },

    {
      id: 10,
      word: "abominable",
      partOfSpeech: "adj.",
      meaning: "심히 끔찍한",
      synonym: "horrendous",
      antonym: "attractive",
      definition: "very bad or unpleasant",
      bookSentence:
        "For the worst thing about these abominable Gorgons was, that, if once a poor mortal [gazed upon their faces, he was to] be changed from warm flesh and blood into cold and lifeless stone!",
      example:
        "The abominable smell from the garbage filled the hallway.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The weather was absolutely abominable."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Several students complained about the abominable smell coming from the science lab."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "The traffic on the highway this morning was abominable."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the pipes had burst overnight, an abominable smell filled the entire basement by morning."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the restaurant had excellent reviews online, our group experienced abominable service from the moment we sat down."
        }
      ]
    },

    {
      id: 11,
      word: "intuition",
      partOfSpeech: "noun",
      meaning: "직감, 직관력",
      synonym: "instinct",
      antonym: "",
      definition: "an ability to understand something based on one's feelings",
      bookSentence:
        "Greene and his team believe that humans often use intuition and emotions for moral decisions. But they use logic when emotions are not as strong.",
      example:
        "Olivia used intuition to identify authentic paintings among several counterfeit artworks.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "Her intuition told her something was wrong."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Sometimes a scientist's intuition leads to a hypothesis long before any data confirms it."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My intuition told me to double-check the oven before we left the house."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because something about the deal felt off, the investor trusted her intuition and walked away before signing."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Even though every report suggested the plan would succeed, the CEO's intuition warned him that something important had been overlooked."
        }
      ]
    },

    {
      id: 12,
      word: "characterize",
      partOfSpeech: "verb",
      meaning: "…의 특징을 묘사하다",
      synonym: "define",
      antonym: "",
      definition: "to describe something by stating its main qualities",
      bookSentence:
        "Utilitarianism is often characterized as consequentialism plus hedonism . . . there is a theory of what kind of thing matters (consequences), and a way of evaluating those consequences (hedonism).",
      example:
        "The coastal region was characterized as vulnerable because of frequent earthquakes.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "Critics characterized the film as brilliant."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our teacher asked us to characterize the main character's personality using evidence from the text."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "I would characterize my grandmother's cooking as simple but incredibly delicious."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the region experienced frequent droughts, geographers characterized the climate as semi-arid."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although early reviewers characterized the novel as overly complicated, later critics praised the very same complexity as its greatest strength."
        }
      ]
    },

    {
      id: 13,
      word: "value",
      partOfSpeech: "verb",
      meaning: "소중하게[가치 있게] 여기다",
      synonym: "appreciate",
      antonym: "despise",
      definition: "to consider something important",
      bookSentence:
        "Certain theories of consequentialism take a view of what is good for human beings, what they should value . . .",
      example:
        "Many citizens value peaceful neighborhoods with clean parks and good schools.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "I value your honest opinion."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our teacher always says she values effort just as much as the final grade."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My family has always valued spending Sunday evenings together."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because trust had been broken before, the new manager made it clear that she valued transparency above all else."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the company once valued speed over everything else, a series of costly mistakes eventually taught them to value careful planning instead."
        }
      ]
    },

    {
      id: 14,
      word: "approach",
      partOfSpeech: "noun",
      meaning: "접근법, 방법",
      synonym: "method",
      antonym: "",
      definition: "a way of considering or doing something",
      bookSentence:
        "Utilitarianism is one of the most prominent ethical theories, along with virtue ethical and Kantian approaches . . .",
      example:
        "The new approach to farming increased crop production in the dry region.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "She took a careful approach to the problem."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our teacher introduced a new approach to solving word problems using diagrams."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "My approach to studying is to review a little bit every single night instead of cramming."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the old marketing approach had stopped working, the company tried a completely different strategy."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the traditional approach had worked for decades, the young engineer's unconventional approach ultimately solved the problem no one else could."
        }
      ]
    },

    {
      id: 15,
      word: "justice",
      partOfSpeech: "noun",
      meaning: "공평성, 공정성",
      synonym: "fairness",
      antonym: "injustice",
      definition: "fairness in the way people are dealt with",
      bookSentence:
        "Utilitarianism also has trouble accounting for values such as justice and individual rights.",
      example:
        "The determined lawyer pursued justice for an innocent person who was wrongfully arrested.",
      modelSentences: [
        {
          type: "basic",
          label: "BASIC",
          sentence: "The court sought justice for the victim."
        },
        {
          type: "school",
          label: "SCHOOL",
          sentence:
            "Our social studies unit explored how different societies have defined justice throughout history."
        },
        {
          type: "daily",
          label: "DAILY LIFE",
          sentence:
            "It felt like justice when the bully was finally made to apologize in front of the whole class."
        },
        {
          type: "cause",
          label: "CAUSE & EFFECT",
          sentence:
            "Because the original trial had been unfair, the case was reopened in the name of justice."
        },
        {
          type: "challenge",
          label: "CHALLENGE",
          sentence:
            "Although the process took over a decade, the wrongfully convicted man was finally granted justice when new evidence proved his innocence."
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
      relatedWord: "overflow",
      question: "Which situation shows something overflowing?",
      choices: [
        "A sink with just a little water in the bottom.",
        "A stadium so full that fans spill out into the surrounding streets.",
        "An empty parking lot on a quiet Sunday morning.",
        "A glass filled exactly halfway with juice."
      ],
      answer: 1,
      explanation: "overflow((사람들로) 넘쳐나다)는 공간을 가득 채우고 그 한계를 넘어 퍼지는 것을 뜻합니다."
    },
    {
      id: 2,
      relatedWord: "overflow",
      question: "If a river is expected to overflow after heavy rain, nearby residents should most likely...",
      choices: [
        "ignore the warning completely.",
        "prepare for possible flooding in low-lying areas.",
        "expect the water level to drop suddenly.",
        "plan an outdoor picnic near the riverbank."
      ],
      answer: 1,
      explanation: "overflow는 한계를 넘어 물이 넘치는 것을 뜻하므로, 침수에 대비해야 합니다."
    },

    {
      id: 3,
      relatedWord: "scamper",
      question: "Which situation is an example of scampering?",
      choices: [
        "An elephant walking slowly across a field.",
        "A squirrel dashing quickly up a tree with small, rapid steps.",
        "A turtle crawling at a steady, slow pace.",
        "A sloth barely moving through the branches."
      ],
      answer: 1,
      explanation: "scamper(날쌔게 움직이다)는 작고 빠른 걸음으로 재빠르게 움직이는 것을 뜻합니다."
    },
    {
      id: 4,
      relatedWord: "scamper",
      question: "If children scampered away when the teacher approached, that means the children...",
      choices: [
        "walked calmly and slowly toward the teacher.",
        "ran off quickly with small, hurried steps.",
        "stood completely still without moving.",
        "sat down and waited patiently."
      ],
      answer: 1,
      explanation: "scamper는 작은 발걸음으로 재빠르게 도망치듯 움직이는 모습을 나타냅니다."
    },

    {
      id: 5,
      relatedWord: "venerable",
      question: "Which person would most likely be described as venerable?",
      choices: [
        "A toddler who just learned to walk.",
        "A respected elder who has spent fifty years serving the community.",
        "A stranger nobody has ever met before.",
        "A newborn baby."
      ],
      answer: 1,
      explanation: "venerable(공경할 만한, 덕망 있는)은 오랜 경험이나 나이로 인해 존경받을 만한 상태를 뜻합니다."
    },
    {
      id: 6,
      relatedWord: "venerable",
      question: "A venerable institution is most likely one that...",
      choices: [
        "was founded only last week.",
        "has earned deep respect over a long, distinguished history.",
        "has no reputation at all.",
        "is planning to close down immediately."
      ],
      answer: 1,
      explanation: "venerable은 오랜 시간에 걸쳐 쌓아온 명성과 존경을 뜻합니다."
    },

    {
      id: 7,
      relatedWord: "expedition",
      question: "Which situation is an example of an expedition?",
      choices: [
        "A short walk to the corner store.",
        "A team of scientists traveling to Antarctica to study glaciers for months.",
        "Sitting at home watching a nature documentary.",
        "A five-minute drive to a nearby friend's house."
      ],
      answer: 1,
      explanation: "expedition(탐험, 원정)은 특정 목적을 위한 길고 조직적인 여행을 뜻합니다."
    },
    {
      id: 8,
      relatedWord: "expedition",
      question: "A team preparing for a mountain expedition would most likely...",
      choices: [
        "pack no supplies and leave immediately.",
        "carefully plan routes, gather equipment, and prepare for changing weather.",
        "expect to return within a few minutes.",
        "avoid any kind of preparation at all."
      ],
      answer: 1,
      explanation: "expedition은 장기간에 걸친 조직적인 여행이므로 철저한 준비가 필요합니다."
    },

    {
      id: 9,
      relatedWord: "dignity",
      question: "Which situation shows someone acting with dignity?",
      choices: [
        "Screaming and blaming others after losing a competition.",
        "Accepting defeat calmly and congratulating the winner respectfully.",
        "Mocking an opponent in public after winning.",
        "Refusing to speak to anyone after a disappointing result."
      ],
      answer: 1,
      explanation: "dignity(위엄, 품위)는 자신과 타인에게 존중받을 만한 가치와 태도를 뜻합니다."
    },
    {
      id: 10,
      relatedWord: "dignity",
      question: "A leader who treats every employee with dignity would most likely...",
      choices: [
        "ignore workers' concerns completely.",
        "listen respectfully and treat everyone fairly, regardless of their position.",
        "insult employees in front of others.",
        "treat only certain employees with respect."
      ],
      answer: 1,
      explanation: "dignity를 존중하는 태도는 상대방을 공정하고 예의 있게 대하는 것을 뜻합니다."
    },

    {
      id: 11,
      relatedWord: "erudition",
      question: "Which situation shows someone's erudition?",
      choices: [
        "A person who has never read a book discussing ancient philosophy in depth.",
        "A scholar who can discuss obscure historical texts most people have never heard of.",
        "Someone guessing randomly on a difficult exam.",
        "A person who refuses to answer any questions."
      ],
      answer: 1,
      explanation: "erudition(학식, 박식)은 소수의 사람만 아는 깊고 폭넓은 지식을 뜻합니다."
    },
    {
      id: 12,
      relatedWord: "erudition",
      question: "A book praised for its erudition would most likely be known for...",
      choices: [
        "containing many spelling errors.",
        "showing deep, extensive knowledge of its subject.",
        "having very few facts or details.",
        "being written without any research."
      ],
      answer: 1,
      explanation: "erudition은 깊이 있고 폭넓은 지식을 갖춘 상태를 뜻합니다."
    },

    {
      id: 13,
      relatedWord: "enterprise",
      question: "Which situation describes an enterprise?",
      choices: [
        "A short, simple errand with no risk involved.",
        "A dangerous deep-sea mission that could easily fail.",
        "A quiet nap on a lazy Sunday afternoon.",
        "A five-minute chat with a neighbor."
      ],
      answer: 1,
      explanation: "enterprise((특히 모험성) 대규모 사업)는 위험하거나 어려운 일이나 과업을 뜻합니다."
    },
    {
      id: 14,
      relatedWord: "enterprise",
      question: "Investors warned that a new enterprise was risky because it...",
      choices: [
        "had already succeeded many times before with no problems.",
        "could easily fail and cost a large amount of money.",
        "required absolutely no planning or resources.",
        "was guaranteed to succeed no matter what."
      ],
      answer: 1,
      explanation: "enterprise는 실패할 위험이 있는 모험적인 사업을 뜻합니다."
    },

    {
      id: 15,
      relatedWord: "undertake",
      question: "Which situation is an example of undertaking a task?",
      choices: [
        "Refusing to help with a difficult project.",
        "Agreeing to lead a challenging, long-term renovation project.",
        "Avoiding all responsibility for a task.",
        "Walking away before a task even begins."
      ],
      answer: 1,
      explanation: "undertake(착수하다)는 어렵거나 오래 걸리는 일을 하기로 하거나 시작하는 것을 뜻합니다."
    },
    {
      id: 16,
      relatedWord: "undertake",
      question: "A company that undertakes a major expansion is most likely...",
      choices: [
        "shutting down all of its operations immediately.",
        "beginning a large, difficult project to grow the business.",
        "refusing to make any changes at all.",
        "reducing its size significantly."
      ],
      answer: 1,
      explanation: "undertake는 어렵고 규모가 큰 일을 맡아서 시작한다는 뜻입니다."
    },

    {
      id: 17,
      relatedWord: "gallant",
      question: "Which situation shows gallant behavior?",
      choices: [
        "Running away the moment danger appears.",
        "Rushing into a burning building to rescue someone trapped inside.",
        "Refusing to help someone in trouble.",
        "Hiding quietly to avoid any risk."
      ],
      answer: 1,
      explanation: "gallant(용감한[용맹한])는 위험하거나 어려운 상황에서도 두려움을 보이지 않는 태도를 뜻합니다."
    },
    {
      id: 18,
      relatedWord: "gallant",
      question: "A gallant knight in an old story would most likely...",
      choices: [
        "avoid every dangerous quest presented to him.",
        "bravely face monsters and dangers to protect others.",
        "refuse to help anyone in need.",
        "hide from every challenge that arises."
      ],
      answer: 1,
      explanation: "gallant한 인물은 위험을 두려워하지 않고 용감하게 맞서는 모습을 보입니다."
    },

    {
      id: 19,
      relatedWord: "abominable",
      question: "Which situation describes something abominable?",
      choices: [
        "A pleasant, warm afternoon at the beach.",
        "A disgusting smell so bad that everyone had to leave the room.",
        "A delicious meal at a favorite restaurant.",
        "A quiet, peaceful walk in the park."
      ],
      answer: 1,
      explanation: "abominable(심히 끔찍한)은 매우 나쁘거나 불쾌한 것을 뜻합니다."
    },
    {
      id: 20,
      relatedWord: "abominable",
      question: "If the weather during the trip was described as abominable, that most likely means the weather was...",
      choices: [
        "sunny and perfectly pleasant.",
        "extremely unpleasant, such as freezing rain and strong winds.",
        "mild and comfortable the entire time.",
        "exactly what everyone had hoped for."
      ],
      answer: 1,
      explanation: "abominable은 매우 나쁘고 불쾌한 상태를 뜻합니다."
    },

    {
      id: 21,
      relatedWord: "intuition",
      question: "Which situation shows someone relying on intuition?",
      choices: [
        "Making a decision only after months of careful data analysis.",
        "Sensing something was wrong with a plan, without any clear evidence yet.",
        "Following a strict step-by-step manual exactly as written.",
        "Ignoring all personal feelings and using only statistics."
      ],
      answer: 1,
      explanation: "intuition(직감, 직관력)은 명확한 근거 없이 느낌에 기반해 무언가를 이해하는 능력을 뜻합니다."
    },
    {
      id: 22,
      relatedWord: "intuition",
      question: "An experienced doctor's intuition about a patient might lead her to...",
      choices: [
        "ignore her medical training completely.",
        "order extra tests based on a feeling that something isn't right, even without clear symptoms yet.",
        "refuse to examine the patient at all.",
        "make decisions using only a coin flip."
      ],
      answer: 1,
      explanation: "intuition은 뚜렷한 증거가 없어도 느낌을 바탕으로 판단하게 하는 능력을 뜻합니다."
    },

    {
      id: 23,
      relatedWord: "characterize",
      question: "Which situation is an example of characterizing something?",
      choices: [
        "Ignoring a topic completely without describing it.",
        "Describing a novel's main character as brave, loyal, and quick-witted.",
        "Refusing to read a book at all.",
        "Randomly guessing without any description."
      ],
      answer: 1,
      explanation: "characterize(...의 특징을 묘사하다)는 어떤 것의 주요한 특징을 설명하는 것을 뜻합니다."
    },
    {
      id: 24,
      relatedWord: "characterize",
      question: "If critics characterized a movie as slow-paced but emotionally powerful, that means they...",
      choices: [
        "refused to describe the movie at all.",
        "described its key qualities, including both its pacing and its emotional impact.",
        "only mentioned the movie's runtime.",
        "gave no opinion about the movie whatsoever."
      ],
      answer: 1,
      explanation: "characterize는 대상의 주요 특징을 짚어 설명하는 것을 뜻합니다."
    },

    {
      id: 25,
      relatedWord: "value",
      question: "Which situation shows someone valuing something?",
      choices: [
        "Throwing away a family heirloom without a second thought.",
        "Carefully preserving a grandmother's handwritten recipes for future generations.",
        "Ignoring a close friend's advice completely.",
        "Forgetting an important promise almost immediately."
      ],
      answer: 1,
      explanation: "value(소중하게[가치 있게] 여기다)는 어떤 것을 중요하게 여기는 것을 뜻합니다."
    },
    {
      id: 26,
      relatedWord: "value",
      question: "A company that values employee well-being would most likely...",
      choices: [
        "ignore workers' health and safety concerns.",
        "offer benefits like fair breaks, reasonable hours, and mental health support.",
        "demand employees work without any rest.",
        "refuse to listen to any employee feedback."
      ],
      answer: 1,
      explanation: "value는 무언가를 중요하게 여기고 그에 맞게 행동한다는 뜻입니다."
    },

    {
      id: 27,
      relatedWord: "approach",
      question: "Which situation shows a new approach to a problem?",
      choices: [
        "Repeating the exact same failed method over and over.",
        "Trying a completely different method after the old one stopped working.",
        "Refusing to attempt any solution at all.",
        "Ignoring the problem completely."
      ],
      answer: 1,
      explanation: "approach(접근법, 방법)는 어떤 것을 고려하거나 실행하는 방식을 뜻합니다."
    },
    {
      id: 28,
      relatedWord: "approach",
      question: "A teacher who takes a hands-on approach to science would most likely have students...",
      choices: [
        "only read about experiments without ever doing them.",
        "conduct experiments themselves to learn through direct experience.",
        "memorize facts without any practical activities.",
        "avoid the science lab entirely."
      ],
      answer: 1,
      explanation: "approach는 무언가를 다루는 구체적인 방식을 뜻하므로, 실습 중심 교육이 좋은 예입니다."
    },

    {
      id: 29,
      relatedWord: "justice",
      question: "Which situation shows justice being served?",
      choices: [
        "An innocent person being punished for a crime they didn't commit.",
        "A guilty person receiving a fair trial and an appropriate punishment.",
        "A wealthy criminal escaping punishment simply because of their money.",
        "A fair witness being ignored by the court."
      ],
      answer: 1,
      explanation: "justice(공평성, 공정성)는 사람들을 공정하게 대우하는 것을 뜻합니다."
    },
    {
      id: 30,
      relatedWord: "justice",
      question: "A society that values justice would most likely ensure that...",
      choices: [
        "only wealthy people receive fair trials.",
        "everyone is treated fairly under the law, regardless of their background.",
        "laws apply differently depending on someone's status.",
        "courts ignore evidence completely."
      ],
      answer: 1,
      explanation: "justice를 중시하는 사회는 모든 사람을 공정하게 대우하려 노력합니다."
    }
  ],


  // ==============================
  // WORD BOX SETS
  // Set 1: DEBATE WORDS, Set 2~3: NOVEL WORDS
  // (WEEK01~06과 동일한 방식으로 그룹 구성)
  // ==============================

  wordBoxSets: [

    {
      id: 1,
      words: [
        "intuition",
        "characterize",
        "value",
        "approach",
        "justice"
      ],
      sentences: [
        { text: "Without any hard evidence yet, the detective's ___ told her the suspect's story didn't add up.", answer: "intuition" },
        { text: "Historians often ___ the decade by its rapid technological change and rising urban population.", answer: "characterize" },
        { text: "Most employees said they ___ flexible working hours more than a slightly higher salary.", answer: "value" },
        { text: "The therapist recommended a gentler ___ for helping the child overcome her fear of water.", answer: "approach" },
        { text: "The community rallied together, demanding ___ for the family affected by the factory's pollution.", answer: "justice" }
      ]
    },

    {
      id: 2,
      words: [
        "overflow",
        "scamper",
        "venerable",
        "expedition",
        "dignity"
      ],
      sentences: [
        { text: "After the pipe burst, water began to ___ from the kitchen sink onto the floor.", answer: "overflow" },
        { text: "The moment the dog barked, a family of raccoons began to ___ along the backyard fence.", answer: "scamper" },
        { text: "Students lined up for hours just to hear the ___ author speak about her sixty years of writing.", answer: "venerable" },
        { text: "The research team spent two years planning their ___ to the bottom of the ocean trench.", answer: "expedition" },
        { text: "Even after losing everything in the fire, the family faced their situation with remarkable ___.", answer: "dignity" }
      ]
    },

    {
      id: 3,
      words: [
        "erudition",
        "enterprise",
        "undertake",
        "gallant",
        "abominable"
      ],
      sentences: [
        { text: "The professor's lecture displayed such ___ that even fellow experts took notes.", answer: "erudition" },
        { text: "Building a railway across the mountains was considered an incredibly risky ___ at the time.", answer: "enterprise" },
        { text: "The city council agreed to ___ a full renovation of the century-old bridge.", answer: "undertake" },
        { text: "The ___ young squire volunteered to face the dragon so the villagers could escape safely.", answer: "gallant" },
        { text: "Everyone at the picnic complained about the ___ swarm of mosquitoes near the lake.", answer: "abominable" }
      ]
    }
  ],


  // ==============================
  // PREFIX PRACTICE
  // MINI LESSON(접두사 over-, "above, beyond") 관련 4지선다 훈련
  // 문항 3/5는 교재에 실제로 나온 확인 문제를 그대로 활용
  // ==============================

  prefixPractice: [

    {
      id: 1,
      relatedWord: "over-",
      question: "What does the prefix over- mean?",
      choices: [
        "under, below",
        "above, beyond",
        "before, ahead",
        "around, near"
      ],
      answer: 1,
      explanation: "over-는 'above, beyond(위, 너머)'라는 뜻을 더하는 접두사입니다. 예: overflow(넘쳐나다)."
    },

    {
      id: 2,
      relatedWord: "override",
      question: "If a manager overrides an employee's decision, the manager is...",
      choices: [
        "asking for the employee's opinion first.",
        "using higher authority to reverse the employee's decision.",
        "completely agreeing with the employee's choice.",
        "ignoring the situation entirely."
      ],
      answer: 1,
      explanation: "override는 '더 높은 권한으로 다른 사람의 결정 위에 개입하다'라는 뜻입니다. over-(above) + ride."
    },

    {
      id: 3,
      relatedWord: "overwhelm",
      question: "What would MOST LIKELY overwhelm someone?",
      choices: [
        "taking a break after finishing a task",
        "following a simple plan step by step",
        "facing many problems all at once",
        "handling a minor misunderstanding"
      ],
      answer: 2,
      explanation: "overwhelm은 감당할 수 있는 범위를 넘어설 정도로 영향을 미치는 것을 뜻합니다. 한꺼번에 여러 문제에 부딪히는 상황이 대표적인 예입니다."
    },

    {
      id: 4,
      relatedWord: "overcharge",
      question: "A shop that overcharges customers is most likely...",
      choices: [
        "charging exactly the fair, listed price.",
        "charging customers more than the correct or fair price.",
        "giving customers a discount.",
        "refusing to charge customers at all."
      ],
      answer: 1,
      explanation: "overcharge는 정당한 가격보다 더 많이 청구하는 것을 뜻합니다. over-(above) + charge."
    },

    {
      id: 5,
      relatedWord: "overrate",
      question: "Which situation BEST shows someone overrating something?",
      choices: [
        "Jisoo complains about a long trip and calls it exhausting.",
        "Daniel enjoys a well-cooked meal and compliments the chef politely.",
        "Emma finds a workout routine helpful and follows it regularly.",
        "Kim says a simple phone game is the greatest game ever created."
      ],
      answer: 3,
      explanation: "overrate는 실제 가치보다 지나치게 높게 평가하는 것을 뜻합니다. 평범한 게임을 최고라고 과장하는 것이 좋은 예입니다."
    },

    {
      id: 6,
      relatedWord: "oversimplify",
      question: "A textbook that oversimplifies a complicated historical event would most likely...",
      choices: [
        "include every important detail with full accuracy.",
        "leave out important details, making the explanation too basic.",
        "make the topic more confusing than it needs to be.",
        "refuse to mention the event at all."
      ],
      answer: 1,
      explanation: "oversimplify는 중요한 세부 사항을 빠뜨려 지나치게 단순하게 설명하는 것을 뜻합니다."
    }
  ],


  // ==============================
  // MOCK TEST 구성
  // WEEK01~06과 동일한 섹션 배점 구조
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

window.VOCAB_DATA["vocabulary-workbook"].week07 = WEEK01;

})();
