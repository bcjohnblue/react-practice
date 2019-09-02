import React from 'react';
import styles from './ProgressBarDialog.module.sass';

import ProgressBar from '../../components/ProgressBar/ProgressBar';

const ProgressBarDialog = props => {
  return (
    <div className={styles.progress_bar_dialog}>
      <ProgressBar
        size={10}
        totalSize={100}
        className={styles.progress_bar}
      ></ProgressBar>
    </div>
  );
};

export default ProgressBarDialog;
