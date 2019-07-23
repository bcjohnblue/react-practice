import React from 'react';
import styles from './RightPanel.module.sass';

import { ReactComponent as List } from '../../../assets/svg/list.svg';
import { ReactComponent as Assessment } from '../../../assets/svg/assessment.svg';
import { ReactComponent as Music } from '../../../assets/svg/music.svg';

const RightPanel = props => {
  return (
    <div className={props.className}>
      <div className={styles.icon_container}>
        <List className={styles.icon_list} />
        <Assessment className={styles.icon_assessment} />
        <Music className={styles.icon_music} />
        <div className={styles.logo}>POMODORO</div>
      </div>
    </div>
  );
};

export default RightPanel;
