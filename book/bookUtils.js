var BOOK = {},// глобальный набор книг
    BOOK_FILTER = {},// глобальный фильтр книг
    BOOK_CURRENT = null,
    BOOK_CURRENT_KEY=null,
    BOOK_CURRENT_ANCHOR=null,
    BOOK_WORDS = {},//ИЗУЧАЕМЫЕ СЛОВА!
    BOOK_COOKIE_EXPIRES = 3600*24*365, // время хранения куки в секундах
    BOOK_ROOT="book/";

function buildBookMenu(filter){
    filter = filter || {};
    var lis="",k;
    for(k in bookMenu){
        var book = bookMenu[k], j, filtered = false;
        for(j in filter){
            if(filter[j]!='' && filter[j]!=null && book[j]!=undefined && filter[j]!=book[j] ){
                filtered = true;
                break;
            }
        }
        if(!filtered)
            lis+='<li onclick="showBook(\''+k+'\')"><h3>'+book.title+'</h3>'+book.author+', '+book.genre+'</lu>'
    }

    return '<ul class="bookMenuUl">'+lis+'</ul>';
}

function getFilterKeys(key){
    var arr = {};
    for(k in bookMenu){
        arr[bookMenu[k][key]]=bookMenu[k][key];//push(bookMenu[k][key])
    }
    return arr;
};

function loadBook(key, anchor){
    outInfo('Загрузка книги...');

    var book = bookMenu[key],
        script = document.createElement('script');
    script.src = BOOK_ROOT+book.src;
    script.onload = function(){ outInfo('Книга загружена', 2000); showBook(key, anchor)};
    script.onerror = function(){ outInfo('Не удалось загрузить книгу')};
    document.getElementsByTagName('head')[0].appendChild(script);
}

