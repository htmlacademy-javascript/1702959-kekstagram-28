import {photoListGet} from '../../entity/photo/api/list.get.js';
import {fromArrayEntityCollection} from '../../shared/db/entity-collection.js';
import {createError} from '../../shared/ui/error.js';


const createDb = async () => {
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
};
const keksDb = await createDb();


const useKekstagram = () => ({
  /**
   * @description получает фото по id
   */
  getPhotoById: (id) => keksDb?.photo.getById(id),

  /**
   * @description список фотографий
   */
  getAllPhotos: () => keksDb?.photo.selectQuery(),
});

export {
  useKekstagram
};
