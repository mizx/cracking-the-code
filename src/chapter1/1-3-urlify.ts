/**
 * Time: O(n) 
 * Space: O(1)
 */
export const urlify = (input: string[], trueLength: number) => {
  let spaceCount = 0;

  for (let i = 0; i < trueLength; i++) {
    if (input[i] === ' ') {
      spaceCount++;
    }
  }

  let index = trueLength + spaceCount * 2;

  for (let i = trueLength - 1; i >= 0; i--) {
    if (input[i] === ' ') {
      input[index - 1] = '0';
      input[index - 2] = '2';
      input[index - 3] = '%'
      index -= 3;
    } else {
      input[index - 1] = input[i];
      index -= 1;
    }
  }

  return input.join('');
}
