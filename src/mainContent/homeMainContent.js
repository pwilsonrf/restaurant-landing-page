import {createElement, appendAChild, createTextSection} from '../generalFunctions.js'
/*
    Renders all of the content in the Main Content container in Home Page. 
*/
export function homeMainContent() {
    const mainContainer = createElement('div', 'body-container');

    //Section 1 Content
    const section1 = createElement('div', 'section1');
    appendAChild(mainContainer, section1);
    
    //Section 1 Content - LEFT
    const section1left = createElement('div');
    const section1h1 = createElement('h1', '', '', 'Pass All of Your Civil Engineering classes with A');
    const section1P= createElement('p', 'paragraph', 'p-tutoring-section', 'CivETech helps our students to gain the skills and knowledge to excel in every assignment and exams in all Civil Engineering subjects');
    const section1ButtonContainer = createElement('div', '', 'Section1-Button-Container');
    const section1Button1 = createElement('button', '', 'Section1-Button1', 'Get started');
    const section1Button2 = createElement('button', '', 'Section1-Button2', 'Learn more');
    appendAChild(section1ButtonContainer, section1Button1);
    appendAChild(section1ButtonContainer, section1Button2);
    appendAChild(section1left, section1h1);
    appendAChild(section1left, section1P);
    appendAChild(section1left, section1ButtonContainer);

    //Section 1 Content - RIGHT
    const section1right = createElement('div');
    const section1img = createElement('img', '', 'section1-img');
    section1img.src = "/src/img/wilson-main-image.png";
    appendAChild(section1right, section1img);
    appendAChild(section1, section1left);
    appendAChild(section1, section1right);

    //Section 2
    const section2 = createElement('div', 'section2');
    createTextSection('Prepare for the PE Exam', 'h3-text', 'h3-pe-section', 'One-on-One tutoring\
    can help you answer any last minute questions you have in any section of the PE', 
    'paragraph', 'p-pe-section', section2);
    appendAChild(mainContainer, section2);
    return mainContainer;
}
