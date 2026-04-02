import toString from './toString.js';

describe('toString.js testit', () => {
  test('muuttaa luvun merkkijonoksi', () => {
    expect(toString(-0)).toBe('-0');
    expect(toString([1, 2, 3])).toBe('1,2,3');
  });

  test('säilyttää merkkijonon ennallaan', () => {
    expect(toString('abc')).toBe('abc');
  });

  test('käsittelee null ja undefined', () => {
    expect(toString(null)).toBe('');
    expect(toString(undefined)).toBe('');
  });
});