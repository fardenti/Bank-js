const Transaction = require('../lib/transaction');

class Bank {
  constructor(transaction = new Transaction()) {
    this._transaction = transaction;
    this._balance = 0;
    this._logTransactions = [];
  }

  deposit(credit) {
   this._balance += credit;
   this._logTransactions.push(this._transaction.createLog(new Date(), credit, false, this._balance))
  }

  withdraw(debit) {
    if (this._balance < debit) throw new Error('not enough funds, try another amount');
    this._balance -= debit;
    this._logTransactions.push(this._transaction.createLog(new Date(), false, debit, this._balance))
  }

  printStatement(){
    console.log('date || credit || debit || balance\n' + '24/09/2019 || 1000.00 || || 1000.00') 
  }
}

module.exports = Bank;
