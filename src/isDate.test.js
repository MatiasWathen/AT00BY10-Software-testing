//Testataan Date objektien tunnistus.
import isDate from './isDate.js';

describe('isDate.js testit', () => {
  //Testataan oikean Date instanssin tunnistaminen.
  test('tunnistaa päivämäärän', () => { 
    expect(isDate(new Date)).toBe(true);  
  });
  //Testataan ettei päivämäärää muistuttava merkkijono mene läpi Date objektina.
  test('tunnistaa ettei merkkijono ole päivämäärä', () => { 
    expect(isDate('Mon April 23 2012')).toBe(false);
  });
});