import {createElement, createTextSection, appendAChild} from '../generalFunctions';

/*
Creates container containing multiple sections for the Pricing page
*/
export function pricingMainContent() {
    const mainContainer = createElement('div', 'pricing-MainContainer');

    //Section 1 - Tutoring Packages - TOP
    const section1 = createElement('div', 'section1', 'pricing-section1');
    const section1TextContainer = createElement('div', 'section1TextContainer');
    const section1Text = createElement('div', 'sectionText', 'pricing-section1Text');
    createTextSection('Tutoring packages that fit your needs!', 'h2-text', 'h2-pricing-section',
    'Whether you need a single section for tips & tricks on how to pass the FE or PE Exam, or need on-going support as you prepare\
     exam day, we have various packages that fit your budget!', 'paragraph', 'p-pricing-section', section1Text);
    appendAChild(section1TextContainer, section1Text);
    appendAChild(section1, section1TextContainer);
    appendAChild(mainContainer, section1);

    //Section 2 - Pricing Breakdown - BOTTOM
    const pricingBreakdownContainer = createElement('div', 'pricing-cont', 'pricingBreakdown-cont');
    const pricingBreakdownPackages = createElement('div','pricing-cont', 'pricingBreakdownPackages');
    const pricingBreakdownTextHeading  = createElement('h2', 'h2-text', 'h2-pricing-breakdown', 'Pricing Packages');
    appendAChild(pricingBreakdownContainer, pricingBreakdownTextHeading);

    //Section 2 - Pricing Package 1
    let counter1 = 0;
    const pricingPackage1 = createElement('ul', 'pricing-package');
    appendAChild(pricingBreakdownPackages, pricingPackage1);
    const package1list = ['$60', '1 hour', 'Ideal for Single Sessions'];
    package1list.forEach(item => {
        const div = createElement('div', 'list-container');
        appendAChild(div, createElement('li', `list-item-${counter1}`, '', item));
        appendAChild(pricingPackage1, div);
        counter1++;
    });

    //Section 2 - Pricing Package 2
    let counter2 = 0;
    const pricingPackage2 = createElement('ul', 'pricing-package');
    appendAChild(pricingBreakdownPackages, pricingPackage2);
    const package2list = ['$160', '3 hours', 'Ideal for to cover an PE/FE exam topic'];
    package2list.forEach(item => {
        const div = createElement('div', 'list-container');
        appendAChild(div, createElement('li', `list-item-${counter2}`, '', item));
        appendAChild(pricingPackage2, div);
        counter2++;
    });

    //Section 2 - Pricing Package 3
    let counter3 = 0;
    const pricingPackage3 = createElement('ul', 'pricing-package');
    appendAChild(pricingBreakdownPackages, pricingPackage3);
    const package3list = ['$250', '5 hours', 'Ideal for on-going support throughout PE/FE Exam Prep Journey'];
    package3list.forEach(item => {
        const div = createElement('div', 'list-container');
        appendAChild(div, createElement('li', `list-item-${counter3}`, '', item));
        appendAChild(pricingPackage3, div);
        counter3++;
    });

    //Append all sections
    appendAChild(pricingBreakdownPackages, pricingPackage1);
    appendAChild(pricingBreakdownPackages, pricingPackage2);
    appendAChild(pricingBreakdownPackages, pricingPackage3);
    appendAChild(pricingBreakdownContainer, pricingBreakdownPackages);
    appendAChild(mainContainer, pricingBreakdownContainer)
   
    return mainContainer;
}