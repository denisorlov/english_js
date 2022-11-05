/*
временный словарь примеров, для удобства пополнения основного dictExample
формат
"word":[{"en":"word", "ru":"слово", "enex":"word_word", "ruex":"слово_слово"}]

// https://dictionary.cambridge.org/dictionary/english-russian/elapse

var all = [], enExAr = [],
    word = document.querySelector('span.hw.dhw').innerText;
document.querySelectorAll("div.pr.dsense").forEach((it)=>{
    var res = {"en": word, "ru":"TODO", "enex":"", "ruex":"TODO"},
    mean = it.querySelector("div.def.ddef_d.db").innerText;
    it.querySelectorAll("span.trans.dtrans.dtrans-se").forEach((it, idx)=>{
        //console.log(it.innerText);
        if(idx==0) res.ru = it.innerText;
    });
    it.querySelectorAll("span.eg.deg").forEach((it, idx)=>{
        //console.log(it.innerText);
        if(idx==0) res.enex = it.innerText;
    });
    if(res.enex=='') res.enex = mean;
    enExAr.push(res.enex);

    it.querySelectorAll("div.xref.synonyms span.x-h.dx-h").forEach((it)=>console.log(it.innerText));
    all.push(JSON.stringify(res));
});
console.log(enExAr.join('.\n'));
console.log('"'+word+'":['+all.join(',\n\t')+'],');
*/
// check TODO
var dictExNew = {
	"shamble":[{"en":"shamble","ru":"волочить ноги, брести","enex":"Sick patients shambled along the hospital corridors.","ruex":"Больные брели по больничным коридорам."}],
	"throb":[{"en":"throb","ru":"сильно болеть, пульсировать ","enex":"My head was throbbing.","ruex":"Моя голова пульсировала."}],
	"reprieve":[{"en":"reprieve","ru":"передышка","enex":"He had felt a sense of relief, almost of reprieve.","ruex":"Он почувствовал чувство облегчения, почти передышки."}],
	"undulate":[{"en":"undulate","ru":"быть волнистым, холмистым ","enex":"The road undulates for five miles before a steep climb.","ruex":"Дорога извивается на протяжении пяти миль перед крутым подъемом."}],
	"raven":[{"en":"raven","ru":"ворон ","enex":"a large, black bird","ruex":"большая, черная птица"}],
	"swarthy":[{"en":"swarthy","ru":"смуглый ","enex":"having dark skin","ruex":"с темной кожей"}],
	"emanate":[{"en":"emanate","ru":"исходить, раздаваться ","enex":"Strange noises emanated from the room next door.","ruex":"Из соседней комнаты доносились странные звуки."}],
	"writ":[{"en":"writ","ru":"судебный приказ ","enex":"a legal document that orders someone to do something","ruex":"юридический документ, предписывающий кому-либо что-либо сделать"}],
	"abhorrent":[{"en":"abhorrent","ru":"отвратительный, гнусный, мерзкий","enex":"an abhorrent crime","ruex":"отвратительное преступление"}],
	"pail":[{"en":"pail","ru":"ведро ","enex":"a container with an open top and a handle used for carrying liquids","ruex":"емкость с открытым верхом и ручкой для переноски жидкостей"}],
	"pensive":[{"en":"pensive","ru":"задумчивый, печальный","enex":"She became withdrawn and pensive, hardly speaking to anyone.","ruex":"Она стала замкнутой и задумчивой, почти ни с кем не разговаривая."}],
	"swivel":[{"en":"swivel","ru":"вращать(ся) ","enex":"to turn round, or to make something turn round","ruex":"повернуться или заставить что-то повернуться"}],
	"tingle":[{"en":"tingle","ru":"покалывать, онеметь ","enex":"My hands are starting to tingle with the cold.","ruex":"Мои руки начинают покалывать от холода."}],
	"impostor":[{"en":"impostor","ru":"самозванец ","enex":"someone who pretends to be someone else in order to deceive people","ruex":"тот, кто притворяется кем-то другим, чтобы обмануть людей"}],
	"haunt":[{"en":"haunt","ru":"являться, обитать (о привидении)","enex":"a haunted house","ruex":"дом с привидениями"},
	{"en":"haunt","ru":"преследовать, мучить","enex":"He was haunted by memories of the war.","ruex":"Его преследовали воспоминания о войне."},
	{"en":"haunt","ru":"излюбленное место","enex":"Regents Park is one of my favourite haunts in London.","ruex":"Риджентс-парк — одно из моих любимых мест в Лондоне."}],
	"stem":[{"en":"stem","ru":"останавливать ","enex":"The new procedures are intended to stem the flow of drugs into the country.","ruex":"Новые процедуры призваны остановить поток наркотиков в страну."}],
	"dip":[{"en":"dip","ru":"соус","enex":"a blue cheese dip","ruex":"дип из голубого сыра"},
	{"en":"dip","ru":"впадина ","enex":"a sudden dip in the road","ruex":"внезапный провал на дороге"},
	{"en":"dip","ru":"купание ","enex":"Let's have a quick dip in the pool before breakfast.","ruex":"Давай окунемся в бассейн перед завтраком."},
	{"en":"dip","ru":"падать ","enex":"The number of students taking sciences has dipped sharply.","ruex":"Резко сократилось количество студентов, изучающих науки."}],
	"dangle":[{"en":"dangle","ru":"свободно свисать ","enex":"Electrical wires were dangling from the ceiling.","ruex":"С потолка свисали электрические провода."},
	{"en":"dangle","ru":"манить, соблазнять","enex":"They dangled the possibility of a job in Paris in front of him.","ruex":"Они предлагали ему работу в Париже."}],
	"collar":[{"en":"collar","ru":"останавливать, поймать (чтобы поговорить)","enex":"On my way to the meeting, Jack collared me about his new proposal.","ruex":"По дороге на встречу Джек рассказал мне о своем новом предложении."}],
	"query":[{"en":"query","ru":"вопрос ","enex":"His job is to answer telephone queries about airline schedules.","ruex":"Его работа заключается в том, чтобы отвечать на телефонные вопросы о расписании авиакомпаний."},
	{"en":"query","ru":"подвергать сомнению ","enex":"A few students have queried whether exam marks were added up correctly.","ruex":"Несколько студентов поинтересовались, правильно ли суммированы экзаменационные оценки."}],
	"perch":[{"en":"perch","ru":"взгромоздить(ся), располагать(ся) высоко на/в/над и т.д.","enex":"The village was perched on the side of a mountain.","ruex":"Деревня располагалась на склоне горы."},
	{"en":"perch","ru":"сидеть на краю чего-либо ","enex":"The children perched on the edges of their seats.","ruex":"Дети присели на края своих кресел."},
	{"en":"perch","ru":"насест, жердочка ","enex":"a place where a bird sits, especially a stick inside a cage","ruex":"место, где сидит птица, особенно палка внутри клетки"}],
	"prickle":[{"en":"prickle","ru":"шип, колючка ","enex":"a sharp point on the surface of some plants or the skin of some animals","ruex":"острие на поверхности некоторых растений или кожи некоторых животных"},
	{"en":"prickle","ru":"покалывать, испытывать покалывание ","enex":"a prickling sensation","ruex":"ощущение покалывания"}],
	"prowl":[{"en":"prowl","ru":"рыскать ","enex":"to prowl the streets","ruex":"бродить по улицам"},
	{"en":"prowl","ru":"охотиться за кем-либо/чем-либо ","enex":"to be hunting for someone or something","ruex":"охотиться за кем-то или чем-то"}],
	"intent":[{"en":"intent","ru":"намерение","enex":"It had not been his intent to hurt anyone.","ruex":"У него не было намерения причинить кому-либо вред."},
	{"en":"intent","ru":"иметь намерение","enex":"She seems intent on winning this year's tennis tournament.","ruex":"Кажется, она намерена выиграть теннисный турнир в этом году."},
	{"en":"intent","ru":"сосредоточенный, пристальный","enex":"She had an intent look on her face.","ruex":"У нее было сосредоточенное выражение лица."}],
	"elide":[{"en":"elide","ru":"не произносить","enex":"The \"t\" of \"acts\" is often elided if someone is speaking quickly.","ruex":"Буква «т» в слове «акты» часто опускается, если кто-то говорит быстро."}],
	"elision":[{"en":"elision","ru":"непроизнесение","enex":"the fact of not pronouncing a particular sound in a word","ruex":"факт непроизнесения определенного звука в слове"}],
	"acrid":[{"en":"acrid","ru":"едкий","enex":"An acrid smell is unpleasant and causes a burning feeling in your throat.","ruex":"Едкий запах неприятен и вызывает чувство жжения в горле."}],
	"acrimonious":[{"en":"acrimonious","ru":"исполненный злобы","enex":"involving a lot of anger, disagreement, and bad feelings","ruex":"содержащий много гнева, разногласий и плохих чувств"}],
	"disconcert":[{"en":"disconcert","ru":"приводить в замешательство, смущать","enex":"She was disconcerted by his questions.","ruex":"Она была сбита с толку его вопросами"}],
	"knuckle":[{"en":"knuckle","ru":"сустав пальца","enex":"one of the parts of the finger where it bends","ruex":"одна из частей пальца, где он сгибается"}],
	"viper":[{"en":"viper","ru":"гадюка","enex":"a small, poisonous snake","ruex":"маленькая ядовитая змея"}],
	"typo":[{"en":"typo","ru":"опечатка","enex":"a small mistake in a text made when it was typed or printed","ruex":"небольшая ошибка в тексте, допущенная при его вводе или распечатке"}],
	"vehemence":[{"en":"vehemence","ru":"страстность, горячность","enex":"the forceful expression of strong feelings:","ruex":"сильное выражение сильных чувств"}],
	"vehement":[{"en":"vehement","ru":"неистовый, страстный","enex":"expressing very strong feelings, or showing great energy or force:","ruex":"выражение очень сильных чувств или демонстрация большой энергии или силы"}],
	"sullen":[{"en":"sullen","ru":"угрюмый, мрачный","enex":"in an unpleasant mood and not smiling or speaking to anyone","ruex":"в неприятном настроении, не улыбается и ни с кем не разговаривает"}],
	"perfunctory":[{"en":"perfunctory","ru":"невнимательный, небрежный","enex":"done quickly, without taking care or interest","ruex":"сделано быстро, без всякой заботы или интереса"}],
	"upholster":[{"en":"upholster","ru":"обивать (мебель)","enex":"to fill a seat, chair, or sofa with a suitable material and cover it with cloth","ruex":"набить сиденье, стул или диван подходящим материалом и накрыть его тканью"}],
	"spatter":[{"en":"spatter","ru":"обрызгать","enex":"to cover someone or something with small drops of liquid","ruex":"покрыть кого-то или что-то маленькими каплями жидкости"}, {"en":"spatter","ru":"опорочить","enex":"to spatter a man's good name","ruex":"опорочить человека"}],
	"cobble":[{"en":"cobble","ru":"булыжник","enex":"a rounded stone used on the surface of an old-fashioned road","ruex":"округлый камень, используемый на поверхности старомодной дороги"}],
	"hulk":[{"en":"hulk","ru":"корпус большого транспорта или оборудования","enex":"the body of an old ship, car, or very large piece of equipment that is broken and no longer used:","ruex":"корпус старого корабля, автомобиля или очень большого оборудования, которое сломано и больше не используется"},
	{"en":"hulk","ru":"громадина, бугай","enex":"a large, awkward person or thing:","ruex":"большой неуклюжий человек или вещь"}],
	"querulous":[{"en":"querulous","ru":"ворчливый","enex":"He became increasingly dissatisfied and querulous in his old age.","ruex":"В старости он становился все более недовольным и ворчливым"}],
	"barrow":[{"en":"barrow","ru":"тачка","enex":"a wheelbarrow - a large, open container for moving things in with a wheel at the front and two handles at the back, used especially in the garden","ruex":"большой открытый контейнер для перемещения вещей с колесом спереди и двумя ручками сзади, особенно используемый в саду"},
	{"en":"barrow","ru":"курган","enex":"a large structure consisting of a pile of soil over a place where people were buried in ancient times","ruex":"большое сооружение, состоящее из кучи земли над местом, где в древние времена хоронили людей"}],
	"viscera":[{"en":"viscera","ru":"внутренности","enex":"the large organs inside the body, including the heart, stomach, lungs, and intestines","ruex":"крупные органы внутри тела, включая сердце, желудок, легкие и кишечник"}],
	"writhe":[{"en":"writhe","ru":"корчиться, извиваться","enex":"She lay on her bed, writhing in agony.","ruex":"Она лежала на своей кровати, корчась в агонии."}],
	"honeycomb":[{"en":"honeycomb","ru":"пчелинные соты","enex":"a wax structure containing many small holes, made by bees to store their honey","ruex":"восковая структура, содержащая множество маленьких отверстий, сделанных пчелами для хранения своего меда"}],
	"sweep":[{"en":"sweep","ru":"проноситься по/в/мимо и т. д.","enex":"She swept past me in the corridor.","ruex":"Она пронеслась мимо меня по коридору."}],
	"whip":[{"en":"whip out | off | away","ru":"быстро принести или забрать что-либо","enex":"She whipped a handkerchief out of her pocket and wiped his face.","ruex":"Она достала из кармана носовой платок и вытерла ему лицо."}],
	"remembrance":[{"en":"remembrance","ru":"память","enex":"They erected a statue in remembrance of him.","ruex":"Они воздвигли статую в память о нем."}],
	"fleck":[{"en":"fleck","ru":"пятнышко, крапинка","enex":"His shirt was covered in flecks of paint.","ruex":"Его рубашка была покрыта пятнами краски."}],
	"cirrus":[{"en":"cirrus","ru":"","enex":"a type of light, feathery cloud that is seen high in the sky","ruex":"разновидность легкого перистого облака, которое можно увидеть высоко в небе"}],
	"parch":[{"en":"parch","ru":"иссушать, выжигать","enex":"The fierce sun parched the soil.","ruex":"Яростное солнце выжгло почву."}],
	"fathom":[{"en":"fathom","ru":"понимать, постигать","enex":"No one could fathom why she had left so early.","ruex":"Никто не мог понять, почему она ушла так рано."},
	{"en":"fathom","ru":"морская сажень","enex":"a unit for measuring the depth of water, equal to 1.8 metres","ruex":"единица измерения глубины воды, равная 1,8 метрам"}],
	"elapse":[{"en":"elapse","ru":"проходить (о времени)","enex":"Two years have elapsed since the attack","ruex":"С момента нападения прошло два года"}],
	"wry":[{"en":"wry", "ru":"иронический, насмешливый", "enex":"a wry smile", "ruex":"кривая улыбка"}],
	"louver":[{"en":"louver","ru":"","enex":"a door or window with flat sloping pieces of wood, metal, or glass across it to allow light and air to come in while keeping rain out","ruex":"дверь или окно с плоскими наклонными кусками дерева, металла или стекла поперек, чтобы пропускать свет и воздух, защищая от дождя"}]
};

(function(){
	for(k in dictExNew) 
		if(dictExample[k]==null){
			dictExample[k] = dictExNew[k];
		}else{
			dictExNew[k].forEach((it)=>{
				dictExample[k].push(it); // добавление вариантов к сущ-м
			});
		}
}());