import React, { useState } from 'react';
import styles from './BodyMain.module.sass';
import BodyMainStep1 from '../BodyMainStep1/BodyMainStep1';
import BodyMainStep2 from '../BodyMainStep2/BodyMainStep2';
import BodyMainStep3 from '../BodyMainStep3/BodyMainStep3';

const BodyMain = props => {
  const { activeStep, dispatchActiveStep } = props;
  const [payMethod, setPayMethod] = useState('');

  const Component = (() => {
    const mapActiveStepToDOM = {
      1: BodyMainStep1,
      2: BodyMainStep2,
      3: BodyMainStep3
    };

    return mapActiveStepToDOM[activeStep];
  })();
  return (
    <div className={styles.body_main}>
      <Component
        activeStep={activeStep}
        dispatchActiveStep={dispatchActiveStep}
        payMethod={payMethod}
        setPayMethod={setPayMethod}
      />
    </div>
  );
};

export default BodyMain;
