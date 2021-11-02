import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navigation.module.css';

const Navigation = (props) => (
    <li className={props.type === 'footer-ul' ? classes['footer-list']: classes['main-list']}>
        <NavLink activeClassName={classes.active} to={`/${props.path}`}>{props.link}</NavLink>
    </li>
)

export default Navigation;