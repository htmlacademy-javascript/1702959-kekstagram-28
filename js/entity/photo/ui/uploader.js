
export const createPhotoUploader = (fileCb) => {
  const uploader = document.getElementById('upload-file');
  uploader.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file && typeof fileCb === 'function') {
      fileCb(file);
    }
  });
};
