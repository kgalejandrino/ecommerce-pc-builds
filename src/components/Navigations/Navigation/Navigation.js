import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => (
    <li className={props.type === 'footer-ul' ? classes['footer-list']: classes['main-list']}>{props.link}</li>
)

export default Navigation;