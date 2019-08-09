import React from 'react';
import styles from './Aside.module.sass';
import OrderInfomation from '../../components/OrderInfomation/OrderInfomation';

import Button from 'react-bootstrap/Button';

const Aside = props => {
  const { activeStep, dispatchActiveStep } = props;

  const style = {
    button: (() => {
      const removeStyle = {
        display: 'none'
      };
      return activeStep === 3 ? removeStyle : {};
    })()
  };

  return (
    <div className={styles.aside}>
      <OrderInfomation
        activeStep={activeStep}
        dispatchActiveStep={dispatchActiveStep}
      />
      <div className={styles.button_container}>
        <Button
          variant="dark"
          onClick={() => {
            dispatchActiveStep('RESET');
          }}
          style={style.button}
        >
          返回商店
        </Button>
      </div>
    </div>
  );
};

export default Aside;
