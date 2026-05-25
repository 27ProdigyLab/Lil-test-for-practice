const TYPE_ORDER = [
  "pb",
  "tumblr",
  "neo",
  "shoegaze",
  "altmetal",
  "sleaze",
  "abstract",
  "experimental",
  "postrock",
  "oldschool",
];

const TYPES = {
  pb: {
    name: "PB R&B / Urban",
    level: 10,
    copy:
      "判了，你是拿歌撬门的惯犯。别人发歌是分享，你发歌是下钩；别人研究专辑封面，你研究几点发歌能把人钓到楼下。你不一定最有品，但你真能谈上。半夜一句“这首适合你”发出去，对方嘴上骂你油，手已经开始回消息。你这种人最恶心的地方是，招数低级但有效，跟夜市烤肠一样，知道不健康但就是有人买。",
    subNote: "副类型说明你还不止会撩，坏水里还加了料。聊天框一打开，空气里都有点不正经。",
    partners: ["neo", "tumblr", "shoegaze"],
    enemies: ["oldschool", "experimental", "postrock"],
    advice:
      "少批发你的荷尔蒙。你这套半夜发歌、撤回消息、装可怜的烂招确实有用，但用多了就像小区门口办卡健身房，嘴上说长期陪伴，实际全是套路。你要真想谈人，就别把每个暧昧对象都当客户维护。开房前少讲流程，接吻前少演深情，多说两句真话。不然你床边热闹，心里冷清，最后只剩一堆聊天记录给你自己复盘。",
  },
  tumblr: {
    name: "Indie Rock / Tumblr 遗老",
    level: 9,
    copy:
      "你是旧账专业户。歌单里全是吉他苦情歌，朋友圈三天可见，半夜发一首歌就等人来问“怎么了”。你以为自己是忘不掉的前任，其实更多时候是酒后翻聊天记录的倒霉演员。最典的是：人还没约出来，你已经在脑子里分手三回了。裤腰带没松，遗憾先上桌；手还没牵，分手感言已经写完。",
    subNote: "副类型说明你演法还挺多，不止一套戏服。别人想暧昧，你先开追悼会。",
    partners: ["pb", "shoegaze", "sleaze"],
    enemies: ["oldschool", "postrock", "abstract"],
    advice:
      "别再搞前任售后了。你关系还没开始，就先把遗憾、旧歌、半夜emo全摆出来，跟在烧烤摊支了个情感灵堂似的。这样确实能骗到几个爱吃苦的人，但也很容易把接吻前的气氛整成分手后复盘。少发苦歌，多说人话；少装没放下，多承认你就是想被哄、想上头、想有人半夜回你。你不是不能谈，你是戏太多，床边都被你演成法事现场。",
  },
  neo: {
    name: "Neo Soul / Jazz Adjacent",
    level: 9,
    copy:
      "你是少数能正常办事的人。别人忙着装怪、装冷、装听得懂，你已经把吃饭、喝酒、散步、要不要上楼安排明白。你不靠邪门歌单吓人，也不靠老专辑装爹，你靠正常说话赢。最离谱的是，正常在这帮人里居然成了稀缺资源。你不是最骚的，但你最不容易在临门一脚前把人聊跑。",
    subNote: "副类型说明你稳里还有点偏门味，但至少不会在床边突然开课，谢天谢地。",
    partners: ["pb", "tumblr", "abstract"],
    enemies: ["altmetal", "oldschool", "experimental"],
    advice:
      "你别稳成死人。你已经比那帮拿歌单装身份证的人强太多了，没必要再端着。该约就约，该夸就夸，该靠近就靠近。成熟不是把暧昧聊成物业通知，也不是把欲望按进保温杯里。成年人谈喜欢，礼貌只能打底，真正有用的是让对方知道你想见、想亲、想把歌单放到床边继续听。稳可以，别稳到对方怀疑自己在跟客服聊天。",
  },
  shoegaze: {
    name: "Shoegaze / Dream Pop",
    level: 8,
    copy:
      "你是糊图诈骗犯。人声要远，封面要糊，朋友圈要少字，主打一个“不说清楚让别人自己脑补”。这套确实能骗到人，尤其骗到那种爱给别人加戏的。问题是你一说多就露馅，灯一开就尴尬。你不是多有魅力，你是会把自己藏起来。真到床边还装没听懂，对方只想开灯验货，看你到底是有张力还是纯不会说话。",
    subNote: "副类型说明你包装下面还有别的毛病。拆开以后不一定惊喜，也可能是漏汤外卖。",
    partners: ["tumblr", "pb", "abstract", "altmetal"],
    enemies: ["oldschool", "experimental"],
    advice:
      "你少说两句就是积德。你这套靠糊图、轻歌、短句还能撑一会儿，一旦开始解释，立刻从暧昧对象变成产品说明书。半夜能发歌就别发小作文，能靠近就别绕三条街。最怕对方裤腰带都等松了，你还在装“我只是分享一首歌”。别装了，成年人谁不懂。真想要就往前一步，别把暧昧拖成猜谜晚会。",
  },
  altmetal: {
    name: "Alt Metal / Deftones 系",
    level: 8,
    copy:
      "你是重口硬菜。别人约会放歌想顺一点，你放歌恨不得把杯子震下桌。吃你这口的人会很上头，不吃你这口的人只想报警说这里有人情绪超载。你不是不好，你是太冲。亲热可以有劲，聊天别一上来就压人。人家是来暧昧，不是来参加低频抗压训练。你这类最怕半夜上头，发歌、发疯、发完还觉得自己挺性感。",
    subNote: "副类型说明你不只是口重，还容易把那股冲劲带进聊天框。带感是真带感，吓人也是真吓人。",
    partners: ["shoegaze", "tumblr", "postrock"],
    enemies: ["pb", "neo", "oldschool"],
    advice:
      "你别把每次暧昧都搞成拆迁现场。歌重可以，人别句句都冲。不是所有人第一次见面就想被你压得喘不过气，大家出来是约会，不是来签生死状。床边可以猛一点，聊天先像个人一点。能把音量开大的人很多，能把人哄近的人更少。别总一副要狠狠干一架的样子，对方还没上头，先被你吓醒了。",
  },
  sleaze: {
    name: "Indie Sleaze / Post Punk",
    level: 8,
    copy:
      "你是臭架子批发户。歌单要硬，脸要臭，话要少，最好别人一靠近就感觉自己不配。穿好了确实能唬人，穿不好就是低配酒吧门口卖电子烟的，还嫌路人土。你不是没性张力，是太容易把性张力活成欠抽。最要命的是，床边还没到，你已经把对方从歌品、穿搭、朋友圈点评一遍，兴趣直接死在半路。",
    subNote: "副类型说明你不只爱摆谱，还能换角度摆。摆到最后，对方只想穿衣服走人。",
    partners: ["tumblr", "neo", "shoegaze"],
    enemies: ["abstract", "postrock", "oldschool"],
    advice:
      "你可以挑，但别挑到全世界都欠你钱。最怕的不是你嘴欠，是你歌单和穿搭一旦没撑住，那股拽劲就变成廉价装逼。你要真想让人上头，就把要求留给自己，把基本礼貌留给别人。别床都没上先开始审核别人，别亲都没亲先给人打分。你以为自己在筛人，其实别人早把你扔进“难搞还不一定好用”的垃圾桶了。",
  },
  abstract: {
    name: "Abstract Rap",
    level: 7,
    copy:
      "你是自我剖白批发商。歌里鼓点少、字多、人还丧，你听完就开始觉得自己很复杂。别人问你在干嘛，你回一篇小作文；别人约你吃饭，你先讲自己不适合亲密关系。说白了，你不是深，你是事多。别人都准备接吻了，你开始解释创伤来源；裤腰带还没碰，你先把人聊萎。你这种人最大本事，就是把欲望聊成病例。",
    subNote: "副类型说明你不只是想太多，还爱现场朗读。成人关系里，这叫人工败火。",
    partners: ["shoegaze", "neo", "postrock"],
    enemies: ["pb", "tumblr", "oldschool"],
    advice:
      "先学会回一句短的。人家问你吃了没，不是在请你交个人说明书；人家说想见你，也不是让你开创伤发布会。成人暧昧有时候就很简单：想见就约，想亲就靠近，想上头就别先写八百字免责声明。你最该戒的不是某种歌，是那股把简单事情讲到所有人性冷淡的劲。少剖，少绕，少把床边气氛变成心理咨询候诊室。",
  },
  experimental: {
    name: "Experimental Electronic",
    level: 6,
    copy:
      "你是设备故障爱好者。别人听歌图个爽，你听歌图个“谁能坚持到第二分钟”。你以为这是门槛，别人只想拔耳机。你最烦的地方不是爱怪，是爱拿怪考人。约会放这套，服务员都想来问音响是不是坏了。开房前还放这套，对方沉默不一定是害羞，很可能是在想怎么找借口回家洗耳朵。",
    subNote: "副类型说明你不只是爱怪，还爱拿怪压人。亲热前还要别人做听力题，确实欠骂。",
    partners: ["abstract", "postrock", "shoegaze"],
    enemies: ["pb", "oldschool", "neo"],
    advice:
      "别老拿怪当身份证。你当然可以听怪歌，但别把每次分享都弄成设备调试会。难听懂不等于值钱，很多时候只等于烦。真喜欢谁，就少摆门槛，少让人陪你做听力训练。暧昧对象不是来考级的，床边也不是试听间。你再让别人“仔细听这段”，对方脑子里只会出现四个字：赶紧撤退。",
  },
  postrock: {
    name: "Post Rock / Instrumental",
    level: 4,
    copy:
      "你是慢热拖堂王。别人听歌三分钟要爽点，你还在等鼓进；别人暧昧三句话要回应，你还在组织前奏。对方都暗示可以上楼了，你还问要不要再散会儿步。你不是稳，你是把欲望拖到过期。最恐怖的是你还觉得自己很有耐心，实际上对方已经从想亲你变成想打车。",
    subNote: "副类型说明你还有别的味，但最大毛病还是慢。慢到对方裤子都懒得脱。",
    partners: ["abstract", "shoegaze", "altmetal"],
    enemies: ["pb", "tumblr", "oldschool"],
    advice:
      "快一点。很多关系就是被你这种人拖死的：你以为再等等更稳，别人只觉得你根本没那个意思。慢热不是罪，慢到对方欲望退潮就是病。喜欢就说，想见就约，能牵手就别装没看见。现实不是器乐长曲，没人有空陪你等鼓进来，更没人愿意在床边陪你做半小时心理热身。",
  },
  oldschool: {
    name: "Old School / Boom Bap",
    level: 2,
    copy:
      "你是老派讲台成精。听两张老专就开始给全世界上课，对象想听点甜的，你甩过去老派金曲；人家说听不进去，你立刻摆出“你不懂”的嘴脸。不是哥们，没人请你来当说唱片警。约会刚有点热，你开始讲押韵；人家想亲，你讲采样；裤腰带还没松，你先把性张力讲进火葬场。",
    subNote: "你不光爱讲课，还夹着别的毛病。低张力不是意外，是你亲手讲没的。",
    partners: ["neo", "sleaze", "abstract"],
    enemies: ["pb", "shoegaze", "experimental"],
    advice:
      "少讲两句，真能救命。不是每段关系都需要你普及老专辑，也不是每个听流行歌的人都等你来拯救。你最该改的不是歌单，是那张停不下来的嘴。人家出来是谈恋爱，不是报你的夜校。都到能接吻的距离了，你还在讲黄金年代，谁受得了。想有床边故事，先学会闭嘴十分钟；想继续开课，就准备一个人回家给枕头讲采样。",
  },
};

