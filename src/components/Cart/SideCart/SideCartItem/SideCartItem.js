import React, { useContext } from 'react';

import classes from './SideCartItem.module.css';
import CartContext from '../../../../store/cart-context';
import CartImage from '../../CartImage/CartImage';
import CartDetails from '../../CartDetails/CartDetails';

const SideCartItem = () => {
    const cartCtx = useContext(CartContext);

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
        cartCtx.items.map(item => (
            <li className={classes['sidecart-details']} key={item.id}>
                <CartImage 
                    img={item.img}
                    name={item.name}
                    cartType="sidecart"
                />
                <CartDetails 
                    key={item.id}
                    img={item.img}
                    name={item.name}
                    cpu={item.cpu}
                    gpu={item.gpu}
                    price={item.price}
                    cartType="sidecart"
                    amount={item.amount}
                    onAdd={() => cartAddItemHandler(item)}
                    onRemove={() => cartRemoveItemHandler(item.id, 'ONE')}
                    onRemoveAll={() => cartRemoveItemHandler(item.id, 'ALL')}
                />
            </li>
        ))
    );

    return (      
        <ul>
            {cartItems}
        </ul>
    );
};

export default SideCartItem;