// CONST режим разработки
isDEV_MODE = true;
define( 'isDEV_MODE', isDEV_MODE );

function array_search( needle, haystack ){
    for( var i=0; i<haystack.length; i++) if( haystack[i]==needle ) return i;
    return -1;
}
/**
 * Удаление из массива haystack элемента равного needle
 */
function array_remote( needle, haystack ){
    for( var i=0; i<haystack.length; i++)
        if( haystack[i]==needle ){
            haystack.splice(i,1);
            return;
        }
}

/**
 * Случайное целое между min и max
 * @param {int} min
 * @param {int} max
 * @param {boolean} norepeat - опционально, не повторять предыдущее
 */
var getRandomInt = (function randomInt(){
    var last, rand;
    return function(min, max, norepeat){
        if(max-min>1 && norepeat){
            do{
                rand = Math.round( min +Math.random()*(max-min)); //mylog([last, rand]);
            }while( rand == last )
            last = rand;
        }else{
            rand = Math.round( min +Math.random()*(max-min));
        }
        return  rand ;
    };
}());

function toRange(n, min, max){
    if( min==null || min==undefined ) max = Number.NEGATIVE_INFINITY;
    if( max==null || max==undefined ) max = Number.POSITIVE_INFINITY;
    return Math.min( Math.max( min, n ), max );
}

function getElem(select){
    return typeof select == 'string'? document.getElementById(select):select ;
}

function toggleElem(id, handle){
	let el = document.getElementById(id);
	el.style.display = el.style.display === 'none' ? '' : 'none';

	if(handle){
		handle.innerHTML = el.style.display === '' ? '-' : '+';
	}
	return el.style.display === ''; // boolean
}

function toggleElemVisibility(id, handle){
	let el = document.getElementById(id);
	if(!el) return;
	el.style.visibility = el.style.visibility === 'hidden' ? '' : 'hidden';

	if(handle){
		handle.style.color = el.style.visibility === '' ? '#000000' : '#00000050';
	}
	return el.style.visibility === ''; // boolean
}

{/* SELECT */
	function setSelectValue(select){
		select = getElem( select );
		return !select ? null : select.value;
	}
	
	function getSelectValue(select){
		select = getElem( select );
		return !select ? null : select.value;
	}

	function addAnyOption( select, anyLabel ){
		select = getElem( select );
		if( !select ) return;
		select.appendChild( new Option( anyLabel || 'выбрать...', '' , false, false) );
	}

	function clearOptions( select ){
		select = getElem( select );
		if( !select ) return;

		for(var i=select.options.length-1;i>-1;i--)
			 select.removeChild( select.options[i] );
	}

	function insertOptions( select, options ){
		select = getElem( select );
		if( !select ) return;

		for(var o in options ){
			select.appendChild( new Option( options[o] && (typeof options[o]!='object')? options[o] : o , o,  false, false) );
		}
	}

	function updateOptions( select, options, anyLabel ){
		select = getElem( select );
		if( !select || !options ) return;

		clearOptions( select );
		addAnyOption( select, anyLabel );
		insertOptions( select, options );
	}

    /**
     * Наполнение option с document.write
     * @param srt старт.значение, должно быть меньше, чем end
     * @param end финиш.значение
     * @param pstFix постфикс
     * @param def дефолтное значение
     * @param step шаг прохода от srt к end
     */
    function writeOptions(srt, end, pstFix, def, step){
        pstFix = pstFix || '';
        def = def || null;
        step = step || 1;
        for(var v=srt; v<=end; v+=step){
            document.write('<option '+((v+pstFix)==def?'selected="selected"':'')+'>'+(v+pstFix)+'</option>');
        }
    }

}

{/* CLASSNAME */
	function addClass(el, cls) { 
	  var c = el.className.split(' ');
	  for (var i=0; i<c.length; i++) {
		if (c[i] == cls) return;
	  }
	  c.push(cls);
	  el.className = c.join(' ');
	}

	function removeClass(el, cls) {
	  var c = el.className.split(' ');
	  for (var i=0; i<c.length; i++) {
		if (c[i] == cls) c.splice(i--, 1);
	  }

	  el.className = c.join(' ');
	}

	function hasClass(el, cls) {
	  for (var c = el.className.split(' '),i=c.length-1; i>=0; i--) {
		if (c[i] == cls) return true;
	  }
	  return false;
	}
}
/**
 * My console.log, в рабочей версии: !{@link isDEV_MODE} return;
 * @param {string} m сообщение
 * @param {boolean} dash добавление отчеркивания "-----------" сверху
 */
