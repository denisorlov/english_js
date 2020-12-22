/**
* Created with JetBrains PhpStorm.
* User: Денис
* Date: 27.09.13
* Time: 18:39
* To change this template use File | Settings | File Templates.
*/
//pronoun singular plural masculine feminine

var
    pronoun = {
        I: {
            person: 1,
            number: 1, obj:'me', poss:'my', abs:'mine'
        },
        you: {
            person: 2,
            number: 1, obj:'you', poss:'your', abs:'yours'
        },
        he: {
            person: 3,
            number: 1,
            gender: 'm', obj:'him', poss:'his', abs:'his',
            genderDesc: 'masculine'
        },
        she: {
            person: 3,
            number: 1,
            gender: 'f', obj:'her', poss:'her', abs:'hers',
            genderDesc: 'feminine'
        },
        it: {
            person: 3,
            number: 1,
            gender: 'n', obj:'it', poss:'its', abs:'its',
            genderDesc: 'neuter'
        },
        we: {
            person: 1,
            number: 2, obj:'us', poss:'our', abs:'ours'
        },
        you: {
            person: 2,
            number: 2, obj:'you', poss:'your', abs:'yours'
        },
        they: {
            person: 3,
            number: 2, obj:'them', poss:'their', abs:'theirs'
        }

    },
verbs = [
//        [ 'miss'],
//        [ 'kiss'],
//        [ 'close'],
//        [ 'push'],
//        [ 'teach'],
//        [ 'mix'],
//        [ 'buzz'],
//
//        [ 'study'],
//        [ 'copy'],
//        [ 'try'],
//
//        [ 'play'],
//        [ 'buy'],
//        [ 'enjoy'],
//
//        [ 'go'],
//        [ 'do'],
//
//        [ 'read'],
//        [ 'study'],
//        [ 'say'],
//        [ 'enter'],
//
//        [ 'write'],
//        [ 'make'],
//        [ 'forgive'],
//
//        [ 'sit'],
//        [ 'stop'],
//        [ 'begin'],
//
//        [ 'mix'],
//        [ 'relax'],
//
//        [ 'open'],
//        [ 'order'],
//
//        [ 'stir'],
//        [ 'refer'],
//        [ 'air'],
//        [ 'wear'],
//        [ 'hear'],
//
//
//        [ 'travel'],
//        [ 'signal'],
//        [ 'cancel'],
//
//        [ 'die'],
//        [ 'lie'],
//        [ 'tie'],


    [ 'talk'],
    [ 'cook'],
    [ 'answer'],

    [ 'live'],
    [ 'type'],
    [ 'explore'],
    [ 'agree'],


    [ 'nod'],
    [ 'stop'],
    [ 'permit'],

    [ 'mix'],
    [ 'relax'],

    [ 'open'],
    [ 'order'],

    [ 'prefer'],
    [ 'occur'],

    [ 'travel'],
    [ 'signal'],

    [ 'compel'],
    [ 'cool'],

    [ 'dry'],
    [ 'marry'],
    [ 'study'],

    [ 'play']

    //[ 'have'],
    //[ 'be']
],
    /**
     * Неправильные глаголы
     * ps: past simple
     * pp: pastParticiple
     * trans: translation
     */
