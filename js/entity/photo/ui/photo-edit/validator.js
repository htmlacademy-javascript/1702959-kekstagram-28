export const createPhotoEditValidator = ({form, hashtagsInput, descriptionInput}) => {
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
      const hastag = hastagSrc.trim().toLowerCase();
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
