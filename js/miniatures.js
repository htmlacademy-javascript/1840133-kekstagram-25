import {generatePhotos, PHOTOS_DESCRIPTIONS} from './data.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const descriptionPictures = generatePhotos(PHOTOS_DESCRIPTIONS);
const pictureFragment = document.createDocumentFragment();

descriptionPictures.forEach(({url, comments, likes}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureFragment.appendChild(pictureElement);
});

picturesContainer.appendChild(pictureFragment);

export {picturesContainer};

