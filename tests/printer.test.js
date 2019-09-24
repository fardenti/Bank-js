var Printer = require('../js/printer');
var Transaction = require('../js/transaction');

beforeEach(() => {
  printer = new Printer(transaction = new Transaction());
});

test('printing transaction balance after 1000 deposit', () => {
    transaction.deposit(1000)
  expect(printer.transactionBalance).toEqual(1000);
});

test('printing transaction balance after 200 withdraw', () => {
  transaction.deposit(1000)
  transaction.withdraw(200)
expect(printer.transactionBalance).toEqual(800);
});