const RELATION_COPY = {
  pb: {
    neo: "你负责半夜发歌下钩，对方负责把你从拼多多男香味里拽回来。你俩最妙的地方是：一个会骚，一个不蠢，床边聊天不至于变成低配渣男培训班。",
    tumblr: "你会卡点发歌，对方会把一个“在吗”演成旧情复燃。你俩聊三天能聊出县城酒吧包厢味，土是土，但真有点上头。",
    shoegaze: "你负责递话，对方负责装没看见。一个主动拱火，一个被动钓鱼，互相勾着不说死，特别适合半夜把手机聊烫。",
    oldschool: "你刚把气氛弄热，对方开始讲老专辑。你想拉手，他想讲出处；你想亲，他想纠错。建议别硬聊，容易阳气尽失。",
    experimental: "你要立刻见效，对方要先听三遍。你都把路铺到床边了，他还在研究怪声，性张力直接被拧成静音。",
    postrock: "你一句能把人勾过来，对方五分钟还在热身。你准备进下一步了，他还在找感觉，急得人想把手机摔桌上。",
  },
  tumblr: {
    pb: "你负责吊胃口，对方负责收网。你俩最适合深夜互相拉扯，明知道烂俗，还是能把手机聊到发烫。",
    shoegaze: "你爱发分手歌，对方爱发糊图。一个留半句，一个拍不清，真到床边谁也不先开口，尴尬得很有观赏性。",
    sleaze: "你爱演，他爱摆。一个喝多了翻旧账，一个没洗头还嫌别人土，凌晨两点烂酒吧门口就缺你俩这对活招牌。",
    oldschool: "你刚想升温，对方已经开口讲经典。你想亲，他想当老师，晦气到接吻念头当场撤退。",
    postrock: "你都演完一轮分分合合了，对方还在铺前奏。你急，他慢，最后你一个人在那儿白白上头。",
    abstract: "你会装难受，对方是真难受。你俩凑一起，成人暧昧直接变互相倒垃圾，谁靠近谁倒霉。",
  },
  neo: {
    pb: "你负责稳住场面，对方负责把窗户纸捅破。一个会办事，一个不瞎作，算是少见的能过日子的组合。",
    tumblr: "你正常，对方爱演。你能把他从旧账戏里拽出来，前提是你别被那点半真半假的伤感给唬住。",
    abstract: "你能接住对方绕来绕去的话，但别真把自己活成免费咨询台。谈恋爱不是社区值班，床边也不是问诊室。",
    altmetal: "你想好好吃顿饭，对方想把桌子震散。你要顺，他要狠狠干一把，聊不到一块，也睡不到一块。",
    oldschool: "你在过生活，对方在讲课。你问喝什么，他能讲到老专辑，听一会儿就想装肚子疼跑路。",
    experimental: "你说人话，对方说机器话。你问今晚去哪，他扯怪声多妙，床边欲望直接清零。",
  },
  shoegaze: {
    tumblr: "你爱把图拍糊，对方爱把旧账翻出来。两个人最适合一边发暗图一边说没事，实际一个比一个有事。",
    pb: "你负责不把话说死，对方负责把局往前推。你在那儿装没看见，他已经替你把门缝撬开了。",
    abstract: "你不说明白，对方也不说明白。一个爱藏，一个爱拧，特别容易把普通暧昧聊成谁都不高兴的误会现场。",
    altmetal: "你爱轻声轻气，他爱狠狠干过来。一个负责含糊，一个负责下重手，怪是怪，但有人就吃。",
    oldschool: "你刚把图和歌摆好，对方一句“这有什么可听的”全给你干碎。你想暧昧，他想纠错，没法玩。",
    experimental: "你爱糊，他爱怪。发朋友圈也许能唬人，真聊起来全是故障感，床边都能聊成维修现场。",
  },
  altmetal: {
    shoegaze: "你一拳抡过去，对方糊着接住。一个重得吓人，一个虚得要命，听着邪门，偏偏有人吃得死死的。",
    tumblr: "你负责把火点大，对方负责把旧账翻烂。适合半夜发疯，不适合过日子，过日子这三个字你俩都嫌脏。",
    postrock: "你一上来就狠狠干，对方还在慢慢攒劲。一个直接掀桌，一个先摆杯子，偶尔能对上，多数时候闹笑话。",
    pb: "你要的是狠狠干一把，对方要的是高效拿下。你还在摆气势，他已经开始办事，别扭到床边都能开始算转化率。",
    neo: "你劲太大，对方太稳。对方不是不懂你，是不想每次见面都先做情绪抗压测试。",
    oldschool: "你靠重，对方靠嘴。一个想靠声音压人，一个想靠老资格压人，两个都硬，硬得床边一点活气没有。",
  },
  sleaze: {
    tumblr: "你爱摆脸，他爱翻旧账。一个不爱好好说话，一个不爱好好结束，特别适合互相折腾到半夜三点。",
    neo: "你负责把自己弄得很难接近，对方负责把你拽回正常人范围。要没这类人在旁边，你很容易活成笑话。",
    shoegaze: "你负责穿搭别掉链子，对方负责把图拍好。照片当然能发，真见面就看谁先露怯。",
    abstract: "你嫌对方拧，对方嫌你装。饭还没吃完，双方已经在心里给彼此打差评，别说上床，连续摊都费劲。",
    postrock: "你姿势都摆完了，对方还在慢慢启动。你嫌他磨蹭，他嫌你事多，最后基本都收场得很难看。",
    oldschool: "你爱挑人，对方爱教人。你想拿架子，他想当老师，烦得特别直白，坐对面十分钟都嫌长。",
  },
  abstract: {
    shoegaze: "你爱绕，对方爱藏。你一句话能憋十分钟，对方一张图能糊成马赛克，特别适合互相误会到天亮。",
    neo: "你负责把简单事说复杂，对方负责不翻脸。能接住你的人不多，别把人家当值夜班保安使。",
    postrock: "你慢，对方更慢。别人一句晚安发完睡了，你俩能磨到第二天中午，纯纯欲望粉碎机。",
    pb: "你还在讲自己为啥不适合亲密关系，对方已经把下一顿饭约好了。你写说明书，他直接办事，完全不是一路人。",
    tumblr: "你真会内耗，对方假装内耗。一个真没电，一个故意只剩一格电，互相看着都嫌晦气。",
    oldschool: "你要讲心事，对方要讲道理。一个钻牛角尖，一个开培训班，空气都想离席。",
  },
  experimental: {
    abstract: "你爱怪，对方爱绕。正常人根本插不上嘴，你俩倒是能互相点头，两台坏机器终于连上同一个插线板。",
    postrock: "你反应怪，对方反应慢。别人一顿饭能聊完的事，你俩能拖到服务员开始怀疑你们是不是刚分手。",
    shoegaze: "你爱把歌弄怪，对方爱把图弄糊。乍一看能唬人，真聊起来全是接触不良，听着就来火。",
    pb: "人家要马上有反应，你非要先做听力训练。对方都快把话挑明了，你还在那儿说再听一遍，活该冷场。",
    oldschool: "一个嫌别人老，一个嫌别人吵。你说他土，他说你瞎响，这种组合最适合互删，省心。",
    neo: "你老想证明自己很特别，对方只想把饭吃明白。你在那儿摆门槛，人家已经想换桌，床边更别想。",
  },
  postrock: {
    abstract: "你慢，对方也慢。一个爱憋着，一个爱绕着，一句“睡了吗”都能聊成三集，成年人看了都上火。",
    shoegaze: "你爱铺垫，对方爱把东西弄糊。拍照是好看，聊天是要命，属于看图挺行、见面想跑那一挂。",
    altmetal: "你还在攒那一下劲，对方已经狠狠干上来了。一个还在摆盘，一个直接把锅端桌上，乱得挺好笑。",
    pb: "对方都把气氛推到门口了，你还在热身。你不是慢热，你是加载条卡住，卡得人想拍屏幕。",
    tumblr: "对方想赶紧有来有回，你非要慢慢铺。人家都准备开演了，你还在搭景，谁不烦。",
    oldschool: "你慢就算了，对方还爱讲课。一个拖，一个烦，约会桌上能同时凑齐困和烦，性张力现场断电。",
  },
  oldschool: {
    neo: "对方能忍你几句，前提是你别把每次吃饭都搞成课堂。人家是成熟，不是花钱来补说唱史。",
    sleaze: "对方一脸“你随便讲”，实际压根没往心里听。你以为自己占了上风，真相是人家懒得搭理你。",
    abstract: "你讲老专，对方讲心事，两个都不怎么好伺候。一个爱上课，一个爱长叹气，两个科室拼桌会诊。",
    pb: "对方想暧昧，你想纠错。你发老专辑，他已读不回；你觉得他肤浅，他觉得你有病，特别公平。",
    shoegaze: "对方辛辛苦苦把图修糊、把歌挑糊，你一开口全给人家打回证件照。你不是冤家，你是床边冷水。",
    experimental: "你嫌他瞎响，他嫌你老土。谁也看不上谁，还都觉得自己在替天行道，属于双倍招笑。",
  },
};

