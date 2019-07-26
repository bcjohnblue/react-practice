const mapNumberToFileName = {
  1: 'mouse',
  2: 'cow',
  3: 'tiger',
  4: 'rabbit',
  5: 'dragon',
  6: 'snack',
  7: 'horse',
  8: 'sheep',
  9: 'monkey',
  10: 'chicken',
  11: 'dog',
  12: 'pig',
  13: 'whitebird'
};
const mapTypeToFileName = {
  Spade: 'spade',
  Club: 'club',
  Heart: 'heart',
  Diamond: 'diamond'
};
const mapTypeToBackgroundColor = {
  Spade: '#DDDCD7',
  Club: '#C19F53',
  Heart: '#F8EE94',
  Diamond: '#EFEED2'
};
const mapTypeToBorderColor = {
  Spade: '#B8B4B7',
  Club: '#D7BC96',
  Heart: '#BFE6D5',
  Diamond: '#6AD6CB'
};

export const mapCardToImage = async card => {
  const { number, type } = card;

  const numberModule = await import(
    `../../assets/${mapNumberToFileName[number]}.png`
  );
  const typeModule = await import(
    `../../assets/${mapTypeToFileName[type]}.png`
  );

  return {
    module: {
      number: numberModule.default,
      type: typeModule.default
    },
    backgroundColor: mapTypeToBackgroundColor[type],
    borderColor: mapTypeToBorderColor[type]
  };
};
