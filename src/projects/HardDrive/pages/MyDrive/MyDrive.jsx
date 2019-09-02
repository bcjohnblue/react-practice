import React from 'react';
import styles from './MyDrive.module.sass';

import SearchInput from '../../components/SearchInput/SearchInput';

const MyDrive = props => {
  return (
    <div className={styles.my_drive}>
      <div>
        <SearchInput></SearchInput>
        <div> </div>
      </div>
    </div>
  );
};

export default MyDrive;
