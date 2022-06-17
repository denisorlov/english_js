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