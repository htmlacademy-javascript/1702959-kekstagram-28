import { createPhotoUploader } from '../entity/photo/ui/uploader.js';
import { createPhotoEditDialog } from '../entity/photo/ui/photo-edit-dialog/index.js';

export const createPhotoUploadForm = () => {
  const fileUloader = createPhotoUploader();
  const dialog = createPhotoEditDialog();

  fileUloader.onUpload((file) => {
    dialog.setFile(file);
    dialog.show();
  });
  dialog.onClose(() => {
    fileUloader.cleanup();
  });
};
