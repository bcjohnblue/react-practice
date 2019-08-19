import React from 'react';
import styles from './RoomDetail.module.sass';

const RoomDetail = props => {
  const {
    match: { params }
  } = props;
  console.log(params);

  return (
    <div className={styles.room_detail}>
      <div>123</div>
    </div>
  );
};

export default RoomDetail;
