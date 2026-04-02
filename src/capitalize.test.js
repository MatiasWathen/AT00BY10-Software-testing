import capitalize from './capitalize.js';

describe('capitalize.js testit', () => {
  test('muuttaa pienen etukirjaimen isoksi', () => {
    expect(capitalize('kissa')).toBe('Kissa');
  });
  
  test('korjaa kokonaan ison sanan', () => {
    expect(capitalize('KOIRA')).toBe('Koira');
  });
});