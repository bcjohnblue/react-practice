import React from 'react';
import styles from './BodyMainStep1.module.sass';

import Button from 'react-bootstrap/Button';

import { ReactComponent as CreditCart } from '../../assets/credit-card.svg';
// FIXME: Why can not display?
import { ReactComponent as UnionPay } from '../../assets/unionpay.svg';
import { ReactComponent as Shop } from '../../assets/shop.svg';
import { ReactComponent as WebAtm } from '../../assets/web-atm.svg';
import { ReactComponent as Atm } from '../../assets/atm.svg';

const BodyMainStep1 = props => {
  const { dispatchActiveStep } = props;

  const blocks = [
    {
      Component: CreditCart,
      Text: '信用卡 / 金融卡'
    },
    {
      Component: UnionPay,
      Text: '銀聯卡'
    },
    {
      Component: Shop,
      Text: '超商付款'
    },
    {
      Component: WebAtm,
      Text: 'Web ATM'
    },
    {
      Component: Atm,
      Text: 'ATM 轉帳'
    }
  ];
  const DOM = blocks.map((block, index) => {
    const { Component, Text } = block;

    return (
      <div className={styles.img_block} key={index}>
        <div>
          <Component className={styles.svg} />
          <div className={styles.img_text}>{Text}</div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className={styles.block_container}>{DOM}</div>
      <div className={styles.body_actions}>
        <Button
          className={styles.button}
          onClick={() => dispatchActiveStep('INCREMENT')}
        >
          下一步
        </Button>
      </div>
    </>
  );
};

export default BodyMainStep1;
