import React, {useState} from 'react'
import Card from '../../../../components/shared/Card/Card';
import Button from '../../../../components/shared/Button/Button';
import styles from '../StepEmailPhone.module.css';
import TextInput from '../../../../components/shared/TextInput/TextInput';

const Phone = ({onNext}) => {

    const[phone, setPhone] = useState();


    return (
        <Card title='Enter your phone number' icon='phone'>
            <TextInput 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />

            <div>
                <div className={styles.actionButtonWrap}>
                    <Button text='Next' onClick={onNext} />
                </div>
                <p className={styles.bottomParagraph}>
                    By entering your number, you're agreeing to our Terms of
                    Service and Privacy Policy. Thanks!
                </p>
            </div>
        </Card>
    )
}

export default Phone