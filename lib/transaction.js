class Transaction {
  constructor() {
    this._log = [];
  }

  createLog(date = new Date(), credit, debit, balance) {
    const log = {};
    return log;
  }

  dateFormatter(date = new Date()) {
    const day = date.getDate().toString().padStart(2, '0');
    const monthIndex = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return monthIndex + '/' + day + '/' + year;
  }
}
module.exports = Transaction;
