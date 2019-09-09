import React from 'react';
import styles from './RowItem.module.sass';

import StarButton from '../../components/StarButton/StarButton'


const RowItem = props => {
  const {item: { title, isStar, cover }} = props

  return (
    <StarButton position='right' isStar={isStar}>{title}</StarButton>
    // <div className={ styles.row_item }>
    //   <div> </div>
    // </div>
  )
}

export default RowItem;