/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export const isUnique = (input: string) => {
  if (input.length > 128) {
    return false;
  }
  const chars = new Array(128);

  for (let i = 0; i < input.length; i++) {
    const charCode = input.charCodeAt(i);

    if (chars[charCode]) {
      return false;
    }

    chars[charCode] = true;
  }

  return true;
};
