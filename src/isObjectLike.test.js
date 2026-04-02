import isObjectLike from './isObjectLike.js';

describe('isObjectLike.js testit', () => {
  test('tunnistaa objektimaiset asiat', () => {
    expect(isObjectLike({})).toBe(true);
    expect(isObjectLike([1, 2, 3])).toBe(true);
  });
  test('tunnistaa ettei null ole objekti', () => {
    expect(isObjectLike(null)).toBe(false);
  });
});