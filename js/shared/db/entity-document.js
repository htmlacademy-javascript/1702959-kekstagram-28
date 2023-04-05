import {createSequence} from './sequence.js';
import {getRandomInt} from '../random.js';


const createDocument = (store, idSeq) => {
  const selected = [];
  const addSelected = (obj) => selected.push(obj);
  const isAllSelected = () => selected.length >= idSeq.currentValue();
  const cleanupSelected = () => selected.splice(0, selected.length);
  const selectOne = () => {
    let result = null;
    if (!isAllSelected()) {
      let randKey = getRandomInt(1, idSeq.currentValue());
      while (selected.includes(randKey)) {
        randKey = getRandomInt(1, idSeq.currentValue());
      }
      result = store[randKey];
      addSelected(result);
    }
    return result;
  };

  const getById = (id) => id ? (store[id] ?? null) : null;
  const getRandomKey = () => getRandomInt(1, idSeq.currentValue());
  const getRandom = () => store[getRandomKey()];
  const getRandomBatch = (batchCount) => {
    batchCount ??= idSeq.currentValue();
    const batch = [];
    const batchKeys = [];
    const getRandKey = () => {
      let randKey = getRandomKey();
      while (batchKeys.includes(randKey)) {
        randKey = getRandomKey();
      }
      return randKey;
    };
    while (
      batchCount <= idSeq.currentValue() &&
      batch.length < batchCount &&
      batch.length < idSeq.currentValue()
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

const installEntityDocument = (factory, length) => {
  const idSeq = createSequence();
  const store = Array.from({length}).reduce(
    (document) => {
      const id = idSeq.nextValue();
      document[id] = factory(id);
      return document;
    },
    {}
  );
  return createDocument(store, idSeq);
};
const entityDocumentFromArray = (dataArray) => installEntityDocument((id) => dataArray[id - 1], dataArray.length);
export {
  entityDocumentFromArray,
  installEntityDocument,
};
