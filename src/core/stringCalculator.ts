export const stringCalculator = (
  expressionToCalculate: string | null
) => {
  if (expressionToCalculate === null) return 0;
  let separator = ',';
  if (expressionToCalculate.startsWith('/')) {
    separator = expressionToCalculate[2];
    expressionToCalculate = expressionToCalculate.slice(4);
  }
  const sum = expressionToCalculate
    .split(separator)
    .map(stringNumber => Number(stringNumber))
    .filter(el => !Number.isNaN(el))
    .reduce((prev, curr) => prev + curr, 0);
  return Number(sum);
};
