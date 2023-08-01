import React from 'react';
import styles from './Input.module.css'
const Input = ({ onChange, value }) => {
    return (
        <input type="text" className={styles.input} value={value} onChange={onChange} />
    );
};

export default Input;