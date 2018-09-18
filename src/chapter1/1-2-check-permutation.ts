/**
 * Given two strings, write a method to decide if one
 * is a permutation of the other.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export const checkPermutation = (input1: string, input2: string) => {
  if (input1.length !== input2.length) {
    return false;
  }
  const map = new Map<string, number>();
  
  for (let i = 0; i < input1.length; i++) {
    const char1 = input1[i];
    const char2 = input2[i];

    if (char1 === char2) {
      continue;
    }

    if (map.has(char1)) {
      const value = map.get(char1)! + 1;

      if (value === 0) {
        map.delete(char1);
      } else {
        map.set(char1, value);
      }
    } else {
      map.set(char1, 1);
    }


    if (map.has(char2)) {
      const value = map.get(char2)! - 1;

      if (value === 0) {
        map.delete(char2);
      } else {
        map.set(char2, value);
      }
    } else {
      map.set(char2, -1);
    }

    
  }

  if (map.size) {
    return false;
  }

  return true;
}

/**
 * Time: O(n)
 * Space: O(n)
 */
export const checkPermutationArray = (input1: string, input2: string) => {
  if (input1.length !== input2.length) {
    return false;
  }

  const characters = Array.from({ length: 128 }, (v, k) => 0);

  for (let i = 0; i < input1.length; i++) {
    characters[input1.charCodeAt(i)]++;
  }

  for (let i = 0; i < input2.length; i++) {
    const charCode = input2.charCodeAt(i);

    characters[charCode]--;

    if (characters[charCode] < 0) {
      return false;
    }
  }

  return true;
}
