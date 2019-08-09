import React, { useState } from 'react';
import styles from './OrderInfomation.module.sass';

const OrderInfomation = props => {
  const { activeStep } = props;
  const [isMainVisible, setIsMainVisible] = useState(false);

  const data = {
    name: 'Iphone XR手機殼 x1',
    sn: '17485739',
    price: 'NT$ 600'
  };
  const list = [
    { label: '商品名稱', prop: 'name' },
    { label: '訂單編號', prop: 'sn' },
    { label: '訂單金額', prop: 'price' }
  ];

  const mainDOM = list.map((item, index) => {
    const { label, prop } = item;
    return (
      <div className={styles.item} key={index}>
        <div className={styles.item_title}>{label}：</div>
        <div className={styles.item_text}>{data[prop]}</div>
      </div>
    );
  });

  const showMainOrder = () => {
    setIsMainVisible(!isMainVisible);
  };

  const style = {
    title: (() => {
      const hiddenTitleStyle = {
        display: 'none'
      };
      return activeStep === 3 ? hiddenTitleStyle : {};
    })()
  };

  return (
    <div
      className={[
        styles.order_infomation,
        isMainVisible ? styles.active : ''
      ].join(' ')}
    >
      <div className={styles.main}>
        <div
          className={styles.title}
          style={style.title}
          onClick={showMainOrder}
        >
          訂單資訊
        </div>
        {mainDOM}
      </div>
    </div>
  );
};

export default OrderInfomation;
