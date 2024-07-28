import { factorialOf } from '../core/factorial';
describe('Factorial of a number', () => {
  it('should return 1 if the number is 0', () => {
    const number: number = 0;
    expect(factorialOf(number)).toBe(1);
  });
});
