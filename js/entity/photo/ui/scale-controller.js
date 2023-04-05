import { useCallback } from '../../../shared/useCallback.js';

const createRangeController = ({ initialValue, step, range } = { initialValue: 100, step: 25, range: { min: 25, max: 100 } }) => {
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
  const reset = () => {
    value = initialValue;
    onUpdate.call(value);
  };

  return {
    onUpdate: onUpdate.set,
    getValue: () => value,
    reset,
  };
};

const createScaleController = (scaleImg) => {
  const inputValue = document.querySelector('.scale__control.scale__control--value');
  const setupValue = (value) => {
    inputValue.value = `${value}%`;
    scaleImg.style.transform = `scale(${value * 0.01})`;
  };

  const rangeController = createRangeController();
  rangeController.onUpdate(setupValue);
  setupValue(rangeController.getValue());
  return {
    reset: rangeController.reset
  };
};
export { createScaleController };
