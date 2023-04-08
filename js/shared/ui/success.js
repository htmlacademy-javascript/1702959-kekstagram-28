import { useCallback } from '../useCallback.js';

export const createSuccess = ({ onAccept = null } = {}) => {
  document.body.classList.add('modal-open');

  const successModalWindow = document.querySelector('#success').content.firstElementChild.cloneNode(true);
  const modalBody = successModalWindow.querySelector('.success__inner');

  const acceptBtn = successModalWindow.querySelector('.success__button');
  const acceptController = new AbortController();

  const onAcceptCb = useCallback(onAccept ?? (() => { }));
  const acceptAction = (event) => {
    acceptController.abort();
    document.body.removeChild(successModalWindow);
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

  document.body.appendChild(successModalWindow);

  return {
    onAccept: onAcceptCb.set,
  };
};
