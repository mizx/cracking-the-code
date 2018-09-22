export const stringCompression = (input: string) => {
  let characters = new Array<string>();
  let lastChar: string | undefined;

  for (let i = 0; i < input.length; i++) {
    if (lastChar !== input[i]) {
      characters.push(input[i]);
    } else {
      lastChar = input[i];
    }
  }

  let index = 0;
  let charCount = 1;
  let output = '';

  for (let i = 1; i < input.length; i++) {
    if (input[i] === characters[index]) {
      charCount++;
    } else {
      output += characters[index] + charCount;
      index++;
    }
  }

  return output;
};

export const stringCompressionWhile = (input: string) => {
  let output = '';
  let index = 0;
  let count = 0;

  while (true) {
    const char = input[index];
    
    if (index === input.length - 1) {
      output += char + (count + 1);
      break;
    }


    if (char === input[index + 1]) {
      count++;
    } else {
      output += char + (count + 1);
      count = 0;
    }

    index++;
  }

  return output;
}

/**
 * Time: O(n^2)
 * Space: O(n^2)
 */
export const stringCompressionLookAhead = (input: string) => {
  let output = '';
  let index = 0;

  while (index < input.length) {
    const char = input[index];
    
    // look ahead
    let found = false;
    for (let i = index + 1; i < input.length; i++) {
      if (input[i] !== char) {
        output += char + (i - index);

        if (output.length > input.length) {
          return input;
        }

        index = i;
        found = true;
        break;
      }
    }
    if (!found) {
        output += char + (input.length - index);
        break;
    }
  }

  return output;
};

export const compressSolution = (input: string) => {
  let finalLength = countCompression(input);
  if (finalLength >= input.length) {
    return input;
  }

  // this should be new Array(finalLength) but needs a count
  let compressed = new Array(finalLength);
  let compressedIndex = 0;

  let countConsecutive = 0;
  for (let i = 0; i < input.length; i++) {
    countConsecutive++;
    const char = input.charAt(i);

    if (i + 1 >= input.length || char !== input.charAt(i + 1)) {
      compressed[compressedIndex++] = char;
      compressed[compressedIndex++] = countConsecutive;
      countConsecutive = 0;
    }
  }

  return compressed.join('');
}

const countCompression = (input: string) => {
  let compressedLength = 0;
  let countConsecutive = 0;
  
  for (let i = 0; i < input.length; i++) {
    countConsecutive++;

    if (i + 1 >= input.length || input.charAt(i) !== input.charAt(i + 1)) {
      compressedLength += 1 + countConsecutive.toString().length;
      countConsecutive = 0;
    }
  }

  return compressedLength;
}
