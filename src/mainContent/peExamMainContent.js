import {createElement, createTextSection, appendAChild} from '../generalFunctions';

/*
Creates container containing multiple sections for the PE exam page
*/
export function peExamMainContent() {
    //Main Container
    const mainContainer = createElement('div', 'peMainContainer');

    //Section 1 - TOP
    const section1 = createElement('div', 'section1', 'pe-section1');
    const section1TextContainer = createElement('div', 'section1TextContainer');
    const section1Text = createElement('div', 'sectionText', 'pe-section1Text');
    const section1img = createElement('img', 'engineering-svg', 'pe-section1-img');
    section1img.src = '/src/img/Engineer-Occupation-Avatar-Worker-Man.svg';
    createTextSection('Walk into the PE Civil Exam with confidence!', 'h2-text', 'h2-pe-section',
    'Our team of experienced engineers are committed to helping you excel in your PE journey.', 
    'paragraph', 'p-pe-section', section1Text);
    appendAChild(section1TextContainer, section1Text);
    appendAChild(section1, section1TextContainer);
    appendAChild(section1, section1img); 
    appendAChild(mainContainer, section1);

    //Section 2 - Question? - MIDDLE
    const section2 = createElement('div', 'section2', 'pe-section2');
    const section2TextContainer = createElement('div', 'section2TextContainer');
    const section2Text = createElement('div', 'sectionText', 'pe-section2Text');
    const section2img = createElement('img', 'engineering-svg', 'pe-section2-img');
    section2img.src = '/src/img/Blueprint-Cogwheel-Plan-Architecture-Construction.svg';
    createTextSection('Got questions? We got answers!', 'h2-text', 'h2-pe-section',
    'Whether you\'re struggling with a particular concept or need comprehensive exam preparation,\
    our tutors are committed to helping you excel.', 'paragraph','p-pe-section', section2Text);
    appendAChild(section2TextContainer, section2Text);
    appendAChild(section2, section2TextContainer);
    appendAChild(section2, section2img); 
    appendAChild(mainContainer, section2);

    //Section 3 - Topics We Tutor - MIDDLE
    const section3 = createElement('div', 'section3', 'pe-section3');
    const section3TextContainer = createElement('div', 'section3TextContainer');
    const section3Text = createElement('div', 'sectionText', 'pe-section3Text');
    const section3TextHeading  = createElement('h2', 'h2-text', 'h2-pe-section', 'PE Civil Exam Topics We Provide Tutoring Services For:');
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

    //Section 4 - Email Us - BOTTOm
    const section4 = createElement('div', 'section4', 'pe-section4');
    const section4TextContainer = createElement('div', 'section4TextContainer');
    const section4Text = createElement('div', 'sectionText',  'pe-section4Text');
    const section4TextHeading  = createElement('h2', 'h2-text', 'h2-pe-section', 'Ready to Book? Contact Us!');
    const section4Paragraph = createElement('p', 'paragraph', 'p-pe-section', 'Email us at email@tutoring.com')
    appendAChild(section4Text, section4TextHeading);
    appendAChild(section4Text, section4Paragraph);
    appendAChild(section4TextContainer, section4Text);
    appendAChild(section4, section4TextContainer);
    appendAChild(mainContainer, section4);
   
    return mainContainer;
}