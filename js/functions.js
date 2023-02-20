const isShorterThan = (expectation, length) => (expectation.toString().length <= length);


const isPalindrome = (expectation) => (
  (expectation = expectation.toString().toLowerCase().replaceAll(' ', '')),
  expectation === expectation.split('').reverse().join('')
);

const extractNumber = (expectation) => parseInt(expectation.toString().replaceAll(/\D/gm, ''), 10);

const padString = (stringSrc, targetLength, pad) => (
  (targetLength -= stringSrc.length),
  targetLength > 0 ? (Array
    .from({length:Math.ceil(targetLength / pad.length)}, () => pad)
    .reduce(
      (resPad, stringPad) => {
        let padBuf = '';
        for(const char of stringPad){
          if(padBuf.length + resPad.length === targetLength){
            break;
          }
          padBuf += char;
        }
        resPad = padBuf + resPad;
        return resPad;
      }, ''
    ) + stringSrc) : stringSrc
);
