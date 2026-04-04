//Testataan elementtien poistaminen taulukon alusta.
import drop from './drop.js';

describe('drop.js testit', () => {     
  //Testataan oletustoiminta (poistetaan 1 elementti).                     
  test('pudottaa ensimmäisen elementin oletuksena', () => {   
    expect(drop([1, 2, 3])).toEqual([2, 3]);
  });
  //Testataan useamman elementin poistaminen määritetyllä määrällä.
  test('pudottaa kaksi ensimmäistä elementtiä', () => {       
    expect(drop([1, 2, 3], 2)).toEqual([3]);
  });
});