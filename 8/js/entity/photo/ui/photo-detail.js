import { createPhotoCommentList } from './photo-comment-list.js';

export const renderPhotoDetail = ({ url, likes, comments, description }) => {
  const hiddenClass = 'hidden';
  const staticBodyClass = 'modal-open';
  const detail = document.querySelector('.big-picture');
  detail.querySelector('.big-picture__img img').src = url;
  detail.querySelector('.likes-count').textContent = likes;
  detail.querySelector('.comments-count').textContent = comments.length;
  detail.querySelector('.social__caption').textContent = description;
  detail.querySelector('.social__comments').replaceChildren(createPhotoCommentList(comments));
  const closeBtn = detail.querySelector('#picture-cancel');


  const closeEvent = () => {
    detail.classList.add(hiddenClass);
    document.body.classList.remove(staticBodyClass);
  };
  const closeClickHandler = () => {
    closeBtn.removeEventListener('click', closeClickHandler);
    closeEvent();
  };
  const closeKeyHandler = (event) => {
    if (event.code === 'Escape') {
      document.removeEventListener('keydown', closeKeyHandler);
      closeEvent();
    }
  };
  const showEvent = () => {
    detail.classList.remove(hiddenClass);
    document.body.classList.add(staticBodyClass);
    detail.querySelector('#picture-cancel').addEventListener('click', closeClickHandler);
    document.addEventListener('keydown', closeKeyHandler);
  };
  showEvent();

  //@TODO: change in next tasks
  document.querySelectorAll('.social__comment-count, .comments-loader').forEach((wrongBlocks) => {
    wrongBlocks.classList.add(hiddenClass);
  });
};
