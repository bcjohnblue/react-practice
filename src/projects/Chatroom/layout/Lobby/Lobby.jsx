import React from 'react';
import styles from './Lobby.module.sass';

import Drawer from '../../components/Drawer/Drawer';
import ChatArea from '../../components/ChatArea/ChatArea';
import TypeArea from '../../components/TypeArea/TypeArea';

const Lobby = props => {
  return (
    <div className={styles.lobby}>
      <div>lobby</div>
      <Drawer />
      <ChatArea />
      <TypeArea />
    </div>
  );
};

export default Lobby;
