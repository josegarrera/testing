interface IAccount {
  deposit(amount: number): void;
  withdraw(amount: number): void;
  printStatement(): void;
}

export class Money {
  private constructor(private readonly amount: number) {}
  static create(amount: number) {
    return new Money(amount);
  }
  get value() {
    return this.amount;
  }
}

export class Account implements IAccount {
  constructor(private amount: Money = Money.create(0)) {}
  deposit(amount: number): void {
    this.amount = Money.create(this.amount.value + amount);
  }
  withdraw(amount: number): void {}
  printStatement(): void {}
  get value() {
    return this.amount;
  }
}
