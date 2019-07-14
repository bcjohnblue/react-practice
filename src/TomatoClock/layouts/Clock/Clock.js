/*
 * @Description: 計時器
 * @Author: bcjohn
 * @Date: 2019-07-10 16:24:24
 * @LastEditors: bcjohn
 * @LastEditTime: 2019-07-12 18:01:13
 */
import React, { useState, useCallback } from 'react';
import styles from './Clock.module.sass';
import ClockButton from '../../components/ClockButton/ClockButton';
import ClockBackground from '../../components/ClockBackground/ClockBackground';
import PlayAnimation from '../../components/PlayAnimation/PlayAnimation';

const Clock = props => {
  const [isPlay, setIsPlay] = useState(false);
  const [timer, setTimer] = useState({
    main: undefined,
    break: undefined
  });
  const [isTimeup, setTimeup] = useState(false);

  // console.log(props.timeState[props.clockState].second);

  const countDown = isStart => {
    const nowSecond = props.timeState[props.clockState].second;

    if (isStart) {
      const timerInterval = setInterval(() => {
        // FIXME: setInterval 沒辦法獲取新的state.
        // console.log(props.timeState[props.clockState].second);

        if (props.timeState[props.clockState].second === 0) {
          // setTimeup(true);
          setIsPlay(false);
          clearInterval(timer[props.clockState]);
          return;
        }

        props.dispatchTimeState({
          clockState: props.clockState,
          type: 'DECREMENT'
        });
      }, 1000);

      setTimer({
        ...timer,
        [props.clockState]: timerInterval
      });
    } else {
      clearInterval(timer[props.clockState]);
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
        clockState={props.clockState}
        timeState={props.timeState}
        timer={timer}
        initialTimeState={props.initialTimeState}
      />
    </div>
  );
};

export default Clock;
