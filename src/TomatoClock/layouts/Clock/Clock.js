/*
 * @Description: 計時器
 * @Author: bcjohn
 * @Date: 2019-07-10 16:24:24
 * @LastEditors: bcjohn
 * @LastEditTime: 2019-07-16 11:43:20
 */
import React, { useState, useEffect, useRef } from 'react';
import styles from './Clock.module.sass';
import ClockButton from '../../components/ClockButton/ClockButton';
import ClockBackground from '../../components/ClockBackground/ClockBackground';
import PlayAnimation from '../../components/PlayAnimation/PlayAnimation';

const Clock = props => {
  const [isPlay, setIsPlay] = useState(false);
  const [isTimeup, setIsTimeup] = useState(false);
  const timerRef = useRef({
    main: undefined,
    break: undefined
  });
  const second = props.timeState[props.clockState].second;

  useEffect(() => {
    if (second === 0) {
      clearInterval(timerRef.current[props.clockState]);
      setIsPlay(false);
      props.dispatchTimeState({
        clockState: props.clockState,
        type: 'RESET'
      });

      setIsTimeup(true);
      alert('時間到!');
      setIsTimeup(false);
    }
  }, [second]);

  const countDown = isStart => {
    if (isStart) {
      timerRef.current[props.clockState] = setInterval(() => {
        console.log('setInterval');

        props.dispatchTimeState({
          clockState: props.clockState,
          type: 'DECREMENT'
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current[props.clockState]);
    }
  };
  const clockClick = () => {
    switch (props.clockState) {
      case 'main':
        if (isPlay) {
          countDown(false);
          props.setClockState('break');
        } else {
          countDown(true);
        }
        break;
      case 'break':
        if (isPlay) {
          countDown(false);
          props.setClockState('main');
        } else {
          countDown(true);
        }
        break;
      default:
        break;
    }
    setIsPlay(!isPlay);
  };

  return (
    <div className={props.className} onClick={clockClick}>
      <ClockButton isPlay={isPlay} clockState={props.clockState} />
      <ClockBackground isPlay={isPlay} clockState={props.clockState} />
      <PlayAnimation
        className={styles.play_animation}
        isPlay={isPlay}
        isTimeup={isTimeup}
        clockState={props.clockState}
        timeState={props.timeState}
        initialTimeState={props.initialTimeState}
      />
    </div>
  );
};

export default Clock;
