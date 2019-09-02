import React from 'react';
import './ProgressBar.module.sass';
import clsx from 'clsx';

const ProgressBar = props => {
  const { size, totalSize } = props;
  const { className } = props;

  return (
    <div className={clsx('progress_bar', className)}>
      <div className="background">
        <div
          className="foreground"
          style={{
            width: `calc(${(100 * size) / totalSize}% - 10px)`
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
