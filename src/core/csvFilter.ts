const IVA_COLUMN_POSITION = 4;
const IGIC_COLUMN_POSITION = 5;
const EMPTY_VALUE = '';
export class CsvFilter {
  private constructor(private readonly lines: string[]) {}

  static create(lines: string[]) {
    return new CsvFilter(lines);
  }

  get filteredLines() {
    const header = this.header;
    const rows = this.rows;
    const rowsFiltered = rows.filter(row => {
      const cells = row.split(',');
      return this.hasValidTaxCombination(cells);
    });
    return [...header, ...rowsFiltered];
  }

  private get header() {
    return this.lines.filter((line, index) => index === 0);
  }

  private get rows() {
    return this.lines.filter((line, index) => index !== 0);
  }

  private hasValidTaxCombination(cells) {
    return (
      (cells[IVA_COLUMN_POSITION] === EMPTY_VALUE &&
        cells[IGIC_COLUMN_POSITION] !== EMPTY_VALUE) ||
      (cells[IGIC_COLUMN_POSITION] === EMPTY_VALUE &&
        cells[IVA_COLUMN_POSITION] !== EMPTY_VALUE)
    );
  }
}
