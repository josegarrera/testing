import { CsvFilter } from '../core/csvFilter';
describe('CSV Filter', () => {
  it('allows correct lines only', () => {
    const header =
      'Num_factura, Fecha, Bruto, Neto, IVA, IGIC, Concepto, CIF_cliente, NIF_cliente';
    const invoiceLine =
      '1,02/05/2021,1000,790,21,,ACER Laptop,B76430134,';
    const csvFilter = CsvFilter.create([header, invoiceLine]);
    const result = csvFilter.filteredLines;
    expect(result).toEqual([header, invoiceLine]);
  });

  it('removes lines with both IVA and IGIC with values', () => {
    const header =
      'Num_factura, Fecha, Bruto, Neto, IVA, IGIC, Concepto, CIF_cliente, NIF_cliente';
    const invoiceLine =
      '1,02/05/2021,1000,790,21,20,ACER Laptop,B76430134,';
    const csvFilter = CsvFilter.create([header, invoiceLine]);
    const result = csvFilter.filteredLines;
    expect(result).toEqual([header]);
  });

  it('removes lines with wrong net value calculation', () => {
    const header =
      'Num_factura, Fecha, Bruto, Neto, IVA, IGIC, Concepto, CIF_cliente, NIF_cliente';
    const invoiceLine =
      '1,02/05/2021,1000,780,21,,ACER Laptop,B76430134,';
    const csvFilter = CsvFilter.create([header, invoiceLine]);
    const result = csvFilter.filteredLines;
    expect(result).toEqual([header]);
  });

  it('removes lines with both CIF and NIF with values', () => {
    const header =
      'Num_factura, Fecha, Bruto, Neto, IVA, IGIC, Concepto, CIF_cliente, NIF_cliente';
    const invoiceLine =
      '1,02/05/2021,1000,790,21,,ACER Laptop,B76430134,1234';
    const csvFilter = CsvFilter.create([header, invoiceLine]);
    const result = csvFilter.filteredLines;
    expect(result).toEqual([header]);
  });

  it('removes lines with the same invoice number', () => {
    const header =
      'Num_factura, Fecha, Bruto, Neto, IVA, IGIC, Concepto, CIF_cliente, NIF_cliente';
    const invoiceLines = [
      '1,02/05/2021,1000,790,21,,ACER Laptop,B76430134,',
      '1,02/05/2021,1000,790,21,,ACER Laptop,,1234',
    ];
    const csvFilter = CsvFilter.create([header, ...invoiceLines]);
    const result = csvFilter.filteredLines;
    expect(result).toEqual([header]);
  });
});
