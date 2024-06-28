import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={`${styles.navbar} container`}>
        <Link to='/' className={styles.brandStyle}>
            <img src="/images/logo.png" alt="logo" />
            <span>TalkWave</span>
        </Link>
    </nav>
  )
}

export default Navigation