import {createPhotoEditValidator} from './validator.js';

export const createPhotoEditForm = () => {
  const form = document.querySelector('#upload-select-image');
  const hashtagsInput = form.querySelector('.text__hashtags');
  const descriptionInput = form.querySelector('.text__description');
  const validator = createPhotoEditValidator({form, hashtagsInput, descriptionInput});

  form.addEventListener('submit', (submit) => {
    const result = validator.validate();
    if (!result) {
      submit.preventDefault();
    }
  });

  const preventEscapeKey = (event) => {
    if (event.code !== undefined && event.code === 'Escape') {
      event.stopPropagation();
    }
  };
  const initEvents = () => {
    hashtagsInput.addEventListener('keydown', preventEscapeKey);
    descriptionInput.addEventListener('keydown', preventEscapeKey);
  };
  const cleanupEvents = () => {
    hashtagsInput.removeEventListener('keydown', preventEscapeKey);
    descriptionInput.removeEventListener('keydown', preventEscapeKey);
  };

  return {cleanupEvents, initEvents};
};
