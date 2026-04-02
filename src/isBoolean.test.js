import isBoolean from './isBoolean.js';

describe('isBoolean.js testit', () => {
  test('tunnistaa totuusarvot', () => {
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(true)).toBe(true);
  });

  test('tunnistaa ettei muu arvo ole boolean', () => {
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(0)).toBe(false);
  });
});