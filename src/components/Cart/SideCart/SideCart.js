import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../UI/Modal/Modal';
import CartContext from '../../../store/cart-context';

import classes from './SideCart.module.css';
import Button from '../../UI/Button/Button';
import SideCartItem from './SideCartItem/SideCartItem';

const SideCart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
   
    return (
        <Modal onCloseCart={props.onCloseCart}>
            <div className={classes.cart}>
                <div className={classes['cart-header']}>
                    <span>Cart</span>
                    <span onClick={props.onCloseCart}><i className="fas fa-times"></i></span>
                </div>
                { cartCtx.items.length > 0 
                    ? <SideCartItem /> 
                    : <div className={classes['cart-empty']}>Your Cart is currently empty.</div> 
                }   
                <div className={classes['cart-total']}>
                    <span>Total</span>
                    <span>{totalAmount}</span>
                </div>
                <div className={classes['cart-btns']}>
                    <Link to="/cart">
                        <Button btnType="btn-primary" clicked={props.onCloseCart}>View Cart</Button>
                    </Link>
                    <Link to="/checkout/information">
                        <Button btnType="btn-secondary" clicked={props.onCloseCart}>Checkout</Button>
                    </Link>
                </div>
            </div>
        </Modal>
    );
};

export default SideCart;