import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Logo.module.css';

const Logo = () => (
    <div className={classes.Logo}>
        <NavLink to="/">NemirkPcBuilds</NavLink>
    </div>
)

export default Logo;