import { useCallback } from '../../../shared/useCallback.js';
import { useDebounceFn } from '../../../shared/useDebounceFn.js';

const FILTER_MAP = {
  DISCUSSED: 'filter-discussed',
  RANDOM: 'filter-random',
  DEFAULT: 'filter-default'
};

const createSwitcherList = ({ switchList }) => {
  let abortSwitchList = null;
  const switchActiveClass = 'img-filters__button--active';
  const onSwitch = useCallback();
  const debouncedSwitch = useDebounceFn(onSwitch.call);
  const switchAction = (activeSwitcher, immediate = false) => {
    switchList.forEach((el) => el.classList.remove(switchActiveClass));
    activeSwitcher.classList.add(switchActiveClass);
    const filterName = activeSwitcher.getAttribute('id');
    if (immediate) {
      onSwitch.call(filterName);
    } else {
      debouncedSwitch(filterName);
    }
  };
  const init = ({ push = false } = {}) => {
    abortSwitchList = new AbortController();
    switchList.forEach((el) => {
      el.addEventListener('click', (click) => switchAction(click.target), { signal: abortSwitchList.signal });
    });
    if (push) {
      switchAction(
        document.querySelector('.img-filters__button.img-filters__button--active'),
        true
      );
    }
  };
  const cleanupEvents = () => abortSwitchList && abortSwitchList.abort();
  return {
    init,
    cleanupEvents,
    setupOnSwitch(cb) {
      onSwitch.set(cb);
      return this;
    },
  };
};

const createPhotoListingFilter = () => {
  const inactiveClass = 'img-filters--inactive';
  const filter = document.querySelector('section.img-filters');
  const switcherList = createSwitcherList({
    switchList: filter.querySelectorAll('.img-filters__button')
  });
  const activate = function () {
    filter.classList.remove(inactiveClass);
    switcherList.init({ push: true });
    return this;
  };
  const deactivate = function () {
    switcherList.cleanupEvents();
    filter.classList.add(inactiveClass);
    return this;
  };

  return {
    activate,
    deactivate,
    setupOnSwitch: switcherList.setupOnSwitch
  };
};


export {
  createPhotoListingFilter,
  FILTER_MAP,
};
