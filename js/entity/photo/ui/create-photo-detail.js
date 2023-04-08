const createDetailDialog = (url, likes, description) => {
  const dialog = document.querySelector('.big-picture');
  dialog.querySelector('.big-picture__img img').src = url;
  dialog.querySelector('.likes-count').textContent = likes;
  dialog.querySelector('.social__caption').textContent = description;
  return dialog;
};

const createPhotoDetail = ({ url, likes, description }) => {
  const hiddenClass = 'hidden';
  const staticBodyClass = 'modal-open';
  const detail = createDetailDialog(url, likes, description);

  const initClose = (closeCb) => {
    const closeBtn = detail.querySelector('#picture-cancel');
    const closeEvent = (event) => {
      if (event.code !== undefined && event.code === 'Escape' || !event.code) {
        detail.classList.add(hiddenClass);
        document.body.classList.remove(staticBodyClass);
        closeBtn.removeEventListener('click', closeEvent);
        document.removeEventListener('keydown', closeEvent);
        if (typeof closeCb === 'function') {
          closeCb();
        }
      }
    };
    closeBtn.addEventListener('click', closeEvent);
    document.addEventListener('keydown', closeEvent);
  };


  const render = ({ commentList }) => {
    const commentListNode = detail.querySelector('.social__comments');
    const commentCounter = detail.querySelector('.social__comment-count');
    const commentLoader = detail.querySelector('.social__comments-loader');

    const { cleanupListeners } = commentList.render({ commentList: commentListNode, commentCounter, commentLoader });
    initClose(cleanupListeners);
    document.body.classList.add(staticBodyClass);
    detail.classList.remove(hiddenClass);
  };

  return {
    render
  };
};


export {
  createPhotoDetail
};
