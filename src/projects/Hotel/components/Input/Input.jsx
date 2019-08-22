import React from 'react';
import styles from './Input.module.sass';

const Input = props => {
  const { name, value, setValue } = props;
  const handleChange = evt => {
    setValue(evt.target.value);
  };

  return (
    <div className={styles.input}>
      <div>{name}</div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default Input;
