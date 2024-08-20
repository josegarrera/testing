import { primeFactorsOf } from '../core/primeFactors';
describe('Prime Factors', () => {
  it('when 2 is passed it should return [2]', () => {
    expect(primeFactorsOf(2)).toMatchObject([2]);
  });
  it('when 4 is passed it should return [2,2]', () => {
    expect(primeFactorsOf(4)).toMatchObject([2, 2]);
  });
  it('when 8 is passed it should return [2,2,2]', () => {
    expect(primeFactorsOf(8)).toMatchObject([2, 2, 2]);
  });
  it('when 3 is passed it should return [3]', () => {
    expect(primeFactorsOf(3)).toMatchObject([3]);
  });
  it('when 9 is passed it should return [3,3]', () => {
    expect(primeFactorsOf(9)).toMatchObject([3, 3]);
  });
  it('when 6 is passed it should return [2,3]', () => {
    expect(primeFactorsOf(6)).toMatchObject([2, 3]);
  });
  it('when 25 is passed it should return [5,5]', () => {
    expect(primeFactorsOf(25)).toMatchObject([5, 5]);
  });
  it('when 1155 is passed it should return [3,5,7,11]', () => {
    expect(primeFactorsOf(1155)).toMatchObject([3, 5, 7, 11]);
  });
});
