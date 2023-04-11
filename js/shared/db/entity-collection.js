import {createSequence} from './sequence.js';

const createCollection = (store, idSeq) => {
  const selectedInstances = [];
  const addSelected = (obj) => selectedInstances.push(obj);
  const isAllSelected = () => selectedInstances.length >= idSeq.getLength();
  const cleanupSelected = () => selectedInstances.splice(0, selectedInstances.length);
  const selectOne = () => {
    let result = null;
    if (!isAllSelected()) {
      let randKey = idSeq.getRandom();
      while (selectedInstances.includes(randKey)) {
        randKey = idSeq.getRandom();
      }
      result = store[randKey];
      addSelected(result);
    }
    return result;
  };

  const getById = (id) => id ? (store[id] ?? null) : null;
  const getRandom = () => store[idSeq.getRandom()];
  const getRandomBatch = (batchCount) => {
    batchCount ??= idSeq.getLength();
    const batch = [];
    const batchKeys = [];
    const getRandKey = () => {
      let randKey = idSeq.getRandom();
      while (batchKeys.includes(randKey)) {
        randKey = idSeq.getRandom();
      }
      return randKey;
    };
    while (
      batchCount <= idSeq.getLength() &&
      batch.length < batchCount &&
      batch.length < idSeq.getLength()
    ) {
      const key = getRandKey();
      batch.push(store[key]);
      batchKeys.push(key);
    }
    return batch;
  };
  const selectQuery = (filterCallback) => (
    filterCallback ?
      Object.values(
        Object
          .entries(store).filter(([id, object]) => filterCallback(id, object))
          .map(([, object]) => object)
      ) :
      Object.values(store)
  );
  return {
    selectQuery,
    selectOne,
    cleanupSelected,
    getById,
    getRandom,
    getRandomBatch
  };
};

const createEntityCollectionFromArray = (dataArray) => {
  const idSeq = createSequence();
  const store = dataArray.reduce(
    (collection, document) => {
      const id = idSeq.getNextValue();
      collection[id] = document;
      return collection;
    },
    {}
  );
  return createCollection(store, idSeq);
};

export {
  createEntityCollectionFromArray,
};
