const createUsersPhotos = (descriptionPictures, createFullSizePicture) => {
  const picturesContainer = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

  const picturesFragment = document.createDocumentFragment();


  descriptionPictures.forEach((descriptionPicture) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = descriptionPicture.url;
    pictureElement.querySelector('.picture__likes').textContent = descriptionPicture.likes;
    pictureElement.querySelector('.picture__comments').textContent = descriptionPicture.comments.length;
    pictureElement.addEventListener('click', () => {
      console.log(descriptionPicture);
      createFullSizePicture(descriptionPicture);
    });

    picturesFragment.appendChild(pictureElement);
  });
  picturesContainer.appendChild(picturesFragment);
};


export {createUsersPhotos};
