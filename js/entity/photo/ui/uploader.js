import { useCallback } from '../../../shared/useCallback.js';

export const createPhotoUploader = () => {
  const fileHandler = useCallback();
  const uploader = document.getElementById('upload-file');
  uploader.addEventListener('change', (event) => {
    const file = event.target.files[0];
    fileHandler.bind((cb) => cb.bind(null, file));
    fileHandler.call();
  });
  const cleanup = () => {
    uploader.value = null;
  };
  return {
    cleanup,
    onUpload: fileHandler.set
  };
};
