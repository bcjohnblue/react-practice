import React, { useState } from 'react';
import styles from './CardDropZone.module.sass';

import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/modules/card/actionTypes';

import { useDrop } from 'react-dnd';
import ItemTypes from '../../utils/ItemTypes';

import Card from '../Card/Card.jsx';

const CardDropZone = props => {
  const { dropCard, dropZoneIndex, setDropCard } = props;
  // const [dropCard, setDropCard] = useState(null);
  const [collectedProps, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => {
      setDropCard(item.card, dropZoneIndex);
      // console.log(item, monitor);
    },
    canDrop: (item, monitor) => {
      return dropCard ? false : true;
      // console.log(item, monitor);
    },
    collect: monitor => ({
      cardItem: monitor.cardItem
    })
  });

  const dropZoneDOM = (
    <div
      ref={drop}
      className={[styles.card_dropzone, styles[props.styles]].join(' ')}
    />
  );

  const dropCardDOM = (
    <div
      ref={drop}
      className={[styles.card_dropzone, styles[props.styles]].join(' ')}
    >
      <Card card={dropCard} canDrag={true} isDropCard={true} />
    </div>
  );

  const DOM = dropCard ? dropCardDOM : dropZoneDOM;

  return DOM;
};

const mapStateToProps = ({ card }, props) => {
  const { dropZoneCardList } = card;

  return {
    dropCard: dropZoneCardList[props.dropZoneIndex]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDropCard: (card, dropZoneIndex) =>
      dispatch({
        type: actionTypes.DROP_CARD,
        card,
        dropZoneIndex
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardDropZone);
