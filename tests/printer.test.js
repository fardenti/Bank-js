var Printer = require('../js/printer');
var Transaction = require('../js/transaction');

beforeEach(() => {
  printer = new Printer(transaction = new Transaction());
});

test('printing transaction balance after 1000 deposit', () => {
    transaction.deposit("10/01/2012", 1000)
  expect(printer.transactionBalance).toEqual(1000);
});