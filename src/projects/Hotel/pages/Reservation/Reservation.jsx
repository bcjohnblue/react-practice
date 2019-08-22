import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Reservation.module.sass';
import clsx from 'clsx';
import moment from 'moment';

import Input from '../../components/Input/Input';
import CustomDialog from '../../components/CustomDialog/CustomDialog';

import { DateRangePicker } from 'react-dates';

const Reservation = props => {
  const {
    location: { search }
  } = props;
  const searchParams = (() => {
    const params = new URLSearchParams(search);

    const obj = {};
    for (const iterator of params) {
      let [key, value] = iterator;
      if (key === 'date') {
        value = JSON.parse(value);
        Object.keys(value).map(key => {
          value[key] = moment(value[key]);
        });
      }

      obj[key] = value;
    }
    return obj;
  })();

  const [roomDetail, setRoomDetail] = useState({
    name: '',
    imageUrl: []
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await window.callRoomAPI.get(`room/${searchParams.id}`);
        console.log(res.data.room[0]);
        setRoomDetail({ ...roomDetail, ...res.data.room[0] });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState({
    start: searchParams.date.start,
    end: searchParams.date.end
  });
  const [focusedInput, setFocusedInput] = useState(null);
  const [open, setOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const roomTax = 138;
  const totalPrice =
    date.end &&
    (date.end.diff(date.start) / 1000 / 3600 / 24) * roomDetail.normalDayPrice;

  const confirmClick = async () => {
    const validate = () => {
      let isValid = true;
      if (!name) isValid = false;
      if (!phone) isValid = false;
      if (!isValid) {
        window.alert('請輸入資料');
        return Promise.reject(false);
      }
    };

    const data = (() => {
      const start = date.start.format('YYYY-MM-DD');
      const end = date.end.format('YYYY-MM-DD');
      return {
        name,
        tel: phone,
        date: {
          start,
          end
        }
      };
    })();
    console.log(data);

    try {
      await validate();
      const res = await window.callRoomAPI.post(
        `room/${searchParams.id}`,
        data
      );
      console.log(res);
      setIsSuccess(res.data.success);
    } catch (error) {
      if (error !== false) {
        console.log(error);
        setIsSuccess(false);
      }
    }
    setOpen(true);
  };
  return (
    <div className={styles.reservation}>
      <div className={styles.left}>
        <div className={styles.room_name}>{roomDetail.name}</div>
        {roomDetail.imageUrl[0] ? (
          <img src={roomDetail.imageUrl[0]} alt="room" />
        ) : null}
      </div>
      <div className={styles.right}>
        <div className={styles.title}>Your Reservation</div>
        <div className={styles.form}>
          <Input name="Name" value={name} setValue={setName} />
          <Input name="Phone" value={phone} setValue={setPhone} />
          <DateRangePicker
            startDate={date.start}
            startDateId="your_unique_start_date_id"
            endDate={date.end}
            endDateId="your_unique_end_date_id"
            onDatesChange={({ startDate: start, endDate: end }) => {
              setDate({ start, end });
            }}
            focusedInput={focusedInput}
            onFocusChange={focusedInput => {
              setFocusedInput(focusedInput);
            }}
          />
          <div className={styles.price_container}>
            <div className={styles.item}>
              <span>Room</span>
              <span>NT$ {roomDetail.normalDayPrice}</span>
            </div>
            <div className={styles.item}>
              <span>Tax</span>
              <span>NT$ {roomTax}</span>
            </div>
            <div className={clsx(styles.total, styles.item)}>
              <span>Total</span>
              <span>NT$ {totalPrice}</span>
            </div>
            <div className={styles.button} onClick={confirmClick}>
              Confirm
            </div>
          </div>
        </div>
      </div>
      <CustomDialog open={open} setOpen={setOpen} isSuccess={isSuccess} />
    </div>
  );
};

export default Reservation;
