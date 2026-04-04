//Testataan oletusarvon palauttaminen puuttuville tiedoille.
import defaultTo from './defaultTo.js';

describe('defaultTo.js testit', () => {
  //Testataan null korvaaminen oletusarvolla.                       
  test('palauttaa oletusarvon jos arvo on null', () => {
    expect(defaultTo(null, 10)).toBe(10);
  });
  //Testataan undefined korvaaminen oletusarvolla.
  test('palauttaa oletusarvon jos arvo on undefined', () => {  
    expect(defaultTo(undefined, 10)).toBe(10);
  });
  //Testataan että valideja arvoja ei korvata oletusarvoilla.
  test('palauttaa alkuperäisen arvon jos se on validi', () => {  
    expect(defaultTo(1, 10)).toBe(1);
  });
});