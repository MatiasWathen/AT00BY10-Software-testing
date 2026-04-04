//Testataan arvojen haku polun perusteella.
import get from './get.js';

describe('get.js testit', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }] };
  //Testataan onnistunut haku sisäkkäisestä rakenteesta.
  test('hakee arvon polun perusteella', () => { 
    expect(get(object, 'a[0].b.c')).toBe(3);
  });
  //Testataan että oletusarvo palautetaan kun polkua ei ole olemassa.
  test('palauttaa oletusarvon jos polkua ei löydy', () => { 
    expect(get(object, 'a.b.c', 'default')).toBe('default');
  });
});