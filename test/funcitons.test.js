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


describe('isShorterThan', () => {
  it('academy expectations', () => {
    expect(isShorterThan('проверяемая строка', 20)).toBe(true);
    expect(isShorterThan('проверяемая строка', 18)).toBe(true);
    expect(isShorterThan('проверяемая строка', 10)).toBe(false);
  })
  it('custom expecatations', () => {
    expect(isShorterThan(11, 20)).toBe(true);
    expect(isShorterThan(1, 1)).toBe(true);
    expect(isShorterThan(1, 0)).toBe(false);
    expect(isShorterThan('', 0)).toBe(true);
  });
});


describe('isPalindrome', () => {
  it('academy expectations', () => {
    expect(isPalindrome('топот')).toBe(true);
    expect(isPalindrome('ДовОд')).toBe(true);
    expect(isPalindrome('Кекс')).toBe(false);
    expect(isPalindrome('Лёша на полке клопа нашёл ')).toBe(true);
  })
  it('custom expecatations', () => {
    expect(isPalindrome(1221)).toBe(true);
    expect(isPalindrome(1211)).toBe(false);
  })
});


describe('extractNumber', () => {
  it('academy expectations', () => {
    expect(extractNumber('2023 год')).toBe(2023);
    expect(extractNumber('ECMAScript 2022')).toBe(2022);
    expect(extractNumber('1 кефир, 0.5 батона')).toBe(105);
    expect(extractNumber('а я томат')).toBeNaN();
    expect(extractNumber(2023)).toBe(2023);
    expect(extractNumber(-1)).toBe(1);
    expect(extractNumber(1.5)).toBe(15);
  })
});



describe('padStart', () => {
  it('academy expectations', () => {
    expect(padStart('1', 2, '0')).toBe('01');
    expect(padStart('1', 4, '0')).toBe('0001');
    expect(padStart('q', 4, 'werty')).toBe('werq');
    expect(padStart('q', 4, 'we')).toBe('wweq');
    expect(padStart('qwerty', 4, '0')).toBe('qwerty');
  })
});
