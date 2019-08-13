import React from 'react';
import styles from './HanGuoYu.module.sass';

import { ReactComponent as Role } from '../../assets/韓導1.svg';

const HanGuoYu = props => {
  return (
    <div className={styles.han_guo_yu}>
      <Role className={styles.role} />
    </div>
  );
};

export default HanGuoYu;
