import {createElement, appendAChild, createTextSection} from './generalFunctions';
import {peExamMainContent} from './mainContent/peExamMainContent.js';
import {pricingMainContent} from './mainContent/pricingMainContent.js';
import {homeMainContent} from './mainContent/homeMainContent.js';

/*
Creates footer container with links, contact info and copyright message
*/
export function footerContent() {
    const footer = createElement('div', 'footer', 'footer'); 

    // Footer Container 1
    const footerCont1 = createElement('div', 'footerContainer', 'footer1');
    const footerHeader1 = createElement('h2', 'footerHeading', 'footerMenu', 'Menu');
    appendAChild(footerCont1, footerHeader1);
    createElement('a', 'nav-item', 'home-link', 'Home', footerCont1, '#', homeMainContent);
    createElement('a', 'nav-item', 'peExam-link', 'PE Exam', footerCont1, '#', peExamMainContent);
    createElement('a', 'nav-item', 'pricing-link', 'Pricing', footerCont1, '#', pricingMainContent);

    appendAChild(footer, footerCont1);

    //Footer Container 2
    const footerCont2 = createElement('div', 'footerContainer', 'footer2');
    const footerHeader2 = createElement('h2', 'footerHeading', 'footerContact', 'Contact Us');
    appendAChild(footerCont2, footerHeader2);
    createElement('a', 'contact-item', 'location', 'Long Beach, CA', footerCont2, 'https://goo.gl/maps/fmd2fYJSvBGff8vN9');
    createElement('a', 'contact-item', 'location', '(999) - 999 - 9999', footerCont2, 'tel:9999999999');
    appendAChild(footer, footerCont2);

    const footerText = createElement('p', '', 'footer-text', 'Copyright ⓒ 2023 CivE Tutors. All Rights Reserved.');
    footer.appendChild(footerText);
    return footer;
}