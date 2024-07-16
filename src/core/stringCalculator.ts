const nothingToAdd = 0;
const beginingOfConfig = '//';
const endOfConfig = '/';

export const stringCalculator = (
  expressionToCalculate: string | null
) => {
  if (!expressionToCalculate) return nothingToAdd;
  let separator = ',';
  if (expressionToCalculate.startsWith(beginingOfConfig)) {
    separator = getSeparator(
      expressionToCalculate,
      beginingOfConfig,
      endOfConfig
    );
    expressionToCalculate = removeConfigFrom(
      expressionToCalculate,
      endOfConfig
    );
  }
  const sum = expressionToCalculate
    .split(separator)
    .map(getNumber)
    .reduce(sumOfNumbers, 0);
  return sum;
};

const getSeparator = (
  expression: string,
  beginingOfConfig: string,
  endOfConfig: string
) =>
  expression.slice(
    beginingOfConfig.length,
    expression.lastIndexOf(endOfConfig)
  );

const removeConfigFrom = (
  expression: string,
  endOfConfig: string
): string =>
  expression.slice(expression.lastIndexOf(endOfConfig) + 1);

const getNumber = stringNumber => {
  const parsedNumber = Number(stringNumber);
  return isNaN(parsedNumber) ? 0 : Number(stringNumber);
};

const sumOfNumbers = (previousNumber, currentNumber) =>
  previousNumber + currentNumber;
