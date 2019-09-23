const bank = require('../js/bank');

test('adds 1000 balance of 0', () => {
  expect(bank()).toBe(1000);
});