
console.log('this is a test');
export function addHomePage (){
    
    const mainContainer = document.getElementById('content');
    // mainContainer.innerText = "hello";

    //Header
    const header = document.createElement('div');

    //Add logo container to header
    const logo = document.createElement('div');
    logo.id = "logo-container";
    
    //Add nav bar to header
    const navBar = document.createElement('div');
    navBar.id = "navbar";


    const createElement = (element, text = "", parent, className = "") => {
        const newElement = document.createElement(element);
        newElement.innerText = text;
        newElement.className = className;
        parent.appendChild(newElement);
    }

    //Add links to nav bar
    const aboutUsCont = document.createElement('div');
    aboutUsCont.className = "nav-item-container";

    // const aboutUsCont = createElement('div', '', navBar, 'nav-item', '');
    const successStoriesCont = document.createElement('div');
    successStoriesCont.className = "nav-item-container";

    const categoriesCont = document.createElement('div');
    categoriesCont.className = "nav-item-container";

    const pricingCont = document.createElement('div');
    pricingCont.className = "nav-item-container";

    const getStartedCont = document.createElement('div');
    getStartedCont.className = "nav-item-container";
    

    

   
    createElement('a', 'Categories', categoriesCont, 'nav-item', '');
    createElement('a', 'Success Stores', successStoriesCont, 'nav-item', '');
    createElement('a', 'Pricing', pricingCont, 'nav-item', '');
    createElement('a', 'About Us', aboutUsCont, 'nav-item', '');
    createElement('a', 'Get Started', getStartedCont, 'nav-item', '');
    

    //Append Nav Bar childs
    navBar.appendChild(aboutUsCont);
    navBar.appendChild(successStoriesCont);
    navBar.appendChild(categoriesCont);
    navBar.appendChild(pricingCont);
    navBar.appendChild(getStartedCont);

    //Append logo and nav bar to header
    header.appendChild(logo);
    header.appendChild(navBar);
    
    
    header.className = "header";
    mainContainer.appendChild(header);

    //Section 1 Content
    const section1 = document.createElement('div');
    section1.className = "section1";
    mainContainer.appendChild(section1);

    //Section 1 Content - LEFT
    const section1left = document.createElement('div');
    const section1h1= document.createElement('h1');
    section1h1.innerText = "Pass All of Your Civil Engineering classes with A";

    const section1P= document.createElement('p');
    section1P.innerText = "CivETech helps our students to gain the skills and knowledge to excel in every assignment and exams in all Civil Engineering subjects";

    const section1ButtonContainer = document.createElement('div');
    section1ButtonContainer.id = "Section1-Button-Container"
    const section1Button1 = document.createElement('button');
    section1Button1.id = "Section1-Button1";
    section1Button1.innerText = "Get started";

    const section1Button2 = document.createElement('button');
    section1Button2.innerText = "Learn more";
    section1Button2.id = "Section1-Button2";

    section1ButtonContainer.appendChild(section1Button1);
    section1ButtonContainer.appendChild(section1Button2);

    section1left.appendChild(section1h1);
    section1left.appendChild(section1P);
    section1left.appendChild(section1ButtonContainer);

   

    //Section 1 Content - RIGHT
    const section1right = document.createElement('div');
    const section1img = document.createElement('img');
    section1img.src = "/src/img/wilson-main-image.png";
    section1img.id = "section1-img";
    section1right.appendChild(section1img);

    section1.appendChild(section1left);
    section1.appendChild(section1right);


    

    const section2 = document.createElement('div');
    section2.className = "section2";
    mainContainer.appendChild(section2);

    const footer = document.createElement('div');
    footer.className = "footer";
    mainContainer.appendChild(footer);
    return mainContainer;
    
}