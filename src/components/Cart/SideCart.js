import React, { useContext } from 'react';
import Modal from '../UI/Modal/Modal';
import CartContext from '../../store/cart-context';

import classes from './SideCart.module.css';
import Button from '../UI/Button/Button';
import CartItem from './CartItem/CartItem';

const SideCart = (props) => {
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
        <ul className={classes['cart-details']}>
            {cartCtx.items.map(item => (
                <CartItem 
                    key={item.id}
                    img={item.img}
                    name={item.name}
                    cpu={item.cpu}
                    gpu={item.gpu}
                    price={item.price}
                    amount={item.amount}
                    onAdd={() => cartAddItemHandler(item)}
                    onRemove={() => cartRemoveItemHandler(item.id, 'ONE')}
                    onRemoveAll={() => cartRemoveItemHandler(item.id, 'ALL')}
                />
            ))}
        </ul>
    );
    
    return (
        <Modal onCloseCart={props.onCloseCart}>
            <div className={classes.cart}>
                <div className={classes['cart-header']}>
                    <span>Cart</span>
                    <span onClick={props.onCloseCart}><i className="fas fa-times"></i></span>
                </div>
                { cartCtx.items.length > 0 ? cartItems : <div className={classes['cart-empty']}>Your Cart is currently empty.</div> }
                <div className={classes['cart-total']}>
                    <span>Total</span>
                    <span>{totalAmount}</span>
                </div>
                <div className={classes['cart-btns']}>
                    <Button btnType="btn-primary">View Cart</Button>
                    <Button btnType="btn-secondary">Checkout</Button>
                </div>
            </div>
        </Modal>
    );
};

export default SideCart;