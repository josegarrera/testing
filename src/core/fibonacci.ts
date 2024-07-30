export const fibonacciOf = (number: number): number => {
  if (number === 0) return 0;
  if (number === 1) return 1;
  let auxiliary1 = 0;
  let auxiliary2 = 1;
  let fibonacciNumber = 0;
  for (let i = 2; i <= number; i++) {
    fibonacciNumber = auxiliary1 + auxiliary2;
    auxiliary1 = auxiliary2;
    auxiliary2 = fibonacciNumber;
  }
  return fibonacciNumber;
};
