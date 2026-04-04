//Testataan matemaattinen pyöristys ylöspäin.
import ceil from './ceil.js';

describe('ceil.js testit', () => {
  //Testataan peruspyöristys lähimpään kokonaislukuun.
  test('pyöristää luvun 4.006 ylöspäin', () => {
    expect(ceil(4.006)).toBe(5);
  });
});