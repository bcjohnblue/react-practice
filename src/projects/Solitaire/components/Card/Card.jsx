import React, { useState, useEffect } from 'react';
import styles from './Card.module.sass';

import { useDrag } from 'react-dnd';
import ItemTypes from '../../utils/ItemTypes';

import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/modules/card/actionTypes';

import { mapCardToImage } from './backgroundImages';

const Card = props => {
  const {
    card,
    cardColumnIndex,
    removeCard,
    clickRemoveCard,
    canDrag,
    isDropCard
  } = props;

  const [cardNumber, setCardNumber] = useState({});
  useEffect(() => {
    const mapNumberToCardNumber = {
      1: 'A',
      11: 'J',
      12: 'Q',
      13: 'K'
    };
    const mapTypeToColor = {
      Spade: 'black',
      Club: 'black',
      Heart: 'red',
      Diamond: 'red'
    };
    const numberText = mapNumberToCardNumber[card.number];

    setCardNumber({
      text: numberText ? numberText : card.number,
      style: {
        color: mapTypeToColor[card.type]
      }
    });
  }, []);

  // FIXME:
  // Warning: Can't perform a React state update on an unmounted component.
  // This is a no-op, but it indicates a memory leak in your application.
  // To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
  const [backgroundStyle, setBackgroundStyle] = useState({});
  useEffect(() => {
    mapCardToImage(card).then(imgResult => {
      const backgroundStyle = {
        card: {
          backgroundImage: `url(${imgResult.module.number})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: '80% 60%',
          backgroundColor: imgResult.backgroundColor,
          borderColor: imgResult.borderColor
        },
        right_top_image: {
          backgroundImage: `url(${imgResult.module.type})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '90% 7%',
          backgroundSize: '15% 11%'
        },
        left_bottom_image: {
          backgroundImage: `url(${imgResult.module.type})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '90% 7%',
          backgroundSize: '15% 11%',
          transform: 'rotate(-180deg)'
        }
      };

      setBackgroundStyle(backgroundStyle);
    });
  }, []);

  const style = {
    card: {
      top: `${5 * props.position}vh`,
      ...backgroundStyle.card
    },
    right_top_image: {
      ...backgroundStyle.right_top_image
    },
    left_bottom_image: {
      ...backgroundStyle.left_bottom_image
    }
  };

  const [, drag] = useDrag({
    item: { card: card, type: ItemTypes.CARD },
    canDrag,
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        removeCard(card, cardColumnIndex, isDropCard);
      }
    }
  });

  const className = isDropCard ? styles.drop_card : styles.card;

  return (
    <div
      onClick={() => clickRemoveCard(card, cardColumnIndex)}
      ref={drag}
      className={className}
      style={style.card}
    >
      <div className={styles.right_top_image} style={style.right_top_image} />
      <div
        className={styles.left_bottom_image}
        style={style.left_bottom_image}
      />
      <div className={styles.card_number} style={cardNumber.style}>
        {cardNumber.text}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeCard: (card, cardColumnIndex, isDropCard) =>
      dispatch({
        type: actionTypes.REMOVE_CARD,
        card,
        cardColumnIndex,
        isDropCard
      }),
    clickRemoveCard: (card, cardColumnIndex) =>
      dispatch({
        type: actionTypes.CLICK_REMOVE_CARD,
        card,
        cardColumnIndex
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Card);
