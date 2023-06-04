/*
    Renders all of the content in the Main Content container in Home Page. 
*/
export function homeMainContent() {
    // mainContainer.appendChild(header);

    const mainContainer = document.createElement('div');

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

export function addFooter() {

}