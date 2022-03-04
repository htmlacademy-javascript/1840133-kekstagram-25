const getRandomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
console.log(getRandomInteger(1, 4));

const getMaxLine = (testLine, maxLength) => {
  if (testLine.length <= maxLength) {
    return true;
  } else {
    return false;
  }
};
console.log(getMaxLine('Hello world!!!', 44));
