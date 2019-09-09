import React from 'react';
import styles from './RowList.module.sass';

import {useMemo} from 'react'

import RowItem from '../RowItem/RowItem'

const RowList = props => {
  const {data} = props

  const DOM = useMemo(() => {
    return data.map((item, index) => {
      return <RowItem item={item} key={index}></RowItem>;
    });
  }, data)

  return (
    <div className={ styles.row_list }>
      {DOM}
    </div>
  )
}

export default RowList;