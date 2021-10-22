import React, { Fragment } from 'react';

import classes from './Layout.module.css';
import Footer from '../Footer/Footer';
import MainHeader from '../MainHeader/MainHeader';

const layout = (props) => {
    return (
        <Fragment>
            <MainHeader />
            <main className={classes.main}>
                {props.children}
            </main>
            <Footer />
        </Fragment>
    );
};

export default layout;