import { isUnique, isUniqueBits } from "./1-1-is-unique";

describe('Chapter 1.1: Is Unique', () => {
  describe('isUnique()', () => {
    it('should return true when input does have unique characters', () => {
      const input = 'abc';
      const result = isUnique(input);

      expect(result).toBe(true);
    });

    it('should return false when input does not have unique characters', () => {
      const input = 'abcc';
      const result = isUnique(input);

      expect(result).toBe(false);
    });

    it('should return false when input is larger than character set (ASCII)', () => {
      const input = 'a'.repeat(200);
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
