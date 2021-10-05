import React from 'react';
import Navigation from './Navigation/Navigation';

import classes from './Navigations.module.css';

const list = [
    { 'path': 'build-a-pc', 'link': 'Build a PC'},
    { 'path': 'pre-built-pc', 'link': 'Pre-Built PC'},
    { 'path': 'support', 'link': 'Support'}
];

const Navigations = () => {
    return (
        <nav className={classes.navigations}>
            {list.map(item => {
                return <Navigation key={item.path} link={item.link} />
            })}
        </nav>
    );
};

export default Navigations;