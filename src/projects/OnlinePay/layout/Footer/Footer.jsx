import React from 'react';
import styles from './Footer.module.sass';

import Button from 'react-bootstrap/Button';

const Footer = props => {
  const { dispatchActiveStep } = props;

  const isMobile = window.matchMedia('(max-width: 992px)').matches;

  const style = {
    button: (() => {
      return {
        display: isMobile ? 'block' : 'none'
      };
    })()
  };

  return (
    <div className={styles.footer}>
      <Button
        variant="dark"
        onClick={() => {
          dispatchActiveStep('RESET');
        }}
        style={style.button}
      >
        返回商店
      </Button>
    </div>
  );
};

export default Footer;
