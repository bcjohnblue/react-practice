import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  createRef
} from 'react';
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
  const timerRef = useRef(null);

  clearInterval(timerRef.current);
  timerRef.current = setInterval(() => {
    // const length = obstacles.buff.length;
    // const selectIndex = parseInt(Math.random() * length);
    // const Component = obstacles.buff[selectIndex];
    const Component = generateRandom('component');

    const DOM = (
      <ObstaclesContext.Provider
        value={{
          position: generateRandom('position')
        }}
      >
        <Component />
      </ObstaclesContext.Provider>
    );
    setobstaclesDOMList([...obstaclesDOMList, DOM]);
  }, 2000);

  return (
    <div className={styles.body}>
      <Start />
      <HanGuoYu rolePosition={rolePosition} />
      {obstaclesDOMList}
      {/* <Rock className={clsx(styles.rock, styles.top)} style={style.rock} /> */}
      {/* <ZhongTianMushroom className={clsx(styles.rock, styles.top)} /> */}
      {/* {ZhongTianMushroom} */}
    </div>
  );
};

export default Body;
