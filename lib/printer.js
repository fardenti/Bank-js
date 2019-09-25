class Printer {
  constructor(bank) {
    this._bank = bank;
    this._history = [];
  }

  get printStatement() {
    return this._history;
  }

  statement() {
    const obj = this._bank._transaction;
    for (let i = 0; i < obj.length; i++) {
      return this._history.push(obj[i].date + ' || ' + obj[i].credit + ' || ' + obj[i].debit + ' || ' + obj[i].balance + '\n');
    }
  }
}

module.exports = Printer;
