export const createError = ({message, keyMessage, onErrorClick} = {message: null, keyMessage: null}) => {
  document.body.classList.add('modal-open');
  const errorDialog = document.querySelector('#error').content.cloneNode(true);
  if (message !== null) {
    errorDialog.querySelector('.error__title').textContent = message;
  }
  if (keyMessage !== null) {
    errorDialog.querySelector('.error__button').textContent = keyMessage;
  }
  if (onErrorClick) {
    errorDialog.querySelector('.error__button').addEventListener('click', onErrorClick);
  }
  document.body.append(errorDialog);
};
