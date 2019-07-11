/*
 * @Description: 計時器播放按鈕
 * @Author: bcjohn
 * @Date: 2019-07-11 17:04:12
 * @LastEditors: bcjohn
 * @LastEditTime: 2019-07-11 17:14:27
 */
import React from 'react';
import styles from './PlayButton.module.sass';

const PlayButton = props => {
  return (
    <React.Fragment>
      <div className={styles.play} />
      <div className={styles.play_background} />
      <div className={styles.play_small_block} />
    </React.Fragment>
  );
};

export default PlayButton;
