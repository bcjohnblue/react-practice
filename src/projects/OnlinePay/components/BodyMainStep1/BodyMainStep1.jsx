import React from 'react';
import styles from './BodyMainStep1.module.sass';

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { ReactComponent as CreditCart } from '../../assets/credit-card.svg';
// FIXME: Why can not display?
import { ReactComponent as UnionPay } from '../../assets/unionpay.svg';
import { ReactComponent as Shop } from '../../assets/shop.svg';
import { ReactComponent as WebAtm } from '../../assets/web-atm.svg';
import { ReactComponent as Atm } from '../../assets/atm.svg';

const BodyMainStep1 = props => {
  const { dispatchActiveStep } = props;
  const { payMethod, setPayMethod } = props;

  const blocks = [
    {
      Component: CreditCart,
      Text: '信用卡 / 金融卡',
      Value: 'creditCart'
    },
    {
      Component: UnionPay,
      Text: '銀聯卡',
      Value: 'unionPay'
    },
    {
      Component: Shop,
      Text: '超商付款',
      Value: 'shop'
    },
    {
      Component: WebAtm,
      Text: 'Web ATM',
      Value: 'webATM'
    },
    {
      Component: Atm,
      Text: 'ATM 轉帳',
      Value: 'ATM'
    }
  ];

  const DOM = blocks.map((block, index) => {
    const { Component, Text, Value } = block;

    const className = (() => {
      const activeStyle = payMethod === Value ? styles.active : '';
      return [styles.img_block, activeStyle].join(' ');
    })();
    const onClick = () => {
      setPayMethod(Value);
    };

    return (
      <OverlayTrigger
        key={index}
        placement="top"
        overlay={<Tooltip>頁面將跳轉至對應之金融機構頁面進行後續交易</Tooltip>}
      >
        <div className={className} onClick={onClick}>
          <div>
            <Component className={styles.svg} />
            <div className={styles.img_text}>{Text}</div>
          </div>
        </div>
      </OverlayTrigger>
    );
  });

  return (
    <>
      <div className={styles.block_container}>{DOM}</div>
      <div className={styles.body_actions}>
        <Button
          className={styles.button}
          onClick={() => {
            if (!payMethod) return;
            dispatchActiveStep('INCREMENT');
          }}
        >
          下一步
        </Button>
      </div>
    </>
  );
};

export default BodyMainStep1;
