class Transaction{
  constructor(){
    this._balance = 0;
  }
  get balance(){
    return this._balance;
  }

  deposit(date, credit){
    this._balance += credit
  }

  withdraw(date, debit){
    this._balance -= debit
  }
}


module.exports = Transaction;