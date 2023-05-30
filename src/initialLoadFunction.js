
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

    //Add links to nav bar
    const aboutUsCont = document.createElement('div');
    aboutUsCont.className = "nav-item-container";

    const aboutUs = document.createElement('a');
    aboutUs.innerText = "About Us";
    aboutUs.className = "nav-item";
    aboutUsCont.appendChild(aboutUs);

    const successStoriesCont = document.createElement('div');
    successStoriesCont.className = "nav-item-container";

    const successStories = document.createElement('a');
    successStories.innerText = "Success Stories";
    successStories.className = "nav-item";
    successStoriesCont.appendChild(successStories);

    const categoriesCont = document.createElement('div');
    categoriesCont.className = "nav-item-container";

    const categories = document.createElement('a');
    categories.innerText = "Categories";
    categories.className = "nav-item";
    categoriesCont.appendChild(categories);

    const pricingCont = document.createElement('div');
    pricingCont.className = "nav-item-container";
    
    const pricing = document.createElement('a');
    pricing.innerText = "Pricing";
    pricing.className = "nav-item";
    pricingCont.appendChild(pricing);

    const getStartedCont = document.createElement('div');
    getStartedCont.className = "nav-item-container";
    
    const getStarted = document.createElement('a');
    getStarted.innerText = "Get Started";
    getStarted.className = "nav-item";
    getStartedCont.appendChild(getStarted);

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