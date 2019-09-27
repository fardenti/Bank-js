const Printer = require('../lib/printer');

beforeEach(() => {
  printer = new Printer();
});

test('formatts the statement', () => {
  const log = jest.spyOn(global.console, 'log');
  const logs = [
    {getDate: '10/26/2019',
      credit: 1000, debit: 0,
      balance: 1000,
    },
    {getDate: '11/26/2019',
      credit: 2000,
      debit: 0, balance: 2000,
    },
  ];
  printer.createStatement(logs);
  expect(log).toHaveBeenCalledWith('10/26/2019 || 1000.00 || 0.00 || 1000.00');
  expect(log).toHaveBeenCalledWith('11/26/2019 || 2000.00 || 0.00 || 2000.00');
});
