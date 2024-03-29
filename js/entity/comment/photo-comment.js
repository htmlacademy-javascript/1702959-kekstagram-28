
const createPhotoComment = ({ avatar, message, name }) => {
  const htmlTemplate = document.getElementById('photo-detail__comment').content;
  const comment = htmlTemplate.cloneNode(true);
  const avatarNode = comment.querySelector('.social__picture');
  avatarNode.setAttribute('src', avatar);
  avatarNode.setAttribute('alt', name);
  comment.querySelector('.social__text').textContent = message;
  return comment;
};
const createPhotoCommentList = (commentList) => commentList.reduce(
  (result, comment) => (result.append(createPhotoComment(comment)), result),
  document.createDocumentFragment()
);

export {
  createPhotoComment,
  createPhotoCommentList
};
