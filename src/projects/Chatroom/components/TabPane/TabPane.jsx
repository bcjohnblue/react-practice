import React from 'react';
import './TabPane.sass';

const TabPane = props => {
  const { children } = props;

  return <div className="tab_pane">{children}</div>;
};

export default TabPane;
