import React from 'react';
import styles from './BodyActions.module.sass';
import Button from 'react-bootstrap/Button';

const BodyActions = props => {
  const buttons = [
    {
      text: '下一步'
    }
  ];

  const DOM = buttons.map((button, index) => {
    const { text } = button;
    return (
      <Button className={styles.button} key={index}>
        {text}
      </Button>
    );
  });

  return <div className={styles.body_actions}>{DOM}</div>;
};

export default BodyActions;
