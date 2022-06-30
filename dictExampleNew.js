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