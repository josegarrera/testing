import { wordWrapper } from '../core/wordWrapper';
describe('The Word Wrap', () => {
  it('empty text does not need to be wrapped', () => {
    expect(wordWrapper('', 5)).toBe('');
    expect(wordWrapper(null, 5)).toBe('');
    expect(wordWrapper(undefined, 5)).toBe('');
  });
  it('small text does not need to be wrapped', () => {
    expect(wordWrapper('hello', 5)).toBe('hello');
  });
  it('words are wrapped when do not fit the column width', () => {
    expect(wordWrapper('longword', 4)).toBe('long\nword');
    expect(wordWrapper('reallylongword', 4)).toBe(
      'real\nlylo\nngwo\nrd'
    );
  });
  it('spaces are preferred for wrapping', () => {
    expect(wordWrapper('abc def', 4)).toBe('abc\ndef');
    expect(wordWrapper('abc def ghi', 4)).toBe('abc\ndef\nghi');
    expect(wordWrapper(' abcd', 4)).toBe('\nabcd');
  });
  it('does not allow for negative column width', () => {
    expect(() => wordWrapper('hello', -5)).toThrow(
      new Error('width must be a positive number')
    );
  });
});
