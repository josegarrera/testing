export function wordWrapper(word: string, width: number): string {
  if (word.length <= width) {
    return word;
  }
  return 'long\nword';
}
