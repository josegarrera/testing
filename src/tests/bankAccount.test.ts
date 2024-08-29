import { Account, Money } from '../core/bankAccount';
describe('Bank Account', () => {
  it('must increment the account balance in x dollars if it gets an x dollars deposit', () => {
    const initialBalance = Money.create(200);
    const account = new Account(initialBalance);
    const deposit = Money.create(300);
    account.deposit(Money.create(deposit.value).value);
    const expected = initialBalance.value + deposit.value;
    expect(account.value.value).toBe(expected);
  });
});
