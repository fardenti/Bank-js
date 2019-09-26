const Transaction = require('../lib/transaction');
const MockDate = require('mockdate');

beforeEach(() => {
  transaction = new Transaction();
});

test('returns transaction log', () => {
  MockDate.set('09-24-2019');
  expect(
      transaction.createLog(new Date(), 1000, 0, 1000)
  ).toEqual(
      {
        'getDate': '09/24/2019',
        'credit': 1000,
        'debit': 0,
        'balance': 1000,
      }
  );
});
