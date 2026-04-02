import toInteger from './toInteger.js';

describe('toInteger.js testit', () => {
  test('muuttaa desimaalin kokonaisluvuksi', () => {
    expect(toInteger(3.2)).toBe(3);
    expect(toInteger('3.2')).toBe(3);
  });
});