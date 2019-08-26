import React from 'react';
import { useState } from 'react';
import styles from './Drawer.module.sass';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Dropdown from '../Dropdown/Dropdown';

import roomList from '../../mock/roomList';

const Drawer = props => {
  const [isOpen, setIsOpen] = useState(true);

  const mainDOM = (() => {
    return (
      <>
        <div className={styles.header}>
          <div className={styles.button_container}>
            <span className={styles.button}>隨機1對1配對</span>
            <span className={styles.button}>隨機進入群組</span>
          </div>
          <div className={styles.input_container}>
            <input type="text" placeholder="搜尋聊天室名稱或編號" />
            <FontAwesomeIcon
              icon={faSearch}
              className={styles.icon_search}
            ></FontAwesomeIcon>
          </div>
        </div>
        <Dropdown title="公開聊天室" data={roomList} open></Dropdown>
        <Dropdown title="最近加入的聊天室" data={[]}></Dropdown>
        <div className={clsx(styles.button, styles.add_chatroom_btn)}>
          新增聊天室 (暫未開放)
        </div>
      </>
    );
  })();

  return (
    <div className={clsx({ [styles.drawer]: true, [styles.open]: isOpen })}>
      <div className={clsx({ [styles.title]: true, [styles.open]: isOpen })}>
        <FontAwesomeIcon
          icon={faUsers}
          className={clsx({ [styles.icon_user]: true, [styles.open]: isOpen })}
        ></FontAwesomeIcon>
        <span className={clsx({ [styles.text]: true, [styles.open]: isOpen })}>
          聊天大廳
        </span>
        <span
          className={clsx({ [styles.direction]: true, [styles.open]: isOpen })}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          &gt;
        </span>
      </div>
      {isOpen ? mainDOM : null}
    </div>
  );
};

export default Drawer;
