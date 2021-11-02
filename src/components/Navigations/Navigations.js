import React from 'react';

import Navigation from './Navigation/Navigation';
import classes from './Navigations.module.css';

const list = [
    { 'path': 'build-a-pc', 'link': 'Build a PC'},
    { 'path': 'pre-built-pc', 'link': 'Pre-Built PC'},
    { 'path': 'support', 'link': 'Support'}
];

const Navigations = (props) => {
    
    return (
        <ul className={props.type === 'footer-ul' ? classes['footer-ul']: classes['main-ul']}>
            {list.map(item => {
                return <Navigation key={item.path} link={item.link} type={props.type} path={item.path} />
            })}
        </ul>
    );
};

export default Navigations;