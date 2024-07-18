const INVOICE_NUMBER_COLUMN_POSITION = 1;
const GROSS_COLUMN_POSITION = 2;
const NET_COLUMN_POSITION = 3;
const IVA_COLUMN_POSITION = 4;
const IGIC_COLUMN_POSITION = 5;
const CIF_COLUMN_POSITION = 7;
const NIF_COLUMN_POSITION = 8;
const EMPTY_VALUE = '';
export class CsvFilter {
  private constructor(private readonly lines: string[]) {}

  static create(lines: string[]) {
    if (lines.length === 1) {
      throw new Error('No header found');
    }
    return new CsvFilter(lines);
  }

  get filteredLines() {
    const header = this.header;
    const rows = this.validateInvoicesNumber(this.rows);
    const rowsFiltered = rows.filter(row => {
      const cells = row.split(',');
      return (
        this.hasValidTaxesCombination(cells) &&
        this.hasCorrectNetCalculation(cells) &&
        this.hasValidInfoCombination(cells)
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

  private hasValidTaxesCombination(cells) {
    return (
      cells[IVA_COLUMN_POSITION] === EMPTY_VALUE ||
      cells[IGIC_COLUMN_POSITION] === EMPTY_VALUE
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

  private hasValidInfoCombination(cells) {
    return (
      cells[CIF_COLUMN_POSITION] === EMPTY_VALUE ||
      cells[NIF_COLUMN_POSITION] === EMPTY_VALUE
    );
  }

  private validateInvoicesNumber(rows) {
    const invoicesNumberCount = {};
    rows.forEach(row => {
      const cells = row.split(',');
      const invoiceNumber = cells[INVOICE_NUMBER_COLUMN_POSITION];
      invoicesNumberCount[invoiceNumber] =
        (invoicesNumberCount[invoiceNumber] || 0) + 1;
    });
    return rows.filter(row => {
      const cells = row.split(',');
      return (
        invoicesNumberCount[cells[INVOICE_NUMBER_COLUMN_POSITION]] ===
        1
      );
    });
  }
}
