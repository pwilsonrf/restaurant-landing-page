import {categoriesMainContent} from './mainContent/categoriesMainContent.js';
import {pricingMainContent} from './mainContent/pricingMainContent.js';
import {getStartedMainContent} from './mainContent/getStartedMainContent.js';
import {aboutMainContent} from './mainContent/aboutMainContent.js';
import {successStoriesMainContent} from './mainContent/successStoriesMainContent.js';
import {homeMainContent} from './mainContent/homeMainContent.js';
import {createElement, appendAChild} from './generalFunctions';

/*
Creates header content
*/
export function headerContent (){
    //Create header, logo and navbar containers
    const header = createElement('div', 'header');
    const logo = createElement('div', '', 'logo-container');
    const navBar = createElement('div', '', 'navbar');

    // Create Nav Bar Containers
    const homeCont = createElement('div', 'nav-item-container');
    const aboutCont = createElement('div', 'nav-item-container');
    const successStoriesCont = createElement('div', 'nav-item-container');
    const categoriesCont = createElement('div', 'nav-item-container');
    const pricingCont = createElement('div', 'nav-item-container');
    const getStartedCont = createElement('div', 'nav-item-container');
    const navBarMenu = [homeCont, aboutCont, successStoriesCont, categoriesCont, pricingCont, getStartedCont];

    //Create Nav Bar Links
    createElement('a', 'nav-item', 'home-link', 'Home', homeCont, '#', homeMainContent);
    createElement('a', 'nav-item', 'categories-link', 'Categories', categoriesCont, '#', categoriesMainContent);
    createElement('a', 'nav-item', 'success-stories-link', 'Success Stores', successStoriesCont, '#', successStoriesMainContent);
    createElement('a', 'nav-item', 'pricing-link', 'Pricing', pricingCont, '#', pricingMainContent);
    createElement('a', 'nav-item', 'about-link', 'About', aboutCont, '#', aboutMainContent);
    createElement('a', 'nav-item', 'get-started-link', 'Get Started', getStartedCont, '#', getStartedMainContent);

    //Append Nav Bar children
    for (let i = 0; i < navBarMenu.length; i++){
        appendAChild(navBar, navBarMenu[i]);
    }

    //Append logo and nav bar to header
    header.appendChild(logo);
    header.appendChild(navBar);
    return header;
}