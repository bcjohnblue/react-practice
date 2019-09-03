import React from 'react';
import styles from './FileControlList.module.sass';

import { useEffect } from 'react';

import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/modules/drive/actionTypes';

const FileControlList = props => {
  const {
    fileControlList: { isVisible, clientX, clientY },
    closeFileControlList
  } = props;
  useEffect(() => {
    const fn = () => {
      console.log('close');
      closeFileControlList();
    };
    if (isVisible) window.addEventListener('click', fn);

    return () => {
      window.removeEventListener('click', fn);
    };
  }, [isVisible]);

  const controlList = [
    {
      label: '共享',
      onClick: () => {}
    },
    {
      label: '下載',
      onClick: () => {}
    },
    {
      label: '標示星號',
      onClick: () => {}
    },
    {
      label: '重新命名',
      onClick: () => {}
    },
    {
      label: '移動',
      onClick: () => {}
    },
    {
      label: '複製',
      onClick: () => {}
    },
    {
      label: '刪除',
      onClick: () => {}
    }
  ];
  const DOM = controlList.map(item => {
    const { label, onClick } = item;

    return (
      <div className={styles.item} key={label}>
        {label}
      </div>
    );
  });

  const style = {
    left: `${clientX - 100}px`,
    top: `${clientY + 25}px`
  };

  return isVisible ? (
    <div className={styles.file_control_list} style={style}>
      {DOM}
    </div>
  ) : null;
};

const mapStateToProps = ({ drive }, props) => {
  const { fileControlList } = drive;

  return {
    fileControlList
  };
};
const mapDispatchToProps = dispatch => {
  return {
    closeFileControlList: () =>
      dispatch({
        type: actionTypes.CLOSE_FILE_CONTROL_LIST
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileControlList);
