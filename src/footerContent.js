import {createElement, appendAChild} from './generalFunctions';

export function footerContent() {
    const footer = document.createElement('div');
    footer.className = "footer";
    

    const footerText = createElement('p', '', 'footer-text', 'Copyright ⓒ 2023 CivE Tutors. All Rights Reserved.');
    footer.appendChild(footerText);
    return footer;
}