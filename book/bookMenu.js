var bookMenu = {
        ladyChatterleysLover:{
            author:"Дэвид Герберт Лоуренс",     title:'Любовник леди Чаттерли',
            authorEn:"David Herbert Lawrence",  titleEn:'Lady Chatterley\'s Lover',
            genre:"любовные романы",
            src:"ladyChatterleysLover.js"
        },
        revisor:{
            author:"Николай Гоголь",     title:'РЕВИЗОР',
            authorEn:"Nicolay Gogol",  titleEn:'Inspector General',
            genre:"проза",
            src:"revisor.js"
        },
        warOfTheWorlds:{
            author:"Герберт Джордж Уэллс",     title:'Война миров',
            authorEn:"",  titleEn:'The War of the Worlds',
            genre:"фантастика",
            src:"warOfTheWorlds.js"
        },
		pictureOfDorianGray:{
            author:"Оскар Уайлд",     title:'Портрет Дориана Грея',
            authorEn:"OSCAR WILDE",  titleEn:'THE PICTURE OF DORIAN GRAY',
            genre:"проза",
            src:"pictureOfDorianGray.js"
        },
		martianChronicles:{
            author:"Рэй Брэдбери",     title:'Марсианские хроники',
            authorEn:"Ray Bradbury",  titleEn:'THE MARTIAN CHRONICLES',
            genre:"фантастика",
            src:"martianChronicles.js"
        },
        spaceMachine:{
            author:"Кристофер Прист",     title:'Машина пространства',
            authorEn:"Christopher Priest",  titleEn:'The Space Machine',
            genre:"фантастика",
            src:"spaceMachine.js"
        },
		Angels_and_Demons:{
            author:"Дэн Браун",     title:'АНГЕЛЫ И ДЕМОНЫ',
            authorEn:"Dan Brown",  titleEn:'Angels & Demons',
            genre:"фантастика",
            src:"Angels_and_Demons.js"
        },
		the_accountant:{
            author:"Роберт Шекли",     title:'Бухгалтер',
            authorEn:"Robert Sheckley",  titleEn:'The Accountant',
            genre:"фантастика",
            src:"the_accountant.js"
        }
    };
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

// https://studyenglishwords.com
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
----------------------
// http://parallelbook.ru
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