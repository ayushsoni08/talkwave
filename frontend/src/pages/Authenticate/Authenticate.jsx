import React, {useState} from 'react';
import StepEmailPhone from '../Steps/StepEmailPhone/StepEmailPhone';
import StepOtp from '../Steps/StepOtp/StepOtp';

const steps = {
    1: StepEmailPhone,
    2: StepOtp,
};

const Authenticate = () => {

    const[step, setStep] = useState(1);
    const Step = steps[step];

    const onNext = () => {
        setStep(step+1);
    }

    return (
        <Step onNext={onNext} />  
    )
}

export default Authenticate;