import map from './map.js';

describe('map.js testit', () => {
  test('tuplaa taulukon arvot', () => {
    const square = (n) => n * n;
    expect(map([4, 8], square)).toEqual([16, 64]);
  });
});