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
  const length = targetLength - stringSrc.length;
  if(targetLength > 0){
    let appendix = '';
    let counter = 0;
    const appendable = Array.from({length}).reduce((res, currentVal, currentIndex) =>{
      appendix += pad[counter];
      counter++;
      if(counter > pad.length - 1){
        counter = 0;
        res.unshift(appendix);
        appendix = '';
      } else if(currentIndex === length - 1 && appendix.length !== 0){
        res.unshift(appendix);
      }
      return res;
    },[]);
    result = appendable.join('') + result;
  }
  return result;
}
