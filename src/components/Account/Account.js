import React from 'react';

import classes from './Account.module.css';

const account = (props) => {
    return (
        <div className={classes['account-wrapper']}>
            <span><i className={`fas fa-user ${classes['icon-account']}`}></i></span>
            <span><i className={`fas fa-shopping-cart ${classes['icon-account']}`}></i></span>
            <span onClick={props.clicked}><i className={`fas fa-bars ${classes['icon-account']}` }></i></span>
            <span className={classes['text-account']}>My Account</span>
            <span className={classes['text-account']}>Cart</span>
        </div>
    );
};

export default account;