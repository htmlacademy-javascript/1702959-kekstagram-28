import { createUserDocument } from '../../entity/user/document.js';
import { createCommentDocument } from '../../entity/comment/store/document.js';
import { createPhotoDocument } from '../../entity/photo/store/document.js';
import {
  APP_PHOTO_COUNT,
  APP_USERS_COUNT,
  APP_COMMENTS_FOR_POST
} from './config.js';

const createDb = () => {
  const users = createUserDocument(APP_USERS_COUNT);
  const comments = createCommentDocument(users, APP_PHOTO_COUNT * APP_COMMENTS_FOR_POST);
  const photo = createPhotoDocument(comments, APP_COMMENTS_FOR_POST, APP_PHOTO_COUNT);

  return {
    users,
    comments,
    photo
  };
};
const keksDb = createDb();


const useKekstagram = () => ({
  /**
   * @description список фотографий в случайном порядке
   */
  getPhotosRandomBatch: () => keksDb.photo.getRandomBatch(APP_PHOTO_COUNT),

  /**
   * @description получает фото по id
   */
  getPhotoById: (id) => keksDb.photo.getById(id),
});

export {
  useKekstagram
};
