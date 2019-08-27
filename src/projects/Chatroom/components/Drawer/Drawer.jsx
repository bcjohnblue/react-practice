import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Drawer.module.sass';
import clsx from 'clsx';

import { useContext } from 'react';
import ContextStore from '../../store/context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Dropdown from '../Dropdown/Dropdown';

import roomList from '../../mock/roomList';

const Drawer = props => {
  const [isOpen, setIsOpen] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [copyRoomList, setCopyRoomList] = useState([]);
  const { activeTab, dispatch } = useContext(ContextStore);
  console.log(roomList);
  useEffect(() => {
    setCopyRoomList(roomList);
  }, []);

  const mainDOM = (() => {
    const filterChatroom = () => {
      const filterRoomList = roomList.filter(item => {
        const { id, name } = item;
        const regex = new RegExp(searchText);
        // console.log(regex.test(id) || regex.test(name));
        return regex.test(id) || regex.test(name);
      });
      // console.log(filterRoomList);

      setCopyRoomList(filterRoomList);
    };

    return (
      <>
        <div className={styles.header}>
          <div className={styles.button_container}>
            <span
              className={styles.button}
              onClick={() => {
                dispatch({ type: 'ONETOONE', field: 'activeChatroomList' });
              }}
            >
              隨機1對1配對
            </span>
            <span
              className={styles.button}
              onClick={() => {
                dispatch({ type: 'ENTERGROUP', field: 'activeChatroomList' });
              }}
            >
              隨機進入群組
            </span>
          </div>
          <div className={styles.input_container}>
            <input
              type="text"
              placeholder="搜尋聊天室名稱或編號"
              value={searchText}
              onChange={event => {
                setSearchText(event.target.value);
              }}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  filterChatroom();
                }
              }}
            />
            <FontAwesomeIcon
              icon={faSearch}
              className={styles.icon_search}
              onClick={() => {
                filterChatroom();
              }}
            ></FontAwesomeIcon>
          </div>
        </div>
        <Dropdown
          title="公開聊天室"
          data={copyRoomList}
          open
          itemClick={id => {
            dispatch({ type: 'ADD', field: 'activeChatroomList', id });
          }}
          activeId={activeTab}
        ></Dropdown>
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
