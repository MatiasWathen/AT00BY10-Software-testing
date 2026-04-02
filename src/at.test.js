import at from './at.js';

describe('at.js testit', () => {
  test('poimii arvot tietyistä poluista', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    expect(at(object, ['a[0].b.c', 'a[1]'])).toEqual([3, 4]);
  });
});