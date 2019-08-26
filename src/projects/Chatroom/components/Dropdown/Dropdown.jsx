import React from 'react';
import { useState } from 'react';
import styles from './Dropdown.module.sass';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

// import { CSSTransition } from 'react-transition-group';

const Dropdown = props => {
  const { title, data, initIsOpen } = props;
  const [isOpen, setIsOpen] = useState(
    initIsOpen !== undefined ? initIsOpen : false
  );

  const length = data.length;
  const DOM = data.map(item => {
    const { id, name, online, total } = item;
    return (
      <div
        className={styles.item}
        key={id}
        // style={{ display: isOpen ? 'block' : 'none' }}
      >
        <span>{id}</span>
        <span>{name}</span>
        <span>
          {online}/{total}
        </span>
      </div>
    );
  });

  return (
    <div className={styles.dropdown}>
      <div
        className={styles.title}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <FontAwesomeIcon
          icon={isOpen ? faCaretDown : faCaretRight}
          className={styles.icon_caret}
        ></FontAwesomeIcon>
        {title} ({length})
      </div>
      <div
        className={styles.dropdown_container}
        style={
          {
            // visibility: isOpen ? 'visible' : 'hidden'
            // transform: `translateY(${isOpen ? '100px' : '0px'})`
          }
        }
      >
        {DOM}
      </div>
    </div>
  );
};

export default Dropdown;
