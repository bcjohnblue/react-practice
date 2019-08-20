import React, { useState, useEffect } from 'react';
import styles from './Main.module.sass';

import { Link } from 'react-router-dom';

import Footer from '../../layout/Footer/Footer';

const Main = props => {
  const { location } = props;
  
  const [roomList, setRoomList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await window.callRoomAPI.get('rooms');
        console.log(res);
        setRoomList(res.data.items);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const DOM = roomList.map(item => {
    const { id, name, imageUrl } = item;
    return (
      <Link
        to={{
          pathname: `${location.pathname}/room-detail/${id}`
        }}
        key={id}
      >
        <div className={styles.item}>
          <img src={imageUrl} alt={name} />
          <div className={styles.text}>{name}</div>
        </div>
      </Link>
    );
  });

  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>照片</div>
        <div className={styles.body}>{DOM}</div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
