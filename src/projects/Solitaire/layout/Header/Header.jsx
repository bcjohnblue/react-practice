import React from 'react';
import styles from './Header.module.sass';

const Header = props => {
  return (
    <div className={props.className}>
      <span className={styles.span}>Score: 0</span>
      <span className={styles.span}>Time: 00:00</span>
    </div>
  );
};

export default Header;
