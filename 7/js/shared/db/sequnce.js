const createSequnce = () => {
  const seqReg = [];
  let seqHead = 0;

  const nextValue = () => {
    seqHead++;
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
  createSequnce
};
