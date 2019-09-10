import React from 'react';
import styles from './RowList.module.sass';

import { useMemo } from 'react';

import RowItem from '../RowItem/RowItem';

const RowList = props => {
  const { data, style = {} } = props;

  const DOM = useMemo(() => {
    return data.map((item, index) => {
      return <RowItem item={item} key={index}></RowItem>;
    });
  }, data);

  return (
    <div className={styles.row_list} style={style}>
      {DOM}
    </div>
  );
};

export default RowList;
