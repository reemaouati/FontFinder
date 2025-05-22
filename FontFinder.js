// ==UserScript==
// @name         FontFinder
// @namespace    https://github.com/reemaouati
// @version      0.1
// @description  Extract all font families used on the website.
// @author       Reem Aouati
// @run-at       document-end
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const fonts = new Set();
    const elements = document.querySelectorAll('*');

    elements.forEach(el => {
        const font = window.getComputedStyle(el).getPropertyValue('font-family');
        if (font) fonts.add(font.trim());
    });

    const fontList = Array.from(fonts).join('\n');

    if (fontList.length === 0) {
        alert('FontFinder: No fonts found.');
    } else {
        alert(`Fonts used on this page:\n\n${fontList}`);
    }

})();
