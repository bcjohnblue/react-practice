import React from 'react';
import styles from './OtherThings.module.sass';
import { ReactComponent as PlaySVG } from '../../assets/svg/play.svg';

const OtherThings = props => {
  const clockStateStyle = styles[props.clockState];

  const DOM = props.data.map((item, index) => {
    return (
      <div className={styles.other_things} key={index}>
        <div className={styles.circle} />
        <div className={styles.title}>{item}</div>
        <PlaySVG className={styles.right_arrow} />
      </div>
    );
  });

  return (
    <div className={styles.container}>
      {DOM}
      <div className={[styles.more, clockStateStyle].join(' ')}>MORE</div>
    </div>
  );
};

export default OtherThings;
