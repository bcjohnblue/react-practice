import React from 'react';
import styles from './SettingArea.module.sass';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const SettingArea = props => {
  return (
    <div className={styles.setting_area}>
      <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
      <span>2</span>
      <FontAwesomeIcon icon={faLock} />
      <span>私密</span>
      <FontAwesomeIcon icon={faCog} style={{ cursor: 'pointer' }} />
    </div>
  );
};

export default SettingArea;
