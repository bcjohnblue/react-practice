import React from 'react';
import styles from './CardCollectZone.module.sass';

import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/modules/card/actionTypes';

import Card from '../Card/Card.jsx';

const CardCollectZone = props => {
  const { collectZoneCardList, collectZoneIndex } = props;
  const collectZoneCard = collectZoneCardList[collectZoneIndex];

  const DOM = (
    <div className={[styles.card_collect_zone, styles[props.styles]].join(' ')}>
      {collectZoneCard.number ? (
        <Card card={collectZoneCard} canDrag={false} isDropCard={true} />
      ) : null}
    </div>
  );

  return DOM;
};

const mapStateToProps = ({ card }, props) => {
  const { collectZoneCardList } = card;

  return {
    collectZoneCardList
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardCollectZone);
