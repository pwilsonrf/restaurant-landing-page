import './styles.css';
import {homeMainContent} from './mainContent/homeMainContent.js';
import {headerContent} from './headerContent.js';
import {footerContent} from './footerContent.js';

const mainContainer = document.querySelector('#content');
const headerContainer = document.createElement('div', '', 'header-container');
const middleContainer = document.createElement('div', '', 'middle-container');
const footerContainer = document.createElement('div', '', 'footer-container');
mainContainer.appendChild(headerContainer);
mainContainer.appendChild(middleContainer);
mainContainer.appendChild(footerContainer);

//Initial Page Loading
renderContent(headerContent, headerContainer);
renderContent(homeMainContent, middleContainer);
renderContent(footerContent, footerContainer);


//Add on-click event for each nav bar link and render its content
const navBar = document.querySelectorAll('.nav-item');
navBar.forEach(element => element.addEventListener('click', ()=>{
    renderContent(element.content, middleContainer); }
));

/*
Render content in a container
Args:
    -page: Content to be rendered
    -container: Container whom content will be rendered to
*/
function renderContent(page, container){
    const newPage = page();
    const mainContainer = container;
    mainContainer.innerHTML = '';
    mainContainer.appendChild(newPage);
}