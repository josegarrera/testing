const MIN_QUANTITY_OF_CHARACTERS = 6;
const INDEX_OF_NOT_FOUND = -1;

export const passwordValidator = (password: string) => {
  return (
    containsNumber(password) &&
    hasSixCharactersOrMore(password) &&
    containsUppercase(password) &&
    containsLowercase(password) &&
    containsUnderscore(password)
  );
};

const containsNumber = (password: string): boolean =>
  /.*\d.*/.test(password);

const hasSixCharactersOrMore = (password: string): boolean =>
  password.length >= MIN_QUANTITY_OF_CHARACTERS;

const containsUppercase = (password: string): boolean =>
  /.*[A-Z].*/.test(password);

const containsLowercase = (password: string): boolean =>
  /.*[a-z].*/.test(password);

const containsUnderscore = (password: string): boolean =>
  password.includes('_');
