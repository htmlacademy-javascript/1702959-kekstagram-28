export const createPreviewImg = (previewImg) => {
  const placeholderImage = previewImg.getAttribute('src');
  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    previewImg.src = fileReader.result;
  };
  const setPreviewImage = (file) => {
    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      previewImg.src = placeholderImage;
    }
  };
  return {
    setPreviewImage
  };
};
