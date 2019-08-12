import React from 'react';
import styles from './Start.module.sass';

// import { ReactComponent as BigMoney } from '../../assets/高雄發大財.png';
import { ReactComponent as UpArrow } from '../../assets/向上鍵.svg';
import { ReactComponent as DownArrow } from '../../assets/向下鍵.svg';

const Start = props => {
  return (
    <div className={styles.start}>
      <div className={styles.big_money} />
      <div className={styles.start_text}>START</div>
      <div className={styles.arrow_container}>
        <UpArrow />
        <DownArrow />
      </div>
    </div>
  );
};

export default Start;
