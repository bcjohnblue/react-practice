import React from 'react';
import { useState } from 'react';
import styles from './UploadFile.module.sass';

import firebase from '../../../../plugins/firebase';

import Dialog from '../../components/Dialog/Dialog';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

import UploadFileIcon from '../../assets/upload.svg';
import UploadFileImage from '../../assets/upload-file@2x.png';
import UploadFolderImage from '../../assets/Group 52@2x.png';
import AddFolderImage from '../../assets/add-folder 拷貝@2x.png';

const UploadFile = props => {
  const [isShow, setIsShow] = useState(false);

  const [uploadFile, setUploadFile] = useState('');
  const [uploadFolder, setUploadFolder] = useState('');
  const [addFolder, setAddFolder] = useState('');

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
    },
    {
      icon: AddFolderImage,
      text: '新資料夾',
      id: 'add_folder',
      value: addFolder,
      setValue: setAddFolder
    }
  ];
  const uploadListDOM = uploadList.map((item, index) => {
    const { icon, text, id, value, setValue } = item;
    return (
      <div key={index}>
        <label htmlFor={id} className={styles.item}>
          <img src={icon} alt="icon" />
          <span className={styles.text}>{text}</span>
        </label>
        <input
          type="file"
          id={id}
          value={value}
          onChange={event => {
            const file = event.target.files[0];
            // setValue(file);
            console.log(file);

            const storageReference = firebase.storage().ref(file.name);
            const task = storageReference.put(file);
          }}
        />
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
      <Dialog className={styles.dialog}>
        <div className={styles.text}>上傳檔案中...</div>
        <ProgressBar size={10} totalSize={100}></ProgressBar>
      </Dialog>
    </>
  );
};

export default UploadFile;
