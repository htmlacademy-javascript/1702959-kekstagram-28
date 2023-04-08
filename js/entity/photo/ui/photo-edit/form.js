import { createPhotoEditValidator } from './validator.js';
import { useCallback } from '../../../../shared/useCallback.js';

const createSubmitBtn = (node) => {
  node.style.userSelect = 'none';

  const disable = () => {
    node.setAttribute('disabled', '');
    node.style.pointerEvents = 'none';
  };
  const enable = () => {
    node.removeAttribute('disabled');
    node.style.pointerEvents = 'auto';
  };
  return {
    disable,
    enable
  };
};

export const createPhotoEditForm = () => {
  const form = document.querySelector('#upload-select-image');
  const hashtagsInput = form.querySelector('.text__hashtags');
  const descriptionInput = form.querySelector('.text__description');
  const submitBtn = createSubmitBtn(form.querySelector('button[type="submit"]'));
  const validator = createPhotoEditValidator({ form, hashtagsInput, descriptionInput });
  const onSubmit = useCallback();
  const getFormData = () => new FormData(form);


  form.addEventListener('submit', async (submit) => {
    submit.preventDefault();
    submitBtn.disable();
    await onSubmit.call(getFormData());
    submitBtn.enable();
  });

  const allowSubmit = () => {
    submitBtn.disable();
    const result = validator.validate();
    if (result) {
      submitBtn.enable();
    }
  };
  const preventEscapeKey = (event) => {
    if (event.code !== undefined && event.code === 'Escape') {
      event.stopPropagation();
    }
  };
  const initEvents = () => {
    hashtagsInput.addEventListener('keydown', preventEscapeKey);
    descriptionInput.addEventListener('keydown', preventEscapeKey);
    hashtagsInput.addEventListener('keyup', allowSubmit);
    descriptionInput.addEventListener('keyup', allowSubmit);
    allowSubmit();
  };
  const cleanupEvents = () => {
    hashtagsInput.removeEventListener('keydown', preventEscapeKey);
    descriptionInput.removeEventListener('keydown', preventEscapeKey);
  };
  const cleanupForm = () => form.reset();

  return { cleanupEvents, initEvents, onSubmit: onSubmit.set, cleanupForm };
};
