let speechUtils = {
	voicesInited: false,
	initVoicesSelect: function(selectId, utterance, valueName){
		let voices = window.speechSynthesis.getVoices(),
				sel = document.querySelector('#'+selectId);
		voices.forEach(function(c) {
			sel.appendChild(new Option(c.name, c.name,  false, false)); // Добавляем в селект
			valueName && new RegExp(valueName, 'i').test(c.name) ? sel.value = c.name : 0; // выбор по RegExp
		});
		if(voices.length>0){
			sel.onchange = function(){
				let this_value = this.value;
				utterance.voice = window.speechSynthesis.getVoices().filter(function(v){return v.name===this_value})[0];
			};
			sel.onchange();
		}
		return voices.length>0;
	},
	// более мягкое условие, применяется рандомно
	humaniteRegExpLight: new RegExp( '([a-z])( (when|where|until|till) |:)', "g"),
	humaniteRegExp:   new RegExp( '([a-z])( (or|when|where|until|till) |:)', "g"), //and|like|
	/* "очеловечивание" доп. паузами */
	humaniteText: function(txt){
		let reg = speechUtils.getRandomInt(1,4,true)<3 ? speechUtils.humaniteRegExp : speechUtils.humaniteRegExpLight; // utils.js
		return txt.replace(reg, '$1, $2')
	},
	getRandomInt:(function randomInt(){
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
	}()),
	play: function(text, utterance, reqVoicesMess){
		utterance = utterance || speechUtils.utteranceEn;
		if(!speechUtils.voicesInited){
			alert(reqVoicesMess || 'требуется: '+'Активировать голосовые движки');
			return;
		}
		utterance.text = speechUtils.humaniteText(text);
		window.speechSynthesis.cancel();
		window.speechSynthesis.speak(utterance);
	}
};
/** humanite test
 // speechUtils.humaniteRegExp = new RegExp( '([a-z])( (like|when|where|and|until)|:)', "g");
 text = 'he was like to the ladies:«I like to keep.';
 console.log(speechUtils.humaniteText(text));
 speechUtils.play(text, speechUtils.utteranceEn);
*/