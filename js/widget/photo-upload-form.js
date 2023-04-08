import { createPhotoUploader } from '../entity/photo/ui/uploader.js';
import { createPhotoEditModalWindow } from '../entity/photo/ui/photo-edit/modal-window.js';
import { createEffectSlider } from '../entity/photo/ui/photo-effect-slider.js';
import { createScaleController } from '../entity/photo/ui/scale-controller.js';
import { postPhotoDetail } from '../entity/photo/api/detail.post.js';
import { createError } from '../shared/ui/error.js';
import { createSuccess } from '../shared/ui/success.js';

export const createPhotoUploadForm = () => {
  const scaleController = createScaleController(document.querySelector('.img-upload__preview img'));
  const effectSlider = createEffectSlider();
  const editWindow = createPhotoEditModalWindow();
  const photoUploader = createPhotoUploader();

  photoUploader.onUpload((file) => {
    scaleController.reset();
    effectSlider.init();
    editWindow.setFile(file);
    editWindow.show();
  });
  editWindow.onClose(() => {
    effectSlider.reset();
    photoUploader.cleanup();
  });
  editWindow.onSubmit(async (formData) => {
    try {
      editWindow.preventClose();
      await postPhotoDetail(formData);
      createSuccess({
        onAccept: () => {
          editWindow.close(true);
        }
      });
    } catch (_) {
      createError({
        keyMessage: 'Повторить',
        onAccept: () => {
          editWindow.acceptClose();
        }
      });
    }
  });
};
