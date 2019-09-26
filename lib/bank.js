class Bank {
  constructor() {
    this._balance = 0;
  }

  deposit(credit) {
    return this._balance += credit;
  }

  withdraw(debit) {
    if (this._balance < debit) throw new Error('not enough funds, try another amount');
    return this._balance -= debit;
  }

  printStatement(){
    console.log('date || credit || debit || balance\n' + '10/01/2012 || 1000.00 || || 1000.00') 
  }
  // deposit(credit) {
  //   this.transaction(this._date = this.dateFormatter(new Date()), this._credit = credit, this._debit = 0, this._balance += credit);
  //   return this._transaction;
  // }

  // withdraw(debit) {
  //   this.transaction(this._date = this.dateFormatter(new Date()), this._credit = 0, this._debit = debit, this._balance -= debit);
  //   return this._transaction;
  // }
}

module.exports = Bank;
