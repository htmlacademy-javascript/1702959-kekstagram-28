
const createSlider = () => {
  const slider = document.querySelector('.effect-level__slider');
  let parentDisplay = slider.parentElement.style.display;
  noUiSlider.create(slider, {
    start: [100],
    range: { min: 0, max: 100 }
  });
  const setHandler = function (handler) {
    slider.noUiSlider.on('update', () => {
      handler.call(null, parseInt(slider.noUiSlider.get(), 10));
    });
    return this;
  };
  const setStep = function (step) {
    slider.noUiSlider.updateOptions({ step });
    return this;
  };
  const setRange = function (range) {
    slider.noUiSlider.updateOptions({ range: { min: range[0], max: range[1] } });
    return this;
  };
  const reset = function () {
    slider.noUiSlider.reset();
    return this;
  };
  const hide = function () {
    parentDisplay = slider.parentElement.style.display;
    slider.parentElement.style.display = 'none';
    return this;
  };
  const show = function () {
    slider.parentElement.style.display = parentDisplay;
    return this;
  };
  return {
    setHandler, setStep, setRange, reset, hide, show
  };
};

const effectFactoryMap = {
  none: () => ({
    filter: null,
    range: null
  }),
  chrome: () => ({
    getRaw: (value) => value * 0.1,
    getValue: function (value) {
      return this.getRaw(value).toFixed(1);
    },
    filter: 'grayscale',
    range: [0, 10],
    step: 1,
  }),
  sepia: () => ({
    getRaw: (value) => value * 0.1,
    getValue: function (value) {
      return this.getRaw(value).toFixed(1);
    },
    filter: 'sepia',
    range: [0, 10],
    step: 1,
  }),
  marvin: () => ({
    getRaw: (value) => value,
    getValue: (value) => `${value}%`,
    filter: 'invert',
    range: [0, 100],
    step: 1,
  }),
  phobos: () => ({
    getRaw: (value) => value * 0.1,
    getValue: function (value) {
      return `${this.getRaw(value).toFixed(1)}px`;
    },
    filter: 'blur',
    range: [0, 30],
    step: 1,
  }),
  heat: () => ({
    getRaw: (value) => value * 0.1,
    getValue: function (value) {
      return this.getRaw(value).toFixed(1);
    },
    filter: 'brightness',
    range: [0, 30],
    step: 1,
  })
};

const createEffectSlider = () => {
  let selectedEffect = null;
  let selectedKey = null;
  const createEffect = (key = 'none') => {
    selectedKey = key;
    selectedEffect = effectFactoryMap[key]();
  };
  createEffect();

  const inputEffect = document.querySelector('.effect-level__value');
  const imagePreview = document.querySelector('.img-upload__preview img');

  const slider = createSlider()
    .setHandler((selectedValue) => {
      inputEffect.value = selectedEffect.getValue ?
        selectedEffect.getRaw(selectedValue) :
        null;
      imagePreview.style.filter = !selectedEffect.filter ?
        'none' :
        `${selectedEffect.filter}(${selectedEffect.getValue(selectedValue)})`;
    })
    .hide();

  const effectRadio = document.querySelectorAll('.effects__radio');
  const getClassname = () => `effects__preview--${selectedKey}`;
  effectRadio.forEach((el) => {
    el.addEventListener('change', (event) => {
      imagePreview.classList.remove(getClassname());
      createEffect(event.target.value);
      if (selectedEffect && selectedEffect.range && selectedEffect.step) {
        imagePreview.classList.add(getClassname());
        slider.show().setRange(selectedEffect.range).setStep(selectedEffect.step);
      } else {
        slider.hide();
      }
      slider.reset();
    });
  });

  const reset = () => {
    createEffect();
    slider.reset().hide();
  };
  return {
    reset
  };
};

export {
  createEffectSlider
};
