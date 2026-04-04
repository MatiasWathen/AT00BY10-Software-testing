//Testataan arvojen haku objektirakenteista polkujen avulla.
import at from './at.js';

describe('at.js testit', () => {
  //Testataan että haku toimii sekä sisäkkäisistä objekteista että taulukoista.
  test('poimii arvot tietyistä poluista', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    expect(at(object, ['a[0].b.c', 'a[1]'])).toEqual([3, 4]);
  });
});