import React from 'react';
import styles from './Input.module.css';


const Input = (props) => {
    return (
        <div className={styles.imput}>
            <label htmlFor={props.input.id}>
                {props.lable}
            </label>
            <input {...props.input} />
        </div>
    )
}

export default Input;