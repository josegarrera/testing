export function wordWrapper(word: string, width: number): string {
  if (word.length <= width) {
    return word;
  }
  let wordGrouping: string[] = [];
  const characters = word.split('');
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
  return wordGrouping.join('\n');
}
