import React from 'react';
import { useState } from 'react';
import styles from './ChatArea.module.sass';

import Tabs from '../Tabs/Tabs';
import TabPane from '../TabPane/TabPane';

import ChatRegion from '../../components/ChatRegion/ChatRegion';

const CHAT_LIST = [
  {
    type: 'login',
    message: {
      name: 'id22222'
    }
  },
  {
    type: 'message',
    message: {
      name: 'love5566',
      text: '安安 今天要聊什麼'
    }
  }
];

const ChatArea = props => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className={styles.chat_area}>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} closable>
        <TabPane label={'tab 1'} name={1}>
          <ChatRegion data={CHAT_LIST} />
        </TabPane>
        <TabPane label={'tab 2'} name={2}>
          456
        </TabPane>
        <TabPane label={'tab 3'} name={3}>
          789
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ChatArea;
