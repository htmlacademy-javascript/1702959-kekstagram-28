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
