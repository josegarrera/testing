import { toPascalCase } from '../core/pascalCase';

describe('Camel Case Kata', () => {
  it('allows empty text', () => {
    expect(toPascalCase('')).toBe('');
  });

  it('allows a capitalized word', () => {
    expect(toPascalCase('Foo')).toBe('Foo');
  });

  it('joins two capitalized words space separated', () => {
    expect(toPascalCase('Foo Bar')).toBe('FooBar');
  });

  it('joins many capitalized words spaces separated', () => {
    expect(toPascalCase('Foo Bar Zet')).toBe('FooBarZet');
  });

  it('joins many capitalized words hyphens separated', () => {
    expect(toPascalCase('Foo_Bar-Foo')).toBe('FooBarFoo');
  });

  it('capitalizes a lowercase word', () => {
    expect(toPascalCase('foo')).toBe('Foo');
  });

  it('joins many words separated by dashes and/or spaces', () => {
    expect(toPascalCase('foo_bar foo-bar')).toBe('FooBarFooBar');
  });

  it('joins many words separated by many dashes and/or many spaces capitalizing every word', () => {
    expect(toPascalCase('foo__bar  foo-_bar')).toBe('FooBarFooBar');
  });
});
