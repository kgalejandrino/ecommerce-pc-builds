import React, { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import CartButton from '../CartButton/CartButton';
import CartDetails from '../CartDetails/CartDetails';
import CartImage from '../CartImage/CartImage';

import classes from './MainCart.module.css';

const MainCart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const cartAddItemHandler = (item) => {
        cartCtx.addItem({...item, amount: 1})
    }

    const cartRemoveItemHandler = (id, type) => {
        if(type === 'ONE') {
            cartCtx.removeOneItem(id);
        }

        if(type === 'ALL') {
            cartCtx.removeItem(id);
        }
    }

    const cartItems = (
        cartCtx.items.map(item => {
            return <tr>
                <td><CartImage img={item.img} name={item.name}/></td>
                <td>
                    <CartDetails 
                        key={item.id}
                        img={item.img}
                        name={item.name}
                        cpu={item.cpu}
                        gpu={item.gpu}
                        price={item.price}
                        amount={item.amount}
                        cartType="viewcart"
                    />
                </td>
                <td>
                    <CartButton 
                        amount={item.amount}
                        onAdd={() => cartAddItemHandler(item)}
                        onRemove={() => cartRemoveItemHandler(item.id, 'ONE')}
                        onRemoveAll={() => cartRemoveItemHandler(item.id, 'ALL')}
                        cartType="viewcart"
                    />  
                </td>
                <td>
                    <div className={classes.price}>{`$${item.price * item.amount} USD`}</div>
                </td>
            </tr>
        })
    );

    return (
        <div className={`${classes['view-cart']} row`}>
            <h2>Cart</h2>
            <table className={`${classes['cart-table']} row`}>
                <thead>
                    <tr>
                        <th colspan="2">Item</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    { cartItems }
                </tbody>
            </table>
        </div>
    );
};

export default MainCart;