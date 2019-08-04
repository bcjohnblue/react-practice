import React from 'react';
import styles from './BodyMain.module.sass';
// import atm from '../../assets/atm.svg';
import BodyMainStep1 from '../BodyMainStep1/BodyMainStep1';
import { ReactComponent as CreditCart } from '../../assets/credit-card.svg';

const BodyMain = props => {
  return (
    <div className={styles.body_main}>
      <BodyMainStep1 />
      {/* <div className={styles.img_block}>
        <div>
          <CreditCart className={styles.svg} />
          <div className={styles.img_text}>信用卡 / 金融卡</div>
        </div>
      </div> */}
    </div>
  );
};

export default BodyMain;
