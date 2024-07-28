export const factorialOf = (number: number): number => {
  let factorial: number = 1;
  for (let i = number; i > 0; i--) {
    factorial = factorial * i;
  }
  return factorial;
};
