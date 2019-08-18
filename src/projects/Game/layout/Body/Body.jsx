import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  createRef,
  forwardRef
} from 'react';
import { findDOMNode } from 'react-dom';
import styles from './Body.module.sass';
import clsx from 'clsx';

import { generateRandom } from '../../utils';

import Start from '../../components/Start/Start';
import HanGuoYu from '../../components/HanGuoYu/HanGuoYu';

import {
  ObstaclesContext
  // obstacles
} from '../../components/Obstacles/Obstacles';

const Body = props => {
  const { rolePosition } = props;
  const [obstaclesDOMList, setobstaclesDOMList] = useState([]);
  const [playState, setPlayState] = useState('start');
  const timerRef = useRef(null);
  const domRef = useRef(null);
  const roleRef = useRef(null);

  const initGame = () => {
    clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      const Component = generateRandom('component');

      const DOM = (
        <ObstaclesContext.Provider
          value={{
            position: generateRandom('position')
          }}
        >
          <Component
            forwardRef={domRef}
            roleRef={roleRef}
            obstaclesDOMList={obstaclesDOMList}
            setobstaclesDOMList={setobstaclesDOMList}
            clearTimer={() => {
              clearInterval(timerRef.current);
            }}
          />
        </ObstaclesContext.Provider>
      );

      setobstaclesDOMList([...obstaclesDOMList, DOM]);
    }, 5000);
  };

  const watchPlayState = (() => {
    console.log(playState);

    switch (playState) {
      case 'processing':
        initGame();
        break;
      default:
        break;
    }
  })();

  // console.log(domRef.current && domRef.current.getBoundingClientRect());
  // console.log(roleRef.current && roleRef.current.offsetTop);

  return (
    <div className={styles.body}>
      {playState === 'start' ? <Start setPlayState={setPlayState} /> : null}
      <HanGuoYu rolePosition={rolePosition} forwardRef={roleRef} />
      {obstaclesDOMList}
      {/* <Rock className={clsx(styles.rock, styles.top)} style={style.rock} /> */}
      {/* <ZhongTianMushroom className={clsx(styles.rock, styles.top)} /> */}
      {/* {ZhongTianMushroom} */}
    </div>
  );
};

export default Body;
