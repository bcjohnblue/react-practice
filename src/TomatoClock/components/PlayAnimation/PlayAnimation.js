/*
 * @Description: 控制計時器繞圈動畫
 * @Author: bcjohn
 * @Date: 2019-07-11 16:02:15
 * @LastEditors: bcjohn
 * @LastEditTime: 2019-07-12 17:58:01
 */
import React from 'react';
import styles from './PlayAnimation.module.sass';

const PlayAnimation = props => {
  const clockStyle = styles[props.clockState];
  const playAnimationStyle = {
    animationPlayState: props.isPlay ? 'running' : 'paused'
  };

  return (
    <div className={props.className}>
      <div
        className={[styles.pie, styles.spinner, clockStyle].join(' ')}
        style={playAnimationStyle}
      />
      <div
        className={[styles.pie, styles.filter, clockStyle].join(' ')}
        style={playAnimationStyle}
      />
      <div
        className={[styles.mask, clockStyle].join(' ')}
        style={playAnimationStyle}
      />
    </div>
  );
};

export default PlayAnimation;
