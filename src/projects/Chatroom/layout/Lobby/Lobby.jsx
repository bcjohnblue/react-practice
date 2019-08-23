import React from 'react';
import styles from './Lobby.module.sass';

import Drawer from '../../components/Drawer/Drawer';
import ChatArea from '../../components/ChatArea/ChatArea';
import TypeArea from '../../components/TypeArea/TypeArea';

const Lobby = props => {
  return (
    <div className={styles.lobby}>
      <Drawer />
      <div className={styles.right_container}>
        <ChatArea />
        {/* <TypeArea /> */}
      </div>
    </div>
  );
};

export default Lobby;
