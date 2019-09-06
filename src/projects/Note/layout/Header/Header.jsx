import React from 'react';
import styles from './Header.module.sass';

import FirstRow from './components/FirstRow/FirstRow';
import SecondRow from './components/SecondRow/SecondRow';

const Header = props => {
  return (
    <header className={styles.header}>
      <FirstRow></FirstRow>
      <SecondRow></SecondRow>
    </header>
  );
};

export default Header;
