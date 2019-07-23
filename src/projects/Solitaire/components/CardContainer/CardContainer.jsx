import React from 'react';
import styles from './CardContainer.module.sass';
import CardColumnContainer from '../CardColumnContainer/CardColumnContainer.jsx';

import { connect } from 'react-redux';

const CardContainer = props => {
  const { cardList } = props;

  const DOM = cardList.map((cardColumnList, cardColumnIndex) => {
    return (
      <CardColumnContainer
        cardColumnList={cardColumnList}
        cardColumnIndex={cardColumnIndex}
        key={cardColumnIndex}
      />
    );
  });

  return <div className={styles.card_container}>{DOM}</div>;
};

const mapStateToProps = ({ card }, props) => {
  const { cardList } = card;

  return {
    cardList
  };
};

export default connect(mapStateToProps)(CardContainer);
