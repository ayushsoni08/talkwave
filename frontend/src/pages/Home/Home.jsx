import React from 'react';
import styles from './Home.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';

const Home = () => {

  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/authenticate');
    console.log("clicked...");
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to TalkWave!" icon="logo">
        <p className={styles.text}>
          We're working hard to get TalkWave ready for everyone! While we wrap up the finishing touches, we're adding people gradually to make sure nothing breaks.
        </p>
        <div>
          <Button handleClick={handleRegister} text="Let's Go" />
        </div>
        <div className={styles.signinWrapper}>
          <span>Have an invite text ?</span>
        </div>
      </Card>
    </div>
  )
}

export default Home