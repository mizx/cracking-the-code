import { isUnique } from "./1-1-is-unique";

describe('Chapter 1.1: Is Unique', () => {
  it('should have unique input', () => {
    const input = 'abc';
    const result = isUnique(input);

    expect(result).toBe(true);
  });

  it('should not have unique input', () => {
    const input = 'abcc';
    const result = isUnique(input);

    expect(result).toBe(false);
  });
});
