import { createPhotoUploader } from '../entity/photo/ui/uploader.js';
import { createPhotoEditModalWindow } from '../entity/photo/ui/photo-edit/modal-window.js';
import { createEffectSlider } from '../entity/photo/ui/photo-effect-slider.js';
import { createScaleController } from '../entity/photo/ui/scale-controller.js';

export const createPhotoUploadForm = () => {
  const scaleController = createScaleController(document.querySelector('.img-upload__preview img'));
  const effectSlider = createEffectSlider();
  const editWindow = createPhotoEditModalWindow();
  const photoUploader = createPhotoUploader();

  photoUploader.onUpload((file) => {
    scaleController.reset();
    editWindow.setFile(file);
    editWindow.show();
  });
  editWindow.onClose(() => {
    effectSlider.reset();
    photoUploader.cleanup();
  });
};
