import { passwordValidator } from '../core/passwordValidator';
describe('Password Validator', () => {
  it('should validate when the password meet all criteria', () => {
    const password = 'ab_dE8';
    expect(passwordValidator(password)).toBe(true);
  });
  it('should not validate when it has less than 6 characters', () => {
    const password = 'aB8_';
    expect(passwordValidator(password)).toBe(false);
  });

  it('should not validate if it does not have a number', () => {
    const password = 'aBc_ef';
    expect(passwordValidator(password)).toBe(false);
  });

  it('should not validate if it has no uppercase', () => {
    const password = 'ab_cdef8';
    expect(passwordValidator(password)).toBe(false);
  });

  it('should not validate if it has no lowercase', () => {
    const password = 'ABC_D23EF';
    expect(passwordValidator(password)).toBe(false);
  });

  it('should not validate if it has no underscore', () => {
    const password = 'ABCD23eF';
    expect(passwordValidator(password)).toBe(false);
  });
});
