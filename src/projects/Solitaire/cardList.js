/*
 * @Description: 產出所有撲克牌的數據資料
 * @Author: bcjohn
 * @Date: 2019-07-17 17:45:49
 * @LastEditors: bcjohn
 * @LastEditTime: 2019-07-24 17:31:40
 */

/*
 Interface CardItem {
   type: String
   number: Number
 }
*/

/**
 * @description: 產出52張撲克牌資料(未排序)
 * @param {type}
 * @return: Array<CardItem>
 */
const getAllCard = () => {
  const CARD_TYPE = ['Spade', 'Club', 'Heart', 'Diamond'];
  const CARD_NUMBER_PER_TYPE = 13;

  return CARD_TYPE.reduce((accu, curr) => {
    const getCard = number => ({
      type: curr,
      number
    });

    const arr = [];
    for (let number = 1; number <= CARD_NUMBER_PER_TYPE; number++) {
      arr.push(getCard(number));
    }
    return [...accu, ...arr];
  }, []);
};

/**
 * @description: 排序並產出52張撲克牌資料
 * @param {type} cardList: <Array<CardItem>>
 * @return: Array<Array<CardItem>>
 */
const getNewCardList = cardList => {
  let length = cardList.length;

  const TOTAL_CARD_NUMBER = 4 * 13;
  const COLUMN_NUMBER = 8;
  const CARD_NUMBER_PER_COLUMN = Math.floor(TOTAL_CARD_NUMBER / COLUMN_NUMBER); // 6

  const getSelectedCard = () => {
    const selectedIndex = Math.floor(Math.random() * length);
    return cardList.splice(selectedIndex, 1)[0];
  };
  const addExtraCard = (newCardList, selectedCard) => {
    const targetList = newCardList.filter(
      columnCardList => columnCardList.length <= CARD_NUMBER_PER_COLUMN
    );
    const randomCardIndex = Math.floor(Math.random() * targetList.length);
    targetList[randomCardIndex].push(selectedCard);
  };
  const randomCard = newCardList => {
    let columnIndex;
    for (columnIndex = 0; columnIndex < COLUMN_NUMBER; columnIndex++) {
      for (let index = 0; index < CARD_NUMBER_PER_COLUMN; index++) {
        const selectedCard = getSelectedCard();

        newCardList[columnIndex].push(selectedCard);
        length--;
      }
    }
    while (length--) {
      const selectedCard = getSelectedCard();
      addExtraCard(newCardList, selectedCard);
    }

    return newCardList;
  };

  const newCardList = Array.from({ length: COLUMN_NUMBER }, _ => []);
  return randomCard(newCardList);
};

const allCard = getAllCard();
const cardList = getNewCardList(allCard);

export default cardList;
