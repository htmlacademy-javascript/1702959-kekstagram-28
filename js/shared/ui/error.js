import { useCallback } from '../useCallback.js';

export const createError = ({ message = null, keyMessage = 'Перезагрузить страницу', onAccept = null }) => {
  document.body.classList.add('modal-open');

  const errorModalWindow = document.querySelector('#error').content.firstElementChild.cloneNode(true);
  const modalBody = errorModalWindow.querySelector('.error__inner');

  if (message !== null) {
    errorModalWindow.querySelector('.error__title').textContent = message;
  }
  if (keyMessage !== null) {
    errorModalWindow.querySelector('.error__button').textContent = keyMessage;
  }

  const acceptBtn = errorModalWindow.querySelector('.error__button');
  const acceptController = new AbortController();
  const onAcceptCb = useCallback(onAccept ?? (() => {
    location.reload();
  }));
  const acceptAction = (event) => {
    acceptController.abort();
    document.body.removeChild(errorModalWindow);
    onAcceptCb.call(event);
  };
  const escapeAccpet = (keydown) => {
    if (keydown.code !== undefined && keydown.code === 'Escape') {
      acceptAction(keydown);
    }
  };
  const clickOutsideAccept = (click) => {
    if (!modalBody.contains(click.target)) {
      acceptAction(click);
    }
  };

  acceptBtn.addEventListener('click', acceptAction, { signal: acceptController.signal });
  document.addEventListener('keydown', escapeAccpet, { signal: acceptController.signal });
  document.addEventListener('click', clickOutsideAccept, { signal: acceptController.signal });
  document.body.appendChild(errorModalWindow);

  return {
    onAccept: onAcceptCb.set,
  };
};
