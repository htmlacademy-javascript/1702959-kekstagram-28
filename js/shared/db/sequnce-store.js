export const createSequenceArrayStore = () => {
  const sequnceStoreSource = [];
  const add = (value) => (
    sequnceStoreSource.push(value),
    value
  );
  const count = () => sequnceStoreSource.length;
  const has = (value) => sequnceStoreSource.includes(value);
  const get = () => Array.from(sequnceStoreSource);

  return {
    add, has, get, count
  };
};
