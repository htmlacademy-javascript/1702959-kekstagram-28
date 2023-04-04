
const getRandomInt = (min = 0, max = Number.MAX_SAFE_INTEGER) =>
  Math.abs(Math.floor(Math.random() * (max - min + 1) + min));

export {
  getRandomInt
};
