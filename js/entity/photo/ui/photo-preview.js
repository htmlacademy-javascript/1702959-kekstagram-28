const createPhotoPreview = ({ id, url, likes, comments }) => {
  const htmlTemplate = document.getElementById('picture').content;
  const photo = htmlTemplate.cloneNode(true);
  photo.querySelector('.picture__img').src = url;
  photo.querySelector('.picture__likes').textContent = likes;
  photo.querySelector('.picture__comments').textContent = comments.length;
  photo.querySelector('.picture').setAttribute('data-id', id);
  return photo;
};
const createPhotoPreviewList = (photoList) => photoList
  .reduce(
    (result, photo) => (result.append(createPhotoPreview(photo)), result),
    document.createDocumentFragment()
  );

export {
  createPhotoPreview,
  createPhotoPreviewList
};
