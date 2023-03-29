import { createPhotoPreview } from './photo-preview.js';

export const createPhotoList = (photoList) => photoList.reduce((result, { url, likes, comments }) => (
  result.append(createPhotoPreview(
    url,
    likes,
    comments.length
  )),
  result
), document.createDocumentFragment());
