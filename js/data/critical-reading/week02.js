(function () {

const word = (id, word, partOfSpeech, meaning, synonym, antonym, definition, bookSentence, example) => ({
  id, word, partOfSpeech, meaning, synonym, antonym, definition, bookSentence, example
});

const closestRelatedWords = {
  2: "depict",
  4: "recall",
  17: "evolve"
};

const WEEK02 = {
  week: 2,
  title: "WEEK 02",
  totalWords: 25,

  words: [
    word(1, "pen name", "noun", "필명", "", "", "a name chosen by a writer to use instead of using his or her real name when publishing books", "Twain chose his pen name from a term he learned when he trained to become a pilot of a Mississippi riverboat in his youth.", "The author published her novels under a pen name to keep her identity secret."),
    word(2, "depict", "verb", "묘사하다", "portray", "", "to describe something or someone in writing or speech", "Twain's writing depicts the muddy Mississippi River, large steam-powered riverboats, adventurous children, and social issues like slavery.", "Authors often use vivid language to depict the emotions of their characters."),
    word(3, "adventurous", "adj.", "모험을 즐기는", "courageous", "cautious", "not afraid of taking risks or doing daring things", "Twain's writing depicts the muddy Mississippi River, large steam-powered riverboats, adventurous children, and social issues like slavery.", "Ben felt adventurous and decided to try out for the school's rock climbing team."),
    word(4, "recall", "verb", "떠올리게 하다, 상기시키다", "evoke", "forget", "to bring the memory of a past event into one's mind", "For many, these adventurers recall a nostalgic view of 19th century America, a time much different than today.", "The old photograph recalled a peaceful time in her childhood."),
    word(5, "nostalgic", "adj.", "과거를 그리워하는, 향수를 불러일으키는", "sentimental", "", "longing for or thinking fondly of a past time or condition", "For many, these adventurers recall a nostalgic view of 19th century America, a time much different than today.", "Finding my mom's favorite childhood book filled her with a sense of nostalgic joy."),
    word(6, "outlaw", "verb", "법으로 금지하다", "ban", "legalize", "to make something illegal", "The story focuses on the two as they try to escape the South and reach the North, where slavery was outlawed.", "The town decided to outlaw public smoking in all parks and recreational areas."),
    word(7, "immediately", "adv.", "즉시", "instantly", "eventually", "without delay", "When The Adventures of Huckleberry Finn was published in 1884, it was not immediately popular.", "The chef served the dish immediately after preparing it to ensure freshness."),
    word(8, "disobedient", "adj.", "순종하지 않는, 반항적인", "defiant", "obedient", "refusing to do what someone in authority tells one to do", "Others criticized Twain's narrator, characterizing him as rough, disobedient, and uneducated.", "The disobedient dog frequently ignored its owner's commands."),
    word(9, "varying", "adj.", "다양한", "diverse", "consistent", "being different from each other in size, amount, or degree", "Although people have and will continue to have varying opinions about Mark Twain and his works . . .", "The candy shop offers a wide selection of candy in varying shapes and flavors."),
    word(10, "influence", "verb", "영향을 미치다", "impact", "", "to affect the way someone or something develops, behaves, or thinks", "There is no doubt that Mark Twain continues to influence American literature and society today.", "Social media greatly influences how people view themselves and others."),
    word(11, "undergo", "verb", "(특히 변화·안 좋은 일 등을) 겪다[받다]", "endure", "evade", "to experience something that is unpleasant or something that involves a change", "Languages constantly undergo changes . . . Words and expressions gain new meanings.", "Our school will undergo major renovations over the summer break."),
    word(12, "diverge", "verb", "(다른 방향으로) 갈라지다[분기하다/나뉘다]", "deviate", "converge", "to follow a different direction, or to be different", "In other cases, the changes are major. A language may diverge and become a new tongue. Or it may change over the course of time.", "At the base of the mountain, the trail began to diverge into two separate paths."),
    word(13, "tongue", "noun", "말, 언어", "language", "", "a system of communication used by people living in a particular country", "In other cases, the changes are major. A language may diverge and become a new tongue. Or it may change over the course of time.", "Ethan's native tongue is Korean, but he is fluent in English, too."),
    word(14, "territory", "noun", "지역, 영역", "area", "", "land, or sometimes sea, that is considered as belonging to or connected with a particular country or person", "The Roman Empire once controlled a vast territory. This included all of Western Europe.", "The two wolf packs marked their territories with scent to avoid conflict."),
    word(15, "arise", "verb", "생기다, 발생하다", "emerge", "disappear", "to start to happen or exist", "From Latin, several new languages arose. They included French, Spanish, Portuguese, Italian, and Romanian.", "New opportunities arise when you try new activities or join clubs."),
    word(16, "accent", "noun", "말씨[억양]", "inflection", "", "the way in which people in a particular area, country, or social group pronounce words", "[The people] spoke with various accents. Today, there are many versions of English spoken around the world.", "I could tell Julien was European from the French accent in his speech."),
    word(17, "evolve", "verb", "발달하다, 진화하다", "advance", "regress", "to develop gradually", "English, Greek, Russian, and German have all greatly evolved over hundreds of years.", "Storytelling evolved from spoken tales into written forms."),
    word(18, "unintelligible", "adj.", "이해할 수 없는", "incomprehensible", "understandable", "not able to be understood", "Beowulf, an epic poem written in old English, uses language unintelligible to most modern speakers of English.", "After crying for hours, Kate's words became unintelligible through her sobs."),
    word(19, "perceive", "verb", "감지[인지]하다", "notice", "overlook", "to observe the environment through the senses", "Not all babies perceive the world around them at the same age.", "Zoe began to perceive Ben's sadness, even though he tried to hide it."),
    word(20, "infant", "noun", "유아, 아기", "baby", "adult", "a very young child", "Studies show that young infants see large areas better than small objects.", "The infant in the stroller giggled at the funny faces we made."),
    word(21, "aware", "adj.", "인식하는, 의식하는", "mindful", "oblivious", "knowing that something exists", "[Babies] are also aware of music at a young age. Some may even move to the sound of music.", "The hikers stayed aware of their surroundings as they walked in the dark forest."),
    word(22, "nonsensical", "adj.", "터무니없는, 무의미한", "absurd", "sensible", "having no meaning", "While they make sounds, they are nonsensical and are not attempts to make speech.", "The instructions were so nonsensical that nobody could follow them."),
    word(23, "field", "noun", "분야, 영역", "discipline", "", "an area of activity or interest", "Most people in history have worked in the field of agriculture.", "Suzy loves the field of astronomy and dreams of discovering new planets."),
    word(24, "ban", "verb", "금(지)하다", "forbid", "permit", "to officially or legally prohibit", "They restricted the working hours of women and children. They were also banned from doing certain jobs.", "The school banned the use of smartphones as they disrupted learning."),
    word(25, "discrimination", "noun", "차별", "bias", "equality", "the treatment of a person or particular group of people differently, in a way that is worse than the way people are usually treated", "Laws were created to protect individuals from discrimination based on race, gender, and religion.", "Discrimination based on race, gender, and age should not be tolerated.")
  ],

  contextPassages: [
    {
      id: 1,
      passage: "Mark Twain is one of the most celebrated writers in American literature, though few people know that Twain was not his real name. He originally used the pen name to separate his identity as a riverboat pilot from his life as a writer. In his novels, Twain vividly depicts the muddy Mississippi River, the steamboats that traveled along it, and the adventurous children who explored its banks. One of his most famous characters, Huckleberry Finn, is often criticized for being disobedient, since he constantly ignores the rules that adults expect him to follow. Yet despite this criticism, Twain's storytelling continues to influence American literature: his novels are still widely read and studied more than a century after they were first published.",
      questions: [
        { id: 1, type: "meaning", question: "The word ‘pen name’ in the passage is closest in meaning to…", choices: ["a name used instead of one's real name", "a nickname given by close friends", "the title of a published book", "a signature used on legal documents"], answer: 0, relatedWord: "pen name", explanation: "Twain이 본명 대신 사용한 이름이라는 문맥이므로 실명을 대신하는 이름이라는 뜻입니다." },
        { id: 2, type: "meaning", question: "The word ‘depicts’ in the passage is closest in meaning to…", choices: ["portrays", "criticizes", "memorizes", "predicts"], answer: 0, relatedWord: "depict", explanation: "소설 속에서 강과 배, 아이들의 모습을 글로 그려낸다는 뜻이므로 '묘사하다'가 적절합니다." },
        { id: 3, type: "meaning", question: "The word ‘adventurous’ in the passage is closest in meaning to…", choices: ["cautious", "courageous", "forgetful", "wealthy"], answer: 1, relatedWord: "adventurous", explanation: "강둑을 탐험하는 아이들을 묘사하는 표현이므로 '용감한, 모험을 즐기는'이라는 뜻입니다." },
        { id: 4, type: "inference", question: "In stating that Huckleberry Finn is often criticized for being ‘disobedient’, the author means that Huck…", choices: ["always follows the rules adults set for him", "refuses to do what adults expect him to do", "teaches other children to respect authority", "is unaware that rules exist"], answer: 1, relatedWord: "disobedient", explanation: "어른들이 기대하는 규칙을 계속 어긴다는 문맥이므로 순종하지 않는다는 뜻입니다." },
        { id: 5, type: "inference", question: "In stating that Twain's storytelling continues to ‘influence’ American literature, the author means that his work…", choices: ["has been forgotten by modern readers", "still affects how people write and think about literature today", "was banned shortly after publication", "was written under someone else's pen name"], answer: 1, relatedWord: "influence", explanation: "출간된 지 백 년이 넘도록 여전히 읽히고 연구된다는 문맥이므로 오늘날에도 영향을 미친다는 뜻입니다." }
      ]
    },
    {
      id: 2,
      passage: "Languages are rarely fixed; they constantly undergo change as new generations use them differently. Centuries ago, a single tongue spoken across a vast territory could slowly diverge into several separate languages once communities became isolated from one another. This is exactly what happened to Latin, from which French, Spanish, Portuguese, Italian, and Romanian all eventually arose. Even within one language, an accent can evolve so gradually that speakers rarely notice the shift while it is happening. Old English is a striking example: to most readers today, a poem like Beowulf sounds almost unintelligible, even though it was once perfectly clear to the people who first heard it.",
      questions: [
        { id: 1, type: "meaning", question: "The word ‘undergo’ in the passage is closest in meaning to…", choices: ["experience", "prevent", "publish", "ignore"], answer: 0, relatedWord: "undergo", explanation: "언어가 계속 변화를 겪는다는 문맥이므로 '경험하다, 겪다'라는 뜻입니다." },
        { id: 2, type: "inference", question: "In stating that a language could ‘diverge’ into several separate languages, the author means that the language…", choices: ["disappeared completely", "split into different forms over time", "was translated into another language", "remained exactly the same for centuries"], answer: 1, relatedWord: "diverge", explanation: "고립된 공동체에서 하나의 언어가 여러 언어로 갈라졌다는 문맥이므로 서로 다른 형태로 나뉘었다는 뜻입니다." },
        { id: 3, type: "meaning", question: "The word ‘evolve’ in the passage is closest in meaning to…", choices: ["develop gradually", "disappear suddenly", "get translated", "get banned"], answer: 0, relatedWord: "evolve", explanation: "억양이 서서히 변화한다는 문맥이므로 '점차 발전하다'라는 뜻입니다." },
        { id: 4, type: "meaning", question: "The word ‘unintelligible’ in the passage is closest in meaning to…", choices: ["impossible to understand", "easy to memorize", "recently invented", "grammatically perfect"], answer: 0, relatedWord: "unintelligible", explanation: "오늘날 독자에게는 거의 이해할 수 없게 들린다는 문맥입니다." },
        { id: 5, type: "meaning", question: "The word ‘accent’ in the passage is closest in meaning to…", choices: ["the particular way a group of people pronounces words", "a written form of a language", "a formal grammar rule", "a foreign language textbook"], answer: 0, relatedWord: "accent", explanation: "발음이 서서히 변화한다는 문맥에서 accent는 특정 집단이 단어를 발음하는 방식을 뜻합니다." }
      ]
    },
    {
      id: 3,
      passage: "From the moment they are born, infants begin to perceive the world through their senses, even though they cannot yet speak. Long before babies say their first real word, they are already aware of rhythm and pitch in music and voices. Researchers who study this field of child development have noticed that babies often make sounds that seem nonsensical, since these sounds are not actual attempts at speech. Still, this early babbling plays an important role in how children eventually learn to communicate. Understanding how infants develop is also important for fairness: schools now design early education programs carefully so that no child faces discrimination based on background, and no unfair rule bans any child from receiving the same opportunities to learn.",
      questions: [
        { id: 1, type: "meaning", question: "The word ‘perceive’ in the passage is closest in meaning to…", choices: ["notice", "forget", "criticize", "measure"], answer: 0, relatedWord: "perceive", explanation: "감각을 통해 세상을 받아들인다는 문맥이므로 '감지하다, 알아차리다'라는 뜻입니다." },
        { id: 2, type: "meaning", question: "The word ‘aware’ in the passage is closest in meaning to…", choices: ["mindful", "unaware", "afraid", "bored"], answer: 0, relatedWord: "aware", explanation: "아기들이 리듬과 음높이를 인식한다는 문맥이므로 '의식하는, 인식하는'이라는 뜻입니다." },
        { id: 3, type: "inference", question: "In stating that babies make sounds that seem ‘nonsensical’, the author means that these sounds…", choices: ["clearly follow grammar rules", "carry no real meaning", "are copied from adult speech", "are used only by twins"], answer: 1, relatedWord: "nonsensical", explanation: "실제 말하기 시도가 아니라는 문맥이므로 의미 없는 소리라는 뜻입니다." },
        { id: 4, type: "inference", question: "In stating that schools design programs so no child faces ‘discrimination’, the author means that schools want to prevent children from being…", choices: ["treated unfairly because of their background", "given too many resources", "tested too early in life", "compared to older students"], answer: 0, relatedWord: "discrimination", explanation: "배경 때문에 불공정하게 대우받지 않도록 한다는 문맥이므로 '차별'을 막는다는 뜻입니다." },
        { id: 5, type: "meaning", question: "The word ‘infant’ in the passage is closest in meaning to…", choices: ["baby", "toddler", "teenager", "parent"], answer: 0, relatedWord: "infant", explanation: "아직 말을 하지 못하는 아주 어린 아이를 가리키므로 '아기'라는 뜻입니다." }
      ]
    }
  ],

  wordBoxSets: [
    { id: 1, words: ["pen name", "depict", "adventurous", "recall", "nostalgic", "outlaw"], sentences: [
      { text: "Samuel Clemens chose to write and publish his novels under a ___ instead of using his real name.", answer: "pen name" },
      { text: "The mural painted on the school wall uses bold colors and detailed brushstrokes to ___ the daily routines of pioneer families who once lived on this land.", answer: "depict" },
      { text: "Only the most ___ climbers were willing to attempt the unmapped trail through unfamiliar terrain despite the risk of getting lost.", answer: "adventurous" },
      { text: "Visiting her childhood neighborhood after twenty years filled her with a ___ sense of longing for the past.", answer: "nostalgic" },
      { text: "The city council voted to ___ the use of fireworks within residential neighborhoods.", answer: "outlaw" }
    ]},
    { id: 2, words: ["immediately", "disobedient", "varying", "influence", "undergo", "diverge"], sentences: [
      { text: "As soon as the fire alarm went off, students were expected to leave the building ___.", answer: "immediately" },
      { text: "The toddler grew increasingly ___, refusing to put on his shoes no matter how many times his mother asked.", answer: "disobedient" },
      { text: "A single supportive teacher can ___ the direction of a student's entire academic career.", answer: "influence" },
      { text: "Every rechargeable battery will eventually ___ some loss in capacity after years of daily use.", answer: "undergo" },
      { text: "Just past the fork in the river, the two currents ___ and flow toward opposite coastlines.", answer: "diverge" }
    ]},
    { id: 3, words: ["territory", "arise", "accent", "evolve", "unintelligible", "tongue"], sentences: [
      { text: "By the height of its power, the ancient empire's ___ stretched across three separate continents, covering deserts, mountains, and coastlines under a single ruler.", answer: "territory" },
      { text: "Whenever the coach benches a star player, angry complaints from fans ___ seemingly out of nowhere and flood social media within minutes.", answer: "arise" },
      { text: "Even after living in Canada for over thirty years, her pronunciation still carried a distinct French ___ whenever she spoke English.", answer: "accent" },
      { text: "Video game graphics continue to ___ enormously, moving far beyond the blocky, pixelated designs of the 1980s.", answer: "evolve" },
      { text: "By the final round, the boxer's speech had become so ___ from exhaustion that the referee could barely make out his words.", answer: "unintelligible" }
    ]},
    { id: 4, words: ["field", "ban", "perceive", "infant", "aware", "nonsensical"], sentences: [
      { text: "After finishing her degree, she chose to specialize in the ___ of marine biology rather than chemistry.", answer: "field" },
      { text: "The airline decided to ___ any passenger from bringing more than one carry-on bag onto the flight.", answer: "ban" },
      { text: "It took her a few seconds to ___ the faint smell of smoke coming from the kitchen.", answer: "perceive" },
      { text: "The nurse gently rocked the crying ___ until he finally fell asleep.", answer: "infant" },
      { text: "Lifeguards must remain constantly ___ of swimmers who drift too close to the rocks.", answer: "aware" }
    ]},
    { id: 5, words: ["recall", "varying", "tongue", "nonsensical", "discrimination", "depict"], sentences: [
      { text: "The opening chords of the song instantly ___ her very first piano recital, note by note.", answer: "recall" },
      { text: "The workshop offers ___ levels of difficulty, from beginner to advanced, so both beginners and experienced woodworkers can find a suitable project.", answer: "varying" },
      { text: "Although he has lived in Japan for a decade, his native ___ is still Vietnamese.", answer: "tongue" },
      { text: "Half-asleep, she mumbled something so ___ that her roommate had no idea what she was trying to say.", answer: "nonsensical" },
      { text: "The lawsuit accused the company of ___ against employees over the age of fifty.", answer: "discrimination" }
    ]}
  ],

  closestMeaningQuestions: [
    [1, "Samuel Clemens published all of his novels under the pen name Mark Twain.", "pen name", ["a name used instead of one's real name", "a title given to a bestselling novel", "a handwritten letter to a fan", "a nickname invented by critics"], 0],
    [2, "The mural depicts the daily life of fishing villages along the coast.", "depicts", ["portrays", "criticizes", "memorizes", "predicts"], 0],
    [3, "Only the most adventurous hikers attempted to reach the summit during the storm.", "adventurous", ["courageous", "cautious", "exhausted", "forgetful"], 0],
    [4, "The smell of fresh bread recalled memories of her grandmother's kitchen.", "recalled", ["evoked", "erased", "questioned", "confused"], 0],
    [5, "Looking through the old photo album made him feel deeply nostalgic.", "nostalgic", ["sentimental", "furious", "confused", "ambitious"], 0],
    [6, "Several states moved to outlaw the sale of the dangerous chemical.", "outlaw", ["ban", "legalize", "advertise", "tax"], 0],
    [7, "The lifeguard reacted immediately when she saw the swimmer struggling.", "immediately", ["instantly", "eventually", "rarely", "carelessly"], 0],
    [8, "The disobedient puppy jumped onto the couch again after being told not to.", "disobedient", ["defiant", "obedient", "exhausted", "curious"], 0],
    [9, "The recipe can be made with varying amounts of sugar depending on personal taste.", "varying", ["diverse", "identical", "limited", "expensive"], 0],
    [10, "Her grandmother's cooking continues to influence the way she prepares meals today.", "influence", ["impact", "ignore", "copy", "forbid"], 0],
    [11, "The old bridge will undergo repairs before it reopens to traffic.", "undergo", ["endure", "avoid", "announce", "celebrate"], 0],
    [12, "The two hiking trails diverge just past the old wooden bridge.", "diverge", ["deviate", "merge", "disappear", "narrow"], 0],
    [13, "Although he grew up abroad, Minho's native tongue is still Korean.", "tongue", ["language", "accent", "alphabet", "gesture"], 0],
    [14, "The kingdom's territory expanded greatly after the war ended.", "territory", ["area", "population", "army", "currency"], 0],
    [15, "New problems often arise once a project moves past the planning stage.", "arise", ["emerge", "vanish", "succeed", "conclude"], 0],
    [16, "Although she has lived in Seoul for years, she still speaks with a slight regional accent.", "accent", ["inflection", "vocabulary", "grammar", "volume"], 0],
    [17, "Smartphones have evolved dramatically since the first models were released.", "evolved", ["advanced", "disappeared", "weakened", "paused"], 0],
    [18, "His mumbled apology was almost unintelligible over the noise of the crowd.", "unintelligible", ["incomprehensible", "understandable", "sincere", "brief"], 0],
    [19, "It took a moment for her eyes to perceive the small print on the label.", "perceive", ["notice", "erase", "memorize", "translate"], 0],
    [20, "The infant slept peacefully through the entire car ride.", "infant", ["baby", "toddler", "grandparent", "sibling"], 0],
    [21, "Drivers must stay aware of pedestrians near school zones.", "aware", ["mindful", "oblivious", "annoyed", "confident"], 0],
    [22, "The instructions on the assembly sheet were so nonsensical that nobody could build the shelf.", "nonsensical", ["absurd", "sensible", "detailed", "official"], 0],
    [23, "After college, she decided to pursue a career in the field of marine biology.", "field", ["discipline", "salary", "building", "exam"], 0],
    [24, "The city voted to ban skateboarding in the downtown plaza.", "ban", ["forbid", "permit", "announce", "recommend"], 0],
    [25, "The new policy was designed to end discrimination in the hiring process.", "discrimination", ["bias", "equality", "efficiency", "promotion"], 0]
  ].map(([id, sentence, targetWord, choices, answer]) => ({
    id, sentence, targetWord, choices, answer,
    relatedWord: closestRelatedWords[id] || targetWord,
    explanation: `문맥에서 ${targetWord}의 가장 가까운 뜻을 고릅니다.`
  })),

  mockTest: {
    totalPoints: 20,
    passingScore: 60,
    sections: [
      { id: "A", label: "Read the Passage", type: "context-passage", count: 5, pointsEach: 2 },
      { id: "B", label: "Word Box", type: "wordbox", count: 5, pointsEach: 1 },
      { id: "C", label: "Closest Meaning", type: "closest-meaning", count: 5, pointsEach: 1 }
    ]
  }
};

window.VOCAB_DATA = window.VOCAB_DATA || {};
window.VOCAB_DATA["critical-reading"] = window.VOCAB_DATA["critical-reading"] || {};
window.VOCAB_DATA["critical-reading"].week02 = WEEK02;

})();
