export function toPascalCase(text: string): string {
  const spacesAndDashesRegex = /[ _-]/gi;
  const wordsList = text.split(spacesAndDashesRegex);
  const pascalCaseWordsList = wordsList.map(
    word => word.substring(0, 1).toUpperCase() + word.substring(1)
  );
  return pascalCaseWordsList.join('');
}
