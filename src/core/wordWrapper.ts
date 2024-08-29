export class ColumnWidth {
  private constructor(private readonly width: number) {}
  static create(width: number) {
    if (width <= 0) {
      throw new Error('width must be a positive number');
    }
    return new ColumnWidth(width);
  }
  get value() {
    return this.width;
  }
}

export class WrappableText {
  private constructor(private readonly text: string) {}
  static create(text: string | null | undefined) {
    if (text == null || text == undefined) {
      text = '';
    }
    return new WrappableText(text);
  }
  get value() {
    return this.text;
  }
}

export function wordWrapper(
  word: WrappableText,
  width: ColumnWidth
): string {
  if (word.value.length <= width.value) {
    return word.value;
  }
  const wordTrimmed = WrappableText.create(word.value.trim());
  let wordGrouping: string[] = [];
  const characters = wordTrimmed.value.split('');
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
  const hasTrailingWhitespace = word.value !== wordTrimmed.value;
  return hasTrailingWhitespace
    ? '\n' + wordGrouping.join('\n')
    : wordGrouping.join('\n');
}
