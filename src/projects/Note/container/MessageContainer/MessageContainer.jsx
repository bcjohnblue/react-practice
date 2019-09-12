import React from 'react';
// import styles from './MessageContainer.module.sass';

import { connect } from 'react-redux';

import Message from '../../components/Message/Message';

const MessageContainer = props => {
  const {
    message: { isVisible, status, title }
  } = props;

  return (
    <Message isVisible={isVisible} status={status} title={title}></Message>
  );
};

const mapStateToProps = ({ note }, props) => {
  const { message } = note;

  return {
    message
  };
};

export default connect(mapStateToProps)(MessageContainer);
