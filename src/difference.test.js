import difference from './difference.js';

describe('difference.js testit', () => {
  test('palauttaa erotuksen kahdesta taulukosta', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
  });
});