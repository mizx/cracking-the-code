import { checkPermutationArray as checkPermutation } from "../1-2-check-permutation";

describe('Chapter 1.2: Check Permutation', () => {
  it('should return true when given two inputs that are permutations', () => {
    const result = checkPermutation('cat', 'act');

    expect(result).toBe(true);
  });

  it('should return false when inputs are of different lengths', () => {
    const result = checkPermutation('tes', 'test');

    expect(result).toBe(false);
  });

  it('should return false when two inputs are not permutations', () => {
    const result = checkPermutation('test', 'fail');

    expect(result).toBe(false);
  });
});
