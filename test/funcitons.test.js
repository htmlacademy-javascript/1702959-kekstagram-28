describe('isLessThan', () => {
  it('academy expections', () => {
    expect(isLessThan('проверяемая строка', 20)).toBeTruthy();
    expect(isLessThan('проверяемая строка', 18)).toBeTruthy();
    expect(isLessThan('проверяемая строка', 10)).toBeFalsy();
  })
});
