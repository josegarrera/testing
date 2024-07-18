import { CsvFilter } from '../core/csvFilter';
describe('CSV Filter', () => {
  const header =
    'Num_factura, Fecha, Bruto, Neto, IVA, IGIC, Concepto, CIF_cliente, NIF_cliente';

  it('allows correct lines only', () => {
    const invoiceLine = lineFactory({});
    const csvFilter = CsvFilter.create([header, invoiceLine]);
    const result = csvFilter.filteredLines;
    expect(result).toEqual([header, invoiceLine]);
  });

  it('removes lines with both IVA and IGIC with values', () => {
    const invoiceLine = lineFactory({ igic: '20' });
    const csvFilter = CsvFilter.create([header, invoiceLine]);
    const result = csvFilter.filteredLines;
    expect(result).toEqual([header]);
  });

  it('removes lines with wrong net value calculation', () => {
    const invoiceLine = lineFactory({ net: '780' });
    const csvFilter = CsvFilter.create([header, invoiceLine]);
    const result = csvFilter.filteredLines;
    expect(result).toEqual([header]);
  });

  it('removes lines with both CIF and NIF with values', () => {
    const invoiceLine = lineFactory({ nif: 'AB1234' });
    const csvFilter = CsvFilter.create([header, invoiceLine]);
    const result = csvFilter.filteredLines;
    expect(result).toEqual([header]);
  });

  it('removes lines with the same invoice number', () => {
    const invoiceLines = [lineFactory({}), lineFactory({})];
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
    const invoiceLine = lineFactory({});
    expect(() => CsvFilter.create([invoiceLine])).toThrow(
      'No header found'
    );
  });

  it('removes lines with none IVA and IGIC with values', () => {
    const invoiceLine = lineFactory({
      iva: emptyValue,
      igic: emptyValue,
    });
    const csvFilter = CsvFilter.create([header, invoiceLine]);
    const result = csvFilter.filteredLines;
    expect(result).toEqual([header]);
  });

  it('removes lines if IVA or IGIC has characters in it', () => {
    const invoiceLine = lineFactory({ iva: '2a1' });
    const csvFilter = CsvFilter.create([header, invoiceLine]);
    const result = csvFilter.filteredLines;
    expect(result).toEqual([header]);
  });

  const emptyValue = '';
  const lineFactory = ({
    net = '790',
    iva = '21',
    igic = emptyValue,
    cif = 'B76430134',
    nif = emptyValue,
  }): string => {
    const number: string = '1';
    const date: string = '02/05/2021';
    const gross: string = '1000';
    const description: string = 'ACER Laptop';
    const invoiceLine = [
      number,
      date,
      gross,
      net,
      iva,
      igic,
      description,
      cif,
      nif,
    ].join(',');
    return invoiceLine;
  };
});
