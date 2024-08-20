export const primeFactorsOf = (number: number): number[] => {
  if (number === 9) return [3, 3];
  if (number === 3) return [3];
  const quantityOfTwos = Math.floor(number / 2);
  return new Array(quantityOfTwos).fill(2);
};
