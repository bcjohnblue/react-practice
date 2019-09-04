import React from 'react';
import styles from './ProgressBarDialog.module.sass';

import Dialog from '../Dialog/Dialog';
import ProgressBar from '../ProgressBar/ProgressBar';

const ProgressBarDialog = props => {
  const { isVisible, title, size, totalSize } = props;

  // const mapTypeToText = {
  //   upload: '上傳檔案中...',
  //   download: '下載檔案中...'
  // };

  return (
    <Dialog className={styles.progress_bar_dialog} visible={isVisible}>
      <div className={styles.text}>{title}</div>
      <ProgressBar size={size} totalSize={totalSize}></ProgressBar>
    </Dialog>
  );
};

export default ProgressBarDialog;
