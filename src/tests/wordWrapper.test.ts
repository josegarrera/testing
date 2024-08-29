import {
  ColumnWidth,
  wordWrapper,
  WrappableText,
} from '../core/wordWrapper';
describe('The Word Wrap', () => {
  it('empty text does not need to be wrapped', () => {
    expect(
      wordWrapper(WrappableText.create(''), ColumnWidth.create(5))
    ).toMatchObject(WrappableText.create(''));
    expect(
      wordWrapper(WrappableText.create(null), ColumnWidth.create(5))
    ).toMatchObject(WrappableText.create(''));
    expect(
      wordWrapper(
        WrappableText.create(undefined),
        ColumnWidth.create(5)
      )
    ).toMatchObject(WrappableText.create(''));
  });
  it('small text does not need to be wrapped', () => {
    expect(
      wordWrapper(
        WrappableText.create('hello'),
        ColumnWidth.create(5)
      )
    ).toMatchObject(WrappableText.create('hello'));
  });
  it('words are wrapped when do not fit the column width', () => {
    expect(
      wordWrapper(
        WrappableText.create('longword'),
        ColumnWidth.create(4)
      )
    ).toMatchObject(WrappableText.create('long\nword'));
    expect(
      wordWrapper(
        WrappableText.create('reallylongword'),
        ColumnWidth.create(4)
      )
    ).toMatchObject(WrappableText.create('real\nlylo\nngwo\nrd'));
  });
  it('spaces are preferred for wrapping', () => {
    expect(
      wordWrapper(
        WrappableText.create('abc def'),
        ColumnWidth.create(4)
      )
    ).toMatchObject(WrappableText.create('abc\ndef'));
    expect(
      wordWrapper(
        WrappableText.create('abc def ghi'),
        ColumnWidth.create(4)
      )
    ).toMatchObject(WrappableText.create('abc\ndef\nghi'));
    expect(
      wordWrapper(
        WrappableText.create(' abcd'),
        ColumnWidth.create(4)
      )
    ).toMatchObject(WrappableText.create('\nabcd'));
  });
  it('does not allow for negative column width', () => {
    expect(() =>
      wordWrapper(
        WrappableText.create('hello'),
        ColumnWidth.create(-5)
      )
    ).toThrow(new Error('width must be a positive number'));
  });
});
