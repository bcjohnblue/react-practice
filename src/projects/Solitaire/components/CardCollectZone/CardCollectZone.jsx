import React from 'react';
import styles from './CardCollectZone.module.sass';

import { connect } from 'react-redux';

import Card from '../Card/Card.jsx';

import typeImage from './typeImageFile';

const CardCollectZone = props => {
  const { collectZoneCardList, collectZoneIndex } = props;
  const collectZoneCard = collectZoneCardList[collectZoneIndex];
  console.log(collectZoneCard);

  const style = {
    backgroundImage: `url(${typeImage[collectZoneCard.type]})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: '25% 20%'
  };

  const DOM = (
    <div
      className={[styles.card_collect_zone, styles[props.styles]].join(' ')}
      style={style}
    >
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
