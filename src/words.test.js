//Testataan sanojen poimiminen merkkijonoista.
import words from './words.js';

describe('words.js testit', () => {
  //Testataan oletustoimintaa joka erottaa sanat toisistaan ja jättää erikoismerkit pois.
  test('pilkkoo lauseen sanoiksi', () => { 
    expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
  });
  //Testataan että sanojen poiminta toimii halutulla tavalla myös säännöllisten lausekkeiden kanssa.
  test('toimii regexin kanssa', () => { 
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles']);
  });
});