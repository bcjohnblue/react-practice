import React, { useState } from 'react';
import styles from './Body.module.sass';
import BodyTitle from '../../components/BodyTitle/BodyTitle';
import BodyMain from '../../components/BodyMain/BodyMain';

const Body = props => {
  const { activeStep, dispatchActiveStep } = props;
  const [payMethod, setPayMethod] = useState('');

  return (
    <div className={styles.body}>
      <BodyTitle activeStep={activeStep} payMethod={payMethod} />
      <BodyMain
        activeStep={activeStep}
        dispatchActiveStep={dispatchActiveStep}
        payMethod={payMethod}
        setPayMethod={setPayMethod}
      />
    </div>
  );
};

export default Body;
