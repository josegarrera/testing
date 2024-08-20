export const primeFactorsOf = (number: number): number[] => {
  const prime = findSmallestPrime(number);
  const remainder = number / prime;
  return remainder <= 1
    ? [prime]
    : [prime].concat(primeFactorsOf(remainder));
};

const findSmallestPrime = (number: number) => {
  let factor = 2;
  while (number % factor !== 0) {
    ++factor;
  }
  return factor;
};
