import React from 'react';
import styles from './SecondRow.module.sass';

import StarButton from '../../../../components/StarButton/StarButton';
import { ReactComponent as ListIcon } from '../../../../assets/icon/list-01.svg';
import { ReactComponent as CardIcon } from '../../../../assets/icon/card-01.svg';

const SecondRow = props => {
  return (
    <div className={styles.second_row}>
      <StarButton position="left">顯示星號筆記</StarButton>
      <div className={styles.icon_container}>
        <ListIcon></ListIcon>
        <CardIcon></CardIcon>
      </div>
    </div>
  );
};

export default SecondRow;
