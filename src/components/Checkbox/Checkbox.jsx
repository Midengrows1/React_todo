import React from 'react';
import styles from './Checkbox.module.css'
const Checkbox = ({ checked, onChange }) => {
    return (
        <input type="checkbox" className={styles.checkbox} checked={checked} onChange={onChange} />
    );
};

export default Checkbox;