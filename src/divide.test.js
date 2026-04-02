import divide from './divide.js';

describe('divide.js testit', () => {
  test.skip('jakaa luvun 6 luvulla 2, tuloksen pitäisi olla 3', () => {
    expect(divide(6, 2)).toBe(3);
  });

  test.skip('jakolasku nollalla', () => {
    expect(divide(6, 0)).toBe(Infinity); 
  });
});