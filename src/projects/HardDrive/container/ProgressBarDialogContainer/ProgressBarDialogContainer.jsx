import React from 'react';
// import styles from './ProgressBarDialog.module.sass';

import { connect } from 'react-redux';

import ProgressBarDialog from '../../components/ProgressBarDialog/ProgressBarDialog';

const ProgressBarDialogContainer = props => {
  const {
    progressBarDialog: { isVisible, title, size, totalSize }
  } = props;

  return (
    <ProgressBarDialog
      isVisible={isVisible}
      title={title}
      size={size}
      totalSize={totalSize}
    ></ProgressBarDialog>
  );
};

const mapStateToProps = ({ drive }, props) => {
  const { progressBarDialog } = drive;

  return {
    progressBarDialog
  };
};

export default connect(mapStateToProps)(ProgressBarDialogContainer);
