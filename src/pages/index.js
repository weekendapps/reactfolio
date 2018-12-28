import React from 'react'
import './index.scss';

import Link from 'gatsby-link'
import Card from '../components/card/card'
import Biography from '../components/biography/biography'
import Client from '../components/client/client'
import Recommandation from '../components/recommandation/recommandation'
import CircleSlide from '../components/circleSlide/circleSlide'
import { func } from 'prop-types';

//_________________________________

//setInterval(scrollLeft, 1500);

//----------------------------- Declare FrontEnd Skills -----------------------------//
var FrontSkills =[
  {name: "React/Redux/Angular"},
  {name: "Javascript"},
  {name: "Node.js"},
  {name: "Webpack/Gulp/Grunt"},
  {name: "HTML/CSS/SASS/LESS"},
];

const FrontEndSkills = FrontSkills.map((skill) =>
    <p className="card-list" key={skill.name}> 
        <img src={require('../icons/checked-icon.png')} className="icon-list" />
        {skill.name}     
    </p> 
);

//----------------------------- Declare BackEnd Skills -----------------------------//
var BackSkills =[
    {name: "Python/Django"},
    {name: "Ruby/Rails"},
    {name: "PHP"},
    {name: "PostgresSQL/MySQL"},
    {name: "MongoDB"},
  ];
  
const BackEndSkills = BackSkills.map((skill) =>
    <p className="card-list" key={skill.name}> 
        <img src={require('../icons/checked-icon.png')} className="icon-list" />
        {skill.name}     
    </p> 
);

//----------------------------- Declare Other Skills -----------------------------//
var OtherSkill =[
    {name: "DevOps"},
    {name: "Unit Testing"},
    {name: "UX/Wireframing"},
    {name: "Sketch/Balsamiq"},
    {name: "Wordpress/Shopify"},
];

const OtherSkills = OtherSkill.map((skill) =>
    <p className="card-list" key={skill.name}> 
        <img src={require('../icons/checked-icon.png')} className="icon-list" />
        {skill.name}     
    </p> 
);

//----------------------------- Display Components -----------------------------//

const IndexPage = () => (
    <div>
        <Biography image={require('../icons/image.jpg')}
            name="Amel AZZI"
            bio="I'm a full-stack developer specialised in frontend and backend development for complex scalable web apps. I write about web development on my blog and regularly speak at various web conferences and meetups. Want to know how I may help your project? Check out my project case studies and resume.">
        </Biography>
        <div className="child-container">
            <div className="overview-container">
                <h1>Hi people</h1>
                <p>I have more than 8 years' experience building rich web applications for clients all over the world. Below is a quick overview of my main technical skill sets and tools I use. Want to find out more about my experience?</p>  
                <a> Check out my online resume. </a>
            </div>
            <Link to="/page-2/">Go to page 2</Link>
        </div>
        <div className="cards">
            <div className="front-end">
                <Card icon={require('../icons/frontend-icon.png')} title="Frontend" args={FrontEndSkills}></Card>  
            </div>
            <div className="back-end">
                <Card icon={require('../icons/frontend-icon.png')} title="Backend" args={BackEndSkills}></Card>  
            </div>
            <div className="other-skills">
                <Card icon={require('../icons/other-skills-icon.png')} title="Others" args={OtherSkills}></Card>  
            </div>
        </div>
        <div className="clients-container">
            <Client></Client>
            <div className="rcmds-container">
                <div id="0" className="rcmd">
                    <Recommandation pic={require("../icons/image.jpg")} 
                        text="Steve is a great developer! Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto."
                        name="1" job="Software Engineering">
                    </Recommandation>
                </div>
                <div id="1" className="rcmd">
                    <Recommandation pic={require("../icons/image.jpg")} 
                        text="Steve is a great developer! Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto."
                        name="2" job="Software Engineering">
                    </Recommandation>
                </div>
                <div id="2" className="rcmd">
                    <Recommandation pic={require("../icons/image.jpg")} 
                        text="Steve is a great developer! Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto."
                        name="3" job="Software Engineering">
                    </Recommandation>
                </div>
                <div id="3" className="rcmd">
                    <Recommandation pic={require("../icons/image.jpg")} 
                        text="Steve is a great developer! Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto."
                        name="4" job="Software Engineering">
                    </Recommandation>
                </div>
                <div className="slide-btn">
                    <div>
                        <img src={require("../icons/back-icon.png")}
                            onClick={previousRcmd}/>
                    </div>
                    <div>
                        <img src={require("../icons/next-icon.png")}
                            onClick={nextRcmd}/>
                    </div>
                </div>
            </div>
            <div className="slides-container">
                <div className="slide">
                    <CircleSlide></CircleSlide>
                </div>
                <div className="slide">
                    <CircleSlide></CircleSlide>
                </div>
                <div className="slide">
                    <CircleSlide></CircleSlide>
                </div>
                <div className="slide">
                    <CircleSlide></CircleSlide>
                </div>
            </div>
        </div>
    </div>
)

