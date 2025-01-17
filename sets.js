/**
* Created with JetBrains PhpStorm.
* User: Денис
* Date: 27.09.13
* Time: 18:39
* To change this template use File | Settings | File Templates.
*/
//pronoun singular plural masculine feminine

var
    pronoun = {
        I: {
            self: 'I', person: 1,
            number: 1, obj:'me', poss:'my', abs:'mine'
        },
        you: {
            self: 'you', person: 2,
            number: 1, obj:'you', poss:'your', abs:'yours'
        },
        he: {
            self: 'he', person: 3,
            number: 1,
            gender: 'm', obj:'him', poss:'his', abs:'his',
            genderDesc: 'masculine'
        },
        she: {
            self: 'she', person: 3,
            number: 1,
            gender: 'f', obj:'her', poss:'her', abs:'hers',
            genderDesc: 'feminine'
        },
        it: {
            self: 'it', person: 3,
            number: 1,
            gender: 'n', obj:'it', poss:'its', abs:'its',
            genderDesc: 'neuter'
        },
        we: {
            self: 'we', person: 1,
            number: 2, obj:'us', poss:'our', abs:'ours'
        },
        you: {
            self: 'you', person: 2,
            number: 2, obj:'you', poss:'your', abs:'yours'
        },
        they: {
            self: 'they', person: 3,
            number: 2, obj:'them', poss:'their', abs:'theirs'
        }

    },

    // https://english.tulagorod.ru/vocabulary/nouns
    nouns = ["answer","comment","context","conversation","description","dialogue","discussion","dispute","emphasis","explanation","expression","letter","message","news","note","phrase","question","response","rumour","sentence","speech","statement","talk","text","theme","title","tone","topic","word","advice","assumption","attention","awareness","choice","comparison","conclusion","confidence","consideration","controversy","criterion","critic","criticism","curiosity","decision","distinction","doubt","enquiry","fact","factor","fantasy","idea","imagination","impression","information","insight","intelligence","intention","interest","interpretation","issue","lie","matter","meaning","memory","mind","mistake","notion","opinion","perception","perspective","planning","point","problem","psychology","query","reason","recognition","reflection","sense","solution","talent","thinking","thought","will","wisdom","anger","anxiety","approach","attitude","burden","category","chance","courage","definition","depression","dream","drive","emotion","estimate","exception","expectation","experience","fault","fear","feature","feeling","goal","good","grace","habit","hope","illusion","importance","initiative","joy","kind","list","look","luck","mercy","miracle","misery","mood","option","passion","patience","pity","pleasure","potential","pride","reaction","risk","rule","satisfaction","shame","sight","significance","spite","stress","surprise","terror","touch","truth","type","version","virtue","vision","abuse","addiction","affair","appeal","approval","argument","argument","behavior","betrayal","concern","conference","congratulation","contest","couple","date","debate","farewell","fellow","friend","friendship","honor","influence","interaction","introduction","involvement","joke","negotiation","neighbor","present","promise","quarrel","regret","relation","relationship","respect","secret","smile","stranger","suggestion","thanks","tip","trick","visit","warning","absence","alternative","belongings","example","exchange","existence","instance","loss","need","possession","presence","search","time","base","basis","beginning","bit of something","cause","chip","consequence","contents","detail","effect","end","insert","item","leftover","middle","outcome","part","piece","priority","queue","rest","result","session","set","shiver","stage","string","turn","whole","afternoon","April","August","autumn","century","date","day","decade","December","era","evening","fall","February","Friday","future","hour","January","July","June","March","May","minute","moment","Monday","month","morning","night","November","October","past","period","present","Saturday","season","second","September","spring","summer","Sunday","term","Thursday","time","Tuesday","Wednesday","week","while","winter","year","advance","area","arrangement","bottom","boundary","centre","corner","course","coverage","direction","distance","drag","drive","edge","fall","front","left","limit","location","motion","move","movement","passage","path","place","point","return","right","row","rush","side","step","tail","top","track","trail","turn","way","zone","album","apartment","bar","basement","bathroom","bed","bedroom","bowl","box","brick","brush","bucket","bunch","card","case","ceiling","cell","chair","cigarette","clock","cloth","collection","comfort","cover","cupboard","desk","door","duster","entrance","exit","fan","fence","flat","floor","frame","fridge","fun","furniture","garbage","garden","gate","glass","guest","hall","helping","home","hood","host","house","household","housing","kettle","key","kitchen","knife","lawn","lid","living","match","mess","mirror","net","oven","pack","pad","pillow","pool","pot","receipt","roll","roof","room","rubbish","shelf","sleep","sofa","spot","stair","stuff","table","tablet","tape","telephone","thing","tube","view","wall","wardrobe","window","alcohol","apple","beans","beer","bottle","bread","breakfast","butter","cake","can","carrot","cheese","chocolate","coffee","cook","corn","cream","cucumber","cup","dinner","dish","drink","fat","food","fork","fruit","garlic","honey","ingredient","juice","lunch","meal","meat","milk","onion","pepper","plate","potato","restaurant","rice","salad","salt","sauce","soda","spoon","sugar","supper","taste","tea","tomato","vegetables","wine","bag","belt","boots","button","cap","clothes","coat","dress","fashion","glasses","gloves","hat","jacket","label","pocket","purse","ring","shirt","shoes","skirt","suit","T-shirt","tie","trousers","wallet","watch","zip","ability","access","accountant","achievement","action","activity","administrator","advantage","adviser","agenda","agent","application","assistance","assistant","attempt","award","background","break","breakdown","career","cargo","case","chairman","challenge","characteristic","charge","check","chief","circumstance","colleague","command","company","complaint","conflict","consultant","contacts","contribution","control","cooperation","copy","craft","creation","day off","dealer","dedication","delivery","deputy","designer","difficulty","director","disguise","disorder","distribution","document","driver","duty","earnings","editor","effort","employee","employer","engineer","entry","executive","farmer","file","gift","head","help","hold","holiday","instruction","instrument","interview","job","journalist","labor","lack","lead","leadership","line","load","manner","means","meeting","mission","money","objective","observer","occasion","offer","office","operation","opponent","opportunity","order","participant","participation","partner","pass","performance","personnel","plan","policy","position","practice","print","procedure","producer","profession","professional","progress","project","prospect","purpose","quality","recommendation","record","recovery","report","reporter","repute","request","requirement","resolution","retirement","routine","salary","schedule","secretary","service","sheet","signal","site","skill","specialist","staff","stamp","struggle","success","support","target","task","team","tips","tool","trial","trouble","trust","use","visitor","wage","way","weekend","wizard","work","worker","account","advertisement","agency","agreement","asset","bank","benefit","bill","branch","brand","budget","business","buyer","cash","charge","claim","client","commission","competition","consumer","contract","corporation","cost","credit","crop","customer","deal","debt","decrease","deficit","demand","division","economy","employment","energy","enterprise","euro","evaluation","expense","facilities","facility","factory","fee","finance","firm","fortune","foundation","founder","fund","funding","gain","goods","income","increase","industry","investment","licence","loan","machine","maker","management","manufacturer","market","mine","oil","organization","owner","package","partnership","pay","payment","plant","poverty","price","product","production","profit","property","provision","rate","real estate","representation","representative","resource","revenue","sale","savings","share","spendings","stability","stock","storage","store","supplies","supply","tax","technology","term","trade","transfer","value","values","waste","waste","wealth","welfare","athlete","ball","bet","chess","coach","exercise","fan","game","hit","hockey","league","loser","match","player","race","round","run","score","sport","training","winner","workout","aid","blood","cancer","care","cold","cough","cure","cut","diet","disability","disease","doctor","drug","health","hospital","infection","injury","insurance","medicine","nurse","pain","patient","physician","pills","protein","recipe","relief","remedy","scratch","shock","surgery","survival","symptom","therapy","thirst","treatment","virus","abstract","class","classroom","college","curriculum","degree","discipline","dormitory","draft","education","figure","grade","graduate","history","knowledge","laboratory","learning","lesson","library","mark","preparation","professor","school","student","study","subject","teacher","test","testing","university","application","barrier","board","bracket","brake","call","capability","chain","chamber","communication","component","computer","concentration","concept","connection","content","core","cycle","damage","data","decline","destruction","device","discovery","electricity","element","engine","engineering","equipment","error","expansion","experiment","expert","failure","finding","function","fusion","gap","gear","historian","impact","improvement","keyboard","layer","link","mechanism","method","mode","model","network","object","observation","opening","origin","pattern","phase","phenomenon","platform","portion","possibility","power","principle","process","programme","radio","reduction","release","research","researcher","rise","sample","satellite","scale","scholar","science","scientist","scope","screen","settings","shift","standard","surface","survey","system","tank","tap","tear","technique","telescope","theory","transition","tube","user","wire","workaround","addition","amount","chart","circle","combination","cone","cube","degree","digit","dimension","equality","form","fraction","half","level","line","mean","million","minus","multiplication","number","pair","percent","plane","plus","quantity","quarter","range","ratio","rectangle","sphere","square","statistics","subtraction","table","total","triangle","unit","value","capacity","chemical","coal","colour","contrast","depth","exposure","fiber","force","glass","gold","height","inch","iron","kilogram","lead","length","mass","material","metal","meter","mile","mixture","noise","pace","paper","plank","plastic","pound","property","resistance","shape","silver","size","smell","smoke","speed","state","steel","strength","substance","temperature","tension","variation","volume","weight","width","wood","air","atmosphere","bank","blizzard","camp","climate","cloud","coast","dark","desert","dirt","disaster","diversity","dust","earth","east","environment","field","fire","flow","forest","ground","heat","hill","hole","ice","island","lake","landscape","light","lightning","moon","mountain","mud","nature","north","ocean","peak","planet","pole","pollution","rain","reality","relief","river","rock","sand","sea","selection","shade","shadow","shore","shower","silence","sky","snake","snow","soil","sort","south","space","star","stick","stone","storm","stream","sun","universe","water","wave","weather","west","wind","world","animal","bear","bee","bird","bite","bull","cat","cell","chicken","cock","cow","creature","crow","deer","dog","duck","egg","evolution","female","fish","flower","fly","fox","grass","growth","horse","leaf","lion","male","mice","mouse","pig","pigeon","plant","poultry","rabbit","root","seed","sheep","shell","sparrow","sting","tree","variety","wing","wolf","actor","adventure","art","article","artist","audience","author","band","bell","book","camera","celebrity","character","concert","culture","dance","dancer","design","drama","drawing","episode","essay","event","exhibition","fame","fiction","film","guitar","image","journal","language","literature","masterpiece","movie","music","musician","mystery","novel","page","paint","painting","pen","pencil","performance","photograph","piano","picture","play","plot","poem","poet","poetry","portrait","publication","reader","reading","role","scene","script","series","show","singer","song","stage","story","string","studio","style","tale","theater","tragedy","video","viewer","writer","writing","accident","address","aircraft","airline","airport","beach","beacon","bench","bike","block","board","boat","bridge","building","bus","car","car park","city","club","column","construction","crash","crew","deck","district","emergency","flight","fuel","gas","highway","hotel","lifeline","mail","mayor","museum","neighbourhood","outskirts","park","parking lot","passenger","pilot","port","post","post","resort","ride","road","route","seat","ship","shop","sidewalk","sightseeing","station","stop","street","ticket","tour","tower","town","traffic","train","transport","trip","truck","tyre","vehicle","vessel","wheel","yard","act","administration","authority","border","campaign","candidate","capital","citizen","community","convention","council","country","crisis","crowd","department","election","farm","flag","freedom","glory","government","governor","group","independence","institution","intervention","king","land","leader","majority","map","master","member","minister","minority","nation","opposition","party","peace","people","politician","politics","poll","population","president","protest","public","reform","refugee","region","regulation","resident","revolution","right","settlement","shelter","slave","society","speaker","spokesman","state","status","strike","supporter","symbol","territory","terror","tribe","union","village","volunteer","vote","voter","court","crime","danger","evidence","fine","gang","guard","incident","investigation","investigator","jailbreak","judge","judgment","jury","justice","killer","law","lawyer","legacy","legislation","murder","offence","officer","penalty","police","prison","prisoner","proof","prosecutor","protection","responsibility","safety","security","suicide","suspect","testimony","thief","threat","victim","violation","violence","witness","ally","ammunition","armor","army","banner","battle","bomb","bullet","combat","commander","defeat","enemy","fight","gun","hero","intelligence","machine gun","military","missile","rank","rifle","Roger!","shell","shooting","shot","soldier","strategy","tactics","troops","victory","war","weapon","adult","age","aunt","baby","beauty","birth","birthday","boy","boyfriend","bride","bridegroom","brother","child","childhood","children","cousin","daughter","death","desire","divorce","engagement","family","fate","father","funeral","gentleman","girl","girlfriend","grandfather","grandmother","guy","human","husband","identity","individual","jealousy","kid","kids","lady","life","lifetime","love","lover","man","marriage","men","mother","name","nephew","niece","parents","person","personality","proposal","relatives","sex","sister","son","surname","teenager","twins","uncle","wedding","wife","woman","women","youth","belief","Bible","buddhist","christian","church","devil","faith","god","heaven","hell","muslim","paradise","philosophy","prayer","priest","religion","sin","soul","spirit","arm","back","body","bone","brain","breast","breath","cheek","chest","ear","eye","face","feet","finger","foot","gait","gesture","hair","hand","head","hearing","heart","hip","knee","leg","lips","mouth","muscle","neck","nose","profile","shoulder",
        "sight","skin","stomach","tear","teeth","throat","tissue","tongue","tooth","voice"],
    // https://english.tulagorod.ru/vocabulary/verbs
    verbs = ["answer","ask","cite","comment","describe","discuss","emphasize","explain","express","inform","interpret","joke","list","mention","name","narrate","quote","refer","reply","report","respond","say","scream","shout","sound","speak","state","talk","tell","translate","whisper","yell","acknowledge","advise","agree","analyse","assume","believe","calculate","choose","commit","compare","conclude","confuse","consider","contrast","count","criticize","decide","define","determine","disagree","doubt","focus","forget","guess","hint","identify","imagine","intend","invent","know","lie","link","match","mean","mind","mind","mislead","mistake","note","notice","object","plan","pray","predict","question","read","realize","recall","recognize","reflect","regard","remember","remind","select","suppose","think","understand","wonder","adapt","applaud","appreciate","boast","concern","delight","differ","disgrace","dislike","dream","enjoy","estimate","expect","fancy","fear","feel","hate","hear","help","hope","inspire","like","listen","long","look","love","matter","may","observe","overestimate","overhear","overreact","praise","prefer","pretend","react","regard","resemble","risk","see","seem","smell","stare","suffer","suit","taste","tend","tolerate","underestimate","view","want","watch","wish","worry","accept","address","admit","affect","allow","announce","apologize","appeal","approve","argue","assure","back","beg","behave","blame","borrow","bother","call","care","challenge","communicate","complain","contact","convince","cry","dare","date","declare","decline","demand","deny","depend","disturb","dominate","encourage","ensure","excuse","face","forbid","forgive","guarantee","honor","ignore","insist","introduce","invite","judge","justify","kid","kiss","laugh","lend","let","meet","misbehave","miss","neglect","offer","permit","persuade","prohibit","promise","propose","receive","recommend","refuse","regret","require","respect","scold","settle","smile","spare","subject","suggest","support","thank","treat","trick","trust","urge","visit","warn","welcome","act","arrange","attach","beat","bend","bind","bite","blow","break","build","capsize","catch","clear","close","collect","cover","cut","demonstrate","dig","draw","drop","grab","hand","hit","hold","hug","kick","knock","lean","load","lock","mix","mount","nod","open","pack","pick","plant","point","pose","pour","press","pull","push","put","ring","rub","scratch","show","shut","smoke","squeeze","stick","stick","stir","stretch","strike","sweep","tap","tear","tie","touch","untie","wind","wipe","wrap","abandon","acquire","add","appear","arise","be","belong","come","delete","deprive","disappear","discard","dump","eliminate","emerge","enter","escape","except","exchange","exclude","exist","find","free","gain","get","give","happen","hide","house","include","insert","involve","join","last","leave","limit","lose","miss","need","obtain","occupy","occur","possess","present","preserve","receive","release","remain","remove","reserve","retain","return","reveal","rid","search","seek","share","vanish","withdraw","abstract","accomplish","alternate","assemble","become","begin","cancel","cause","cease","change","compile","complete","consist","contain","continue","delay","divide","end","finish","gather","last","launch","pause","persist","postpone","prepare","proceed","quit","repeat","replace","result","reverse","separate","split","start","stop","substitute","terminate","wait","yield","accompany","admit","advance","approach","arrive","bear","bring","carry","climb","come","cross","drag","fall","float","fly","follow","go","hang","hurry","jump","land","lay","leave","lie","lift","mount","move","place","raise","reach","ride","rise","roll","run","rush","send","shake","shift","ship","sink","sit","slide","slip","spin","spread","stand","stay","stick","swim","swing","take","throw","toss","transport","travel","turn","walk","wave","bake","book","brush","celebrate","clean","comb","cook","do","dress","drink","eat","feed","fix","freeze","have","host","iron","keep","make","order","oversleep","relax","rest","shave","sleep","spend","take","use","wake","wash","waste","wear","achieve","apply","apply","appoint","arrange","assign","assist","attempt","attend","avoid","award","balance","base","check","claim","conduct","confirm","connect","construct","control","copy","create","deliver","deserve","design","develop","direct","dismiss","drive","dye","employ","engage","enhance","establish","fail","fill","fire","grant","guide","handle","head","help","hire","implement","improve","install","interview","lead","locate","maintain","manage","master","monitor","operate","order","paint","participate","pass","perform","practise","prevent","prove","provide","publish","realize","record","reject","rescue","resolve","review","save","schedule","serve","serve","set","sign","solve","specialize","succeed","supply","try","undertake","work","account","afford","benefit","buy","charge","contribute","convert","cost","deal","decrease","deposit","distribute","double","earn","evaluate","impose","increase","invest","manage","pay","produce","promote","purchase","rent","represent","save","sell","trade","transfer","bet","coach","compete","gamble","hunt","overcome","play","score","track","win","ache","breathe","examine","harm","hurt","recover","shiver","slake","sting","tire","treat","fail","graduate","learn","study","teach","train","adjust","charge","discover","display","enable","explore","fit","measure","test","absorb","alter","burn","burst","contract","expand","expose","extend","fade","flow","form","light","pop","rain","reflect","shape","shine","snap","snow","thunder","transform","weigh","compose","dance","draw","sing","star","write","accuse","arrest","charge","cheat","commit","confess","elect","found","investigate","kill","lift","offend","punish","rob","rule","settle","steal","struggle","sue","suspect","swear","testify","try","violate","vote","waste","aim","attack","capture","confront","damage","defend","destroy","fight","fire","force","protect","resist","retreat","ruin","shoot","surrender",
        "threaten","adopt","bury","die","divorce","grow","inherit","live","marry","retire","survive"
    ],
    // https://english.tulagorod.ru/vocabulary/adjectives
    adjectives = ["black","blue","brown","dark","deep","green","grey","light","orange","pale","pink","purple","red","silver","violet","white","yellow","aware","called","certain","clever","committed","confident","crazy","critical","curious","intellectual","interested","mad","moral","psychological","reasonable","silly","stupid","supposed","wise","acquainted","afraid","aggressive","amazing","angry","annoyed","annoying","anxious","apparent","appropriate","ashamed","attractive","awful","awkward","bad","bad-tempered","beautiful","best","better","bitter","blue","bored","boring","careful","comfortable","complicated","content","convenient","cool","correct","cruel","cute","dangerous","different","difficult","disappointed","dramatic","easy","emotional","evil","excellent","excited","exciting","explicit","fair","fake","false","familiar","famous","favorite","fed up","fine","fond","friendly","frightened","fun","funny","genuine","glad","good","great","handsome","happy","hard","honest","honourable","ideal","identical","implicit","inappropriate","indecent","interesting","kind","lovely","lucky","mean","neat","nervous","nice","normal","obvious","odd","patient","perfect","pleased","polite","popular","pretty","proper","proud","reddish","remarkable","ridiculous","right","risky","rude","sad","satisfied","scared","secret","sensitive","serious","severe","shy","significant","silent","simple","sincere","smart","smart","sorry","strange","strict","sure","surprised","surprising","sweet","tasty","terrible","tricky","true","ugly","uncomfortable","unknown","upset","useful","vain","visible","weird","well-done","womanish","boyish","childish","wonderful","worse","worst","wrong","absent","available","existing","involved","lost","own","present","related","shared","advanced","alternative","based on","both","broken","coherent","complete","concrete","each","either","entire","final","further","left","middle","neither","next","opposite","other","previous","ready","remaining","repeated","reverse","same","separate","such","ultimate","whole","ancient","annual","brief","constant","contemporary","current","daily","early","following","former, ex-","future","immediate","initial","instant","last","late","latest","long-term","long-time","modern","new","obsolete","ongoing","outdated","past","permanent","present","quick","recent","sudden","temporary","up-to-date","astray","bottom","central","close","deep","direct","distant","eastern","extensive","external","far","farther","farthest","front","furthest","inner","internal","left","local","located","long-distance","near","nearby","next door","northern","rear","remote","right","shallow","situated","southern","top","upper","western","able","accustomed","active","brilliant","busy","capable","chief","closed","creative","free","handy","home-made","incapable","literary","musical","open","part-time","principal","professional","responsible","ruined","skilled","subject","successful","suitable","thorough","top","used","willing","working","cheap","commercial","competitive","economic","effective","expensive","financial","free","greedy","industrial","joint","paid","poor","profitable","rich","valuable","worth","addicted","bald","blind","clinical","drunk","fat","healthy","hungry","hurt","ill","lean","medical","overcome","painful","pregnant","safe","sick","slim","sound","strong","thirsty","tired","weak","academic","broken","chemical","complex","digital","educational","electric","electronic","elementary","fundamental","genetic","intense","negative","positive","relevant","scientific","technical","visual","accurate","actual","additional","assistant","average","basic","classic","common","comprehensive","considerable","consistent","conventional","crucial","disposable","diverse","double","due","enough","equal","essential","extra","extraordinary","extreme","formal","frequent","general","growing","half","important","impossible","increased","increasing","key","large","leading","likely","limited","main","major","mass","minor","multiple","necessary","numerous","only","ordinary","original","particular","possible","potential","practical","primary","rare","real","received","regular","several","similar","single","spare","special","specific","standard","steady","substantial","total","typical","unique","universal","unlikely","unnecessary","unusual","unwanted","urgent","usual","various","vast","very","vital","big","bright","broad","clean","clear","cold","cool","dirty","dry","empty","enormous","fast","flat","fresh","full","giant","gold","heavy","high","hot","huge","light","little","long","loose","loud","low","massive","narrow","noisy","physical","powerful","pure","quiet","raw","rough","round","sharp","short","slow","small","smooth","soft","solid","square","stable","still","straight","tall","thick","thin","tight","tiny","tough","transparent","warm","wet","wide","wooden","biological","environmental","global","natural","solar","wild","civil","conservative","corporate","cultural","domestic","ethnic","folk","foreign","historic","independent","international","liberal","mutual","national","nuclear","official","political","public","racial","regional","rural","social","strategic","traditional","united","urban","accused","armed","criminal","defensive","guilty","illegal","innocent","just","legal","military","violent","vulnerable","aged","aged","alive","alone","awake","born","dead","dressed","elder","eldest","female","human","individual","junior","live","living","male","married","native","old",
        "personal","private","senior","single","young","faithful","holy","religious","spiritual"],
    /**
     * Неправильные глаголы
     * ps: past simple
     * pp: pastParticiple
     * trans: translation
     */
