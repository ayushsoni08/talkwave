import React, {useState} from 'react';
import StepEmailPhone from '../Steps/StepEmailPhone/StepEmailPhone';
import StepOtp from '../Steps/StepOtp/StepOtp';

const steps = {
    1: StepEmailPhone,
    2: StepOtp,
};

const Login = () => {
    const[step, setStep] = useState(1);
    const Step = steps[step];

    const handleNextStep = () => {
        setStep(step+1);
    }

    return (
        <div>
            <Step handleClick={handleNextStep} />
        </div>
    )
}

export default Login