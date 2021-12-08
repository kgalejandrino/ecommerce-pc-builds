
import React, { Fragment, useContext, useState } from 'react';

import Logo from '../Logo/Logo';
import CartContext from '../../store/cart-context';
import classes from './CheckoutDetails.module.css';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import CheckoutSummary from './CheckoutSummary/CheckoutSummary';

const CheckoutDetails = () => {
    const cartCtx = useContext(CartContext);

    const subTotal = cartCtx.totalAmount.toFixed(2);
    const tax = (subTotal * .0725).toFixed(2);
    const total = (+subTotal + +tax).toFixed(2);

    const [showSummary, setShowSummary] = useState(false);

    const toggleShowHandler = () => setShowSummary(prevState => !prevState);

    return (
        <Fragment>
            <div className={classes['links-container']}>
                <div className={classes['links-details']}>
                    <ul className={classes.links}>
                        <li><a>Cart</a></li>
                        <li><a>Information</a></li>
                        <li><a>Shipping</a></li>
                        <li><a>Payment</a></li>
                    </ul>
                    <Logo logo="black" />
                </div>
            </div>
            <div className={classes['dropdown-summary']} onClick={toggleShowHandler}>
                <div className={classes['flex-summary']}>
                    <span><i className="fas fa-shopping-cart"></i></span>
                    <span>Show Order Summary</span>
                    <span><i className="fas fa-angle-down"></i></span>
                </div>
                <span className={classes['summary-total']}>{`$${total}`}</span>
            </div>
            <form className={classes['checkout-form']}>
                <CheckoutForm />
                <CheckoutSummary show={showSummary} />
            </form>
        </Fragment>
    );
};

export default CheckoutDetails;