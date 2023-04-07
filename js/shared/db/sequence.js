const sequence = function* () {
  let seqHead = 0;
  while (true) {
    yield seqHead;
    seqHead++;
  }
};
const createSequence = () => {
  const seqReg = [];
  let seqHead = 0;
  const seq = sequence();

  const nextValue = () => {
    seqHead = seq.next().value;
    seqReg.push(seqHead);
    return seqHead;
  };
  const currentValue = () => seqHead;
  const exists = (val) => seqReg.includes(val);
  return {
    nextValue,
    currentValue,
    exists
  };
};
export {
  createSequence
};
