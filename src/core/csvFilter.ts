export class CsvFilter {
  constructor(private lines: string[]) {}

  public filteredLines() {
    return this.lines;
  }
}
