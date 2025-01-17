var SYSTEM = {
    LAST_WORD:{
        'word':null,
        'person':null,
        'number':null
    },
    GENDER:null,
    TENSE:null,
    VERB:'have',
    /**
     * массив времен
     */
    TENSES: [],
    functions: {
        'systemPronoun()': {
            desc: 'Получить Местоимение системы(Лицо, Число, Пол)'
        },
        'getPronoun( [person, number, gender] )': {
            desc: 'Получить Местоимение, конкретное или случайное(без параметров)'
        },
        'randomVerb()': {
            desc: 'Получить случайный Глагол'
        },
        'randomSystemPerson()': {
            desc: 'Сменить случайно Лицо системы'
        },
        'randomSystemNumber()': {
            desc: 'Сменить случайно Число системы'
        },
        'randomSystemTense()': {
            desc: 'Сменить случайно Время системы'
        },

        'getSystemPerson()': {
            desc: 'Получить Лицо системы'
        },
        'getSystemNumber()': {
            desc: 'Получить Число системы'
        },
        'getSystemTense()': {
            desc: 'Получить Время системы'
        },

        'verbToSForm( verb )': {
            desc: 'Глагол в -S форме'
        },
        'verbToIngForm( verb )': {
            desc: 'Глагол в -ING форме'
        },
        'verbToEdForm( verb )': {
            desc: 'Глагол в -ED форме'
        },
        'verbToPastParticiple( verb )': {
            desc: 'Глагол в Past Participle форме'
        },
        'verbToTense( verb, tense [,person, number, negative] )': {
            desc: 'Поставить глагол verb во время tense'+
                ' (verb и tense - обязательные параметры), negative - отрицательная форма'
        },
        'askInTense( verb, tense, pronoun [,negative] )': {
            desc: 'Глагол verb в вопросит. форму, используя местоимение pronoun'
        }

        // времена
//        'verbToPastSimple(verb, person, number)': {
//            desc: 'Глагол в Past Simple'
//        },
//        'verbToPresentSimple(verb, person, number)': {
//            desc: 'Глагол в Present Simple'
//        },
//        'verbToFutureSimple(verb, person, number)': {
//            desc: 'Глагол в Future Simple'
//        }

    }
};

function systemPronoun(){
    return getPronoun( SYSTEM.LAST_WORD.person || 1, SYSTEM.LAST_WORD.number || 1, SYSTEM.GENDER || null );
}

function getPronoun( person, number, gender ){
    var pron, pronObj, gObj={'m':0,'f':1,'n':2},
        pronAr = [
            [['I'],['we']],
            [['you'],['you']],
            [['he', 'she','it'],['they']]
        ];
    person = person || getRandomInt(1, 3);
    number = number || getRandomInt(1, 2);

    pron = gender && gender in gObj && person>2 && number<2
        ? pronAr[ person-1 ][ number-1 ][ gObj[gender] ]
        : pronAr[ person-1 ][ number-1 ]._rand();
    pronObj = pronoun[ pron ];

    SYSTEM.LAST_WORD = {'word':pron, 'class':'pronoun',
        'person':person,
        'number':  number
    };
    SYSTEM.GENDER = ( pronObj.gender ? pronObj.gender : null );
    return pron;
}

function getObjectivePronoun( person, number, gender ){
    return pronoun[ getPronoun( person, number, gender ) ].obj;
}
function getPossessivePronoun( person, number, gender ){
    return pronoun[ getPronoun( person, number, gender ) ].poss;
}

function randomSystemPerson( out ){
    SYSTEM.LAST_WORD.person = getRandomInt(1,3);
    return out? SYSTEM.LAST_WORD.person :'';
}
function randomSystemNumber( out ){
    SYSTEM.LAST_WORD.number = getRandomInt(1,2);
    return out? SYSTEM.LAST_WORD.number :'';
}
function randomSystemTense( out ){
    SYSTEM.TENSE = SYSTEM.TENSES._rand();
    return out? SYSTEM.TENSE  :'';
}

function getSystemPerson(){
    return SYSTEM.LAST_WORD.person;
}
function getSystemNumber(){
    return SYSTEM.LAST_WORD.number;
}
function getSystemTense(){
    return SYSTEM.TENSE;
}
function setSystemVerb(verb){
    SYSTEM.VERB = verb;
}
function getSystemVerb(){
    return SYSTEM.VERB;
}

function verbToTense( verb, tense, person, number, negative  ){
    tense = tense || SYSTEM.TENSE || 'PresentSimple';
    SYSTEM.TENSE = tense;
    person = person || SYSTEM.LAST_WORD.person || 1;
    number = number || SYSTEM.LAST_WORD.number || 1;
    var word = window[ 'verbTo'+tense ](verb, person, number, negative);
    SYSTEM.LAST_WORD = {'word':word, 'class':'verb',
        'person':person,
        'number':number, 'tense': tense
    };
    return word;
}

