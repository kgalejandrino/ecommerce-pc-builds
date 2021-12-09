
import React, { Fragment, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

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
                        <li><NavLink activeClassName={classes.active} to="/cart">Cart</NavLink></li>
                        <li><NavLink activeClassName={classes.active} to="/checkout/information">Information</NavLink></li>
                        <li><NavLink activeClassName={classes.active} to="/checkout/shipping">Shipping</NavLink></li>
                        <li><NavLink activeClassName={classes.active} to="/checkout/payment">Payment</NavLink></li>
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