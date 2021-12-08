import React, { Fragment } from 'react';

import classes from './CheckoutShipping.module.css';

const CheckoutShipping = () => {
    return (
        <Fragment>
            <div className={classes.box}>
                <div className={classes['flex-info']}>
                    <div>
                        <span className={classes.label}>Contact</span>
                        <span className={classes.info}>kgalejandrino@gmail.com</span>
                    </div>
                    <a href="#">Change</a>
                </div>
                <div className={classes['flex-info']}>
                    <div>
                        <span className={classes.label}>Shipping</span>
                        <span className={classes.info}>kgalejandrino@gmail.com</span>
                    </div>
                    <a href="#">Change</a>
                </div>
            </div>

            <h4 className={classes.title}>Shipping Method</h4>

            <div className={classes.box}>
                <div className={classes['flex-info']}>
                    <div className={classes['form-control']}>
                        <input type="radio" id="express" name="express" />
                        <label for="express">Express Delivery (1-3 Working Days)</label>
                    </div>
                    <span className={classes['right-text']}>$2.50</span>
                </div>
                <div className={classes['flex-info']}>
                    <div className={classes['form-control']}>
                        <input type="radio" id="standard" name="standard" />
                        <label for="standard">Standard Delivery (4-7 Working Days)</label>
                    </div>
                    <span className={classes['right-text']}>Free</span>
                </div>
            </div>
        </Fragment>
    );
};

export default CheckoutShipping;