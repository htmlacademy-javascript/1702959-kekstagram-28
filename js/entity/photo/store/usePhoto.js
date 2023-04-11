import { getPhotoList } from '../api/list.get.js';
import { createEntityCollectionFromArray } from '../../../shared/db/entity-collection.js';
import { createError } from '../../../shared/ui/error.js';


const keksDb = await (async () => {
  try {
    const photoList = await getPhotoList();
    const photo = createEntityCollectionFromArray(photoList);
    return {
      photo
    };
  } catch (_) {
    createError({ message: 'Неудалось загрузить изображения' });
  }
})();


const usePhoto = () => ({
  /**
   * @description получает фото по id
   */
  getById: (id) => keksDb?.photo.getById(id),

  /**
   * @description список фотографий
   */
  getList: () => keksDb?.photo.selectQuery(),

  /**
   * @description список фотографий, по колличеству комментариев
   */
  getPopular: () => {
    const photos = Array.from(keksDb.photo.selectQuery());
    photos.sort((photoA, photoB) => {
      if (photoA.comments.length === photoB.comments.length) {
        return 0;
      }
      return photoA.comments.length < photoB.comments.length ? 1 : -1;
    });
    return photos;
  },

  /**
   * @description список фотографий, 10 случайных
   */
  getListingBatch: () => keksDb.photo.getRandomBatch(10),

  /**
   * @description колличество фотографий
   */
  count: () => () => keksDb?.photo.selectQuery(),
});

export {
  usePhoto
};
