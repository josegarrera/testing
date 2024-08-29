export class ColumnWidth {
  private constructor(private readonly width: number) {}
  static create(width: number) {
    if (width <= 0)
      throw new Error('width must be a positive number');
    return new ColumnWidth(width);
  }
  get value() {
    return this.width;
  }
}

export function wordWrapper(
  word: string | null | undefined,
  width: ColumnWidth
): string {
  if (word === null || word === undefined) return '';
  if (word.length <= width.value) {
    return word;
  }
  const wordTrimmed = word.trim();
  let wordGrouping: string[] = [];
  const characters = wordTrimmed.split('');
  let partialWord = '';
  characters.forEach(char => {
    if (partialWord.length < width.value) {
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
