/**
 * @description Устанавливает и вызывает callback
 */
export const useCallback = (callback = null) => {
  let cb = callback;

  return {
    call: async (...args) => {
      if (typeof cb === 'function') {
        await cb.apply(null, args);
      }
    },
    set(cback) {
      cb = cback;
      return this;
    }
  };
};
