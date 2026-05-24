const CATEGORIES = {
  drake: {
    rank: "S 级",
    title: "Drake 型：性张力答案，别碰瓷",
    score: 99,
    short: "Drake 正规军",
    copy:
      "这档就是版本答案。\n\n你可以说他油，说他商业，说他装深情。都行。问题是人家真有用。女的真吃，夜店真放，前任真破防，男的嘴上骂，私底下还学他发消息。\n\n你不是地下，不文艺，不装怪。你就是知道怎么让人上头。别人还在研究歌单显不显得高级，你已经知道什么时候该靠近、什么时候该撤、什么时候该装作刚好想到对方。",
    verdict: "鉴定：性张力正规军。渣也渣得有市场，油也油得能卖票。",
    profile:
      "伴侣画像：最适合那种嘴上骂你油、身体很诚实的人。TA 一边说“你少来这套”，一边等你下一句。你俩吵架像写歌，和好像巡演加场。",
  },
  rage: {
    rank: "A 级",
    title: "Rage/Opium 新地下：土狗吃上版本红利",
    score: 88,
    short: "Rage 土狗红利",
    copy:
      "别装了。\n\n你不是品味高，你就是土狗土到点上了。这几年审美正好抽风，OD 妹、县城酷妹、短视频潮流女、亚文化小孩就吃你这套：裤子大，头发乱，说话含糊，头像黑得看不清脸，歌单全是爆音。\n\n放十年前这叫非主流小登，放现在叫有 aura。不是你进步了，是版本环境疯了。你站那儿别说话就行，一开口反而容易露馅。",
    verdict: "鉴定：不是会撩，是刚好撞上审美洼地。土得精准，也算本事。",
    profile:
      "伴侣画像：容易吸到爱说“他好特别”的小女孩。她以为你是危险人物，实际你只是作息烂、嘴笨、手机快没电。",
  },
  abstract: {
    rank: "B 级",
    title: "Abstract Rap：阴湿自我感动专柜",
    score: 73,
    short: "Abstract 阴湿专柜",
    copy:
      "这档最烦。\n\n一群人听点鼓都没有的歌，就开始觉得自己比别人多活一层。别人问你吃没吃饭，你能扯到原生家庭。别人约你出来玩，你说最近状态不太稳定。别人说想听点开心的，你放一首像没睡醒的人在被窝里念遗书的歌。\n\n你有一点性张力，主要骗刚认识你的人。人家以为你沉稳、敏感、有故事。熟了以后发现，不是有故事，是事多。",
    verdict: "鉴定：短期能骗，长期折磨。你不是深情，你是阴。",
    profile:
      "伴侣画像：最容易吸到拯救欲很重的人。TA 前三天觉得你有灵魂，第三周开始怀疑自己是不是在免费实习心理咨询。",
  },
  griselda: {
    rank: "C 级",
    title: "Griselda/Street Rap：硬装懂哥批发市场",
    score: 66,
    short: "Griselda 硬装懂哥",
    copy:
      "你们这档确实有品，但也确实烦。\n\n天天 drumless，天天 coke rap，天天 Alchemist。鼓一进你嫌俗，副歌一来你嫌商业，别人说不好听你说人家不懂。\n\n你有性张力，但受众很窄。能精准打击那种穿黑色长大衣、喝冰美式、朋友圈发楼梯和烟灰缸的女的。正常人看你，只觉得你像个开口就要讲黑胶压盘版本区别的二手店老板。",
    verdict: "鉴定：小众有效，大众避雷。你不是硬，你是装得累。",
    profile:
      "伴侣画像：适合黑衣服、冷脸、看展不拍人只拍墙的对象。两个人坐一起不说话，看着像约会，其实像二手店合伙人谈库存。",
  },
  cloud: {
    rank: "D 级",
    title: "Cloud/UK 妖风：假高级潮流孤儿",
    score: 49,
    short: "Cloud 氛围诈骗",
    copy:
      "你这档就是最会把穷酸和失控包装成风格。\n\n不回消息，叫神秘。作息烂，叫破碎。穿得乱，叫 layering。歌听不懂，叫氛围。人没礼貌，叫松弛感。\n\n你所谓的高级感，很多时候就是滤镜太暗、脸太糊、话太少。真聊两天就露馅：没规划，没表达，没责任感，只有一堆“我也不知道怎么说”。",
    verdict: "鉴定：诈骗型氛围感。不是神秘，是没说明书还容易坏。",
    profile:
      "伴侣画像：吸引那种爱研究头像、截图、歌名大小写的人。TA 以为你是谜语人，后来发现你只是正常话也说不明白。",
  },
  oldschool: {
    rank: "E 级",
    title: "土鳖老尼讲道理爱好者：real hip-hop 低能保安",
    score: 8,
    short: "Old School 保安",
    copy:
      "纯二比。\n\n像那种梦里学会英语，现实里凑彩礼凑到信用卡冒烟，婚礼上还非要唱一首 “L-O-V-E” 给自己感动哭的极品老实男。\n\n每天最大乐趣就是给女朋友科普 Wu-Tang。女朋友听张杰，他急得像祖坟被 Auto-Tune 了。人家想听点甜的，他甩过去 ODB。人家说“这个好吵”，他立刻开始讲“你不懂，这才是真 hip-hop”。\n\n不是哥们，没人让你支教。",
    verdict: "鉴定：性张力火化级。你不是老派，你是老土。",
    profile:
      "伴侣画像：适合特别能忍、特别善良、或者听不懂你在说什么的人。TA 一开始以为你踏实，后来发现你不是踏实，你是开不了窍。",
  },
};

