function Bank() {
  this.balance = 0;
  this.data = []
}

  Bank.prototype.addsCredit = function(date, credit){
    this.data.push(date, credit, 0)
     return this.data
  }
 
  Bank.prototype.addsToBalance = function(){
    this.balance += this.data[1]
    return this.balance;
  }

module.exports = Bank;