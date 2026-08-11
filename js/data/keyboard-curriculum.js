(function () {
  const phases = [
    { id: 1, days: [1, 30], title: "HOME ROW", subtitle: "손가락 위치 · 기본 키",
      goal: "왼손/오른손 8손가락을 홈 포지션(A S D F · J K L ;)에 정확히 배치하고, 세 줄 전체 키를 오타 없이 누르는 감각을 만들어요." },
    { id: 2, days: [31, 90], title: "KEY BUILDER", subtitle: "글자 조합 · 짧은 낱말",
      goal: "낱글자 입력을 짧은 한글/영어 낱말로 이어붙이는 연습을 해요. 자주 틀리는 손가락 조합을 집중적으로 복습해요." },
    { id: 3, days: [91, 150], title: "WORD BUILDER", subtitle: "한글 낱말 · 영어 단어",
      goal: "교과서에 나오는 실제 단어 분량을 빠르게 입력하고, 두벌식 받침·이중모음 조합까지 자연스럽게 다뤄요." },
    { id: 4, days: [151, 220], title: "SENTENCE PATH", subtitle: "짧은 문장",
      goal: "짧은 문장을 띄어쓰기와 문장부호까지 포함해 입력하며, 손을 떼지 않고 이어 치는 리듬을 만들어요." },
    { id: 5, days: [221, 290], title: "ACCURACY RACE", subtitle: "문장 · 정확도 · 속도",
      goal: "정확도 95% 이상을 유지한 채로 타이핑 속도를 끌어올려요. 실수 후 빠르게 회복하는 훈련을 포함해요." },
    { id: 6, days: [291, 340], title: "REAL TYPING", subtitle: "실전 타이핑",
      goal: "실제 문단 분량의 글을 옮겨 적으며, 화면을 보지 않고도 자리를 찾는 실전 감각을 완성해요." },
    { id: 7, days: [341, 365], title: "MASTER CHALLENGE", subtitle: "최종 종합 도전",
      goal: "지금까지 배운 모든 자리와 리듬을 섞은 최종 보스전으로 365 STAGE 여정을 마무리해요." }
  ];

  const phaseDay = config => ({
    id: config.id,
    phase: 1,
    title: config.title,
    subtitle: config.subtitle,
    minutes: 10,
    targetKeys: config.focusKeys,
    focusKeys: config.focusKeys,
    targetAccuracy: config.targetAccuracy,
    completionAccuracy: config.completionAccuracy,
    guideLevel: config.guideLevel || "beginner",
    language: config.language,
    warmUp: config.warmUp,
    keyTraining: config.keyTraining,
    wordTraining: config.wordTraining,
    korean: config.korean,
    english: config.english,
    words: config.words,
    challenge: config.challenge,
    miniGame: config.miniGame,
    bossRounds: config.bossRounds || null,
    stages: [
      { id: "warmup", label: "WARM UP", minutes: 1, xp: 2 },
      { id: "keys", label: "KEY TRAINING", minutes: 2, xp: 3 },
      { id: "words", label: "WORD TRAINING", minutes: 2, xp: 3 },
      { id: "game", label: "MINI GAME", minutes: 3, xp: 5 },
      { id: "challenge", label: "DAILY CHALLENGE", minutes: 2, xp: 5 }
    ]
  });

  const days = [
    // DAY 001–010 · Home Row Foundation (011~030과 동일한 5단계 밀도로 작성)
    phaseDay({ id:1, title:"Home Keys I", subtitle:"검지 F · J 부터 시작", focusKeys:["f","j"], targetAccuracy:88, language:{warmup:"en",keys:"en",words:"en",game:"en",challenge:"en"}, warmUp:"fj fj jf jf ff jj", keyTraining:"fj jf fj jf fj jf", wordTraining:"jf fj jjff ffjj", korean:"러 러 러", english:"fj fj jf jf", words:["fj","jf","fjjf"], miniGame:{type:"balloon",mode:"key-hunt-left",label:"KEY HUNT · F J",rounds:8,content:"f j f j j f f j"}, challenge:"fj jf fj jf", guideLevel:"beginner" }),
    phaseDay({ id:2, title:"Home Keys II", subtitle:"중지 D · K 추가", focusKeys:["d","k","f","j"], targetAccuracy:88, language:{warmup:"en",keys:"en",words:"en",game:"en",challenge:"en"}, warmUp:"dk fj kd jf dkfj", keyTraining:"dk kd df kj dk kd", wordTraining:"dad add fad kid", korean:"아 아 아", english:"dk fj kd", words:["dad","add","kid"], miniGame:{type:"balloon",mode:"key-hunt-right",label:"KEY HUNT · D K",rounds:8,content:"d k d k f j d k"}, challenge:"asdf jkl; dk fj", guideLevel:"beginner" }),
    phaseDay({ id:3, title:"Home Row Base", subtitle:"약지 S · L 추가", focusKeys:["s","l","d","k","f","j"], targetAccuracy:88, language:{warmup:"en",keys:"en",words:"en",game:"en",challenge:"en"}, warmUp:"sl ls sl ls sd lk", keyTraining:"asdf jkl; asdf jkl;", wordTraining:"sad fall lad flask", korean:"나 미 나미", english:"sl ls sd lk", words:["sad","fall","lad"], miniGame:{type:"meteor",mode:"accuracy-target",label:"ACCURACY TARGET",rounds:9,content:"s l d k f j s l"}, challenge:"a sad lad falls", guideLevel:"beginner" }),
    phaseDay({ id:4, title:"Index Reach", subtitle:"검지 G · H 확장", focusKeys:["g","h","f","j"], targetAccuracy:89, language:{warmup:"en",keys:"en",words:"en",game:"en",challenge:"en"}, warmUp:"gh hg gh hg fg jh", keyTraining:"gas has hall glass", wordTraining:"gas has hall flag", korean:"하 호 아하", english:"gh hg fg jh", words:["gas","has","hall"], miniGame:{type:"meteor",mode:"flash-key",label:"FLASH KEY",rounds:9,content:"g h f j g h j f"}, challenge:"a glass hall has gas", guideLevel:"beginner" }),
    phaseDay({ id:5, title:"Left Reach", subtitle:"검지 R · T", focusKeys:["r","t","f","g"], targetAccuracy:89, language:{warmup:"en",keys:"en",words:"en",game:"en",challenge:"en"}, warmUp:"rt tr rf tg rt tr", keyTraining:"star fast start trag", wordTraining:"star fast start grass", korean:"가 사 가사", english:"rt tr rf tg", words:["star","fast","start"], miniGame:{type:"balloon",mode:"key-hunt-left",label:"KEY HUNT · R T",rounds:10,content:"r t r t f g r t"}, challenge:"a fast star starts", guideLevel:"beginner" }),
    phaseDay({ id:6, title:"Right Reach", subtitle:"검지 Y · U", focusKeys:["y","u","j","h"], targetAccuracy:89, language:{warmup:"en",keys:"ko",words:"en",game:"en",challenge:"en"}, warmUp:"yu uy yu uy jy hu", keyTraining:"여유 여우 우유", wordTraining:"try your duty study", korean:"여유 여우", english:"yu uy jy hu", words:["your","duty","study"], miniGame:{type:"balloon",mode:"key-hunt-right",label:"KEY HUNT · Y U",rounds:10,content:"y u y u j h y u"}, challenge:"your study duty", guideLevel:"beginner" }),
    phaseDay({ id:7, title:"Home Row Review", subtitle:"7키 통합 복습", focusKeys:["a","s","d","f","j","k","l"], targetAccuracy:90, language:{warmup:"en",keys:"ko",words:"en",game:"en",challenge:"en"}, warmUp:"asdf jkl; fdsa ;lkj", keyTraining:"나라 사람 하나", wordTraining:"a sad lad falls glass", korean:"나라 사람 하나", english:"asdf jkl;", words:["falls","glass","flask"], miniGame:{type:"runner",mode:"ping-pong",label:"PING PONG KEYS",rounds:10,content:"a s d f j k l ;"}, challenge:"a lad has a flag", guideLevel:"beginner" }),
    phaseDay({ id:8, title:"First Words", subtitle:"중지 E · I 추가", focusKeys:["e","i","d","k"], targetAccuracy:90, language:{warmup:"en",keys:"en",words:"en",game:"en",challenge:"ko"}, warmUp:"ei ie ei ie de ki", keyTraining:"read ride side idea", wordTraining:"read ride side idle", korean:"다리 자리", english:"ei ie de ki", words:["read","side","idle"], miniGame:{type:"meteor",mode:"twin-target",label:"TWIN TARGET",rounds:10,content:"e i d k i e k d"}, challenge:"다리 자리 이야기", guideLevel:"beginner" }),
    phaseDay({ id:9, title:"Word Rhythm", subtitle:"약지 W · O 추가", focusKeys:["w","o","s","l"], targetAccuracy:91, language:{warmup:"en",keys:"en",words:"en",game:"en",challenge:"en"}, warmUp:"wo ow wo ow sw lo", keyTraining:"slow road world flow", wordTraining:"slow road world own", korean:"우리 아이", english:"wo ow sw lo", words:["slow","road","world"], miniGame:{type:"runner",mode:"rhythm-tap",label:"RHYTHM TAP",rounds:11,content:"slow road world flow"}, challenge:"a wide slow road", guideLevel:"beginner" }),
    phaseDay({ id:10, title:"Mini Boss I", subtitle:"Phase 1 첫 관문", focusKeys:["a","s","d","f","g","h","j","k","l"], targetAccuracy:92, completionAccuracy:0, language:{warmup:"en",keys:"ko",words:"en",game:"mixed",challenge:"en"}, warmUp:"asdfg hjkl; fdsag ;lkjh", keyTraining:"우리나라 사람 하나", wordTraining:"skill grows with practice", korean:"우리나라 사람", english:"asdfg hjkl;", words:["skill","practice","grows"], miniGame:{type:"boss",mode:"boss-round",label:"MINI BOSS",rounds:12,content:"home row left hand right hand mixed"}, challenge:"good typing starts with accuracy", guideLevel:"beginner", bossRounds:["LEFT HAND","RIGHT HAND","HOME ROW","MIXED","FINAL"] }),

    // DAY 011–015 · Home Row Mastery
    phaseDay({ id:11, title:"Home Row Accuracy", subtitle:"속도보다 정확하게", focusKeys:["a","s","d","f","j","k","l",";"], targetAccuracy:95, language:{warmup:"en",keys:"ko",words:"en",game:"en",challenge:"en"}, warmUp:"asdf jkl; fdsa ;lkj fj dk sl a;", keyTraining:"마나 아라 서리", wordTraining:"sad fall flask salad", korean:"마나 아라 서리", english:"asdf jkl;", words:["sad","fall","flask","salad"], miniGame:{type:"meteor",mode:"accuracy-target",label:"ACCURACY TARGET",rounds:10,content:"asdf jkl; fj dk sl a;"}, challenge:"asdf jkl; fdsa ;lkj", guideLevel:"beginner" }),
    phaseDay({ id:12, title:"Left Hand Control", subtitle:"왼손 A S D F 제어", focusKeys:["a","s","d","f"], targetAccuracy:95, language:{warmup:"en",keys:"ko",words:"en",game:"en",challenge:"en"}, warmUp:"asdf fdsa af sd df fasd", keyTraining:"마나 다라 나라", wordTraining:"sad dad add fad", korean:"마나 다라 나라", english:"asdf fdsa", words:["sad","dad","add","fad"], miniGame:{type:"balloon",mode:"key-hunt-left",label:"KEY HUNT · LEFT",rounds:12,content:"a s d f d a s f"}, challenge:"asdf fdsa af sd df", guideLevel:"beginner" }),
    phaseDay({ id:13, title:"Right Hand Control", subtitle:"오른손 J K L ; 제어", focusKeys:["j","k","l",";"], targetAccuracy:95, language:{warmup:"en",keys:"ko",words:"en",game:"en",challenge:"ko"}, warmUp:"jkl; ;lkj jl k; jk l;", keyTraining:"아리 이리 아이", wordTraining:"all ask lass fall", korean:"아리 이리 아이", english:"jkl; ;lkj", words:["all","ask","lass","fall"], miniGame:{type:"balloon",mode:"key-hunt-right",label:"KEY HUNT · RIGHT",rounds:12,content:"j k l ; l j k ;"}, challenge:"아리 이리 아이", guideLevel:"beginner" }),
    phaseDay({ id:14, title:"Hand Balance", subtitle:"왼손과 오른손 교차", focusKeys:["a","s","d","f","j","k","l",";"], targetAccuracy:95, language:{warmup:"en",keys:"ko",words:"en",game:"en",challenge:"en"}, warmUp:"fj dk sl a; jf kd ls ;a", keyTraining:"러 아 나 이", wordTraining:"flask salad falls asks", korean:"러 아 나 이", english:"fj dk sl a;", words:["flask","salad","falls","asks"], miniGame:{type:"runner",mode:"ping-pong",label:"PING PONG KEYS",rounds:12,content:"f j d k s l a ;"}, challenge:"fj dk sl a; jf kd ls ;a", guideLevel:"beginner" }),
    phaseDay({ id:15, title:"Home Row Rhythm", subtitle:"홈 포지션 리듬 완성", focusKeys:["a","s","d","f","g","h","j","k","l",";"], targetAccuracy:95, language:{warmup:"en",keys:"ko",words:"en",game:"en",challenge:"ko"}, warmUp:"asdfg hjkl; asdfg hjkl;", keyTraining:"하나 나라 사랑", wordTraining:"glass flags salad halls", korean:"하나 나라 사랑", english:"asdfg hjkl;", words:["glass","flags","salad","halls"], miniGame:{type:"runner",mode:"rhythm-tap",label:"RHYTHM TAP",rounds:12,content:"asdfg hjkl; fdsa ;lkj"}, challenge:"하나 하나 나라 사람", guideLevel:"beginner" }),

    // DAY 016–020 · Top Row Expansion
    phaseDay({ id:16, title:"Top Row Outer Keys", subtitle:"새끼손가락 Q · P", focusKeys:["q","p","a",";"], targetAccuracy:94, language:{warmup:"en",keys:"ko",words:"en",game:"en",challenge:"en"}, warmUp:"qa p; qa p; aq ;p", keyTraining:"바빠 아파 베개", wordTraining:"app pap quip aqua", korean:"바빠 아파 베개", english:"qa p;", words:["app","pap","quip","aqua"], miniGame:{type:"balloon",mode:"reach-return",label:"REACH & RETURN",rounds:10,content:"qa p; qa p; aq ;p"}, challenge:"qa p; quip app", guideLevel:"beginner" }),
    phaseDay({ id:17, title:"Top Row Reach", subtitle:"약지 W · O", focusKeys:["w","o","s","l"], targetAccuracy:94, language:{warmup:"en",keys:"ko",words:"en",game:"en",challenge:"ko"}, warmUp:"ws ol ws ol sw lo", keyTraining:"오래 와요 오리", wordTraining:"slow low owl wool", korean:"오래 와요 오리", english:"ws ol", words:["slow","low","owl","wool"], miniGame:{type:"meteor",mode:"flash-key",label:"FLASH KEY",rounds:11,content:"w o s l o w l s"}, challenge:"오리 와요 오래", guideLevel:"beginner" }),
    phaseDay({ id:18, title:"Middle Finger Reach", subtitle:"중지 E · I", focusKeys:["e","i","d","k"], targetAccuracy:94, language:{warmup:"en",keys:"ko",words:"en",game:"en",challenge:"en"}, warmUp:"ed ik ed ik de ki", keyTraining:"다리 이야기 아이", wordTraining:"ride side idea idle", korean:"다리 이야기 아이", english:"ed ik", words:["ride","side","idea","idle"], miniGame:{type:"balloon",mode:"twin-target",label:"TWIN TARGET",rounds:11,content:"e i d k i e k d"}, challenge:"ride it side by side", guideLevel:"beginner" }),
    phaseDay({ id:19, title:"Index Top Reach", subtitle:"검지 R T · Y U 전환", focusKeys:["r","t","y","u","f","g","h","j"], targetAccuracy:94, language:{warmup:"en",keys:"ko",words:"en",game:"en",challenge:"ko"}, warmUp:"rf tg yh uj rt yu tr uy", keyTraining:"우리 여유 구름", wordTraining:"true try turn hurry", korean:"우리 여유 구름", english:"rf tg yh uj", words:["true","try","turn","hurry"], miniGame:{type:"runner",mode:"index-switch",label:"INDEX SWITCH",rounds:12,content:"r t r t y u y u"}, challenge:"우리 구름 하루", guideLevel:"beginner" }),
    phaseDay({ id:20, title:"Top Row Review", subtitle:"Top + Home 혼합", focusKeys:["q","w","e","r","t","y","u","i","o","p","a","s","d","f","j","k","l",";"], targetAccuracy:95, language:{warmup:"en",keys:"ko",words:"en",game:"en",challenge:"en"}, warmUp:"qwert yuiop asdf jkl;", keyTraining:"우리 타자 연습", wordTraining:"quiet power type write", korean:"우리 타자 연습", english:"qwert yuiop", words:["quiet","power","type","write"], miniGame:{type:"meteor",mode:"top-row-rush",label:"TOP ROW RUSH",rounds:14,content:"type quiet power write"}, challenge:"quiet hands type right", guideLevel:"beginner" }),

    // DAY 021–025 · Bottom Row Expansion
    phaseDay({ id:21, title:"Bottom Row Outer Keys", subtitle:"새끼손가락 Z · /", focusKeys:["z","/","a",";"], targetAccuracy:94, language:{warmup:"en",keys:"ko",words:"en",game:"en",challenge:"en"}, warmUp:"za /; za /; az ;/", keyTraining:"크다 크다", wordTraining:"zap jazz slash", korean:"크다 크다", english:"za /;", words:["zap","jazz","slash"], miniGame:{type:"runner",mode:"down-back",label:"DOWN & BACK",rounds:10,content:"za /; za /; az ;/"}, challenge:"jazz / jazz /", guideLevel:"beginner" }),
    phaseDay({ id:22, title:"Bottom Row Steps", subtitle:"약지 X · .", focusKeys:["x",".","s","l"], targetAccuracy:94, language:{warmup:"en",keys:"ko",words:"en",game:"en",challenge:"en"}, warmUp:"xs .l xs .l sx l.", keyTraining:"타자 친구", wordTraining:"mix fix max class", korean:"타자 친구", english:"xs .l", words:["mix","fix","max","class"], miniGame:{type:"meteor",mode:"flash-key",label:"FLASH KEY · DOWN",rounds:11,content:"x . s l . x l s"}, challenge:"mix. fix. max.", guideLevel:"beginner" }),
    phaseDay({ id:23, title:"Bottom Index Reach", subtitle:"검지 C V · B N 경로", focusKeys:["c","v","b","n","d","f","g","h","j"], targetAccuracy:94, language:{warmup:"en",keys:"ko",words:"en",game:"en",challenge:"ko"}, warmUp:"cd vf bg nh cv bn vc nb", keyTraining:"바다 친구 나비", wordTraining:"van cab vivid band", korean:"바다 친구 나비", english:"cd vf bg nh", words:["van","cab","vivid","band"], miniGame:{type:"runner",mode:"target-path",label:"TARGET PATH",rounds:12,content:"c v b n n b v c"}, challenge:"바다 친구 나비", guideLevel:"beginner" }),
    phaseDay({ id:24, title:"Bottom Right Reach", subtitle:"오른손 N M 집중", focusKeys:["n","m","h","j","k"], targetAccuracy:94, language:{warmup:"en",keys:"ko",words:"en",game:"en",challenge:"en"}, warmUp:"nh mj nk mn nm jn", keyTraining:"나무 마음 무리", wordTraining:"name moon main mini", korean:"나무 마음 무리", english:"nh mj nk", words:["name","moon","main","mini"], miniGame:{type:"balloon",mode:"right-hand-combo",label:"RIGHT HAND COMBO",rounds:12,content:"n m h j k m n j"}, challenge:"name the moon", guideLevel:"beginner" }),
    phaseDay({ id:25, title:"Bottom Row Review", subtitle:"Bottom + Home 혼합", focusKeys:["z","x","c","v","b","n","m",",",".","/","a","s","d","f","j","k","l",";"], targetAccuracy:95, language:{warmup:"en",keys:"ko",words:"en",game:"en",challenge:"ko"}, warmUp:"zxcv bnm, ./ asdf jkl;", keyTraining:"친구 나무 바다", wordTraining:"van zoom mix cabin", korean:"친구 나무 바다", english:"zxcv bnm, ./", words:["van","zoom","mix","cabin"], miniGame:{type:"meteor",mode:"falling-keys",label:"FALLING KEYS",rounds:14,content:"z x c v b n m , . /"}, challenge:"친구와 나무 바다", guideLevel:"beginner" }),

    // DAY 026–030 · Full Keyboard Foundation
    phaseDay({ id:26, title:"Three Row Accuracy", subtitle:"세 줄 정확도 방어", focusKeys:["q","a","z","p",";","/","w","s","x","o","l","."], targetAccuracy:95, language:{warmup:"en",keys:"ko",words:"en",game:"en",challenge:"en"}, warmUp:"qaz wsx edc pl; ok. ij,", keyTraining:"정확한 타자 연습", wordTraining:"quick calm exact point", korean:"정확한 타자 연습", english:"qaz wsx edc", words:["quick","calm","exact","point"], miniGame:{type:"meteor",mode:"accuracy-shield",label:"ACCURACY SHIELD",rounds:14,content:"quick calm exact point"}, challenge:"accuracy keeps the shield", guideLevel:"compact" }),
    phaseDay({ id:27, title:"Alternating Hands", subtitle:"양손 키보드 릴레이", focusKeys:["f","j","r","u","v","m","d","k","e","i"], targetAccuracy:95, language:{warmup:"en",keys:"ko",words:"en",game:"en",challenge:"ko"}, warmUp:"fj ru vm dk ei cj", keyTraining:"바른 손가락", wordTraining:"river jump drive move", korean:"바른 손가락", english:"fj ru vm dk ei", words:["river","jump","drive","move"], miniGame:{type:"runner",mode:"keyboard-relay",label:"KEYBOARD RELAY",rounds:14,content:"f j r u v m d k e i"}, challenge:"바른 손가락 타자", guideLevel:"compact" }),
    phaseDay({ id:28, title:"Steady Rhythm", subtitle:"정확한 리듬으로 전진", focusKeys:["q","w","e","a","s","d","z","x","c","j","k","l","u","i","o","n","m"], targetAccuracy:95, language:{warmup:"en",keys:"ko",words:"en",game:"en",challenge:"en"}, warmUp:"qwe asd zxc uio jkl nm", keyTraining:"천천히 정확하게", wordTraining:"bright morning steady rhythm", korean:"천천히 정확하게", english:"qwe asd zxc", words:["bright","morning","steady","rhythm"], miniGame:{type:"runner",mode:"rhythm-run",label:"RHYTHM RUN",rounds:15,content:"steady rhythm bright morning"}, challenge:"slow and steady typing", guideLevel:"compact" }),
    phaseDay({ id:29, title:"Full Keyboard Review", subtitle:"Phase 1 전체 복습", focusKeys:["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l",";","z","x","c","v","b","n","m"], targetAccuracy:95, language:{warmup:"en",keys:"ko",words:"en",game:"en",challenge:"ko"}, warmUp:"qwert yuiop asdfg hjkl; zxcvb nm", keyTraining:"매일 타자 연습", wordTraining:"practice skill keyboard focus", korean:"매일 타자 연습", english:"qwert yuiop", words:["practice","skill","keyboard","focus"], miniGame:{type:"runner",mode:"ghost-race",label:"GHOST RACE",rounds:16,content:"practice skill keyboard focus"}, challenge:"매일 바른 타자 연습", guideLevel:"compact" }),
    phaseDay({ id:30, title:"Phase 1 Boss", subtitle:"KEYBOARD GATE", focusKeys:["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l",";","z","x","c","v","b","n","m",",",".","/"], targetAccuracy:90, completionAccuracy:0, language:{warmup:"en",keys:"ko",words:"en",game:"mixed",challenge:"en"}, warmUp:"asdf jkl; qwert yuiop zxcv bnm", keyTraining:"정확한 손가락 타자", wordTraining:"accuracy rhythm keyboard challenge", korean:"정확한 손가락 타자", english:"asdf jkl; qwert yuiop", words:["accuracy","rhythm","keyboard","challenge"], miniGame:{type:"boss",mode:"boss-round",label:"BOSS ROUND",rounds:18,content:"home row top row bottom row full keyboard"}, challenge:"accuracy first rhythm next", guideLevel:"compact", bossRounds:["HOME ROW","TOP ROW","BOTTOM ROW","FULL KEYBOARD","MIXED TYPING"] })
  ];

  window.KEYBOARD_CURRICULUM = {
    version: 2,
    totalDays: 365,
    dailyMinutes: 10,
    layouts: { english: "QWERTY", korean: "두벌식" },
    phases,
    days
  };
})();
