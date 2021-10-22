import React from 'react';

import classes from './Account.module.css';

const account = (props) => {
    return (
        <div className={classes['account-wrapper']}>
            <span className={`material-icons ${classes['icon-account']}`}>person</span>
            <span className={`material-icons ${classes['icon-account']}`}>shopping_cart</span>
            <span 
                className={`material-icons ${classes['icon-account']} ${classes['icon-menu']}`}
                onClick={props.clicked}>menu
            </span>
            <span className={classes['text-account']}>My Account</span>
            <span className={classes['text-account']}>Cart</span>
        </div>
    );
};

export default account;