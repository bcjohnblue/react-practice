import React from 'react';
import styles from './Main.module.sass';
import '../../styles/bootstrap_custom.sass';
import '../../styles/main.sass';

import Header from '../../layout/Header/Header';
import Body from '../../layout/Body/Body';
import Footer from '../../layout/Footer/Footer';

const Main = props => {
  return (
    <div className={styles.Main}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Main;
