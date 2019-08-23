import React from 'react';
import { useState } from 'react';
import styles from './TabPane.sass';

const TabPane = props => {
  const { label, name, children } = props;
  const { isRender = true, setIsRender } = props;
  // const [isRender, setIsRender] = useState(true);

  return isRender ? <div className="tab_pane">{children}</div> : null;
};

export default TabPane;
