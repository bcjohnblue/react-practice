import React from 'react';
import styles from './Message.module.sass';
import clsx from 'clsx';

import { CSSTransition } from 'react-transition-group';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Message = props => {
  const { isVisible, status, title } = props;

  const mapStatusToIcon = {
    success: faCheckCircle,
    error: faTimes
  };

  return (
    <CSSTransition
      in={isVisible}
      timeout={0}
      classNames={{
        enterActive: styles.enter_active,
        enterDone: styles.enter_done,
        exit: styles.exit,
        exitDone: styles.exit_done
      }}
    >
      <div className={clsx(styles.message, styles[status])}>
        <div>
          {status ? (
            <FontAwesomeIcon icon={mapStatusToIcon[status]}></FontAwesomeIcon>
          ) : null}
          <span>{title}</span>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Message;
