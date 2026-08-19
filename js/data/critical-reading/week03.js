(function () {

const word = (id, word, partOfSpeech, meaning, synonym, antonym, definition, bookSentence, example) => ({
  id, word, partOfSpeech, meaning, synonym, antonym, definition, bookSentence, example
});

const closestRelatedWords = {
  1: "rage",
  9: "brave",
  14: "wield",
  23: "persecute"
};

const WEEK03 = {
  week: 3,
  title: "WEEK 03",
  totalWords: 25,

  words: [
    word(1, "rage", "verb", "맹렬히 일어나다, 거세게 몰아치다", "roar", "subside", "to happen in a strong or violent way", "In fact, whenever a tempest is raging near U.S. soil, the Hurricane Hunters will be there, piercing straight into the eye of the storm.", "The forest fire raged through the mountains, destroying everything in its path."),
    word(2, "pierce", "verb", "뚫고 들어가다, 관통하다", "penetrate", "bypass", "to force or make a way into or through something", "In fact, whenever a tempest is raging near U.S. soil, the Hurricane Hunters will be there, piercing straight into the eye of the storm.", "The arrow was able to pierce through the target during archery practice."),
    word(3, "meteorologist", "noun", "기상학자", "", "", "someone who studies weather conditions", "Information, such as temperature, wind speed, and air pressure . . . are helpful to meteorologists as they try to predict . . . the hurricane.", "When wildfires spread, meteorologists track wind conditions to help firefighters."),
    word(4, "fury", "noun", "맹렬함, 격렬한 위력", "violence", "peace", "extreme force", "They [try to predict the power and direction of the hurricane] to provide an early warning so that people might escape the storm's terrible fury.", "The village prepared for the fury of the approaching typhoon."),
    word(5, "satellite", "noun", "위성", "", "", "an electronic machine sent into space that orbits the Earth to receive and send information", "Some people wonder why the Hurricane Hunters make such risky flights since weather satellites have been scanning the globe for decades.", "The satellite in orbit transmitted images of Earth back to the control center."),
    word(6, "approximation", "noun", "근사치, 근삿값", "estimate", "certainty", "a guess of a number that is not exact but that is close", "For example, while weather forecasts can make predictions about a storm's strength using satellite images alone, such approximations are often inaccurate.", "The map gave us an approximation of the travel distance."),
    word(7, "sophisticated", "adj.", "매우 복잡한, 정교한", "advanced", "simple", "being very complex or complicated", "Using sophisticated technology, the Hurricane Hunters gather critical data that is used to determine common causes for hurricanes . . .", "The scientists used sophisticated equipment to track the storm."),
    word(8, "critical", "adj.", "결정적인, 중요한", "essential", "unimportant", "of extreme importance", "Using sophisticated technology, the Hurricane Hunters gather critical data that is used to determine common causes for hurricanes . . .", "Getting to the hospital quickly was critical for the accident victim's survival."),
    word(9, "brave", "verb", "용감하게 맞서다, 무릅쓰다", "confront", "surrender", "to deal with a difficult, dangerous, or unpleasant situation", "Until that day arrives, the Hurricane Hunters will continue to brave every storm—to save innocent lives and contribute to the advancement of science.", "The firefighters braved the massive flames to rescue the trapped kitten."),
    word(10, "contribute to", "phr. verb", "기여하다", "play a role", "hinder", "to play a significant part in making something happen", "Until that day arrives, the Hurricane Hunters will continue to brave every storm—to save innocent lives and contribute to the advancement of science.", "Many players contributed to the team's success, so it is hard to pick the best player."),
    word(11, "monarch", "noun", "군주", "ruler", "subject", "a nation's king or queen", "For the most part, there have been three types of leaders of nations. The first are monarchs. These are kings, queens, and other nobles.", "Queen Elizabeth I was the monarch who ruled England for over forty years."),
    word(12, "charismatic", "adj.", "카리스마가 있는", "influential", "uninspiring", "having a special quality that makes one able to influence other people and attract their attention and admiration", "Second are charismatic leaders who rise to power. They include dictators such as Adolf Hitler of Germany.", "The charismatic singer captures fans' hearts with her stage presence."),
    word(13, "dictator", "noun", "독재자", "tyrant", "follower", "a ruler with total power over a country, typically obtaining control by force", "Second are charismatic leaders who rise to power. They include dictators such as Adolf Hitler of Germany.", "Under the dictator's control, the citizens had to follow strict laws without question."),
    word(14, "wield", "verb", "(권력·권위 등을) 행사하다", "exert", "relinquish", "to have and be able to use power or influence", "For most of history, monarchs ruled the majority of nations. Those monarchs had complete control over their lands.", "The class president wielded great influence over school event decisions."),
    word(15, "absolute", "adj.", "절대적인, 무제한의", "complete", "partial", "without limit, very great, or to the largest degree possible", "For most of history, monarchs ruled the majority of nations. Those monarchs had complete control over their lands.", "The emperor's absolute rule left the people with no political freedom."),
    word(16, "overthrow", "verb", "(지도자·정부를) 타도하다", "depose", "uphold", "to remove forcibly from power", "In other cases, some monarchs were so bad that the people overthrew them.", "The rebels planned to overthrow the corrupt government and restore justice."),
    word(17, "abolish", "verb", "(법률·제도·조직을) 폐지하다", "eliminate", "establish", "to formally put an end to a system, practice, or institution", "In the 1900s, many monarchies were abolished. Others had their power taken away.", "In 1920, the 19th Amendment abolished laws that had prevented American women from voting."),
    word(18, "figurehead", "noun", "명목상의 최고위자", "symbolic leader", "", "someone who has the position of a leader but who has no real power", "Some nations, such as England, still have monarchs. Yet they are mere figureheads today.", "The previous CEO was a figurehead who did not make any important decisions."),
    word(19, "political", "adj.", "정치적인", "", "", "relating to government, lawmaking, or efforts to influence how a country is governed", "Adolf Hitler's political party won control of the German government in the 1930s.", "Freedom of speech is a fundamental political right that should be upheld by law."),
    word(20, "assume", "verb", "(권력, 책임을) 맡다", "seize", "yield", "to take control or claim authority, sometimes without the right to do so", "Then, Hitler assumed power over the entire country, stopping anyone who got in their way.", "The prince assumed the throne when his father stepped down."),
    word(21, "legislature", "noun", "입법 기관, 입법부", "parliament", "", "the group of people in a country who have the power to make and change laws", "The legislature and the people are often powerless to stop [dictators].", "The state legislature passed a new law in order to increase funding for healthcare."),
    word(22, "unstable", "adj.", "불안정한", "unsteady", "steady", "not firm and therefore not strong, safe, or likely to last", "Yet their periods of rule may be unstable or violent times. These dictators often demand too much power.", "The unstable Wi-Fi connection made it impossible to attend the online class."),
    word(23, "persecute", "verb", "(특히 인종·종교·정치적 이유로) 박해하다", "oppress", "protect", "to treat someone unfairly or cruelly over a long period of time because of race, religion, or political beliefs", "[Dictators] may start wars and persecute their own people.", "Throughout history, many people have been unfairly persecuted for their beliefs."),
    word(24, "grant", "verb", "(특히 공식적·법적으로) 승인[허락]하다", "permit", "deny", "to give or allow someone something, usually in an official way", "Elected leaders are those who win elections that grant them power.", "Due to her academic success, the university decided to grant Sue a full scholarship."),
    word(25, "constitution", "noun", "헌법", "", "", "the set of political principles by which a state or organization is governed, especially in relation to the rights of the people it governs", "Countries with elected leaders often have constitutions. They put specific limits on the power of their leaders.", "South Korea's constitution guarantees citizens certain rights and freedoms.")
  ],

  contextPassages: [
    {
      id: 1,
      passage: "Every hurricane season, a special team of scientists called Hurricane Hunters flies directly into the eye of the storm. As the tempest rages around them, their aircraft must pierce through violent walls of wind and rain to reach the calmer center. From above, they collect readings that help meteorologists build a clearer picture of the storm's fury before it reaches land. Ordinary satellite images alone can only give an approximation of a storm's strength, but the sophisticated instruments onboard the aircraft gather far more critical data. Because of the danger involved, the scientists who brave these flights contribute to advances in forecasting that save countless lives every year.",
      questions: [
        { id: 1, type: "meaning", question: "The word ‘pierce’ in the passage is closest in meaning to…", choices: ["penetrate", "avoid", "measure", "calm"], answer: 0, relatedWord: "pierce", explanation: "폭풍의 벽을 뚫고 들어간다는 문맥이므로 '관통하다'라는 뜻입니다." },
        { id: 2, type: "meaning", question: "The word ‘fury’ in the passage is closest in meaning to…", choices: ["violence", "silence", "warmth", "curiosity"], answer: 0, relatedWord: "fury", explanation: "폭풍의 격렬한 위력을 나타내는 문맥이므로 '맹렬함'이라는 뜻입니다." },
        { id: 3, type: "meaning", question: "The word ‘sophisticated’ in the passage is closest in meaning to…", choices: ["advanced", "broken", "cheap", "outdated"], answer: 0, relatedWord: "sophisticated", explanation: "항공기에 실린 정교한 장비를 가리키는 문맥이므로 '매우 복잡한, 정교한'이라는 뜻입니다." },
        { id: 4, type: "inference", question: "In stating that scientists ‘brave’ these flights, the author means that the scientists…", choices: ["avoid every possible risk", "face a dangerous situation on purpose", "refuse to fly during storms", "are unaware of the danger"], answer: 1, relatedWord: "brave", explanation: "위험을 무릅쓰고 비행한다는 문맥이므로 위험한 상황에 일부러 맞선다는 뜻입니다." },
        { id: 5, type: "inference", question: "In stating that the scientists' work ‘contributes to’ advances in forecasting, the author means that their work…", choices: ["has no real effect on forecasting", "plays an important part in improving forecasting", "replaces the need for forecasting", "was copied from older forecasting methods"], answer: 1, relatedWord: "contribute to", explanation: "예보 발전에 기여한다는 문맥이므로 중요한 역할을 한다는 뜻입니다." }
      ]
    },
    {
      id: 2,
      passage: "Throughout history, nations have been led in different ways. Some countries were ruled by a single monarch who inherited the throne simply by being born into the right family. Other leaders rose to power because they were charismatic, using their personal charm to win the loyalty of millions of followers. Unfortunately, several of history's most charismatic leaders turned out to be dictators who used that same charm to seize control by force rather than through fair elections. Once in power, these dictators often wielded absolute control, making every major decision themselves and refusing to share power with anyone else.",
      questions: [
        { id: 1, type: "meaning", question: "The word ‘monarch’ in the passage is closest in meaning to…", choices: ["ruler", "soldier", "judge", "protester"], answer: 0, relatedWord: "monarch", explanation: "태어남으로써 왕위를 물려받는 지도자를 가리키므로 '군주'라는 뜻입니다." },
        { id: 2, type: "meaning", question: "The word ‘charismatic’ in the passage is closest in meaning to…", choices: ["influential", "forgettable", "dishonest", "elderly"], answer: 0, relatedWord: "charismatic", explanation: "매력으로 많은 사람의 충성심을 얻는다는 문맥이므로 '영향력 있는'이라는 뜻입니다." },
        { id: 3, type: "inference", question: "In stating that some charismatic leaders ‘turned out to be dictators’, the author means that these leaders…", choices: ["shared power fairly with citizens", "eventually ruled through force rather than fair elections", "were removed from office peacefully", "refused to lead their countries"], answer: 1, relatedWord: "dictator", explanation: "선거가 아닌 힘으로 권력을 장악했다는 문맥이므로 독재자가 되었다는 뜻입니다." },
        { id: 4, type: "meaning", question: "The word ‘wielded’ in the passage is closest in meaning to…", choices: ["exerted", "abandoned", "questioned", "measured"], answer: 0, relatedWord: "wield", explanation: "절대적인 통제력을 행사했다는 문맥이므로 '행사하다'라는 뜻입니다." },
        { id: 5, type: "meaning", question: "The word ‘absolute’ in the passage is closest in meaning to…", choices: ["complete", "partial", "temporary", "secret"], answer: 0, relatedWord: "absolute", explanation: "모든 결정을 혼자 내렸다는 문맥이므로 '완전한, 절대적인'이라는 뜻입니다." }
      ]
    },
    {
      id: 3,
      passage: "When a dictator's rule becomes especially unstable, citizens sometimes attempt to overthrow the government entirely. In some countries, new leaders have gone on to abolish the old political system and replace it with a constitution that limits how much power any single leader can hold. Under many modern constitutions, a king or queen may still exist, but only as a figurehead with no real political authority. Real power instead belongs to an elected legislature, whose members must be granted their positions through fair voting rather than force. Sadly, some governments still persecute citizens who speak out against unfair rule, which is exactly the kind of abuse that constitutions are designed to prevent.",
      questions: [
        { id: 1, type: "meaning", question: "The word ‘overthrow’ in the passage is closest in meaning to…", choices: ["depose", "support", "elect", "ignore"], answer: 0, relatedWord: "overthrow", explanation: "정부를 완전히 무너뜨린다는 문맥이므로 '타도하다'라는 뜻입니다." },
        { id: 2, type: "meaning", question: "The word ‘abolish’ in the passage is closest in meaning to…", choices: ["eliminate", "create", "strengthen", "celebrate"], answer: 0, relatedWord: "abolish", explanation: "낡은 정치 체제를 없앤다는 문맥이므로 '폐지하다'라는 뜻입니다." },
        { id: 3, type: "inference", question: "In stating that a king or queen may remain only as a ‘figurehead’, the author means that the monarch…", choices: ["still makes every major decision", "holds the title but no real political power", "has been removed from the country entirely", "controls the legislature directly"], answer: 1, relatedWord: "figurehead", explanation: "실권이 없다는 문맥이므로 이름뿐인 지도자라는 뜻입니다." },
        { id: 4, type: "inference", question: "In stating that real power belongs to an elected ‘legislature’, the author means that lawmaking power belongs to…", choices: ["a single unelected ruler", "a group of officials chosen through voting", "the military", "a symbolic king or queen"], answer: 1, relatedWord: "legislature", explanation: "선거로 뽑힌 사람들이 권력을 갖는다는 문맥이므로 입법 기관을 가리킵니다." },
        { id: 5, type: "inference", question: "In stating that some governments ‘persecute’ citizens who speak out, the author means that these citizens are…", choices: ["rewarded for their opinions", "treated unfairly or cruelly because of their beliefs", "asked to join the legislature", "given official constitutions"], answer: 1, relatedWord: "persecute", explanation: "부당하게 탄압받는다는 문맥이므로 '박해하다'라는 뜻입니다." }
      ]
    }
  ],

  wordBoxSets: [
    { id: 1, words: ["rage", "pierce", "meteorologist", "fury", "satellite", "approximation"], sentences: [
      { text: "Without warning, a wildfire can ___ out of control across a dry hillside within hours, consuming everything in its path before firefighters manage to contain it.", answer: "rage" },
      { text: "A ___ studies patterns in temperature, wind, and air pressure to predict what the weather will do next.", answer: "meteorologist" },
      { text: "As the hurricane grew stronger, authorities warned coastal residents about the storm's terrible ___ before it made landfall.", answer: "fury" },
      { text: "Engineers launched a new ___ into orbit so that ships at sea could receive accurate location signals.", answer: "satellite" },
      { text: "Since nobody had measured the canyon exactly, the guidebook could only offer a rough ___ of its depth.", answer: "approximation" }
    ]},
    { id: 2, words: ["sophisticated", "critical", "brave", "contribute to", "monarch", "charismatic"], sentences: [
      { text: "The engineers built an incredibly ___ security system — combining dozens of interconnected sensors and layered algorithms — that could recognize a single face in a crowd of thousands within seconds.", answer: "sophisticated" },
      { text: "Getting enough sleep before an exam is ___ if you want to think clearly and perform your best.", answer: "critical" },
      { text: "Dozens of volunteers ___ the community garden's success by donating both their time and their seeds.", answer: "contribute to" },
      { text: "Before the country became a republic, a single ___ inherited the throne and ruled for life.", answer: "monarch" },
      { text: "The candidate's naturally ___ personality — warm, energetic, and instantly likable — helped her win over undecided voters during the final debate.", answer: "charismatic" }
    ]},
    { id: 3, words: ["dictator", "wield", "absolute", "overthrow", "abolish", "figurehead"], sentences: [
      { text: "After seizing power in a military coup, the new ___ ruled the country with an iron fist and crushed all opposition.", answer: "dictator" },
      { text: "The emperor's ___ authority meant that no law could be passed without his personal approval.", answer: "absolute" },
      { text: "Fed up with decades of corruption, the citizens armed themselves and rose up together in a violent uprising to ___ the ruling regime and drive its leaders into exile.", answer: "overthrow" },
      { text: "The new government moved quickly to pass a formal law that would ___ the outdated system of forced labor that had existed for generations.", answer: "abolish" },
      { text: "Although the young prince technically held the throne, everyone knew he was merely a ___ while his uncle made every real decision.", answer: "figurehead" }
    ]},
    { id: 4, words: ["political", "assume", "legislature", "unstable", "persecute", "grant"], sentences: [
      { text: "Debating tax policy and foreign relations are both examples of ___ topics that dominate the news before an election.", answer: "political" },
      { text: "When the CEO unexpectedly resigned, the vice president had no choice but to step up and ___ full control of the company himself, starting with an emergency board meeting the next morning.", answer: "assume" },
      { text: "Members of the ___ spent weeks debating the new tax bill before finally voting on it.", answer: "legislature" },
      { text: "The old wooden ladder felt so ___ that she was afraid it might collapse the moment she stepped on it.", answer: "unstable" },
      { text: "After reviewing her research proposal carefully, the committee agreed to ___ her the funding she needed.", answer: "grant" }
    ]},
    { id: 5, words: ["pierce", "brave", "wield", "persecute", "constitution", "rage"], sentences: [
      { text: "The arrow, shot with tremendous force, had to ___ precisely through three layers of padded armor before finally striking the target.", answer: "pierce" },
      { text: "Only a truly ___ firefighter would run into a burning building to save a trapped animal.", answer: "brave" },
      { text: "As the newly crowned king, he would now ___ more power than any ruler before him in his family's history.", answer: "wield" },
      { text: "During the war, the government began to ___ anyone who publicly criticized its policies, arresting them without trial and imprisoning them for years.", answer: "persecute" },
      { text: "The country's ___ guarantees every citizen the right to a fair trial.", answer: "constitution" }
    ]}
  ],

  closestMeaningQuestions: [
    [1, "The floodwaters raged through the village, sweeping away cars and fences.", "raged", ["roared", "calmed", "paused", "whispered"], 0],
    [2, "The nail was sharp enough to pierce through the thick rubber tire.", "pierce", ["penetrate", "polish", "measure", "avoid"], 0],
    [3, "The meteorologist warned that a severe thunderstorm would arrive by evening.", "meteorologist", ["a person who studies and predicts the weather", "a person who studies ocean currents", "a person who repairs satellites", "a person who designs buildings"], 0],
    [4, "The customer's fury grew as he waited over an hour for a refund.", "fury", ["violence", "calm", "joy", "boredom"], 0],
    [5, "Engineers lost contact with the satellite shortly after it entered orbit.", "satellite", ["a machine that orbits Earth to send and receive signals", "a vehicle used to explore the ocean floor", "a telescope located on a mountain", "a balloon used to measure air pressure"], 0],
    [6, "Since the exact height wasn't recorded, historians rely on an approximation based on old photographs.", "approximation", ["estimate", "certainty", "measurement error", "photograph"], 0],
    [7, "The new security system uses sophisticated software to detect intruders.", "sophisticated", ["advanced", "broken", "cheap", "outdated"], 0],
    [8, "Access to clean water is critical for communities recovering from the drought.", "critical", ["essential", "optional", "expensive", "temporary"], 0],
    [9, "The divers braved freezing waters to search for survivors of the shipwreck.", "braved", ["confronted", "avoided", "described", "measured"], 0],
    [10, "Regular exercise and a balanced diet both contribute to a person's overall health.", "contribute to", ["play a role in", "have no effect on", "take away from", "replace"], 0],
    [11, "The young monarch was crowned before thousands of cheering citizens.", "monarch", ["ruler", "soldier", "judge", "protester"], 0],
    [12, "The charismatic coach inspired even the least confident players on the team.", "charismatic", ["influential", "forgettable", "dishonest", "elderly"], 0],
    [13, "The dictator silenced every newspaper that dared to criticize his government.", "dictator", ["tyrant", "volunteer", "judge", "teacher"], 0],
    [14, "As team captain, she wielded a surprising amount of influence over her teammates' decisions.", "wielded", ["exerted", "lost", "questioned", "measured"], 0],
    [15, "The judge's ruling was absolute, leaving no room for appeal.", "absolute", ["complete", "partial", "temporary", "secret"], 0],
    [16, "Rebel forces attempted to overthrow the government in a surprise attack.", "overthrow", ["depose", "support", "elect", "ignore"], 0],
    [17, "Reformers campaigned for years to abolish the unfair tax on small farmers.", "abolish", ["eliminate", "create", "strengthen", "celebrate"], 0],
    [18, "Although he holds the title of president, he is really just a figurehead controlled by the military council.", "figurehead", ["symbolic leader", "powerful ruler", "elected lawmaker", "military guard"], 0],
    [19, "Debates over healthcare and taxes are common political topics during election season.", "political", ["relating to government and lawmaking", "relating to farming and agriculture", "relating to art and music", "relating to ocean life"], 0],
    [20, "After the coach was injured, the assistant coach had to assume responsibility for the team.", "assume", ["seize", "release", "question", "announce"], 0],
    [21, "The state legislature will vote on the new education budget next week.", "legislature", ["parliament", "court", "army", "classroom"], 0],
    [22, "The old bridge was so unstable that engineers closed it to all traffic.", "unstable", ["unsteady", "sturdy", "modern", "expensive"], 0],
    [23, "The activist was persecuted for years simply because of his political beliefs.", "persecuted", ["oppressed", "rewarded", "promoted", "ignored"], 0],
    [24, "The city council voted to grant the charity permission to hold its event in the park.", "grant", ["permit", "deny", "cancel", "postpone"], 0],
    [25, "The nation's constitution was rewritten after decades of political unrest.", "constitution", ["the fundamental set of laws and principles that govern a country", "a list of a country's trading partners", "a formal declaration of war", "a record of a country's yearly budget"], 0]
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
window.VOCAB_DATA["critical-reading"].week03 = WEEK03;

})();
