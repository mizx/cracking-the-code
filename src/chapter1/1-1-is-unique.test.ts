import { isUnique, isUniqueBits } from "./1-1-is-unique";

describe('Chapter 1.1: Is Unique', () => {
  describe('isUnique()', () => {
    it('should return true', () => {
      const input = 'abc';
      const result = isUnique(input);

      expect(result).toBe(true);
    });

    it('should return false', () => {
      const input = 'abcc';
      const result = isUnique(input);

      expect(result).toBe(false);
    });
  });

  describe('isUniqueBits()', () => {
    it('should return true', () => {
      const input = 'abc';
      const result = isUniqueBits(input);

      expect(result).toBe(true);
    });

    it('should return false', () => {
      const input = 'abcc';
      const result = isUniqueBits(input);

      expect(result).toBe(false);
    });
  });
});
