import React, { useReducer } from 'react';
import styles from './Main.module.sass';

import '../../styles/bootstrap_custom.sass';
import '../../styles/main.sass';

import Aside from '../../layout/Aside/Aside';
import Header from '../../layout/Header/Header';
import Body from '../../layout/Body/Body';
import Footer from '../../layout/Footer/Footer';

const Main = () => {
  document.title = '線上支付';

  const stepReducer = (activeStep, action) => {
    const scrollDOM = document.querySelector('#scroll_DOM');
    scrollDOM.scrollTo(0, 0);

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
    <div className={styles.main}>
      <div id="scroll_DOM" className={styles.top}>
        <div className={styles.left_containter}>
          <Aside
            activeStep={activeStep}
            dispatchActiveStep={dispatchActiveStep}
          />
        </div>
        <div className={styles.right_containter}>
          <Header activeStep={activeStep} />
          <Body
            activeStep={activeStep}
            dispatchActiveStep={dispatchActiveStep}
          />
        </div>
      </div>
      <Footer dispatchActiveStep={dispatchActiveStep} />
    </div>
  );
};

export default Main;
