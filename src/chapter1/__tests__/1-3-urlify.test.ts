import { urlify } from "../1-3-urlify";

describe('Chapter 1.3: URLify', () => {
  it('should replace spaces with "%20"', () => {
    const result = urlify('Mr John Smith    '.split(''), 13);
    
    expect(result).toBe('Mr%20John%20Smith');
  });
});