function askInTense( verb, tense, pronoun, negative ){
    tense = tense || SYSTEM.TENSE || 'PresentSimple';
    SYSTEM.TENSE = tense;
    var ask = window[ 'askIn'+tense ](verb, pronoun, negative );
    return ask;
}

//function verbToNegative( verb, negative ){
//    return !negative ? verb
//        : verb == 'will' ? ['will not', 'won’t']._rand()
//        : verb + [' not', 'n’t']._rand() ;
//}
function verbToPastSimple( verb, person, number, negative ){
    number = number || SYSTEM.LAST_WORD.number || 1;
    if(verb=='be') {
        return ['was','were'][ number-1 ] + ( negative ? [' not', 'n’t']._rand() : '' );
    }else{
        return  negative
            ? 'did' + [' not', 'n’t']._rand()+' '+ verb
            : ( irregularVerb[ verb ] ? irregularVerb[ verb ].ps.split(',')._rand() : verbToEdForm( verb ) );
    }
}
/**
 *
 * @param verb
 * @param person
 * @param number
 * @param negative при 1 отрицание перед глаголом. 2 - после
 * @returns {string}
 */
function verbToPresentSimple( verb, person, number, negative ){
    person = person || SYSTEM.LAST_WORD.person || 1;
    number = number || SYSTEM.LAST_WORD.number || 1;
    if( verb=='be' ){
        return person==3 && number<2 ? 'is'+ ( negative ? [' not', 'n’t']._rand():'' )
             : person==1 && number<2 ? 'am' + ( negative ? ' not' : '')
             : number>1 || person==2 ? 'are' + ( negative ? [' not', 'n’t']._rand():'' ) : 'be???';
    }else{
        return (
            person==3 && number<2
                ? ( negative==1 ? 'does' + [' not', 'n’t']._rand()+' '+verb  : verbToSForm( verb ) )
                : ( negative==1 ? 'do' +[' not', 'n’t']._rand() +' '+ verb  : verb )
        ) + ( negative==2 ? [' not', 'n’t']._rand() : '' )
    }

}

function verbToFutureSimple( verb, person, number, negative ){
    return ( negative ? ['will not', 'won’t']._rand() : 'will' ) +' '+ verb;
}



var timeKind = ['Past', 'Present', 'Future'];
(function(){
    var tenseKind = {
        'Simple':null,
        'Continuous':verbToIngForm,
        'Perfect':verbToPastParticiple,
        'PerfectContinuous':function(verb) {
            return 'been'+ ' '+ verbToIngForm(verb)
        }
    };

    for(var i = 0; i < timeKind.length; i++) {
        for(var key in tenseKind) {
            //SYSTEM.functions[ 'verbTo' + timeKind[i] + key +'(verb, person, number)' ] =
                //{desc:'Глагол в '+timeKind[i] +' '+ key};
            if (tenseKind.hasOwnProperty(key)) {
                (function(time, tense){
                    var v = tense == 'Continuous' ? 'be' : 'have';
                    //заполняем массив времен
                    SYSTEM.TENSES.push( time + tense );
                    if(tense!='Simple'){

                        // функции форм инфинитива глаголов во временах кроме -Simple
                        if( time == 'Present' )// не важно, просто единожды :)
                        window['verbTo' + 'Inf' + tense ] = function(verb) {
                            return v + ' ' + tenseKind[tense](verb)
                        };

                        // функции склонения глаголов во временах кроме -Simple
                        window['verbTo' + time + tense] = function(verb, person, number, negative) {
                            return window['verbTo' + time + 'Simple'](v, person, number, negative ? 2 : 0  ) +
                                ( verb != 'be' ? ' '+tenseKind[tense](verb): ' '+( tense == 'Continuous' ? 'being' : 'been' ))
                        };

                        // функции создания вопросов во временах кроме -Simple
                        window['askIn' + time + tense] = function( verb, pronoun, negative) {
                            return (
                                time == 'Future'? ( negative ? 'won’t' : 'will' )+' ' + pronoun +' ' + window['verbToInf' + tense](verb)
                                :window['verbTo' + time + 'Simple'](v) +( negative? 'n’t' : '' )+' '+ pronoun
                            )+(
                                time == 'Future' ? '':
                                ( verb != 'be' ? ' '+tenseKind[tense](verb): ' '+( tense == 'Continuous' ? 'being' : 'been' ))
                            )
                        }
                    }else{
                        // функции создания вопросов во временах -Simple
                        window['askIn' + time + tense] = function( verb, pronoun, negative) {
                            return (
                                time == 'Future' ? ( negative ? 'wo' : 'will' ) :
                                verb == 'be' || !verb ? window['verbTo' + time + 'Simple']('be'):
                                verb == 'can' ? window['verbTo' + time + 'Simple']('can'):
                                window['verbTo' + time + 'Simple']('do')
                            )+
                            ( negative? 'n’t' : '' )+' '+ pronoun +
                            ( verb && ( verb!='be' && verb!='can' && time != 'Future' ) ? ' '+ verb : '');
                        }
                    }

                })(timeKind[i], key);
            }
        }
    }
}());