const QUESTIONS = [
  {
    tag: "01 / 15",
    text: "你发歌给别人，最真实的目的是什么？",
    options: [
      { title: "让对面知道：这条不是群发，我就是发给你的。", scores: { pb: 3, tumblr: 1 } },
      { title: "让人知道我听歌不土，顺便立个人设。", scores: { experimental: 2, sleaze: 1, shoegaze: 1 } },
      { title: "顺手考一下对面够不够懂。", scores: { oldschool: 2, abstract: 1, postrock: 1 } },
      { title: "单纯觉得好听，分享一下，不想搞戏。", scores: { neo: 3, pb: 1 } },
      { title: "看看对方扛不扛得住重口。", scores: { altmetal: 3, experimental: 1 } },
    ],
  },
  {
    tag: "02 / 15",
    text: "如果约会路上只能放一种歌，你会放哪种？",
    options: [
      { title: "顺耳、好接话，不耽误聊天。", scores: { pb: 2, neo: 2 } },
      { title: "吉他苦情歌，适合想旧账。", scores: { tumblr: 3, sleaze: 1 } },
      { title: "人声远远的，字听不清，适合看窗外。", scores: { shoegaze: 3, postrock: 1 } },
      { title: "低频大、鼓重，车门都想震松。", scores: { altmetal: 3, experimental: 1 } },
      { title: "老歌，最好还能顺嘴讲两句来头。", scores: { oldschool: 3, neo: 1 } },
    ],
  },
  {
    tag: "03 / 15",
    text: "别人点开你的歌单，最容易看到什么共同点？",
    options: [
      { title: "很多歌旋律清楚，人声靠前，适合发给别人。", scores: { pb: 4, neo: 1 } },
      { title: "很多歌有吉他，歌词绕不开恋爱和旧事。", scores: { tumblr: 4, sleaze: 1 } },
      { title: "很多歌节奏舒服，乐器和人声都不抢。", scores: { neo: 4, pb: 1 } },
      { title: "很多歌人声很远，吉他铺得很满。", scores: { shoegaze: 4, postrock: 1 } },
      { title: "很多歌鼓点硬，歌词密，年份也偏老。", scores: { oldschool: 4, abstract: 1 } },
    ],
  },
  {
    tag: "04 / 15",
    text: "你觉得最顶的声音是哪种？",
    options: [
      { title: "声音会哄人，适合暧昧。", scores: { pb: 3, neo: 1 } },
      { title: "吉他和鼓要有憋着不说的劲。", scores: { tumblr: 3, sleaze: 1 } },
      { title: "人声糊、词听不清，但就是想开大。", scores: { shoegaze: 3, postrock: 1 } },
      { title: "低频狠狠干过来，耳朵先麻了。", scores: { altmetal: 3, experimental: 1 } },
      { title: "前面慢，后面一下顶上来。", scores: { postrock: 3, abstract: 1 } },
    ],
  },
  {
    tag: "05 / 15",
    text: "你听歌最看重什么？",
    options: [
      { title: "能不能在聊天和约会里派上用场。", scores: { pb: 3, tumblr: 1 } },
      { title: "顺不顺，别搞得太端着。", scores: { neo: 3, pb: 1 } },
      { title: "要够怪，不想一耳朵就被猜中。", scores: { experimental: 3, sleaze: 1 } },
      { title: "要有后劲，前面慢点没事。", scores: { postrock: 3, abstract: 1 } },
      { title: "得经得起反复放，别听两次就塌。", scores: { oldschool: 3, altmetal: 1 } },
    ],
  },
  {
    tag: "06 / 15",
    text: "晚上一个人听歌，你最需要它满足什么？",
    options: [
      { title: "人声要顺，听完还想继续聊天。", scores: { pb: 4, neo: 2 } },
      { title: "吉他要明显，歌词要有旧关系的味。", scores: { tumblr: 4, sleaze: 2 } },
      { title: "人声不用清楚，声音铺开就行。", scores: { shoegaze: 4, postrock: 1 } },
      { title: "低频要重，音量要大，听完得有劲。", scores: { altmetal: 4, experimental: 1 } },
      { title: "歌词要密，鼓点要能反复抠。", scores: { abstract: 3, oldschool: 3 } },
    ],
  },
  {
    tag: "07 / 15",
    text: "你发听歌截图，通常是哪种操作？",
    options: [
      { title: "发一首大家都认识、但意思很明显的。", scores: { pb: 3, tumblr: 1 } },
      { title: "封面糊、字小、啥也不解释。", scores: { shoegaze: 2, experimental: 2 } },
      { title: "老封面原图，再补一句“现在没人这么做歌了”。", scores: { oldschool: 3, sleaze: 1 } },
      { title: "发一首十分钟的，没人点赞也无所谓。", scores: { postrock: 3, abstract: 1 } },
      { title: "自拍放前面，歌放后面，主要给人看状态。", scores: { sleaze: 2, pb: 1, tumblr: 1 } },
    ],
  },
  {
    tag: "08 / 15",
    text: "如果有人让你选一张专辑从头听到尾，你更愿意选哪种？",
    options: [
      { title: "旋律清楚、制作干净、能一直听下去的。", scores: { pb: 3, neo: 3 } },
      { title: "吉他为主，歌词有恋爱和旧事的。", scores: { tumblr: 4, shoegaze: 1 } },
      { title: "低频重、吉他重、情绪很满的。", scores: { altmetal: 4, sleaze: 1 } },
      { title: "编曲怪、声音怪、第一遍不好入口的。", scores: { experimental: 4, abstract: 1 } },
      { title: "老派鼓点、歌词密、能听出技术的。", scores: { oldschool: 4, abstract: 1 } },
    ],
  },
  {
    tag: "09 / 15",
    text: "两个人共用一个音箱，你最受不了对方怎么放？",
    options: [
      { title: "全放甜歌和热歌，目的性太强。", scores: { abstract: 2, experimental: 2, postrock: 1 } },
      { title: "全放吉他苦歌，越听越丧。", scores: { neo: 2, oldschool: 2, experimental: 1 } },
      { title: "全放人声很糊的歌，听半天听不清。", scores: { pb: 2, oldschool: 2, neo: 1 } },
      { title: "全放老歌，还要边放边讲。", scores: { tumblr: 2, shoegaze: 2, sleaze: 1 } },
      { title: "全放怪声和重低音，耳朵很累。", scores: { pb: 2, neo: 2, tumblr: 1 } },
    ],
  },
  {
    tag: "10 / 15",
    text: "你听到一首歌，哪种情况最容易直接切掉？",
    options: [
      { title: "旋律太甜、太会撩，听着目的太明显。", scores: { abstract: 2, experimental: 2, postrock: 1 } },
      { title: "吉他太苦，歌词全是旧恋爱。", scores: { neo: 2, oldschool: 2, experimental: 1 } },
      { title: "人声太糊，听半天听不清唱什么。", scores: { pb: 2, oldschool: 2, neo: 1 } },
      { title: "鼓点太老，开口就有上课味。", scores: { tumblr: 2, shoegaze: 2, sleaze: 1 } },
      { title: "声音太怪，第一分钟就听不下去。", scores: { pb: 2, neo: 2, tumblr: 1 } },
    ],
  },
  {
    tag: "11 / 15",
    text: "如果只能留一类歌，你留哪类？",
    options: [
      { title: "旋律顺、人声清楚，什么时候放都不尴尬。", scores: { pb: 3, neo: 1 } },
      { title: "吉他多，歌词总在讲旧关系。", scores: { tumblr: 3, sleaze: 1 } },
      { title: "人声很糊，吉他和合成器铺得很满。", scores: { shoegaze: 3, abstract: 1 } },
      { title: "声音怪，结构也怪，第一遍不一定好听。", scores: { experimental: 3, altmetal: 1 } },
      { title: "鼓点硬、歌词密，听完容易想跟人争。", scores: { oldschool: 3, postrock: 1 } },
    ],
  },
  {
    tag: "12 / 15",
    text: "你最受不了哪种歌单？",
    options: [
      { title: "全是太会撩的歌，群发感很重。", scores: { abstract: 2, postrock: 1, experimental: 1 } },
      { title: "全是怪响，听着很难受。", scores: { pb: 2, neo: 2 } },
      { title: "全是老专辑，歌没放完人先开始训话。", scores: { tumblr: 2, shoegaze: 1, sleaze: 1 } },
      { title: "全是慢歌，五分钟过去还没开张。", scores: { altmetal: 2, pb: 1, oldschool: 1 } },
      { title: "全是吉他苦情歌，分手味太冲。", scores: { neo: 1, experimental: 1, oldschool: 1 } },
    ],
  },
  {
    tag: "13 / 15",
    text: "朋友聚会让你放歌，你最可能怎么放？",
    options: [
      { title: "先放旋律清楚的，别让场子冷掉。", scores: { neo: 3, pb: 1 } },
      { title: "放大家听过的流行歌，但别太口水。", scores: { pb: 2, tumblr: 2 } },
      { title: "放自己喜欢的冷门歌，看谁会问歌名。", scores: { sleaze: 2, experimental: 2 } },
      { title: "放长歌，不太管别人会不会想切。", scores: { postrock: 3, abstract: 1 } },
      { title: "放经典老歌，别人说难听你就想反驳。", scores: { oldschool: 3, altmetal: 1 } },
    ],
  },
  {
    tag: "14 / 15",
    text: "什么情况会让你立刻收藏一首新歌？",
    options: [
      { title: "第一遍就顺，马上能想到发给谁。", scores: { pb: 3, tumblr: 1 } },
      { title: "歌词全在翻旧账，越听越想看聊天记录。", scores: { tumblr: 3, abstract: 1 } },
      { title: "歌不闹腾，唱得稳，放哪都不出丑。", scores: { neo: 3, oldschool: 1 } },
      { title: "一开始有点怪，第二遍突然上头。", scores: { experimental: 3, shoegaze: 1 } },
      { title: "鼓一进来就想把音量拧大。", scores: { altmetal: 3, postrock: 1 } },
    ],
  },
  {
    tag: "15 / 15",
    text: "最后一题：你最怕别人怎么评价你的歌品？",
    options: [
      { title: "太会撩了，专门拿歌钓人。", scores: { pb: 3, tumblr: 1 } },
      { title: "太爱演了，没分手也要装分手。", scores: { tumblr: 2, shoegaze: 2 } },
      { title: "太平了，完全没有暧昧味。", scores: { neo: 3, postrock: 1 } },
      { title: "太怪了，故意不让人听懂。", scores: { experimental: 2, abstract: 1, shoegaze: 1 } },
      { title: "太爱教育人了，随时准备开课。", scores: { oldschool: 3, sleaze: 1 } },
    ],
  },
];

