export const createCloseBtn = (closeBtn, overlay, onClose) => {
  const hiddenClass = 'hidden';
  const staticBodyClass = 'modal-open';

  const closeHanler = (event) => {
    if (event.code !== undefined && event.code === 'Escape' || !event.code) {
      overlay.classList.add(hiddenClass);
      document.body.classList.remove(staticBodyClass);
      closeBtn.removeEventListener('click', closeHanler);
      document.removeEventListener('keydown', closeHanler);
      if (typeof onClose === 'function') {
        onClose();
      }
    }
  };
  const init = () => {
    overlay.classList.remove(hiddenClass);
    document.body.classList.add(staticBodyClass);
    closeBtn.addEventListener('click', closeHanler);
    document.addEventListener('keydown', closeHanler);
  };

  return {
    init
  };
};
