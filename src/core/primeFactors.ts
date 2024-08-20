export const primeFactorsOf = (number: number): number[] => {
  const factors: number[] = [];

  // Check for number of 2s that divide number
  while (number % 2 === 0) {
    factors.push(2);
    number = number / 2;
  }

  // Number must be odd at this point, so we can skip even numbers
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    // While i divides number, add i and divide number
    while (number % i === 0) {
      factors.push(i);
      number = number / i;
    }
  }

  // This condition is to handle the case when number is a prime number
  // greater than 2
  if (number > 2) {
    factors.push(number);
  }

  return factors;
};
