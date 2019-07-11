import React from 'react';
import styles from './LeftPanel.module.sass';

import FirstThingNumber from '../../../components/FirstThingNumber/FirstThingNumber';
import OtherThings from '../../../components/OtherThings/OtherThings';

const LeftPanel = props => {
  return (
    <div className={props.className}>
      <div className={styles.vertical_container}>
        <div className={styles.input_container}>
          <input
            type="text"
            placeholder="ADD A NEW MISSION..."
            className={styles.input}
          />
          <div className={styles.cross_container}>
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
        <FirstThingNumber style={{ color: '#FF4384' }}>25:00</FirstThingNumber>
        <OtherThings data={props.OtherThingsData} />
      </div>
    </div>
  );
};

export default LeftPanel;
