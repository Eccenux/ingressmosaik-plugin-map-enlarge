// ==UserScript==
// @name         Map enlarge
// @namespace    pl.enux.ingressmosaik
// @version      0.0.2
// @description  [0.0.2] Makes the map larger when you open Map tab in new tab.
// @author       Maciej Nux Jaros
// @include      https://*.ingressmosaik.com/*
// @include      https://ingressmosaik.com/*
// @match        https://*.ingressmosaik.com/*
// @match        https://ingressmosaik.com/*
// @grant        none
// @updateURL    https://github.com/Eccenux/ingressmosaik-plugin-map-enlarge/raw/master/map-enlarge.meta.js
// @downloadURL  https://github.com/Eccenux/ingressmosaik-plugin-map-enlarge/raw/master/map-enlarge.user.js
// ==/UserScript==

(function($) {
    'use strict';
	
	console.log('Hello from TM script');
	console.log('hash: ', location.hash);
	
    if (location.hash === '#maps') {
        // collapse everything but the tabs
        infoHide('1');
		// show maps tab
        setTimeout(function(){
            $("#ib2 a[href='#maps']").click(); // this has 300 ms timeout inside
        }, 100);
    }
})(jQuery);