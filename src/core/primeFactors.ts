export const primeFactorsOf = (number: number): number[] => {
  const quantityOfTwos = Math.floor(number / 2);
  return new Array(quantityOfTwos).fill(2);
};
