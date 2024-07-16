export class CsvFilter {
  constructor(private readonly lines: string[]) {}

  get filteredLines() {
    return this.lines;
  }
}
