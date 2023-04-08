const intSequence = function* () {
  let seqHead = 0;
  while (true) {
    yield seqHead;
    seqHead++;
  }
};
const createSequence = (sequence) => {
  const seqReg = [];
  let seqHead = 0;

  const nextValue = () => {
    seqHead = sequence.next().value;
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
const createIntSequence = () => createSequence(intSequence());
export {
  createIntSequence as createSequence
};
