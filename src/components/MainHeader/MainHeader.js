import React, { Fragment, useState } from 'react';

import Logo from '../Logo/Logo';
import Navigations from '../Navigations/Navigations';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
    const [ openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => setOpenMenu(!openMenu);
    
    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes.row}>
                    <Logo />
                    <nav className={openMenu ? `${classes['collapse-nav']} ${classes.open}` : `${classes['collapse-nav']} ${classes.closed}`}>
                        <Navigations />
                    </nav>
                    <ul className={classes['nav-right']}>
                        <span><i className={`fas fa-user ${classes.icon}`}></i></span>
                        <div className={classes.cart}>
                            <span><i className={`fas fa-shopping-cart ${classes.icon}`}></i></span>
                            <span className={classes['no-of-items']}>3</span>
                        </div>
                        <span onClick={handleOpenMenu}><i className={`fas fa-bars ${classes.icon} ${classes['icon-menu']}`}></i></span>
                    </ul>
                </div>
            </header>
        </Fragment>
    );
};

export default MainHeader;