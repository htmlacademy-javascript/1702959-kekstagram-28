import { createPhotoUploader } from '../entity/photo/ui/uploader.js';
import { createPhotoEditDialog } from '../entity/photo/ui/photo-edit-dialog/index.js';
import { createEffectSlider } from '../entity/photo/ui/photo-effect-slider.js';
import { createScaleController } from '../entity/photo/ui/scale-controller.js';

export const createPhotoUploadForm = () => {
  const scaleControl = createScaleController(document.querySelector('.img-upload__preview img'));
  const effectSlider = createEffectSlider();
  const dialog = createPhotoEditDialog();
  const fileUloader = createPhotoUploader();

  fileUloader.onUpload((file) => {
    scaleControl.reset();
    dialog.setFile(file);
    dialog.show();
  });
  dialog.onClose(() => {
    effectSlider.reset();
    fileUloader.cleanup();
  });
};
