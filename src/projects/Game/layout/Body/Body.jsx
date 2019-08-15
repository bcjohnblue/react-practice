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
  const timerRef = useRef(null);
  const domRef = useRef(null);

  clearInterval(timerRef.current);
  timerRef.current = setInterval(() => {
    const Component = generateRandom('component');

    const DOM = (
      <ObstaclesContext.Provider
        value={{
          position: generateRandom('position')
        }}
        ref={domRef}
      >
        <Component
          forwardRef={domRef}
          obstaclesDOMList={obstaclesDOMList}
          setobstaclesDOMList={setobstaclesDOMList}
        />
      </ObstaclesContext.Provider>
    );
    // const DOM = forwardRef((props, ref) => (
    //   <ObstaclesContext.Provider
    //     value={{
    //       position: generateRandom('position')
    //     }}
    //   >
    //     <Component ref={ref}/>
    //   </ObstaclesContext.Provider>
    // ));
    // console.log(domRef.current && domRef.current.getBoundingClientRect());

    var observer = new IntersectionObserver(changes => {
      console.log(changes);
    });
    // observer.observe(domRef);
    obstaclesDOMList.map(DOM => {
      console.log(DOM);
      // observer.observe(DOM._self);
    });
    // console.log(obstaclesDOMList);

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
