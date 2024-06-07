export function toPascalCase(text: string): string {
  const spacesAndHyphensRegex = /[ _-]/gi;
  const wordsList = text.split(spacesAndHyphensRegex);
  const pascalCaseWordsList = wordsList.map(
    word => word.substring(0, 1).toUpperCase() + word.substring(1)
  );
  return pascalCaseWordsList.join('');
}
