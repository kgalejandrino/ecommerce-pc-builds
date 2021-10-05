import React, { Fragment } from 'react';

import classes from './Header.module.css';
import Logo from '../Logo/Logo';
import Navigations from '../Navigations/Navigations';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <Logo />
                <Navigations />
                <div className={classes['account-wrapper']}>
                    <span>My Account</span>
                    <span>Cart</span>
                </div>
            </header>
            <main>
                {props.children}
            </main>
        </Fragment>
    );
};

export default Header;