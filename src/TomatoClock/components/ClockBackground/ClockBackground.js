/*
 * @Description: 計時器背景畫面
 * @Author: bcjohn
 * @Date: 2019-07-11 17:08:23
 * @LastEditors: bcjohn
 * @LastEditTime: 2019-07-12 17:38:55
 */
import React from 'react';
import styles from './ClockBackground.module.sass';

const ClockBackground = props => {
  const clockStyle = styles[props.clockState];
  const playStyle = props.isPlay ? styles.play : '';

  return (
    <React.Fragment>
      <div
        className={[styles.button_background, playStyle, clockStyle].join(' ')}
      />
      <div
        className={[styles.button_small_block, playStyle, clockStyle].join(' ')}
      />
      <div
        className={[styles.clock_background, playStyle, clockStyle].join(' ')}
      />
      <div className={[styles.clock_ring, playStyle, clockStyle].join(' ')} />
    </React.Fragment>
  );
};

export default ClockBackground;
