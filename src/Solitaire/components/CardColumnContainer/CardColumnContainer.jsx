import React from 'react';
import styles from './CardColumnContainer.module.sass';
import Card from '../Card/Card.jsx';

const CardColumnContainer = props => {
  console.log(props.cardList);

  const DOM = props.cardList.map((card, index) => {
    return <Card card={card} position={index} key={index} />;
  });

  return <div className={styles.card_column_container}>{DOM}</div>;
};

export default CardColumnContainer;
