import React, {useState} from 'react'
import styles from './StepOtp.module.css';
import Card from '../../../components/shared/Card/Card';
import TextInput from '../../../components/shared/TextInput/TextInput';
import Button from '../../../components/shared/Button/Button';

const StepOtp = ({handleClick}) => {
  
  const[otp, setOtp] = useState('');

  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title='Enter the code we just texted you' icon='lock-emoji'>
          <TextInput 
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <div className={styles.actionButtonWrap}>
            <Button text='Next' />
          </div>
          <p className={styles.bottomParagraph}>
            By entering the code, you're agreeing to our Terms of
            Service and Privacy Policy. Thanks!
          </p>
        </Card>
      </div>
    </>
  )
}

export default StepOtp