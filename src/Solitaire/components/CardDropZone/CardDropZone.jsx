import React from 'react';
import styles from './CardDropZone.module.sass';
import { useDrop } from 'react-dnd';
import ItemTypes from '../../utils/ItemTypes';

const CardDropZone = props => {
  const [collectedProps, drop] = useDrop({
    accept: ItemTypes.CARD
  });

  return (
    <div
      ref={drop}
      className={[styles.card_dropzone, styles[props.styles]].join(' ')}
    />
  );
};

export default CardDropZone;
