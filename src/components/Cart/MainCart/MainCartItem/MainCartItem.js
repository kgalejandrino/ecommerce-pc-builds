import React, { useContext} from 'react';

import classes from './MainCartItem.module.css';
import CartContext from '../../../../store/cart-context';
import CartImage from '../../CartImage/CartImage';
import CartDetails from '../../CartDetails/CartDetails';
import CartButton from '../../CartButton/CartButton';

const MainCartItem = () => {
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
    
    return (
        cartCtx.items.map(item => 
            <tr>
                <td className={classes['row-img']}>
                    <CartImage img={item.img} name={item.name} cartType="maincart"/>
                </td>
                <td className={classes['row-details']}>
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
                <td className={classes['row-quantity']}>
                    <CartButton 
                        amount={item.amount}
                        onAdd={() => cartAddItemHandler(item)}
                        onRemove={() => cartRemoveItemHandler(item.id, 'ONE')}
                        onRemoveAll={() => cartRemoveItemHandler(item.id, 'ALL')}
                        cartType="viewcart"
                    />  
                </td>
                <td className={classes['row-subtotal']}>
                    <div className={classes.price}>{`$${(item.price * item.amount).toFixed(2)} USD`}</div>
                </td>
            </tr>
        )
    );
};

export default MainCartItem;