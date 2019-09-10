import React from 'react';
import styles from './Button.module.sass';
import clsx from 'clsx';

const Button = props => {
  const { children, className, onClick } = props;

  return (
    <div className={clsx(styles.button, className)} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
