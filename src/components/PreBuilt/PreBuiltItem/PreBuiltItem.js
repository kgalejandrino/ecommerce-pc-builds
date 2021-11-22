import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../UI/Button/Button';
import CartContext from '../../../store/cart-context';
import classes from './PreBuiltItem.module.css';

const PreBuiltItem = (props) => {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = event => {
        event.preventDefault();
        props.onShowCart();
        
        cartCtx.addItem({
            id: props.id,
            img: props.img,
            name: props.name,
            cpu: props.cpu,
            gpu: props.gpu,
            price: props.price,
            amount: 1
        })
    };

    return (
        <li className={classes.card}>
            <Link to={`/pre-built-pc/${props.name}`}>
                <div className={classes['card-img']}>
                    <img src={props.img} alt={props.name}/>
                </div>
                <h3 className={classes['card-title']}>{props.name}</h3>
                <div className={classes['card-details']}>
                    <span>{props.cpu}</span> 
                    <span>{props.gpu}</span>
                </div>
                <span className={classes.price}>${props.price}</span>
            </Link>
            <form className={classes['card-btn']} onSubmit={addToCartHandler}>
                <Button btnType="btn-transparent">Add to Cart</Button>
            </form>
        </li>
    );
};

export default PreBuiltItem;