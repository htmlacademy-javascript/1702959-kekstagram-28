import { photoListGet } from '../api/list.get.js';
import { fromArrayEntityCollection } from '../../../shared/db/entity-collection.js';
import { createError } from '../../../shared/ui/error.js';


const keksDb = await (async () => {
  try {
    const photoList = await photoListGet();
    const photo = fromArrayEntityCollection(photoList);
    return {
      photo
    };
  } catch (_) {
    createError({
      message: 'Неудалось загрузить изображения',
      keyMessage: 'Перезагрузить страницу',
      onErrorClick: () => {
        location.reload();
      }
    });
  }
})();


const usePhoto = () => ({
  /**
   * @description получает фото по id
   */
  getPhotoById: (id) => keksDb?.photo.getById(id),

  /**
   * @description список фотографий
   */
  getPhotoList: () => keksDb?.photo.selectQuery(),
});

export {
  usePhoto
};
