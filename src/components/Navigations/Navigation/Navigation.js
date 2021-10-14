import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => (
    <li className={props.type === 'footer-nav' ? classes['footer-navigation']: classes.navigation}>{props.link}</li>
)

export default Navigation;