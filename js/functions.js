const isShorterThan = (expectation, length) => (expectation.toString().length <= length);


const isPalindrome = (expectation) => (
  (expectation = expectation.toString().toLowerCase().replaceAll(' ', '')),
  expectation === expectation.split('').reverse().join('')
);

const extractNumber = (expectation) => parseInt(expectation.toString().replaceAll(/\D/gm, ''), 10);

const padStart = (stringSrc, targetLength, pad) => (
  (targetLength -= stringSrc.length),
  targetLength > 0 ?
    (pad.slice(0, targetLength % pad.length) + pad.repeat(targetLength / pad.length) + stringSrc) :
    stringSrc
);
