const Transaction = require('../js/Transaction');

beforeEach(() => {
  transaction = new Transaction();
});

test('adds credit of 1000 on date 10012012', () => {
  expect(transaction.deposit(10012012, 1000)).toEqual([10012012, 1000, 0]);
});

test('updates and returns balance', () => {
  transaction.deposit(10012012, 1000)
  transaction.updateBalance();
  expect(transaction.balance).toBe(1000);
});