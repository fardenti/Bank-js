class Transaction{
  constructor(){
    this._balance = 0;
  }
  get balance(){
    return this._balance;
  }

  deposit(credit){
    this._balance += credit
  }

  withdraw(debit){
    this._balance -= debit
  }
}


module.exports = Transaction;