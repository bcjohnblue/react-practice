import React, { useEffect } from 'react';
import styles from './CardCollectZoneContainer.module.sass';
import CardCollectZone from '../CardCollectZone/CardCollectZone.jsx';

import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/modules/card/actionTypes';

const CardCollectZoneContainer = props => {
  const {
    cardList,
    dropZoneCardList,
    collectZoneCardList,
    watchCollectCard
  } = props;

  useEffect(() => {
    watchCollectCard();
  }, [cardList, dropZoneCardList]);

  const DOM = collectZoneCardList.map((item, index) => (
    <CardCollectZone
      collectZoneIndex={index}
      styles={'right_top'}
      key={index}
    />
  ));

  return (
    <div className={[props.className, styles.right_top].join(' ')}>{DOM}</div>
  );
};

const mapStateToProps = ({ card }) => {
  const { cardList, dropZoneCardList, collectZoneCardList } = card;

  return {
    cardList,
    dropZoneCardList,
    collectZoneCardList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    watchCollectCard: () => dispatch({ type: actionTypes.WATCH_COLLECT_CARD })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardCollectZoneContainer);
