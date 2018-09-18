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

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1/8n)?
 */
export const isUniqueBits = (input: string) => {
  // restriction: lowercase a-z
  if (input.length > 26) {
    return false;
  }
  const base = 'a'.charCodeAt(0);
  let checked = 0;

  for (let i = 0; i < input.length; i++) {
    const charCode = input.charCodeAt(i) - base;
    const bit = 1 << charCode;

    if (checked & bit) {
      return false;
    }

    checked |= bit;
  }

  return true;
}
