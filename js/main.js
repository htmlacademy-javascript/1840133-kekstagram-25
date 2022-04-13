import {PHOTOS_DESCRIPTIONS, generatePhotos} from './data.js';
import {createUsersPhotos} from './miniatures.js';

const descriptionPictures = generatePhotos(PHOTOS_DESCRIPTIONS);

createUsersPhotos(descriptionPictures);

