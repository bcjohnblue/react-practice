const colors = {
  blue: '#499CD6',
  lightblue: '#9CDCFE',
  orange: '#CE9178',
  time: '#707070',
  self: '#6A9955'
};

const colorStyle = Object.entries(colors).reduce((accu, curr) => {
  const [key, value] = curr;
  return { ...accu, ...{ [key]: { color: value } } };
}, {});

export default colorStyle;
