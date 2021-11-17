import React, { Fragment } from 'react';

import classes from './PreBuiltPc.module.css';
import DUMMY_DATA from '../../DUMMY_DATA';
import Button from '../UI/Button/Button';
import bannerImg from '../../assets/prebuilt-banner-img.png';

const preBuiltPc = () => {
    const productLists = DUMMY_DATA.map(item => 
        <div className={classes.card} key={item.id}>
            <div className={classes['card-img']}>
                <img src={item.img} alt={item.product_name}/>
            </div>
            <div className={classes['card-header']}>
                <h3>{item.product_name}</h3>
                <div className={classes['card-details']}>
                    <span className={classes.cpu}>{item.cpu}</span> 
                    <span className={classes.gpu}>{item.gpu}</span>
                    <span className={classes.price}>${item.price}</span>
                </div>
                <div className={classes['card-btn']}>
                    <Button btnType="btn-transparent">Add to Cart</Button>
                </div>
            </div>
        </div>
    );

    return (
        <Fragment>
            <div className={classes.banner}>
                <div className={classes['banner-img']}>
                    <img src={bannerImg} alt="two tower case build" />
                </div>
                <div className={classes['text-box']}>
                    <h3>Pre-Built Pc, Built For You</h3>
                    <p>A variety of pre-built pc, built in perfection. Choose from our broad selection of ready to shipped pc that varies in component selection and price depending on your needs and preference.</p>
                    <div className={classes['customize-flex']}>
                        <p>Want full control in customizing your dream pc setup?</p>
                        <Button btnType="btn-primary">Build Now</Button>
                    </div>
                </div>
            </div>
            <div className={`${classes['main-content']} ${classes.row}`}>
                <h1>Pre-built Gaming Pc</h1>
                <div className={classes['filter-flex']}>
                    <span>Showing 1-9 of 20 results</span>
                    <select>
                        <option value="low">Sort by price: low to high</option>
                        <option value="high">Sort by price: high to low</option>
                    </select>
                </div>
                <div className={classes['product-container']}>
                    { productLists }
                </div>
            </div>
        </Fragment>
    );
};

export default preBuiltPc;