const Printer = require('../lib/printer');

beforeEach(() => {
  printer = new Printer();
});

test('formatts the statement', () => {
  const log = jest.spyOn(global.console, 'log');
  const logs = [
    {getDate: '09/26/2019',
      credit: 1000, debit: 0,
      balance: 1000,
    },
    {getDate: '09/26/2019',
      credit: 2000,
      debit: 0, balance: 2000,
    },
  ];
  printer.createStatement(logs);
  expect(log).toHaveBeenCalledWith('09/26/2019 || 1000 || 0 || 1000');
  expect(log).toHaveBeenCalledWith('09/26/2019 || 2000 || 0 || 2000');
});
