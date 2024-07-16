const IVA_COLUMN_POSITION = 4;
const IGIC_COLUMN_POSITION = 5;
const EMPTY_VALUE = '';
export class CsvFilter {
  private constructor(private readonly lines: string[]) {}

  static create(lines: string[]) {
    return new CsvFilter(lines);
  }

  get filteredLines() {
    return this.lines.filter((line, index) => {
      const cells = line.split(',');
      return index !== 0 ? bothTaxesWithValues(cells) : true;
    });
  }
}

const bothTaxesWithValues = cells =>
  (cells[IVA_COLUMN_POSITION] === EMPTY_VALUE &&
    cells[IGIC_COLUMN_POSITION] !== EMPTY_VALUE) ||
  (cells[IGIC_COLUMN_POSITION] === EMPTY_VALUE &&
    cells[IVA_COLUMN_POSITION] !== EMPTY_VALUE);
