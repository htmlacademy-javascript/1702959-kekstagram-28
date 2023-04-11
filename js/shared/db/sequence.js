import { createSequenceArrayStore } from './sequnce-store.js';
import { getRandomInt } from '../random.js';
const createIntegerSequence = function* (onSequenceGet = (() => {})) {
  let sequnceHead = 0;
  while (true) {
    onSequenceGet(sequnceHead);
    yield sequnceHead;
    sequnceHead++;
  }
};
const createSequence = (sequenceFactory, store) => {
  const sequence = sequenceFactory((sequnceElement) => {
    store.add(sequnceElement);
  });
  const getRandom = () => {
    const keys = store.get();
    const keyIndex = getRandomInt(0, keys.length - 1);
    return keys[keyIndex];
  };
  return {
    getRandom,
    getNextValue: () => sequence.next().value,
    getCurrentValue: store.getLast,
    exists: store.has
  };
};
const createIntSequence = () => createSequence(createIntegerSequence, createSequenceArrayStore());
export {
  createIntSequence as createSequence
};
