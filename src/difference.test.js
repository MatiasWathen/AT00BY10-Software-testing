//Testataan taulukoiden välisen erotuksen laskenta.
import difference from './difference.js';

describe('difference.js testit', () => {
  //Testataan että funktio palauttaa vain ne ensimmäisen taulukon arvot joita ei ole toisessa.
  test('palauttaa erotuksen kahdesta taulukosta', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
  });
});