import React from 'react';
import { useState, useEffect } from 'react';
import styles from './RoomDetail.module.sass';
import clsx from 'clsx';

import Swiper from 'react-id-swiper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faBath } from '@fortawesome/free-solid-svg-icons';
import { faVectorSquare } from '@fortawesome/free-solid-svg-icons';

import iconList from './iconList';

const RoomDetail = props => {
  const {
    match: {
      params: { id }
    }
  } = props;

  const [roomDetail, setRoomDetail] = useState({
    descriptionShort: {
      Bed: []
    },
    checkInAndOut: {},
    amenities: {},
    imageUrl: []
  });
  useEffect(() => {
    (async () => {
      try {
        const res = await window.callRoomAPI.get(`room/${id}`);
        console.log(res);
        setRoomDetail(res.data.room[0]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const swiperDOM = (() => {
    const params = {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    };

    return (
      <Swiper {...params} shouldSwiperUpdate={true}>
        {roomDetail.imageUrl.map((url, index) => {
          return (
            <img src={url} alt="room" key={index} className={styles.room_img} />
          );
        })}
      </Swiper>
    );
  })();
  const detailDOM = (() => {
    const {
      name,
      descriptionShort,
      description,
      checkInAndOut,
      normalDayPrice,
      holidayPrice,
      amenities
    } = roomDetail;
    const iconDOM = (() => {
      return iconList.map(item => {
        const { icon, name } = item;

        return (
          <span
            className={clsx(styles.item, amenities[name] && styles.active)}
            key={name}
          >
            <FontAwesomeIcon icon={icon} />
            {name}
          </span>
        );
      });
    })();

    return (
      <div className={styles.container}>
        <div className={styles.left_container}>
          <div className={styles.header}>
            <span className={styles.name}>{name}</span>
            <br />
            <FontAwesomeIcon icon={faUser} />
            <span>{descriptionShort.GuestMax}</span>
            <FontAwesomeIcon icon={faBed} />
            <span>{descriptionShort.Bed[0]}</span>
            <FontAwesomeIcon icon={faBath} />
            <span>{descriptionShort.Bed[0]}</span>
            <FontAwesomeIcon icon={faVectorSquare} />
            <span>{descriptionShort.Footage} m</span>
            <span style={{ verticalAlign: 'super', fontSize: '12px' }}>2</span>
          </div>
          <div className={styles.description}>{description}</div>
          <div className={styles.time}>
            <div>
              Check-in: {checkInAndOut.checkInEarly} ~{' '}
              {checkInAndOut.checkInLate} / Check-out: {checkInAndOut.checkOut}
            </div>
            <div>
              Weekday(Mon - Thu): ${normalDayPrice} / Weekend(Fri - Sun): $
              {holidayPrice}
            </div>
          </div>
          <div className={styles.utility}>{iconDOM}</div>
        </div>
      </div>
    );
  })();

  return (
    <div className={styles.room_detail}>
      {swiperDOM}
      {roomDetail.id ? detailDOM : null}
    </div>
  );
};

export default RoomDetail;
