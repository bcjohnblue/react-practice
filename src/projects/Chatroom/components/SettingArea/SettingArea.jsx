import React from 'react';
import styles from './SettingArea.module.sass';

import { useMemo } from 'react';

import { useContext } from 'react';
import ContextStore from '../../store/context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const SettingArea = props => {
  const { activeTab, activeChatroomList } = useContext(ContextStore);

  const chatroom = useMemo(() => {
    const activeChatroom = activeChatroomList.find(
      item => item.id === activeTab
    );

    if (activeChatroom) {
      const { total, name } = activeChatroom;
      const isPrivate = ~name.indexOf('隨機');

      return {
        total,
        isPrivate
      };
    } else {
      return {};
    }
  }, [activeTab, activeChatroomList]);

  return (
    <div className={styles.setting_area}>
      <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
      <span>{chatroom.total}</span>
      <FontAwesomeIcon icon={chatroom.isPrivate ? faLock : faUnlock} />
      <span>{chatroom.isPrivate ? '私密' : '公開'}</span>
      <FontAwesomeIcon icon={faCog} style={{ cursor: 'pointer' }} />
    </div>
  );
};

export default SettingArea;
