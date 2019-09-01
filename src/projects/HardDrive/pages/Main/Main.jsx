import React from 'react';
import styles from './Main.module.sass';

import SideBar from '../../components/SideBar/SideBar';

const Main = props => {
  return (
    <div className={styles.main}>
      <SideBar></SideBar>
    </div>
  );
};

export default Main;
