import { stringCalculator } from '../core/stringCalculator';
describe('String Calculator Kata', () => {
  it('should return zero as a number if the argument is an empty string', () => {
    const argument = '';

    const calculation = stringCalculator(argument);

    expect(calculation).toBe(0);
  });

  it('should return zero as a number if the argument is null', () => {
    const stringToCalculate = null;

    const calculation = stringCalculator(stringToCalculate);

    expect(calculation).toBe(0);
  });

  it('should return the same number as number if the argument is a string with one number', () => {
    const stringToCalculate = '123';

    const calculation = stringCalculator(stringToCalculate);

    expect(calculation).toBe(123);
  });

  it('should return the sum of numbers if the string has many numbers comma separated', () => {
    const stringToCalculate = '1,2,3';

    const calculation = stringCalculator(stringToCalculate);

    expect(calculation).toBe(6);
  });

  it('should return the sum of the numbers ignoring not numeric characters', () => {
    const stringToCalculate = '1,2,a,3';

    const calculation = stringCalculator(stringToCalculate);

    expect(calculation).toBe(6);
  });

  it('should work with custom separators indicated at the begining of the expression', () => {
    const stringToCalculate = '//./1.2.a.3';

    const calculation = stringCalculator(stringToCalculate);

    expect(calculation).toBe(6);
  });
});
