import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './RoomDetail.module.sass';
import clsx from 'clsx';

import Swiper from 'react-id-swiper';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DayPickerRangeController } from 'react-dates';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faBath } from '@fortawesome/free-solid-svg-icons';
import { faVectorSquare } from '@fortawesome/free-solid-svg-icons';

import iconList from './iconList';

const RoomDetail = props => {
  document.title = '房間詳細資訊';

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
  const [date, setDate] = useState({
    start: null,
    end: null
  });
  const [focusedInput, setFocusedInput] = useState('startDate');
  const isOutsideRange = date => {
    return new Date() - new Date(date) > 0;
  };

  const {
    name,
    descriptionShort,
    description,
    checkInAndOut,
    normalDayPrice,
    holidayPrice,
    amenities
  } = roomDetail;
  const roomTax = 138;
  const totalPrice =
    date.end && (date.end.diff(date.start) / 1000 / 3600 / 24) * normalDayPrice;

  useEffect(() => {
    (async () => {
      try {
        const res = await window.callRoomAPI.get(`room/${id}`);
        console.log(res.data.room[0]);
        setRoomDetail({ ...roomDetail, ...res.data.room[0] });
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
        <div className={styles.right_container}>
          <DayPickerRangeController
            startDate={date.start}
            endDate={date.end}
            onDatesChange={({ startDate: start, endDate: end }) => {
              setDate({ start, end });
            }}
            focusedInput={focusedInput}
            onFocusChange={focusedInput => {
              setFocusedInput(!focusedInput ? 'startDate' : focusedInput);
            }}
            isOutsideRange={isOutsideRange}
          />
          <div className={styles.price_container}>
            <div>Room NT$ {normalDayPrice}</div>
            <div>Tax NT$ {roomTax}</div>
            <div>Total NT$ {totalPrice}</div>
            <Link
              to={{
                pathname: `/hotel/reservation?id=${id}&date=${JSON.stringify(
                  date
                )}`
              }}
            >
              <div className={styles.button}>Order</div>
            </Link>
          </div>
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
