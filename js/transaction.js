class Transaction{
  constructor(){
    this._balance = 0;
  }
  get balance(){
    return this._balance;
  }

  dateFormatter(date = new Date()){
    const day = date.getDate().toString().padStart(2, "0");
    const monthIndex = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return monthIndex + '/' + day + '/' + year;
  }

  deposit(credit){
    this._balance += credit
  }

  withdraw(debit){
    this._balance -= debit
  }
}


module.exports = Transaction;