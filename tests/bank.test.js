const Bank = require('../js/bank');

beforeEach(() => {
  bank = new Bank();
});

test('adds credit of 1000 on date 10012012', () => {
  expect(bank.addsCredit(10012012, 1000)).toEqual([10012012, 1000, 0]);
});
