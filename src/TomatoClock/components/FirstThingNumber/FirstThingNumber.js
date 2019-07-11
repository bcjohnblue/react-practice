import React from 'react';
import styles from './FirstThingNumber.module.sass';

const FirstThingNumber = props => {
  return (
    <div className={styles.number} style={props.style}>
      {props.children}
    </div>
  );
};

export default FirstThingNumber;
