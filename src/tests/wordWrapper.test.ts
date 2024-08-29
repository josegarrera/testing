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
});
