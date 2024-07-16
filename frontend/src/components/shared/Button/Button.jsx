import React from 'react';
import styles from './Button.module.css';

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick} className={styles.button}>
        <span>{text}</span>
        <img src="/images/arrow-forward.png" alt="arrow" />
    </button>
  )
}

export default Button