import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card/card'

var FrontSkills =[
  {name:"Angular"},
  {name:"React"}
];

const FrontEndSkills = FrontSkills.map((skill) =>
      <p key={skill.name}>{skill.name}</p> 
);

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Card icon={require('../icons/programming.png')} title="Front End" args={FrontEndSkills}></Card>
  </div>
)

export default IndexPage
