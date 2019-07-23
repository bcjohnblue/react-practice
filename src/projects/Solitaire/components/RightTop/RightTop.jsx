import React from 'react';
import styles from './RightTop.module.sass';
import CardDropZone from '../CardDropZone/CardDropZone.jsx';

const RightTop = props => {
  const array = Array.from({ length: 4 });
  const DOM = array.map((item, index) => (
    <CardDropZone styles={'right_top'} key={index} />
  ));

  return (
    <div className={[props.className, styles.right_top].join(' ')}>{DOM}</div>
  );
};

export default RightTop;
