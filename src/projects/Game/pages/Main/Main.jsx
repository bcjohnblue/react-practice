import React, { useEffect, useReducer } from 'react';
import styles from './Main.module.sass';

import Header from '../../layout/Header/Header';
import Body from '../../layout/Body/Body';

const Main = props => {
  const rolePositionReducer = (rolePosition, action) => {
    switch (action) {
      case 'UP':
        if (rolePosition === 'top') return 'top';
        if (rolePosition === 'middle') return 'top';
        if (rolePosition === 'bottom') return 'middle';
        break;
      case 'DOWN':
        if (rolePosition === 'top') return 'middle';
        if (rolePosition === 'middle') return 'bottom';
        if (rolePosition === 'bottom') return 'bottom';
        break;
      default:
        return rolePosition;
    }
  };

  const [rolePosition, dispatchRolePosition] = useReducer(
    rolePositionReducer,
    'middle'
  );

  useEffect(() => {
    window.addEventListener('keydown', event => {
      console.log(event);
      if (event.key === 'ArrowUp') {
        dispatchRolePosition('UP');
      }
      if (event.key === 'ArrowDown') {
        dispatchRolePosition('DOWN');
      }
    });
  }, []);

  return (
    <div className={styles.main}>
      <Header />
      <Body rolePosition={rolePosition} />
    </div>
  );
};

export default Main;
