describe('isLessThan', () => {
  it('academy expections', () => {
    expect(isLessThan('проверяемая строка', 20)).toBeTruthy();
    expect(isLessThan('проверяемая строка', 18)).toBeTruthy();
    expect(isLessThan('проверяемая строка', 10)).toBeFalsy();
  })
});


describe('isPalindrome', () => {
  it('academy expections', () => {
    expect(isPalindrome('топот')).toBeTruthy();
    expect(isPalindrome('ДовОд')).toBeTruthy();
    expect(isPalindrome('Кекс')).toBeFalsy();
    expect(isPalindrome('Лёша на полке клопа нашёл ')).toBeTruthy();
  })
});
