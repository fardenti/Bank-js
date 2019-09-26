class Transaction {
  constructor() {
  }

  createLog(date = new Date(), credit, debit, balance) {
    var getDate = this._dateFormatter(date);
    return {getDate, credit, debit, balance};
  }

  
  _dateFormatter(date = new Date()) {
    const day = date.getDate().toString().padStart(2, '0');
    const monthIndex = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return monthIndex + '/' + day + '/' + year;
  }

}
module.exports = Transaction;
