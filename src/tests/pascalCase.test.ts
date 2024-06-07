import { toPascalCase } from '../core/pascalCase';

describe('Camel Case Kata', () => {
  it('should return empty string if the input is an empty string', () => {
    expect(toPascalCase('')).toBe('');
  });

  it('should return the same input when the input is a word with the first letter as uppercase', () => {
    expect(toPascalCase('Foo')).toBe('Foo');
  });

  it("should return 'FooBar' when the input is 'Foo Bar'", () => {
    expect(toPascalCase('Foo Bar')).toBe('FooBar');
  });

  it("should return 'FooBarZet' when the input is 'Foo Bar Zet'", () => {
    expect(toPascalCase('Foo Bar Zet')).toBe('FooBarZet');
  });

  it("should return 'FooBarFoo' when the input is 'Foo_Bar_Foo'", () => {
    expect(toPascalCase('Foo_Bar_Foo')).toBe('FooBarFoo');
  });

  it("should return 'Foo' when the input is 'foo'", () => {
    expect(toPascalCase('foo')).toBe('Foo');
  });

  it("should return 'FooBarFooBar' when the input is 'foo_bar foo-bar'", () => {
    expect(toPascalCase('foo_bar foo-bar')).toBe('FooBarFooBar');
  });

  it("should return 'FooBarFooBar' when the input is 'foo__bar  foo-_bar'", () => {
    expect(toPascalCase('foo__bar  foo-_bar')).toBe('FooBarFooBar');
  });
});
