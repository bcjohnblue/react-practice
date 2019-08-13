import React, { useState, useEffect, useRef, useReducer } from 'react';
import styles from './Body.module.sass';
import clsx from 'clsx';

import Start from '../../components/Start/Start';
import HanGuoYu from '../../components/HanGuoYu/HanGuoYu';

import { ReactComponent as Rock } from '../../assets/石頭.svg';

const Body = props => {
  const { rolePosition } = props;
  const [moveState, setMoveState] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    clearInterval(timerRef.current);
    if (moveState >= 100) return;
    timerRef.current = setInterval(() => {
      console.log(moveState);

      setMoveState(moveState + 40);
    }, 1000);
  }, [moveState]);
  const style = {
    rock: {
      right: moveState + '%'
    }
  };
  // console.log(moveState);

  return (
    <div className={styles.body}>
      <Start />
      <HanGuoYu rolePosition={rolePosition} />
      <Rock className={clsx(styles.rock, styles.top)} style={style.rock} />
    </div>
  );
};

export default Body;
