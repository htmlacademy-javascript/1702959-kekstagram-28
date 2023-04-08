export const createCloseBtn = ({ closeBtn, overlay, onClose }) => {
  const hiddenClass = 'hidden';
  const staticBodyClass = 'modal-open';
  let closePrevent = false;
  const closeHandler = (event) => {
    if (!closePrevent && (event.code !== undefined && event.code === 'Escape' || !event.code)) {
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
  const preventClose = () => {
    closePrevent = true;
  };
  const acceptClose = () => {
    closePrevent = false;
  };
  const callClose = (force = false) => {
    if(force){
      acceptClose();
    }
    closeBtn.dispatchEvent(new Event('click'));
  };

  return {
    init,
    callClose,
    preventClose,
    acceptClose
  };
};