function mylog( m, dash ){
    if( !isDEV_MODE ) return;
    if( ('console' in window) && typeof console.log == 'function') {
        if(dash) console.log( '----------- ' );
        if(m) console.log( m );
    }
}
function myalert( m ){
	alert( m );
}
function myprompt( t, v ){
	return prompt( t, v );
}
function myconfirm(message){
    return confirm(message);
}

var INFO_ID=0;
function outInfo(info, hideTime, elemId){
    hideTime = hideTime || 4000;
    elemId = elemId || 'info';
    getElem( elemId ).innerHTML = info;
    INFO_ID++;
    if(hideTime>0)// если -1 не убираем
        (function(infoId, elemId){
            setTimeout(function(){
                if(infoId==INFO_ID) getElem( elemId ).innerHTML = ''; // ' &nbsp;'
            },hideTime);
        })(INFO_ID, elemId);
}

function getTimezone(){
	var tz = /(-|\+)\d{4}/.exec( new Date() );
	if(tz){
		tz = tz[0].split(''); 
		tz.splice(3,0,':'); 
		tz = tz.join(''); 
	}
	return tz;
}

function firstToUpper(s){
    return s.replace(/^./, function(letter) {
        return (letter || '').toUpperCase();
    });
}
/**
 * Вставляет или заново вставляет div с классом clear_both в конец элемента elem,
 * использует ф-цию {@link reAppendElem}
 * @param elem элемент
 */
function reAppendClearBoth( elem ){
    if( elem = getElem(elem) )
        reAppendElem( elem, { id: elem.id+'_clear_both', className:'clear_both' });
}
/**
 * Вставляет или заново вставляет элемент в конец родителя
 * @see {@link reAppendClearBoth}
 * @param {string} parent id родителя
 * @param {object} opts аттрибуты нового элемента
 * @param {string} tagName по умолч. DIV
 */
function reAppendElem( parent, opts, tagName  ){
    if( !(parent = getElem(parent)) ) return;
    var el;

    if ( el = document.getElementById( opts.id ) ) {
        el.parentNode.removeChild( el );
    } else {
        el = document.createElement( tagName || 'div');
        for(var attr in opts )
            el[ attr ] = opts[ attr ];
    }
    parent.appendChild(el);
}

function extend(Child, Parent) {
	let F = function() {};
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Child;
	Child.superclass = Parent.prototype;
}

/**
 * Добавляет элементу полосу прокрутки в режиме auto.
 * Возможные форматы height и width: 50, '50', '50px', '50pt' и т.д.
 * @param {node|string} elem элемент или его id
 * @param {int|string} height высота
 * @param {int|string} width ширина
 */
function setAutoScroll( elem, height, width ){
	elem = getElem( elem );
	if( !elem ) return;

	if(height){
		elem.style.height = (''+height).search(/\d$/)<0 ? height : height+'px' ;
	}
	if(width){
		elem.style.width = (''+width).search(/\d$/)<0 ? width : width+'px' ;
	}
	elem.style.overflow = 'auto' ;
}
//-------------------
function fixEvent(e) {
  e = e || window.event;

  if (!e.target) e.target = e.srcElement;

  if (e.pageX == null && e.clientX != null ) { // если нет pageX..
    var html = document.documentElement;
    var body = document.body;

    e.pageX = e.clientX + (html.scrollLeft || body && body.scrollLeft || 0);
    e.pageX -= html.clientLeft || 0;

    e.pageY = e.clientY + (html.scrollTop || body && body.scrollTop || 0);
    e.pageY -= html.clientTop || 0;
  }

  if (!e.which && e.button) {
    e.which = e.button & 1 ? 1 : ( e.button & 2 ? 3 : ( e.button & 4 ? 2 : 0 ) )
  }

  return e;
}

