export const factorialOf = (number: number): number => {
  if (number < 0)
    throw new Error(
      'negative numbers are not supported on factorial operations'
    );
  let factorial: number = 1;
  for (let i = number; i > 0; i--) {
    factorial = factorial * i;
  }
  return factorial;
};
