import React from 'react';
import CartItem from './CartItem/CartItem';

import classes from './ViewCart.module.css';

const ViewCart = () => {
    return (
        <div className={`${classes['view-cart']} row`}>
            <h2>Cart</h2>
            <table className={`${classes['cart-table']} row`}>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><CartItem /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ViewCart;