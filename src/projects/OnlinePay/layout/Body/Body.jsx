import React from 'react';
import styles from './Body.module.sass';
import BodyTitle from '../../components/BodyTitle/BodyTitle';
import BodyMain from '../../components/BodyMain/BodyMain';
import BodyActions from '../../components/BodyActions/BodyActions';

const Body = props => {
  return (
    <div className={styles.body}>
      <BodyTitle>STEP1. 選擇付款方式</BodyTitle>
      <BodyMain />
      <BodyActions />
    </div>
  );
};

export default Body;
