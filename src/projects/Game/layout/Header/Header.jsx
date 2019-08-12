import React from 'react';
import styles from './Header.module.sass';
import clsx from 'clsx';

import { ReactComponent as Life } from '../../assets/生命.svg';
import { ReactComponent as Money } from '../../assets/金幣數.svg';

const Header = props => {
  const lifeList = Array.from({ length: 3 });
  const lifeDOM = (
    <div className={styles.life_container}>
      {lifeList.map((item, index) => (
        <Life className={styles.life} key={index} />
      ))}
    </div>
  );
  const timeDOM = (
    <div className={styles.time_container}>
      <span>TIME: </span>
      <span>90 </span>
      <span>S</span>
    </div>
  );
  const moneyDOM = (
    <div className={styles.money_container}>
      <Money />
      <span>X</span>
      <span>0</span>
    </div>
  );

  return (
    <div className={styles.header}>
      {lifeDOM}
      {timeDOM}
      {moneyDOM}
    </div>
  );
};

export default Header;
