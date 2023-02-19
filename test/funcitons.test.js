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
  })
});


describe('numberExtract', () => {
  it('academy expectations', () => {
    expect(numberExtract('2023 год')).toBe(2023);
    expect(numberExtract('ECMAScript 2022')).toBe(2022);
    expect(numberExtract('1 кефир, 0.5 батона')).toBe(105);
    expect(numberExtract('а я томат')).toBeNaN();
    expect(numberExtract(2023)).toBe(2023);
    expect(numberExtract(-1)).toBe(1);
    expect(numberExtract(1.5)).toBe(15);
  })
});



describe('stringPad', () => {
  it('academy expectations', () => {
    expect(stringPad('1', 2, '0')).toBe('01');
    expect(stringPad('1', 4, '0')).toBe('0001');
    expect(stringPad('q', 4, 'werty')).toBe('werq');
    expect(stringPad('q', 4, 'we')).toBe('wweq');
    expect(stringPad('qwerty', 4, '0')).toBe('qwerty');
  })
});
