export const createPhotoPreview = (url, likes, commentCount) => {
  const htmlTemplate = document.getElementById('picture').content;
  const photo = htmlTemplate.cloneNode(true);
  photo.querySelector('.picture__img').src = url;
  photo.querySelector('.picture__likes').textContent = likes;
  photo.querySelector('.picture__comments').textContent = commentCount;
  return photo;
};
