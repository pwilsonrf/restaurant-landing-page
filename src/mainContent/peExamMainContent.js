import {createElement, createTextSection, appendAChild} from '../generalFunctions';

export function peExamMainContent() {

    const mainContainer = createElement('div', 'peMainContainer');
    //Section 1
    const section1 = createElement('div', 'section1');
    const section1TextContainer = createElement('div', 'section1TextContainer');
    const section1Text = createElement('div', 'section1Text');
    createTextSection('Walk into the PE Civil Exam with confidence!', 'h3-text', 'h3-pe-section',
    'Our team of experienced engineers are committed to helping you excel in your PE journey.', 
    'paragraph', 'p-pe-section', section1Text);
    appendAChild(section1TextContainer, section1Text);
    appendAChild(section1, section1TextContainer);
    appendAChild(mainContainer, section1);


    //Section 2
    const section2 = createElement('div', 'section2');
    const section2TextContainer = createElement('div', 'section2TextContainer');
    const section2Text = createElement('div', 'section2Text');
    createTextSection('Got questions? We got answers!', 'h3-text', 'h3-pe-section',
    'Whether you\'re struggling with a particular concept or need comprehensive exam preparation,\
    our tutors are committed to helping you excel.', 'paragraph','p-pe-section', section2Text);
    appendAChild(section2TextContainer, section2Text);
    appendAChild(section2, section2TextContainer);
    appendAChild(mainContainer, section2);

    //Section 3
    const section3 = createElement('div', 'section3');
    const section3TextContainer = createElement('div', 'section3TextContainer');
    const section3Text = createElement('div', 'section3Text');
    const section3TextHeading  = createElement('h3', 'h3-text', 'h3-pe-section', 'PE Civil Exam Topics We Provide Tutoring Services For:');
    appendAChild(section3Text, section3TextHeading);
    const section3OL = createElement('ul', 'section3list');
    appendAChild(section3Text, section3OL);
    const section3list = ['Mechanics of Materials', 'Structural Analysis', 'Structural Design', 'Geotechnical Engineering', 'Surveying'];
    section3list.forEach(item => {
        appendAChild(section3OL, createElement('li', '', '', item));
    });
    appendAChild(section3TextContainer, section3Text);
    appendAChild(section3, section3TextContainer);
    appendAChild(mainContainer, section3);

    //Section 4
    const section4 = createElement('div', 'section4');
    const section4TextContainer = createElement('div', 'section4TextContainer');
    const section4Text = createElement('div', 'section4Text');
    const section4TextHeading  = createElement('h3', 'h3-text', 'h3-pe-section', 'Ready to Book? Contact Us!');
    const section4Paragraph = createElement('p', 'paragraph', 'p-pe-section', 'Email us at email@tutoring.com')
    appendAChild(section4Text, section4TextHeading);
    appendAChild(section4Text, section4Paragraph);
    appendAChild(section4TextContainer, section4Text);
    appendAChild(section4, section4TextContainer);
    appendAChild(mainContainer, section4);
   
    return mainContainer;


}