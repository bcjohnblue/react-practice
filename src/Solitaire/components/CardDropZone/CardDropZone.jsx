import React from 'react';
import styles from './CardDropZone.module.sass';

const CardDropZone = props => {
  return (
    <div className={[styles.card_dropzone, styles[props.styles]].join(' ')} />
  );
};

export default CardDropZone;
