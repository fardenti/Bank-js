const Transaction = require('../lib/transaction');

beforeEach(() => {
  transaction = new Transaction();
});

test('returns empty array', () => {
  expect(transaction.createLog()).toEqual({});
});
