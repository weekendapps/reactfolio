import React from 'react';
import './client.scss';

var CliensLogo =[
    {logo: require("../../icons/logos/google.png")},
    {logo: require("../../icons/logos/basecamp.png")},
    {logo: require("../../icons/logos/airbnb.png")},
    {logo: require("../../icons/logos/dropbox.png")},
    {logo: require("../../icons/logos/spotify.png")},
    {logo: require("../../icons/logos/evernote.png")},
];

const Logos = CliensLogo.map((lg) =>
    <div className="logo">
        <a href="">
            <img key={lg.logo} src={lg.logo}/> 
        </a>
    </div>  
);

const Client = () => (
    <div className="client-container">
        <h1>Great clients I've worked with</h1>
        <div className="logos">
            {Logos}
        </div>
    </div>
);

export default Client;
