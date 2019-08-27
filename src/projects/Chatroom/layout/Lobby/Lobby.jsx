import React from 'react';
import styles from './Lobby.module.sass';
import clsx from 'clsx';

import { useContext } from 'react';
import ContextStore from '../../store/context';

import Drawer from '../../components/Drawer/Drawer';
import ChatArea from '../../components/ChatArea/ChatArea';
import SettingArea from '../../components/SettingArea/SettingArea';
import TypingArea from '../../components/TypingArea/TypingArea';

const Lobby = props => {
  const { activeChatroomList, dispatch } = useContext(ContextStore);
  const hasChatroom = !!activeChatroomList.length;

  return (
    <div className={styles.lobby}>
      <Drawer />
      <div
        className={clsx({
          [styles.right_container]: true,
          [styles.has_chatroom]: hasChatroom
        })}
      >
        {hasChatroom ? (
          <>
            <ChatArea />
            <SettingArea></SettingArea>
            <TypingArea />
          </>
        ) : (
          <>
            <div className={styles.emoji}>ヾ(＠゜▽゜＠）ノ</div>
            <div className={styles.text}>馬上開始你的聊天吧~</div>
            <div
              className={styles.button}
              onClick={() => {
                dispatch({ type: 'ONETOONE', field: 'activeChatroomList' });
              }}
            >
              隨機1對1配對
            </div>
            <div
              className={styles.button}
              onClick={() => {
                dispatch({ type: 'ENTERGROUP', field: 'activeChatroomList' });
              }}
            >
              隨機進入群組
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Lobby;
