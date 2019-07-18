import React from 'react';
import styles from './Main.module.sass';
import Header from '../../layout/Header/Header.jsx';
import Body from '../../layout/Body/Body.jsx';
import Footer from '../../layout/Footer/Footer.jsx';

const Main = () => {
  return (
    <div className={styles.main}>
      <Header className={styles.header} />
      <Body />
      <Footer />
    </div>
  );
};

export default Main;
