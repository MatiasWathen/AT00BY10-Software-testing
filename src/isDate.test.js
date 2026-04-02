import isDate from './isDate.js';

describe('isDate.js testit', () => {
  test('tunnistaa päivämäärän', () => {
    expect(isDate(new Date)).toBe(true);
  });

  test('tunnistaa ettei merkkijono ole päivämäärä', () => {
    expect(isDate('Mon April 23 2012')).toBe(false);
  });
});