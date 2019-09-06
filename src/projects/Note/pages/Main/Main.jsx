import React from 'react';
import styles from './Main.module.sass';

import Header from '../../layout/Header/Header';
import Body from '../../layout/Body/Body';

const Main = props => {
  return (
    <div className={styles.main}>
      <Header></Header>
      <Body></Body>
    </div>
  );
};

export default Main;
