function isShorterThan(expectation, length){
  return expectation.toString().length <= length;
}


function isPalindrome(expectation){
  const src = expectation.toString().toLowerCase().replaceAll(' ', '');
  return src === src.split('').reverse().join('');
}

function extractNumber(expectation){
  return parseInt(expectation.toString().replaceAll(/\D/gm, ''), 10);
}

function padString(stringSrc, targetLength, pad){
  let result = stringSrc;
  const padLength = targetLength - stringSrc.length;
  if(targetLength > 0){
    result = Array
      .from({length:Math.ceil(padLength / pad.length)}, () => pad)
      .reduce(
        (resPad, stringPad) => {
          let padBuf = '';
          for(const char of stringPad){
            if(padBuf.length + resPad.length === padLength){
              break;
            }
            padBuf += char;
          }
          resPad = padBuf + resPad;
          return resPad;
        }, ''
      ) + result;
  }
  return result;
}
