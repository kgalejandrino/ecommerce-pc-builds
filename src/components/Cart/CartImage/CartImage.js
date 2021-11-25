import React from 'react';

import classes from './CartImage.module.css';

const cartImage = (props) => {
    return (
        <div className={props.cartType ==='sidecart' ? classes['sidecart-img'] : classes['maincart-img']}>
            <img className={classes.img} src={props.img} alt={props.name} />
        </div>
    );
};

export default cartImage;