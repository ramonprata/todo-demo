import { getRandomIndex } from '../generalUtils';

describe('Testes on generalUtils', () => {
  describe('Testing getRandomImage', () => {
    it('should return a number between 0 - 3 ', () => {
      const res = getRandomIndex(3);
      expect(res).toBeGreaterThan(-1);
      expect(res).toBeLessThan(3);
    });
  });
});
