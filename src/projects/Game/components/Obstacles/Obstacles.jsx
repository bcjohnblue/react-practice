import React from 'react';
import { createContext, useContext } from 'react';
import { useState, useEffect, useRef } from 'react';

import styles from './Obstacles.module.sass';
import clsx from 'clsx';

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

const buffList = [ZhongTianMushroom, Star, KoWenJe];
const debuffList = [CyberWarrior1450, TsaiIngWen, GouTaiMin, Mosquito, Flood];

const ObstaclesContext = createContext({
  position: ''
});

const setObstacleComponent = Component => {
  return () => {
    const { position } = useContext(ObstaclesContext);
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
      right: moveState + '%'
    };

    return (
      <Component
        className={clsx(styles.obstacles, styles[position])}
        style={style}
      />
    );
  };
};
const buff = buffList.map(component => setObstacleComponent(component));
const debuff = debuffList.map(component => setObstacleComponent(component));

export { ObstaclesContext };
export const obstacles = {
  buff,
  debuff
};
