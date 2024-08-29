export function wordWrapper(
  word: string | null | undefined,
  width: number
): string {
  const isWidthNoPositive = width <= 0;
  if (isWidthNoPositive)
    throw new Error('width must be a positive number');
  if (word === null || word === undefined) return '';
  if (word.length <= width) {
    return word;
  }
  const wordTrimmed = word.trim();
  let wordGrouping: string[] = [];
  const characters = wordTrimmed.split('');
  let partialWord = '';
  characters.forEach(char => {
    if (partialWord.length < width) {
      partialWord = partialWord + char;
    } else {
      wordGrouping.push(partialWord);
      partialWord = char;
    }
  });
  wordGrouping.push(partialWord);
  wordGrouping = wordGrouping.map(word => word.trim());
  const hasTrailingWhitespace = word !== wordTrimmed;
  return hasTrailingWhitespace
    ? '\n' + wordGrouping.join('\n')
    : wordGrouping.join('\n');
}
