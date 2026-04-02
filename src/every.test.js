import every from './every.js';

describe('every.js testit', () => {
  test('palauttaa true jos kaikki täsmää', () => {
    expect(every([true, 1, 'yes'], Boolean)).toBe(true);
  });

  test('palauttaa false jos jokin ei täsmää', () => {
    expect(every([true, 1, null], Boolean)).toBe(false);
  });
});