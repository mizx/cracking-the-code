import { compressSolution as stringCompression } from '../1-6-string-compression';

describe('Chapter 1.3: String Compression', () => {
  it('should return compressed string', () => {
    const input = 'aabcccccaaa';
    const expected = 'a2b1c5a3';
    const result = stringCompression(input);

    expect(result).toEqual(expected);
  });

  it('should return input if compressed string has longer length', () => {
    const input = 'abc';
    const expected = 'abc'; // not a1b1c1
    const result = stringCompression(input);

    expect(result).toEqual(expected);
  });

  it('works with double digit counts', () => {
    const input = 'aaaaaaaaaaab';
    const expected = 'a11b1';
    const result = stringCompression(input);

    expect(result).toEqual(expected);
  });
});
