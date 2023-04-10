export const createSequenceArrayStore = () => {
  const sequnceStoreSource = [];
  let lastEl = null;
  const add = (value) => (
    sequnceStoreSource.push(value),
    (lastEl = value),
    value
  );
  const getLast = () => lastEl;
  const has = (value) => sequnceStoreSource.includes(value);
  const get = () => Array.from(sequnceStoreSource);

  return {
    add, has, get, getLast
  };
};
