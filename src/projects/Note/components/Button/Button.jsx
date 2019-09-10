import React from 'react';
import styles from './Button.module.sass';
import clsx from 'clsx';

const Button = props => {
  const { children, className } = props;

  return <div className={clsx(styles.button, className)}>{children}</div>;
};

export default Button;
