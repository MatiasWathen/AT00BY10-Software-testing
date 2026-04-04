//Testataan arvojen yhdistäminen yhteen tulokseen.
import reduce from './reduce.js';

describe('reduce.js testit', () => {
  //Testataan taulukon lukujen summaaminen perustoiminnallisuutena.
  test('laskee taulukon summan', () => {  
    expect(reduce([1, 2], (sum, n) => sum + n, 0)).toBe(3);
  });
  //Testataan monimutkaisempaa objektin käsittelyä jossa avaimet ryhmitellään niiden arvojen mukaan.
  test('toimii objektin kanssa', () => {  
    const result = reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
      (result[value] || (result[value] = [])).push(key);
      return result;
    }, {});
    expect(result).toEqual({ '1': ['a', 'c'], '2': ['b'] });
  });
});