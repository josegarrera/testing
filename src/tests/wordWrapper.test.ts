import { wordWrapper } from '../core/wordWrapper';
describe('A word wrapper', () => {
  it('does nothing when the input is nothing', () => {
    const input = '';
    const width = 5;
    expect(wordWrapper(input, width)).toBe(input);
  });
  it('returns the same word if the word is smaller than the width', () => {
    const input = 'hello';
    const width = 5;
    expect(wordWrapper(input, width)).toBe(input);
  });
  it('returns the divided word if the width is smaller than the word', () => {
    const word = 'longword';
    const width = 4;
    const expected = 'long\nword';
    expect(wordWrapper(word, width)).toBe(expected);
  });
  it('handles really long words', () => {
    const word = 'reallylongword';
    const width = 4;
    const expected = 'real\nlylo\nngwo\nrd';
    expect(wordWrapper(word, width)).toBe(expected);
  });
  it('ignores empty spaces', () => {
    const word = 'abc def';
    const width = 4;
    const expected = 'abc\ndef';
    expect(wordWrapper(word, width)).toBe(expected);
  });
  it('ignores empty spaces in longer words', () => {
    const word = 'abc def ghi';
    const width = 4;
    const expected = 'abc\ndef\nghi';
    expect(wordWrapper(word, width)).toBe(expected);
  });
  it('adds a new line if the word starts with a space', () => {
    const word = ' abcdf';
    const width = 4;
    const expected = '\nabcd\nf';
    expect(wordWrapper(word, width)).toBe(expected);
  });
  it('returns empty string if null is send', () => {
    const word = null;
    const width = 5;
    const expected = '';
    expect(wordWrapper(word, width)).toBe(expected);
  });
  it('throws exception if it is used a negative width', () => {
    const word = 'hello';
    const width = -5;
    expect(() => wordWrapper(word, width)).toThrow(
      new Error('width must be a positive number')
    );
  });
});