irregularVerb = {
        do: {
            ps: 'did',
            pp: 'done',
            trans: 'делать,сделать',
            gr: 0,
            grDesc: 'Главные'
        },
        outdo: {
            ps: 'outdid',
            pp: 'outdone',
            trans: 'превосходить',
            gr: 0,
            grDesc: 'Главные'
        },
        redo: {
            ps: 'redid',
            pp: 'redone',
            trans: 'повторять сделанное',
            gr: 0,
            grDesc: 'Главные'
        },
        undo: {
            ps: 'undid',
            pp: 'undone',
            trans: 'уничтожать сделанное ',
            gr: 0,
            grDesc: 'Главные'
        },
        go: {
            ps: 'went',
            pp: 'gone',
            trans: 'ходить,ездить,пойти,поехать',
            gr: 0,
            grDesc: 'Главные'
        },
        undergo: {
            ps: 'underwent',
            pp: 'undergone',
            trans: 'проходить;подвергаться',
            gr: 0,
            grDesc: 'Главные'
        },
        cost: {
            ps: 'cost',
            pp: 'cost',
            trans: 'стоить',
            gr: 1,
            grDesc: 'I = II = III'
        },
        put: {
            ps: 'put',
            pp: 'put',
            trans: 'ставить',
            gr: 1,
            grDesc: 'I = II = III'
        },
        cut: {
            ps: 'cut',
            pp: 'cut',
            trans: 'резать,разрезать,порезаться',
            gr: 1,
            grDesc: 'I = II = III'
        },
        shut: {
            ps: 'shut',
            pp: 'shut',
            trans: 'хлопнуть,захлопнуть,закрыть',
            gr: 1,
            grDesc: 'I = II = III'
        },
        hurt: {
            ps: 'hurt',
            pp: 'hurt',
            trans: 'удариться,причинять боль',
            gr: 1,
            grDesc: 'I = II = III'
        },
        hit: {
            ps: 'hit',
            pp: 'hit',
            trans: 'ударить,удариться',
            gr: 1,
            grDesc: 'I = II = III'
        },
        mishit: {
            ps: 'mishit',
            pp: 'mishit',
            trans: 'промахнуться',
            gr: 1,
            grDesc: 'I = II = III'
        },
        let: {
            ps: 'let',
            pp: 'let',
            trans: 'позволить,позволять,давать,дать',
            gr: 1,
            grDesc: 'I = II = III'
        },
        set: {
            ps: 'set',
            pp: 'set',
            trans: 'ставить,устанавливать,установить',
            gr: 1,
            grDesc: 'I = II = III'
        },
        reset: {
            ps: 'reset',
            pp: 'reset',
            trans: 'возвращать',
            gr: 1,
            grDesc: 'I = II = III'
        },
        upset: {
            ps: 'reset',
            pp: 'reset',
            trans: 'опрокинуть(ся)',
            gr: 1,
            grDesc: 'I = II = III'
        },
        cast: {
            ps: 'cast',
            pp: 'cast',
            trans: 'кинуть,лить металл',
            gr: 1,
            grDesc: 'I = II = III'
        },
        recast: {
            ps: 'recast',
            pp: 'recast',
            trans: 'видоизменять,преобразовывать',
            gr: 1,
            grDesc: 'I = II = III'
        },
        beset: {
            ps: 'beset',
            pp: 'beset',
            trans: 'осаждать',
            gr: 1,
            grDesc: 'I = II = III'
        },
        broadcast: {
            ps: 'broadcast',
            pp: 'broadcast',
            trans: 'распространять,разбрасывать',
            gr: 1,
            grDesc: 'I = II = III'
        },
        burst: {
            ps: 'burst',
            pp: 'burst',
            trans: 'разразиться,взорваться',
            gr: 1,
            grDesc: 'I = II = III'
        },
        bust: {
            ps: 'bust',
            pp: 'busted',
            trans: 'разжаловать',
            gr: 1,
            grDesc: 'I = II = III'
        },
        fit: {
            ps: 'fit',
            pp: 'fit',
            trans: 'подходить по размеру',
            gr: 1,
            grDesc: 'I = II = III'
        },
        input: {
            ps: 'input,inputted',
            pp: 'input,inputted',
            trans: 'входить',
            gr: 1,
            grDesc: 'I = II = III'
        },
        output: {
            ps: 'output,outputted',
            pp: 'output,outputted',
            trans: 'выходить',
            gr: 1,
            grDesc: 'I = II = III'
        },
        inset: {
            ps: 'inset',
            pp: 'inset',
            trans: 'вставлять,вкладывать',
            gr: 1,
            grDesc: 'I = II = III'
        },
        miscast: {
            ps: 'miscast',
            pp: 'miscast',
            trans: 'неправильно распределять роли',
            gr: 1,
            grDesc: 'I = II = III'
        },
        outbid: {
            ps: 'outbid',
            pp: 'outbid',
            trans: 'перебивать цену',
            gr: 1,
            grDesc: 'I = II = III'
        },
        overbid: {
            ps: 'overbid',
            pp: 'overbid',
            trans: 'повелевать',
            gr: 1,
            grDesc: 'I = II = III'
        },
        shed: {
            ps: 'shed',
            pp: 'shed',
            trans: 'проливать',
            gr: 1,
            grDesc: 'I = II = III'
        },
        slit: {
            ps: 'slit',
            pp: 'slit',
            trans: 'раздирать(ся),разрезать (вдоль)',
            gr: 1,
            grDesc: 'I = II = III'
        },
        split: {
            ps: 'split',
            pp: 'split',
            trans: 'расщепить(ся)',
            gr: 1,
            grDesc: 'I = II = III'
        },
        spread: {
            ps: 'spread',
            pp: 'spread',
            trans: 'распространиться',
            gr: 1,
            grDesc: 'I = II = III'
        },
        sublet: {
            ps: 'sublet',
            pp: 'sublet',
            trans: 'передавать в субаренду',
            gr: 1,
            grDesc: 'I = II = III'
        },
        thrust: {
            ps: 'thrust',
            pp: 'thrust',
            trans: 'толкнуть сунуть',
            gr: 1,
            grDesc: 'I = II = III'
        },
        underbid: {
            ps: 'underbid',
            pp: 'underbid',
            trans: 'снижать цену',
            gr: 1,
            grDesc: 'I = II = III'
        },
        undercut: {
            ps: 'undercut',
            pp: 'undercut',
            trans: 'сбивать цены',
            gr: 1,
            grDesc: 'I = II = III'
        },
        have: {
            ps: 'had',
            pp: 'had',
            trans: 'иметь',
            gr: 2,
            grDesc: 'II = III'
        },
        hang: {
            ps: 'hung',
            pp: 'hung',
            trans: 'висеть,вешать,повесить',
            gr: 2,
            grDesc: 'II = III'
        },
        overhang: {
            ps: 'overhung',
            pp: 'overhung',
            trans: 'нависать',
            gr: 2,
            grDesc: 'II = III'
        },
        get: {
            ps: 'got',
            pp: 'got,gotten',
            trans: 'получать, достигать',
            gr: 2,
            grDesc: 'II = III'
        },
        tell: {
            ps: 'told',
            pp: 'told',
            trans: 'сказать,рассказать',
            gr: 2,
            grDesc: 'II = III'
        },
        foretell: {
            ps: 'foretold',
            pp: 'foretold',
            trans: 'предсказывать',
            gr: 2,
            grDesc: 'II = III'
        },
        retell: {
            ps: 'retold',
            pp: 'retold',
            trans: 'пересказывать',
            gr: 2,
            grDesc: 'II = III'
        },
        sell: {
            ps: 'sold',
            pp: 'sold',
            trans: 'продавать,продать',
            gr: 2,
            grDesc: 'II = III'
        },
        outsell: {
            ps: 'outsold',
            pp: 'outsold',
            trans: 'продавать лучше или дороже',
            gr: 2,
            grDesc: 'II = III'
        },
        resell: {
            ps: 'resold',
            pp: 'resold',
            trans: 'перепродавать',
            gr: 2,
            grDesc: 'II = III'
        },
        undersell: {
            ps: 'undersold',
            pp: 'undersold',
            trans: 'продавать дешевле',
            gr: 2,
            grDesc: 'II = III'
        },
        shoot: {
            ps: 'shot',
            pp: 'shot',
            trans: 'стрелять,застрелить',
            gr: 2,
            grDesc: 'II = III'
        },
        overshoot: {
            ps: 'overshot',
            pp: 'overshot',
            trans: 'расстрелять',
            gr: 2,
            grDesc: 'II = III'
        },
        lose: {
            ps: 'lost',
            pp: 'lost',
            trans: 'терять,потерять',
            gr: 2,
            grDesc: 'II = III'
        },
        hear: {
            ps: 'heard',
            pp: 'heard',
            trans: 'слышать,услышать',
            gr: 2,
            grDesc: 'II = III'
        },
        mishear: {
            ps: 'misheard',
            pp: 'misheard',
            trans: 'ослышаться',
            gr: 2,
            grDesc: 'II = III'
        },
        overhear: {
            ps: 'overheard',
            pp: 'overheard',
            trans: 'подслуш(ив)ать',
            gr: 2,
            grDesc: 'II = III'
        },
        rehear: {
            ps: 'reheard',
            pp: 'reheard',
            trans: 'слушать вторично',
            gr: 2,
            grDesc: 'II = III'
        },
        stand: {
            ps: 'stood',
            pp: 'stood',
            trans: 'стоять',
            gr: 2,
            grDesc: 'II = III'
        },
        withstand: {
            ps: 'withstood',
            pp: 'withstood',
            trans: 'противиться',
            gr: 2,
            grDesc: 'II = III'
        },
        understand: {
            ps: 'understood',
            pp: 'understood',
            trans: 'понимать,понять',
            gr: 2,
            grDesc: 'II = III'
        },
        misunderstand: {
            ps: 'misunderstood',
            pp: 'misunderstood',
            trans: 'неправильно понимать',
            gr: 2,
            grDesc: 'II = III'
        },
        read: {
            ps: 'read',
            pp: 'read',
            trans: 'читать,прочитать',
            gr: 2,
            grDesc: 'II = III'
        },
        misread: {
            ps: 'misread',
            pp: 'misread',
            trans: 'неправильно истолковывать',
            gr: 2,
            grDesc: 'II = III'
        },
        mean: {
            ps: 'meant',
            pp: 'meant',
            trans: 'значить,иметь в виду',
            gr: 2,
            grDesc: 'II = III'
        },
        meet: {
            ps: 'met',
            pp: 'met',
            trans: 'встречать(ся),встретить(ся)',
            gr: 2,
            grDesc: 'II = III'
        },
        feel: {
            ps: 'felt',
            pp: 'felt',
            trans: 'чувствовать,почувствовать',
            gr: 2,
            grDesc: 'II = III'
        },
        leave: {
            ps: 'left',
            pp: 'left',
            trans: 'оставлять,оставить',
            gr: 2,
            grDesc: 'II = III'
        },
        keep: {
            ps: 'kept',
            pp: 'kept',
            trans: 'держать,хранить',
            gr: 2,
            grDesc: 'II = III'
        },
        sleep: {
            ps: 'slept',
            pp: 'slept',
            trans: 'спать',
            gr: 2,
            grDesc: 'II = III'
        },
        oversleep: {
            ps: 'overslept',
            pp: 'overslept',
            trans: 'прос(ы)пать',
            gr: 2,
            grDesc: 'II = III'
        },
        feed: {
            ps: 'fed',
            pp: 'fed',
            trans: 'кормить,покормить',
            gr: 2,
            grDesc: 'II = III'
        },
        hold: {
            ps: 'held',
            pp: 'held',
            trans: 'держать',
            gr: 2,
            grDesc: 'II = III'
        },
        uphold: {
            ps: 'upheld',
            pp: 'upheld',
            trans: 'поддерживать',
            gr: 2,
            grDesc: 'II = III'
        },
        withhold: {
            ps: 'withheld',
            pp: 'withheld',
            trans: 'удерживать',
            gr: 2,
            grDesc: 'II = III'
        },
        build: {
            ps: 'built',
            pp: 'built',
            trans: 'строить,построить',
            gr: 2,
            grDesc: 'II = III'
        },
        send: {
            ps: 'sent',
            pp: 'sent',
            trans: 'посылать,послать',
            gr: 2,
            grDesc: 'II = III'
        },
        spend: {
            ps: 'spent',
            pp: 'spent',
            trans: 'тратить,истратить',
            gr: 2,
            grDesc: 'II = III'
        },
        misspend: {
            ps: 'misspent',
            pp: 'misspent',
            trans: 'экономить',
            gr: 2,
            grDesc: 'II = III'
        },
        make: {
            ps: 'made',
            pp: 'made',
            trans: 'делать,сделать',
            gr: 2,
            grDesc: 'II = III'
        },
        remake: {
            ps: 'remade',
            pp: 'remade',
            trans: 'переделывать',
            gr: 2,
            grDesc: 'II = III'
        },
        lay: {
            ps: 'laid',
            pp: 'laid',
            trans: 'класть,положить',
            gr: 2,
            grDesc: 'II = III'
        },
        inlay: {
            ps: 'inlaid',
            pp: 'inlaid',
            trans: 'вкладывать,выстилать',
            gr: 2,
            grDesc: 'II = III'
        },
        mislay: {
            ps: 'mislaid',
            pp: 'mislaid',
            trans: 'класть не на место',
            gr: 2,
            grDesc: 'II = III'
        },
        overlay: {
            ps: 'overlaid',
            pp: 'overlaid',
            trans: 'покры(ва)ть',
            gr: 2,
            grDesc: 'II = III'
        },
        waylay: {
            ps: 'waylaid',
            pp: 'waylaid',
            trans: 'подстерегать',
            gr: 2,
            grDesc: 'II = III'
        },
        pay: {
            ps: 'paid',
            pp: 'paid',
            trans: 'платить,заплатить',
            gr: 2,
            grDesc: 'II = III'
        },
        overpay: {
            ps: 'overpaid',
            pp: 'overpaid',
            trans: 'переплачивать',
            gr: 2,
            grDesc: 'II = III'
        },
        prepay: {
            ps: 'prepaid',
            pp: 'prepaid',
            trans: 'платить вперед',
            gr: 2,
            grDesc: 'II = III'
        },
        repay: {
            ps: 'repaid',
            pp: 'repaid',
            trans: 'отдавать долг',
            gr: 2,
            grDesc: 'II = III'
        },
        underpay: {
            ps: 'underpaid',
            pp: 'underpaid',
            trans: 'оплачивать слишком низко',
            gr: 2,
            grDesc: 'II = III'
        },
        say: {
            ps: 'said',
            pp: 'said',
            trans: 'сказать,говорить',
            gr: 2,
            grDesc: 'II = III'
        },
        unsay: {
            ps: 'unsaid',
            pp: 'unsaid',
            trans: 'брать назад свои слова',
            gr: 2,
            grDesc: 'II = III'
        },
        gainsay: {
            ps: 'gainsaid',
            pp: 'gainsaid',
            trans: 'отрицать,противоречить',
            gr: 2,
            grDesc: 'II = III'
        },
        bring: {
            ps: 'brought',
            pp: 'brought',
            trans: 'приносить,принести',
            gr: 2,
            grDesc: 'II = III'
        },
        buy: {
            ps: 'bought',
            pp: 'bought',
            trans: 'покупать,купить',
            gr: 2,
            grDesc: 'II = III'
        },
        think: {
            ps: 'thought',
            pp: 'thought',
            trans: 'думать,подумать',
            gr: 2,
            grDesc: 'II = III'
        },
        seek: {
            ps: 'sought',
            pp: 'sought',
            trans: 'искать',
            gr: 2,
            grDesc: 'II = III'
        },
        win: {
            ps: 'won',
            pp: 'won',
            trans: 'выигрывать,выиграть',
            gr: 2,
            grDesc: 'II = III'
        },
        catch: {
            ps: 'caught',
            pp: 'caught',
            trans: 'ловить,поймать',
            gr: 2,
            grDesc: 'II = III'
        },
        teach: {
            ps: 'taught',
            pp: 'taught',
            trans: 'учить,преподавать',
            gr: 2,
            grDesc: 'II = III'
        },
        fight: {
            ps: 'fought',
            pp: 'fought',
            trans: 'драться,подраться,бороться',
            gr: 2,
            grDesc: 'II = III'
        },
        outfight: {
            ps: 'outfought',
            pp: 'outfought',
            trans: 'побеждать в бою',
            gr: 2,
            grDesc: 'II = III'
        },
        find: {
            ps: 'found',
            pp: 'found',
            trans: 'находить,найти',
            gr: 2,
            grDesc: 'II = III'
        },
        grind: {
            ps: 'ground',
            pp: 'ground',
            trans: 'молоть,намолоть',
            gr: 2,
            grDesc: 'II = III'
        },
        dig: {
            ps: 'dug',
            pp: 'dug',
            trans: 'копать,выкопать',
            gr: 2,
            grDesc: 'II = III'
        },
        stick: {
            ps: 'stuck',
            pp: 'stuck',
            trans: 'застревать,застрять,прилипать,прилипнуть,уколоть',
            gr: 2,
            grDesc: 'II = III'
        },
        sting: {
            ps: 'stung',
            pp: 'stung',
            trans: 'жалить,ужалить',
            gr: 2,
            grDesc: 'II = III'
        },
        sit: {
            ps: 'sat',
            pp: 'sat',
            trans: 'сидеть',
            gr: 2,
            grDesc: 'II = III'
        },
        abide: {
            ps: 'abode,abided',
            pp: 'abode,abided',
            trans: 'пребывать,держаться',
            gr: 2,
            grDesc: 'II = III'
        },
        awake: {
            ps: 'awoke',
            pp: 'awaked,awoke',
            trans: 'будить,проснуться',
            gr: 2,
            grDesc: 'II = III'
        },
        backbite: {
            ps: 'backbitten',
            pp: 'backbitten',
            trans: 'клеветать',
            gr: 2,
            grDesc: 'II = III'
        },
        backslide: {
            ps: 'backslid',
            pp: 'backslid',
            trans: 'отпадать',
            gr: 2,
            grDesc: 'II = III'
        },
        begird: {
            ps: 'begirt',
            pp: 'begirt',
            trans: 'опоясывать',
            gr: 2,
            grDesc: 'II = III'
        },
        behold: {
            ps: 'beheld',
            pp: 'beheld',
            trans: 'зреть',
            gr: 2,
            grDesc: 'II = III'
        },
        bend: {
            ps: 'bent',
            pp: 'bent,bended',
            trans: 'наклоняться (в стороны)',
            gr: 2,
            grDesc: 'II = III'
        },
        bereave: {
            ps: 'bereft,bereaved',
            pp: 'bereft,bereaved',
            trans: 'лишать',
            gr: 2,
            grDesc: 'II = III'
        },
        beseech: {
            ps: 'besought,beseeched',
            pp: 'besought,beseeched',
            trans: 'умолять,упрашивать',
            gr: 2,
            grDesc: 'II = III'
        },
        bespeak: {
            ps: 'bespoke',
            pp: 'bespoke,bespoken',
            trans: 'заказывать',
            gr: 2,
            grDesc: 'II = III'
        },
        bespit: {
            ps: 'bespat',
            pp: 'bespat',
            trans: 'заплевывать',
            gr: 2,
            grDesc: 'II = III'
        },
        bet: {
            ps: 'bet,betted',
            pp: 'bet,betted',
            trans: 'держать пари',
            gr: 2,
            grDesc: 'II = III'
        },
        bind: {
            ps: 'bound',
            pp: 'bound',
            trans: 'связать',
            gr: 2,
            grDesc: 'II = III'
        },
        rebind: {
            ps: 'rebound',
            pp: 'rebound',
            trans: 'перевязывать',
            gr: 2,
            grDesc: 'II = III'
        },
        bleed: {
            ps: 'bled',
            pp: 'bled',
            trans: 'кровоточить',
            gr: 2,
            grDesc: 'II = III'
        },
        bless: {
            ps: 'blessed',
            pp: 'blessed,blest',
            trans: 'благословлять',
            gr: 2,
            grDesc: 'II = III'
        },
        breed: {
            ps: 'bred',
            pp: 'bred',
            trans: 'выращивать',
            gr: 2,
            grDesc: 'II = III'
        },
        burn: {
            ps: 'burnt,burned',
            pp: 'burnt,burned',
            trans: 'жечь,гореть',
            gr: 2,
            grDesc: 'II = III'
        },
        cleave: {
            ps: 'clove,cleft,cleaved',
            pp: 'cloven,cleft,cleaved',
            trans: 'рассечь',
            gr: 2,
            grDesc: 'II = III'
        },
        cling: {
            ps: 'clung',
            pp: 'clung',
            trans: 'цепляться,льнуть',
            gr: 2,
            grDesc: 'II = III'
        },
        creep: {
            ps: 'crept',
            pp: 'crept',
            trans: 'ползти',
            gr: 2,
            grDesc: 'II = III'
        },
        crow: {
            ps: 'crowed,crew',
            pp: 'crowed',
            trans: 'петь (о петухе)',
            gr: 2,
            grDesc: 'II = III'
        },
        dare: {
            ps: 'durst,dared',
            pp: 'dared',
            trans: 'сметь',
            gr: 2,
            grDesc: 'II = III'
        },
        deal: {
            ps: 'dealt',
            pp: 'dealt',
            trans: 'иметь дело',
            gr: 2,
            grDesc: 'II = III'
        },
        dive: {
            ps: 'dived,dove',
            pp: 'dived',
            trans: 'нырять,погружаться',
            gr: 2,
            grDesc: 'II = III'
        },
        dream: {
            ps: 'dreamt,dreamed',
            pp: 'dreamt,dreamed',
            trans: 'грезить,мечтать',
            gr: 2,
            grDesc: 'II = III'
        },
        dwell: {
            ps: 'dwelt',
            pp: 'dwelt',
            trans: 'обитать,задерживаться',
            gr: 2,
            grDesc: 'II = III'
        },
        flee: {
            ps: 'fled',
            pp: 'fled',
            trans: 'бежать,спасаться',
            gr: 2,
            grDesc: 'II = III'
        },
        fling: {
            ps: 'flung',
            pp: 'flung',
            trans: 'бросить',
            gr: 2,
            grDesc: 'II = III'
        },
        floodlight: {
            ps: 'floodlighted,floodlit',
            pp: 'floodlighted,floodlit',
            trans: 'освещать прожектором',
            gr: 2,
            grDesc: 'II = III'
        },
        forecast: {
            ps: 'forecast,forecasted',
            pp: 'forecast,forecasted',
            trans: 'предсказывать',
            gr: 2,
            grDesc: 'II = III'
        },
        gild: {
            ps: 'gilt,gilded',
            pp: 'gilt,gilded',
            trans: 'позолотить',
            gr: 2,
            grDesc: 'II = III'
        },
        gird: {
            ps: 'girded,girt',
            pp: 'girded,girt',
            trans: 'опоясывать',
            gr: 2,
            grDesc: 'II = III'
        },
        hamstring: {
            ps: 'hamstringed,hamstrung',
            pp: 'hamstringed,hamstrung',
            trans: 'подрезать поджилки',
            gr: 2,
            grDesc: 'II = III'
        },
        heave: {
            ps: 'heaved,hove',
            pp: 'heaved,hove',
            trans: 'подымать(ся)',
            gr: 2,
            grDesc: 'II = III'
        },
        ken: {
            ps: 'kenned,kent',
            pp: 'kenned',
            trans: 'знать,узнавать по виду',
            gr: 2,
            grDesc: 'II = III'
        },
        kneel: {
            ps: 'knelt,kneeled',
            pp: 'knelt,kneeled',
            trans: 'стоять на коленях',
            gr: 2,
            grDesc: 'II = III'
        },
        knit: {
            ps: 'knit,knitted',
            pp: 'knit,knitted',
            trans: 'вязать',
            gr: 2,
            grDesc: 'II = III'
        },
        lead: {
            ps: 'led',
            pp: 'led',
            trans: 'вести',
            gr: 2,
            grDesc: 'II = III'
        },
        lean: {
            ps: 'leant,leaned',
            pp: 'leant,leaned',
            trans: 'опираться,прислоняться',
            gr: 2,
            grDesc: 'II = III'
        },
        leap: {
            ps: 'leapt,leaped',
            pp: 'leapt,leaped',
            trans: 'прыгать',
            gr: 2,
            grDesc: 'II = III'
        },
        learn: {
            ps: 'learnt,learned',
            pp: 'learnt,learned',
            trans: 'учить',
            gr: 2,
            grDesc: 'II = III'
        },
        lend: {
            ps: 'lent',
            pp: 'lent',
            trans: 'одалживать',
            gr: 2,
            grDesc: 'II = III'
        },
        light: {
            ps: 'lit,lighted',
            pp: 'lit,lighted',
            trans: 'освещать',
            gr: 2,
            grDesc: 'II = III'
        },
        may: {
            ps: 'might',
            pp: 'might',
            trans: 'мочь,иметь возможность',
            gr: 2,
            grDesc: 'II = III'
        },
        misdeal: {
            ps: 'misdealt',
            pp: 'misdealt',
            trans: 'поступать неправильно',
            gr: 2,
            grDesc: 'II = III'
        },
        mislead: {
            ps: 'misled',
            pp: 'misled',
            trans: 'ввести в заблуждение',
            gr: 2,
            grDesc: 'II = III'
        },
        mow: {
            ps: 'mowed',
            pp: 'mown,mowed',
            trans: 'косить',
            gr: 2,
            grDesc: 'II = III'
        },
        outshine: {
            ps: 'outshone',
            pp: 'outshone',
            trans: 'затмевать',
            gr: 2,
            grDesc: 'II = III'
        },
        plead: {
            ps: 'pleaded,pled',
            pp: 'pleaded,pled',
            trans: 'обращаться к суду',
            gr: 2,
            grDesc: 'II = III'
        },
        quit: {
            ps: 'quit,quitted',
            pp: 'quit,quitted',
            trans: 'покидать,оставлять,выходить',
            gr: 2,
            grDesc: 'II = III'
        },
        rend: {
            ps: 'rent',
            pp: 'rent',
            trans: 'раздирать',
            gr: 2,
            grDesc: 'II = III'
        },
        rid: {
            ps: 'rid,ridded',
            pp: 'rid,ridded',
            trans: 'избавлять',
            gr: 2,
            grDesc: 'II = III'
        },
        shine: {
            ps: 'shone,shined',
            pp: 'shone,shined',
            trans: 'светить,сиять',
            gr: 2,
            grDesc: 'II = III'
        },
        shoe: {
            ps: 'shod',
            pp: 'shod',
            trans: 'обувать,подковывать',
            gr: 2,
            grDesc: 'II = III'
        },
        slide: {
            ps: 'slid',
            pp: 'slid',
            trans: 'скользить',
            gr: 2,
            grDesc: 'II = III'
        },
        sling: {
            ps: 'slung',
            pp: 'slung',
            trans: 'швырять,подвешивать',
            gr: 2,
            grDesc: 'II = III'
        },
        slink: {
            ps: 'slunk',
            pp: 'slunk',
            trans: 'идти крадучись',
            gr: 2,
            grDesc: 'II = III'
        },
        smell: {
            ps: 'smelt,smelled',
            pp: 'smelt,smelled',
            trans: 'пахнуть,нюхать',
            gr: 2,
            grDesc: 'II = III'
        },
        speed: {
            ps: 'sped,speeded',
            pp: 'sped,speeded',
            trans: 'ускорять,спешить',
            gr: 2,
            grDesc: 'II = III'
        },
        spell: {
            ps: 'spelt,spelled',
            pp: 'spell,spelled',
            trans: 'писать или читать по буквам',
            gr: 2,
            grDesc: 'II = III'
        },
        misspell: {
            ps: 'misspelt,misspeled',
            pp: 'misspelt,misspeled',
            trans: 'писать с ошибками',
            gr: 2,
            grDesc: 'II = III'
        },
        spill: {
            ps: 'spilt,spilled',
            pp: 'spilt,spilled',
            trans: 'проливать',
            gr: 2,
            grDesc: 'II = III'
        },
        spin: {
            ps: 'spun,span',
            pp: 'spun',
            trans: 'прясть',
            gr: 2,
            grDesc: 'II = III'
        },
        spit: {
            ps: 'spat,spit',
            pp: 'spat,spit',
            trans: 'плевать',
            gr: 2,
            grDesc: 'II = III'
        },
        spoil: {
            ps: 'spoilt,spoiled',
            pp: 'spoilt,spoiled',
            trans: 'портить',
            gr: 2,
            grDesc: 'II = III'
        },
        spotlight: {
            ps: 'spotlit,spotlighted',
            pp: 'spotlit,spotlighted',
            trans: 'осветить',
            gr: 2,
            grDesc: 'II = III'
        },
        stave: {
            ps: 'staved,stove',
            pp: 'staved,stove',
            trans: 'проламывать,разби(ва)ть',
            gr: 2,
            grDesc: 'II = III'
        },
        strike: {
            ps: 'struck',
            pp: 'struck',
            trans: 'ударить,бить,бастовать',
            gr: 2,
            grDesc: 'II = III'
        },
        string: {
            ps: 'strung',
            pp: 'strung',
            trans: 'нанизать,натянуть',
            gr: 2,
            grDesc: 'II = III'
        },
        sweep: {
            ps: 'swept',
            pp: 'swept',
            trans: 'мести,промчаться',
            gr: 2,
            grDesc: 'II = III'
        },
        swing: {
            ps: 'swung',
            pp: 'swung',
            trans: 'качаться',
            gr: 2,
            grDesc: 'II = III'
        },
        unbend: {
            ps: 'unbent',
            pp: 'unbent',
            trans: 'разогнуть(ся)',
            gr: 2,
            grDesc: 'II = III'
        },
        unwind: {
            ps: 'unwound',
            pp: 'unwound',
            trans: 'развертывать',
            gr: 2,
            grDesc: 'II = III'
        },
        wed: {
            ps: 'wed,wedded',
            pp: 'wed,wedded',
            trans: 'выдавать замуж',
            gr: 2,
            grDesc: 'II = III'
        },
        weep: {
            ps: 'wept',
            pp: 'wept',
            trans: 'плакать',
            gr: 2,
            grDesc: 'II = III'
        },
        wet: {
            ps: 'wet,wetted',
            pp: 'wet,wetted',
            trans: 'мочить,увлажнять',
            gr: 2,
            grDesc: 'II = III'
        },
        wind: {
            ps: 'wound',
            pp: 'wound',
            trans: 'заводить (механизм)',
            gr: 2,
            grDesc: 'II = III'
        },
        work: {
            ps: 'worked,wrought',
            pp: 'worked,wrought',
            trans: 'работать',
            gr: 2,
            grDesc: 'II = III'
        },
        wring: {
            ps: 'wrung',
            pp: 'wrung',
            trans: 'скрутить,сжать',
            gr: 2,
            grDesc: 'II = III'
        },
        be: {
            ps: 'was|were',
            pp: 'been',
            trans: 'быть',
            gr: 3,
            grDesc: '- en'
        },
        see: {
            ps: 'saw',
            pp: 'seen',
            trans: 'видеть,увидеть',
            gr: 3,
            grDesc: '- en'
        },
        foresee: {
            ps: 'foresaw',
            pp: 'foreseen',
            trans: 'предвидеть',
            gr: 3,
            grDesc: '- en'
        },
        oversee: {
            ps: 'oversaw',
            pp: 'overseen',
            trans: 'надзирать за',
            gr: 3,
            grDesc: '- en'
        },
        give: {
            ps: 'gave',
            pp: 'given',
            trans: 'давать,дать',
            gr: 3,
            grDesc: '- en'
        },
        forgive: {
            ps: 'forgave',
            pp: 'forgiven',
            trans: 'прощать,простить',
            gr: 3,
            grDesc: '- en'
        },
        misgive: {
            ps: 'misgave',
            pp: 'misgiven',
            trans: 'внушать,опасения',
            gr: 3,
            grDesc: '- en'
        },
        eat: {
            ps: 'ate',
            pp: 'eaten',
            trans: 'есть,съесть',
            gr: 3,
            grDesc: '- en'
        },
        overeat: {
            ps: 'overate',
            pp: 'overeaten',
            trans: 'объедаться',
            gr: 3,
            grDesc: '- en'
        },
        beat: {
            ps: 'beat',
            pp: 'beaten',
            trans: 'бить,избить',
            gr: 3,
            grDesc: '- en'
        },
        choose: {
            ps: 'chose',
            pp: 'chosen',
            trans: 'выбирать,выбрать',
            gr: 3,
            grDesc: '- en'
        },
        break: {
            ps: 'broke',
            pp: 'broken',
            trans: 'ломать,сломать,разбить',
            gr: 3,
            grDesc: '- en'
        },
        wake: {
            ps: 'woke,waked',
            pp: 'woken,waked',
            trans: 'будить,разбудить,просыпаться,проснуться',
            gr: 3,
            grDesc: '- en'
        },
        freeze: {
            ps: 'froze',
            pp: 'frozen',
            trans: 'морозить,замораживать,мёрзнуть,замёрзнуть',
            gr: 3,
            grDesc: '- en'
        },
        unfreeze: {
            ps: 'unfroze',
            pp: 'unfrozen',
            trans: 'размораживать',
            gr: 3,
            grDesc: '- en'
        },
        speak: {
            ps: 'spoke',
            pp: 'spoken',
            trans: 'говорить',
            gr: 3,
            grDesc: '- en'
        },
        steal: {
            ps: 'stole',
            pp: 'stolen',
            trans: 'воровать,красть,украсть',
            gr: 3,
            grDesc: '- en'
        },
        bite: {
            ps: 'bit',
            pp: 'bitten',
            trans: 'кусать(ся),укусить',
            gr: 3,
            grDesc: '- en'
        },
        hide: {
            ps: 'hid',
            pp: 'hidden',
            trans: 'прятать(ся),спрятать(ся)',
            gr: 3,
            grDesc: '- en'
        },
        forbid: {
            ps: 'forbade',
            pp: 'forbidden',
            trans: 'запрещать,запретить',
            gr: 3,
            grDesc: '- en'
        },
        take: {
            ps: 'took',
            pp: 'taken',
            trans: 'брать,взять',
            gr: 3,
            grDesc: '- en'
        },
        retake: {
            ps: 'retook',
            pp: 'retaken',
            trans: 'забирать',
            gr: 3,
            grDesc: '- en'
        },
        overtake: {
            ps: 'overtook',
            pp: 'overtaken',
            trans: 'догонять',
            gr: 3,
            grDesc: '- en'
        },
        partake: {
            ps: 'partook',
            pp: 'partaken',
            trans: 'принимать участие',
            gr: 3,
            grDesc: '- en'
        },
        undertake: {
            ps: 'undertook',
            pp: 'undertaken',
            trans: 'предпринять',
            gr: 3,
            grDesc: '- en'
        },
        shake: {
            ps: 'shook',
            pp: 'shaken',
            trans: 'трясти,потрясти',
            gr: 3,
            grDesc: '- en'
        },
        mistake: {
            ps: 'mistook',
            pp: 'mistaken',
            trans: 'ошибаться',
            gr: 3,
            grDesc: '- en'
        },
        write: {
            ps: 'wrote',
            pp: 'written',
            trans: 'писать,написать',
            gr: 3,
            grDesc: '- en'
        },
        rewrite: {
            ps: 'rewrote',
            pp: 'rewritten',
            trans: 'пере(за)писать',
            gr: 3,
            grDesc: '- en'
        },
        underwrite: {
            ps: 'underwrote',
            pp: 'underwritten',
            trans: 'подписыва(ть)ся',
            gr: 3,
            grDesc: '- en'
        },
        drive: {
            ps: 'drove',
            pp: 'driven',
            trans: 'водить,вести машину,ехать,ездить',
            gr: 3,
            grDesc: '- en'
        },
        ride: {
            ps: 'rode',
            pp: 'ridden',
            trans: 'ехать,ездить,кататься на велосипеде или верхом',
            gr: 3,
            grDesc: '- en'
        },
        override: {
            ps: 'overrode',
            pp: 'overridden',
            trans: 'твергать,отклонять',
            gr: 3,
            grDesc: '- en'
        },
        rise: {
            ps: 'rose',
            pp: 'risen',
            trans: 'подниматься,подняться',
            gr: 3,
            grDesc: '- en'
        },
        chide: {
            ps: 'chid,chided',
            pp: 'chid,chided,chidden',
            trans: 'бранить',
            gr: 3,
            grDesc: '- en'
        },
        grave: {
            ps: 'graved',
            pp: 'graved,graven',
            trans: 'гравировать',
            gr: 3,
            grDesc: '- en'
        },
        lade: {
            ps: 'laded',
            pp: 'laded,laden',
            trans: 'грузить',
            gr: 3,
            grDesc: '- en'
        },
        prove: {
            ps: 'proved',
            pp: 'proved,proven',
            trans: 'доказывать,оказаться',
            gr: 3,
            grDesc: '- en'
        },
        shave: {
            ps: 'shaved',
            pp: 'shaved,shaven',
            trans: 'брить(ся)',
            gr: 3,
            grDesc: '- en'
        },
        shrive: {
            ps: 'shrived,shrove',
            pp: 'shrived,shriven',
            trans: 'исповедовать',
            gr: 3,
            grDesc: '- en'
        },
        swell: {
            ps: 'swelled',
            pp: 'swelled,swollen',
            trans: 'разбухать',
            gr: 3,
            grDesc: '- en'
        },
        thrive: {
            ps: 'trived,throve',
            pp: 'trived,thriven',
            trans: 'процветать',
            gr: 3,
            grDesc: '- en'
        },
        weave: {
            ps: 'weaved,wove',
            pp: 'weaved,woven',
            trans: 'ткать',
            gr: 3,
            grDesc: '- en'
        },
        browbeat: {
            ps: 'browbeat',
            pp: 'browbeaten',
            trans: 'запугивать',
            gr: 3,
            grDesc: '- en'
        },
        arise: {
            ps: 'arose',
            pp: 'arisen',
            trans: 'подняться,возникнуть',
            gr: 3,
            grDesc: '- en'
        },
        befall: {
            ps: 'befell',
            pp: 'befallen',
            trans: 'случиться',
            gr: 3,
            grDesc: '- en'
        },
        beget: {
            ps: 'begot,begat',
            pp: 'begotten',
            trans: 'порождать',
            gr: 3,
            grDesc: '- en'
        },
        bestride: {
            ps: 'bestrode',
            pp: 'bestridden',
            trans: 'садиться,сидеть верхом',
            gr: 3,
            grDesc: '- en'
        },
        betake: {
            ps: 'betook',
            pp: 'betaken',
            trans: 'приниматься,отправляться',
            gr: 3,
            grDesc: '- en'
        },
        bid: {
            ps: 'bad,bade,bid',
            pp: 'bid,bidden',
            trans: 'велеть,просить',
            gr: 3,
            grDesc: '- en'
        },
        fall: {
            ps: 'fell',
            pp: 'fallen',
            trans: 'падать',
            gr: 3,
            grDesc: '- en'
        },
        forsake: {
            ps: 'forsook',
            pp: 'forsaken',
            trans: 'покидать',
            gr: 3,
            grDesc: '- en'
        },
        interweave: {
            ps: 'interwove',
            pp: 'interwoven',
            trans: 'воткать',
            gr: 3,
            grDesc: '- en'
        },
        rive: {
            ps: 'rived',
            pp: 'riven',
            trans: 'расщеплять',
            gr: 3,
            grDesc: '- en'
        },
        smite: {
            ps: 'smote',
            pp: 'smitten',
            trans: 'ударять,разбивать',
            gr: 3,
            grDesc: '- en'
        },
        stride: {
            ps: 'strode',
            pp: 'stridden',
            trans: 'шагать,наносить удар',
            gr: 3,
            grDesc: '- en'
        },
        strive: {
            ps: 'strove',
            pp: 'striven',
            trans: 'стараться',
            gr: 3,
            grDesc: '- en'
        },
        tread: {
            ps: 'trod',
            pp: 'trod,trodden',
            trans: 'ступать',
            gr: 3,
            grDesc: '- en'
        },
        know: {
            ps: 'knew',
            pp: 'known',
            trans: 'знать',
            gr: 4,
            grDesc: '- n'
        },
        fly: {
            ps: 'flew',
            pp: 'flown',
            trans: 'летать,лететь',
            gr: 4,
            grDesc: '- n'
        },
        overfly: {
            ps: 'overflew',
            pp: 'overflown',
            trans: 'перелетать',
            gr: 4,
            grDesc: '- n'
        },
        blow: {
            ps: 'blew',
            pp: 'blown',
            trans: 'дуть,подуть',
            gr: 4,
            grDesc: '- n'
        },
        grow: {
            ps: 'grew',
            pp: 'grown',
            trans: 'расти,вырасти',
            gr: 4,
            grDesc: '- n'
        },
        throw: {
            ps: 'threw',
            pp: 'thrown',
            trans: 'бросать(ся),бросить(ся)',
            gr: 4,
            grDesc: '- n'
        },
        overthrow: {
            ps: 'overthrew',
            pp: 'overthrown',
            trans: 'свергать',
            gr: 4,
            grDesc: '- n'
        },
        wear: {
            ps: 'wore',
            pp: 'worn',
            trans: 'носить (одежду обувь)',
            gr: 4,
            grDesc: '- n'
        },
        swear: {
            ps: 'swore',
            pp: 'sworn',
            trans: 'клясться,присягнуть',
            gr: 4,
            grDesc: '- n'
        },
        forswear: {
            ps: 'forswore',
            pp: 'forsworn',
            trans: 'отрекаться',
            gr: 4,
            grDesc: '- n'
        },
        tear: {
            ps: 'tore',
            pp: 'torn',
            trans: 'рвать(ся),порвать(ся)',
            gr: 4,
            grDesc: '- n'
        },
        forbear: {
            ps: 'forbore',
            pp: 'forborne',
            trans: 'воздерживаться',
            gr: 4,
            grDesc: '- n'
        },
        bear: {
            ps: 'bore',
            pp: 'born,borne',
            trans: 'родить',
            gr: 4,
            grDesc: '- n'
        },
        draw: {
            ps: 'drew',
            pp: 'drawn',
            trans: 'рисовать,тащить',
            gr: 4,
            grDesc: '- n'
        },
        overdraw: {
            ps: 'overdrew',
            pp: 'overdrawn',
            trans: 'превышать',
            gr: 4,
            grDesc: '- n'
        },
        withdraw: {
            ps: 'withdrew',
            pp: 'withdrawn',
            trans: 'взять назад,отозвать',
            gr: 4,
            grDesc: '- n'
        },
        outgrow: {
            ps: 'outgrew',
            pp: 'outgrown',
            trans: 'вырастать из',
            gr: 4,
            grDesc: '- n'
        },
        slay: {
            ps: 'slew',
            pp: 'slain',
            trans: 'убивать',
            gr: 4,
            grDesc: '- n'
        },
        hew: {
            ps: 'hewed',
            pp: 'hewed,hewn',
            trans: 'рубить,тесать',
            gr: 4,
            grDesc: '- n'
        },
        saw: {
            ps: 'sawed',
            pp: 'sawed,sawn',
            trans: 'пилить',
            gr: 4,
            grDesc: '- n'
        },
        sew: {
            ps: 'sewed',
            pp: 'sewed,sewn',
            trans: 'шить',
            gr: 4,
            grDesc: '- n'
        },
        shear: {
            ps: 'sheared',
            pp: 'sheared,shorn',
            trans: 'стричь',
            gr: 4,
            grDesc: '- n'
        },
        sow: {
            ps: 'sowed',
            pp: 'sowed,sown',
            trans: '(по)сеять',
            gr: 4,
            grDesc: '- n'
        },
        strew: {
            ps: 'strewed',
            pp: 'strewed,strewn',
            trans: 'усеять,устлать',
            gr: 4,
            grDesc: '- n'
        },
        begin: {
            ps: 'began',
            pp: 'begun',
            trans: 'начинать(ся),начать(ся)',
            gr: 5,
            grDesc: 'i - a - u'
        },
        sing: {
            ps: 'sang',
            pp: 'sung',
            trans: 'петь,спеть',
            gr: 5,
            grDesc: 'i - a - u'
        },
        ring: {
            ps: 'rang',
            pp: 'rung',
            trans: 'звонить,позвонить',
            gr: 5,
            grDesc: 'i - a - u'
        },
        spring: {
            ps: 'sprang',
            pp: 'sprung',
            trans: 'вскочить,возникнуть',
            gr: 5,
            grDesc: 'i - a - u'
        },
        drink: {
            ps: 'drank',
            pp: 'drunk',
            trans: 'пить',
            gr: 5,
            grDesc: 'i - a - u'
        },
        swim: {
            ps: 'swam',
            pp: 'swum',
            trans: 'плыть,плавать',
            gr: 5,
            grDesc: 'i - a - u'
        },
        run: {
            ps: 'ran',
            pp: 'run',
            trans: 'бежать,бегать',
            gr: 6,
            grDesc: 'I = III'
        },
        outrun: {
            ps: 'outran',
            pp: 'outrun',
            trans: 'перегонять,опережать',
            gr: 6,
            grDesc: 'I = III'
        },
        overrun: {
            ps: 'overran',
            pp: 'overrun',
            trans: 'переливаться через край',
            gr: 6,
            grDesc: 'I = III'
        },
        rerun: {
            ps: 'reran',
            pp: 'rerun',
            trans: 'выполнять повторно',
            gr: 6,
            grDesc: 'I = III'
        },
        come: {
            ps: 'came',
            pp: 'come',
            trans: 'приходить,прийти',
            gr: 6,
            grDesc: 'I = III'
        },
        become: {
            ps: 'became',
            pp: 'become',
            trans: 'становиться,стать',
            gr: 6,
            grDesc: 'I = III'
        },
        show: {
            ps: 'showed',
            pp: 'shown',
            trans: 'показывать,показать',
            gr: 6,
            grDesc: 'I = III'
        },
        forget: {
            ps: 'forgot',
            pp: 'forgotten',
            trans: 'забывать',
            gr: 6,
            grDesc: 'I = III'
        },
        countersink: {
            ps: 'countersank',
            pp: 'countersunk',
            trans: 'зенковать',
            gr: 6,
            grDesc: 'I = III'
        },
        sink: {
            ps: 'sank',
            pp: 'sunk',
            trans: 'опускаться,погружаться,тонуть',
            gr: 6,
            grDesc: 'I = III'
        },
        stink: {
            ps: 'stank,stunk',
            pp: 'stunk',
            trans: 'вонять',
            gr: 6,
            grDesc: 'I = III'
        },
        lay: {
            ps: 'laid',
            pp: 'laid',
            trans: 'класть,положить кого-то или что-то куда-то  ',
            gr: 7,
            grDesc: 'Трудные'
        },
        lie: {
            ps: 'lay',
            pp: 'lain',
            trans: 'лежать где-то',
            gr: 7,
            grDesc: 'Трудные'
        },
        underlie: {
            ps: 'underlay',
            pp: 'underlain',
            trans: 'лежать в основе ',
            gr: 7,
            grDesc: 'Трудные'
        },
        lie: {
            ps: 'lied',
            pp: 'laid',
            trans: 'врать,говорить неправду  ',
            gr: 7,
            grDesc: 'Трудные'
        },
        raise: {
            ps: 'raised',
            pp: 'raised',
            trans: 'поднимать,поднять что-то,кого-то  ',
            gr: 7,
            grDesc: 'Трудные'
        },
        rise: {
            ps: 'rose',
            pp: 'risen',
            trans: 'вставать,встать,подниматься,подняться  ',
            gr: 7,
            grDesc: 'Трудные'
        }
    };