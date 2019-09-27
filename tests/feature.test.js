const Bank = require('../lib/bank');
const MockDate = require('mockdate');

describe('Feature Test', () => {
  let bank;
  beforeEach(() => {
    bank = new Bank();
  });

  test('Prints statement makes for deposit of 1000', () => {
    const log = jest.spyOn(global.console, 'log');
    MockDate.set('09-24-2019');
    bank.deposit(1000);
    bank.printStatement();
    expect(log).toHaveBeenCalledWith(
        'date || credit || debit || balance'
    );
    expect(log).toHaveBeenCalledWith(
        '09/24/2019 || 1000.00 || 0.00 || 1000.00'
    );
  });

  test('Prints statement two deposits and one withdraw', () => {
    const log = jest.spyOn(global.console, 'log');
    MockDate.set('09-24-2019');
    bank.deposit(1000);
    bank.deposit(2000);
    bank.withdraw(500);
    bank.printStatement();
    expect(log).toHaveBeenCalledWith('date || credit || debit || balance');
    expect(log).toHaveBeenCalledWith(
        '09/24/2019 || 1000.00 || 0.00 || 1000.00'
    );
    expect(log).toHaveBeenCalledWith(
        '09/24/2019 || 2000.00 || 0.00 || 3000.00'
    );
    expect(log).toHaveBeenCalledWith(
        '09/24/2019 || 0.00 || 500.00 || 2500.00'
    );
  });
});
