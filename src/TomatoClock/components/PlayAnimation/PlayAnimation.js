/*
 * @Description: 控制計時器繞圈動畫
 * @Author: bcjohn
 * @Date: 2019-07-11 16:02:15
 * @LastEditors: bcjohn
 * @LastEditTime: 2019-07-11 17:14:37
 */
import React from 'react';
import styles from './PlayAnimation.module.sass';

const PlayAnimation = props => {
  const playAnimationStyle = {
    animationPlayState: props.playState ? 'running' : 'paused'
  };

  return (
    <div className={props.className}>
      <div
        className={[styles.pie, styles.spinner].join(' ')}
        style={playAnimationStyle}
      />
      <div
        className={[styles.pie, styles.filter].join(' ')}
        style={playAnimationStyle}
      />
      <div className={styles.mask} style={playAnimationStyle} />
    </div>
  );
};

export default PlayAnimation;
