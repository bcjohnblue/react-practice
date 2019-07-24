import React, { useState } from 'react';
import styles from './Body.module.sass';

import CardDropZoneContainer from '../../components/CardDropZoneContainer/CardDropZoneContainer.jsx';
import CardCollectZoneContainer from '../../components/CardCollectZoneContainer/CardCollectZoneContainer.jsx';
import CardContainer from '../../components/CardContainer/CardContainer.jsx';

// import initCardList from '../../components/CardContainer/cardList';

const Body = () => {
  // const [cardList, setCardList] = useState(initCardList)
  // console.log(cardList);

  return (
    <div className={styles.body}>
      <div className={styles.top}>
        <CardDropZoneContainer className={styles.left_top} />
        <CardCollectZoneContainer className={styles.right_top} />
      </div>
      <CardContainer />
    </div>
  );
};

export default Body;
