//Testataan taulukon suodatus annettujen kriteerien mukaan.
import filter from './filter.js';

describe('filter.js testit', () => {
  //Testataan objektien suodatusta tietyn ominaisuuden perusteella.
  test('suodattaa taulukon ehtojen mukaan', () => { 
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred',   'active': false }
    ];
    expect(filter(users, ({ active }) => active)).toEqual([{ 'user': 'barney', 'active': true }]);
  });
  //Testataan että tyhjä taulukko palautetaan jos mikään alkio ei täytä ehtoa.
  test('palauttaa tyhjän taulukon jos mikään ei täsmää', () => {  
    expect(filter([1, 2, 3], (n) => n > 10)).toEqual([[]]); 
  });
});