//function verbToPresentContinuous( verb, person, number ){
//    return verbToPresentSimple( 'be', person, number )+' '+verbToIngForm( verb );
//}
//function verbToPresentPerfect( verb, person, number ){
//    return verbToPresentSimple( 'have', person, number )+' '+verbToPastParticiple(verb);
//}
//function verbToPresentPerfectContinuous( verb, person, number ){
//    return verbToPresentSimple( 'have', person, number )+' been '+verbToIngForm( verb );
//}

//function askInPastSimple( verb, pronoun ){
//    return verb ? verbToPastSimple('do') : verbToPastSimple('be') +' '+ pronoun +' '+ verb ? verb : '';
//}
//function askInPresentSimple( verb, pronoun ){
//    return verb ? verbToPresentSimple('do') : verbToPresentSimple('be') +' '+ pronoun +' '+ verb ? verb : '';
//}
//function askInPresentContinuous( verb, pronoun ){
//    return verbToPresentSimple('be') +' '+ pronoun +' '+ verbToIngForm( verb );
//}
//function askInPresentPerfect( verb, pronoun ){
//    return verbToPresentSimple('have') +' '+ pronoun +' '+ verbToPastParticiple( verb );
//}
//function askInPresentPerfectContinuous( verb, pronoun ){
//    return verbToPresentSimple('have') +' '+ pronoun +' been '+ verbToIngForm( verb );
//}


function verbToPastParticiple( verb ){
    return irregularVerb[ verb ] ? irregularVerb[ verb ].pp.split(',')._rand() : verbToEdForm( verb );
}

/**
 * Приведение глагола в -s форму
 * @param verb
 * @returns {string}
 */
function verbToSForm( verb ){
    return verb.replace(/^(?:(have|be)|(.*?)(?:(s|h|x|z|o)|([^aeiou])y|([aeiou]y|[^shxzo])))$/i, function(all, ex, start, a, b, c) {
        return ex === 'be' ? 'is' : ex === 'have' ? 'has' : a ? all + 'es' : b ? start + b + 'ies' : c ? start + c + 's' : all;
    });
}

/**
 * Приведение глагола в -ing форму
 * @param verb
 * @returns {string}
 */
function verbToIngForm( verb ){
    return verb.replace(/^(?:(have|be)|(.*?)(?:([^aeiou])(i)?e|([^aeiou][aiou])([tpnrl]))?)$/i, function(all, ex, start, a, a1, b, c) {
        return  ex === 'be' ? 'being' : a ? start + a + (a1?'y':'')+ 'ing' : b && c ? start + b + c + c + 'ing' : all + 'ing';
    });
}

/**
 * Приведение глагола в -ed форму
 * @param verb
 * @returns {string}
 */
function verbToEdForm( verb ){
    return verb.replace(/^(?:(.*?)(?:([^aeiou])(ee|e|y)|([^aeiou][aiou])([tpdrnl]))?)$/i,
        function(all, start, a,a1,  b, c) {
            return  a ? start + a + ( a1=='y' ? 'ied ': a1 +'d' )
                : b && c ? start + b + c + c + 'ed' //
                : all + 'ed';
    });
}

function buildPhrase( scheme, repeat ){
    for(var i= 0, res=[]; i<(repeat?repeat:1); i++ ){
        res.push(
            scheme.replace(/(^|\s)([\da-z]+\([^;]+);/ig, function(all, space) {
                return (space || '') + new Function('return ' + all)();
            }).replace(/^./, function(letter) {
                return (letter || '').toUpperCase();
            })
        );
    }
    return res.join('\r\n');
}

function buildSetPhrase( opt ){
    var sh, res=[];
    for(sh in opt.schemeNames){
        var pat = (typeof SCHEMES[sh].scheme == 'function') ? SCHEMES[sh].scheme( opt.verb ) : SCHEMES[sh].scheme;
        res.push( buildPhrase(pat) );
    }

    return res;
}