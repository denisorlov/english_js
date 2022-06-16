/*
временный словарь примеров, для удобства пополнения основного dictExample
формат
"word":[{"en":"word", "ru":"слово", "enex":"word_word", "ruex":"слово_слово"}]
*/
var dictExNew = {
	"wry":[{"en":"wry","ru":"иронический, насмешливый","enex":"a wry smile","ruex":"кривая улыбка"}]
};

(function(){
	for(k in dictExNew) dictExample[k] = dictExNew[k];
}());