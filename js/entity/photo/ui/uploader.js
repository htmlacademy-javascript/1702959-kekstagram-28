import { useCallback } from '../../../shared/useCallback.js';

export const createPhotoUploader = () => {
  const onUpload = useCallback();
  const uploader = document.getElementById('upload-file');
  uploader.addEventListener('change', (event) => {
    onUpload.call(event.target.files[0]);
  });
  const cleanup = () => {
    uploader.value = '';
  };
  return {
    cleanup,
    setupOnUpload: onUpload.set
  };
};
