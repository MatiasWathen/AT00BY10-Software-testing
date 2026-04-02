import isObject from './isObject.js';

describe('isObject.js testit', () => {
  test('tunnistaa objektit', () => {
    expect(isObject({})).toBe(true);
    expect(isObject([1, 2, 3])).toBe(true);
    expect(isObject(() => {})).toBe(true);
  });

  test('tunnistaa ettei null ole objekti', () => {
    expect(isObject(null)).toBe(false);
  });
});