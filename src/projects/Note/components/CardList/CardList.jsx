import React from 'react';
import styles from './CardList.module.sass';

import CardItem from '../CardItem/CardItem.jsx';

const CardList = props => {
  const { data } = props;

  const DOM = data.map((item, index) => {
    const rowBackgroundDOM = (() => {
      if ((index + 1) % 4 !== 0) return null;
      return <div className={styles.background}></div>;
    })();

    return (
      <React.Fragment key={index}>
        <CardItem item={item} className={styles.card_item}></CardItem>
        {rowBackgroundDOM}
      </React.Fragment>
    );
  });

  return <div className={styles.card_list}>{DOM}</div>;
};

export default CardList;
