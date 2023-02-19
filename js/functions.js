function isLessThan(expectation, length){
  return expectation.length <= length;
}


function isPalindrome(expectation){
  const src = expectation.toString().toLowerCase().replaceAll(' ', '');
  return src === src.split('').reverse().join('');
}
