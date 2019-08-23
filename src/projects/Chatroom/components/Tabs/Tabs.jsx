import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './Tabs.sass';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Tabs = props => {
  const { activeTab, setActiveTab, children } = props;
  const { closable } = props;
  // console.log(props);
  const [copyChildren, setCopyChildren] = useState([]);
  useEffect(() => {
    setCopyChildren(children);
  }, []);
  const contentDOM = copyChildren.filter(item => item.props.name === activeTab);

  const tabsItemDOM = (() => {
    const tabsItemClick = name => {
      setActiveTab(name);
    };
    const closeClick = deleteIndex => {
      setCopyChildren(copyChildren.filter((_, index) => index !== deleteIndex));
      (() => {
        const isCloseActiveTab =
          activeTab === copyChildren[deleteIndex].props.name;
        if (isCloseActiveTab) {
          const newTab =
            copyChildren[deleteIndex + 1] || copyChildren[deleteIndex - 1];
          if (newTab) {
            const newActiveTab = newTab.props.name;
            setActiveTab(newActiveTab);
          }
        }
      })();
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

    return copyChildren.map((item, index) => {
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
      <div className="tabs__header">{tabsItemDOM}</div>
      <div className="tabs__content">{contentDOM}</div>
    </div>
  );
};

export default Tabs;
