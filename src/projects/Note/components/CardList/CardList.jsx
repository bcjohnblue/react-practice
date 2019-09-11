import React, { useMemo } from 'react';
import styles from './CardList.module.sass';
import clsx from 'clsx';

import { connect } from 'react-redux';

import CardItem from '../CardItem/CardItem.jsx';

const CardList = props => {
  const { isBright } = props;
  const { data, style = {} } = props;

  const DOM = useMemo(
    () =>
      data.map((item, index) => {
        const rowBackgroundDOM = (() => {
          const ITEM_NUMBER_PER_ROW = 4;
          if (index % ITEM_NUMBER_PER_ROW === 0) {
            const style = {
              top: 110 + 320 * (index / ITEM_NUMBER_PER_ROW) + 'px'
            };

            return (
              <div
                className={clsx({
                  [styles.background]: true,
                  [styles.dark]: !isBright
                })}
                style={style}
              ></div>
            );
          }
        })();

        return (
          <React.Fragment key={index}>
            {rowBackgroundDOM}
            <CardItem item={item}></CardItem>
          </React.Fragment>
        );
      }),
    [data, isBright]
  );

  return (
    <div className={styles.card_list} style={style}>
      {DOM}
    </div>
  );
};

const mapStateToProps = ({ note }, props) => {
  const { isBright } = note;

  return {
    isBright
  };
};

export default connect(mapStateToProps)(CardList);
