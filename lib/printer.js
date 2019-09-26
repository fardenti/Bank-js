class Printer {
  constructor() {
  }
  
  createStatement(log) {
    var eachTransaction = log
    for (let i = 0; i < eachTransaction.length; i++) {
     console.log(eachTransaction[i].getDate + ' || ' + eachTransaction[i].credit + ' || ' + eachTransaction[i].debit + ' || ' + eachTransaction[i].balance);
    }
  }
}

module.exports = Printer;

