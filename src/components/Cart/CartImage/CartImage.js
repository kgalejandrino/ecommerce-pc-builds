import React from 'react';

import classes from './CartImage.module.css';

const cartImage = (props) => {
    return (
        <div className={props.cartType === 'sidecart' ? `${classes['cart-img']} ${classes.sidecart}` : `${classes['cart-img']} ${classes.maincart}`}>
            <img className={classes.img} src={props.img} alt={props.name} />
        </div>
    );
};

export default cartImage;