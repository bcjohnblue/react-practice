import React from 'react';
import styles from './FirstThingNumber.module.sass';

const FirstThingNumber = props => {
  const clockStateStyle = styles[props.clockState];

  return (
    <div className={[styles.number, clockStateStyle].join(' ')}>
      {props.children}
    </div>
  );
};

export default FirstThingNumber;
