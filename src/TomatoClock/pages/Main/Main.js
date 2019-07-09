import React from 'react';
import styles from './Main.module.sass';

const TomatoClockMain = props => {
  const style = {
    width: '1280px',
    height: '800px'
  };

  return (
    <React.Fragment>
      <div style={style}>
        <div className={styles.left_panel}>
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
            <div className={styles.circle} />
          </div>
        </div>

        <div className={styles.right_panel}>right</div>
      </div>
    </React.Fragment>
  );
};

export default TomatoClockMain;
