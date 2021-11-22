import React, { useContext} from 'react';

import CartContext from '../../../store/cart-context';
import classes from './CartButton.module.css';

const CartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((cur, item) => {
        return cur + item.amount;
    }, 0);
    
    return (
        <div className={classes.cart}>
            <span onClick={props.onShowCart}><i className={`fas fa-shopping-cart ${classes.icon}`}></i></span>
            <p className={classes['no-of-items']}>{numberOfCartItems}</p>
        </div>
    );
};

export default CartButton;