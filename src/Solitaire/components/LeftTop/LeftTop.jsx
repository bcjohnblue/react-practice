import React from 'react';
import styles from './LeftTop.module.sass';
import CardDropZone from '../CardDropZone/CardDropZone.jsx';

const LeftTop = props => {
  const array = Array.from({ length: 4 });
  const DOM = array.map((item, index) => (
    <CardDropZone styles={'left_top'} key={index} />
  ));
  return (
    <div className={[props.className, styles.left_top].join(' ')}>{DOM}</div>
  );
};

export default LeftTop;
