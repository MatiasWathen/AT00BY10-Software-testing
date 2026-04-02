import endsWith from './endsWith.js';

describe('endsWith.js testit', () => {
  test('tunnistaa että teksti loppuu tiettyyn merkkiin', () => {
    expect(endsWith('abc', 'c')).toBe(true);
  });
  test('tunnistaa väärän lopetuksen', () => {
    expect(endsWith('abc', 'b')).toBe(false);
  });
});