//Testataan eri tyyppisten numeroiden muunnos kokonaisluvuiksi.
import toInteger from './toInteger.js';

describe('toInteger.js testit', () => {
  //Testataan että sekä liukuluvut että merkkijonomuotoiset desimaalit pyöristetään oikein alaspäin.
  test('muuttaa desimaalin kokonaisluvuksi', () => {
    expect(toInteger(3.2)).toBe(3); 
    expect(toInteger('3.2')).toBe(3);
  });
});