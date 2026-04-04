//Testataan kahden arvon vertailu.
import eq from './eq.js';

describe('eq.js testit', () => {
  //Testataan numeerinen samankaltaisuus.
  test('tunnistaa samat luvut', () => { 
    expect(eq(1, 1)).toBe(true);
  });
  //Testataan että eri merkkijonot tunnistetaan erisuuriksi.
  test('tunnistaa eri tekstit', () => {     
    expect(eq('omena', 'appelsiini')).toBe(false);
  });
});