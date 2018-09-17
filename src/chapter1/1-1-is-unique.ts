export const isUnique = (input: string) => {
  const chars = new Set<string>();

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (chars.has(char)) {
      return false;
    }

    chars.add(char);
  }

  return true;
}
