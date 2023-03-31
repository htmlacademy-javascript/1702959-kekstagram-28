export const createPhotoPreview = (id, url, likes, commentCount) => {
  const htmlTemplate = document.getElementById('picture').content;
  const photo = htmlTemplate.cloneNode(true);
  photo.querySelector('.picture__img').src = url;
  photo.querySelector('.picture__likes').textContent = likes;
  photo.querySelector('.picture__comments').textContent = commentCount;
  photo.querySelector('.picture').setAttribute('data-id', id);
  return photo;
};
