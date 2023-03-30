import {createPhotoComment} from './photo-comment.js';

export const createPhotoCommentList = (commentList) => commentList.reduce((result, comment) => (
  result.append(createPhotoComment(comment)),
  result
), document.createDocumentFragment());
