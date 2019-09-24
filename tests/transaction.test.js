const Transaction = require('../js/Transaction');

beforeEach(() => {
  transaction = new Transaction();
});

test('balance is 0', () => {
  expect(transaction._balance).toEqual(0);
});

test('adds credit of 1000 on date "10/01/2012"', () => {
  transaction.deposit("10/01/2012", 1000)
  expect(transaction.balance).toEqual(1000);
});


test('withdraws 500 on date "11/01/2012"', () => {
  transaction.deposit("10/01/2012", 1000)
  transaction.withdraw("11/01/2012", 500)
  expect(transaction.balance).toEqual(500);
});
