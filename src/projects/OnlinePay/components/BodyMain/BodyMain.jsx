import React from 'react';
import styles from './BodyMain.module.sass';
import BodyMainStep1 from '../BodyMainStep1/BodyMainStep1';
import BodyMainStep2 from '../BodyMainStep2/BodyMainStep2';

const BodyMain = props => {
  const { activeStep, dispatchActiveStep } = props;

  const Component = (() => {
    const mapActiveStepToDOM = {
      1: BodyMainStep1,
      2: BodyMainStep2
    };

    return mapActiveStepToDOM[activeStep];
  })();
  return (
    <div className={styles.body_main}>
      <Component
        activeStep={activeStep}
        dispatchActiveStep={dispatchActiveStep}
      />
    </div>
  );
};

export default BodyMain;
