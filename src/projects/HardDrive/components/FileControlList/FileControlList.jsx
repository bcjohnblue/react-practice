import React from 'react';
import styles from './FileControlList.module.sass';

import { useEffect } from 'react';

import axios from 'axios';
import firebase from '../../../../plugins/firebase';

import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/modules/drive/actionTypes';

const FileControlList = props => {
  const {
    fileControlList: { isVisible, clientX, clientY, fullPath },
    closeFileControlList
  } = props;
  const { openProgressBarDialog, closeProgressBarDialog } = props;

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
      onClick: event => {
        // event.stopPropagation();

        const downloadFile = (blob, fileName) => {
          const url = window.URL.createObjectURL(blob);

          const linkDOM = document.createElement('a');
          linkDOM.href = url;
          linkDOM.download = fileName;
          linkDOM.style.display = 'none';
          linkDOM.click();

          window.URL.revokeObjectURL(url);
        };

        (async () => {
          const storageRef = firebase.storage().ref();
          const fileRef = storageRef.child(fullPath);

          const url = await fileRef.getDownloadURL();
          openProgressBarDialog();
          const res = await axios.get(url, {
            responseType: 'blob',
            onDownloadProgress: event => {
              const { loaded, total } = event;
              openProgressBarDialog(loaded, total);
            }
          });
          closeProgressBarDialog();
          console.log(res);

          downloadFile(res.data, fileRef.name);
        })();
      }
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
      <div className={styles.item} key={label} onClick={onClick}>
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
      }),
    openProgressBarDialog: (size, totalSize) =>
      dispatch({
        type: actionTypes.OPEN_PROGRESS_BAR_DIALOG,
        size,
        totalSize,
        title: '下載檔案中...'
      }),
    closeProgressBarDialog: () =>
      dispatch({
        type: actionTypes.CLOSE_PROGRESS_BAR_DIALOG
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileControlList);
