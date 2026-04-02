import slice from './slice.js';

describe('slice.js testit', () => {
  test('leikkaa taulukon alusta', () => {
    const array = [1, 2, 3, 4];
    expect(slice(array, 2)).toEqual([3, 4]);
  });
});