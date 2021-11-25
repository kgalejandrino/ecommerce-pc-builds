import React from 'react';

import classes from './CartButton.module.css';

const CartButton = (props) => {
    return (
        <div className={props.cartType === 'sidecart' ? classes['sidecart-button'] : classes['viewcart-button']}>
            <div className={classes.add}>
                <button onClick={props.onRemove} disabled={props.amount === 1}>-</button>
                <span>{props.amount}</span>
                <button onClick={props.onAdd}>+</button>
            </div>
            <span className={classes.remove} onClick={props.onRemoveAll}><i className="fas fa-trash-alt"></i></span>
        </div>
    );
};

export default CartButton;