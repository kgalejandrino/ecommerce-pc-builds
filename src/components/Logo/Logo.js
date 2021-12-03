import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Logo.module.css';
import logo from '../../assets/white-main-logo.png';
import blackLogo from '../../assets/black-logo.png';
import mobileLogo from '../../assets/white-mobile-logo.png';

const Logo = (props) => (
    <NavLink to="/">
        <img 
            src={props.logo === 'white' ? logo : blackLogo} 
            alt="nemirk pc build logo" 
            className={props.logo === 'white' ? classes['white-logo'] : classes['black-logo'] } 
        />
        <img src={mobileLogo} alt="nemirk pc build logo" className={classes['mobile-logo']} />
    </NavLink>
)

export default Logo;