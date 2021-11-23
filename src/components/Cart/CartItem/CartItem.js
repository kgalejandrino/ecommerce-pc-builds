import React from 'react';
import CartButton from '../CartButton/CartButton';

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
                <CartButton 
                    amount={props.amount}
                    onAdd={props.onAdd}
                    onRemove={props.onRemove}
                    onRemoveAll={props.onRemoveAll}
                />
            </div>
        </li>
    );
};

export default CartItem;