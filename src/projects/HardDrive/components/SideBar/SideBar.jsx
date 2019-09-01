import React from 'react';
import styles from './SideBar.module.sass';

import { ReactComponent as CloudIcon } from '../../assets/cloud_24px.svg';
import { ReactComponent as FolderIcon } from '../../assets/folder.svg';
import { ReactComponent as StarIcon } from '../../assets/star.svg';
import { ReactComponent as ShareIcon } from '../../assets/sharing-content.svg';
import { ReactComponent as GarbageIcon } from '../../assets/garbage.svg';
import PersonImage from '../../assets/afterglow-back-view-dawn-2825791.jpg';

import UploadFile from '../../components/UploadFile/UploadFile';

const SideBar = props => {
  const itemList = [
    {
      icon: FolderIcon,
      text: '我的檔案'
    },
    {
      icon: StarIcon,
      text: '已加星號'
    },
    {
      icon: ShareIcon,
      text: '檔案共享'
    },
    {
      icon: GarbageIcon,
      text: '垃圾桶'
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
          const { icon: Icon, text } = item;
          return (
            <div className={styles.item} key={index}>
              <Icon></Icon>
              <span className={styles.text}>{text}</span>
            </div>
          );
        })}
      </div>
      <div className={styles.status_container}>
        <div className={styles.person_container}>
          <img src={PersonImage} alt="person" />
          <div>
            <div className={styles.name}>Jennifer</div>
            <div className={styles.admin}>User</div>
          </div>
        </div>
        <div className={styles.usage}></div>
      </div>
    </div>
  );
};

export default SideBar;
