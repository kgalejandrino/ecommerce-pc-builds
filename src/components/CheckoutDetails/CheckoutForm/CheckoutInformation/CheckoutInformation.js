import React, { Fragment } from 'react';

import classes from './CheckoutInformation.module.css';

const CheckoutInformation = () => {
    return (
        <Fragment>
            <div className={classes.box}>
                <div className={classes['login-wrapper']}>
                    <h4 className={classes['form-title']}>Contact Information</h4>
                    <span>Already have an account? <a>Login</a></span>
                </div>
                <div className={classes['form-control']}>
                    {/* <label htmlFor="email">Email address</label> */}
                    <input 
                        type="email"
                        id="email"
                        placeholder="Email address"
                    />
                </div>
            </div>
            <div className={classes.box}>
                <h4 className={classes['form-title']}>Shipping Address</h4>
                <div className={classes['flex-form']}>
                    <div className={`${classes['form-control']} ${classes['first-name']}`}>
                        {/* <label htmlFor="firstName">First name</label> */}
                        <input 
                            type="text"
                            id="firstName"
                            placeholder="First name"
                        />
                    </div>
                    <div className={`${classes['form-control']} ${classes['last-name']}`}>
                        {/* <label htmlFor="firstName">Last name</label> */}
                        <input 
                            type="text"
                            id="lastName"
                            placeholder="Last name"
                        />
                    </div>
                </div>
                <div className={classes['form-control']}>
                    {/* <label htmlFor="address1">Address Line 1</label> */}
                    <input 
                        type="text"
                        id="address1"
                        placeholder="Address Line 1"
                    />
                </div>
                <div className={classes['form-control']}>
                    {/* <label htmlFor="address2">Address Line 2</label> */}
                    <input 
                        type="text"
                        id="address2"
                        placeholder="Address Line 2"
                    />
                </div>
                <div className={classes['flex-form']}>
                    <div className={`${classes['form-control']} ${classes['country']}`}>
                        <label htmlFor="country">Country/Region</label>
                        <select name="country" id="country">
                            <option value="USA">United States</option>
                        </select>
                    </div>
                    <div className={`${classes['form-control']} ${classes['zip-code']}`}>
                        {/* <label htmlFor="zipCode">Zip Code</label> */}
                        <input 
                            type="text"
                            id="zipCode"
                            placeholder="Zip Code"
                        />
                    </div>
                    <div className={`${classes['form-control']} ${classes['state']}`}>
                        <label htmlFor="state">State</label>
                        <select name="state" id="state">
                            <option value="" disabled>Select State</option>
                            <option value="AL">Alabama</option>
                        </select>
                    </div>
                </div>
                <div className={classes['form-control']}>
                    {/* <label htmlFor="city">City</label> */}
                    <input 
                        type="text"
                        id="city"
                        placeholder="City"
                    />
                </div>
                <div className={classes['form-control']}>
                    {/* <label htmlFor="phoneNo">Phone</label> */}
                    <input 
                        type="text"
                        id="phoneNo"
                        placeholder="Phone"
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default CheckoutInformation;