import { fizzBuzz } from '../core/fizzbuzz';
describe('FizzBuzz kata', () => {
  it('should return a string 1 when the number is 1', () => {
    const number = 1;

    const result = fizzBuzz(number);

    const expected = number.toString();

    expect(result).toBe(expected);
  });

  it('should return a string 2 when the number is 2', () => {
    const number = 2;

    const result = fizzBuzz(number);

    const expected = number.toString();

    expect(result).toBe(expected);
  });

  it('should return fizz when the number is 3', () => {
    const number = 3;

    const result = fizzBuzz(number);

    const expected = 'fizz';

    expect(result).toBe(expected);
  });

  it('should return buzz when the number is 5', () => {
    const number = 5;

    const result = fizzBuzz(number);

    const expected = 'buzz';

    expect(result).toBe(expected);
  });

  it('should return fizzbuzz when the number is 15', () => {
    const number = 15;

    const result = fizzBuzz(number);

    const expected = 'fizzbuzz';

    expect(result).toBe(expected);
  });

  it('should return fizz when the number is divisible only by 3', () => {
    const number = 21;

    const result = fizzBuzz(number);

    const expected = 'fizz';

    expect(result).toBe(expected);
  });

  it('should return buzz when the number is divisible only by 5', () => {
    const number = 50;

    const result = fizzBuzz(number);

    const expected = 'buzz';

    expect(result).toBe(expected);
  });

  it('should return fizzbuzz when the number is divisible by 3 and by 5', () => {
    const number = 30;

    const result = fizzBuzz(number);

    const expected = 'fizzbuzz';

    expect(result).toBe(expected);
  });

  it('should return the number on string format when the number is not divisible by 3 or by 5', () => {
    const number = 67;

    const result = fizzBuzz(number);

    const expected = number.toString();

    expect(result).toBe(expected);
  });
});
