import { createUserDocument } from '../entity/user/document.js';
import { createCommentDocument } from '../entity/comment/document.js';
import { createPhotoDocument } from '../entity/photo/document.js';
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


const useKekstagramStore = () => ({
  getPhotos: () => keksDb.photo.selectQuery()
});

export {
  useKekstagramStore
};
