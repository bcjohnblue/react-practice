import React from 'react';
import styles from './Body.module.sass';

import Start from '../../components/Start/Start';

const Body = props => {
  return (
    <div className={styles.body}>
      <Start />
    </div>
  );
};

export default Body;
