import React from 'react';
import './circle.scss';

const Circle = ({icon}) => (
    <div className="circle-shape">
        <img src={icon}  className="icon"/>
    </div>
);

export default Circle;