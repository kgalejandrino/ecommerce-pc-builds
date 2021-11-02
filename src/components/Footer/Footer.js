import React from 'react';

import classes from './Footer.module.css';
import Logo from '../Logo/Logo';
import Navigations from '../Navigations/Navigations';
import Button from '../UI/Button/Button';

const Footer = () => {
    return (
        <footer>
            <div className={classes['footer-wrapper']}>
                <div className={`${classes['footer-about']} ${classes.card}`}>
                    <Logo />
                    <p>Not your typical pc build. We believed building pc is art and every build is treated as such.</p>
                    <a href="https://www.facebook.com/hapsonbacal" target="_blank" rel="noopener noreferrer">
                        <span><i className="fab fa-facebook-square"></i></span>
                    </a>
                    <a href="https://www.instagram.com/nemirk/" target="_blank" rel="noopener noreferrer">
                        <span><i className="fab fa-instagram-square"></i></span>
                    </a>
                </div>
                <div className={`${classes['footer-links']} ${classes.card}`}>
                    <h4>Builds</h4>
                    <Navigations type="footer-ul" />
                </div>
                <div className={`${classes['footer-newsletter']} ${classes.card}`}>
                    <h4>Newsletter</h4>
                    <p>Stay up to date and don't miss out good deals!</p>
                    <input type="text" />
                    <Button btnType="btn-success">Subscribe</Button>
                </div>
            </div>
            <div className={classes['bottom-footer']}>
                <div className={classes['policy-conditions-wrapper']}>
                    <p>Return Policy</p>
                    <p>|</p>
                    <p>Return Policy</p>
                    <p>|</p>
                    <p>Terms &amp; Conditions</p>
                </div>
                <div className={classes['credits-wrapper']}><p>© 2021 NemirkPcBuilds. All rights reserved</p></div>
            </div>
        </footer>
    );
};

export default Footer;