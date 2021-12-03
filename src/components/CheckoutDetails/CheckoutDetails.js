import React from 'react';

import Logo from '../Logo/Logo';
import classes from './CheckoutDetails.module.css';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import CheckoutSummary from './CheckoutSummary/CheckoutSummary';

const CheckoutDetails = () => {
    return (
        <div className={classes['flex-container']}>
            <form className={`${classes.checkout}`}>
                <ul className={classes.links}>
                    <li><a>Cart</a></li>
                    <li><a>Information</a></li>
                    <li><a>Shipping</a></li>
                    <li><a>Payment</a></li>
                </ul>
                <Logo logo="black" />
                {/* <div className={classes['flex-container']}> */}
                    <CheckoutForm />
                {/* </div> */}
            </form>
            <CheckoutSummary />
        </div>
    );
};

export default CheckoutDetails;