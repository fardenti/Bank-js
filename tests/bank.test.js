const Bank = require('../lib/bank');

beforeEach(() => {
  bank = new Bank();
});

test('throws an error if withdraw amount is more than available balance', () => {
  expect(() => {
    bank.withdraw(500);
  }).toThrow('not enough funds, try another amount');
});
