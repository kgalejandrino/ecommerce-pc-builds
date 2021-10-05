import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => (
    <li className={classes.navigation}>{props.link}</li>
)

export default Navigation;