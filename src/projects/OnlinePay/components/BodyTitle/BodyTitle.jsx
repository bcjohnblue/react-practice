import React from 'react';
import styles from './BodyTitle.module.sass';

const BodyTitle = props => {
  return (
    <div className={styles.title}>
      <div className={styles.text}>
        <span>{props.children}</span>
        {/* <div className={styles.background_color} /> */}
      </div>
    </div>
  );
};

export default BodyTitle;