const COMBO_COMMENTS = {
  "drake+rage":
    "S+A：主流手法配新地下皮肤。你会撩，也会装疯。对方一开始以为你是夜店玩家，聊两天发现你还会往歌单里塞爆音，属于会营业的土狗，杀伤力确实不低。",
  "drake+abstract":
    "S+B：会撩，但非要带点阴。你前半句像 Drake，后半句突然开始内耗。优点是很会让人上头，缺点是对方刚心动，你就开始讲自己最近状态不对。",
  "drake+griselda":
    "S+C：有手段，也有点端着。你知道怎么推进关系，但又想让人觉得你不是普通玩家。简单说就是一边会来事，一边还要证明自己歌品不是商场背景音乐。",
  "drake+cloud":
    "S+D：会撩加氛围诈骗。你知道怎么把暧昧做得好看，也知道什么时候少回两句装神秘。问题是装太久容易露馅，别人会发现你不是深不可测，只是消息管理很会。",
  "drake+oldschool":
    "S+E：一个很割裂的物种。你明明有操作空间，却总想在关键时刻讲点老派道理。像好不容易把气氛升起来，突然掏出投影仪讲 hip-hop 发展史。",
  "rage+abstract":
    "A+B：精神状态双保险。外面是爆音小登，里面是阴湿男大。你能吸引人，主要靠一种“这人是不是快坏了”的危险感；真处起来，对方大概率要自费修你。",
  "rage+griselda":
    "A+C：新土狗想硬装老懂哥。你一边吃版本红利，一边又想显得自己很有质感。效果就是有时候像派对门口很有型，有时候像刚学会几个厂牌名就开始装。",
  "rage+cloud":
    "A+D：土狗和氛围诈骗合体。你最会骗那种看头像和穿搭脑补八百集的人。不是你多会撩，是对方把你没睡醒、没表达、没规划全翻译成了“有风格”。",
  "rage+oldschool":
    "A+E：一个很抽象的缝合人。嘴上新地下，骨子里又有点爱教育人。你最危险的地方不是吵，是你吵完还想证明自己不是乱听，土狗突然考研，场面很怪。",
  "abstract+griselda":
    "B+C：阴湿加硬装，聊天像冷库里开读书会。你有品，也有情绪，但两样都太重。对方如果不是特别吃这一套，很容易觉得自己不是在暧昧，是被你俩审美联手审判。",
  "abstract+cloud":
    "B+D：内耗配谜语，纯纯高危恋爱体验。你不回消息像神秘，真回了又像自我剖析。适合吸引拯救欲爆棚的人，普通人聊三天就想申请工伤。",
  "abstract+oldschool":
    "B+E：阴湿讲道理型。你不光情绪重，还爱给情绪找理论依据。对方本来想安慰你，结果被你拽进一场关于人生、歌词和时代精神的无偿讲座。",
  "griselda+cloud":
    "C+D：装得很完整。你既要质感，又要神秘；既要小众，又要别人看出来你小众。受众很窄，但命中后很准，专打黑衣服、少说话、朋友圈三天可见的人。",
  "griselda+oldschool":
    "C+E：懂哥浓度超标。你有审美，但太容易变成说教。听歌像验货，约会像鉴宝，对方问你喜欢什么，你能讲到人家手机自动锁屏。",
  "cloud+oldschool":
    "D+E：一个现代包装的老派保安。外表看着挺怪挺潮，开口还是那套“你懂不懂”。最尴尬的是你既没有 Drake 的有效，也没有真地下的松弛，只剩一股硬撑的味。",
};

