import { installEntityDocument } from '../../shared/db/entity-document.js';
import { getRandomInt } from '../../shared/random.js';
import { createDescriptionDocument } from './description.document.js';


/**
 * @typedef Photo
 * @property {number} id
 * @property {string } url
 * @property {string} description
 * @property {number} likes
 * @property {Array<Comment>} comments
 * @description Фото пользователя
 */
export const createPhotoDocument = (commentStore, countComments, countPhotos) => {
  const descriptionDocument = createDescriptionDocument();
  const photoFactory = (id) => ({
    url: `photos/${id}.jpg`,
    description: descriptionDocument.getRandom(),
    likes: getRandomInt(0, 1000),
    comments: commentStore.getRandomBatch(getRandomInt(1, countComments))
  });

  return installEntityDocument(
    (id) => ({
      id,
      ...photoFactory(id)
    }),
    countPhotos
  );
};
