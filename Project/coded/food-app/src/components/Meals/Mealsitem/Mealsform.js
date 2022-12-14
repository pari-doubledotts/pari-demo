import React from 'react';
import styles from './Mealsform.module.css'
import Input from '../../UI/Input';

const Mealsform = (props) => {
  return (
    <form className={styles.form}>
        <Input lable="Amount" 
        Input={{
            id: 'amount + props.id',
            type: 'number',
            min: '1',
            max: '5',
            defaultvalue: '1'
        }}/>
       
        <button> + Add</button>
    </form>
  )
}

export default Mealsform;