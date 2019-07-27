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

  switch (action.type) {
    case actionTypes.REMOVE_CARD: {
      const { card, cardColumnIndex, isDropCard } = action;

      if (isDropCard) {
        dropZoneCardList.splice(card.dropZoneIndex, 1, null);
        // console.log(dropZoneCardList);
        // action.card.dropZoneIndex = dropZoneIndex;

        return {
          ...state,
          dropZoneCardList
        };
      }
      // if (cardColumnIndex === undefined) return { ...state };

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

      return {
        ...state,
        cardList
      };
    }
    case actionTypes.CLICK_REMOVE_CARD: {
      const { card, cardColumnIndex } = action;

      const isCardInDropZone = card => {
        return dropZoneCardList.filter(Boolean).some(dropZoneCard => {
          return Object.keys(card).every(
            key => card[key] === dropZoneCard[key]
          );
        });
      };
      if (isCardInDropZone(card)) return { ...state };

      const isLastColumnCard = () => {
        const lastColumnCard = cardList[cardColumnIndex].slice(-1)[0];
        return Object.keys(card).every(
          key => card[key] === lastColumnCard[key]
        );
      };
      if (!isLastColumnCard()) return { ...state };

      const replaceIndex = dropZoneCardList.findIndex(
        dropZoneCard => !dropZoneCard
      );
      if (~replaceIndex) {
        cardList[cardColumnIndex].splice(-1, 1);
        dropZoneCardList[replaceIndex] = card;
        action.card.dropZoneIndex = replaceIndex;
      }

      return {
        ...state,
        cardList,
        dropZoneCardList
      };
    }
    case actionTypes.WATCH_COLLECT_CARD: {
      let targetIndex = null;
      let hasCollect = {
        columnCard: false,
        dropZoneCard: false
      };

      const collectColumnCard = () => {
        cardList.map((cardColumn, columnIndex) => {
          const lastColumnCard = cardColumn.slice(-1)[0];

          const canCollectCard = card => {
            if (!card) return false;
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

          if (canCollectCard(lastColumnCard)) {
            addCollectCard(lastColumnCard, columnIndex);
            hasCollect.columnCard = true;
          }
        });
      };

      const collectDropZoneCard = () => {
        dropZoneCardList.map((dropZoneCard, dropZoneIndex) => {
          const canCollectCard = dropZoneCard => {
            if (!dropZoneCard) return;

            const { type, number } = dropZoneCard;
            targetIndex = collectZoneCardList.findIndex(
              collectCard => collectCard.type === type
            );

            return number === collectZoneCardList[targetIndex].number + 1;
          };
          const addCollectCard = (dropZoneCard, dropZoneIndex) => {
            dropZoneCardList[dropZoneIndex] = null;
            collectZoneCardList[targetIndex] = dropZoneCard;
          };

          if (canCollectCard(dropZoneCard)) {
            addCollectCard(dropZoneCard, dropZoneIndex);
            hasCollect.dropZoneCard = true;
          }
        });
      };

      collectColumnCard();
      collectDropZoneCard();

      const newState = {
        ...state,
        collectZoneCardList
      };
      if (hasCollect.columnCard) newState.cardList = cardList;
      if (hasCollect.dropZoneCard) newState.dropZoneCardList = dropZoneCardList;

      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