const CATEGORY_ORDER = ["drake", "rage", "abstract", "griselda", "cloud", "oldschool"];

const QUESTIONS = [
  {
    tag: "ROUND 01",
    text: "刚认识的人问你“你平时听什么歌”，你怎么接？",
    options: [
      { title: "说“我听得比较怪”，然后等对方追问。", weights: { cloud: 3, abstract: 1 } },
      { title: "先说几首大家都认识的，再看对方反应慢慢加码。", weights: { drake: 4 } },
      { title: "从老东西开始讲，最好能顺手纠正一下对方审美。", weights: { oldschool: 4 } },
      { title: "直接甩几个很新的名字，顺便看对方是不是同类。", weights: { rage: 4, cloud: 1 } },
    ],
  },
  {
    tag: "ROUND 02",
    text: "第一次约会前，如果要准备一个路上听的歌单，你会怎么弄？",
    options: [
      { title: "放点采样脏、鼓少、人声冷的，先把质感摆出来。", weights: { griselda: 4 } },
      { title: "选旋律顺、情绪准的，别让对方坐车还要做听力题。", weights: { drake: 4 } },
      { title: "塞几首很闷的，看看对方会不会问你最近怎么了。", weights: { abstract: 4 } },
      { title: "直接上新地下，声音一开就知道你不是普通路人。", weights: { rage: 3, cloud: 2 } },
    ],
  },
  {
    tag: "ROUND 03",
    text: "对方说“最近烦死了”，你第一反应是？",
    options: [
      { title: "开始讲道理：人还是要把问题想明白。", weights: { oldschool: 3, griselda: 1 } },
      { title: "直接约出来，吃点东西，先把人从坏情绪里捞出来。", weights: { drake: 4 } },
      { title: "说晚上有局，别想了，出来晃一下。", weights: { rage: 4 } },
      { title: "顺着聊，说自己最近也挺乱，俩人一起沉下去。", weights: { abstract: 4, cloud: 1 } },
    ],
  },
  {
    tag: "ROUND 04",
    text: "半夜想发首歌给暧昧对象，你会选哪种？",
    options: [
      { title: "很吵、很新、很上头，先把对方耳朵炸醒。", weights: { rage: 4 } },
      { title: "很闷、很低、很丧，发完等对方问你怎么了。", weights: { abstract: 4 } },
      { title: "旋律和情绪都很直接，对方一听就知道你想干嘛。", weights: { drake: 4 } },
      { title: "很经典，经典到你发完忍不住补一句背景知识。", weights: { oldschool: 4, griselda: 1 } },
    ],
  },
  {
    tag: "ROUND 05",
    text: "聊天突然冷场了，你会怎么处理？",
    options: [
      { title: "不救，消息停在那儿，谁急谁输。", weights: { cloud: 3, rage: 1 } },
      { title: "认真解释自己刚才那句话到底是什么意思。", weights: { oldschool: 3, abstract: 1 } },
      { title: "换个轻松话题，先把气氛救活。", weights: { drake: 4 } },
      { title: "发首歌过去，假装这也算继续聊天。", weights: { griselda: 2, abstract: 2, cloud: 1 } },
    ],
  },
  {
    tag: "ROUND 06",
    text: "朋友聚会让你连蓝牙放歌，你会怎么来？",
    options: [
      { title: "放点冷的，音量不用大，主要是让懂的人抬头。", weights: { griselda: 4, cloud: 1 } },
      { title: "直接上新地下，谁皱眉谁今晚没赶上版本。", weights: { rage: 4 } },
      { title: "放经典老歌，然后等谁说不好听你就开讲。", weights: { oldschool: 4 } },
      { title: "先放大家都能进来的，场子热了再夹点自己的。", weights: { drake: 4 } },
    ],
  },
  {
    tag: "ROUND 07",
    text: "暧昧对象发自拍，你最像哪种回复？",
    options: [
      { title: "不太夸外表，反而问对方是不是最近有点累。", weights: { abstract: 4 } },
      { title: "夸得很明确，不写小作文，但对方知道你真看了。", weights: { drake: 4 } },
      { title: "先不回，过一阵子丢一句很短的“可以”。", weights: { cloud: 4 } },
      { title: "夸人之前，先注意到背景里的唱片/海报/衣服。", weights: { griselda: 3, oldschool: 1 } },
    ],
  },
  {
    tag: "ROUND 08",
    text: "别人听完你推荐的歌，说“这啥啊”，你会？",
    options: [
      { title: "回一句“现在就这味儿”，不解释，反正你赶上了。", weights: { rage: 4 } },
      { title: "换一首更好入口的，没必要把人按着上课。", weights: { drake: 4 } },
      { title: "让对方再听两遍，重点不在好听，在味儿。", weights: { griselda: 3, oldschool: 2 } },
      { title: "嘴上说“确实不好入”，心里默默扣对方审美分。", weights: { abstract: 2, cloud: 2 } },
    ],
  },
  {
    tag: "ROUND 09",
    text: "如果只能留一个歌单方向，你最舍不得删哪种？",
    options: [
      { title: "90s 纽约、硬核、boom bap，那些你觉得不能断根的。", weights: { oldschool: 4 } },
      { title: "云里雾里的新东西，歌名怪、封面糊、但氛围很对。", weights: { cloud: 4, rage: 1 } },
      { title: "Drake、Future、PND 这种真能放进生活场景里的。", weights: { drake: 4 } },
      { title: "Earl、MIKE、Navy Blue 这种听完人会安静一会儿的。", weights: { abstract: 4 } },
    ],
  },
  {
    tag: "ROUND 10",
    text: "你最不能忍别人怎么评价你的歌品？",
    options: [
      { title: "“你不是深情，你就是想太多还爱内耗。”", weights: { abstract: 4 } },
      { title: "“你别装了，你就是想显得跟别人不一样。”", weights: { cloud: 3, griselda: 1 } },
      { title: "“你不是懂，你就是爹味重还爱讲课。”", weights: { oldschool: 4 } },
      { title: "“你听的东西太油了，但确实好用。”", weights: { drake: 4 } },
    ],
  },
];

