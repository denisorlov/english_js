function appendScript(scriptSrc, onLoad, onError){
	var script = document.createElement('script');
	script.src = scriptSrc;//'http://yandex.st/jquery/1.7.2/jquery.js';
	if(typeof onLoad == 'function'){
		script.onload = onLoad;
	}
	if(typeof onError == 'function'){
		script.onerror = onError;
	}
	document.getElementsByTagName('head')[0].appendChild(script);
}

appendScript('http://denisorlovmusic.narod.ru/english4040/trans.js', function(){
	appendScript('http://denisorlovmusic.narod.ru/english4040/dict71700.js', function(){
			appendScript('http://denisorlovmusic.narod.ru/english4040/utils.js', function(){
					appendScript('http://denisorlovmusic.narod.ru/english4040/interface.js')
				}
			)
		}
	)
}, function(){alert('Извините, скрипт работать не будет.')});

var doEnDict = {};

doEnDict.wrapAll = function(className, rootElement){
    className = className || 'doEnDictWord';
	rootElement = rootElement || document;

    var all = rootElement.getElementsByTagName('*');
    var obj = {}, k,j;
    for(k in all){
        if(/(^|>)([^<>]+)($|<)/.test(all[k].innerHTML)){
            if(all[k].tagName in {'H1':1,'H2':1,'H3':1,'H4':1,'H5':1,'H6':1,'A':1,'DIV':1,'SPAN':1,'P':1,'LI':1,'PRE':1})
                obj[k] = all[k]
        }
    }/**/

    for(j in obj){
        if((new RegExp(className)).test(obj[j].innerHTML)) continue;

        obj[j].innerHTML = obj[j].innerHTML.replace(/(^|>)([^<>]+)($|<)/ig,
            function(str, p1, p2, p3,offset, s){
                var w = p2.split(/(&[a-z]+;|\b)/ig),
                    wordClass = "word";
                for(var i=0;i<w.length;i++){
                    if(/^[a-z'-]+$/i.test(w[i])){//
                        w[i] = '<span class="'+className+'">'+w[i]+'</span>';//
                    }
                }
                return p1+w.join('')+p3;
        });
    }
}

doEnDict.init = function(className){
    className = className || 'doEnDictWord';
    var els = document.getElementsByClassName(className), i;
    for(i in els){
        var el = els[i];
        el.onmouseover = (function(this_){ return function(){
            doEnDict.hint(this_);
        }}(el));
        el.ondblclick = (function(this_){ return function(){
            doEnDict.winTr(this_.innerHTML);
        }}(el));
    }

}

doEnDict.winTr = function (word, oWord){
    var initAResult = dictFindSmart(word);
    if(initAResult==null) return;
	
	openDictWin(initAResult.word);
}

doEnDict.hint = function (el){
    if(typeof dictFind == "undefined"){
        el.title = 'loading interface.js...';
        return;
    }
    var w=dictFind(dictSmall, el.innerHTML);
    if(w!=null) el.title = w.fw+': '+w.a;
}

//doEnDict.initA_ = function (word, navigation){
//    if( !window.dict || ! dict[ word ] ) return null;
//    // если не навигация по истории и не повтор рядом стоящих то вставляем в историю
//    if(!navigation && dh.current()!=word && dh.getNext()!=word) {
//        dh.insert(word);
//    }
//	var tr = getTranscription(word);
//    return {word:word, a:dict[ word ].a, as:getA(word, true), tr: tr!=word ? tr : ''};
//}