import React, { Fragment } from 'react';

import classes from './PreBuilt.module.css';
import DUMMY_DATA from '../../DUMMY_DATA';
import Button from '../UI/Button/Button';
import bannerImg from '../../assets/prebuilt-banner-img.png';
import PreBuiltItem from './PreBuiltItem/PreBuiltItem';

const PreBuiltPc = (props) => {
    const productLists = (
        <ul className={classes['product-container']}>
            { DUMMY_DATA.map(item =>  
                <PreBuiltItem 
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    name={item.product_name}
                    cpu={item.cpu}
                    gpu={item.gpu}
                    motherboard={item.motherboard}
                    ram={item.ram}
                    ssd={item.ssd}
                    cooler={item.cpu_cooler}
                    psu={item.psu}
                    case={item.case}
                    os={item.os}
                    dimension={item.dimension}
                    price={item.price}
                    onShowCart={props.onShowCart}
                />
            )}
        </ul>
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
            <div className={classes['main-content']}>
                <div className="row">
                    <h1>Pre-built Gaming Pc</h1>
                    <div className={classes['filter-flex']}>
                        <span>Showing 1-9 of 20 results</span>
                        <select>
                            <option value="low">Sort by price: low to high</option>
                            <option value="high">Sort by price: high to low</option>
                        </select>
                    </div>
                        { productLists }
                </div>
            </div>
        </Fragment>
    );
};

export default PreBuiltPc;