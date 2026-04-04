//Testataan objektityyppien tunnistus.
import isObject from './isObject.js';

describe('isObject.js testit', () => {
  //Testataan että objektit, taulukot ja funktiot tunnistetaan objekteiksi.
  test('tunnistaa objektit', () => {
    expect(isObject({})).toBe(true);  
    expect(isObject([1, 2, 3])).toBe(true);
    expect(isObject(() => {})).toBe(true);
  });
  //Testataan ettei null pidetä objektina.
  test('tunnistaa ettei null ole objekti', () => { 
    expect(isObject(null)).toBe(false);
  });
});