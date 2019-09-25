var Printer = require('../js/printer');
var Bank = require('../js/bank');

beforeEach(() => {
  printer = new Printer(bank = new Bank());
});

test('returns empty array', () => {
  expect(printer.printStatement).toEqual([]);
});
