import { createPhotoUploader } from '../entity/photo/ui/uploader.js';
import { createPhotoEditDialog } from '../entity/photo/ui/photo-edit-dialog/index.js';
import { createEffectSlider } from '../entity/photo/ui/photo-effect-slider.js';
import {createScaleController}from '../entity/photo/ui/scale-controller.js';

export const createPhotoUploadForm = () => {
  createScaleController();
  createEffectSlider();
  const dialog = createPhotoEditDialog();
  const fileUloader = createPhotoUploader();

  fileUloader.onUpload((file) => {
    dialog.setFile(file);
    dialog.show();
  });
  dialog.onClose(() => {
    fileUloader.cleanup();
  });
};
