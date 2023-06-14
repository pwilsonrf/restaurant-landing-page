import {createElement, appendAChild, createTextSection} from './generalFunctions';
import {peExamMainContent} from './mainContent/peExamMainContent.js';
import {pricingMainContent} from './mainContent/pricingMainContent.js';
import {feExamMainContent} from './mainContent/feExamMainContent.js';
import {aboutMainContent} from './mainContent/aboutMainContent.js';
import {successStoriesMainContent} from './mainContent/successStoriesMainContent.js';
import {homeMainContent} from './mainContent/homeMainContent.js';

export function footerContent() {
    const footer = createElement('div', 'footer', 'footer'); 

    // // Footer Container 1 
    // const footerCont1 = createElement('div', 'footerContainer', 'footer1');
    // appendAChild(footer, footerCont1);

    // Footer Container 2
    const footerCont2 = createElement('div', 'footerContainer', 'footer2');
    const footerHeader2 = createElement('h3', 'footerHeading', 'footerMenu', 'Menu');
    appendAChild(footerCont2, footerHeader2);
    createElement('a', 'nav-item', 'home-link', 'Home', footerCont2, '#', homeMainContent);
    createElement('a', 'nav-item', 'feExam-link', 'FE Exam', footerCont2, '#', feExamMainContent);
    createElement('a', 'nav-item', 'peExam-link', 'PE Exam', footerCont2, '#', peExamMainContent);
    createElement('a', 'nav-item', 'success-stories-link', 'Success Stories', footerCont2, '#', successStoriesMainContent);
    createElement('a', 'nav-item', 'pricing-link', 'Pricing', footerCont2, '#', pricingMainContent);
    createElement('a', 'nav-item', 'about-link', 'About', footerCont2, '#', aboutMainContent);

    appendAChild(footer, footerCont2);

    //Footer Container 3
    const footerCont3 = createElement('div', 'footerContainer', 'footer3');
    const footerHeader3 = createElement('h3', 'footerHeading', 'footerContact', 'Contact Us');
    appendAChild(footerCont3, footerHeader3);
    createElement('a', 'contact-item', 'location', 'Long Beach, CA', footerCont3, 'https://goo.gl/maps/fmd3fYJSvBGff8vN9');
    createElement('a', 'contact-item', 'location', '(999) - 999 - 9999', footerCont3, 'tel:9999999999');
    appendAChild(footer, footerCont3);

    
    const footerText = createElement('p', '', 'footer-text', 'Copyright ⓒ 2023 CivE Tutors. All Rights Reserved.');
    footer.appendChild(footerText);
    return footer;
}