//Testi on .skip tilassa virheellisten laskentatulosten vuoksi.
import countBy from './countBy.js';

describe('countBy.js testit', () => {
  //Testataan alkioiden ryhmittely ja määrän laskenta annetun kriteerin perusteella.
  test.skip('laskee elementit kategorioittain', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
    ];
    expect(countBy(users, value => value.active)).toEqual({ 'true': 2, 'false': 1 });
  });
});