import React from 'react';
import styles from './BracketText.module.sass';

const BracketText = props => {
  const { children, onClick } = props;

  return (
    <div className={styles.bracket_text} onClick={onClick}>
      <span>[</span>
      <span className={styles.text}>{children}</span>
      <span>]</span>
    </div>
  );
};

export default BracketText;
