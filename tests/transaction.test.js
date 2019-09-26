const Transaction = require('../lib/transaction');
const MockDate = require('mockdate');

beforeEach(() => {
  transaction = new Transaction();
});

test('returns transaction log', () => {
  expect(transaction.createLog()).toEqual({});
});

test('formats date to mm/dd/yyyy', () => {
  MockDate.set('09-24-2019');
  expect(transaction.dateFormatter()).toEqual('09/24/2019');
});
