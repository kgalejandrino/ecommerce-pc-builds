import React from 'react';

import classes from './CartItem.module.css';

const CartItem = (props) => {

    return (
        <li className={classes['cart-details']}>
            <div className={classes['product-img']}>
                <img src={props.img} alt={props.name} />
            </div>
            <div className={classes['product-details']}>
                <h5 className={classes.name}>{props.name}</h5>
                <div className={classes.desc}>
                    <span>{props.cpu}</span>
                    <span>{props.gpu}</span>
                    <span className={classes.price}>{`$${props.price}`}</span>
                </div>
                <div className={classes.actions}>
                    <div className={classes.add}>
                        <button onClick={props.onRemove} disabled={props.amount === 1}>-</button>
                        <span>{props.amount}</span>
                        <button onClick={props.onAdd}>+</button>
                    </div>
                    <span className={classes.remove} onClick={props.onRemoveAll}><i className="fas fa-trash-alt"></i></span>
                </div>
            </div>
        </li>
    );
};

export default CartItem;