Array.prototype._rand = function(){
    return this[ Math.floor(Math.random() * (this.length -1 - 0 + 1)) + 0 ];
}

function tableToArray(text){
    var rowAr = text.split("\n"), colAr,
        res="", row,empt;
    for(var i=0; i<rowAr.length; i++){
        colAr = rowAr[i].split("\t");
        row=""; empt=true;
        for(var j=0; j<colAr.length; j++){
            row+="'"+colAr[j]+"', ";
            if(colAr[j].length>0) empt=false;
        }
        row = row.replace(/, $/g, '');
        res+= empt ? '' : "\t[ "+row+"], ";// строка пустая, добавляем только перенос
        if(i<rowAr.length-1) res+="\r\n";
    }
    res = res.replace(/, $/g, '');
    getElem('out').innerHTML = '<pre>[\r\n'+res+'\r\n]</pre>';
}

function arrayToTable( array ){
    var res='';;
    for(var i=0;i<array.length;i++){
        var ar = array[i];
        for(var j=0;j<ar.length;j++){
            res+=ar[j];
            if( j<ar.length-1 ) res+="\t";
        }
        if( i<array.length-1 ) res+="\r\n";
    }
    getElem('inTextarea').value = res;
}

function tableToObj(text){
    var rowAr = text.split("\n"),
        fields = rowAr[0].split("\t"),
        colAr,res="", row, empty;
    for(var i=1; i<rowAr.length; i++){
        if(!/[\da-zа-я]/i.test(rowAr[i])) continue;
        colAr = rowAr[i].split("\t");
        if( colAr.length<fields.length ) continue; if(colAr[0].length>15) continue;
        
        row= '"'+colAr[0]+'": {'+"\n";
        empty=true;
        for(var j=1; j<fields.length; j++){
            row+= '\t\t"'+fields[j]+'": '+(isNaN(colAr[j]) ? '\''+(colAr[j].replace(/\\/g, '\\\\').replace(/'/g, "\\'"))+'\'' : colAr[j] );
            if(j<fields.length-1) row+=',\n';
            if(colAr[j].length>0) empty=false;
        }
        row +='\n\t}';
        if(i<rowAr.length-1) row+=',\n';
        res+= empty ? '' : '\t'+row;// строка пустая, добавляем только перенос
    }
    res = res.replace(/,\n$/g, '');
    getElem('outTextarea').value = fields[0]+' = {\n'+res+'\n}';

}

function objToTable( obj ){
    var res='', row, head=' ', hd='';
    for(var key in obj){
        var obj2 = obj[ key ];
        row = key;
        for(var key2 in obj2){
            if( head==' ' ) hd+=key2+"\t";
            row+= "\t" + obj2[key2];
        }
        if( head==' ' ) head+="\t" +hd;
        res+= row +"\r\n";
    }

    getElem('inTextarea').value = head+"\r\n"+res;
}


function objFromArrRange(arr, start, end){
    var w, wo={},
        start = start || 0, end = end || arr.length-1;
    for(w=start;w<=end;w++){
        wo[ arr[w] ] = {};
    }
    return wo;
}


function outSchemeButtons(){
   var funcs = SYSTEM.functions,
       panel = getElem('panel');
    panel.innerHTML = '';

   for(var key in funcs){
       var b = document.createElement('input');
       b.type = 'button';
       b.value = funcs[ key ].desc;
       b.title = key+': '+funcs[ key ].desc;
       b.style.cssText = "width: 300px";
       b.onclick = (function(_key){
           return function(e){ pasteTextTo(  'in', _key+' ' ) };
       }(key));
       panel.appendChild(b);
       panel.appendChild(document.createElement('br'));
   };

    for(var i=0;i<SYSTEM.TENSES.length;i++){
        var b = document.createElement('input'), tense = SYSTEM.TENSES[i];
        b.type = 'button';
        b.value = tense;
        b.title = tense;
        b.style.cssText = "width: 150px";
        b.onclick = (function(_tense){
            return function(e){ pasteTextTo(  'in', '\''+_tense+'\'' ) };
        }(tense));
        panel.appendChild(b);
        panel.appendChild(document.createElement('br'));
    }

};//

function pasteTextTo( elem, text ){
    elem = getElem(elem);
    var val = elem.value,
        selStart = elem.selectionStart,
        selEnd = elem.selectionEnd;
    elem.value = val.substring(0, selStart) + text + val.substr(selEnd);
}

//enImagesPanel
var enImagesArr=[],
    enImages = {
        aksess: {
            count: 30,
            inRow: 3,
            w: 220,
            h: 94,
            xSh: 10,
            ySh: 45,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Аксессуары',
            url: 'http://en365.ru/foto/aksess.jpg', iW: 700
        },
        alfavit:{
            'count': 28, total_count: 26,
            'curtH': 50,
            'curtL': 0,
            'curtT': 50,
            'curtW': 30,
            'h': 114,
            'iW': 583,
            'inRow': 4,
            'title': 'Алфавит',
            'url': 'http://begin-english.ru/img/alfavit.jpg',
            'w': 143,
            'xSh': -1,
            'ySh': -3,
            'learned': {
                '27': true,'28': true
            }
        },
        irreg_verb: {
            count: 20, total_count: 120,
            inRow: 4,
            w: 210,
            h: 240,
            xSh: 3,
            ySh: 0,
            curtW: 100,
            curtH: 15,
            curtT: 85,
            curtL: 0,
            title: 'Неправильные глаголы',
            url: 'i/irreg_verb_'+['1','2','3','4','5','6']._rand()+'.jpg',
            iW: 848
        },

        chemical: {
            count: 15,
            inRow: 3,
            w: 220,
            h: 93,
            xSh: 10,
            ySh: 37,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Бытовая химия',
            url: 'http://en365.ru/foto/chemical.jpg', iW: 700
        },
        app: {
            count: 27,
            inRow: 3,
            w: 217,
            h: 93,
            xSh: 15,
            ySh: 45,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Бытовые приборы',
            url: 'http://en365.ru/foto/app.jpg', iW: 700
        },
        houseware: {
            count: 25, total_count: 75,
            inRow: 5,
            w: 113,
            h: 95,
            xSh: 3,
            ySh: 0,
            curtW: 100,
            curtH: 20,
            curtT: 80,
            curtL: 0,
            title: 'Бытовые предметы',
            url: 'i/HODCT'+['01','04','09']._rand()+'B.BMP',
            iW: 570
        },
        sport: {
            count: 36,
            inRow: 3,
            w: 219,
            h: 93,
            xSh: 15,
            ySh: 49,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Виды спорта',
            url: 'http://en365.ru/foto/sport.jpg', iW: 700
        },
        transport: {
            count: 36,
            inRow: 3,
            w: 225,
            h: 96,
            xSh: 15,
            ySh: 42,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Виды транспорта',
            url: 'http://en365.ru/foto/transport.jpg', iW: 700
        },
        geo: {
            count: 24,
            inRow: 3,
            w: 220,
            h: 93,
            xSh: 10,
            ySh: 42,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Географические объекты',
            url: 'http://en365.ru/foto/geo.jpg', iW: 700
        },
        animal: {
            count: 45,
            inRow: 3,
            w: 225,
            h: 97,
            xSh: 15,
            ySh: 45,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Животные',
            url: 'http://en365.ru/foto/animal.jpg', iW: 700
        },
        zodiac: {
            count: 12,
            inRow: 3,
            w: 220,
            h: 95,
            xSh: 15,
            ySh: 49,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Знаки зодиака',
            url: 'http://en365.ru/foto/zodiac.jpg', iW: 700
        },
        office: {
            count: 24,
            inRow: 3,
            w: 218,
            h: 93,
            xSh: 15,
            ySh: 51,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Канцелярские товары',
            url: 'http://en365.ru/foto/office.jpg', iW: 700
        },
        rooms: {
            count: 18,
            inRow: 3,
            w: 218,
            h: 93,
            xSh: 15,
            ySh: 48,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Комнаты',
            url: 'http://en365.ru/foto/rooms.jpg', iW: 700
        },
        cosmetic: {
            count: 18,
            inRow: 3,
            w: 217,
            h: 93,
            xSh: 15,
            ySh: 52,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Косметика и парфюмерия',
            url: 'http://en365.ru/foto/cosmetic.jpg', iW: 700
        },
        materials: {
            count: 15,
            inRow: 3,
            w: 220,
            h: 93,
            xSh: 10,
            ySh: 42,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Материалы',
            url: 'http://en365.ru/foto/materials.jpg', iW: 700
        },
        mebel: {
            count: 27,
            inRow: 3,
            w: 218,
            h: 93,
            xSh: 15,
            ySh: 50,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Мебель',
            url: 'http://en365.ru/foto/mebel.jpg', iW: 700
        },
        places: {
            count: 27,
            inRow: 3,
            w: 218,
            h: 93,
            xSh: 15,
            ySh: 46,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Места отдыха и развлечений',
            url: 'http://en365.ru/foto/places.jpg', iW: 700
        },
        places2: {
            count: 25, total_count: 50,
            inRow: 5,
            w: 113,
            h: 95,
            xSh: 3,
            ySh: 0,
            curtW: 100,
            curtH: 20,
            curtT: 80,
            curtL: 0,
            title: 'Места 2',
            url: 'i/PTDCT'+['01B.BMP','06B.BMP']._rand(),
            iW: 570
        },
        metals: {
            count: 21,
            inRow: 3,
            w: 223,
            h: 95,
            xSh: 15,
            ySh: 50,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Металлы и сплавы',
            url: 'http://en365.ru/foto/metals.jpg', iW: 700
        },
        vegetables: {
            count: 27,
            inRow: 3,
            w: 218,
            h: 93,
            xSh: 15,
            ySh: 48,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Овощи',
            url: 'http://en365.ru/foto/vegetables.jpg', iW: 700
        },
        clothes: {
            count: 33,
            inRow: 3,
            w: 222,
            h: 95,
            xSh: 15,
            ySh: 40,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Одежда',
            url: 'http://en365.ru/foto/clothes.jpg', iW: 700
        },
        clothes2: {
            count: 25,total_count: 50,
            inRow: 5,
            w: 113,
            h: 95,
            xSh: 3,
            ySh: 0,
            curtW: 100,
            curtH: 20,
            curtT: 80,
            curtL: 0,
            title: 'Одежда 2',
            url: 'i/PCDCT'+['01B.BMP','06B.BMP']._rand(),
            iW: 570
        },
        posuda: {
            count: 27,
            inRow: 3,
            w: 218,
            h: 93,
            xSh: 12,
            ySh: 49,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Посуда',
            url: 'http://en365.ru/foto/posuda.jpg', iW: 700
        },
        nature: {
            count: 27,
            inRow: 3,
            w: 218,
            h: 93,
            xSh: 15,
            ySh: 55,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Природные явления',
            url: 'http://en365.ru/foto/nature.jpg', iW: 700
        },
        food: {
            count: 30,
            inRow: 3,
            w: 218,
            h: 93,
            xSh: 10,
            ySh: 43,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Продукты питания',
            url: 'http://en365.ru/foto/food.jpg',
            iW: 700
        },
        food2: {
            count: 25, total_count: 75,
            inRow: 5,
            w: 113,
            h: 95,
            xSh: 3,
            ySh: 0,
            curtW: 100,
            curtH: 20,
            curtT: 80,
            curtL: 0,
            title: 'Продукты питания 2',
            url: 'i/FDDCT'+['01','06','11']._rand()+'B.BMP',
            iW: 570
        },
        profession: {
            count: 39,
            inRow: 3,
            w: 219,
            h: 93,
            xSh: 13,
            ySh: 68,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Профессии',
            url: 'http://en365.ru/foto/profession.jpg', iW: 700
        },
        birds: {
            count: 21,
            inRow: 3,
            w: 217,
            h: 93,
            xSh: 15,
            ySh: 52,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Птицы',
            url: 'http://en365.ru/foto/birds.jpg', iW: 700
        },
        relatives: {
            count: 30,
            inRow: 3,
            w: 220,
            h: 94,
            xSh: 10,
            ySh: 41,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Родственники',
            url: 'http://en365.ru/foto/relatives.jpg', iW: 700
        },
        fish: {
            count: 36,
            inRow: 3,
            w: 217,
            h: 93,
            xSh: 15,
            ySh: 45,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Рыбы',
            url: 'http://en365.ru/foto/fish.jpg', iW: 700
        },
        uchr: {
            count: 21,
            inRow: 3,
            w: 220,
            h: 94,
            xSh: 10,
            ySh: 40,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Учреждения',
            url: 'http://en365.ru/foto/uchr.jpg', iW: 700
        },
        fruit: {
            count: 27,
            inRow: 3,
            w: 225,
            h: 97,
            xSh: 15,
            ySh: 40,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Фрукты',
            url: 'http://en365.ru/foto/fruit.jpg', iW: 700
        },
        color: {
            count: 21,
            inRow: 3,
            w: 222,
            h: 95,
            xSh: 15,
            ySh: 52,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Цвета',
            url: 'http://en365.ru/foto/color.jpg', iW: 700
        },
        parts_of_the_body: {
            count: 33,
            inRow: 3,
            w: 220,
            h: 93,
            xSh: 10,
            ySh: 46,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Части тела',
            url: 'http://en365.ru/foto/parts_of_the_body.jpg', iW: 700
        },
        sub: {
            count: 33,
            inRow: 3,
            w: 218,
            h: 93,
            xSh: 15,
            ySh: 49,
            curtW: 60,
            curtH: 62,
            curtT: 38,
            curtL: 40,
            title: 'Школьные предметы',
            url: 'http://en365.ru/foto/sub.jpg', iW: 700
        }
    };


function outImagesList(){
    getElem('enImagesPanel').innerHTML = '';
    for(var key in enImages){
        var obj = enImages[ key ],
            b = document.createElement('input');
        b.type = 'checkbox';
        b.id = key;
        b.className = 'enImagesChBox';
        b.onclick = function(){ reinitEnImagesArr(); showImg(); };
        getElem('enImagesPanel').appendChild(b);

        b = document.createElement('label');
        b.setAttribute('for', key);
        b.innerHTML = obj.title+'( '+( obj.total_count?obj.total_count:obj.count )+' )';
        getElem('enImagesPanel').appendChild(b);
        getElem('enImagesPanel').appendChild(document.createElement('br'));
    }
};



function reinitEnImagesArr(){
    enImagesArr = [];
    var els = document.getElementsByClassName('enImagesChBox');
    for(var i=0;i<els.length;i++){
        if(els[i].checked){
            enImagesArr.push( els[i].id );
            enImages[ els[i].id ].learned = {};
        }
    }
}


var  currEnImgKey, currEnImgInd,
    scale = 2;
function showImg( n ){
    if(enImagesArr.length<1) return;

    currEnImgKey = enImagesArr._rand();
    var imgObj= enImages[ currEnImgKey ],
        w=imgObj.w,
        h=imgObj.h,
        xSh = imgObj.xSh,
        ySh = imgObj.ySh,
        inRow = imgObj.inRow,
        count = imgObj.count,
        curtW = imgObj.curtW,
        curtH = imgObj.curtH,
        curtT = imgObj.curtT,
        curtL = imgObj.curtL,
        iW = imgObj.iW,
        imgUrl = imgObj.url;



    var row, col, notLearned=[],
        mod, elem;

    if( imgObj.learned ){
        for( var i=1;i<=count; i++ ){
            if( !imgObj.learned[ i ] ) notLearned.push(i);
        }
        if(notLearned.length<1){
            alert('Все слова "'+imgObj.title+'" выучены.');
            return;
        }
    }


    n = n != undefined ? ( isNaN( parseInt(n) ) ? 1 : parseInt(n) )
        : imgObj.learned ? notLearned._rand() : getRandomInt(1, count) ;
    //n = [1,count]._rand();
    currEnImgInd = n;

    mod = n%inRow;

    col = mod>0 ? mod : inRow;
    // целочисленное деление + 1 если есть остаток от деления
    row = Math.floor( n/inRow ) + ( mod>0 ? 1 : 0 ) ;


    elem = getElem('img');
    elem.style.width = (w*scale)+'px';
    elem.style.height = (h*scale)+'px';
    elem.style.backgroundImage = 'url('+imgUrl+')';
    elem.style.backgroundPosition = '-'+( xSh+w*(col-1) )*scale +'px -'+( ySh+h*(row-1) )*scale +'px';
    elem.style.backgroundSize = iW/w*100+'%';//inRow * 100

    elem = getElem('imgCurtan');
    elem.style.display='block';
    elem.style.width = (w*curtW/100*scale-1)+'px';
    elem.style.height = (h*curtH/100*scale-1)+'px';
    elem.style.top = (h*curtT/100*scale)+'px';
    elem.style.left = (w*curtL/100*scale)+'px';

    getElem('eiLearnedChBox').checked = imgObj.learned && imgObj.learned[ n ] ;

    getElem('enImagesPreview').src = imgUrl;

}

function setLearnedEnImg( checked ){
    enImages[ currEnImgKey ].learned = enImages[ currEnImgKey ].learned || {};
    enImages[ currEnImgKey ].learned[ currEnImgInd ] = checked;
    var notLearned = [];
    for( var i=1;i<=enImages[ currEnImgKey ].count; i++ ){
        if( !enImages[ currEnImgKey ].learned[ i ] ) notLearned.push(i);
    }
    if(notLearned.length<1){
        alert('Все слова "'+enImages[ currEnImgKey ].title+'" выучены.');
        return;
    }
};


/////////////////
var dictSmall = dict71700;//dict51100;

function checkLearned( word, checked ){
    if(word.length>0){
        if( learning_dict[word] ) learning_dict[word].learned = checked;
        if( fast_dict[word] ) fast_dict[word].learned = checked;
    };
}

var checkOriginTip ='', spellError='';
function inputOnKeyup( input ){
    //var orig = getElem('swOrigin').innerHTML;
        //input = getElem('inputOrigin').innerHTML;
    inputOnInputing( input );

    if(event.keyCode==13){
        inputOnEntering( input );
    }
}

function inputOnInputing( input ){
    hideEng();
    var orig = getElem('swOrigin').innerHTML,
        inputLower = input.value.toLowerCase();
    if(orig.toLowerCase().indexOf(inputLower)==0){
        input.style.color='initial';
        if(input.value.length>orig.length-2) showTranscription();
        // авто-отправка
        if(getElem('autoEnterNoWrong').checked && orig.toLowerCase()==inputLower // есть настройка и совпало...
            && spellError != orig && checkOriginTip != orig  // и без помарок..
            && /[^es]/.test(orig.toLowerCase().substr(-1))){ // и на конце не эти буквы
            input.style.color='green';
            setTimeout( function(){ inputOnEntering( input ) }, 500 );// отложенная отправка
        }
    }else{
        learning_dict[orig] = learning_dict[orig] || {};
        input.style.color='red';
        spellError = orig;
    }
}
function inputOnEntering( input ){
    hideEng();
    infoWrapHide();
    var orig = getElem('swOrigin').innerHTML;
    if(orig.toLowerCase()==input.value.toLowerCase()) {
        if(spellError != orig && checkOriginTip != orig) {
            checkLearned( orig, true);
        }
        checkOriginTip = ''; spellError='';
        if(getElem('playWordOnEnter').checked) playWord(orig);
        onImageClick();
    }else{
        checkLearned( orig, false);
        showEng(); outInfo('повторите слово и попробуйте заново');
        checkOriginTip = orig;
    }
    input.value='';
}



function inputOnKeydown(input){
    if(event.keyCode==48 || event.keyCode==48+48){//0
        infoWrapToggle(function(){
            infoWinShow('infoDict');
        });
    }
    else
    if(event.keyCode==57 || event.keyCode==57+48){//9
        playWord( getElem('swOrigin').innerHTML );
    }
    if((event.keyCode>47 && event.keyCode<58) || (event.keyCode>47+48 && event.keyCode<58+48)){
        event.stopPropagation();
        event.preventDefault();
    }
}
///COMMON
function infoWrapPreToggle(){
    var infoWrap = jQuery('#infoWrap');
//    (function(isVisible){
//        setTimeout(
//            function(){
//                document.body.style.overflow = isVisible ? 'auto' : 'hidden' ;
//                document.body.style.paddingRight= isVisible ? '' : getScrollBarWidth()+'px';
//            }, 100
//        );
//    }(infoWrap.is(':visible')));
    return infoWrap;
};
function infoWrapToggle(callBackFunction){
    var infoWrap = infoWrapPreToggle();
    infoWrap.toggle('fast', callBackFunction);
}
function infoWrapHide(callBackFunction){
    var infoWrap = infoWrapPreToggle()
    infoWrap.hide(callBackFunction);
}
function infoWrapShow(callBackFunction){
    var infoWrap = infoWrapPreToggle()
    infoWrap.show(callBackFunction);
}

function wordListCheckAll( checked ){
    var els = document.getElementsByClassName('swChBox');
    for(var i=0;i<els.length;i++){
        var key = els[i].id;
        els[i].checked = checked;
    };
    reinitStudyWords();
};

function splitWords(text, byRows){
    var w = byRows ? text.split('\n') : text.split(/[^a-z']+/ig),
        wo={};
    for(var i=0;i<w.length;i++){
        if(w[i].length>0) { //.toLowerCase()
            wo[ w[i]] = wo[ w[i] ] ? (parseInt(wo[ w[i] ])+1): 1;
        }
    }
    return wo;
}

// быстрый словарь из тектового поля
var fast_dict={};
function fastDict(text){
    fast_dict={};
    var w = text.split('\n');

    for(var i=0;i<w.length;i++){
        if(w[i].length>0) {
            w[i].replace( /(?:([^а-яё]*)\s[^a-zа-яё]+([^a-z]*)|([^a-z]*)\s[^a-zа-яё]+([^а-яё]*))/i,
                function(all, engL,rusR,rusL,engR){
                    var rus = rusR || rusL || null,
                        eng = engR || engL || null;
                    if( rus && eng ) fast_dict[ eng ] = { trans:rus };
            });
        }
    }
}

function setOptionMode( value ){
    if(!value) return;
    if(value=='view'){
        getElem('swShowMode').value = "all+";
        getElem('swByOrder').checked = true;//.setAttribute('checked', 'checked');
        getElem('swRepeat').checked = false;//.removeAttribute('checked');
        outInfo('Кликайте по картинке для просмотра слов');
    }else
    if(value=='learn'){
        getElem('swShowMode').value = "rus";
        getElem('swByOrder').checked = false;//.removeAttribute('checked');
        getElem('swRepeat').checked = true;//.setAttribute('checked', 'checked');
        outInfo('Вводите слово и нажимайте Enter(Ввод)');
    }
}

function outStudyWords( obj ){
    var oldw={},
        elem = 'swList';
    getElem(elem).innerHTML = '';

    for(var key in obj){
        if( getElem('toFilterLearnedChBox').checked && dictGet(learned_dict, key) ){
            oldw[key] = 1;
        }else{
            outStudyWord( key, true, elem );
        }
    }

    for( key in oldw){
        //outStudyWord( key, false, elem );
    }
    reinitStudyWords();
}

function outStudyWord( word, checked, elem ){
    var w, tr, b, d;
    d = document.createElement('div');
    d.className = 'swItem';

    b = document.createElement('input');
    b.type = 'checkbox';
    b.id = word; b.className = 'swChBox';
    b.checked = checked;
    b.onclick = function(e){ reinitStudyWords() };
    d.appendChild(b);

    b = document.createElement('input');
    b.type = 'text';
    b.id = word+'_t'; b.className = 'swText';
    b.value =  word;
    tr = ( (w=dictGet(dictSmall, word)) ? w.a :'');
    b.onkeyup = function(){
        var tr = (w=dictGet(dictSmall, this.value))
            ?( w.fw!=this.value? '(<span class="warn">'+w.fw+'</span>)':'' ) +  w.a
            :'';
        getElem(word+'_l').innerHTML = tr;
        if( learning_dict[word] ) learning_dict[word] = {};//reinitStudyWords();
    };
    d.appendChild(b);

    b = document.createElement('label');
    b.id = word+'_l'; b.className = 'swLabel';
    b.setAttribute('for', word);
    b.innerHTML = tr; b.title = tr.replace(/"/g,'\\"');
    d.appendChild(b);

    getElem(elem).appendChild(d);
}
// кол-во загруж. картинок
var unloadImg;
function reinitStudyWords(e){//if ( e.ctrlKey )
    var _learned=0;
    for(var k in learning_dict)
        if(learning_dict[k].learned) _learned++;
    if( _learned>2 && _learned<objLength(learning_dict) && !confirm('Стереть "Выучено" текущего урока?') ) return;

    learning_dict = {};
    learned=0;
    repeatingDynStep = repeatingStep;
    getElem('swmIndicator').style.width = '0%';
    getElem('inputOrigin').value = '';

    var str='', cnt=0,
        els = document.getElementsByClassName('swChBox');
    unloadImg = jQuery('.swChBox:checked').length;
    for(var i=0;i<els.length;i++){
        if( /__$/.test(els[i].id) ) continue;
        var key = getElem( els[i].id+'_t').value;

        if(els[i].checked){
            cnt++;
            learning_dict[ key ] = {};
            if(window.beginEnglishBase && beginEnglishBase.indexOf(key)>-1){
                var img = document.createElement('img');
                img.src = 'http://begin-english.ru/img/word/'+key+'.jpg';
                //if(i==els.length-1)
                img.onload = function(e){
                    outInfo( (--unloadImg<1)? 'Загрузка картинок завершена.' : 'Загружается картинок: '+unloadImg);
                };
            }
        }else{
            if( !dictGet(learned_dict, key) )
                str+= '\t"'+key+'":{},'+'\n';
        }
    }
    str = str.replace(/,\n$/g, '');
    getElem('outTextarea').value = str;
    getElem('swListOut').innerHTML = cnt+'/'+els.length;

    repeated_dict.length<1 ? getElem('swRepeat').setAttribute('disabled', 'disabled' ) : getElem('swRepeat').removeAttribute('disabled');
    byOrder = 0;

    onImageClick();
}

function dictGet(dict, word){
    var r = null, o, q='', cnt=0;
        o = dict[ word.toLowerCase() ] || dict[ firstToUpper(word) ];

    while(!o && word.length>2 && cnt<4){
        cnt++;
        q = word.substr(-1)+q;
        o = dict[ word = word.slice(0,-1) ];
    }
    if( o ){
        r = {
            // article
            a: o.a,
            //transcription
            t: o.t ? '['+(o.t+q).replace(/(\[|\])/g, '')+']' : '',
            // finded word
            fw:word
        };
    }
    return r;
}

function dictFind(dict, word){
    var r = null, o, cnt=0, aword;
    o =  dict[ word = firstToUpper(word) ] || dict[ word = word.toLowerCase() ];
    if(!o && /.+ie[sd]$/.test(word)){
        o = dict[aword = word.replace(/ie[sd]$/,'y')];
        if( o ) word = aword;
    }

    while(!o && word.length>2 && cnt<4){
        cnt++;
        o = dict[ word = word.slice(0,-1) ];
        if(!o){
            o = dict[ word = word +'e' ];
        }
        if(!o){
            o = dict[ word = word.slice(0,-1)+'y' ];
        }
        if(!o){
            word = word.slice(0,-1);
        }
    }
    if( o ){
        r = {
            // article
            a: o.a,
            // finded word
            fw:word
        };
    }
    return r;
};

function dictFindSmart(word, oWord){
    oWord = oWord || word;// оригинальное слово
    var dfRes=dictFind(dict, word), initAResult=null;
    if(dfRes!=null){
        word = dfRes.fw;
        initAResult = initA(word);
    }else{// отрубаем посл. букву
        if(word = myprompt(word+' is not found.\nMaybe:', word.slice(0,-1) ), word!=null && word!='')
            return dictFindSmart(word, oWord);
        else
            return null;
    }

    return initAResult;
}
    // словарь повторяемых слов
var repeated_dict=[],
// повторять слова каждый repeatingStep клик, максимум каждый repeatingMax, текущий порядок repeatingDynStep
    repeatingStep=5, repeatingMax=2, repeatingDynStep,
    // количество кликов по картинке
    imageClickCnt= 0,
    // перебор по порядку
    byOrder=0
    // выучено
    learned=0;

function onImageClick(){
    imageClickCnt++;
    getElem("swImageFind").style.display='none';

    var tempDict = getElem('swDictMode').value=='fast dict' ? fast_dict : learning_dict;
    if( objLength(tempDict)<1 ) {
        outInfo('Выберите карточки слов...');
        return;
    }

    var arr=[];
    for(var key in tempDict){
        if(!tempDict[key].learned) arr.push(key);
    }
    var swmIndicator = getElem("swmIndicator"),
        _learned = 100 - Math.round( arr.length*100/objLength(tempDict) ),
        _repeatingDynStep = repeatingStep-Math.floor(_learned/(100/(repeatingStep-repeatingMax+1)));
    swmIndicator.style.width = swmIndicator.innerHTML = _learned+'%';
    swmIndicator.parentNode.title = 'Выучено ' + _learned+'%';
    if(_learned>learned) {
        outInfo( congr_Excl._rand()+'! '+swmIndicator.parentNode.title, -1);
    }
    learned=_learned;
    repeatingDynStep=_repeatingDynStep;

    if(arr.length<1){
        alert( congr_Excl._rand()+'!\nУрок пройден.');
        return;
    }

    var ind, repeat = false;
    if( getElem("swRepeat").checked && repeated_dict.length>0 && imageClickCnt % repeatingDynStep == 0 ){
        arr = repeated_dict; mylog('repeated word on '+imageClickCnt+' click; dynRepeat='+repeatingDynStep);
        repeat = true;
        outInfo(_learned+'%'+' Повторение-мать учения');
        ind = getRandomInt(0,arr.length-1, true );
    }else{
        if(getElem("swByOrder").checked ){
            if( byOrder > arr.length-1 ) byOrder = 0;
            ind = byOrder++;
        }else{
            ind = getRandomInt(0,arr.length-1, true );
        }
    }
    //mylog(arr.length+'; ind = '+ind);
    if(!repeat) getElem("swmPosition").style.left = Math.round( ind*100/arr.length )+'%';
    showWord( arr[ ind ], { isRepeated:repeat });
}

function showTranscription(){
    removeClass(getElem('swTranscription'), 'hide');
}
function hideEng(){
    addClass(getElem('swWord'), 'hide');
    addClass(getElem('swTranscription'), 'hide');
    addClass(getElem('swOrigin'), 'hide');
};
function showEng(){
    removeClass(getElem('swWord'), 'hide');
    showTranscription();
    removeClass(getElem('swOrigin'), 'hide');
}
function showWord( word, opts ){
    opts = opts || {};
    var w, tr,trcr, orig,
        swSMode = getElem('swShowMode').value,
        swDMode = getElem('swDictMode').value,
        swTranslation = getElem('swTranslation'),
        swTranscription = getElem('swTranscription'),
        swOrigin = getElem('swOrigin'),
        swWord = getElem('swWord');

    swTranscription.innerHTML = '';
    swOrigin.title  = ''; swTranslation.title  = '';
    orig = word;
    if(swDMode=='irreg.verbs' && word in irregularVerb){
        tr = irregularVerb[word].trans;
        swTranslation.title = irregularVerb[word].gr +' группа: '+ irregularVerb[word].grDesc;
        orig = word+' - '+irregularVerb[word].ps +' - '+irregularVerb[word].pp;
    }
    if(swDMode=='fast dict'  && word in fast_dict){
        tr = fast_dict[word].trans;
    }
    else{
        if(word in beginEnglishBaseTr) tr = beginEnglishBaseTr[word]
        else
        tr = (w=dictGet(dictSmall, word)) ? w.a :'';
    }

    swTranslation.innerHTML = tr;
    if( window.dict ){
        if( w=dictGet(dict, word) ) {
            swOrigin.title  = w.a;
            swTranslation.title = swTranslation.title+' '+w.a;
            // вывод словаря в окошко
            showA(word);
        }
        trcr = getTranscription(word);
        if( trcr!=word ) {
            swTranscription.innerHTML = trcr;
        }
    }
    swOrigin.innerHTML = orig;
/*
 var swLearnedChBox = getElem('swLearnedChBox');
    swLearnedChBox.value = word;
    swLearnedChBox.checked = false;
    opts.isRepeated ? swLearnedChBox.setAttribute('disabled', 'disabled' ) : swLearnedChBox.removeAttribute('disabled');
*/
    removeClass(swTranslation, 'hide');
    showEng();

    function hideRus(){
        addClass(swTranslation, 'hide');
    };

    if(swSMode=='rus'){
        hideEng();
    }else
    if(swSMode=='eng'){
        hideRus();
    }else
    if(swSMode=='not' || swSMode=='not+'){
        hideEng(); hideRus();
        if(swSMode=='not+') playWord( word );
    }else
    if(swSMode=='all' || swSMode=='all+'){
        if(swSMode=='all+') playWord( word );
    }
    else{ //mix
        var r = getRandomInt(1,10);
        if(r>9){// реже только звук
            hideEng(); hideRus(); playWord( word );
        }else
        if(r>8){// реже иностранное
            hideRus();
        }else{ // чаще перевод
            hideEng();
        }
    }

    setImage( word );
}

function playWord( word, isPhrase ){
    isPhrase = isPhrase || /[^\w]/.test(word); // фраза или слово
    var aSrc = !isPhrase ? 'https://d1qx7pbj0dvboc.cloudfront.net/'+( word.toLowerCase() )+'.mp3'  // http://www.howjsay.com/mp3/
        : encodeURIComponent('http://translate.google.com/translate_tts?tl=en&q='+ word );

    if(typeof window.Audio=='function' && !isPhrase){//swHtml5Player
        getElem('swHtml5Player').src = aSrc;
        getElem('swHtml5Player').play();
    }else{
        getElem('swPlayer').innerHTML='<object onerror="alert(\''+word+'\')" type="application/x-shockwave-flash" ' +
            'data="http://denis-or-love.narod.ru/ump3player_500x70.swf" height="0" width="0">' +
            '<param name="wmode" value="transparent">' +
            '<param name="allowScriptAccess" value="always">' +
            '<param name="movie" value="http://flv-mp3.com/i/pic/ump3player_500x70.swf">' +
            '<param name="FlashVars" value="way='+
                aSrc +
            '&swf=http://flv-mp3.com/i/pic/ump3player_500x70.swf&w=0'+
            '&h=0&autoplay=1&volume=100">'+
            '</object>';
    }
}

//<img id="swImage1" src="i/no_img.jpg" onload="this.alt = parseInt(this.alt)-1; if(this.alt>=0) {this.title=beginEnglishBase[this.alt]; this.src = 'http://begin-english.ru/img/word/'+beginEnglishBase[this.alt]+'.jpg'};" alt="4482" title="" onerror="array_remote( this.title, beginEnglishBase );arrNo.push(this.title);this.alt = parseInt(this.alt)-1; if(this.alt>=0) {this.title=beginEnglishBase[this.alt]; this.src = 'http://begin-english.ru/img/word/'+beginEnglishBase[this.alt]+'.jpg'}">
function getGoogleImg( key, start){
    start = start ? start : 0;
    if(start>63){
        showImageFind( key );
        return;
    }
    getElem("swChangeImage").value=(start+1)+"..."; mylog('getGoogleImg: '+key+', '+start, true);

    $.getJSON("https://ajax.googleapis.com/ajax/services/search/images?v=1.0&rsz=1&q="+
        encodeURIComponent( key +' '+ getElem('swTheme').value  )+
        "&start="+start+"&callback=?", function(results){

        if (results.responseData && results.responseData.results) {
            var obj = results.responseData.results[0];
            obj.start = start;
            setImageUrl( key, obj );

            mylog(obj);
        }else{
            mylog(results.responseStatus+': '+results.responseDetails);
            if( results.responseStatus!=403 ){
                setImage( key, start+1 );
            }else{
                showImageFind( key );
            }
        }
    });
}

function showImageFind( word ){
    getElem("swImage").src="i/no_img.jpg";
    getElem("swImageFind").style.display='block';
    getElem("swfWord").value = word || '';
}

function setImage(key, start){
    var origK = key;
    key = key.trim().toLowerCase();
    start = start ? start : 0;
    var img = getElem('swImage'), obj;
    img.title = buildHint( key );
    img.setAttribute('data-word', key);
    img.setAttribute('data-start', start+1);

    if( obj = img_dict[key] ){
        img.src = obj.url;
        img.setAttribute('data-start', obj.start || 0 );
    }
    else
    if(window.beginEnglishBase && beginEnglishBase.indexOf(origK)>-1){
        img.src = 'http://begin-english.ru/img/word/'+origK+'.jpg';
    }else{
        //if(start<5)
            //setTimeout( function(){ getGoogleImg( key, start) }, 1000*start );
    }
}

function setImageUrl( word, optObj ){
    if(optObj.url.length<5) return;

    img_dict[word] = img_dict[word] || {};
    img_dict[word].url = optObj.url;
    img_dict[word].width = optObj.width || null;
    img_dict[word].height = optObj.height || null;
    img_dict[word].start = optObj.start || 0;

    getElem("swChangeImage").value="...";
    setImage( word, optObj.start );
}

function getTranscription( string ){
    if( !window.dict || string==null || string.length<2) return string;

    var w, arr;
    if ( w = dictGet(dict, string)) return w.t;

    arr = string.split(/\b/ig);
    if(arr.length<2) return string;

    for(var i=0; i<arr.length;i++){
        if(arr[i].trim().length>0)
            arr[i] = getTranscription( arr[i] ) ;
    }

    return arr.join('');
}

function buildHint(str){
    return str.substring(0,1)+
        str.slice(1,-1).replace(/\w/g, '_ ')+
    str.substr(-1);
}

function getA(w, forHtml){
    if( !window.dict || ! dict[ w ] ) return '';
    forHtml = forHtml || false;
	
    return getStylizated(dict[ w ].a, forHtml);
}
function getStylizated(a, forHtml){
	var br = forHtml ? "\n<br/>" : "\n",
        tb = forHtml ? "&nbsp; " : "  ",
        tb3 = new Array(4).join(tb);

    return a.
        replace(/ ([a-z\s\-\'\.,\:!\?]+)(\s|$)/ig, // english words to pseudo-links showA()
            function(all, a){
                var dObj, w = a.split(/\b/ig); //console.log(w);
                for(var i=0;i<w.length;i++){
                    if( dObj = dictGet(dict, w[i]) ) { //w[i] in dict   .toLowerCase()
                        //w[i]='<a href="javascript:void(0)" onclick="showA(\''+dObj.fw+'\')">'+w[i]+'</a>';
                        w[i]= wrapDictLink(w[i], dObj.fw);
                    }
                }
                return ' <b class="origin">'+ w.join('') +'</b> ';
            }
        ).
        //replace(/;([^;]+[;\s]*а\)\s)/ig, //; some text; а)
        //';'+br+tb3+'$1').
        replace(/(;|\s)([а-я]\)\s)/g, // а) б) в)
            '$1'+br+tb3+'$2').
        replace(/(\d+\)\s)/g, // 1)
            br+tb+'$1').//'<br />&nbsp; &nbsp;$1').
        replace(/(?:^|\s)(\d+\.\s)/g, // 1.
            br+'$1').//'<br />$1')
        replace(/(?:\s)?((II|III|IV)\s)/g, // II
            br+'$1');//'<br />$1')
}

/** обертка в словарную ссылку */
function wrapDictLink(word, value){
    value = value || word;
    return '<a href="javascript:void(0)" onclick="showA(\''+value+'\')">'+word+'</a>';
}

function initA(word, navigation){
    if( !window.dict || ! dict[ word ] ) return null;

    var tr = getTranscription(word);
    return {word:word, a:dict[ word ].a, as:getA(word, true), tr: tr!=word ? tr : ''};
}

function initInfoDictElements(initAResult) {
    getElem('infoDictHead').innerHTML = initAResult.word;
    let infoDictInput = getElem('infoDictInput');
    if(infoDictInput){
        infoDictInput.value = initAResult.word;
        infoDictInput._value = initAResult.word;
    }

    getElem('infoDictContent').innerHTML = initAResult.as;// article stylizated
    getElem('infoDictTranscription').innerHTML = initAResult.tr ;

    if(window.dictMnemonic){
        var mnem = dictMnemonic[initAResult.word];
        if(mnem){
            getElem('infoDictContent').innerHTML = initAResult.as +'<h4>мнемоника:</h4>'+getStylizated(mnem, true).replace(/\n/, '</br>');//mnem.replace(/\n/, '</br>');
        }
    }
}

function showInitARes(initAResult){
    initInfoDictElements(initAResult);
    if(window.infoWinShow instanceof Function) infoWinShow('infoDict');
}

function showA(word, navigation){
    var initAResult = initA(word, navigation);
    if(initAResult!=null){
        treatHistoryNavigator(word, navigation);
        showInitARes(initAResult);
    }

    return initAResult;
}

function treatHistoryNavigator(word, navigation){
    // если не навигация по истории и не повтор рядом стоящих то вставляем в историю
    if(!navigation && dh.current()!=word && dh.getNext()!=word) {
        dh.insert(word);
    }
    var dictPrevBut = getElem('dictPrevBut'),
        dictNextBut = getElem('dictNextBut');
    if(dh.hasPrevious()){
        dictPrevBut.removeAttribute('disabled');
        dictPrevBut.value = '⇚'+dh.getPrevious();
    }else{
        dictPrevBut.setAttribute('disabled', 'disabled');
        dictPrevBut.value = '⇚';
    }

    if(dh.hasNext()){
        dictNextBut.removeAttribute('disabled');
        dictNextBut.value = dh.getNext()+'⇛';

    }else{
        dictNextBut.setAttribute('disabled', 'disabled');
        dictNextBut.value = '⇛';
    }
}

/** История навигации по словарю */
dh = new HistoryNavigator();
function HistoryNavigator(){
    var index=-1,
        array=[];
    this.insert=function(newEl){
        array.splice(index+1,0,newEl);
        index++;
    };
    this.hasNext=function(){
        return index<array.length-1;
    };
    this.hasPrevious=function(){
        return index>0;
    };
    this.next=function(){
        if(!this.hasNext()) return null;
        return array[++index];
    };
    this.previous=function(){
        if(!this.hasPrevious()) return null;
        return array[--index];
    };
    // без перехода указателя
    this.getNext=function(){
        return this.hasNext() ? array[index+1] : null;
    };
    // без перехода указателя
    this.getPrevious=function(){
        return this.hasPrevious() ? array[index-1] : null;
    };
    this.current=function(){
        if(index<0) return null;
        return array[index];
    };
    this.getArray=function(){ return array; };
    this.getIndex=function(){ return index; };
}

function openDictWin(word, top, left, width,height){
    var newWin = window.open(
        "http://denisorlovmusic.ru/english4040/dict.html#"+encodeURIComponent(word),
        "DictWin",
        "top="+(top||0)+",left="+(left||document.body.offsetWidth)+
            ",width="+(width||420)+",height="+(height||500)+
            ",resizable=yes,scrollbars=yes"
    );
    newWin.focus();
}

//var wo={},
//    text = 'Sheila: Yes, the streets of Hollywood are full of colourful stores, restaurants and clubs. But the one that we saw in "Pretty Woman" is called Rodeo Drive. It is one of the most visited streets and many famous people shop there.';
//
//w = text.split(/[^a-z]+/ig)
//wo={};
//for(var i=0;i<w.length;i++){
//    if(w[i].length>0) {
//        wo[ w[i].toLowerCase() ] = wo[ w[i].toLowerCase() ] ? (parseInt(wo[ w[i].toLowerCase() ])+1): 1;
//    }
//}

// getElem('out').innerHTML = dict.a.a.replace(/(\d+\)\s)/g, '<br />&nbsp; &nbsp;$1').replace(/(\s[а-я]\)\s)/g, '<br />&nbsp; &nbsp; &nbsp; &nbsp;$1').replace(/((?:^|\s)\d+\.\s)/g, '<br />$1').replace(/(\s(?:II|III|IV)\s)/g, '<br />$1');

