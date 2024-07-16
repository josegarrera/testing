export class CsvFilter {
  private constructor(private readonly lines: string[]) {}

  static create(lines: string[]) {
    return new CsvFilter(lines);
  }

  get filteredLines() {
    return this.lines.filter((line, index) => {
      const listLine = line.split(',');
      return index !== 0
        ? (listLine[5] === '' && listLine[6] !== '') ||
            (listLine[6] === '' && listLine[5] !== '')
        : true;
    });
  }
}
