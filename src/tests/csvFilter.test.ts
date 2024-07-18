import { CsvFilter } from '../core/csvFilter';
describe('CSV Filter', () => {
  const header =
    'Num_factura, Fecha, Bruto, Neto, IVA, IGIC, Concepto, CIF_cliente, NIF_cliente';
  it('allows correct lines only', () => {
    const invoiceLine =
      '1,02/05/2021,1000,790,21,,ACER Laptop,B76430134,';
    const csvFilter = CsvFilter.create([header, invoiceLine]);
    const result = csvFilter.filteredLines;
    expect(result).toEqual([header, invoiceLine]);
  });

  it('removes lines with both IVA and IGIC with values', () => {
    const invoiceLine =
      '1,02/05/2021,1000,790,21,20,ACER Laptop,B76430134,';
    const csvFilter = CsvFilter.create([header, invoiceLine]);
    const result = csvFilter.filteredLines;
    expect(result).toEqual([header]);
  });

  it('removes lines with wrong net value calculation', () => {
    const invoiceLine =
      '1,02/05/2021,1000,780,21,,ACER Laptop,B76430134,';
    const csvFilter = CsvFilter.create([header, invoiceLine]);
    const result = csvFilter.filteredLines;
    expect(result).toEqual([header]);
  });

  it('removes lines with both CIF and NIF with values', () => {
    const invoiceLine =
      '1,02/05/2021,1000,790,21,,ACER Laptop,B76430134,1234';
    const csvFilter = CsvFilter.create([header, invoiceLine]);
    const result = csvFilter.filteredLines;
    expect(result).toEqual([header]);
  });

  it('removes lines with the same invoice number', () => {
    const invoiceLines = [
      '1,02/05/2021,1000,790,21,,ACER Laptop,B76430134,',
      '1,02/05/2021,1000,790,21,,ACER Laptop,,1234',
    ];
    const csvFilter = CsvFilter.create([header, ...invoiceLines]);
    const result = csvFilter.filteredLines;
    expect(result).toEqual([header]);
  });

  it('should return an empty list if empty list as input', () => {
    const csvFilter = CsvFilter.create([]);
    const result = csvFilter.filteredLines;
    expect(result).toEqual([]);
  });

  it('should give an error if you give a one line list because it has no headers', () => {
    const invoiceLine =
      '1,02/05/2021,1000,790,21,,ACER Laptop,B76430134,';
    expect(() => CsvFilter.create([invoiceLine])).toThrow(
      'No header found'
    );
  });

  it('removes lines with none IVA and IGIC with values', () => {
    const invoiceLine =
      '1,02/05/2021,1000,790,,,ACER Laptop,B76430134,';
    const csvFilter = CsvFilter.create([header, invoiceLine]);
    const result = csvFilter.filteredLines;
    expect(result).toEqual([header]);
  });

  it('removes lines if IVA or IGIC has characters in it', () => {
    const invoiceLines = [
      '1,02/05/2021,1000,790,2a1,,ACER Laptop,B76430134,',
      '2,02/05/2021,1000,790,,2b1,ACER Laptop,B76430134,',
    ];
    const csvFilter = CsvFilter.create([header, ...invoiceLines]);
    const result = csvFilter.filteredLines;
    expect(result).toEqual([header]);
  });
});
