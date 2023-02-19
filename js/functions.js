function isLessThan(expectation, length){
  return expectation.length <= length;
}


function isPalindrome(expectation){
  const src = expectation.toString().toLowerCase().replaceAll(' ', '');
  return src === src.split('').reverse().join('');
}

function numberExtract(expectation){
  const src = expectation.toString();
  let result = '';
  for(const item of src){
    const parsed = parseInt(item, 10);
    if(!isNaN(parsed)){
      result += parsed;
    }
  }
  return result.length !== 0 ? parseInt(result, 10) : NaN;
}


function stringPad(src, targetLength, padString){
  let result = src;
  targetLength -= src.length;
  if(targetLength > 0){
    const appendable = [];
    let appendix = '';
    let counter = 0;
    while(targetLength > 0){
      appendix += padString[counter];
      targetLength--;
      counter++;
      if(counter > padString.length - 1){
        counter = 0;
        appendable.unshift(appendix);
        appendix = '';
      }
    }
    if(appendix.length !== 0){
      appendable.unshift(appendix);
    }
    result = appendable.join('') + result;
  }
  return result;
}
