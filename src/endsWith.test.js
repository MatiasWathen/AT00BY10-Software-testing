//Testataan merkkijonon loppuosan oikeellisuus.
import endsWith from './endsWith.js';

describe('endsWith.js testit', () => {
  //Testataan että funktio tunnistaa oikean lopetusmerkin.
  test('tunnistaa että teksti loppuu tiettyyn merkkiin', () => {  
    expect(endsWith('abc', 'c')).toBe(true);
  });
  //Testataan että väärä lopetusmerkki palauttaa false.
  test('tunnistaa väärän lopetuksen', () => { 
    expect(endsWith('abc', 'b')).toBe(false);
  });
});