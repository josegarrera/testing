import { wordWrapper } from '../core/wordWrapper';
describe('A word wrapper', () => {
  it('does nothing when the input is nothing', () => {
    const input = '';
    const width = 5;
    expect(wordWrapper(input, width)).toBe(input);
  });
});
