export const postPhotoDetail = (body) => fetch('https://28.javascript.pages.academy/kekstagram', { method: 'POST', body })
  .then((response) => {
    if (!response.ok) {
      throw new Error('Неудалось отправить изображение');
    }
  });
