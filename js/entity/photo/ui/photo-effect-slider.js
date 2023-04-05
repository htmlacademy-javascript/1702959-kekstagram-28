
const createSlider = () => {
  const slider = document.querySelector('.effect-level__slider');

  noUiSlider.create(slider, {
    start: [20],
    range: { min: 0, max: 100}
  });
  const setHandler = (handler) => {
    slider.noUiSlider.on('update', () => {
      handler.call(null, parseInt(slider.noUiSlider.get(), 10));
    });
  };
  return {
    setHandler
  };
};

const createEffectSlider = () => {
  const inputEffect = document.querySelector('.effect-level__value');
  createSlider().setHandler((value) => {
    inputEffect.value = value;
  });
};

export {
  createEffectSlider
};
