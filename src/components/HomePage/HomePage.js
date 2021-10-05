import React, { Fragment } from 'react';

import classes from './HomePage.module.css';
import build1 from '../../assets/build1.jpg';
import build2 from '../../assets/build2.jpg';
import build3 from '../../assets/build3.jpg';
import build4 from '../../assets/build4.jpg';
import build5 from '../../assets/build5.jpg';
import build6 from '../../assets/build6.jpg';
import build7 from '../../assets/build7.jpg';
import build8 from '../../assets/build8.jpg';

const HomePage = () => {
    return (
        <Fragment>
            <section className={classes['section-hero']}>
                <div className={classes['hero-text-box']}>
                    <p>Take your gaming experience to the next level.</p>
                    <p>Built Different. Top Tier. No Glitching</p>
                </div>
            </section>
            <section className={`${classes['section-features']} ${classes.row}`}>
                <h1>Upgrade your pc &mdash; Boost your fps </h1>
                <p className={classes.description}>Hello, we’re NemirkPcBuilds and we offer wide range of services such as gaming and streaming configuration, network and system configuration, data recovery and many more. Not sure why your computer is lagging or running slow? Let’s take care of that and get you ready to play at high level.</p>
                <div className={classes['card-wrapper']}>
                    <div className={classes.card}>
                        <span className="material-icons">moving</span>
                        <h3>Performance</h3>
                        <p>As a gamer ourselves at NemirkPcBuilds, we understand the frustration of sudden fps drops. With that, our team makes sure that our PCs are optimized to its max performance. </p>
                    </div>
                    <div className={classes.card}>
                        <span className="material-icons">engineering</span>
                        <h3>Testing</h3>
                        <p>Gaming has evolved over the years and so  has the system requirements. We can guarantee you that our pc meets high standard quality and is put thru a series of test to perform at peak level. </p>
                    </div>
                    <div className={classes.card}>
                        <span className="material-icons">support_agent</span>
                        <h3>Support</h3>
                        <p>To ensure our customers satisfaction, you will be connected directly to our team of IT. We prioritize that your questions/issues be answered or resolved as quickly as possible. </p>
                    </div>
                </div>
            </section>
            <section className={classes['section-pcbuilds']}>
                <div className={classes['img-wrapper']}>
                    <figure className={classes['pc-photo']}>
                        <img src={build1} alt="pc build with red rgb light" />
                    </figure>
                    <figure className={classes['pc-photo']}>
                        <img src={build2} alt="pc build with rainbow rgb light" />
                    </figure>
                    <figure className={classes['pc-photo']}>
                        <img src={build3} alt="pc build with green rgb light" />
                    </figure>
                    <figure className={classes['pc-photo']}>
                        <img src={build4} alt="pc build with purple rgb light" />
                    </figure>
                    <figure className={classes['pc-photo']}>
                        <img src={build5} alt="pc build with light pink rgb light" />
                    </figure>
                    <figure className={classes['pc-photo']}>
                        <img src={build6} alt="pc build with dark blue rgb light" />
                    </figure>
                    <figure className={classes['pc-photo']}>
                        <img src={build7} alt="pc build with purple and pink rgb light" />
                    </figure>
                    <figure className={classes['pc-photo']}>
                        <img src={build8} alt="pc build with light blue rgb light" />
                    </figure>
                </div>
            </section>
        </Fragment>
    );
};

export default HomePage;