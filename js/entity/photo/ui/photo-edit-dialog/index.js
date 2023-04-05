import { createCloseBtn } from './close-btn.js';
import { createPreviewImg } from './preview-img.js';
import { createPhotoEditForm } from './form.js';
import { useCallback } from '../../../../shared/useCallback.js';

export const createPhotoEditDialog = () => {
  const onClose = useCallback();
  const form = createPhotoEditForm();
  const editPhotoOverlay = document.querySelector('.img-upload__overlay');
  const closeBtn = createCloseBtn(
    editPhotoOverlay.querySelector('#upload-cancel'),
    editPhotoOverlay,
    () => {
      form.cleanupEvents();
      onClose.call();
    }
  );
  const previewImg = createPreviewImg(editPhotoOverlay.querySelector('.img-upload__preview img'));


  const show = () => {
    closeBtn.init();
    form.initEvents();
  };
  return {
    show,
    setFile: (file) => previewImg.setPreviewImage(file),
    onClose: onClose.set
  };
};