export default IndexPage

let slides = document.querySelectorAll('.slide');
    slides[1].childNodes[0].style.backgroundColor="black";

let rcmds = document.querySelectorAll('.rcmd');
    rcmds[0].style.transform='translate(-155%, -50%)';
    rcmds[1].style.transform='translate(-50%, -50%)';
    rcmds[2].style.transform='translate(55%, -50%)';
    rcmds[3].style.transform='translate(175%, -50%)';

let i=0; 
while(i<rcmds.length){
    if(i==1){
        rcmds[i].style.opacity='1';
    }else{
        rcmds[i].style.opacity='0.5';
    }
    i++
}

let rcmdsList = [];
i=0;    
while(i<rcmds.length){
    rcmdsList.push(rcmds[i]);
    i++
}


function nextRcmd(){
    let newRcmd = rcmdsList[0];
    let j=0;
    rcmdsList.shift();
    rcmdsList.push(newRcmd);

    rcmdsList[0].style.transform='translate(-155%, -50%)';
    //rcmdsList[0].style.opacity='0.5';
    //slides[rcmdsList[0].id].childNodes[0].style.backgroundColor="grey";
    rcmdsList[1].style.transform='translate(-50%, -50%)';
    //rcmdsList[1].style.opacity='1';
    //slides[rcmdsList[1].id].childNodes[0].style.backgroundColor="black";
    rcmdsList[2].style.transform='translate(55%, -50%)';
    //rcmdsList[2].style.opacity='0.5';
    //slides[rcmdsList[2].id].childNodes[0].style.backgroundColor="grey";
    rcmdsList[3].style.transform='translate(175%, -50%)';
    //rcmdsList[3].style.opacity='0.5';
    //slides[rcmdsList[3].id].childNodes[0].style.backgroundColor="grey";

    while(j<rcmdsList.length){
        if(j==1){
            rcmdsList[j].style.opacity='1';
            slides[rcmdsList[j].id].childNodes[0].style.backgroundColor="black";
        }else{
            rcmdsList[j].style.opacity='0.5';
            slides[rcmdsList[j].id].childNodes[0].style.backgroundColor="grey";
        }
        j++
    }
}

function previousRcmd(){
    let newRcmd = rcmdsList[rcmdsList.length-1];
    let k=0;
    rcmdsList.pop();
    rcmdsList.unshift(newRcmd);

    rcmdsList[0].style.transform='translate(-155%, -50%)';
    rcmdsList[1].style.transform='translate(-50%, -50%)';
    rcmdsList[2].style.transform='translate(55%, -50%)';
    rcmdsList[3].style.transform='translate(175%, -50%)';
    while(k<rcmdsList.length){
        if(k==1){
            rcmdsList[k].style.opacity='1';
            slides[rcmdsList[k].id].childNodes[0].style.backgroundColor="black";
        }else{
            rcmdsList[k].style.opacity='0.5';
            slides[rcmdsList[k].id].childNodes[0].style.backgroundColor="grey";
        }
        k++
    }
}

