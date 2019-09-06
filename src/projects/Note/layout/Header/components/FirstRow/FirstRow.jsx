import React from 'react';
import styles from './FirstRow.module.sass';

import sticker from '../../../../assets/sticker.jpg';
import { ReactComponent as SwitchBrightIcon } from '../../../../assets/icon/style-01.svg';
import { ReactComponent as SearchIcon } from '../../../../assets/icon/magnifying-glass.svg';

const FirstRow = props => {
  return (
    <div className={styles.first_row}>
      <div className={styles.sticker_container}>
        <img src={sticker} alt="sticker" className={styles.sticker} />
        <span className={styles.name}>bcjohn</span>
      </div>
      <div className={styles.search_container}>
        <input type="text" />
        <SearchIcon className={styles.search_icon}></SearchIcon>
      </div>
      <div className={styles.switch_bright_icon_container}>
        <SwitchBrightIcon
          className={styles.switch_bright_icon}
        ></SwitchBrightIcon>
      </div>
    </div>
  );
};

export default FirstRow;
