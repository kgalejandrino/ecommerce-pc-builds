import React from 'react';
import CartButton from '../CartButton/CartButton';

import classes from './CartDetails.module.css';

const cartDetails = (props) => {
    return (
        <div className={props.cartType ==='sidecart' ? classes['sidecart-desc'] : classes['maincart-desc']}>
            <h5 className={classes.name}>{props.name}</h5>
            <div className={classes.description}>
                <span>{props.cpu}</span>
                <span>{props.gpu}</span>
                <span className={classes.price}>{`$${props.price}`}</span>
            </div>
            { props.cartType === 'sidecart' 
                ? <CartButton 
                    amount={props.amount}
                    onAdd={props.onAdd}
                    onRemove={props.onRemove}
                    onRemoveAll={props.onRemoveAll}
                    cartType="sidecart"
                  /> 
                : null
            }
        </div>
    );
};

export default cartDetails;