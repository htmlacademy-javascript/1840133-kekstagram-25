const getRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
getRandomInteger(0, 20);

const checkStringLength = (testLine, maxLength) => testLine.length <= maxLength;
checkStringLength('Вау, классная фотка! Это где?', 100);

const NAMES = [
  'Петр',
  'Владлен',
  'Гульчачак',
  'Рустем',
  'Илон',
  'Руслан',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const createComment = () => {
  const randomMessageIndex = getRandomInteger(0, MESSAGES.length - 1);
  const randomNameIndex = getRandomInteger(0, NAMES.length - 1);
  const randomAvatarIndex = getRandomInteger(1, 6);
  const imgAvatar = `img/avatar-${randomAvatarIndex}.svg`;
  const randomId = getRandomInteger(1, 500);
  return {
    id: randomId,
    avatar: imgAvatar,
    message: MESSAGES[randomMessageIndex],
    name: NAMES[randomNameIndex],
  };
};

let createPhotoDescription = () => {
  const randomLikesNumber = getRandomInteger(15, 200);
  const randomCommentsNumber = getRandomInteger(1, 3);
  const commentsList = Array.from({length: randomCommentsNumber}, createComment);
  return {
    id: 0,
    url: '',
    description: 'Крутое фото!',
    likes: randomLikesNumber,
    comments: commentsList,
  };
};

const takeNumber = () => {
  for (let i = 1; i <= 25; i++) {
    let createPhotoDescription[takeNumber]
  }
};

console.log (createPhotoDescription[i])


