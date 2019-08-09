import React from 'react';
import styles from './BodyTitle.module.sass';

const BodyTitle = props => {
  const { activeStep } = props;
  const { payMethod } = props;

  const mapActiveStepToTitle = {
    1: 'STEP1. 選擇付款方式',
    2: 'STEP2. 填寫付款資訊',
    3: '您的訂單已完成付款 !'
  };
  const mapPayMethodToSubTitle = {
    creditCart: '信用卡/金融卡',
    unionPay: '銀聯卡',
    shop: '超商付款',
    webATM: 'WebATM',
    ATM: 'ATM'
  };

  const subTitleDOM = (
    <div className={styles.sub_title}>{mapPayMethodToSubTitle[payMethod]}</div>
  );

  return (
    <div className={styles.title}>
      <div className={styles.text}>
        <div>{mapActiveStepToTitle[activeStep]}</div>
        {activeStep === 2 ? subTitleDOM : null}
      </div>
    </div>
  );
};

export default BodyTitle;
