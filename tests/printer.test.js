var Printer = require('../js/printer');
var Bank = require('../js/bank');

beforeEach(() => {
  printer = new Printer(bank = new Bank());
});

test('printing transaction balance after 1000 deposit', () => {
    bank.deposit(1000)
  expect(printer.transactionBalance).toEqual(1000);
});

