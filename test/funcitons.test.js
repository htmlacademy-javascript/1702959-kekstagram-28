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



describe('padString', () => {
  it('academy expectations', () => {
    expect(padString('1', 2, '0')).toBe('01');
    expect(padString('1', 4, '0')).toBe('0001');
    expect(padString('q', 4, 'werty')).toBe('werq');
    expect(padString('q', 4, 'we')).toBe('wweq');
    expect(padString('qwerty', 4, '0')).toBe('qwerty');
  })
});
