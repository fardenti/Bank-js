const Transaction = require('../lib/transaction');
const Printer = require('../lib/printer');

class Bank {
  constructor(transaction = new Transaction(), printer = new Printer()) {
    this._transaction = transaction;
    this._printer = printer;
    this._balance = 0;
    this._logTransactions = [];
  }

  deposit(credit) {
   this._balance += credit;
   this._logTransactions.push(this._transaction.createLog(new Date(), credit, 0, this._balance))
  }

  withdraw(debit) {
    if (this._balance < debit) throw new Error('not enough funds, try another amount');
    this._balance -= debit;
    this._logTransactions.push(this._transaction.createLog(new Date(), 0, debit, this._balance))
  }

  printStatement(){
    console.log('date || credit || debit || balance');
    this._printer.createStatement(this._logTransactions)
  }
}

module.exports = Bank;
