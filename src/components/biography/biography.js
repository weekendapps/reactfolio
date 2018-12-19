import React from 'react';
import './biography.scss';


const Biography = ({image, name, bio}) => (
    <div className="bio-container">
        <div className="image-container">
            <img className="profil-pic" src={image} />
        </div>
        <div className="info-container">
            <p> Hello my name is </p>
            <h1> {name} </h1>
            <p> {bio} </p>
            <button> Hire Me </button>
        </div>
    </div>
);

export default Biography;