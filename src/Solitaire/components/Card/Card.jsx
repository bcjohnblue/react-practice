import React from 'react';
import styles from './Card.module.sass';
import { useDrag } from 'react-dnd';
import ItemTypes from '../../utils/ItemTypes';

const Card = props => {
  const positionStyle = {
    top: `${50 * props.position}px`
  };
  const { canDrag } = props;
  const [collectedProps, drag] = useDrag({
    item: { type: ItemTypes.CARD },
    canDrag
  });
  // console.log(drag);

  // const DraggableComponent = props => {
  //   const [collectedProps, drag] = useDrag({
  //     item: { type: 'test' }
  //   });
  //   return <div ref={drag}>...</div>;
  // };

  return (
    <div ref={drag} className={styles.card} style={positionStyle}>
      {props.card.type} {props.card.number}
    </div>
  );
};

export default Card;
