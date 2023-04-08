import {useCallback} from '../../../shared/useCallback.js';
import {useDebounceFn} from '../../../shared/useDebounceFn.js';

const FILTER_MAP = {
  DISCUSSED: 'filter-discussed',
  RANDOM: 'filter-random',
  DEFAULT: 'filter-default'
};

const createSwitcherList = ({switchList}) => {
  let abortSwitchList = null;
  const switchActiveClass = 'img-filters__button--active';
  const onSwitch = useCallback();
  const debouncedSwitch = useDebounceFn(onSwitch.call);
  const switchAction = (activeSwitcher) => {
    switchList.forEach((el) => el.classList.remove(switchActiveClass));
    activeSwitcher.classList.add(switchActiveClass);
    debouncedSwitch(activeSwitcher.getAttribute('id'));
  };
  const init = () => {
    abortSwitchList = new AbortController();
    switchList.forEach((el) => {
      el.addEventListener('click', (click) => switchAction(click.target), {signal: abortSwitchList.signal});
    });
  };
  const cleanupEvents = () => abortSwitchList && abortSwitchList.abort();
  return {
    init,
    cleanupEvents,
    onSwitch: onSwitch.set,
  };
};

const createPhotoListingFilter = () => {
  const inactiveClass = 'img-filters--inactive';
  const filter = document.querySelector('section.img-filters');
  const switcherList = createSwitcherList({
    switchList: filter.querySelectorAll('.img-filters__button')
  });
  const activate = () => {
    filter.classList.remove(inactiveClass);
    switcherList.init();
  };
  const deactivate = () => {
    switcherList.cleanupEvents();
    filter.classList.add(inactiveClass);
  };

  return {
    activate,
    deactivate,
    onSwitch: switcherList.onSwitch
  };
};


export {
  createPhotoListingFilter,
  FILTER_MAP,
};
