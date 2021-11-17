import React from 'react';
import Modal from '../UI/Modal/Modal';

import classes from './Cart.module.css';
import product from '../../assets/pre-built1.png';
import Button from '../UI/Button/Button';

const Cart = () => {
    return (
        <Modal>
            <div className={classes.cart}>
                <div className={classes['cart-header']}>
                    <span>Shopping Cart</span>
                    <span><i class="fas fa-times"></i></span>
                </div>
                <div className={classes['cart-details']}>
                    <div className={classes.product}>
                        <div className={classes['product-img']}>
                            <img src={product} alt="pre built pc" />
                        </div>
                        <div className={classes['product-details']}>
                            <h4 className={classes.name}>Abs Challenger</h4>
                            <div className={classes.desc}>
                                <span>AMD Ryzen5 3600 6-core 3.6 GHz</span>
                                <span>Nvidia GeForce GTX 1650 4GB</span>
                            </div>
                            <span className={classes.price}>$949</span>
                            <div className={classes.quantity}>
                                <input type="button" value="-" />
                                <input type="number" min="1" max="10" pattern="[0-9]*" value="1" />
                                <input type="button" value="+" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes['cart-total']}>
                    <span>Total</span>
                    <span>$949.00 USD</span>
                </div>
                <div className={classes['cart-btns']}>
                    <Button btnType="btn-primary">View Cart</Button>
                    <Button btnType="btn-secondary">Checkout</Button>
                </div>
            </div>
        </Modal>
    );
};

export default Cart;