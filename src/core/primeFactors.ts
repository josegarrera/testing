export const primeFactorsOf = (number: number): number[] => {
  const factors: number[] = [];
  number = getEvenFactors(number, factors);
  number = getOddFactors(number, factors);
  handlePrimeNumGreaterTwo(number, factors);
  return factors;
};

const getEvenFactors = (number: number, factors: number[]) => {
  while (number % 2 === 0) {
    factors.push(2);
    number = number / 2;
  }
  return number;
};

const getOddFactors = (number: number, factors: number[]) => {
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    while (number % i === 0) {
      factors.push(i);
      number = number / i;
    }
  }
  return number;
};

const handlePrimeNumGreaterTwo = (
  number: number,
  factors: number[]
) => {
  if (number > 2) {
    factors.push(number);
  }
};
