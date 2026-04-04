//Testataan summaus eri lukutyypeillä.
import add from './add.js';

describe('add.js testit', () => {
  //Testataan kahden positiivisen kokonaisluvun summa.
  test('laskee yhteen 6 + 4, tuloksen pitäisi olla 10', () => {
    expect(add(6, 4)).toBe(10);
  });
  //Testataan positiivisen ja negatiivisen luvun summa.
  test('laskee yhteen positiivisen ja negatiivisen luvun (-5 + 10 = 5)', () => {
    expect(add(-5, 10)).toBe(5);
  });
});