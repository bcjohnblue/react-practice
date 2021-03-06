/*
 * @Description: 計時器播放、暫停按鈕
 * @Author: bcjohn
 * @Date: 2019-07-11 17:04:12
 * @LastEditors: bcjohn
 * @LastEditTime: 2019-07-16 13:08:58
 */
import React from 'react';
import styles from './ClockButton.module.sass';

const ClockButton = props => {
  const playButtonStyle = styles[props.clockState];

  const playButton = (
    <div className={[styles.play_button, playButtonStyle].join(' ')} />
  );
  const pauseButton = <div className={styles.pause_button} />;
  const DOM = props.isPlay ? pauseButton : playButton;

  return <React.Fragment>{DOM}</React.Fragment>;
};

export default ClockButton;
