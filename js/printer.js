class Printer{
  constructor(transaction){
    this._transaction = transaction;
  }


  get transactionBalance(){
    return this._transaction.balance
  }

}

module.exports = Printer;