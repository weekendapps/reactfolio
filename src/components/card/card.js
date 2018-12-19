import React from 'react';
import './card.scss';
import Circle from './circle';


const Card = ({icon, title, args}) => (
    <div>
        <div className="card-shape">
            <div className="circle">
                <Circle icon={icon}> </Circle>
            </div>
            <p className="card-title"> {title} </p>
            <div>
                {args}
            </div>
        </div>
    </div>
);

export default Card;