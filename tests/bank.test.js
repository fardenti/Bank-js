const Bank = require('../lib/bank');
const MockDate = require('mockdate');

beforeEach(() => {
  bank = new Bank();
});

test('adds deposit to balance', () => {
  expect(bank.deposit(1000)).toEqual(1000);
});

test('withdraws amount from balance', () => {
  expect(bank.withdraw(500)).toEqual(-500);
});
// test('returns date in format of mm/dd/yyyy', () => {
//   MockDate.set('09-24-2019');
//   expect(bank.dateFormatter(new Date())).toEqual('09/24/2019');
// });

// test('returns transaction log when client adds credit of 1000 with balance 0', () => {
//   MockDate.set('09-24-2019');
//   expect(bank.deposit(1000)).toEqual([{date: '09/24/2019', credit: 1000, debit: 0, balance: 1000}]);
// });

// test('returns transaction log when client withdraws 200 with balance 1000', () => {
//   MockDate.set('09-24-2019');
//   bank._balance = 1000;
//   expect(bank.withdraw(200)).toEqual([{date: '09/24/2019', credit: 0, debit: 200, balance: 800}]);
// });

// test('returns transaction log when client withdraws 500 with balance 0', () => {
//   MockDate.set('09-25-2019');
//   expect(bank.withdraw(500)).toEqual([{date: '09/25/2019', credit: 0, debit: 500, balance: -500}]);
// });
