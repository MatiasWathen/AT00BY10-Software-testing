//Testataan tyhjyyden tarkistus eri tietotyypeille.
import isEmpty from './isEmpty.js';

describe('isEmpty.js testit', () => {
  //Testataan useita eri tyhjiä arvoja (esmes null, luvut, tyhjät rakenteet).
  test('tunnistaa tyhjät asiat', () => {  
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(1)).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
  });
  //Testataan että täydet kokoelmat kuten taulukko tai merkkijono eivät ole tyhjiä.
  test('tunnistaa ettei täysi lista ole tyhjä', () => { 
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty('abc')).toBe(false);
  });
});