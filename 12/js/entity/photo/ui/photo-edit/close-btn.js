export const createCloseBtn = ({closeBtn, overlay, onClose}) => {
  const hiddenClass = 'hidden';
  const staticBodyClass = 'modal-open';

  const closeHandler = (event) => {
    if (event.code !== undefined && event.code === 'Escape' || !event.code) {
      overlay.classList.add(hiddenClass);
      document.body.classList.remove(staticBodyClass);
      closeBtn.removeEventListener('click', closeHandler);
      document.removeEventListener('keydown', closeHandler);
      if (typeof onClose === 'function') {
        onClose();
      }
    }
  };
  const init = () => {
    overlay.classList.remove(hiddenClass);
    document.body.classList.add(staticBodyClass);
    closeBtn.addEventListener('click', closeHandler);
    document.addEventListener('keydown', closeHandler);
  };

  return {
    init
  };
};
