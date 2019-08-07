import React, { useReducer } from 'react';
import styles from './Main.module.sass';
import '../../styles/bootstrap_custom.sass';
import '../../styles/main.sass';

import Header from '../../layout/Header/Header';
import Body from '../../layout/Body/Body';
import Footer from '../../layout/Footer/Footer';

const Main = props => {
  const stepReducer = (activeStep, action) => {
    // const activeStep = action.activeStep;

    switch (action) {
      case 'DECREMENT':
        return activeStep - 1;
      case 'INCREMENT':
        return activeStep + 1;
      default:
        return activeStep;
    }
  };

  const [activeStep, dispatchActiveStep] = useReducer(stepReducer, 2);

  return (
    <div className={styles.Main}>
      <Header activeStep={activeStep} />
      <Body activeStep={activeStep} dispatchActiveStep={dispatchActiveStep} />
      <Footer />
    </div>
  );
};

export default Main;
