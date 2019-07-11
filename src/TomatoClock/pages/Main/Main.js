import React, { useState } from 'react';
import styles from './Main.module.sass';

import LeftPanel from '../../layouts/Panels/LeftPanel/LeftPanel';
import Clock from '../../layouts/Clock/Clock';
import RightPanel from '../../layouts/Panels/RightPanel/RightPanel';

const TomatoClockMain = props => {
  const OtherThingsData = [
    'the second thing to do today',
    'the third thing to do today',
    'the forth thing to do today'
  ];

  return (
    <div className={styles.main}>
      <LeftPanel
        className={styles.left_panel}
        OtherThingsData={OtherThingsData}
      />
      <Clock className={styles.clock} />
      <RightPanel className={styles.right_panel} />
    </div>
  );
};

export default TomatoClockMain;
