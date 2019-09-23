class Transaction{
  constructor(){
    this.balance = 0;
    this.data = [];
  }

  deposit(date, credit){
    this.data.push(date, credit, 0)
    return this.data
  }

  updateBalance(){
    this.balance += this.data[1]
    return this.balance;
  }
}

module.exports = Transaction;