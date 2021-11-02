import React from 'react';

import classes from './Button.module.css';

const Button = (props) => (
    <button 
        className={`${classes.btn} ${classes[props.btnType]}`}>{props.children}
    </button>
)

export default Button;