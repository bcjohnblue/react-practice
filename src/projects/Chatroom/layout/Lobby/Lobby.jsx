import React from 'react';
import styles from './Lobby.module.sass';

import Drawer from '../../components/Drawer/Drawer';
import ChatArea from '../../components/ChatArea/ChatArea';
import SettingArea from '../../components/SettingArea/SettingArea';
import TypingArea from '../../components/TypingArea/TypingArea';

const Lobby = props => {
  const { selfName } = props;

  return (
    <div className={styles.lobby}>
      <Drawer />
      <div className={styles.right_container}>
        <ChatArea />
        <SettingArea></SettingArea>
        <TypingArea selfName={selfName} />
      </div>
    </div>
  );
};

export default Lobby;
