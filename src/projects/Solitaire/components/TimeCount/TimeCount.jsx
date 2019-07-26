import React, { useState, useEffect } from 'react';
import styles from './TimeCount.module.sass';

const TimeCount = props => {
  const [timeCount, setTimeCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      if (!document.hidden) {
        setTimeCount(timeCount + 1);
      }
    }, 1000);
    return () => clearInterval(id);
  });

  const minutes = parseInt(timeCount / 60)
    .toString()
    .padStart(2, 0);
  const second = (timeCount % 60).toString().padStart(2, 0);
  const timeCountText = `${minutes}:${second}`;

  return <div className={styles.time_count}>{timeCountText}</div>;
};

export default TimeCount;