let currentQuestion = 0;
let isAdvancing = false;
const answers = [];

const introScreen = document.querySelector("#introScreen");
const quizScreen = document.querySelector("#quizScreen");
const resultScreen = document.querySelector("#resultScreen");
const startBtn = document.querySelector("#startBtn");
const backBtn = document.querySelector("#backBtn");
const restartBtn = document.querySelector("#restartBtn");
const questionIndex = document.querySelector("#questionIndex");
const progressFill = document.querySelector("#progressFill");
const questionTag = document.querySelector("#questionTag");
const questionText = document.querySelector("#questionText");
const options = document.querySelector("#options");

startBtn.addEventListener("click", startQuiz);
backBtn.addEventListener("click", goBack);
restartBtn.addEventListener("click", restartQuiz);

function startQuiz() {
  introScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  quizScreen.classList.add("screen-enter");
  window.setTimeout(() => quizScreen.classList.remove("screen-enter"), 420);
  currentQuestion = 0;
  answers.length = 0;
  renderQuestion();
}

function renderQuestion() {
  const question = QUESTIONS[currentQuestion];
  const card = document.querySelector(".question-card");
  card.classList.remove("card-enter");
  void card.offsetWidth;
  card.classList.add("card-enter");
  questionIndex.textContent = String(currentQuestion + 1).padStart(2, "0");
  progressFill.style.width = `${((currentQuestion + 1) / QUESTIONS.length) * 100}%`;
  questionTag.textContent = question.tag;
  questionText.textContent = question.text;
  backBtn.style.visibility = currentQuestion === 0 ? "hidden" : "visible";

  options.innerHTML = "";
  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.className = "option";
    button.type = "button";
    if (answers[currentQuestion]?.optionIndex === optionIndex) {
      button.classList.add("selected");
    }
    button.textContent = option.title;
    button.addEventListener("click", () => selectOption(optionIndex));
    options.appendChild(button);
  });
}

