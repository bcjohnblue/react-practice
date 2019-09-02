import React from 'react';
import styles from './SearchInput.module.sass';

import { ReactComponent as SearchIcon } from '../../assets/search_24px.svg';

const SearchInput = props => {
  const setCaretPosition = event => {
    const position = event.target.value.length;
    event.target.setSelectionRange(position, position);
    console.log(event.target.setSelectionRange);
  };

  return (
    <div className={styles.search_input}>
      <div className={styles.search_icon}>
        <SearchIcon></SearchIcon>
      </div>
      <input
        type="text"
        placeholder="搜尋您的檔案"
        onFocus={setCaretPosition}
      />
      <span className={styles.triangle}></span>
    </div>
  );
};

export default SearchInput;
