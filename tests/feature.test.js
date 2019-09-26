const Bank = require('../lib/bank');
const MockDate = require('mockdate');

describe('Feature Test', () => {
  beforeEach(() => {
    bank = new Bank()
  });

  test('User makes a deposit of 1000 then prints statement', () => {
    const log = jest.spyOn(global.console, 'log')
    bank.deposit(1000);
    bank.printStatement();
    expect(log).toHaveBeenCalledWith(
      'date || credit || debit || balance\n' +
       '10/01/2012 || 1000.00 || || 1000.00'
    )
  })

});