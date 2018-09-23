import { palindromizeBits as palindromize } from "../1-4-palindrome-permutation";

describe('Chapter 1.4: Palindrome Permutation', () => {
  it('should return true when string is a palindrome', () => {
    const result = palindromize('Tact Coa');
    
    expect(result).toBe(true);
  });

  it('should return false when string has too odd numbers', () => {
    const result = palindromize('Tact Coaa');
    
    expect(result).toBe(false);
  });

  it('should return false when string is empty', () => {
    const result = palindromize('');
    
    expect(result).toBe(false);
  });

  it('should return false when string is single space', () => {
    const result = palindromize(' ');
    
    expect(result).toBe(false);
  });

  // TODO: Edge case to handle non a-z input
});
