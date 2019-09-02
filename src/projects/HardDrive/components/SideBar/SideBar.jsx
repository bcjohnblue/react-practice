import React from 'react';
import styles from './SideBar.module.sass';

import { Link } from 'react-router-dom';

import { ReactComponent as CloudIcon } from '../../assets/cloud_24px.svg';
import { ReactComponent as FolderIcon } from '../../assets/folder.svg';
import { ReactComponent as StarIcon } from '../../assets/star.svg';
import { ReactComponent as ShareIcon } from '../../assets/sharing-content.svg';
import { ReactComponent as GarbageIcon } from '../../assets/garbage.svg';
import PersonImage from '../../assets/afterglow-back-view-dawn-2825791.jpg';

import UploadFile from '../../components/UploadFile/UploadFile';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

const SideBar = props => {
  const constant = {
    name: 'Jennifer',
    admin: 'User',
    size: 1.2,
    totalSize: 10
  };
  const itemList = [
    {
      icon: FolderIcon,
      text: '我的檔案',
      route: '/hard-drive/my-drive'
    },
    {
      icon: StarIcon,
      text: '已加星號',
      route: '/hard-drive/my-drive'
    },
    {
      icon: ShareIcon,
      text: '檔案共享',
      route: '/hard-drive/my-drive'
    },
    {
      icon: GarbageIcon,
      text: '垃圾桶',
      route: '/hard-drive/my-drive'
    }
  ];
  return (
    <div className={styles.side_bar}>
      <div className={styles.logo_container}>
        <CloudIcon></CloudIcon>
        <span className={styles.logo}>MCloud.</span>
      </div>
      <UploadFile></UploadFile>
      <div className={styles.item_container}>
        {itemList.map((item, index) => {
          const { icon: Icon, text, route } = item;
          return (
            <Link to={route} key={index} style={{ textDecoration: 'none' }}>
              <div className={styles.item}>
                <Icon></Icon>
                <span className={styles.text}>{text}</span>
              </div>
            </Link>
          );
        })}
      </div>
      <div className={styles.status_container}>
        <div className={styles.person_container}>
          <img src={PersonImage} alt="person" />
          <div>
            <div className={styles.name}>{constant.name}</div>
            <div className={styles.admin}>{constant.admin}</div>
          </div>
        </div>
        <div className={styles.usage}>
          <ProgressBar
            size={constant.size}
            totalSize={constant.totalSize}
          ></ProgressBar>
          <div className={styles.text}>
            <span>容量 {constant.size} GB</span>
            <span>&nbsp;/ {constant.totalSize} GB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
