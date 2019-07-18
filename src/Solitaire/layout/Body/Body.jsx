import React from 'react';
import styles from './Body.module.sass';
import LeftTop from '../../components/LeftTop/LeftTop.jsx';
import RightTop from '../../components/RightTop/RightTop.jsx';
import CardContainer from '../../components/CardContainer/CardContainer.jsx';

const Body = () => {
  return (
    <div className={styles.body}>
      <div className={styles.top}>
        <LeftTop className={styles.left_top} />
        <RightTop className={styles.right_top} />
      </div>
      <CardContainer />
    </div>
  );
};

export default Body;
