import React from 'react';
import styles from './BodyActions.module.sass';
import Button from 'react-bootstrap/Button';

const BodyActions = props => {
  const { activeStep, dispatchActiveStep } = props;

  const style = (() => {
    const mapActiveStepToStyle = {
      1: {
        justifyContent: 'flex-end'
      },
      2: {
        justifyContent: 'space-between'
      },
      3: {
        justifyContent: 'center'
      }
    };
    return mapActiveStepToStyle[activeStep];
  })();

  const buttons = {
    1: [
      {
        text: '下一步',
        onClick: () => {
          dispatchActiveStep('INCREMENT');
        }
      }
    ],
    2: [
      {
        text: '回上一步',
        variant: 'outline-primary',
        onClick: () => {
          dispatchActiveStep('DECREMENT');
        }
      },
      {
        text: '確認付款',
        onClick: () => {
          dispatchActiveStep('INCREMENT');
        }
      }
    ],
    3: [
      {
        text: '返回首頁',
        onClick: () => {
          dispatchActiveStep('INCREMENT');
        }
      }
    ]
  };

  const DOM = buttons[activeStep].map((button, index) => {
    const { text, variant, onClick } = button;
    return (
      <Button
        variant={variant}
        className={styles.button}
        onClick={onClick}
        key={index}
      >
        {text}
      </Button>
    );
  });

  return (
    <div className={styles.body_actions} style={style}>
      {DOM}
    </div>
  );
};

export default BodyActions;
