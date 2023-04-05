export const useCallback = (callback = null) => {
  let cb = callback;
  const call = () => {
    if (typeof cb === 'function') {
      cb();
    }
  };
  call();
  return {
    call,
    set(cback) {
      cb = cback;
      return this;
    },
    bind(binder) {
      cb = binder(cb);
      return this;
    }
  };
};
