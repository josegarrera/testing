const GROSS_COLUMN_POSITION = 2;
const NET_COLUMN_POSITION = 3;
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
      return (
        this.hasValidTaxCombination(cells) &&
        this.hasCorrectNetCalculation(cells)
      );
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

  private hasCorrectNetCalculation(cells) {
    const gross = Number(cells[GROSS_COLUMN_POSITION]);
    const net = Number(cells[NET_COLUMN_POSITION]);
    const iva = Number(cells[IVA_COLUMN_POSITION]);
    const igic = Number(cells[IGIC_COLUMN_POSITION]);
    const taxes = Math.max((gross * iva) / 100, (gross * igic) / 100);
    const netCalculation = gross - taxes;
    return netCalculation === net;
  }
}
