

class Bank{
  constructor(){
    this._balance = 0;
    this._date = "";
    this._debit = "";
    this._credit = "";
    this._transaction = [];
  }

  transaction(date, credit, debit, balance){
    var log = {date: date, credit: credit, debit: debit, balance: balance};
    this._transaction.push(log);
  }

  deposit(credit){
    this.transaction(this._date = this.dateFormatter(new Date()), this._credit = credit, this._debit = 0, this._balance += credit)
    return this._transaction;
  }

  withdraw(debit){
    this.transaction(this._date = this.dateFormatter(new Date()), this._credit = 0, this._debit = debit, this._balance -= debit)
    return this._transaction;
  }

  dateFormatter(date = new Date()){
    const day = date.getDate().toString().padStart(2, "0");
    const monthIndex = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return monthIndex + '/' + day + '/' + year;
  }

}

module.exports = Bank;