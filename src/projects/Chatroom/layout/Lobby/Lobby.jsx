import React from 'react';
import { useReducer } from 'react';
import styles from './Lobby.module.sass';

import Drawer from '../../components/Drawer/Drawer';
import ChatArea from '../../components/ChatArea/ChatArea';
import SettingArea from '../../components/SettingArea/SettingArea';
import TypingArea from '../../components/TypingArea/TypingArea';

import activeChatroom from '../../reducer/activeChatroom';

const Lobby = props => {
  const { selfName } = props;

  // const activeChatroom = [
  //   {
  //     type: 'login',
  //     message: {
  //       name: 'id22222'
  //     }
  //   },
  //   {
  //     type: 'message',
  //     message: {
  //       name: 'love5566',
  //       text: '安安 今天要聊什麼'
  //     }
  //   }
  // ];

  const { activeChatroomList, dispatchActiveChatRoomList } = useReducer(
    activeChatroom.reducer,
    activeChatroom.initState
  );

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
