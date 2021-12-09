import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainCart.module.css';
import CartContext from '../../../store/cart-context';
import Button from '../../UI/Button/Button';
import MainCartItem from './MainCartItem/MainCartItem';

const MainCart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    return (
        <form className={`${classes['view-cart']} row`}>
            <h2>Cart</h2>
            { cartCtx.items.length > 0
                ? <Fragment>
                    <table className={`${classes['cart-table']} row`}>
                        <thead>
                            <tr>
                                <th colSpan="2">Item</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <MainCartItem />
                            <tr>
                                <td colSpan="4">
                                    <div className={classes['row-total']}>
                                        <span className={classes['total-text']}>Total</span>
                                        <span className={classes['total-amount']}>{totalAmount}</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={classes.actions}>
                        <div className={classes.shopping}>
                            <span><i className="far fa-hand-point-left"></i></span>
                            <Link to="/pre-built-pc">Continue Shopping</Link>
                        </div>
                        <Link to="/checkout/information">
                            <Button btnType="btn-secondary">Checkout</Button>
                        </Link>
                    </div>
                </Fragment>
                : <div className={classes['cart-empty']}>
                    <span>Your cart is currently empty.</span>
                    <span>Continue browsing <Link to="/pre-built-pc">here</Link></span>
                </div>
            }
        </form>
    );
};

export default MainCart;