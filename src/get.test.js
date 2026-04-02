import get from './get.js';

describe('get.js testit', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }] };

  test('hakee arvon polun perusteella', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
  });

  test('palauttaa oletusarvon jos polkua ei löydy', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default');
  });
});