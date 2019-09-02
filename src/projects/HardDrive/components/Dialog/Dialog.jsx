import React from 'react';
import styles from './Dialog.module.sass';
import clsx from 'clsx';

const Dialog = props => {
  const { children } = props;
  const { className, width } = props;

  const style = {
    width
  };

  return (
    <div className={clsx(styles.dialog, className)} style={style}>
      {children}
    </div>
  );
};

export default Dialog;
