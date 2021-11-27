import React, { useContext} from 'react';
import { useLocation } from 'react-router';

import CartContext from '../../../store/cart-context';
import classes from './CartButton.module.css';

const CartButton = (props) => {
    const location = useLocation();
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((cur, item) => {
        return cur + item.amount;
    }, 0);
    
    return (
        <div className={classes.cart}>
            <button disabled={location.pathname === '/cart' ? true : false} onClick={props.onShowCart}>
                <span><i className={`fas fa-shopping-cart ${classes.icon}`}></i></span>
            </button>
            <p className={classes['no-of-items']}>{numberOfCartItems}</p>
        </div>
    );
};

export default CartButton;