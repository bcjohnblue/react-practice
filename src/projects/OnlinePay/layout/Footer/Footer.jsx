import React from 'react';
import styles from './Footer.module.sass';

import Button from 'react-bootstrap/Button';

const Footer = props => {
  const { dispatchActiveStep } = props;
  return (
    <div className={styles.footer}>
      <Button
        variant="dark"
        onClick={() => {
          dispatchActiveStep('RESET');
        }}
      >
        返回商店
      </Button>
    </div>
  );
};

export default Footer;
