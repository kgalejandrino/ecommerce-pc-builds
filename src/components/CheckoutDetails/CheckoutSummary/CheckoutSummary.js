import React, { useContext } from 'react';

import classes from './CheckoutSummary.module.css';
import CartContext from '../../../store/cart-context';
import CartImage from '../../Cart/CartImage/CartImage';
import CartDetails from '../../Cart/CartDetails/CartDetails';
import Button from '../../UI/Button/Button';

const CheckoutSummary = (props) => {
    const cartCtx = useContext(CartContext);

    const subTotal = cartCtx.totalAmount.toFixed(2);
    const tax = (subTotal * .0725).toFixed(2);
    const total = (+subTotal + +tax).toFixed(2);

    const cartItems = cartCtx.items.map(item => 
        <li className={classes['items-order']} key={item.id}>
            <div className={classes.item}>
                <CartImage img={item.img} name={item.name} cartType="checkout" />
                <CartDetails 
                    img={item.img}
                    name={item.name}
                    cpu={item.cpu}
                    gpu={item.gpu}
                    price={item.price}
                    cartType="checkout"
                />
            </div>
            <span className={classes.price}>{`$${item.price}`}</span>
        </li>
    );
    
    return (
        <div className={props.show ? `${classes['summary-container']} ${classes.show}` : classes['summary-container']}>
            <div className={classes['summary-details']}>
                <ul className={cartCtx.items.length >= 5 ? classes['item-lists'] : null}>{ cartItems }</ul>
                <div className={classes.coupon}>
                    <div className={classes['form-control']}>
                        {/* <label htmlFor="coupon">Promo code</label> */}
                        <input type="text" id="coupon" placeholder="Enter Promo Code" />
                    </div>
                    <Button btnType="btn-secondary">Apply</Button>
                </div>
                <div className={classes['order-receipt']}>
                    <div className={classes['flex-text']}>
                        <span>Subtotal</span>
                        <span>{`$${subTotal}`}</span>
                    </div>
                    <div className={classes['flex-text']}>
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className={classes['flex-text']}>
                        <span>Taxes(estimated)</span>
                        <span>{`$${tax}`}</span>
                    </div>
                </div>
                <div className={classes['flex-text']}>
                    <span>Total</span>
                    <span>{`$${total}`}</span>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSummary;