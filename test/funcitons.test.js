describe('isLessThan', () => {
  it('academy expectations', () => {
    expect(isLessThan('проверяемая строка', 20)).toBeTruthy();
    expect(isLessThan('проверяемая строка', 18)).toBeTruthy();
    expect(isLessThan('проверяемая строка', 10)).toBeFalsy();
  })
});


describe('isPalindrome', () => {
  it('academy expectations', () => {
    expect(isPalindrome('топот')).toBeTruthy();
    expect(isPalindrome('ДовОд')).toBeTruthy();
    expect(isPalindrome('Кекс')).toBeFalsy();
    expect(isPalindrome('Лёша на полке клопа нашёл ')).toBeTruthy();
    expect(isPalindrome(1221)).toBeTruthy();
    expect(isPalindrome(1211)).toBeFalsy();
  })
});


describe('numberExtract', () => {
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



describe('stringPad', () => {
  it('academy expectations', () => {
    expect(padString('1', 2, '0')).toBe('01');
    expect(padString('1', 4, '0')).toBe('0001');
    expect(padString('q', 4, 'werty')).toBe('werq');
    expect(padString('q', 4, 'we')).toBe('wweq');
    expect(padString('qwerty', 4, '0')).toBe('qwerty');
  })
});
