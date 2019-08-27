import React from 'react';
import { useState, useEffect } from 'react';
import './Tabs.sass';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Tabs = props => {
  const { activeTab, setActiveTab, onRemoveTab, children } = props;
  const { closable } = props;

  const contentDOM = children.filter(item => item.props.name === activeTab);

  const headerDOM = (() => {
    const tabsItemClick = name => {
      setActiveTab(name);
    };
    const closeClick = deleteIndex => {
      onRemoveTab(deleteIndex);
    };

    const closeDOM = index => (
      <span
        onClick={event => {
          event.stopPropagation();
          closeClick(index);
        }}
      >
        <FontAwesomeIcon icon={faTimes} />
      </span>
    );

    return children.map((item, index) => {
      const { name, label } = item.props;
      const isActive = name === activeTab;

      return (
        <div
          className={clsx('tabs__item', { active: isActive })}
          key={index}
          onClick={() => {
            tabsItemClick(name);
          }}
        >
          {label}
          {closable ? closeDOM(index) : null}
        </div>
      );
    });
  })();

  return (
    <div className="tabs">
      <div className="tabs__header">{headerDOM}</div>
      <div className="tabs__content">{contentDOM}</div>
    </div>
  );
};

export default Tabs;
