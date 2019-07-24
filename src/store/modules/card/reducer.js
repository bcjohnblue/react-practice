import cardList from '../../../projects/Solitaire/cardList';
import * as actionTypes from './actionTypes';

const CARD_TYPE = ['Spade', 'Club', 'Heart', 'Diamond'];
const initCollectZoneCardList = CARD_TYPE.map(type => ({
  type,
  number: 0
}));

const dropZoneCardList = Array.from({ length: 4 }, () => null);
const collectZoneCardList = initCollectZoneCardList;

const initState = {
  cardList,
  dropZoneCardList,
  collectZoneCardList
};

const reducer = (state = initState, action) => {
  let { cardList, dropZoneCardList, collectZoneCardList } = state;
  cardList = JSON.parse(JSON.stringify(cardList));
  dropZoneCardList = JSON.parse(JSON.stringify(dropZoneCardList));
  collectZoneCardList = JSON.parse(JSON.stringify(collectZoneCardList));

  console.log(action);
  // console.log(cardList);

  switch (action.type) {
    case actionTypes.REMOVE_CARD: {
      const { cardColumnIndex } = action;

      cardList[cardColumnIndex].splice(-1, 1);

      return {
        ...state,
        cardList
      };
    }
    case actionTypes.DROP_CARD: {
      const { card, dropZoneIndex } = action;

      dropZoneCardList[dropZoneIndex] = card;

      return {
        ...state,
        dropZoneCardList
      };
    }
    case actionTypes.DROP_CARD_COLUMN: {
      const { card, cardColumnIndex } = action;

      cardList[cardColumnIndex].push(card);
      console.warn(cardList);

      return {
        ...state,
        cardList
      };
    }
    case actionTypes.DBCLICK_REMOVE_CARD: {
      const { card, cardColumnIndex } = action;
      const replaceIndex = dropZoneCardList.findIndex(
        dropZoneCard => !dropZoneCard
      );

      if (~replaceIndex) {
        cardList[cardColumnIndex].splice(-1, 1);
        dropZoneCardList[replaceIndex] = card;
      }

      return {
        ...state,
        cardList,
        dropZoneCardList
      };
    }
    case actionTypes.WATCH_COLLECT_CARD: {
      let targetIndex = null;
      let hasCollectCard = false;

      const canCollectCard = card => {
        const { type, number } = card;
        targetIndex = collectZoneCardList.findIndex(
          collectCard => collectCard.type === type
        );

        return number === collectZoneCardList[targetIndex].number + 1;
      };
      const addCollectCard = (card, columnIndex) => {
        cardList[columnIndex].pop();
        collectZoneCardList[targetIndex] = card;
      };

      cardList.map((cardColumn, columnIndex) => {
        const lastColumnCard = cardColumn.slice(-1)[0];

        if (canCollectCard(lastColumnCard)) {
          addCollectCard(lastColumnCard, columnIndex);
          hasCollectCard = true;
        }
      });
      // watch dropZone card

      const newObj = {
        ...state,
        collectZoneCardList
      };
      if (hasCollectCard) newObj.cardList = cardList;

      return newObj;
    }
    default:
      return state;
  }
};

export default reducer;
