const Transaction = require('../js/transaction');

beforeEach(() => {
  transaction = new Transaction();
});

test('balance is 0', () => {
  expect(transaction.balance).toEqual(0);
});

test('adds credit of 1000 with balance 0', () => {
  transaction.deposit(1000)
  expect(transaction.balance).toEqual(1000);
});


test('withdraws 500 with balance of 1000', () => {
  transaction.deposit(1000)
  transaction.withdraw(500)
  expect(transaction.balance).toEqual(500);
});
