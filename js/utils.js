const getRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
getRandomInteger(0, 20);

const getRandomElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const checkStringLength = (testLine, maxLength) => testLine.length <= maxLength;
checkStringLength('Вау, классная фотка! Это где?', 100);

export {getRandomInteger};
export {getRandomElement};
