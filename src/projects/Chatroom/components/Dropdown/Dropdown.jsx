import React from 'react';
import { useState } from 'react';
import styles from './Dropdown.module.sass';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Dropdown = props => {
  const { title, data, open } = props;
  const [isOpen, setIsOpen] = useState(open ? true : false);

  const length = data.length;
  const DOM = data.map(item => {
    const { id, name, online, total } = item;
    return (
      <div className={styles.item} key={id}>
        <span>{id}</span>
        <span className={styles.name}>{name}</span>
        <span className={styles.ratio}>
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
        className={clsx({
          [styles.dropdown_container]: true,
          [styles.open]: isOpen
        })}
      >
        {DOM}
      </div>
    </div>
  );
};

export default Dropdown;
