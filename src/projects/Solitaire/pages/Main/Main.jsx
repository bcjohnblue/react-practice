import React from 'react';
import styles from './Main.module.sass';
// import Header from '../../layout/Header/Header.jsx';
import Body from '../../layout/Body/Body.jsx';
import Footer from '../../layout/Footer/Footer.jsx';

import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const Main = () => {
  document.title = '新接龍';

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.main}>
        {/* <Header className={styles.header} /> */}
        <Body />
        <Footer />
      </div>
    </DndProvider>
  );
};

export default Main;