irregularVerb = {
        do: {
            ps: 'did',
            pp: 'done',
            trans: 'делать,сделать',
            gr: 0,
            grDesc: 'Главные'
        },
        outdo: {
            ps: 'outdid',
            pp: 'outdone',
            trans: 'превосходить',
            gr: 0,
            grDesc: 'Главные'
        },
        redo: {
            ps: 'redid',
            pp: 'redone',
            trans: 'повторять сделанное',
            gr: 0,
            grDesc: 'Главные'
        },
        undo: {
            ps: 'undid',
            pp: 'undone',
            trans: 'уничтожать сделанное ',
            gr: 0,
            grDesc: 'Главные'
        },
        go: {
            ps: 'went',
            pp: 'gone',
            trans: 'ходить,ездить,пойти,поехать',
            gr: 0,
            grDesc: 'Главные'
        },
        undergo: {
            ps: 'underwent',
            pp: 'undergone',
            trans: 'проходить;подвергаться',
            gr: 0,
            grDesc: 'Главные'
        },
        cost: {
            ps: 'cost',
            pp: 'cost',
            trans: 'стоить',
            gr: 1,
            grDesc: 'I = II = III'
        },
        put: {
            ps: 'put',
            pp: 'put',
            trans: 'ставить',
            gr: 1,
            grDesc: 'I = II = III'
        },
        cut: {
            ps: 'cut',
            pp: 'cut',
            trans: 'резать,разрезать,порезаться',
            gr: 1,
            grDesc: 'I = II = III'
        },
        shut: {
            ps: 'shut',
            pp: 'shut',
            trans: 'хлопнуть,захлопнуть,закрыть',
            gr: 1,
            grDesc: 'I = II = III'
        },
        hurt: {
            ps: 'hurt',
            pp: 'hurt',
            trans: 'удариться,причинять боль',
            gr: 1,
            grDesc: 'I = II = III'
        },
        hit: {
            ps: 'hit',
            pp: 'hit',
            trans: 'ударить,удариться',
            gr: 1,
            grDesc: 'I = II = III'
        },
        mishit: {
            ps: 'mishit',
            pp: 'mishit',
            trans: 'промахнуться',
            gr: 1,
            grDesc: 'I = II = III'
        },
        let: {
            ps: 'let',
            pp: 'let',
            trans: 'позволить,позволять,давать,дать',
            gr: 1,
            grDesc: 'I = II = III'
        },
        set: {
            ps: 'set',
            pp: 'set',
            trans: 'ставить,устанавливать,установить',
            gr: 1,
            grDesc: 'I = II = III'
        },
        reset: {
            ps: 'reset',
            pp: 'reset',
            trans: 'возвращать',
            gr: 1,
            grDesc: 'I = II = III'
        },
        upset: {
            ps: 'reset',
            pp: 'reset',
            trans: 'опрокинуть(ся)',
            gr: 1,
            grDesc: 'I = II = III'
        },
        cast: {
            ps: 'cast',
            pp: 'cast',
            trans: 'кинуть,лить металл',
            gr: 1,
            grDesc: 'I = II = III'
        },
        recast: {
            ps: 'recast',
            pp: 'recast',
            trans: 'видоизменять,преобразовывать',
            gr: 1,
            grDesc: 'I = II = III'
        },
        beset: {
            ps: 'beset',
            pp: 'beset',
            trans: 'осаждать',
            gr: 1,
            grDesc: 'I = II = III'
        },
        broadcast: {
            ps: 'broadcast',
            pp: 'broadcast',
            trans: 'распространять,разбрасывать',
            gr: 1,
            grDesc: 'I = II = III'
        },
        burst: {
            ps: 'burst',
            pp: 'burst',
            trans: 'разразиться,взорваться',
            gr: 1,
            grDesc: 'I = II = III'
        },
        bust: {
            ps: 'bust',
            pp: 'busted',
            trans: 'разжаловать',
            gr: 1,
            grDesc: 'I = II = III'
        },
        fit: {
            ps: 'fit',
            pp: 'fit',
            trans: 'подходить по размеру',
            gr: 1,
            grDesc: 'I = II = III'
        },
        input: {
            ps: 'input,inputted',
            pp: 'input,inputted',
            trans: 'входить',
            gr: 1,
            grDesc: 'I = II = III'
        },
        output: {
            ps: 'output,outputted',
            pp: 'output,outputted',
            trans: 'выходить',
            gr: 1,
            grDesc: 'I = II = III'
        },
        inset: {
            ps: 'inset',
            pp: 'inset',
            trans: 'вставлять,вкладывать',
            gr: 1,
            grDesc: 'I = II = III'
        },
        miscast: {
            ps: 'miscast',
            pp: 'miscast',
            trans: 'неправильно распределять роли',
            gr: 1,
            grDesc: 'I = II = III'
        },
        outbid: {
            ps: 'outbid',
            pp: 'outbid',
            trans: 'перебивать цену',
            gr: 1,
            grDesc: 'I = II = III'
        },
        overbid: {
            ps: 'overbid',
            pp: 'overbid',
            trans: 'повелевать',
            gr: 1,
            grDesc: 'I = II = III'
        },
        shed: {
            ps: 'shed',
            pp: 'shed',
            trans: 'проливать',
            gr: 1,
            grDesc: 'I = II = III'
        },
        slit: {
            ps: 'slit',
            pp: 'slit',
            trans: 'раздирать(ся),разрезать (вдоль)',
            gr: 1,
            grDesc: 'I = II = III'
        },
        split: {
            ps: 'split',
            pp: 'split',
            trans: 'расщепить(ся)',
            gr: 1,
            grDesc: 'I = II = III'
        },
        spread: {
            ps: 'spread',
            pp: 'spread',
            trans: 'распространиться',
            gr: 1,
            grDesc: 'I = II = III'
        },
        sublet: {
            ps: 'sublet',
            pp: 'sublet',
            trans: 'передавать в субаренду',
            gr: 1,
            grDesc: 'I = II = III'
        },
        thrust: {
            ps: 'thrust',
            pp: 'thrust',
            trans: 'толкнуть сунуть',
            gr: 1,
            grDesc: 'I = II = III'
        },
        underbid: {
            ps: 'underbid',
            pp: 'underbid',
            trans: 'снижать цену',
            gr: 1,
            grDesc: 'I = II = III'
        },
        undercut: {
            ps: 'undercut',
            pp: 'undercut',
            trans: 'сбивать цены',
            gr: 1,
            grDesc: 'I = II = III'
        },
        have: {
            ps: 'had',
            pp: 'had',
            trans: 'иметь',
            gr: 2,
            grDesc: 'II = III'
        },
        hang: {
            ps: 'hung',
            pp: 'hung',
            trans: 'висеть,вешать,повесить',
            gr: 2,
            grDesc: 'II = III'
        },
        overhang: {
            ps: 'overhung',
            pp: 'overhung',
            trans: 'нависать',
            gr: 2,
            grDesc: 'II = III'
        },
        get: {
            ps: 'got',
            pp: 'got,gotten',
            trans: 'получать, достигать',
            gr: 2,
            grDesc: 'II = III'
        },
        tell: {
            ps: 'told',
            pp: 'told',
            trans: 'сказать,рассказать',
            gr: 2,
            grDesc: 'II = III'
        },
        foretell: {
            ps: 'foretold',
            pp: 'foretold',
            trans: 'предсказывать',
            gr: 2,
            grDesc: 'II = III'
        },
        retell: {
            ps: 'retold',
            pp: 'retold',
            trans: 'пересказывать',
            gr: 2,
            grDesc: 'II = III'
        },
        sell: {
            ps: 'sold',
            pp: 'sold',
            trans: 'продавать,продать',
            gr: 2,
            grDesc: 'II = III'
        },
        outsell: {
            ps: 'outsold',
            pp: 'outsold',
            trans: 'продавать лучше или дороже',
            gr: 2,
            grDesc: 'II = III'
        },
        resell: {
            ps: 'resold',
            pp: 'resold',
            trans: 'перепродавать',
            gr: 2,
            grDesc: 'II = III'
        },
        undersell: {
            ps: 'undersold',
            pp: 'undersold',
            trans: 'продавать дешевле',
            gr: 2,
            grDesc: 'II = III'
        },
        shoot: {
            ps: 'shot',
            pp: 'shot',
            trans: 'стрелять,застрелить',
            gr: 2,
            grDesc: 'II = III'
        },
        overshoot: {
            ps: 'overshot',
            pp: 'overshot',
            trans: 'расстрелять',
            gr: 2,
            grDesc: 'II = III'
        },
        lose: {
            ps: 'lost',
            pp: 'lost',
            trans: 'терять,потерять',
            gr: 2,
            grDesc: 'II = III'
        },
        hear: {
            ps: 'heard',
            pp: 'heard',
            trans: 'слышать,услышать',
            gr: 2,
            grDesc: 'II = III'
        },
        mishear: {
            ps: 'misheard',
            pp: 'misheard',
            trans: 'ослышаться',
            gr: 2,
            grDesc: 'II = III'
        },
        overhear: {
            ps: 'overheard',
            pp: 'overheard',
            trans: 'подслуш(ив)ать',
            gr: 2,
            grDesc: 'II = III'
        },
        rehear: {
            ps: 'reheard',
            pp: 'reheard',
            trans: 'слушать вторично',
            gr: 2,
            grDesc: 'II = III'
        },
        stand: {
            ps: 'stood',
            pp: 'stood',
            trans: 'стоять',
            gr: 2,
            grDesc: 'II = III'
        },
        withstand: {
            ps: 'withstood',
            pp: 'withstood',
            trans: 'противиться',
            gr: 2,
            grDesc: 'II = III'
        },
        understand: {
            ps: 'understood',
            pp: 'understood',
            trans: 'понимать,понять',
            gr: 2,
            grDesc: 'II = III'
        },
        misunderstand: {
            ps: 'misunderstood',
            pp: 'misunderstood',
            trans: 'неправильно понимать',
            gr: 2,
            grDesc: 'II = III'
        },
        read: {
            ps: 'read',
            pp: 'read',
            trans: 'читать,прочитать',
            gr: 2,
            grDesc: 'II = III'
        },
        misread: {
            ps: 'misread',
            pp: 'misread',
            trans: 'неправильно истолковывать',
            gr: 2,
            grDesc: 'II = III'
        },
        mean: {
            ps: 'meant',
            pp: 'meant',
            trans: 'значить,иметь в виду',
            gr: 2,
            grDesc: 'II = III'
        },
        meet: {
            ps: 'met',
            pp: 'met',
            trans: 'встречать(ся),встретить(ся)',
            gr: 2,
            grDesc: 'II = III'
        },
        feel: {
            ps: 'felt',
            pp: 'felt',
            trans: 'чувствовать,почувствовать',
            gr: 2,
            grDesc: 'II = III'
        },
        leave: {
            ps: 'left',
            pp: 'left',
            trans: 'оставлять,оставить',
            gr: 2,
            grDesc: 'II = III'
        },
        keep: {
            ps: 'kept',
            pp: 'kept',
            trans: 'держать,хранить',
            gr: 2,
            grDesc: 'II = III'
        },
        sleep: {
            ps: 'slept',
            pp: 'slept',
            trans: 'спать',
            gr: 2,
            grDesc: 'II = III'
        },
        oversleep: {
            ps: 'overslept',
            pp: 'overslept',
            trans: 'прос(ы)пать',
            gr: 2,
            grDesc: 'II = III'
        },
        feed: {
            ps: 'fed',
            pp: 'fed',
            trans: 'кормить,покормить',
            gr: 2,
            grDesc: 'II = III'
        },
        hold: {
            ps: 'held',
            pp: 'held',
            trans: 'держать',
            gr: 2,
            grDesc: 'II = III'
        },
        uphold: {
            ps: 'upheld',
            pp: 'upheld',
            trans: 'поддерживать',
            gr: 2,
            grDesc: 'II = III'
        },
        withhold: {
            ps: 'withheld',
            pp: 'withheld',
            trans: 'удерживать',
            gr: 2,
            grDesc: 'II = III'
        },
        build: {
            ps: 'built',
            pp: 'built',
            trans: 'строить,построить',
            gr: 2,
            grDesc: 'II = III'
        },
        send: {
            ps: 'sent',
            pp: 'sent',
            trans: 'посылать,послать',
            gr: 2,
            grDesc: 'II = III'
        },
        spend: {
            ps: 'spent',
            pp: 'spent',
            trans: 'тратить,истратить',
            gr: 2,
            grDesc: 'II = III'
        },
        misspend: {
            ps: 'misspent',
            pp: 'misspent',
            trans: 'экономить',
            gr: 2,
            grDesc: 'II = III'
        },
        make: {
            ps: 'made',
            pp: 'made',
            trans: 'делать,сделать',
            gr: 2,
            grDesc: 'II = III'
        },
        remake: {
            ps: 'remade',
            pp: 'remade',
            trans: 'переделывать',
            gr: 2,
            grDesc: 'II = III'
        },
        lay: {
            ps: 'laid',
            pp: 'laid',
            trans: 'класть,положить',
            gr: 2,
            grDesc: 'II = III'
        },
        inlay: {
            ps: 'inlaid',
            pp: 'inlaid',
            trans: 'вкладывать,выстилать',
            gr: 2,
            grDesc: 'II = III'
        },
        mislay: {
            ps: 'mislaid',
            pp: 'mislaid',
            trans: 'класть не на место',
            gr: 2,
            grDesc: 'II = III'
        },
        overlay: {
            ps: 'overlaid',
            pp: 'overlaid',
            trans: 'покры(ва)ть',
            gr: 2,
            grDesc: 'II = III'
        },
        waylay: {
            ps: 'waylaid',
            pp: 'waylaid',
            trans: 'подстерегать',
            gr: 2,
            grDesc: 'II = III'
        },
        pay: {
            ps: 'paid',
            pp: 'paid',
            trans: 'платить,заплатить',
            gr: 2,
            grDesc: 'II = III'
        },
        overpay: {
            ps: 'overpaid',
            pp: 'overpaid',
            trans: 'переплачивать',
            gr: 2,
            grDesc: 'II = III'
        },
        prepay: {
            ps: 'prepaid',
            pp: 'prepaid',
            trans: 'платить вперед',
            gr: 2,
            grDesc: 'II = III'
        },
        repay: {
            ps: 'repaid',
            pp: 'repaid',
            trans: 'отдавать долг',
            gr: 2,
            grDesc: 'II = III'
        },
        underpay: {
            ps: 'underpaid',
            pp: 'underpaid',
            trans: 'оплачивать слишком низко',
            gr: 2,
            grDesc: 'II = III'
        },
        say: {
            ps: 'said',
            pp: 'said',
            trans: 'сказать,говорить',
            gr: 2,
            grDesc: 'II = III'
        },
        unsay: {
            ps: 'unsaid',
            pp: 'unsaid',
            trans: 'брать назад свои слова',
            gr: 2,
            grDesc: 'II = III'
        },
        gainsay: {
            ps: 'gainsaid',
            pp: 'gainsaid',
            trans: 'отрицать,противоречить',
            gr: 2,
            grDesc: 'II = III'
        },
        bring: {
            ps: 'brought',
            pp: 'brought',
            trans: 'приносить,принести',
            gr: 2,
            grDesc: 'II = III'
        },
        buy: {
            ps: 'bought',
            pp: 'bought',
            trans: 'покупать,купить',
            gr: 2,
            grDesc: 'II = III'
        },
        think: {
            ps: 'thought',
            pp: 'thought',
            trans: 'думать,подумать',
            gr: 2,
            grDesc: 'II = III'
        },
        seek: {
            ps: 'sought',
            pp: 'sought',
            trans: 'искать',
            gr: 2,
            grDesc: 'II = III'
        },
        win: {
            ps: 'won',
            pp: 'won',
            trans: 'выигрывать,выиграть',
            gr: 2,
            grDesc: 'II = III'
        },
        catch: {
            ps: 'caught',
            pp: 'caught',
            trans: 'ловить,поймать',
            gr: 2,
            grDesc: 'II = III'
        },
        teach: {
            ps: 'taught',
            pp: 'taught',
            trans: 'учить,преподавать',
            gr: 2,
            grDesc: 'II = III'
        },
        fight: {
            ps: 'fought',
            pp: 'fought',
            trans: 'драться,подраться,бороться',
            gr: 2,
            grDesc: 'II = III'
        },
        outfight: {
            ps: 'outfought',
            pp: 'outfought',
            trans: 'побеждать в бою',
            gr: 2,
            grDesc: 'II = III'
        },
        find: {
            ps: 'found',
            pp: 'found',
            trans: 'находить,найти',
            gr: 2,
            grDesc: 'II = III'
        },
        grind: {
            ps: 'ground',
            pp: 'ground',
            trans: 'молоть,намолоть',
            gr: 2,
            grDesc: 'II = III'
        },
        dig: {
            ps: 'dug',
            pp: 'dug',
            trans: 'копать,выкопать',
            gr: 2,
            grDesc: 'II = III'
        },
        stick: {
            ps: 'stuck',
            pp: 'stuck',
            trans: 'застревать,застрять,прилипать,прилипнуть,уколоть',
            gr: 2,
            grDesc: 'II = III'
        },
        sting: {
            ps: 'stung',
            pp: 'stung',
            trans: 'жалить,ужалить',
            gr: 2,
            grDesc: 'II = III'
        },
        sit: {
            ps: 'sat',
            pp: 'sat',
            trans: 'сидеть',
            gr: 2,
            grDesc: 'II = III'
        },
        abide: {
            ps: 'abode,abided',
            pp: 'abode,abided',
            trans: 'пребывать,держаться',
            gr: 2,
            grDesc: 'II = III'
        },
        awake: {
            ps: 'awoke',
            pp: 'awaked,awoke',
            trans: 'будить,проснуться',
            gr: 2,
            grDesc: 'II = III'
        },
        backbite: {
            ps: 'backbitten',
            pp: 'backbitten',
            trans: 'клеветать',
            gr: 2,
            grDesc: 'II = III'
        },
        backslide: {
            ps: 'backslid',
            pp: 'backslid',
            trans: 'отпадать',
            gr: 2,
            grDesc: 'II = III'
        },
        begird: {
            ps: 'begirt',
            pp: 'begirt',
            trans: 'опоясывать',
            gr: 2,
            grDesc: 'II = III'
        },
        behold: {
            ps: 'beheld',
            pp: 'beheld',
            trans: 'зреть',
            gr: 2,
            grDesc: 'II = III'
        },
        bend: {
            ps: 'bent',
            pp: 'bent,bended',
            trans: 'наклоняться (в стороны)',
            gr: 2,
            grDesc: 'II = III'
        },
        bereave: {
            ps: 'bereft,bereaved',
            pp: 'bereft,bereaved',
            trans: 'лишать',
            gr: 2,
            grDesc: 'II = III'
        },
        beseech: {
            ps: 'besought,beseeched',
            pp: 'besought,beseeched',
            trans: 'умолять,упрашивать',
            gr: 2,
            grDesc: 'II = III'
        },
        bespeak: {
            ps: 'bespoke',
            pp: 'bespoke,bespoken',
            trans: 'заказывать',
            gr: 2,
            grDesc: 'II = III'
        },
        bespit: {
            ps: 'bespat',
            pp: 'bespat',
            trans: 'заплевывать',
            gr: 2,
            grDesc: 'II = III'
        },
        bet: {
            ps: 'bet,betted',
            pp: 'bet,betted',
            trans: 'держать пари',
            gr: 2,
            grDesc: 'II = III'
        },
        bind: {
            ps: 'bound',
            pp: 'bound',
            trans: 'связать',
            gr: 2,
            grDesc: 'II = III'
        },
        rebind: {
            ps: 'rebound',
            pp: 'rebound',
            trans: 'перевязывать',
            gr: 2,
            grDesc: 'II = III'
        },
        bleed: {
            ps: 'bled',
            pp: 'bled',
            trans: 'кровоточить',
            gr: 2,
            grDesc: 'II = III'
        },
        bless: {
            ps: 'blessed',
            pp: 'blessed,blest',
            trans: 'благословлять',
            gr: 2,
            grDesc: 'II = III'
        },
        breed: {
            ps: 'bred',
            pp: 'bred',
            trans: 'выращивать',
            gr: 2,
            grDesc: 'II = III'
        },
        burn: {
            ps: 'burnt,burned',
            pp: 'burnt,burned',
            trans: 'жечь,гореть',
            gr: 2,
            grDesc: 'II = III'
        },
        cleave: {
            ps: 'clove,cleft,cleaved',
            pp: 'cloven,cleft,cleaved',
            trans: 'рассечь',
            gr: 2,
            grDesc: 'II = III'
        },
        cling: {
            ps: 'clung',
            pp: 'clung',
            trans: 'цепляться,льнуть',
            gr: 2,
            grDesc: 'II = III'
        },
        creep: {
            ps: 'crept',
            pp: 'crept',
            trans: 'ползти',
            gr: 2,
            grDesc: 'II = III'
        },
        crow: {
            ps: 'crowed,crew',
            pp: 'crowed',
            trans: 'петь (о петухе)',
            gr: 2,
            grDesc: 'II = III'
        },
        dare: {
            ps: 'durst,dared',
            pp: 'dared',
            trans: 'сметь',
            gr: 2,
            grDesc: 'II = III'
        },
        deal: {
            ps: 'dealt',
            pp: 'dealt',
            trans: 'иметь дело',
            gr: 2,
            grDesc: 'II = III'
        },
        dive: {
            ps: 'dived,dove',
            pp: 'dived',
            trans: 'нырять,погружаться',
            gr: 2,
            grDesc: 'II = III'
        },
        dream: {
            ps: 'dreamt,dreamed',
            pp: 'dreamt,dreamed',
            trans: 'грезить,мечтать',
            gr: 2,
            grDesc: 'II = III'
        },
        dwell: {
            ps: 'dwelt',
            pp: 'dwelt',
            trans: 'обитать,задерживаться',
            gr: 2,
            grDesc: 'II = III'
        },
        flee: {
            ps: 'fled',
            pp: 'fled',
            trans: 'бежать,спасаться',
            gr: 2,
            grDesc: 'II = III'
        },
        fling: {
            ps: 'flung',
            pp: 'flung',
            trans: 'бросить',
            gr: 2,
            grDesc: 'II = III'
        },
        floodlight: {
            ps: 'floodlighted,floodlit',
            pp: 'floodlighted,floodlit',
            trans: 'освещать прожектором',
            gr: 2,
            grDesc: 'II = III'
        },
        forecast: {
            ps: 'forecast,forecasted',
            pp: 'forecast,forecasted',
            trans: 'предсказывать',
            gr: 2,
            grDesc: 'II = III'
        },
        gild: {
            ps: 'gilt,gilded',
            pp: 'gilt,gilded',
            trans: 'позолотить',
            gr: 2,
            grDesc: 'II = III'
        },
        gird: {
            ps: 'girded,girt',
            pp: 'girded,girt',
            trans: 'опоясывать',
            gr: 2,
            grDesc: 'II = III'
        },
        hamstring: {
            ps: 'hamstringed,hamstrung',
            pp: 'hamstringed,hamstrung',
            trans: 'подрезать поджилки',
            gr: 2,
            grDesc: 'II = III'
        },
        heave: {
            ps: 'heaved,hove',
            pp: 'heaved,hove',
            trans: 'подымать(ся)',
            gr: 2,
            grDesc: 'II = III'
        },
        ken: {
            ps: 'kenned,kent',
            pp: 'kenned',
            trans: 'знать,узнавать по виду',
            gr: 2,
            grDesc: 'II = III'
        },
        kneel: {
            ps: 'knelt,kneeled',
            pp: 'knelt,kneeled',
            trans: 'стоять на коленях',
            gr: 2,
            grDesc: 'II = III'
        },
        knit: {
            ps: 'knit,knitted',
            pp: 'knit,knitted',
            trans: 'вязать',
            gr: 2,
            grDesc: 'II = III'
        },
        lead: {
            ps: 'led',
            pp: 'led',
            trans: 'вести',
            gr: 2,
            grDesc: 'II = III'
        },
        lean: {
            ps: 'leant,leaned',
            pp: 'leant,leaned',
            trans: 'опираться,прислоняться',
            gr: 2,
            grDesc: 'II = III'
        },
        leap: {
            ps: 'leapt,leaped',
            pp: 'leapt,leaped',
            trans: 'прыгать',
            gr: 2,
            grDesc: 'II = III'
        },
        learn: {
            ps: 'learnt,learned',
            pp: 'learnt,learned',
            trans: 'учить',
            gr: 2,
            grDesc: 'II = III'
        },
        lend: {
            ps: 'lent',
            pp: 'lent',
            trans: 'одалживать',
            gr: 2,
            grDesc: 'II = III'
        },
        light: {
            ps: 'lit,lighted',
            pp: 'lit,lighted',
            trans: 'освещать',
            gr: 2,
            grDesc: 'II = III'
        },
        may: {
            ps: 'might',
            pp: 'might',
            trans: 'мочь,иметь возможность',
            gr: 2,
            grDesc: 'II = III'
        },
        misdeal: {
            ps: 'misdealt',
            pp: 'misdealt',
            trans: 'поступать неправильно',
            gr: 2,
            grDesc: 'II = III'
        },
        mislead: {
            ps: 'misled',
            pp: 'misled',
            trans: 'ввести в заблуждение',
            gr: 2,
            grDesc: 'II = III'
        },
        mow: {
            ps: 'mowed',
            pp: 'mown,mowed',
            trans: 'косить',
            gr: 2,
            grDesc: 'II = III'
        },
        outshine: {
            ps: 'outshone',
            pp: 'outshone',
            trans: 'затмевать',
            gr: 2,
            grDesc: 'II = III'
        },
        plead: {
            ps: 'pleaded,pled',
            pp: 'pleaded,pled',
            trans: 'обращаться к суду',
            gr: 2,
            grDesc: 'II = III'
        },
        quit: {
            ps: 'quit,quitted',
            pp: 'quit,quitted',
            trans: 'покидать,оставлять,выходить',
            gr: 2,
            grDesc: 'II = III'
        },
        rend: {
            ps: 'rent',
            pp: 'rent',
            trans: 'раздирать',
            gr: 2,
            grDesc: 'II = III'
        },
        rid: {
            ps: 'rid,ridded',
            pp: 'rid,ridded',
            trans: 'избавлять',
            gr: 2,
            grDesc: 'II = III'
        },
        shine: {
            ps: 'shone,shined',
            pp: 'shone,shined',
            trans: 'светить,сиять',
            gr: 2,
            grDesc: 'II = III'
        },
        shoe: {
            ps: 'shod',
            pp: 'shod',
            trans: 'обувать,подковывать',
            gr: 2,
            grDesc: 'II = III'
        },
        slide: {
            ps: 'slid',
            pp: 'slid',
            trans: 'скользить',
            gr: 2,
            grDesc: 'II = III'
        },
        sling: {
            ps: 'slung',
            pp: 'slung',
            trans: 'швырять,подвешивать',
            gr: 2,
            grDesc: 'II = III'
        },
        slink: {
            ps: 'slunk',
            pp: 'slunk',
            trans: 'идти крадучись',
            gr: 2,
            grDesc: 'II = III'
        },
        smell: {
            ps: 'smelt,smelled',
            pp: 'smelt,smelled',
            trans: 'пахнуть,нюхать',
            gr: 2,
            grDesc: 'II = III'
        },
        speed: {
            ps: 'sped,speeded',
            pp: 'sped,speeded',
            trans: 'ускорять,спешить',
            gr: 2,
            grDesc: 'II = III'
        },
        spell: {
            ps: 'spelt,spelled',
            pp: 'spell,spelled',
            trans: 'писать или читать по буквам',
            gr: 2,
            grDesc: 'II = III'
        },
        misspell: {
            ps: 'misspelt,misspeled',
            pp: 'misspelt,misspeled',
            trans: 'писать с ошибками',
            gr: 2,
            grDesc: 'II = III'
        },
        spill: {
            ps: 'spilt,spilled',
            pp: 'spilt,spilled',
            trans: 'проливать',
            gr: 2,
            grDesc: 'II = III'
        },
        spin: {
            ps: 'spun,span',
            pp: 'spun',
            trans: 'прясть',
            gr: 2,
            grDesc: 'II = III'
        },
        spit: {
            ps: 'spat,spit',
            pp: 'spat,spit',
            trans: 'плевать',
            gr: 2,
            grDesc: 'II = III'
        },
        spoil: {
            ps: 'spoilt,spoiled',
            pp: 'spoilt,spoiled',
            trans: 'портить',
            gr: 2,
            grDesc: 'II = III'
        },
        spotlight: {
            ps: 'spotlit,spotlighted',
            pp: 'spotlit,spotlighted',
            trans: 'осветить',
            gr: 2,
            grDesc: 'II = III'
        },
        stave: {
            ps: 'staved,stove',
            pp: 'staved,stove',
            trans: 'проламывать,разби(ва)ть',
            gr: 2,
            grDesc: 'II = III'
        },
        strike: {
            ps: 'struck',
            pp: 'struck',
            trans: 'ударить,бить,бастовать',
            gr: 2,
            grDesc: 'II = III'
        },
        string: {
            ps: 'strung',
            pp: 'strung',
            trans: 'нанизать,натянуть',
            gr: 2,
            grDesc: 'II = III'
        },
        sweep: {
            ps: 'swept',
            pp: 'swept',
            trans: 'мести,промчаться',
            gr: 2,
            grDesc: 'II = III'
        },
        swing: {
            ps: 'swung',
            pp: 'swung',
            trans: 'качаться',
            gr: 2,
            grDesc: 'II = III'
        },
        unbend: {
            ps: 'unbent',
            pp: 'unbent',
            trans: 'разогнуть(ся)',
            gr: 2,
            grDesc: 'II = III'
        },
        unwind: {
            ps: 'unwound',
            pp: 'unwound',
            trans: 'развертывать',
            gr: 2,
            grDesc: 'II = III'
        },
        wed: {
            ps: 'wed,wedded',
            pp: 'wed,wedded',
            trans: 'выдавать замуж',
            gr: 2,
            grDesc: 'II = III'
        },
        weep: {
            ps: 'wept',
            pp: 'wept',
            trans: 'плакать',
            gr: 2,
            grDesc: 'II = III'
        },
        wet: {
            ps: 'wet,wetted',
            pp: 'wet,wetted',
            trans: 'мочить,увлажнять',
            gr: 2,
            grDesc: 'II = III'
        },
        wind: {
            ps: 'wound',
            pp: 'wound',
            trans: 'заводить (механизм)',
            gr: 2,
            grDesc: 'II = III'
        },
        work: {
            ps: 'worked,wrought',
            pp: 'worked,wrought',
            trans: 'работать',
            gr: 2,
            grDesc: 'II = III'
        },
        wring: {
            ps: 'wrung',
            pp: 'wrung',
            trans: 'скрутить,сжать',
            gr: 2,
            grDesc: 'II = III'
        },
        be: {
            ps: 'was|were',
            pp: 'been',
            trans: 'быть',
            gr: 3,
            grDesc: '- en'
        },
        see: {
            ps: 'saw',
            pp: 'seen',
            trans: 'видеть,увидеть',
            gr: 3,
            grDesc: '- en'
        },
        foresee: {
            ps: 'foresaw',
            pp: 'foreseen',
            trans: 'предвидеть',
            gr: 3,
            grDesc: '- en'
        },
        oversee: {
            ps: 'oversaw',
            pp: 'overseen',
            trans: 'надзирать за',
            gr: 3,
            grDesc: '- en'
        },
        give: {
            ps: 'gave',
            pp: 'given',
            trans: 'давать,дать',
            gr: 3,
            grDesc: '- en'
        },
        forgive: {
            ps: 'forgave',
            pp: 'forgiven',
            trans: 'прощать,простить',
            gr: 3,
            grDesc: '- en'
        },
        misgive: {
            ps: 'misgave',
            pp: 'misgiven',
            trans: 'внушать,опасения',
            gr: 3,
            grDesc: '- en'
        },
        eat: {
            ps: 'ate',
            pp: 'eaten',
            trans: 'есть,съесть',
            gr: 3,
            grDesc: '- en'
        },
        overeat: {
            ps: 'overate',
            pp: 'overeaten',
            trans: 'объедаться',
            gr: 3,
            grDesc: '- en'
        },
        beat: {
            ps: 'beat',
            pp: 'beaten',
            trans: 'бить,избить',
            gr: 3,
            grDesc: '- en'
        },
        choose: {
            ps: 'chose',
            pp: 'chosen',
            trans: 'выбирать,выбрать',
            gr: 3,
            grDesc: '- en'
        },
        break: {
            ps: 'broke',
            pp: 'broken',
            trans: 'ломать,сломать,разбить',
            gr: 3,
            grDesc: '- en'
        },
        wake: {
            ps: 'woke,waked',
            pp: 'woken,waked',
            trans: 'будить,разбудить,просыпаться,проснуться',
            gr: 3,
            grDesc: '- en'
        },
        freeze: {
            ps: 'froze',
            pp: 'frozen',
            trans: 'морозить,замораживать,мёрзнуть,замёрзнуть',
            gr: 3,
            grDesc: '- en'
        },
        unfreeze: {
            ps: 'unfroze',
            pp: 'unfrozen',
            trans: 'размораживать',
            gr: 3,
            grDesc: '- en'
        },
        speak: {
            ps: 'spoke',
            pp: 'spoken',
            trans: 'говорить',
            gr: 3,
            grDesc: '- en'
        },
        steal: {
            ps: 'stole',
            pp: 'stolen',
            trans: 'воровать,красть,украсть',
            gr: 3,
            grDesc: '- en'
        },
        bite: {
            ps: 'bit',
            pp: 'bitten',
            trans: 'кусать(ся),укусить',
            gr: 3,
            grDesc: '- en'
        },
        hide: {
            ps: 'hid',
            pp: 'hidden',
            trans: 'прятать(ся),спрятать(ся)',
            gr: 3,
            grDesc: '- en'
        },
        forbid: {
            ps: 'forbade',
            pp: 'forbidden',
            trans: 'запрещать,запретить',
            gr: 3,
            grDesc: '- en'
        },
        take: {
            ps: 'took',
            pp: 'taken',
            trans: 'брать,взять',
            gr: 3,
            grDesc: '- en'
        },
        retake: {
            ps: 'retook',
            pp: 'retaken',
            trans: 'забирать',
            gr: 3,
            grDesc: '- en'
        },
        overtake: {
            ps: 'overtook',
            pp: 'overtaken',
            trans: 'догонять',
            gr: 3,
            grDesc: '- en'
        },
        partake: {
            ps: 'partook',
            pp: 'partaken',
            trans: 'принимать участие',
            gr: 3,
            grDesc: '- en'
        },
        undertake: {
            ps: 'undertook',
            pp: 'undertaken',
            trans: 'предпринять',
            gr: 3,
            grDesc: '- en'
        },
        shake: {
            ps: 'shook',
            pp: 'shaken',
            trans: 'трясти,потрясти',
            gr: 3,
            grDesc: '- en'
        },
        mistake: {
            ps: 'mistook',
            pp: 'mistaken',
            trans: 'ошибаться',
            gr: 3,
            grDesc: '- en'
        },
        write: {
            ps: 'wrote',
            pp: 'written',
            trans: 'писать,написать',
            gr: 3,
            grDesc: '- en'
        },
        rewrite: {
            ps: 'rewrote',
            pp: 'rewritten',
            trans: 'пере(за)писать',
            gr: 3,
            grDesc: '- en'
        },
        underwrite: {
            ps: 'underwrote',
            pp: 'underwritten',
            trans: 'подписыва(ть)ся',
            gr: 3,
            grDesc: '- en'
        },
        drive: {
            ps: 'drove',
            pp: 'driven',
            trans: 'водить,вести машину,ехать,ездить',
            gr: 3,
            grDesc: '- en'
        },
        ride: {
            ps: 'rode',
            pp: 'ridden',
            trans: 'ехать,ездить,кататься на велосипеде или верхом',
            gr: 3,
            grDesc: '- en'
        },
        override: {
            ps: 'overrode',
            pp: 'overridden',
            trans: 'твергать,отклонять',
            gr: 3,
            grDesc: '- en'
        },
        rise: {
            ps: 'rose',
            pp: 'risen',
            trans: 'подниматься,подняться',
            gr: 3,
            grDesc: '- en'
        },
        chide: {
            ps: 'chid,chided',
            pp: 'chid,chided,chidden',
            trans: 'бранить',
            gr: 3,
            grDesc: '- en'
        },
        grave: {
            ps: 'graved',
            pp: 'graved,graven',
            trans: 'гравировать',
            gr: 3,
            grDesc: '- en'
        },
        lade: {
            ps: 'laded',
            pp: 'laded,laden',
            trans: 'грузить',
            gr: 3,
            grDesc: '- en'
        },
        prove: {
            ps: 'proved',
            pp: 'proved,proven',
            trans: 'доказывать,оказаться',
            gr: 3,
            grDesc: '- en'
        },
        shave: {
            ps: 'shaved',
            pp: 'shaved,shaven',
            trans: 'брить(ся)',
            gr: 3,
            grDesc: '- en'
        },
        shrive: {
            ps: 'shrived,shrove',
            pp: 'shrived,shriven',
            trans: 'исповедовать',
            gr: 3,
            grDesc: '- en'
        },
        swell: {
            ps: 'swelled',
            pp: 'swelled,swollen',
            trans: 'разбухать',
            gr: 3,
            grDesc: '- en'
        },
        thrive: {
            ps: 'trived,throve',
            pp: 'trived,thriven',
            trans: 'процветать',
            gr: 3,
            grDesc: '- en'
        },
        weave: {
            ps: 'weaved,wove',
            pp: 'weaved,woven',
            trans: 'ткать',
            gr: 3,
            grDesc: '- en'
        },
        browbeat: {
            ps: 'browbeat',
            pp: 'browbeaten',
            trans: 'запугивать',
            gr: 3,
            grDesc: '- en'
        },
        arise: {
            ps: 'arose',
            pp: 'arisen',
            trans: 'подняться,возникнуть',
            gr: 3,
            grDesc: '- en'
        },
        befall: {
            ps: 'befell',
            pp: 'befallen',
            trans: 'случиться',
            gr: 3,
            grDesc: '- en'
        },
        beget: {
            ps: 'begot,begat',
            pp: 'begotten',
            trans: 'порождать',
            gr: 3,
            grDesc: '- en'
        },
        bestride: {
            ps: 'bestrode',
            pp: 'bestridden',
            trans: 'садиться,сидеть верхом',
            gr: 3,
            grDesc: '- en'
        },
        betake: {
            ps: 'betook',
            pp: 'betaken',
            trans: 'приниматься,отправляться',
            gr: 3,
            grDesc: '- en'
        },
        bid: {
            ps: 'bad,bade,bid',
            pp: 'bid,bidden',
            trans: 'велеть,просить',
            gr: 3,
            grDesc: '- en'
        },
        fall: {
            ps: 'fell',
            pp: 'fallen',
            trans: 'падать',
            gr: 3,
            grDesc: '- en'
        },
        forsake: {
            ps: 'forsook',
            pp: 'forsaken',
            trans: 'покидать',
            gr: 3,
            grDesc: '- en'
        },
        interweave: {
            ps: 'interwove',
            pp: 'interwoven',
            trans: 'воткать',
            gr: 3,
            grDesc: '- en'
        },
        rive: {
            ps: 'rived',
            pp: 'riven',
            trans: 'расщеплять',
            gr: 3,
            grDesc: '- en'
        },
        smite: {
            ps: 'smote',
            pp: 'smitten',
            trans: 'ударять,разбивать',
            gr: 3,
            grDesc: '- en'
        },
        stride: {
            ps: 'strode',
            pp: 'stridden',
            trans: 'шагать,наносить удар',
            gr: 3,
            grDesc: '- en'
        },
        strive: {
            ps: 'strove',
            pp: 'striven',
            trans: 'стараться',
            gr: 3,
            grDesc: '- en'
        },
        tread: {
            ps: 'trod',
            pp: 'trod,trodden',
            trans: 'ступать',
            gr: 3,
            grDesc: '- en'
        },
        know: {
            ps: 'knew',
            pp: 'known',
            trans: 'знать',
            gr: 4,
            grDesc: '- n'
        },
        fly: {
            ps: 'flew',
            pp: 'flown',
            trans: 'летать,лететь',
            gr: 4,
            grDesc: '- n'
        },
        overfly: {
            ps: 'overflew',
            pp: 'overflown',
            trans: 'перелетать',
            gr: 4,
            grDesc: '- n'
        },
        blow: {
            ps: 'blew',
            pp: 'blown',
            trans: 'дуть,подуть',
            gr: 4,
            grDesc: '- n'
        },
        grow: {
            ps: 'grew',
            pp: 'grown',
            trans: 'расти,вырасти',
            gr: 4,
            grDesc: '- n'
        },
        throw: {
            ps: 'threw',
            pp: 'thrown',
            trans: 'бросать(ся),бросить(ся)',
            gr: 4,
            grDesc: '- n'
        },
        overthrow: {
            ps: 'overthrew',
            pp: 'overthrown',
            trans: 'свергать',
            gr: 4,
            grDesc: '- n'
        },
        wear: {
            ps: 'wore',
            pp: 'worn',
            trans: 'носить (одежду обувь)',
            gr: 4,
            grDesc: '- n'
        },
        swear: {
            ps: 'swore',
            pp: 'sworn',
            trans: 'клясться,присягнуть',
            gr: 4,
            grDesc: '- n'
        },
        forswear: {
            ps: 'forswore',
            pp: 'forsworn',
            trans: 'отрекаться',
            gr: 4,
            grDesc: '- n'
        },
        tear: {
            ps: 'tore',
            pp: 'torn',
            trans: 'рвать(ся),порвать(ся)',
            gr: 4,
            grDesc: '- n'
        },
        forbear: {
            ps: 'forbore',
            pp: 'forborne',
            trans: 'воздерживаться',
            gr: 4,
            grDesc: '- n'
        },
        bear: {
            ps: 'bore',
            pp: 'born,borne',
            trans: 'родить',
            gr: 4,
            grDesc: '- n'
        },
        draw: {
            ps: 'drew',
            pp: 'drawn',
            trans: 'рисовать,тащить',
            gr: 4,
            grDesc: '- n'
        },
        overdraw: {
            ps: 'overdrew',
            pp: 'overdrawn',
            trans: 'превышать',
            gr: 4,
            grDesc: '- n'
        },
        withdraw: {
            ps: 'withdrew',
            pp: 'withdrawn',
            trans: 'взять назад,отозвать',
            gr: 4,
            grDesc: '- n'
        },
        outgrow: {
            ps: 'outgrew',
            pp: 'outgrown',
            trans: 'вырастать из',
            gr: 4,
            grDesc: '- n'
        },
        slay: {
            ps: 'slew',
            pp: 'slain',
            trans: 'убивать',
            gr: 4,
            grDesc: '- n'
        },
        hew: {
            ps: 'hewed',
            pp: 'hewed,hewn',
            trans: 'рубить,тесать',
            gr: 4,
            grDesc: '- n'
        },
        saw: {
            ps: 'sawed',
            pp: 'sawed,sawn',
            trans: 'пилить',
            gr: 4,
            grDesc: '- n'
        },
        sew: {
            ps: 'sewed',
            pp: 'sewed,sewn',
            trans: 'шить',
            gr: 4,
            grDesc: '- n'
        },
        shear: {
            ps: 'sheared',
            pp: 'sheared,shorn',
            trans: 'стричь',
            gr: 4,
            grDesc: '- n'
        },
        sow: {
            ps: 'sowed',
            pp: 'sowed,sown',
            trans: '(по)сеять',
            gr: 4,
            grDesc: '- n'
        },
        strew: {
            ps: 'strewed',
            pp: 'strewed,strewn',
            trans: 'усеять,устлать',
            gr: 4,
            grDesc: '- n'
        },
        begin: {
            ps: 'began',
            pp: 'begun',
            trans: 'начинать(ся),начать(ся)',
            gr: 5,
            grDesc: 'i - a - u'
        },
        sing: {
            ps: 'sang',
            pp: 'sung',
            trans: 'петь,спеть',
            gr: 5,
            grDesc: 'i - a - u'
        },
        ring: {
            ps: 'rang',
            pp: 'rung',
            trans: 'звонить,позвонить',
            gr: 5,
            grDesc: 'i - a - u'
        },
        spring: {
            ps: 'sprang',
            pp: 'sprung',
            trans: 'вскочить,возникнуть',
            gr: 5,
            grDesc: 'i - a - u'
        },
        drink: {
            ps: 'drank',
            pp: 'drunk',
            trans: 'пить',
            gr: 5,
            grDesc: 'i - a - u'
        },
        swim: {
            ps: 'swam',
            pp: 'swum',
            trans: 'плыть,плавать',
            gr: 5,
            grDesc: 'i - a - u'
        },
        run: {
            ps: 'ran',
            pp: 'run',
            trans: 'бежать,бегать',
            gr: 6,
            grDesc: 'I = III'
        },
        outrun: {
            ps: 'outran',
            pp: 'outrun',
            trans: 'перегонять,опережать',
            gr: 6,
            grDesc: 'I = III'
        },
        overrun: {
            ps: 'overran',
            pp: 'overrun',
            trans: 'переливаться через край',
            gr: 6,
            grDesc: 'I = III'
        },
        rerun: {
            ps: 'reran',
            pp: 'rerun',
            trans: 'выполнять повторно',
            gr: 6,
            grDesc: 'I = III'
        },
        come: {
            ps: 'came',
            pp: 'come',
            trans: 'приходить,прийти',
            gr: 6,
            grDesc: 'I = III'
        },
        become: {
            ps: 'became',
            pp: 'become',
            trans: 'становиться,стать',
            gr: 6,
            grDesc: 'I = III'
        },
        show: {
            ps: 'showed',
            pp: 'shown',
            trans: 'показывать,показать',
            gr: 6,
            grDesc: 'I = III'
        },
        forget: {
            ps: 'forgot',
            pp: 'forgotten',
            trans: 'забывать',
            gr: 6,
            grDesc: 'I = III'
        },
        countersink: {
            ps: 'countersank',
            pp: 'countersunk',
            trans: 'зенковать',
            gr: 6,
            grDesc: 'I = III'
        },
        sink: {
            ps: 'sank',
            pp: 'sunk',
            trans: 'опускаться,погружаться,тонуть',
            gr: 6,
            grDesc: 'I = III'
        },
        stink: {
            ps: 'stank,stunk',
            pp: 'stunk',
            trans: 'вонять',
            gr: 6,
            grDesc: 'I = III'
        },
        lay: {
            ps: 'laid',
            pp: 'laid',
            trans: 'класть,положить кого-то или что-то куда-то  ',
            gr: 7,
            grDesc: 'Трудные'
        },
        lie: {
            ps: 'lay',
            pp: 'lain',
            trans: 'лежать где-то',
            gr: 7,
            grDesc: 'Трудные'
        },
        underlie: {
            ps: 'underlay',
            pp: 'underlain',
            trans: 'лежать в основе ',
            gr: 7,
            grDesc: 'Трудные'
        },
        lie: {
            ps: 'lied',
            pp: 'laid',
            trans: 'врать,говорить неправду  ',
            gr: 7,
            grDesc: 'Трудные'
        },
        raise: {
            ps: 'raised',
            pp: 'raised',
            trans: 'поднимать,поднять что-то,кого-то  ',
            gr: 7,
            grDesc: 'Трудные'
        },
        rise: {
            ps: 'rose',
            pp: 'risen',
            trans: 'вставать,встать,подниматься,подняться  ',
            gr: 7,
            grDesc: 'Трудные'
        }
    };