import drop from './drop.js';

describe('drop.js testit', () => {
  test('pudottaa ensimmäisen elementin oletuksena', () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
  });
  test('pudottaa kaksi ensimmäistä elementtiä', () => {
    expect(drop([1, 2, 3], 2)).toEqual([3]);
  });
});