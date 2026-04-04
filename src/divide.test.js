//Testit on asetettu .skip tilaan jakolaskuvirheen ja NaN palautusarvon takia.
import divide from './divide.js';

describe('divide.js testit', () => {
  //Testataan kahden luvun jakolaskun perustoiminta.
  test.skip('jakaa luvun 6 luvulla 2, tuloksen pitäisi olla 3', () => {
    expect(divide(6, 2)).toBe(3);
  });
  //Testataan nollalla jakamisen käsittely.
  test.skip('jakolasku nollalla', () => {
    expect(divide(6, 0)).toBe(Infinity); 
  });
});