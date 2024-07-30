import { fibonacciOf } from '../core/fibonacci';
describe('Fibonacci Number', () => {
  it('should return 0 when the input is 0', () => {
    expect(fibonacciOf(0)).toBe(0);
  });

  it('should return 1 when the input is 1', () => {
    expect(fibonacciOf(1)).toBe(1);
  });

  it('should return 2 when the input is 3', () => {
    expect(fibonacciOf(3)).toBe(2);
  });
});
