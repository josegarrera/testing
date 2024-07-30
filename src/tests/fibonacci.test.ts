import { fibonacciOf } from '../core/fibonacci';
describe('Fibonacci Number', () => {
  it('should return 0 when the input is 0', () => {
    expect(fibonacciOf(0)).toBe(0);
  });
});
