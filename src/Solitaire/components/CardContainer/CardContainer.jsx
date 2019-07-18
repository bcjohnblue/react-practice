import React from 'react';
import styles from './CardContainer.module.sass';
import cardList from './cardList';
import CardColumnContainer from '../CardColumnContainer/CardColumnContainer.jsx';

const CardContainer = props => {
  console.log(cardList);
  const DOM = cardList.map((item, index) => {
    return <CardColumnContainer cardList={item} key={index} />;
  });
  return (
    <div className={styles.card_container}>
      {DOM}
      {/* <CardColumnContainer /> */}
    </div>
  );
};

export default CardContainer;
