import React from 'react';
import styles from './Card.module.sass';
import { useDrag } from 'react-dnd';
import ItemTypes from '../../utils/ItemTypes';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/modules/card/actionTypes';

const Card = props => {
  // console.log(props);

  const {
    card,
    cardColumnIndex,
    removeCard,
    dbClickRemoveCard,
    canDrag
  } = props;

  const positionStyle = {
    top: `${50 * props.position}px`
  };

  const [collectedProps, drag] = useDrag({
    item: { card: card, type: ItemTypes.CARD },
    canDrag,
    collect: monitor => ({
      card: card
    }),
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        removeCard(cardColumnIndex);
        // props.dispatchCardState({
        //   type: 'DECREMENT'
        // });
      }
      console.log(item, monitor);
    }
  });

  const className = props.isDropCard ? styles.drop_card : styles.card;

  return (
    <div
      onDoubleClick={() => dbClickRemoveCard(card, cardColumnIndex)}
      ref={drag}
      className={className}
      style={positionStyle}
    >
      {card.type} {card.number}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeCard: cardColumnIndex =>
      dispatch({
        type: actionTypes.REMOVE_CARD,
        cardColumnIndex
      }),
    dbClickRemoveCard: (card, cardColumnIndex) =>
      dispatch({
        type: actionTypes.DBCLICK_REMOVE_CARD,
        card,
        cardColumnIndex
      })
  };
};
// mapStateToProps
export default connect(
  null,
  mapDispatchToProps
)(Card);

// export default Card;
