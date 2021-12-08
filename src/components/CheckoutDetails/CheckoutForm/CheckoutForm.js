import React from 'react';
import { Link } from 'react-router-dom';

import classes from './CheckoutForm.module.css';
import Button from '../../UI/Button/Button';
import CheckoutInformation from './CheckoutInformation/CheckoutInformation';
import CheckoutShipping from './CheckoutShipping/CheckoutShipping';

const checkoutForm = () => {
    return (
        <div className={classes['form-container']}>
            <div className={classes['form-details']}>
                {/* <CheckoutInformation /> */}
                <CheckoutShipping />
                <div className={classes['form-actions']}>
                    <div className={classes.return}>
                        <span><i className="far fa-hand-point-left"></i></span>
                        <Link to="/cart">Return to cart</Link>
                    </div>
                    <Button btnType="btn-secondary">Continue Shipping</Button>
                </div>
            </div>
        </div>
    );
};

export default checkoutForm;