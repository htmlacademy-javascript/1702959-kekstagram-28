import { useCallback } from '../../../shared/useCallback.js';

const createRangeController = ({ initialValue, step, range } = { initialValue: 55, step: 5, range: { min: 0, max: 100 } }) => {
  const moreKeyClass = 'scale__control--bigger';
  const lessKeyClass = 'scale__control--smaller';
  const scaleKeys = document.querySelectorAll('button.scale__control');

  let value = initialValue;
  const onUpdate = useCallback();

  scaleKeys.forEach((key) => {
    key.addEventListener('click', (event) => {
      if (event.target.classList.contains(moreKeyClass) && value < range.max) {
        value += step;
      } else if (event.target.classList.contains(lessKeyClass) && value > range.min) {
        value -= step;
      }
      onUpdate.call(value);
    });
  });

  return {
    onUpdate: onUpdate.set,
    getValue: () => value,
  };
};

const createScaleController = () => {
  const inputValue = document.querySelector('.scale__control.scale__control--value');
  const setInputValue = (v) => {
    inputValue.value = `${v}%`;
  };
  const imageScale = document.querySelector('.img-upload__preview');
  const setPhotoScale = (v) => {
    imageScale.style.transform = `scale(0.${v})`;
  };
  const rangeController = createRangeController();

  rangeController.onUpdate((value) => {
    setInputValue(value);
    setPhotoScale(value);
  });
  setPhotoScale(rangeController.getValue());

};
export { createScaleController };
