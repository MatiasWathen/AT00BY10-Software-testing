//Testataan sanan alkukirjaimen normalisointi.
import capitalize from './capitalize.js';

describe('capitalize.js testit', () => {
  //Testataan että pieni alkukirjain muuttuu isoksi.
  test('muuttaa pienen etukirjaimen isoksi', () => {  
    expect(capitalize('kissa')).toBe('Kissa');
  });
  //Testataan että kokonaan isoilla kirjoitettu sana normalisoidaan.
  test('korjaa kokonaan ison sanan', () => {
    expect(capitalize('KOIRA')).toBe('Koira');
  });
});