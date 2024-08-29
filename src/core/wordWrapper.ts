export function wordWrapper(word: string, width: number): string {
  if (word === null) return '';
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
  return word !== wordTrimmed
    ? '\n' + wordGrouping.join('\n')
    : wordGrouping.join('\n');
}
