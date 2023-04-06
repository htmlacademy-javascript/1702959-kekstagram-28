import {createPhotoUploader} from '../entity/photo/ui/uploader.js';
import {createPhotoEditModalWindow} from '../entity/photo/ui/photo-edit/modal-window.js';

export const createPhotoUploadForm = () => {
  const fileUloader = createPhotoUploader();
  const dialog = createPhotoEditModalWindow();

  fileUloader.onUpload((file) => {
    dialog.setFile(file);
    dialog.show();
  });
  dialog.onClose(() => {
    fileUloader.cleanup();
  });
};
