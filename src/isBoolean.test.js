//Testataan totuusarvojen tunnistus.
import isBoolean from './isBoolean.js';

describe('isBoolean.js testit', () => {
  //Testataan että sekä true että false tunnistetaan booleaneiksi.
  test('tunnistaa totuusarvot', () => { 
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(true)).toBe(true);
  });
  //Testataan etteivät muut tyypit (esmes null tai 0) mene läpi booleaneina.
  test('tunnistaa ettei muu arvo ole boolean', () => { 
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(0)).toBe(false);
  });
});