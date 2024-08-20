import { primeFactorsOf } from '../core/primeFactors';
describe('Prime Factors', () => {
  it('finds the prime composition of the given number', () => {
    expect(primeFactorsOf(2)).toMatchObject([2]);
    expect(primeFactorsOf(2 * 2)).toMatchObject([2, 2]);
    expect(primeFactorsOf(2 * 2 * 2)).toMatchObject([2, 2, 2]);
    expect(primeFactorsOf(3)).toMatchObject([3]);
    expect(primeFactorsOf(3 * 3)).toMatchObject([3, 3]);
    expect(primeFactorsOf(2 * 3)).toMatchObject([2, 3]);
    expect(primeFactorsOf(5 * 5)).toMatchObject([5, 5]);
    expect(primeFactorsOf(11 * 5 * 7 * 3)).toMatchObject([
      3, 5, 7, 11,
    ]);
  });
});
