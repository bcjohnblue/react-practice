import React from 'react';
import styles from './Body.module.sass';

import Start from '../../components/Start/Start';
import HanGuoYu from '../../components/HanGuoYu/HanGuoYu';

const Body = props => {
  return (
    <div className={styles.body}>
      <Start />
      <HanGuoYu />
    </div>
  );
};

export default Body;
