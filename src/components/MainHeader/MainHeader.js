import React, { Fragment, useState } from 'react';

import Logo from '../Logo/Logo';
import Navigations from '../Navigations/Navigations';
import Account from '../Account/Account';
import classes from './MainHeader.module.css';

const MainHeader = () => {
    const [ openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => setOpenMenu(!openMenu);

    return (
        <Fragment>
            <header className={classes.header}>
                <Logo />
                <nav className={openMenu ? `${classes['collapse-nav']} ${classes.open}` : `${classes['collapse-nav']} ${classes.closed}`}>
                    <Navigations />
                </nav>
                <Account clicked={handleOpenMenu}/>
            </header>
        </Fragment>
    );
};

export default MainHeader;