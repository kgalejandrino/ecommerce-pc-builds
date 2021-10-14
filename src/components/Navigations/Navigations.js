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
        <nav className={props.type === 'footer-nav' ? classes['footer-navigations']: classes.navigations}>
            {list.map(item => {
                return <Navigation key={item.path} link={item.link} type={props.type} />
            })}
        </nav>
    );
};

export default Navigations;