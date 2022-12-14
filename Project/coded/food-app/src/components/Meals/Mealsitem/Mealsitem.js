import React from 'react';
import styles from '../Mealsitem/Mealsitem.module.css';
import Mealsform from './Mealsform';

const Mealsitem = (props) => {
  return (
    <li className={styles.meal}>
    <div>
    <h3>{props.name}</h3>
    <div className={styles.description}>{props.description}</div>
    <div className={styles.price}>{props.price}</div>
  </div>
  <div>
    <Mealsform />
  </div>
  </li>
  )
}

export default Mealsitem;