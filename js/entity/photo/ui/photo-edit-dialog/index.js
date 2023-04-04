import { createCloseBtn } from './close-btn.js';
import {createPreviewImg} from './preview-img.js';

export const createPhotoEditDialog = () => {
  const editPhotoOverlay = document.querySelector('.img-upload__overlay');
  const closeBtn = createCloseBtn(
    editPhotoOverlay.querySelector('#upload-cancel'),
    editPhotoOverlay
  );
  const previewImg = createPreviewImg(editPhotoOverlay.querySelector('.img-upload__preview img'));

  return {
    show: () => closeBtn.init(),
    setFile: (file) => previewImg.setPreviewImage(file)
  };
};

