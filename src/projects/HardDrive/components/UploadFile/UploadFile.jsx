import React from 'react';
import { useState } from 'react';
import styles from './UploadFile.module.sass';

import UploadFileIcon from '../../assets/upload.svg';
import UploadFileImage from '../../assets/upload-file@2x.png';
import UploadFolderImage from '../../assets/Group 52@2x.png';
import AddFolderImage from '../../assets/add-folder 拷貝@2x.png';

const UploadFile = props => {
  const [isShow, setIsShow] = useState(false);
  const style = {
    backgroundImage: `url(${UploadFileIcon})`,
    width: '30px',
    height: '30px'
  };

  const uploadList = [
    {
      icon: UploadFileImage,
      text: '上傳檔案'
    },
    {
      icon: UploadFolderImage,
      text: '上傳資料夾'
    },
    {
      icon: AddFolderImage,
      text: '新資料夾'
    }
  ];

  return (
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
        <span style={style}></span>
        <span className={styles.text}>上傳檔案</span>
      </div>
      <div className={styles.hidden}></div>
      {isShow ? (
        <div className={styles.upload_list}>
          {uploadList.map((item, index) => {
            const { icon, text } = item;
            return (
              <div className={styles.item} key={index}>
                <img src={icon} alt="" />
                <span className={styles.text}>{text}</span>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default UploadFile;
