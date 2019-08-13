import React from 'react';
import styles from './HanGuoYu.module.sass';
import clsx from 'clsx';

import { ReactComponent as Role } from '../../assets/韓導1.svg';

const HanGuoYu = props => {
  const { rolePosition } = props;
  // const className = {
  //   hanGuoYu:
  // }

  return (
    <div className={styles.han_guo_yu}>
      <Role className={clsx(styles.role, styles[rolePosition])} />
    </div>
  );
};

export default HanGuoYu;
