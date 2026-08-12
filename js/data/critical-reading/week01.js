(function () {

const word = (id, word, partOfSpeech, meaning, synonym, antonym, definition, bookSentence, example) => ({
  id, word, partOfSpeech, meaning, synonym, antonym, definition, bookSentence, example
});

const closestRelatedWords = {
  4: "correspond to",
  7: "strip of",
  16: "civilian",
  22: "establish",
  25: "virtually"
};

const WEEK01 = {
  week: 1,
  title: "WEEK 01",
  totalWords: 25,

  words: [
    word(1, "single-handedly", "adv.", "단독으로", "independently", "collaboratively", "done alone or without help", "This accomplishment was a result of a writing system that had been single-handedly created by Sequoyah, a Cherokee Indian, who introduced the alphabet in 1809.", "Jason single-handedly carried his soccer team to victory by scoring four goals."),
    word(2, "fundamental", "adj.", "중요한, 근본적인", "basic", "supplementary", "being essential to the foundation or base", "The writing system Sequoyah invented survives today as a fundamental part of Cherokee culture.", "Understanding grammar is fundamental to writing clearly and effectively."),
    word(3, "consist of", "phr. verb", "…로 구성되다", "contain", "", "to be formed from particular things or people", "The alphabet created by Sequoyah consists of 85 symbols that correspond to each individual syllable, which is a single uninterrupted sound.", "The Alps consist of rugged mountain ranges in Central Europe."),
    word(4, "correspond to", "phr. verb", "…와 관련되다, …에 부합하다", "match to", "clash with", "to relate to or accord to", "The alphabet created by Sequoyah consists of 85 symbols that correspond to each individual syllable, which is a single uninterrupted sound.", "The red dots on the map correspond to the locations of fire stations."),
    word(5, "uninterrupted", "adj.", "중단되지 않는, 연속된", "continual", "interrupted", "without any pauses or breaks", "The alphabet created by Sequoyah consists of 85 symbols that correspond to each individual syllable, which is a single uninterrupted sound.", "Tina enjoyed an uninterrupted walk in a forest where no one bothered her."),
    word(6, "tremendous", "adj.", "대단한, 굉장한", "enormous", "minuscule", "very great in amount or extremely good", "The Cherokee alphabet was a tremendous source of pride for the Cherokee people.", "The debate team's victory brought tremendous excitement to the whole school."),
    word(7, "strip of", "phr. verb", "…을 빼앗다", "deprive of", "add", "to take something away from someone, sometimes in an unfair or dishonest way", "In 1838, the Cherokee Indians were stripped of their rights and forced to move at gunpoint from their traditional lands.", "When caught cheating, the student was stripped of her chance to retake the test."),
    word(8, "prominent", "adj.", "저명한, 특출한", "distinguished", "unknown", "very well known and important", "Through efforts by prominent Cherokee leaders, schools were set up for students to learn to read and write in Cherokee.", "A prominent athlete spoke at our school about the importance of physical fitness."),
    word(9, "testimony", "noun", "증언", "evidence", "", "spoken or written statements that something is true", "Today, The Cherokee Phoenix remains in print as a testimony to the steadfastness of the Cherokee Nation.", "Hearing the testimony of the witness changed the jury's opinion about the case."),
    word(10, "steadfastness", "noun", "결의, 확고함", "determination", "inconsistency", "the quality of staying the same for a long time and not changing quickly or unexpectedly", "Today, The Cherokee Phoenix remains in print as a testimony to the steadfastness of the Cherokee Nation.", "Mark's steadfastness allowed him to achieve his goals in school."),
    word(11, "hourglass", "noun", "모래시계", "sand timer", "", "a glass timer with sand that passes from one bulb to another to measure time", "Much later, the water clock, the hourglass, and the wheel clock were made. These timepieces were all large though.", "The teacher flipped the hourglass to start the timed quiz."),
    word(12, "spiral spring", "noun", "나선형 용수철", "coiled spring", "", "a mechanical component made of a tightly wound wire in the shape of a helix", "Later, in 1673, Christiaan Huygens invented a watch with a spiral spring. He made watches smaller and portable.", "The old watch stopped working because its spiral spring had become loose."),
    word(13, "portable", "adj.", "휴대이동이 쉬운, 휴대용의", "mobile", "fixed", "light and small enough to be easily carried or moved", "Later, in 1673, Christiaan Huygens invented a watch with a spiral spring. He made watches smaller and portable.", "Mel kept a portable charger in her bag, so her phone never ran out of battery."),
    word(14, "wristwatch", "noun", "손목시계", "", "", "a watch worn on a strap around the wrist", "It was in 1812 that the first wristwatch was made by Abraham-Louis Breguet.", "Tom glanced at his wristwatch and realized that he was late for his presentation."),
    word(15, "prefer", "verb", "…을 더 좋아하다, 선호하다", "favor", "dislike", "to like, choose, or want one thing rather than another", "Wristwatches became common but were mostly worn by women. Men preferred to carry pocket watches.", "Anna prefers winter over summer because she loves skiing."),
    word(16, "civilian", "noun", "민간인", "citizen", "military", "a person who is not a member of the police or the armed forces", "Civilians started to imitate pilots who had begun wearing wristwatches.", "The soldiers and civilians worked together to rebuild the city after the war ended."),
    word(17, "imitate", "verb", "모방하다, 흉내내다", "mimic", "innovate", "to behave in a similar way to someone or something else", "Civilians started to imitate pilots who had begun wearing wristwatches.", "Jane's friends always laughed when she imitated the voices of famous celebrities."),
    word(18, "public", "adj.", "(특히 정부에서 제공하는 것으로) 대중을 위한, 공공의", "government-funded", "private", "provided by the government to be available to everyone", "Public education is a system in which students are taught in schools run by the government.", "Residents visit the public library funded by the government to access free books."),
    word(19, "arithmetic", "noun", "산수, 연산", "calculation", "", "the part of mathematics that involves the adding and multiplying, etc. of numbers", "As for lower-class children, they learned basic skills such as reading, writing, and arithmetics from their parents.", "Alex used arithmetic to divide his candy equally among his friends during lunch."),
    word(20, "agriculture", "noun", "농업", "cultivation", "urbanization", "the practice or work of farming", "The world was no longer based on agriculture. Instead, it was based on industry.", "Rural communities depend on agriculture for farming jobs."),
    word(21, "industry", "noun", "산업, 공업, 제조업", "manufacturing", "", "the companies and activities involved in the process of producing goods for sale, especially in a factory or special area", "The world was no longer based on agriculture. Instead, it was based on industry.", "The automobile industry produces millions of vehicles each year."),
    word(22, "establish", "verb", "설립[설정]하다", "found", "disband", "to set up an organization, system, or set of rules on a firm or permanent basis", "So many governments established schools for children. This was the beginning of public education.", "The school council recently established a recycling program in the cafeteria."),
    word(23, "destination", "noun", "목적지, (물품의) 도착지", "endpoint", "origin", "the place to which someone or something is going or being sent", "Letters were slow to be delivered. Sometimes they never reached their destinations.", "Our final destination was a small village near the mountains."),
    word(24, "instant", "adj.", "즉각적인", "immediate", "delayed", "happening without any delay", "All long-distance contact was in writing. But phones permitted instant communication by talking.", "Joon got an instant reply when he sent a text message to Lisa."),
    word(25, "virtually", "adv.", "사실상, 거의", "almost", "", "very nearly or entirely", "Today, thanks to mobile phones, people can connect with others instantly from virtually anywhere in the world.", "Virtually everyone in the city relies on public transportation due to its efficiency.")
  ],

  contextPassages: [{
    id: 1,
    passage: "In the early nineteenth century, Sequoyah single-handedly developed a writing system for the Cherokee language, although he had never learned to read or write in another language. His alphabet consisted of symbols that corresponded to the individual syllables of spoken Cherokee. Because it allowed knowledge and traditions to be recorded, the system soon became a fundamental part of Cherokee culture. Within only a few years, thousands of Cherokee people had learned to use it.\n\nThe nation's progress did not protect it from injustice. In 1838, many Cherokee were stripped of their rights and forced from their traditional lands. Nevertheless, prominent leaders established schools where children could continue reading and writing in Cherokee. They also supported The Cherokee Phoenix, a newspaper first printed in both Cherokee and English. Its survival today is more than a historical curiosity: it is testimony to the steadfastness of a people who preserved their identity despite enormous pressure to abandon it.",
    questions: [
      { id: 1, type: "meaning", question: "The word ‘single-handedly’ in the passage is closest in meaning to…", choices: ["without assistance", "through public agreement", "with unexpected difficulty", "for personal profit"], answer: 0, relatedWord: "single-handedly", explanation: "다른 언어의 읽기·쓰기를 배우지 않은 Sequoyah가 도움 없이 스스로 체계를 개발했다는 문맥입니다." },
      { id: 2, type: "inference", question: "In stating that the symbols ‘corresponded to’ syllables, the author means that the symbols…", choices: ["replaced the Cherokee language", "matched particular spoken sounds", "were copied from English letters", "were arranged by their size"], answer: 1, relatedWord: "correspond to", explanation: "각 기호가 특정한 Cherokee 음절과 맞아 대응했다는 뜻입니다." },
      { id: 3, type: "meaning", question: "The word ‘fundamental’ in the passage is closest in meaning to…", choices: ["temporary but useful", "basic and essential", "traditional but inaccurate", "widely debated"], answer: 1, relatedWord: "fundamental", explanation: "지식과 전통을 기록하게 해 준 문자 체계가 문화의 필수적인 기반이 되었다는 문맥입니다." },
      { id: 4, type: "inference", question: "In stating that the Cherokee were ‘stripped of’ their rights, the author means that they…", choices: ["voluntarily exchanged their rights", "were unfairly deprived of their rights", "recorded their rights in writing", "extended the same rights to others"], answer: 1, relatedWord: "strip of", explanation: "강제로 이주당한 문맥이므로 권리를 부당하게 빼앗겼다는 뜻입니다." },
      { id: 5, type: "inference", question: "The word ‘testimony’ suggests that The Cherokee Phoenix is…", choices: ["evidence of the nation's lasting determination", "a criticism of bilingual education", "an official record of military victories", "proof that the forced removal was temporary"], answer: 0, relatedWord: "testimony", explanation: "신문이 현재까지 남아 있다는 사실이 정체성을 지켜 낸 확고함의 증거라는 뜻입니다." }
    ]
  }],

  wordBoxSets: [
    { id: 1, words: ["single-handedly", "fundamental", "consist of", "correspond to", "uninterrupted", "tremendous"], sentences: [
      { text: "The right to express an opinion freely is ___ to the operation of a democratic society.", answer: "fundamental" }, { text: "The research committee will ___ six scientists whose fields range from biology to engineering.", answer: "consist of" }, { text: "The numbered markers on the map ___ specific locations where the endangered bird has been spotted by researchers.", answer: "correspond to" }, { text: "Despite having no assistants or financial support, the inventor ___ constructed a working model.", answer: "single-handedly" }, { text: "The discovery generated ___ excitement because it challenged a theory accepted for decades.", answer: "tremendous" }
    ]},
    { id: 2, words: ["strip of", "prominent", "testimony", "steadfastness", "hourglass", "spiral spring"], sentences: [
      { text: "The witness's detailed ___ persuaded the jury that the defendant could not have been at the scene.", answer: "testimony" }, { text: "A ___ historian was invited to explain why the ancient settlement suddenly disappeared.", answer: "prominent" }, { text: "Her ___ in defending equal access to education continued despite years of opposition.", answer: "steadfastness" }, { text: "Athletes whom the new regulation could ___ of their medals were given advance notice in case cheating was later discovered.", answer: "strip of" }, { text: "Because mechanical clocks were not yet common, the speaker used an ___ to limit each debate response.", answer: "hourglass" }
    ]},
    { id: 3, words: ["portable", "wristwatch", "prefer", "civilian", "imitate", "public"], sentences: [
      { text: "Engineers reduced the device's weight so that it would be sufficiently ___ for field researchers.", answer: "portable" }, { text: "Young animals often ___ the behavior of adults before they fully understand its purpose.", answer: "imitate" }, { text: "Although the documents were once secret, the government eventually made them available to the ___.", answer: "public" }, { text: "Under international law, a ___ who is not participating in combat must be protected.", answer: "civilian" }, { text: "Many commuters ___ taking the subway to driving because traffic delays are unpredictable.", answer: "prefer" }
    ]},
    { id: 4, words: ["arithmetic", "agriculture", "industry", "establish", "destination", "instant"], sentences: [
      { text: "Before factories expanded, the region's economy depended almost entirely on ___, with most families farming small plots of land.", answer: "agriculture" }, { text: "The council voted to ___ an independent agency responsible for monitoring water quality.", answer: "establish" }, { text: "Severe weather forced the aircraft to land hundreds of kilometers from its original ___.", answer: "destination" }, { text: "Unlike letters that took weeks to arrive, the telephone permitted nearly ___ communication.", answer: "instant" }, { text: "Merchants needed practical knowledge of ___ to calculate prices, debts, and profits accurately.", answer: "arithmetic" }
    ]},
    { id: 5, words: ["virtually", "industry", "uninterrupted", "spiral spring", "wristwatch", "destination"], sentences: [
      { text: "By the end of the campaign, ___ every household in the district had received the warning.", answer: "virtually" }, { text: "The emergency generator supplied ___ power while technicians repaired the damaged lines.", answer: "uninterrupted" }, { text: "As demand for automobiles increased, manufacturing became the city's dominant ___.", answer: "industry" }, { text: "The invention of the ___ allowed watches to become smaller and more accurate.", answer: "spiral spring" }, { text: "Pilots adopted the ___ because checking the time was easier than reaching for a pocket watch.", answer: "wristwatch" }
    ]}
  ],

  closestMeaningQuestions: [
    [1,"Without assistance from engineers or investors, Maya single-handedly transformed her design into a working machine.","single-handedly",["independently","collaboratively","reluctantly","temporarily"],0],
    [2,"Reliable evidence is fundamental to any scientific conclusion, since unsupported claims cannot be properly evaluated.","fundamental",["supplementary","basic and essential","frequently opposed","difficult to obtain"],1],
    [3,"The protective outer layer may consist of several materials, each selected for a different physical property.","consist of",["be composed of","be distinguished from","result in","be surrounded by"],0],
    [4,"Each symbol on the emergency map corresponds to a specific shelter that residents can reach on foot.","corresponds to",["matches","conceals","is distant from","competes with"],0],
    [5,"The hospital maintained an uninterrupted supply of electricity throughout the storm despite widespread power failures.","uninterrupted",["continuous","limited","unreliable","gradually decreasing"],0],
    [6,"The discovery caused tremendous excitement among researchers because it provided evidence of life in an extreme environment.","tremendous",["temporary","enormous","reasonable","unexpected"],1],
    [7,"He was stripped of his medal after officials discovered that he had cheated.","stripped of",["provided him with","deprived him of","reminded him of","protected him from"],1],
    [8,"The committee sought advice from a prominent economist whose research had influenced national policy.","prominent",["unknown","distinguished","inexperienced","controversial"],1],
    [9,"The ruins remain as testimony to the skill of builders who worked without modern machinery.","testimony",["evidence","objection","prediction","warning"],0],
    [10,"Her steadfastness in protecting the forest did not weaken even when powerful companies opposed her.","steadfastness",["determination","caution","generosity","authority"],0],
    [11,"Turn the hourglass over when the game begins.","hourglass",["sand timer","calendar","compass","thermometer"],0],
    [12,"The clock's spiral spring must be replaced.","spiral spring",["coiled spring","glass bulb","metal strap","digital screen"],0],
    [13,"The laboratory developed a portable testing device that doctors could carry to isolated villages.","portable",["permanently fixed","easy to carry","highly accurate","easily damaged"],1],
    [14,"He looked at his wristwatch before boarding.","wristwatch",["wall clock","watch worn on the wrist","pocket calendar","timer"],1],
    [15,"Although both proposals would reduce costs, most residents prefer the plan that also protects green spaces.","prefer",["favor","question","reject","postpone"],0],
    [16,"The evacuation route was reserved for civilians, while military personnel remained to defend the city.","civilians",["government officials","people outside the armed forces","foreign visitors","injured soldiers"],1],
    [17,"Some harmless insects imitate the appearance of poisonous species, causing predators to avoid them.","imitate",["mimic","observe","transform","challenge"],0],
    [18,"The mayor argued that clean drinking water is a public service that should be available to every resident.","public",["privately owned","provided for everyone","financially profitable","temporarily permitted"],1],
    [19,"Accurate arithmetic was essential to merchants who needed to calculate complex debts and payments.","arithmetic",["calculation","negotiation","measurement","record keeping"],0],
    [20,"New irrigation methods allowed agriculture to expand into regions that had once been too dry for crops.","agriculture",["farming","transportation","construction","manufacturing"],0],
    [21,"As factories replaced family workshops, textile production developed into a major national industry.","industry",["manufacturing activity","government policy","agricultural method","educational system"],0],
    [22,"After years of informal cooperation, the countries established an organization to resolve future disputes peacefully.","established",["founded","disbanded","criticized","financed"],0],
    [23,"Because the storm closed the airport, the passengers never reached their intended destination.","destination",["origin","endpoint","departure time","travel document"],1],
    [24,"Digital messages made instant communication possible across distances that letters took weeks to cross.","instant",["delayed","immediate","formal","international"],1],
    [25,"By the beginning of the twentieth century, wristwatches were worn by virtually every military pilot.","virtually",["almost","rarely","exactly","traditionally"],0]
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
window.VOCAB_DATA["critical-reading"].week01 = WEEK01;

})();
