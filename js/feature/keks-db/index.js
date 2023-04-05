import {photoListGet} from '../../entity/photo/api/list.get.js';
import {entityDocumentFromArray} from '../../shared/db/entity-document.js';
import {createError} from '../../shared/ui/error.js';


const createDb = async () => {
  try {
    const photoList = await photoListGet();
    return {
      photo: entityDocumentFromArray(photoList)
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
