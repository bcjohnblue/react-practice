import React from 'react';
import styles from './FileControlList.module.sass';

import { useEffect } from 'react';

import { withRouter } from 'react-router-dom';

import axios from 'axios';
import firebase from '../../../../plugins/firebase';

import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/modules/drive/actionTypes';

const FileControlList = props => {
  const {
    fileControlList: { isVisible, dataType, clientX, clientY, fullPath },
    closeFileControlList
  } = props;
  const { openProgressBarDialog, closeProgressBarDialog } = props;
  const { showMessange } = props;
  const { getFileList } = props;
  const { history } = props;

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
    // {
    //   label: '共享',
    //   onClick: () => {}
    // },
    {
      label: '下載',
      onClick: event => {
        // event.stopPropagation();

        const downloadFile = (blob, fileName) => {
          const url = window.URL.createObjectURL(blob);

          const linkDOM = document.createElement('a');
          linkDOM.href = url;
          linkDOM.download = fileName;
          // Firefox 需要將 JS 建立出的 element appendChild 到 DOM 上才可以 work
          linkDOM.style.display = 'none';
          document.body.appendChild(linkDOM);

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
      },
      isRender: dataType === 'file'
    },
    // {
    //   label: '標示星號',
    //   onClick: () => {}
    // },
    // {
    //   label: '重新命名',
    //   onClick: () => {}
    // },
    // {
    //   label: '移動',
    //   onClick: () => {}
    // },
    // {
    //   label: '複製',
    //   onClick: () => {}
    // },
    {
      label: '刪除',
      onClick: () => {
        (async () => {
          try {
            const storageRef = firebase.storage().ref();
            const fileRef = storageRef.child(fullPath);
            await fileRef.delete();

            showMessange({ status: 'success', title: '刪除成功' });
            getFileList();
          } catch (error) {
            console.error(error);
            showMessange({ status: 'error', title: `刪除失敗 ${error}` });
          }
        })();
      },
      isRender: dataType === 'file'
    },
    {
      label: '檢視',
      onClick: () => {
        history.push(fullPath);
        // getFileList(fullPath);
      },
      isRender: dataType === 'folder'
    }
  ];
  const DOM = controlList.map(item => {
    const { label, onClick, isRender } = item;

    return isRender ? (
      <div className={styles.item} key={label} onClick={onClick}>
        {label}
      </div>
    ) : null;
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
      }),
    showMessange: ({ status, title }) =>
      dispatch({
        type: actionTypes.SHOW_MESSANGE,
        status,
        title
      })
  };
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(FileControlList);
