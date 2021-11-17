import React, { Fragment } from 'react';

import classes from './Layout.module.css';
import Footer from '../Footer/Footer';
import MainHeader from '../MainHeader/MainHeader';
import Cart from '../Cart/Cart';

const layout = (props) => {
    return (
        <Fragment>
            <Cart />
            <MainHeader />
            <main className={classes.main}>
                {props.children}
            </main>
            <Footer />
        </Fragment>
    );
};

export default layout;