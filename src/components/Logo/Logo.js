import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Logo.module.css';
import logo from '../../assets/white-main-logo.png';
import mobileLogo from '../../assets/white-mobile-logo.png';

const Logo = () => (
    <NavLink to="/">
        <img src={logo} alt="nemirk pc build logo" className={classes.logo} />
        <img src={mobileLogo} alt="nemirk pc build logo" className={classes['mobile-logo']} />
    </NavLink>
)

export default Logo;