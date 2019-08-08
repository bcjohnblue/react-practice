import React from 'react';
import styles from './Aside.module.sass';
import OrderInfomation from '../../components/OrderInfomation/OrderInfomation';

const Aside = props => {
  const { activeStep } = props;
  return (
    <div className={styles.Aside}>
      <OrderInfomation activeStep={activeStep} />
    </div>
  );
};

export default Aside;
