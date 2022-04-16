import {PHOTOS_DESCRIPTIONS, generatePhotos} from './data.js';
import {createUsersPhotos} from './miniatures.js';
import { createFullSizePicture } from './full-size-picture.js';

const descriptionPictures = generatePhotos(PHOTOS_DESCRIPTIONS);

createUsersPhotos(descriptionPictures, createFullSizePicture);

