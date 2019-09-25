class Printer{
  constructor(bank){
    this._transaction = bank;
  }

  get transactionBalance(){
    return this._transaction._balance
  }
}

module.exports = Printer;