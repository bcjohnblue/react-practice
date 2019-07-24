import React from 'react';
import styles from './CardDropZoneContainer.module.sass';
import CardDropZone from '../CardDropZone/CardDropZone.jsx';
import { connect } from 'react-redux';

const CardDropZoneContainer = props => {
  const DOM = props.dropZoneCardList.map((_, index) => (
    <CardDropZone dropZoneIndex={index} styles={'left_top'} key={index} />
  ));
  return (
    <div className={[props.className, styles.left_top].join(' ')}>{DOM}</div>
  );
};

const mapStateToProps = ({ card }) => {
  const { dropZoneCardList } = card;

  return {
    dropZoneCardList
  };
};

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(CardDropZoneContainer);

// export default LeftTop;
