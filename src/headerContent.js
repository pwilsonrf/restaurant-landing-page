import {peExamMainContent} from './mainContent/peExamMainContent.js';
import {pricingMainContent} from './mainContent/pricingMainContent.js';
import {homeMainContent} from './mainContent/homeMainContent.js';
import {createElement, appendAChild} from './generalFunctions';

/*
Creates header container with nav bar
*/
export function headerContent (){
    //Create header, logo and navbar containers
    const header = createElement('div', 'header');
    const logo = createElement('div', '', 'logo-container');
    const navBar = createElement('div', '', 'navbar');

    // Create Nav Bar Containers
    const homeCont = createElement('div', 'nav-item-container');
    const peExamCont = createElement('div', 'nav-item-container');
    const pricingCont = createElement('div', 'nav-item-container');
    const navBarMenu = [homeCont, peExamCont, pricingCont];

    //Create Nav Bar Links
    createElement('a', 'nav-item', 'home-link', 'Home', homeCont, '#', homeMainContent);
    createElement('a', 'nav-item', 'peExam-link', 'PE Exam', peExamCont, '#', peExamMainContent);
    createElement('a', 'nav-item', 'pricing-link', 'Pricing', pricingCont, '#', pricingMainContent);

    //Append Nav Bar children
    for (let i = 0; i < navBarMenu.length; i++){
        appendAChild(navBar, navBarMenu[i]);
    }

    //Append logo and nav bar to header
    header.appendChild(logo);
    header.appendChild(navBar);
    return header;
}