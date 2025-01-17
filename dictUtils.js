// DICTIONARY Utils
// dependencies: dict71700.js, trans.js, utils.js interface.js
dictUtils = {
    WORD_CLASS: "word",
    checkFoo: function(){
        return window.dictFind instanceof Function
            && window.dictFindSmart instanceof Function;
    },
    hint: function (el){
        var w=dictFind(dictSmall, el.innerHTML);
        if(w!=null) el.title = w.fw+': '+w.a;
    },
    openDictWin: function(word, top, left, width,height){
        let newWin = window.open(
            "dict.html#"+encodeURIComponent(word),
            "DictWin",
            "top="+(top||0)+",left="+(left||window.screen.width-700)+
            ",width="+(width||700)+
            ",height="+(height||window.screen.height)+
            ",resizable=yes,scrollbars=yes"
        );
        // setTimeout(function(){
        // 	newWin.blur();
        // 	window.focus();
        // }, 2000);
    },
    wrapInClass: function(en, className){
        if(!dictUtils.checkFoo()) return en;

        let w = (en+"").split(/\b/ig);
        for(let i=0;i<w.length;i++){
            if(/^[a-z]{2,}$/i.test(w[i])){//'-
                w[i] = '<span class="'+className+'">'+w[i]+'</span>';//
            }
        }
        return w.join('');
    },
    initClass: function(className){
        if(!dictUtils.checkFoo()) return;

        let ind, ws = document.getElementsByClassName(className);
        for(ind in ws){
            let el = ws[ind];
            el.onmouseover = (function(this_){ return function(){
                dictUtils.hint(this_);
            }}(el));
            el.onclick = (function(this_){ return function(){
                let word = this_.innerHTML.toLowerCase(),
                    initAResult = dictFindSmart(word);
                if(initAResult==null) dictFindSmart(this_.innerHTML); // no LowerCase
                if(initAResult==null) return;
                dictUtils.openDictWin(initAResult.word);
            }}(el));
        }
    }
};