import { average, sum } from '../stats';

const numbers = [1, 2, 3];

describe('Stats should', () => {
  it('calculates the sum of all elements of the array', () => {
    const result = sum(numbers);
    const expected = 6;
    expect(expected).toBe(result);
  });

  it('calculates the average of all elements of the array', () => {
    const result = average(numbers);
    const expected = 2;
    expect(expected).toBe(result);
  });
});
