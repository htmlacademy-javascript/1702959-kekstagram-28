import { useCallback } from '../../../shared/useCallback.js';

export const createPhotoUploader = () => {
  const fileHandler = useCallback();
  const uploader = document.getElementById('upload-file');
  uploader.addEventListener('change', (event) => {
    fileHandler.call(event.target.files[0]);
  });
  const cleanup = () => {
    uploader.value = null;
  };
  return {
    cleanup,
    onUpload: fileHandler.set
  };
};
