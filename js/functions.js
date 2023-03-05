const isShorterThan = (expectation, length) => (expectation.toString().length <= length);


const isPalindrome = (expectation) => {
  const comparable = expectation.toString().toLowerCase().replaceAll(' ', '');
  return comparable === comparable.split('').reverse().join('');
};

const extractNumber = (expectation) => parseInt(expectation.toString().replaceAll(/\D/gm, ''), 10);

const padStart = (stringSrc, requestedLength, pad) => {
  const targetLength = requestedLength - stringSrc.length;
  let result = stringSrc;
  if (targetLength > 0) {
    const repeatedPartial = pad.slice(0, targetLength % pad.length);
    const repeated = pad.repeat(targetLength / pad.length);
    result = repeatedPartial + repeated + stringSrc;
  }
  return result;
};

export {
  isShorterThan,
  isPalindrome,
  extractNumber,
  padStart
};
