import React, { useState, useReducer } from 'react';
import styles from './Main.module.sass';

import LeftPanel from '../../layouts/Panels/LeftPanel/LeftPanel';
import Clock from '../../layouts/Clock/Clock';
import RightPanel from '../../layouts/Panels/RightPanel/RightPanel';

document.title = '蕃茄鐘';

const TomatoClockMain = props => {
  const [clockState, setClockState] = useState('main');
  const clockStateStyle = styles[clockState];

  const initialTimeState = {
    main: {
      second: 1 * 12,
      count: 0
    },
    break: {
      second: 1 * 3,
      count: 0
    }
  };

  const timeReducer = (timeState, action) => {
    const clockState = action.clockState;

    switch (action.type) {
      case 'DECREMENT':
        return {
          ...timeState,
          [clockState]: {
            second: timeState[clockState].second - 1,
            count: timeState[clockState].count + 1
          }
        };
      case 'RESET':
        return {
          ...timeState,
          [clockState]: {
            second: initialTimeState[clockState].second,
            count: initialTimeState[clockState].count
          }
        };
      default:
        return initialTimeState;
    }
  };

  const [timeState, dispatchTimeState] = useReducer(
    timeReducer,
    initialTimeState
  );

  return (
    <div className={styles.main}>
      <LeftPanel
        className={[styles.left_panel, clockStateStyle].join(' ')}
        clockState={clockState}
        timeState={timeState}
      />
      <Clock
        className={styles.clock}
        clockState={clockState}
        setClockState={setClockState}
        timeState={timeState}
        dispatchTimeState={dispatchTimeState}
        initialTimeState={initialTimeState}
      />
      <RightPanel className={styles.right_panel} />
    </div>
  );
};

export default TomatoClockMain;
