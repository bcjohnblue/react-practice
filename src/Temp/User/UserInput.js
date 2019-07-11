import React from 'react';
import './UserInput.css';
import styles from './Test.module.sass';

const userInput = props => {
  return (
    <div>
      <input
        type="text"
        className={[styles.border, 'text'].join(" ")}
        onChange={props.change}
        value={props.value}
      />
    </div>
  );
};

export default userInput;
