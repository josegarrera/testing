import { primeFactorsOf } from '../core/primeFactors';
describe('Prime Factors', () => {
  it('when 2 is passed it should return [2]', () => {
    expect(primeFactorsOf(2)).toMatchObject([2]);
  });
  it('when 4 is passed it should return [2,2]', () => {
    expect(primeFactorsOf(4)).toMatchObject([2, 2]);
  });
  it('when 6 is passed it should return [2,2,2]', () => {
    expect(primeFactorsOf(6)).toMatchObject([2, 2, 2]);
  });
  it('when 3 is passed it should return [3]', () => {
    expect(primeFactorsOf(3)).toMatchObject([3]);
  });
  it('when 9 is passed it should return [3,3]', () => {
    expect(primeFactorsOf(9)).toMatchObject([3, 3]);
  });
});
