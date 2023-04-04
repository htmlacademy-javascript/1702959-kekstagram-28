import { createPhotoUploader } from '../entity/photo/ui/uploader.js';
import { createPhotoEditDialog } from '../entity/photo/ui/photo-edit-dialog/index.js';

export const createPhotoUploadForm = () => {
  const dialog = createPhotoEditDialog();

  createPhotoUploader((file) => {
    dialog.setFile(file);
    dialog.show();
  });
};