function selectOption(optionIndex) {
  if (isAdvancing) return;
  isAdvancing = true;
  const question = QUESTIONS[currentQuestion];
  answers[currentQuestion] = {
    optionIndex,
    ...question.options[optionIndex],
  };

  const selectedButton = options.children[optionIndex];
  selectedButton?.classList.add("selected");

  window.setTimeout(() => {
    if (currentQuestion < QUESTIONS.length - 1) {
      currentQuestion += 1;
      isAdvancing = false;
      renderQuestion();
      return;
    }

    isAdvancing = false;
    showResult();
  }, 180);
}

function goBack() {
  if (currentQuestion === 0) return;
  currentQuestion -= 1;
  renderQuestion();
}

function restartQuiz() {
  resultScreen.classList.add("hidden");
  introScreen.classList.remove("hidden");
}

function showResult() {
  const scores = Object.fromEntries(Object.keys(CATEGORIES).map((key) => [key, 0]));

  answers.forEach((answer) => {
    Object.entries(answer.weights).forEach(([key, value]) => {
      scores[key] += value;
    });
  });

  const sorted = Object.entries(scores).sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    return CATEGORIES[b[0]].score - CATEGORIES[a[0]].score;
  });

  const [winnerKey] = sorted[0];
  const [runnerKey] = sorted[1];
  const result = CATEGORIES[winnerKey];
  const runner = CATEGORIES[runnerKey];
  const comboKey = [winnerKey, runnerKey]
    .sort((a, b) => CATEGORY_ORDER.indexOf(a) - CATEGORY_ORDER.indexOf(b))
    .join("+");

  document.querySelector("#resultRank").textContent = `${result.rank} / ${result.short}`;
  document.querySelector("#resultTitle").textContent = result.title;
  document.querySelector("#resultScore").textContent = result.score;
  document.querySelector("#resultCopy").textContent = result.copy;
  document.querySelector("#resultVerdict").textContent = result.verdict;
  document.querySelector("#profileText").textContent = result.profile;
  document.querySelector("#runnerUp").textContent = `${runner.rank} ${runner.short}`;
  document.querySelector("#comboComment").textContent =
    COMBO_COMMENTS[comboKey] || "混合得比较散，属于歌品人格没完全定型。好消息是还有救，坏消息是现在已经够乱了。";

  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  resultScreen.classList.add("screen-enter");
  window.setTimeout(() => resultScreen.classList.remove("screen-enter"), 420);
  window.scrollTo({ top: 0, behavior: "smooth" });
}
