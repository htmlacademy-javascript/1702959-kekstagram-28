import { installEntityDocument } from '../../../shared/db/entity-document.js';
import { createCommentTextDocument } from './coment-text.document.js';

/**
 * @typedef Comment
 * @property {number} id
 * @property {string} avatar
 * @property {string} message
 * @property {string} name
 * @description Комментарий пользователя
 */

export const createCommentDocument = (usersStore, commentsCount) => {
  const commentTextStore = createCommentTextDocument();

  const commentFactory = (user) => ({
    avatar: user.avatar,
    name: user.firstName,
    message: commentTextStore.getRandom(),
  });
  return installEntityDocument(
    (id) => ({
      id,
      ...commentFactory(usersStore.getRandom())
    }),
    commentsCount
  );
};
