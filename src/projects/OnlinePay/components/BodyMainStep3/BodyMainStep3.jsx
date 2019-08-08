import React from 'react';
import styles from './BodyMainStep3.module.sass';

import { ReactComponent as Finish } from '../../assets/finish.svg';

import Button from 'react-bootstrap/Button';

const BodyMainStep3 = props => {
  const { dispatchActiveStep } = props;

  return (
    <>
      <div className={styles.body_main_step3}>
        <div style={{ position: 'relative' }}>
          <Finish className={styles.finish} />
          <div className={styles.background_circle} />
        </div>
        <div className={styles.text}>稍後將寄送訂單詳細資訊至您的 E-mail</div>
        <div className={styles.body_actions}>
          <Button
            className={styles.button}
            onClick={() => dispatchActiveStep('RESET')}
          >
            返回首頁
          </Button>
        </div>
      </div>
    </>
  );
};

export default BodyMainStep3;
