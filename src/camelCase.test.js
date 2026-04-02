import camelCase from './camelCase.js';

describe('camelCase.js testit', () => {
  test.skip('muuttaa lauseen camelCase-muotoon', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar');
    expect(camelCase('--foo-bar--')).toBe('fooBar');
    expect(camelCase('__FOO_BAR__')).toBe('fooBar');
  });
});