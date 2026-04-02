import ceil from './ceil.js';

describe('ceil.js testit', () => {
  test('pyöristää luvun 4.006 ylöspäin', () => {
    expect(ceil(4.006)).toBe(5);
  });
});