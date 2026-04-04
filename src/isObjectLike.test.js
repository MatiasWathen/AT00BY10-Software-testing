//Testataan objektimaisten arvojen tunnistus.
import isObjectLike from './isObjectLike.js'; 

describe('isObjectLike.js testit', () => {
  //Testataan että tavalliset objektit ja taulukot ovat objektimaisia.
  test('tunnistaa objektimaiset asiat', () => { 
    expect(isObjectLike({})).toBe(true);
    expect(isObjectLike([1, 2, 3])).toBe(true);
  });
  //Testataan ettei null ole objektimainen.
  test('tunnistaa ettei null ole objekti', () => {  
    expect(isObjectLike(null)).toBe(false);
  });
});