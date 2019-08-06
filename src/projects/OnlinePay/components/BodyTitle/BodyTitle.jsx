import React from 'react';
import styles from './BodyTitle.module.sass';

const BodyTitle = props => {
  const { activeStep } = props;
  const mapActiveStepToTitle = {
    1: 'STEP1. 選擇付款方式',
    2: 'STEP2. 填寫付款資訊',
    3: 'STEP3. 您的訂單已完成付款 !'
  };

  return (
    <div className={styles.title}>
      <div className={styles.text}>
        <span>{mapActiveStepToTitle[activeStep]}</span>
        {/* <div className={styles.background_color} /> */}
      </div>
    </div>
  );
};

export default BodyTitle;
