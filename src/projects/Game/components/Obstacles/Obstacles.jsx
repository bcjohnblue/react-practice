import React from 'react';
import { createContext, useContext } from 'react';
import { useState, useEffect, useRef, forwardRef } from 'react';

import styles from './Obstacles.module.sass';
import clsx from 'clsx';

import { isCollide } from '../../utils';

// 增益腳色
import { ReactComponent as ZhongTianMushroom } from '../../assets/中天菇.svg';
import { ReactComponent as Star } from '../../assets/無敵星星.svg';
import { ReactComponent as KoWenJe } from '../../assets/神秘小幫手.svg';

// 減益腳色
import { ReactComponent as CyberWarrior1450 } from '../../assets/1450.svg';
import { ReactComponent as TsaiIngWen } from '../../assets/老蔡.svg';
import { ReactComponent as GouTaiMin } from '../../assets/老郭.svg';
import { ReactComponent as Mosquito } from '../../assets/蚊子.svg';
import { ReactComponent as Flood } from '../../assets/淹大水.svg';

const buffList = [
  {
    Component: ZhongTianMushroom
  },
  {
    Component: Star
  },
  {
    Component: KoWenJe,
    className: 'left_to_right'
  }
];
const debuffList = [
  {
    Component: CyberWarrior1450
  },
  {
    Component: TsaiIngWen
  },
  {
    Component: GouTaiMin
  },
  {
    Component: Mosquito
  },
  {
    Component: Flood
  }
];

const ObstaclesContext = createContext({
  position: ''
});

const setObstacleComponent = item => {
  return props => {
    const { Component, className = 'right_to_left' } = item;
    const {
      obstaclesDOMList,
      setobstaclesDOMList,
      forwardRef: obstacleRef,
      roleRef,
      clearTimer
    } = props;

    const { position } = useContext(ObstaclesContext);
    const [moveState, setMoveState] = useState(0);

    const timerRef = useRef(null);

    useEffect(() => {
      clearInterval(timerRef.current);
      if (moveState >= 100) {
        // clearTimer();
        // setobstaclesDOMList(obstaclesDOMList.slice(1));
        // console.log(obstaclesDOMList);
        // console.log(forwardRef.current);
        return;
      }
      timerRef.current = setInterval(() => {
        // console.log(moveState);
        console.log('s');
        console.log(isCollide(roleRef, obstacleRef));

        if (isCollide(roleRef, obstacleRef)) {
          window.alert('撞到了');
        }

        setMoveState(moveState + 10);
      }, 1000);
    }, [moveState]);

    const style = (() => {
      const initStyle = {};

      switch (className) {
        case 'right_to_left':
          initStyle.transform = `translateX(${-moveState}vw)`;
          break;
        case 'left_to_right':
          initStyle.transform = `translateX(${moveState}vw)`;
          break;
        default:
          break;
      }
      console.log(initStyle);

      return initStyle;
    })();

    return (
      <Component
        className={clsx(
          styles.obstacles,
          className ? styles[className] : styles['right_to_left'],
          styles[position]
        )}
        style={style}
        ref={obstacleRef}
      />
    );
  };
};
const buff = buffList.map((item, index) => setObstacleComponent(item));
const debuff = debuffList.map(item => setObstacleComponent(item));

export { ObstaclesContext };
export const obstacles = {
  buff,
  debuff
};
