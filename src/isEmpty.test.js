import isEmpty from './isEmpty.js';

describe('isEmpty.js testit', () => {
  test('tunnistaa tyhjät asiat', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(1)).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
  });

  test('tunnistaa ettei täysi lista ole tyhjä', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty('abc')).toBe(false);
  });
});