let currentQuestion = 0;
let isAdvancing = false;
const answers = [];
let activeQuestions = [];

const introScreen = document.querySelector("#introScreen");
const quizScreen = document.querySelector("#quizScreen");
const resultScreen = document.querySelector("#resultScreen");
const resultCard = document.querySelector(".result-card");
const startBtn = document.querySelector("#startBtn");
const backBtn = document.querySelector("#backBtn");
const restartBtn = document.querySelector("#restartBtn");
const questionIndex = document.querySelector("#questionIndex");
const questionTotal = document.querySelector("#questionTotal");
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
  isAdvancing = false;
  activeQuestions = QUESTIONS.map((question) => ({
    ...question,
    options: shuffleOptions(question.options),
  }));
  renderQuestion();
}

function renderQuestion() {
  const question = activeQuestions[currentQuestion];
  const card = document.querySelector(".question-card");
  card.classList.remove("card-enter");
  void card.offsetWidth;
  card.classList.add("card-enter");

  questionIndex.textContent = String(currentQuestion + 1).padStart(2, "0");
  questionTotal.textContent = activeQuestions.length;
  progressFill.style.width = `${((currentQuestion + 1) / activeQuestions.length) * 100}%`;
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

  const question = activeQuestions[currentQuestion];
  answers[currentQuestion] = {
    optionIndex,
    ...question.options[optionIndex],
  };

  const selectedButton = options.children[optionIndex];
  selectedButton?.classList.add("selected");

  window.setTimeout(() => {
    if (currentQuestion < activeQuestions.length - 1) {
      currentQuestion += 1;
      isAdvancing = false;
      renderQuestion();
      return;
    }

    isAdvancing = false;
    showResult();
  }, 160);
}

