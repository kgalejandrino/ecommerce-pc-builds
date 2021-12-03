import React, { useContext } from 'react';

import classes from './CheckoutSummary.module.css';
import CartContext from '../../../store/cart-context';
import CartImage from '../../Cart/CartImage/CartImage';
import CartDetails from '../../Cart/CartDetails/CartDetails';
import Button from '../../UI/Button/Button';

const CheckoutSummary = () => {
    const cartCtx = useContext(CartContext);

    const cartItems = cartCtx.items.map(item => 
        <li className={classes['items-order']}>
            <div className={classes.item}>
                <CartImage img={item.img} name={item.name} cartType="checkout" />
                <CartDetails 
                    key={item.id}
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
        <div className={classes['summary-container']}>
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
                        <span>$115.00</span>
                    </div>
                    <div className={classes['flex-text']}>
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className={classes['flex-text']}>
                        <span>Taxes(estimated)</span>
                        <span>$10.36</span>
                    </div>
                </div>
                <div className={classes['flex-text']}>
                    <span>Total</span>
                    <span>$236.00</span>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSummary;