import React, { useContext } from 'react';
import Button from '../../UI/Button/Button';
import CartContext from '../../../store/cart-context';

import classes from './ClickedPreBuilt.module.css';

const ClickedPreBuilt = (props) => {
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
        <div className={`${classes['clicked-item']} row`}>
            <div className={classes['item-img']}>
                <img src={props.img} alt={props.name} />
            </div>
            <div className={classes.details}>
                <h3>{props.name}</h3>
                <span className={classes.price}>{`$${props.price}`}</span>
                <div>
                    <li>
                        <span>CPU: </span>
                        <span>{props.cpu}</span>
                    </li>
                    <li>
                        <span>GPU: </span>
                        <span>{props.gpu}</span>
                    </li>
                    <li>
                        <span>Motherboard: </span>
                        <span>{props.motherboard}</span>
                    </li>
                    <li>
                        <span>Ram: </span>
                        <span>{props.ram}</span>
                    </li>
                    <li>
                        <span>SSD: </span>
                        <span>{props.ssd}</span>
                    </li>
                    <li>
                        <span>CPU cooler: </span>
                        <span>{props.cooler}</span>
                    </li>
                    <li>
                        <span>Power Supply: </span>
                        <span>{props.psu}</span>
                    </li>
                    <li>
                        <span>Case: </span>
                        <span>{props.case}</span>
                    </li>
                    <li>
                        <span>Operating System: </span>
                        <span>{props.os}</span>
                    </li>
                    <li>
                        <span>Dimension: </span>
                        <span>{props.dimension}</span>
                    </li>
                </div>
                <Button btnType="btn-primary" clicked={addToCartHandler}>Add to Cart</Button>
            </div>
        </div>
    );
};

export default ClickedPreBuilt;