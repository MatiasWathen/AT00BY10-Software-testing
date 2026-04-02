import words from './words.js';

describe('words.js testit', () => {
  test('pilkkoo lauseen sanoiksi', () => {
    expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
  });

  test('toimii regexin kanssa', () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles']);
  });
});