/*
 * @Description: 計時器背景畫面
 * @Author: bcjohn
 * @Date: 2019-07-11 17:08:23
 * @LastEditors: bcjohn
 * @LastEditTime: 2019-07-11 17:14:50
 */
import React from 'react';
import styles from './ClockBackground.module.sass';

const ClockBackground = props => {
  return (
    <React.Fragment>
      <div className={styles.clock_background} />
      <div className={styles.clock_ring} />
    </React.Fragment>
  );
};

export default ClockBackground;
