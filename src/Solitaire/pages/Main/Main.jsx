import React from 'react';
import styles from './Main.module.sass';
import Header from '../../layout/Header/Header.jsx';

const Main = () => {
  return (
    <div className={styles.main}>
      <Header className={styles.header} />
    </div>
  );
};

export default Main;
