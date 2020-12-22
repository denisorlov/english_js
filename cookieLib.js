cookieLib = {};
/** возвращает cookie с именем name, если есть, если нет, то undefined */
cookieLib.get = function (name) {
	var matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

/** устанавливает cookie c именем name и значением value
 options - объект с свойствами cookie (expires, path, domain, secure)
*/
cookieLib.set = function(name, value, expires, options) {
	options = options || {};
	
	if(expires){
		if (typeof expires == "number") {// в секундах
			var d = new Date();
			d.setTime(d.getTime() + expires*1000);
			expires = options.expires = d;
		}
		if (expires.toUTCString) { 
			options.expires = expires.toUTCString();
		}
	}

	value = encodeURIComponent(value);
	var updatedCookie = name + "=" + value;

	for(var propName in options) {
		updatedCookie += "; " + propName;
		var propValue = options[propName];    
		if (propValue !== true) { 
			updatedCookie += "=" + propValue;
		}
	}

	document.cookie = updatedCookie;
}

/** удаляет cookie с именем name */
cookieLib.delete = function(name) {
	cookieLib.set(name, "", -1);
}

/** получение всех куков в объект */
cookieLib.getObject = function(){
	if(!document.cookie || document.cookie.length<2) return {};

	var res = {}, coo,
		cArr = document.cookie.split(/;\s?/);
	for (var i = 0; i < cArr.length; i++) {
		coo = cArr [i].split('=');
		res[coo[0]] = decodeURIComponent(coo[1]);
	}
	return res;
};

/** инициализация значения элемента */
cookieLib.initElemValue = function(elem){
    var value;
    if(!elem || !elem.id || (value = cookieLib.get(elem.id))==undefined) return;
	
	var changed = false,
			tn = elem.tagName.toUpperCase(),
			type = elem.type ? elem.type.toLowerCase():'';
	if(tn=='INPUT' && type=='checkbox'){
		!value || value=='0' ? elem.removeAttribute('checked') : elem.setAttribute('checked', 'checked') ;
		changed = true;
	}else{
		elem.value = value;
		changed = true;
	}

	if(changed && typeof elem.onchange == 'function' ){
		elem.onchange();
	}
}
/** запись в cookie значения элемента */
cookieLib.writeElemValue = function(elem, expires){
	var value='',
		tn = elem.tagName.toUpperCase(),
		type = elem.type ? elem.type.toLowerCase():'';
	if(tn=='INPUT' && type=='checkbox'){
		value = elem.checked ? 1 : 0;
	}else{
		value = elem.value;
	}

	cookieLib.set(elem.id, value, expires);
}
