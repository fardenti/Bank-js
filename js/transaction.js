class Transaction{
  constructor(){
    this._balance = 0;
    this.data = [];
  }
  get balance(){
    return this._balance;
  }

  deposit(date, credit, debit = 0){
    this.data.push(date, credit, debit)
    return this.data
  }

  updateBalance(){
    this._balance += this.data[1]
  }
}

module.exports = Transaction;