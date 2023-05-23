
console.log('this is a test');
export function addHomePage (){
    
    const mainContainer = document.getElementById('content');
    // mainContainer.innerText = "hello";


    const header = document.createElement('div');
    header.className = "header";
    mainContainer.appendChild(header);

    const section1 = document.createElement('div');
    section1.className = "section1";
    mainContainer.appendChild(section1);

    const section2 = document.createElement('div');
    section2.className = "section2";
    mainContainer.appendChild(section2);

    const footer = document.createElement('div');
    footer.className = "footer";
    mainContainer.appendChild(footer);
    return mainContainer;
    
}