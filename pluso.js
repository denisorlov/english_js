(function() {
    if(!/https*:/.test(window.location.protocol)) return; // only for http/https
    if (window.pluso)if (typeof window.pluso.start == "function") return;
    if (window.ifpluso==undefined) {
        window.ifpluso = 1;
        document.write('<div class="pluso" data-background="transparent" data-options="medium,square,line,horizontal,counter,theme=03" data-services="vkontakte,odnoklassniki,livejournal,facebook,twitter,google,moikrug,moimir,liveinternet,memori,yazakladki"></div>');
        var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
        s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
        s.src = window.location.protocol  + '//share.pluso.ru/pluso-like.js';
        var h=d[g]('body')[0];
        h.appendChild(s);
    }
})();