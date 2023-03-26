import {createSequnce} from './sequnce.js';
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

  const getRandom = () => store[getRandomInt(1, idSeq.currentValue())];
  const getRandomBatch = (batchCount) => {
    const batch = [];
    while (batch.length < batchCount && batch.length < idSeq.currentValue()) {
      batch.push(getRandom());
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
    getRandom,
    getRandomBatch
  };
};

const installEntityDocument = (factory, length) => {
  const idSeq = createSequnce();
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
