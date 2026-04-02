import defaultTo from './defaultTo.js';

describe('defaultTo.js testit', () => {
  test('palauttaa oletusarvon jos arvo on null', () => {
    expect(defaultTo(null, 10)).toBe(10);
  });

  test('palauttaa oletusarvon jos arvo on undefined', () => {
    expect(defaultTo(undefined, 10)).toBe(10);
  });

  test('palauttaa alkuperäisen arvon jos se on validi', () => {
    expect(defaultTo(1, 10)).toBe(1);
  });
});