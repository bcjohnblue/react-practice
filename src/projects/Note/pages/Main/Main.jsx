import React from 'react';
import styles from './Main.module.sass';

import Header from '../../layout/Header/Header';
import Body from '../../layout/Body/Body';

const Main = props => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Header></Header>
        <Body></Body>
      </div>
    </div>
  );
};

export default Main;
