import { createPhotoPreview } from './photo-preview.js';

export const createPhotoList = (photoList) => photoList.reduce((result, { id, url, likes, comments }) => (
  result.append(createPhotoPreview(
    id,
    url,
    likes,
    comments.length
  )),
  result
), document.createDocumentFragment());
