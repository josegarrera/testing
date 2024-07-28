import { factorialOf } from '../core/factorial';
describe('Factorial of a number', () => {
  it('should return 1 if the number is 0', () => {
    const number: number = 0;
    expect(factorialOf(number)).toBe(1);
  });

  it('should return 1 if the number is 1', () => {
    const number: number = 1;
    expect(factorialOf(number)).toBe(1);
  });

  it('should return 120 if the number is 5', () => {
    const number: number = 5;
    expect(factorialOf(number)).toBe(120);
  });

  it('should return 720 if the number is 6', () => {
    const number: number = 6;
    expect(factorialOf(number)).toBe(720);
  });
});