function showBook(key, anchor){
//    if(objLength(BOOK_WORDS)>3){
//        if(!confirm('Словарь изучаемых слов данной книги будет очищен.\nПродолжить?')) return;
//    }
    if(BOOK[key] == undefined) {
        loadBook(key, anchor)
        return;
    }
    BOOK_CURRENT_KEY = key;
    BOOK_CURRENT = BOOK[key];
    cookieLib.set('BOOK_CURRENT_KEY', BOOK_CURRENT_KEY, BOOK_COOKIE_EXPIRES);
    cookieLib.set('BOOK_CURRENT_TITLE', bookMenu[key].title, BOOK_COOKIE_EXPIRES);

    //глобальная функция для переопределения разными книгами,
    isTitle = BOOK_CURRENT.utils!=undefined && typeof BOOK_CURRENT.utils.isTitle=='function'
        ? BOOK_CURRENT.utils.isTitle //
        : function (row){ //default-ное поведение
            var en = row.en, ru  = row.ru;
            return /^(Chapter)/i.test(en);
        };

    var ind, trs="", cont="", rowCount=0;
    for(ind in BOOK_CURRENT){
        if(ind=='utils') continue;

        var isTitle_ = false,
            en = BOOK_CURRENT[ind].en+"", ru = BOOK_CURRENT[ind].ru+"";
        if(isTitle(BOOK_CURRENT[ind])){
            cont+='<li><a href="javascript:void(0);" onclick="scroll_To(\'#part_'+ind+'\')">'+en+' ( '+ru+' )</a></li>';
            isTitle_ = true;
        }

        if(en.length<ru.length){
            en = longing(en,  ru);
        }else
        if(ru.length<en.length){
            ru = longing(ru,  en);
        }

        var w = en.split(/\b/ig),
            wordClass = "word", plBtnClass = "play_btn";
        for(var i=0;i<w.length;i++){
            if(/^[a-z'-]+$/i.test(w[i])){// onmouseover="hint(this)" onclick="tr(this.innerHTML, '+ind+')"
                w[i] = '<span class="'+wordClass+'">'+w[i]+'</span>';//
            }
        }
        en = w.join('');

        en = en.replace(/  /g, ' &nbsp;');
        ru = ru.replace(/  /g, ' &nbsp;');

        trs+='<tr>'+
            '<td class="en" id="part_'+ind+'">'+'<a name="part_'+ind+'"></a>'+
                en+'</td>'+
            '<td class="ru"><div class="wrap_ru">'+
                ru+
                '<div class="rowCount">'+(++rowCount%5==0? rowCount :'')+
                    '<button class="'+plBtnClass+'" id="pbtn_'+ind+'">&#9654;</button>'+
                '</div>'+
            '</div></td>'+
        '</tr>';
    }

    getElem('bookDiv').innerHTML = '<pre><table class="bookTable"><tbody>'+trs+'</tbody></table></pre>';
    getElem('bookContentDiv').innerHTML = cont=="" ? "" : '<ul class="bookContentUl">'+cont+'</ul>' ;

    var ws = document.getElementsByClassName(wordClass);
    for(ind in ws){
        var el = ws[ind];
        if(el.parentNode!=undefined && el.parentNode.id!=undefined){
            var ind_ = el.parentNode.id.split('_')[1];
            el.onmouseover = (function(this_, ind_){ return function(){
                hint(this_);
                setBOOK_CURRENT_ANCHOR('#part_'+ind_);
            }}(el, ind_));
            el.onclick = (function(this_, ind_){ return function(){
                tr(this_.innerHTML.toLowerCase(), ind_);
                setBOOK_CURRENT_ANCHOR('#part_'+ind_);
            }}(el, ind_));
        }
    }

    var pbs = document.getElementsByClassName(plBtnClass);
    for(ind in pbs){
        var pb = pbs[ind];
        pb.onclick = (function(this_){ return function(){
            var ind = this_.id.split('_')[1];
            openGooTr(BOOK_CURRENT[ind].en);
        }}(pb));
    }

    if(anchor)
        scroll_To(anchor);
    else
        scroll_To('#bookContentHead');
}

function hint(el){
 var w=dictFind(dictSmall, el.innerHTML);
 if(w!=null) el.title = w.fw+': '+w.a;
}

function tr(word, ind){
    var infoWrap = jQuery('#infoWrap');
    if(!getElem('noCloseInfoByTextClick').checked && infoWrap.is(':visible')){
        infoWrapHide();
        return;
    }

    var oWord = word;// оригинальное слово
//    var dfRes=dictFind(dict, word), initAResult=null;
//    if(dfRes!=null){
//        word = dfRes.fw;
//        initAResult = initA(word);
//    }else{// отрубаем посл. букву
//        if(word = myprompt(word+' не найдено.\nНайти в cловаре:', word.slice(0,-1) ), word!=null && word!='')
//            tr(word, ind, oWord);
//        return;
//    }
    var initAResult = dictFindSmart(word);
    if(initAResult==null) return;

    addBOOK_WORDS(oWord, ind, initAResult);

    var openDict = getElem('selectOnTextClickOpenDict').value;
    if(openDict==""){
        showInitARes(initAResult);
        infoWrapShow();
    }else
    if(openDict=="inNewWin"){
        openDictWin(initAResult.word);
    }else
    if(openDict=="inHint"){
        openBigHint(initAResult.word+": "+initAResult.as);
    }

    if(getElem('chboxAutoPlayWord').checked){
        playWord( initAResult.word )
    }

    //document.location.href='#bw'+key;
}

function openBigHint(str){
    var event = event || window.event,
        ex = event.clientX, ey = event.clientY,
        cw = document.documentElement.clientWidth,
        ch = document.documentElement.clientHeight,
        bigHint = getElem('bigHint');

    bigHint.innerHTML = str;
    bigHint.style.width = null;
    bigHint.style.height = null;
    bigHint.style.display = 'block';
    bigHint.style.visibility = 'hidden';
    var ow = bigHint.offsetWidth, oh = bigHint.offsetHeight,
        leftPr = ex+ow-cw, bottomPr = ey+oh-ch;// выступы слева и вниз

    bigHint.style.left =ex -(ex>cw/2 && ow>cw-ex ? (leftPr>0 ? leftPr : 0) : 0);
    bigHint.style.top = ey -(ey>ch/2 && oh>ch-ey ? oh : 0);

    bigHint.style.visibility = 'visible';
}

function addBOOK_WORDS(oWord, ind, initAResult){
    var key = initAResult.word+ind, w;
    if(!(key in BOOK_WORDS)){
        BOOK_WORDS[key] = initAResult;
        var en = BOOK_CURRENT[ind].en, ru = BOOK_CURRENT[ind].ru;
        var el = document.createElement('div');
        el.innerHTML = '<hr/>'+'<a name="bw'+key+'"></a>'+
            '<span class="bwA">'+
            wrapDictLink(initAResult.word)+': '+
            ( (w=dictGet(dictSmall, initAResult.word)) ? w.a :initAResult.a)+
            '</span>'+
            '<div id="bwEn'+key+'" onclick="toggleBW(\''+key+'\')">'+
            en.replace(oWord,'<b class="origin">'+oWord+'</b>')+'</div>'+
            '<div id="bwRu'+key+'" onclick="toggleBW(\''+key+'\')" style="display:none">'+ru+'</div>';//+'<br/>'+initAResult.a;
        var parentElem = getElem('bookWordsDiv');
        parentElem.insertBefore(el, parentElem.firstChild);
    }
}

/* toggle BOOK_WORDS phrase*/
function toggleBW(key){
    $('#bwEn'+key).toggle(); $('#bwRu'+key).toggle();
}

function openGooTr(enText, top, left, width,height){
    var newWin = window.open(
        "https://translate.google.ru/#en/ru/"+encodeURIComponent(enText),
        "GooTrWin",
        "top="+(top||0)+",left="+(left||document.body.offsetWidth)+
        ",width="+(width||420)+",height="+(height||500)+
        ",resizable=yes,scrollbars=yes"
    );
    newWin.focus();
}

function longing(short,  long){
    if(!/ +/.test(short)) short+=' ';
    while(short.length<long.length){
        var cnt=1;
        short = short.replace(/ +/g, function(a,b,s){
            return s.length+cnt>long.length ? a : (cnt++,  a+' ');
        });
    }
    return short;
}

function setBOOK_CURRENT_ANCHOR(anchor){
    BOOK_CURRENT_ANCHOR = anchor;
    cookieLib.set('BOOK_CURRENT_ANCHOR', BOOK_CURRENT_ANCHOR, BOOK_COOKIE_EXPIRES);
}

function scroll_To(anchor, dur){
    if($(anchor).length>0){
        $('#allWrap').animate({// document.body
            'scrollTop':   $(anchor).offset().top+$('#allWrap').scrollTop()
        }, dur ? dur : 500);
        setBOOK_CURRENT_ANCHOR(anchor);
    }
}

function scrollInc(){
   if(BOOK_CURRENT_ANCHOR!=null){
       var arr = BOOK_CURRENT_ANCHOR.split('_');
       if(!isNaN(arr[1])){
           scroll_To(arr[0]+'_'+(parseInt(arr[1])+10) );
       }
   }
}
function scrollDec(){
    if(BOOK_CURRENT_ANCHOR!=null){
        var arr = BOOK_CURRENT_ANCHOR.split('_');
        if(!isNaN(arr[1])){
            scroll_To(arr[0]+'_'+(parseInt(arr[1])-10) );
        }
    }
}

/*
 //$('a').remove();
 as = document.getElementsByTagName('a');
 for(var i=as.length-1;i>=0;i--) as[i].parentNode.removeChild(as[i]);

 function toSource( obj, max_recours, onlyOwnProps, tabN ) {
 onlyOwnProps = onlyOwnProps!=undefined ? onlyOwnProps : true ;//только свои свойства
 max_recours = max_recours || 4;// максимальная рекурсия
 tabN = tabN || 2; // отсчитываем табуляцию
 var tabstr = '\t', tab = new Array( tabN ).join(tabstr), tab_1 = new Array( tabN+1 ).join(tabstr);


if( tabN-2 > max_recours ) return '{\n'+ tab_1 +
    'Recursion exceeded maximum value '+max_recours+'(second parameter of function)...\n'+tab+
    '}';

var source = '{\n';
for ( var i in obj ) {
    if ( obj.hasOwnProperty( i ) || !onlyOwnProps ) {
        var k = '\'' + i.replace(/'/g, "\\'") +'\'';
        if( typeof obj[i]==='object' && obj[i]!=null )
            source += tab_1 + k + ': ' + toSource( obj[i], max_recours, onlyOwnProps, tabN+1 ) + ',\n';
        else
            source += tab_1 + k + ': ' +( isNaN(obj[i]) ? '\''+(obj[i].replace(/\\/g, '\\\\').replace(/'/g, "\\'"))+'\'' : obj[i] ) + ',\n';
    }
}
source = source.replace(/,\n$/g, '\n');
return source + tab +'}';
}

obj = {}; str="";
trs = document.getElementsByTagName('tr');
for(var i=0;i<trs.length;i++){
    var tds = trs[i].getElementsByTagName('td');

    var en= tds[0].innerText;
    var ru= tds[1].innerText;
    if(en.length>0 && ru.length>0){
        obj[i] = {en:en,ru:ru};
        str+='\t'+i+'0:'+toSource(obj[i])+',\n';
    }

}
console.log(str)
* */