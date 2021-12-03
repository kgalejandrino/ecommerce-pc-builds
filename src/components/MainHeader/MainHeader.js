import React, { Fragment, useState } from 'react';

import Logo from '../Logo/Logo';
import Navigations from '../Navigations/Navigations';
import CartButton from './CartButton/CartButton';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
    const [ openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => setOpenMenu(!openMenu);
    
    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes.row}>
                    <Logo logo="white" />
                    <nav className={openMenu ? `${classes['collapse-nav']} ${classes.open}` : `${classes['collapse-nav']} ${classes.closed}`}>
                        <Navigations />
                    </nav>
                    <ul className={classes['nav-right']}>
                        <span><i className={`fas fa-user ${classes.icon}`}></i></span>
                        <CartButton onShowCart={props.onShowCart} />
                        <span onClick={handleOpenMenu}><i className={`fas fa-bars ${classes.icon} ${classes['icon-menu']}`}></i></span>
                    </ul>
                </div>
            </header>
        </Fragment>
    );
};

export default MainHeader;