// ==UserScript==
// @name         Map enlarge
// @namespace    pl.enux.ingressmosaik
// @version      0.0.1
// @description  [0.0.1] Makes the map larger when you open Map tab in new tab.
// @author       Maciej Nux Jaros
// @match        https://ingressmosaik.com/*
// @grant        none
// @updateURL    https://github.com/Eccenux/ingressmosaik-plugin-map-enlarge/raw/master/map-enlarge.meta.js
// @downloadURL  https://github.com/Eccenux/ingressmosaik-plugin-map-enlarge/raw/master/map-enlarge.user.js
// ==/UserScript==

(function($) {
    'use strict';
    if (location.hash === '#maps') {
        // collapse everything but the tabs
        infoHide('1');
        setTimeout(function(){
            $("#ib2 a[href='#maps']").click(); // this has 300 ms timeout inside
        }, 100)
        // will not work -- "Failed to execute 'requestFullscreen' on 'Element': API can only be initiated by a user gesture."
        /*
        setTimeout(function(){
            mymap.toggleFullscreen();
        }, 1000);
        */
    }
})(jQuery);