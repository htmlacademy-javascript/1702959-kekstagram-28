function isShorterThan(expectation, length){
  return expectation.toString().length <= length;
}


function isPalindrome(expectation){
  const src = expectation.toString().toLowerCase().replaceAll(' ', '');
  return src === src.split('').reverse().join('');
}

function extractNumber(expectation){
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


function padString(stringSrc, targetLength, pad){
  let result = stringSrc;
  targetLength -= stringSrc.length;
  if(targetLength > 0){
    const appendable = [];
    let appendix = '';
    let counter = 0;
    while(targetLength > 0){
      appendix += pad[counter];
      targetLength--;
      counter++;
      if(counter > pad.length - 1){
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
