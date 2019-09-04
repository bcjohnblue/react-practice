import React from 'react';
import { useState } from 'react';
import styles from './UploadFile.module.sass';

import { withRouter } from 'react-router-dom';

import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/modules/drive/actionTypes';

import firebase from '../../../../plugins/firebase';

import UploadFileIcon from '../../assets/upload.svg';
import UploadFileImage from '../../assets/upload-file@2x.png';
import UploadFolderImage from '../../assets/Group 52@2x.png';
// import AddFolderImage from '../../assets/add-folder 拷貝@2x.png';

const UploadFile = props => {
  const {
    location: { pathname }
  } = props;
  const { openProgressBarDialog, closeProgressBarDialog } = props;
  const { showMessange } = props;
  const { getFileList } = props;

  const [isShow, setIsShow] = useState(false);

  const [uploadFile, setUploadFile] = useState('');
  const [uploadFolder, setUploadFolder] = useState('');
  // const [addFolder, setAddFolder] = useState('');

  const uploadList = [
    {
      icon: UploadFileImage,
      text: '上傳檔案',
      id: 'upload_file',
      value: uploadFile,
      setValue: setUploadFile
    },
    {
      icon: UploadFolderImage,
      text: '上傳資料夾',
      id: 'upload_folder',
      value: uploadFolder,
      setValue: setUploadFolder
    }
    // {
    //   icon: AddFolderImage,
    //   text: '新資料夾',
    //   id: 'add_folder',
    //   value: addFolder,
    //   setValue: setAddFolder
    // }
  ];
  const uploadListDOM = uploadList.map((item, index) => {
    const { icon, text, id, value } = item;

    const fileChangeHandler = event => {
      const taskHandler = task => {
        const event = 'state_changed';
        const stateChangeHandler = snapshot => {
          console.log('snapshot', snapshot);

          const { bytesTransferred, totalBytes } = snapshot;
          openProgressBarDialog(bytesTransferred, totalBytes);
        };
        const errorHandler = err => {
          setTimeout(() => {
            closeProgressBarDialog();
            showMessange({ status: 'error', title: `上傳失敗 ${err}` });
          }, 1000);
        };
        const successHandler = () => {
          setTimeout(() => {
            closeProgressBarDialog();
            showMessange({ status: 'success', title: '上傳成功' });
            getFileList();
          }, 1000);
        };

        openProgressBarDialog();
        task.on(event, stateChangeHandler, errorHandler, successHandler);
      };

      const storageRef = firebase.storage().ref();
      const folderPath = pathname.slice(pathname.indexOf('/', 1));
      const folderRef = storageRef.child(folderPath);

      const fileList = event.target.files;
      Array.from(fileList).map(file => {
        console.log(file);
        const fileFullPath = file.webkitRelativePath || file.name;
        const fileRef = folderRef.child(fileFullPath);

        const task = fileRef.put(file);
        taskHandler(task);
      });
    };

    const inputDOM = (() => {
      switch (id) {
        case 'upload_file':
          return (
            <input
              type="file"
              multiple
              id={id}
              value={value}
              onChange={fileChangeHandler}
            />
          );
        case 'upload_folder':
          return (
            <input
              type="file"
              id={id}
              value={value}
              onChange={fileChangeHandler}
              webkitdirectory="true"
              mozdirectory="true"
            />
          );
        default:
          break;
      }
    })();

    return (
      <div key={index}>
        <label htmlFor={id} className={styles.item}>
          <img src={icon} alt="icon" />
          <span className={styles.text}>{text}</span>
        </label>
        {inputDOM}
      </div>
    );
  });

  return (
    <>
      <div
        className={styles.upload_file}
        onMouseLeave={() => {
          setIsShow(false);
        }}
      >
        <div
          className={styles.upload_icon}
          onMouseEnter={() => {
            setIsShow(true);
          }}
        >
          <span
            className={styles.upload_file_icon}
            style={{ backgroundImage: `url(${UploadFileIcon})` }}
          ></span>
          <span className={styles.text}>上傳檔案</span>
        </div>
        <div className={styles.hidden}></div>
        {isShow ? (
          <div className={styles.upload_list}>{uploadListDOM}</div>
        ) : null}
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    openProgressBarDialog: (size, totalSize) =>
      dispatch({
        type: actionTypes.OPEN_PROGRESS_BAR_DIALOG,
        size,
        totalSize,
        title: '上傳檔案中...'
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
    null,
    mapDispatchToProps
  )
)(UploadFile);
