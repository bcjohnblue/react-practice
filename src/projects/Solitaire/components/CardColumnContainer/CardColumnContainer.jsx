import React from 'react';
import styles from './CardColumnContainer.module.sass';
import Card from '../Card/Card.jsx';

import { useDrop } from 'react-dnd';
import ItemTypes from '../../utils/ItemTypes';

import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/modules/card/actionTypes';

const CardColumnContainer = props => {
  const { cardColumnList, cardColumnIndex, setDropCardColumn } = props;

  const canDrop = (card, lastCard) => {
    if (!lastCard) return true;
    const { type, number } = card;
    const { type: lastType, number: lastNumber } = lastCard;

    const isTypeValid = (type, lastType) => {
      const mapTypeToColor = {
        Spade: 'black',
        Club: 'black',
        Heart: 'red',
        Diamond: 'red'
      };

      return mapTypeToColor[type] !== mapTypeToColor[lastType];
    };
    const isNumberValid = (number, lastNumber) => number === lastNumber - 1;

    return isTypeValid(type, lastType) && isNumberValid(number, lastNumber)
      ? true
      : false;
  };

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => {
      const card = item.card;
      setDropCardColumn(card, cardColumnIndex);
    },
    canDrop: item => {
      const card = item.card;
      const lastCard = cardColumnList.slice(-1)[0];

      return canDrop(card, lastCard);
    }
  });

  const DOM = cardColumnList.map((card, index) => {
    const canDrag = index + 1 >= cardColumnList.length;
    return (
      <Card
        card={card}
        cardColumnIndex={cardColumnIndex}
        position={index}
        key={index}
        canDrag={canDrag}
      />
    );
  });

  return (
    <div ref={drop} className={styles.card_column_container}>
      {DOM}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setDropCardColumn: (card, cardColumnIndex) =>
      dispatch({
        type: actionTypes.DROP_CARD_COLUMN,
        card,
        cardColumnIndex
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CardColumnContainer);
