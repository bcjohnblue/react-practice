import React, { useReducer } from 'react';
import styles from './Main.module.sass';

import '../../styles/bootstrap_custom.sass';
import '../../styles/main.sass';

import Aside from '../../layout/Aside/Aside';
import Header from '../../layout/Header/Header';
import Body from '../../layout/Body/Body';
import Footer from '../../layout/Footer/Footer';

const Main = props => {
  const stepReducer = (activeStep, action) => {
    window.scrollTo(0, 0);

    switch (action) {
      case 'DECREMENT':
        return activeStep - 1;
      case 'INCREMENT':
        return activeStep + 1;
      case 'RESET':
        return 1;
      default:
        return activeStep;
    }
  };

  const [activeStep, dispatchActiveStep] = useReducer(stepReducer, 1);

  return (
    <div className={styles.Main}>
      <Aside activeStep={activeStep} />
      <Header activeStep={activeStep} />
      <Body activeStep={activeStep} dispatchActiveStep={dispatchActiveStep} />
      <Footer />
    </div>
  );
};

export default Main;
