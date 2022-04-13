const createUsersPhotos = (descriptionPictures) => {
  const picturesContainer = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const pictureFragment = document.createDocumentFragment();
  descriptionPictures.forEach(({url, comments, likes}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureFragment.appendChild(pictureElement);
    picturesContainer.appendChild(pictureFragment);
  });
};

export {createUsersPhotos};

