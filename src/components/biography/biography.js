import React from 'react';
import './biography.scss';


const Biography = ({image, name, bio}) => (
    <div className="container">
        <div className="image-container">
            <img className="profil-pic" src={require('../../icons/image.jpg')} />
        </div>
        <div className="info-container">
            <p>Hello my name is</p>
            <h1>Amel AZZI</h1>
            <p>
                I'm a full-stack developer specialised in frontend and 
                backend development for complex scalable web apps. I write 
                about web development on my blog and regularly speak at various 
                web conferences and meetups. Want to know how I may help your 
                project? Check out my project case studies and resume.
            </p>
            <button> Hire Me </button>
        </div>
    </div>
);

export default Biography;