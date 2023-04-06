/**
 * @description Устанавливает и вызывает callback
 */
export const useCallback = (callback = null) => {
  let cb = callback;

  return {
    call: (...args) => {
      if (typeof cb === 'function') {
        cb.apply(null, args);
      }
    },
    set(cback) {
      cb = cback;
      return this;
    }
  };
};
