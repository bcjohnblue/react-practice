import React from 'react';
import styles from './LeftPanel.module.sass';

import FirstThingNumber from '../../../components/FirstThingNumber/FirstThingNumber';
import OtherThings from '../../../components/OtherThings/OtherThings';

const LeftPanel = props => {
  const clockStateStyle = styles[props.clockState];
  const OtherThingsData = [
    'the second thing to do today',
    'the third thing to do today',
    'the forth thing to do today'
  ];
  const convertTimeToText = timeState => {
    const time = timeState[props.clockState].second;
    const minute = parseInt(time / 60);
    const second = ((time % 60) + '').padStart(2, 0);

    return `${minute}:${second}`;
  };
  const timeText = convertTimeToText(props.timeState);

  return (
    <div className={props.className}>
      <div className={styles.vertical_container}>
        <div className={styles.input_container}>
          <input
            type="text"
            placeholder="ADD A NEW MISSION..."
            className={[styles.input, clockStateStyle].join(' ')}
          />
          <div className={[styles.cross_container, clockStateStyle].join(' ')}>
            <div className={styles.cross}>+</div>
          </div>
        </div>
        <div className={styles.first_container}>
          <div className={styles.circle} />
          <div className={styles.right_part}>
            <div>The First Thing To Do Today</div>
            <div className={styles.pink_circle} />
          </div>
        </div>
        <FirstThingNumber clockState={props.clockState}>
          {timeText}
        </FirstThingNumber>
        <OtherThings data={OtherThingsData} clockState={props.clockState} />
      </div>
    </div>
  );
};

export default LeftPanel;
