import React from 'react';

import classes from './CartImage.module.css';

const cartImage = (props) => {
    return (
        <div className={`${classes['cart-img']} ${classes[props.cartType]}`}>
            <img className={classes.img} src={props.img} alt={props.name} />
        </div>
    );
};

export default cartImage;