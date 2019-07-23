import cardList from '../../../projects/Solitaire/cardList';
import * as actionTypes from './actionTypes';

const dropZoneCardList = Array.from({ length: 4 }, () => null);

const initState = {
  cardList,
  dropZoneCardList
};

const reducer = (state = initState, action) => {
  let { cardList, dropZoneCardList } = state;
  cardList = JSON.parse(JSON.stringify(cardList));
  dropZoneCardList = JSON.parse(JSON.stringify(dropZoneCardList));

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
    default:
      return state;
  }
};

export default reducer;
