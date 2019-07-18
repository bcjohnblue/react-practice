import React from 'react';
import styles from './Card.module.sass';
import Draggable from 'react-draggable';

const Card = props => {
  const positionStyle = {
    top: `${50 * props.position}px`
  };

  return (
    <Draggable>
      <div className={styles.card} style={positionStyle}>
        {props.card.type} {props.card.number}
      </div>
    </Draggable>
  );
};

export default Card;
