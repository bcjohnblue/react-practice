import React from 'react';
import styles from './LeftTop.module.sass';
import CardDropZone from '../CardDropZone/CardDropZone.jsx';
import { connect } from 'react-redux';

const LeftTop = props => {
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
)(LeftTop);

// export default LeftTop;
