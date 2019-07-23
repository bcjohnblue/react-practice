import React, { useState } from 'react';
import styles from './Body.module.sass';
import LeftTop from '../../components/LeftTop/LeftTop.jsx';
import RightTop from '../../components/RightTop/RightTop.jsx';
import CardContainer from '../../components/CardContainer/CardContainer.jsx';

// import initCardList from '../../components/CardContainer/cardList';

const Body = () => {
  // const [cardList, setCardList] = useState(initCardList)
  // console.log(cardList);

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
