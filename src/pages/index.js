import React from 'react'
import './index.scss';

import Link from 'gatsby-link'
import Card from '../components/card/card'
import Biography from '../components/biography/biography'

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
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <Link to="/page-2/">Go to page 2</Link>
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
        </div>
    </div>
)

export default IndexPage
