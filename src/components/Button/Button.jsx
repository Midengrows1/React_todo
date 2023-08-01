import React from 'react';
import styles from './Button.module.css'
import clsx from 'clsx';
const Button = ({ onClick, children, className }) => {
    return (
        <button className={clsx(styles.button, className)} onClick={e => onClick(e)}>{children}</button>
    );
};

export default Button;