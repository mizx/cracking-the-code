/**
 * Space: O(n)
 * Time: O(n^2) because of map
 */
export const palindromize = (input: string) => {
  input = input.toLowerCase();
  const map = new Map();
  let charsCount = 0;

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === ' ') {
      continue;
    }
    charsCount += 1;
    const val = map.get(char) || 0;
    map.set(char, val + 1);
  }

  if (charsCount === 0) {
    return false;
  }
  const isOdd = Boolean(charsCount % 2);

  // based on character lengths, can rule out if its NOT a palindrome

  if (isOdd) {
      // we expect all other digits to be even
    let hasFoundOdd = false;
    for (let [key, count] of map.entries()) {
        if (count % 2) {
          if (!hasFoundOdd) {
              hasFoundOdd = true
        } else {
            // fuck, too many odds
            return false;
        }
      }
    }
  } else {
      // its even
    // all chars must have even count
    for (let [key, count] of map.entries()) {
        if (count % 2) {
          return false;
      }
    }
  }

  return true;
}

export const palindromizeBits = (input: string) => {
  input = input.toLowerCase();
  let bitVector = 0;
  let charsCount = 0;
  const base = 'a'.charCodeAt(0);

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const code = char.charCodeAt(0) - base;

    if (char === ' ') {
      continue;
    }
    charsCount += 1;
    bitVector ^= 1 << code;
  }

  if (charsCount === 0) {
    return false;
  }

  return bitVector === 0 || (bitVector & (bitVector - 1)) == 0;
}
