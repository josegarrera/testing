import { average, sum } from '../statsAsync';

const numbers = [1, 2, 3];

describe('Async stats should', () => {
  it('calculates the sum of all elements of the array async', async () => {
    const result = await sum(numbers);
    const expected = 6;
    expect(expected).toBe(result);
  });

  it('calculates the average of all elements of the array async', async () => {
    const result = await average(numbers);
    const expected = 2;
    expect(expected).toBe(result);
  });
});
