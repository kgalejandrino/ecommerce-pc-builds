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
                <SideCartItem />
                <div className={classes['cart-total']}>
                    <span>Total</span>
                    <span>{totalAmount}</span>
                </div>
                <div className={classes['cart-btns']}>
                    <Button btnType="btn-primary" clicked={props.onCloseCart}>
                        <Link to="/cart">View Cart</Link>
                    </Button>
                    <Button btnType="btn-secondary">Checkout</Button>
                </div>
            </div>
        </Modal>
    );
};

export default SideCart;