import React from 'react';
import styles from './CardList.module.sass';

import CardItem from '../CardItem/CardItem.jsx';

const CardList = props => {
  const { data } = props;

  const DOM = data.map((item, index) => {
    return <CardItem item={item} key={index}></CardItem>;
  });

  return <div className={styles.card_list}>{DOM}</div>;
};

export default CardList;
