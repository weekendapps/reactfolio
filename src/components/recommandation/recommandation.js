import React from 'react';
import './recommandation.scss';

const Recommandation = ({text, pic, name, job}) => (
    <div className="rcmd-container">
        <div className="rcmd-blockQuote">
            <img src={require("../../icons/quotation.png")}/> 
            <div id="container">
                <p> {text} </p>
                <div className="rcmd-footer">
                    <div className="img-container">
                        <img src={pic} />
                    </div>
                    <div>
                        <p className="rcmd-info"> {name} </p>
                        <p className="rcmd-info"> {job} </p>
                    </div>
                </div>
            </div>
            <div className="linkedin-container">
                <img src={require("../../icons/linkedin-logo.png")}/>
                <a href="https://www.linkedin.com/in/amel-azzi-625446b2/"> View on LinkedIn </a>
            </div>
        </div>
    </div>
);

export default Recommandation;