function goBack() {
  if (currentQuestion === 0 || isAdvancing) return;
  currentQuestion -= 1;
  renderQuestion();
}

function restartQuiz() {
  resultScreen.classList.add("hidden");
  introScreen.classList.remove("hidden");
  resultScreen.removeAttribute("data-type");
  resultCard?.removeAttribute("data-type");
}

function showResult() {
  const scores = Object.fromEntries(TYPE_ORDER.map((key) => [key, 0]));
  const maxScores = getMaxScores();

  answers.forEach((answer) => {
    Object.entries(answer.scores).forEach(([key, value]) => {
      scores[key] += value;
    });
  });

  const normalizedScores = Object.fromEntries(
    TYPE_ORDER.map((key) => [key, maxScores[key] ? scores[key] / maxScores[key] : 0]),
  );

  const sorted = Object.entries(normalizedScores).sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    return TYPE_ORDER.indexOf(a[0]) - TYPE_ORDER.indexOf(b[0]);
  });

  const [mainKey] = sorted[0];
  const [subKey] = sorted[1];
  const main = TYPES[mainKey];
  const sub = TYPES[subKey];
  const bestPartnerKey = pickRelatedType(main.partners, normalizedScores);
  const enemyKey = pickRelatedType(main.enemies, normalizedScores);
  const bestPartner = TYPES[bestPartnerKey];
  const enemy = TYPES[enemyKey];

  document.querySelector("#mainType").textContent = main.name;
  document.querySelector("#subType").textContent = sub.name;
  document.querySelector("#mainCopy").textContent = main.copy;
  document.querySelector("#subCopy").textContent = sub.subNote;
  document.querySelector("#tensionLevel").textContent = `Lv.${main.level} / 10`;
  document.querySelector("#bestPartner").textContent = bestPartner.name;
  document.querySelector("#partnerCopy").textContent = RELATION_COPY[mainKey][bestPartnerKey];
  document.querySelector("#enemyType").textContent = enemy.name;
  document.querySelector("#enemyCopy").textContent = RELATION_COPY[mainKey][enemyKey];
  document.querySelector("#adviceCopy").textContent = main.advice;

  resultScreen.dataset.type = mainKey;
  resultCard?.setAttribute("data-type", mainKey);

  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  resultScreen.classList.add("screen-enter");
  window.setTimeout(() => resultScreen.classList.remove("screen-enter"), 420);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function pickRelatedType(candidates, scores) {
  return candidates
    .slice()
    .sort((a, b) => {
      if (scores[b] !== scores[a]) return scores[b] - scores[a];
      return TYPE_ORDER.indexOf(a) - TYPE_ORDER.indexOf(b);
    })[0];
}

function getMaxScores() {
  const maxScores = Object.fromEntries(TYPE_ORDER.map((key) => [key, 0]));

  QUESTIONS.forEach((question) => {
    TYPE_ORDER.forEach((key) => {
      const bestOptionScore = Math.max(
        ...question.options.map((option) => option.scores[key] || 0),
      );
      maxScores[key] += bestOptionScore;
    });
  });

  return maxScores;
}

function shuffleOptions(optionList) {
  const shuffled = optionList.slice();
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
