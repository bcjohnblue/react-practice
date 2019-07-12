/*
 * @Description: 計時器
 * @Author: bcjohn
 * @Date: 2019-07-10 16:24:24
 * @LastEditors: bcjohn
 * @LastEditTime: 2019-07-12 18:01:13
 */
import React, { useState } from 'react';
import styles from './Clock.module.sass';
import ClockButton from '../../components/ClockButton/ClockButton';
import ClockBackground from '../../components/ClockBackground/ClockBackground';
import PlayAnimation from '../../components/PlayAnimation/PlayAnimation';

const Clock = props => {
  const [clockState, setClockState] = useState('main');

  const [isPlay, setIsPlay] = useState(false);
  const clockClick = () => {
    switch (clockState) {
      case 'main':
        if (isPlay) setClockState('break');
        break;
      case 'break':
        if (isPlay) setClockState('main');
        break;
      default:
        break;
    }
    setIsPlay(!isPlay);
  };

  return (
    <div className={props.className} onClick={clockClick}>
      <ClockButton isPlay={isPlay} clockState={clockState} />
      <ClockBackground isPlay={isPlay} clockState={clockState} />
      <PlayAnimation
        className={styles.play_animation}
        isPlay={isPlay}
        clockState={clockState}
      />
    </div>
  );
};

export default Clock;
