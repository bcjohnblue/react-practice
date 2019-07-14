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
  const clockTimeState = props.timeState[props.clockState];
  const initialClockTimeState = props.initialTimeState[props.clockState];

  const playAnimationStyle = {
    animationPlayState: props.isPlay ? 'running' : 'paused',
    animationDuration: `${props.initialTimeState[props.clockState].second}s`
    // animationDuration: `${clockTimeState.second}s`
  };

  const degree = clockTimeState.count * (360 / initialClockTimeState.second);
  const rotateStyle = {
    transform: `rotate(${degree}deg)`
  };
  const opacityStyle = type => {
    const isPassHalfCircle =
      clockTimeState.second <= initialClockTimeState.second / 2;

    let opacity;
    switch (type) {
      case 'filter':
        opacity = isPassHalfCircle ? 1 : 0;
        break;
      case 'mask':
        opacity = isPassHalfCircle ? 0 : 1;
        break;
      default:
        break;
    }
    return { opacity };
  };

  return (
    <div className={props.className}>
      <div
        className={[styles.pie, styles.spinner, clockStyle].join(' ')}
        style={{ ...playAnimationStyle, ...rotateStyle }}
      />
      <div
        className={[styles.pie, styles.filter, clockStyle].join(' ')}
        style={{ ...playAnimationStyle, ...opacityStyle('filter') }}
      />
      <div
        className={[styles.mask, clockStyle].join(' ')}
        style={{ ...playAnimationStyle, ...opacityStyle('mask') }}
      />
    </div>
  );
};

export default PlayAnimation;
