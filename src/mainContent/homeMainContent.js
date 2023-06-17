import {createElement, appendAChild, createTextSection} from '../generalFunctions.js'
/*
    Renders all of the content in the Main Content container in Home Page. 
*/
export function homeMainContent() {
    const mainContainer = createElement('div', 'body-container');

    //Section 1 Content - TOP
    const section1 = createElement('div', 'section1');
    appendAChild(mainContainer, section1);
    
    //Section 1 Content - LEFT
    const section1left = createElement('div', 'textSection');
    const section1h1 = createElement('h3', 'h3-text', 'h2-tutoring-section', 'Pass All of Your Civil Engineering classes with A');
    const section1P= createElement('p', 'paragraph', 'p-tutoring-section', 'CivETech helps our students to gain the skills and knowledge to excel in every assignment and exams in all Civil Engineering subjects');
    const section1ButtonContainer = createElement('div', '', 'Section1-Button-Container');
    const section1Button1 = createElement('button', 'button', 'Section1-Button1', 'Get started');
    const section1Button2 = createElement('button', 'button', 'Section1-Button2', 'Learn more');
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

    //Section 2 - PE Walk with Confidence - MIDDLE
    const section2 = createElement('div', 'section2');
    const section2TextContainer = createElement('div', 'section2TextContainer');
    const section2Text = createElement('div', 'section2Text');
    createTextSection('Walk into the Civil PE Exam with Confidence!', 'h3-text', 'h3-pe-section',
    'We offer personalized guidance to help you use your study time effectively! \n\n Our tutors will help you reinforce on the exam areas that require the most attention \
    and share tips and tricks will allow you to walk with confidence into the PE Exam.', 
    'paragraph', 'p-pe-section', section2Text);
    appendAChild(section2TextContainer, section2Text);
    appendAChild(section2, section2TextContainer);
    const section2ButtonContainer = createElement('div', '', 'Section2-Button-Container');
    const section2Button1 = createElement('button', 'button', 'Section2-Button1', 'Get started');
    const section2Button2 = createElement('button', 'button', 'Section2-Button2', 'Learn more');
    appendAChild(section2ButtonContainer, section2Button1);
    appendAChild(section2ButtonContainer, section2Button2);
    appendAChild(section2, section2ButtonContainer);
    appendAChild(mainContainer, section2);

    //Section 3 - Trusted Partners - MIDDLE
    const section3 = createElement('div', 'section3');
    const section3TextContainer = createElement('div', 'section3TextContainer');
    const section3Text = createElement('div', 'section3Text');
    createTextSection('Let CivE Tutors be your trusted partners towards FE Success!', 'h3-text', 'h3-pe-section',
    'Our aim is not only to help you pass the FE exam but also deepen your understanding \
    on the subject matter for career success!', 
    'paragraph', 'p-pe-section', section3Text);
    appendAChild(section3TextContainer, section3Text);
    appendAChild(section3, section3TextContainer);
    const section3ButtonContainer = createElement('div', '', 'Section3-Button-Container');
    const section3Button1 = createElement('button', 'button', 'Section3-Button1', 'Get started');
    const section3Button2 = createElement('button', 'button', 'Section3-Button2', 'Learn more');
    appendAChild(section3ButtonContainer, section3Button1);
    appendAChild(section3ButtonContainer, section3Button2);
    appendAChild(section3, section3ButtonContainer);
    appendAChild(mainContainer, section3);

    //Section 4 - Our Tutors - BOTTOM
    const section4 = createElement('div', 'section4');
    const section4Text = createElement('div', 'section4Text')
    createTextSection('Meet Our Tutors!', 'h3-text', 'h3-pe-section',
    'Our tutors have over 6 years of hands-on Professional Engineering experience in Civil Engineering!'
    , 'paragraph', 'p-pe-section', section4Text);
    appendAChild(section4, section4Text)
    const section4img = createElement('img', '', 'section4-img');
    section4img.src = "/src/img/wilson-img.png";
    appendAChild(section4, section4img);
    const section4ButtonContainer = createElement('div', '', 'Section4-Button-Container');
    const section4Button1 = createElement('button', 'button', 'Section4-Button1', 'Learn more about our Tutors');
    appendAChild(section4ButtonContainer, section4Button1);
    appendAChild(section4, section4ButtonContainer);
    appendAChild(mainContainer, section4);
    
    return mainContainer;
}
