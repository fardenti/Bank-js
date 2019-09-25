const Printer = require('../lib/printer');
const Bank = require('../lib/bank');

beforeEach(() => {
  printer = new Printer(bank = new Bank());
});

test('returns empty array', () => {
  expect(printer.printStatement).toEqual([]);
});
