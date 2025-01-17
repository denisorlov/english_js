var timeFrame = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year', 'decade'],
    timeOfDay = ['morning', 'afternoon', 'evening', 'night'],//(6 am - 12 am);(12 am - 5/6 pm);(5/6 pm - 9/10 pm);(9/10 pm - 6 am)
    dayOfWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    month = ['January','February','March', 'April','May','June','July','August','September','October','November','December'],
    season = ['spring', 'summer', 'autumn', 'winter'],
    n1_19 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
        'twelve', 'thirteen', 'fifteen', 'fourteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    /**
     * поздравительные восклицания
     */
    congr_Excl = ['Молодец', 'Гениально', 'Отлично', 'Здорово', 'Прекрасно', 'Так держать', 'Замечательно', 'Превосходно'],
    objPronoun = ['me','you','him','her','it','us','them'];


function getPresentSimpleMarkers(){
   var res='',
       preArr = [
       ['today','usually','at weekends','sometimes','from time to time'], //,'always', 'never','often','seldom','rarely'
       ['every', 'twice a', 'three times a', 'four or six times a'], // 'every day', 'twice a week'
       ['on']//'on MondayS'
   ];
    var preInd = getRandomInt(0, preArr.length-1);
    res = preArr[ preInd ]._rand();
    if( preInd == 1 ) res+=' '+ timeFrame._rand();
    if( preInd == 2 ) res+=' '+ dayOfWeek._rand()+'s';

    return res;
}

function getPresentPerfectMarkers(){
    return ['this day','this time','now']._rand();
}

function getPastSimpleMarkers(){
    var res='',
        preArr = [
            ['yesterday', 'the day before yesterday', 'the other day'], //
            ['last'], // last year
            [ n1_19._rand() +' '+timeFrame._rand()+'s ago'],// three weeks ago
            ['in '+getRandomInt( 1977, (new Date()).getFullYear() ) ]// in 2007
        ];
    var preInd = getRandomInt(0, preArr.length - 1);
    res = preArr[ preInd ]._rand();
    if( preInd == 1 ) res+=' '+ timeFrame._rand();

    return res;
}

function getFutureSimpleMarkers(){
    var res='',
        preArr = [
            ['tomorrow', 'the day after tomorrow', 'one of these days'], //
            ['next'], // next year
            ['in '+n1_19._rand()+' '+timeFrame._rand()+'s' ]// in two days
        ];
    var preInd = getRandomInt(0, preArr.length - 1);
    res = preArr[ preInd ]._rand();
    if( preInd == 1 ) res+=' '+ timeFrame._rand();

    return res;
}

var SCHEMES = {
    'presentSimple_randomPronoun()_state':{
        desc:"Я делаю (это) обычно", tense: 'PresentSimple',
        scheme:"randomPronoun(); verbToTense(randomVerb()); (it) every day."
    },
    'presentSimple_randomPronoun()_ask':{
        desc:"Делаю Я (это) обычно?", tense: 'PresentSimple',
        scheme:"verbToTense('do'); systemPronoun(); randomVerb(); (it) every day?"
    },
    ///////////////////////////
    'pastSimple_verb_face_num_state':{
        desc:"Он/Она делал/а для (нас) (обычно).", tense: 'PastSimple',
        scheme:function(verb, face, num){
            verb = verb || 'do'; face = face || 3; num = num || 1;
            return "getPronoun("+face+","+num+"); verbToTense( '"+verb+"', 'PastSimple',"+face+","+num+"); for "+objPronoun._rand()+
                ' '+getPastSimpleMarkers()+'.';
        }
    },
    'presentSimple_verb_face_num_state':{
        desc:"Он/Она делает для (нас) (когда-то).", tense: 'PresentSimple',
        scheme:function(verb, face, num){
            verb = verb || 'do'; face = face || 3; num = num || 1;
            return "getPronoun("+face+","+num+"); verbToTense( '"+verb+"', 'PresentSimple',"+face+","+num+"); for "+objPronoun._rand()+
                ' '+getPresentSimpleMarkers()+'.';
        }
    },
    'presentPerfect_verb_face_num_state':{
        desc:"Он/Она сделал/а для (нас) (к этому времени).", tense: 'PresentPerfect',
        scheme:function(verb, face, num){
            verb = verb || 'do'; face = face || 3; num = num || 1;
            return"getPronoun("+face+","+num+"); verbToTense( '"+verb+"', 'PresentPerfect',"+face+","+num+"); for "+objPronoun._rand()+
                ' '+['this day','this time','now']._rand()+'.';
        }
    },
    /////////////
    'tence_verb_face_num_state':{
        desc:"Он/Она сдела(ть) для (нас) (тогда-то).", tense: null,
        scheme:function(tence, verb, face, num){
            tence = tence || 'PresentPerfect';
            verb = verb || 'do'; face = face || 3; num = num || 1;
            return"getPronoun("+face+","+num+"); verbToTense( '"+verb+"','"+tence+"',"+face+","+num+"); for "+objPronoun._rand()+
                ( window['get'+tence+'Markers'] ? ' '+window['get'+tence+'Markers']() : '' )+'.';
        }
    }

}

/*askInTense( 'work', getSystemTense() , getPronoun(getSystemPerson() ,getSystemNumber() ,'m') );?
    Yes, systemPronoun() ; verbToTense('do', getSystemTense(), 0 ,0, 0);, systemPronoun() ; verbToTense('be', getSystemTense(), 0 ,0, 0);
a good in it!<br>
Why askInTense( 'work', getSystemTense() , systemPronoun() ,1 );?
Well, systemPronoun() ; verbToTense('work', getSystemTense(), 0 ,0, 1); because systemPronoun() ;
verbToTense('be', getSystemTense(), 0 ,0, 1); good! <br> getSystemTense(); randomSystemTense(); randomSystemPerson(); randomSystemNumber();  */
