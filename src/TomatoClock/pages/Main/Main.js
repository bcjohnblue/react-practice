import React, { useState, useReducer } from 'react';
import styles from './Main.module.sass';

import LeftPanel from '../../layouts/Panels/LeftPanel/LeftPanel';
import Clock from '../../layouts/Clock/Clock';
import RightPanel from '../../layouts/Panels/RightPanel/RightPanel';

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
    console.log(timeState);
    // FIXME: setInterval 沒辦法獲取新的state.
    const isTimeup = timeState[clockState].second === 0;
    // if (isTimeup) {
    //   alert('時間到!');

    // }

    switch (action.type) {
      case 'DECREMENT':
        return {
          ...timeState,
          [clockState]: {
            second: isTimeup ? 0 : timeState[clockState].second - 1,
            count: isTimeup ? 0 : timeState[clockState].count + 1
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