function getCoords(element) {
    var box = element.getBoundingClientRect();

    var body = document.body;
    var docElem = document.documentElement;

    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

    var clientTop = docElem.clientTop || body.clientTop || 0;
    var clientLeft = docElem.clientLeft || body.clientLeft || 0;

    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
}
//--------------------------------
var addEvent, removeEvent;
if (document.addEventListener) { // проверка существования метода
    addEvent = function(elem, type, handler, capture) {
        elem.addEventListener(type, handler, capture ? true : false)
    }
    removeEvent = function(elem, type, handler, capture) {
        elem.removeEventListener(type, handler, capture ? true : false)
    }
} else {
    addEvent = function(elem, type, handler) {

		var scope = elem._listeners || {},
			listeners = scope[ type ] = scope[ type ] || [],
			proxy = function() {
				handler.call( elem, window.event );
			}
			
		listeners[ listeners.length ] = {
			original: handler,
			proxy: proxy
		}
		elem._listeners = scope;
		
        elem.attachEvent("on" + type, proxy);
    }
    removeEvent = function(elem, type, handler) {
		
		var scope = elem._listeners || {},
			listeners = scope[ type ] || [];
			
		for( var i = listeners.length - 1; i >= 0; i-- ) {
			if ( listeners[ i ].original === handler ) {
				elem.detachEvent( "on" + type, listeners[ i ].proxy );
				listeners.splice( i, 1 );
				break;
			}
		}
    }
}
//-------------
/**
 * Длина объекта, количество свойств
 * @param {object} obj объект
 * @param {bool} onlyOwnProps только собственные свойства
 * @returns {number} количество свойств
 */
function objLength( obj, onlyOwnProps  ){
    var l=0, onlyOwnProps = onlyOwnProps || true;
    for ( var i in obj )
        if ( obj.hasOwnProperty( i ) || !onlyOwnProps ) l++;
    return l;
}
function toSource( obj, max_recours, onlyOwnProps, tabN ) {
	onlyOwnProps = onlyOwnProps!=undefined ? onlyOwnProps : true ;//только свои свойства
	max_recours = max_recours || 4;// максимальная рекурсия
	tabN = tabN || 2; // отсчитываем табуляцию
	var tabstr = '\t', tab = new Array( tabN ).join(tabstr), tab_1 = new Array( tabN+1 ).join(tabstr);
	
	/* prevent "Maximum call stack size exceeded" */
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
};
/**
* составление тела request-запроса из элементов формы или массива форм, или полей объекта
*/
function getRequestBody( form_Arr_Or_Obj ) {
	var aParams = new Array(), form, n,
		encodeNameValue = function( name, value ){
			return encodeURIComponent( name )+'='+encodeURIComponent( value );
		},
		getFromFormElems = function( form ){
			if(!(form = getElem( form )) ) return;
			
			for( var i = 0; i < form.elements.length; i++ ) {
				aParams.push( encodeNameValue( form.elements[i].name, form.elements[i].value ) );
			}
		};
	// form element	
	if( typeof form_Arr_Or_Obj =='string' || form_Arr_Or_Obj.nodeName =='FORM'){
		getFromFormElems( form_Arr_Or_Obj );
	}else 
	// array of form elements
	if( 'length' in form_Arr_Or_Obj ){
		for(var j=form_Arr_Or_Obj.length; form = form_Arr_Or_Obj[--j];){
			getFromFormElems( form );
		}
	}else
	// object
	if( typeof form_Arr_Or_Obj =='object' ){
		for(n in form_Arr_Or_Obj) aParams.push( encodeNameValue( n, form_Arr_Or_Obj[ n ] ) );
	}
	
	return aParams.join( "&" );
}
/**
 * получить GET-переменные и их значения
 * @returns {}
 */
function parseGetParams() {
    var $_GET = {};
    var __GET = window.location.search.substring(1).split("&");
    for(var i=0; i<__GET.length; i++) {
        var getVar = __GET[i].split("=");
        $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1];
    }
    return $_GET;
}

//------------------------------
/**
 * Объявление константы, наподобие php
 * @param {string} CNAME имя
 * @param {string} cvalue значение
 * @param {string} cerror сообщение об ошибке при попытке перезаписи
 */
function define( CNAME, cvalue, cerror ){
	var descriptor = {
		configurable:0,
		set: function(){
			throw Error( cerror || 'trying rewrite const '+CNAME )
		},
		get: function() {
			return cvalue;
		}
	};

	try {
		Object.defineProperty(this, CNAME, descriptor);
	} catch(_e_) {
		descriptor.configurable = 1;
		Object.defineProperty(this, CNAME, descriptor);
	}
}