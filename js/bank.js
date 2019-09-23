function Bank() {
  this.balance = 0;
  this.statement = {}
}

  Bank.prototype.addsCredit = function(date, credit){
      let array = [date, credit, 0]
       return array;
      
  }

module.exports = Bank;