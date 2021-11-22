import React from 'react';

import classes from './ClickedPreBuilt.module.css';

const ClickedPreBuilt = (props) => {
    return (
        <div className={`${classes['clicked-item']} row`}>
            <div className={classes['item-img']}>
                <img src={props.img} alt={props.name} />
            </div>
            <div className={classes.details}>
                <h3>{props.name}</h3>
                <span className={classes.price}>{`$${props.price}`}</span>
                <li>
                    <span>CPU:</span>
                    <span>{props.cpu}</span>
                </li>
                <li>
                    <span>GPU:</span>
                    <span>{props.gpu}</span>
                </li>
                <li>
                    <span>Motherboard:</span>
                    <span>{props.motherboard}</span>
                </li>
                <li>
                    <span>Ram:</span>
                    <span>{props.ram}</span>
                </li>
                <li>
                    <span>SSD:</span>
                    <span>{props.ssd}</span>
                </li>
                <li>
                    <span>CPU cooler:</span>
                    <span>{props.cooler}</span>
                </li>
                <li>
                    <span>Power Supply:</span>
                    <span>{props.psu}</span>
                </li>
                <li>
                    <span>Case:</span>
                    <span>{props.case}</span>
                </li>
                <li>
                    <span>Operating System:</span>
                    <span>{props.os}</span>
                </li>
                <li>
                    <span>Dimension:</span>
                    <span>{props.dimension}</span>
                </li>
            </div>
        </div>
    );
};

export default ClickedPreBuilt;