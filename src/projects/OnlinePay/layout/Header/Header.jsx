import React from 'react';
import styles from './Header.module.sass';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepConnector from '@material-ui/core/StepConnector';
import StepIcon from '@material-ui/core/StepIcon';

import { makeStyles, withStyles } from '@material-ui/core/styles';

const Header = props => {
  const { activeStep } = props;

  const color = {
    lightGreen: '#B5FFE4',
    grayBackground: '#AFAFAF'
  };

  const useStyles = {
    stepper: makeStyles({
      root: {
        height: '13vh',
        width: '85%',
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    })
    // stepIcon: makeStyles({
    //   root: {
    //     color: color.grayBackground,
    //     width: '1em',
    //     height: '1em'
    //   },
    //   active: {
    //     color: color.lightGreen + ' !important'
    //   },
    //   completed: {
    //     color: color.lightGreen + ' !important'
    //   }
    // })
  };

  const classes = (() => {
    const array = Object.keys(useStyles).map(key => {
      return [key, useStyles[key]()];
    });
    return Object.fromEntries(array);
  })();

  const Connector = withStyles({
    active: {
      '& $line': {
        borderColor: color.lightGreen
      }
    },
    completed: {
      '& $line': {
        borderColor: color.lightGreen
      }
    },
    line: {
      borderColor: '#eaeaf0',
      borderTopWidth: 3,
      borderRadius: 1
    }
  })(StepConnector);

  const stepDOM = (() => {
    const step = [{ label: 1 }, { label: 2 }, { label: 3 }];

    return step.map((item, index) => {
      const { label } = item;
      const Icon = (() => {
        const styleActive = activeStep > index ? styles.active : '';
        const iconClassName = [styles.custom_icon, styleActive].join(' ');
        return <div className={iconClassName}>{label}</div>;
      })();

      return (
        <Step key={index}>
          <StepIcon icon={Icon}>{label}</StepIcon>
        </Step>
      );
    });
  })();

  return (
    <div className={styles.header}>
      <Stepper
        activeStep={activeStep - 1}
        connector={<Connector />}
        classes={{ ...classes.stepper }}
      >
        {stepDOM}
      </Stepper>
    </div>
  );
};

export default Header;
