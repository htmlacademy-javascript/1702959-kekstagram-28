const initValidator = (form, hashtagsInput, descriptionInput) => {
  const hashTagRegexp = /^#[a-zа-яё0-9]{1,19}$/i;
  const validator = new Pristine(form, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextTag: 'p',
  });

  validator.addValidator(hashtagsInput, (value) => value.split(' ').length <= 5, 'Хештегов не может быть более 5', 1);
  validator.addValidator(hashtagsInput, (value) => {
    if (value.length) {
      const hasTags = value.split(' ');
      for (const hastagSrc of hasTags) {
        const hastag = hastagSrc.trim();
        if (!hashTagRegexp.test(hastag) || hastag.length > 20) {
          return false;
        }
      }
    }
    return true;
  }, 'Не корреткный формат хэштега', 2);

  validator.addValidator(hashtagsInput, (value) => {
    const hashtagSet = new Set();
    const hasTags = value.split(' ');
    for (const hastagSrc of hasTags) {
      const hastag = hastagSrc.trim();
      if (hashtagSet.has(hastag)) {
        return false;
      } else {
        hashtagSet.add(hastag);
      }
    }
    return true;
  }, 'Хештеги дублируются', 3);

  validator.addValidator(descriptionInput, (value) => value.length <= 140, 'Описание не может быть более 140 символов', 1);

  return validator;
};

const createPhotoEditForm = () => {
  const form = document.querySelector('#upload-select-image');
  const hastags = form.querySelector('.text__hashtags');
  const description = form.querySelector('.text__description');
  const validator = initValidator(form, hastags, description);

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
    hastags.addEventListener('keydown', preventEscapeKey);
    description.addEventListener('keydown', preventEscapeKey);
  };
  const cleanupEvents = () => {
    hastags.removeEventListener('keydown', preventEscapeKey);
    description.removeEventListener('keydown', preventEscapeKey);
  };

  return { cleanupEvents, initEvents };
};

export { createPhotoEditForm };
