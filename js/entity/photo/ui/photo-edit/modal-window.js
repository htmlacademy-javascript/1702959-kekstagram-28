import { createCloseBtn } from './close-btn.js';
import { createPreviewImg } from './preview-img.js';
import { createPhotoEditForm } from './form.js';
import { useCallback } from '../../../../shared/useCallback.js';

export const createPhotoEditModalWindow = () => {
  const onClose = useCallback();
  const form = createPhotoEditForm();
  const editPhotoOverlay = document.querySelector('.img-upload__overlay');
  const previewImg = createPreviewImg(editPhotoOverlay.querySelector('.img-upload__preview img'));
  const closeBtn = createCloseBtn(
    {
      closeBtn: editPhotoOverlay.querySelector('#upload-cancel'),
      overlay: editPhotoOverlay,
      onClose: () => {
        form.cleanupForm();
        form.cleanupEvents();
        previewImg.setPreviewImage(null);
        onClose.call();
      },
    }
  );


  const show = () => {
    closeBtn.init();
    form.initEvents();
  };
  return {
    show,
    close: closeBtn.callClose,
    setFile: (file) => previewImg.setPreviewImage(file),
    setupOnClose: onClose.set,
    setupOnSubmit: form.onSubmit,
    preventClose: closeBtn.preventClose,
    acceptClose: closeBtn.acceptClose,
  };
};

