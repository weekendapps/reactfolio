import React from 'react';
import './featuredPrj.scss';


const FeaturedPrj = () => (
    <div className="featuresPrj">
        <div>
            <div className="div-cover"></div>
            <img className="img-cover" src={require("../../icons/logos/google-white.png")} />
            <img src={require("../../icons/project.jpg")}/>
        </div>
        <h3> SaaS Product </h3>
        <div className="prjTech-container">
            <div className="prjTech">Angular</div>
            <div className="prjTech">Django</div>
            <div className="prjTech">Html/Css</div>
            <div className="prjTech">MongoDB</div>
        </div>
    </div>
);

export default FeaturedPrj;