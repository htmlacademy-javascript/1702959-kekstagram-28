import { useCallback } from '../../../shared/useCallback.js';

export const createPhotoUploader = () => {
  const onUpload = useCallback();
  const uploader = document.getElementById('upload-file');
  const uploadHandler = (event) => {
    onUpload.call(event.target.files[0]);
  };
  uploader.addEventListener('change', uploadHandler);
  const cleanup = () => {
    uploader.value = '';
  };
  return {
    cleanup,
    onUpload: onUpload.set
  };
};
