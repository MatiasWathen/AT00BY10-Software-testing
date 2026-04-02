import chunk from './chunk.js';

describe('chunk.js testit', () => {
  test.skip('paloittelee taulukon oikein', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
  });

  test.skip('käsittelee vajaan viimeisen palan', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
  });
});