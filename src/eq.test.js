import eq from './eq.js';

describe('eq.js testit', () => {
  test('tunnistaa samat luvut', () => {
    expect(eq(1, 1)).toBe(true);
  });
  
  test('tunnistaa eri tekstit', () => {
    expect(eq('omena', 'appelsiini')).toBe(false);
  });
});